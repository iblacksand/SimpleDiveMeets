---
date: Thu Mar  1 09:53:52 MST 2018
layout: post
title: Development Plans
tags: development
---

* TOC
{:toc}


These are features that I plan on implementing in SimpleDiveMeets

### Google Form Sign-ups

This would allow for divers to sign up for meets online. It would have to follow a template.

There would be some restrictions, such as a strict number of dives.

### Live Sign-ups

Planning on making some form of live updating dive changes. For instance, if a diver needs to change their dives, they can change it on their phone instantly. The diver can still ask the dive meet manager, but they can handle it themselves. It should allow for less chaos before a meet starts.

I plan to host it on [Heroku](https://www.heroku.com/) with [Socket.io](https://socket.io/).

### Report Maker

I plan on making a report maker. It would generate reports for the announcer, check in sheets, and a verification of dives. I have made a similar program called SheetMaker that used LaTeX, but it would require a lot of user installations. It will use the default Chromium print dialog.