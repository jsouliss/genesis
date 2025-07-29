# Check if `react-scripts` is installed locally 
if(-not (npm list react-scripts --depth=0 | Select-String "react-scripts")) {
	npm install react-scripts
}

# Check if serve is installed globally 
if (-not(npm list -g serve --depth=0 | Select-String "serve")) {
	npm install -g serve 
}

# Start React development server
npm start 