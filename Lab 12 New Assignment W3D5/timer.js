"use strict";
/* eslint-disable */
class Clock {
    constructor ({template}){
        this.output = template
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) hours = '0' + hours;
        let secs = date.getSeconds();
        if (secs < 10) hours = '0' + hours;

        this.output.replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(this.output);
    }
    stop () {
        clearInterval(timer);
    }
    start () {  
        setInterval(render(), 1000);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();