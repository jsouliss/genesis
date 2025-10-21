#!/bin/bash 

# Check if `react-scripts` is installed locally 
if ! npm list react-scripts --depth=0 | grep -iq 'react-scripts'; then 
  npm install react-scripts 
fi 

# build the project 
npm run build 

# Check if serve is installed globally
if ! npm list -g serve --depth=0 | grep -iq 'serve'; then 
  npm install -g serve 
fi

# Serve the build directory
serve -s build 
