# Check if `react-scripts` is installed locally 
if(-not (npm list react-scripts --depth=0 | Select-String "react-scripts")) {
	npm install react-scripts
}

# build the project 
npm run build 

# Check if serve is installed globally 
if (-not(npm list -g serve --depth=0 | Select-String "serve")) {
	npm install -g serve 
}

# Serve the build directory 
serve -s build