---
layout: post
title: CI Configuration
date: Wed Feb 28 10:29:05 MST 2018
---

## TravisCI
Getting Travis to build was a challenge, since Electron requires a screen to build. 

As of now, I have this as my travis config

{% highlight yaml %}
sudo: required
dist: trusty
language: c

matrix:
  include:
    - os : osx
    - os: linux
      env: CC=clang CXX=clang++ npm_config_clang=1
      compiler: clang

node_js:
  - 6

cache:
  directories:
    - node_modules

addons:
  apt:
    sources:
      - ubuntu-toolchain-r-test
    packages:
      - g++-4.8
      - icnsutils
      - graphicsmagick
      - libgnome-keyring-dev
      - xz-utils
      - xorriso
      - xvfb

install:
  - nvm install 6
  - npm install electron -g
  - npm install electron-builder -g
  - npm install
  - export DISPLAY=':99.0'
  - Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &

before_script:
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start &
  - sleep 3

script:
  - npm run dist
{%endhighlight%}


It builds it using [Electron Builder](https://www.electron.build/). 

## AppVeyor

My configuration for AppVeyor is

{% highlight yaml %}
platform:
  - x64

cache:
  - node_modules
  - '%APPDATA%\npm-cache'
  - '%USERPROFILE%\.electron'

install:
  - ps: Install-Product node 7 x64
  - npm install

build_script:
  - node_modules/.bin/electron-builder build
build: true
version: '{build}'
shallow_clone: true
clone_depth: 1
test_script:
  - npm run dist

environment:
  GH_TOKEN:
    secure: token_here
{%endhighlight%}

It builds the same as TravisCI, but you don't have to install the screen.
