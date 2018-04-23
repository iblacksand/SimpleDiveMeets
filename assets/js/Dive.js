'use strict';
class Dive{
    /**
     * Creates a new Dive object
     * @constructor
     * @param {JSON} divedata 
     */
    constructor(divedata){
        this.divedata = divedata;
    }

    /**
     * Get method for the DD
     * @returns {int} the DD of the dive
     */
    dd(){
        return this.divedata["DD"];
    }

    

    /**
     * Creates a string representation of the Dive, which is the Dive Description.
     * @returns {string} Dive description
     * @memberof Dive
     */
    toString(){
        return this.divedata["Dive Description"];
    }
}

module.exports = Dive;