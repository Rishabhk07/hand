/**
 * Created by rishabhkhanna on 07/10/17.
 */
const express = require('express');
const keypress = require('keypress');
const servo = require('pi-servo');
keypress(process.stdin);

let sv18 = new servo(18);
let sv23 = new servo(23);
let sv24 = new servo(24);



process.stdin.on('keypress',function (ch, key) {
    console.log("-------")
    console.log(key.name);
    if(key.name === 'q'){
        sv18.open().then(function(){
            sv18.setDegree(0); // 0 - 180
        });
    }

    if(key.name === 'w'){
        sv18.open().then(function(){
            sv18.setDegree(180); // 0 - 180
        });
    }

    if(key.name === 'e'){
        sv23.open().then(function(){
            sv23.setDegree(0); // 0 - 180
        });

    }

    if (key.name === 'r'){
        sv23.open().then(function(){
            sv23.setDegree(180); // 0 - 180
        });
    }

    if(key.name === 't'){
        sv24.open().then(function(){
            sv24.setDegree(0); // 0 - 180
        });
    }

    if(key.name === 'y'){
        sv24.open().then(function(){
            sv24.setDegree(180); // 0 - 180
        });
    }

    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});
process.stdin.setRawMode(true);


process.stdin.resume();