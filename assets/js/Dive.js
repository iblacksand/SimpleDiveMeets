'use strict';
class Dive{
    constructor(divedata){
        this.dives = divedata["Dive Description"];
    }

    /**
     * Creates a 
     * 
     * @returns 
     * @memberof Dive
     */
    toString(){
        return this.dives;
    }
}

module.exports = Dive;