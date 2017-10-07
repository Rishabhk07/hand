/**
 * Created by rishabhkhanna on 07/10/17.
 */
const express = require('express');
const keypress = require('keypress');
const servo = require('pi-servo');
keypress(process.stdin);
let sv18 = new servo(18);
process.stdin.on('keypress',function (ch, key) {
    console.log("-------")
    console.log(key.name);
    if(key.name === 'h'){
        sv18.open().then(function(){
            sv18.setDegree(100); // 0 - 180
        });

    }

    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});
process.stdin.setRawMode(true);


process.stdin.resume();