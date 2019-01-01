#!/bin/bash
mongod --bind_ip 0.0.0.0 &
sleep 10 && node app.js 
