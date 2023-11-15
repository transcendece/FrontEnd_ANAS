import React from 'react'
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Define the server URL
const serverUrl = 'http://localhost:5000'; // Replace with your server URL

// Create a socket connection
export const socket = io('http://localhost:5000', {transports : ["websocket"]});
