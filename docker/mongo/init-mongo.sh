#!/bin/bash
echo "Running script for Replica set initiation"
sleep 10

mongo mongodb://mongo_1:27017 /scripts/init-rs.js
