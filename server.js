/**
 * Created by rishabhkhanna on 07/10/17.
 */
const express = require('express');
const keypress = require('keypress');
const servo = require('pi-servo');
keypress(process.stdin);

process.stdin.on('keypress',function (ch, key) {
    console.log(key.name);
    if(key.name === 'h'){
        sv18.setDegree(180);
    }
});
process.stdin.setRawMode(true);


process.stdin.resume();