'use strict';
class Dive{
    constructor(divedata){
        this.divedata = divedata;
    }

    dd(){
        return this.divedata["DD"];
    }

    

    /**
     * Creates a 
     * 
     * @returns 
     * @memberof Dive
     */
    toString(){
        return this.divedata["Dive Description"];
    }
}

module.exports = Dive;