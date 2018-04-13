# vue-demo

This project was made in a brief period of time (mostly spare time) as a tech demo for Vue to showcase
how a project would be done in Vue (file structuring, unit testing, debouncing, dependency injection, etc.).
Please note that this is not a fully complete project and is more of a starting point.

## Build Setup

Be sure to create the wwwroot folder in the project directory (not solution directory) if it is missing and also do the following steps before attempting to run the project.

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# build for production and view the bundle analyzer report (optional step)
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

To run the project simply fire up Visual Studio and click the green run button. If you are using dotnet core with Visual Studio Code then you should be able to use
the commands:
```
dotnet restore
dotnet build
dotnet run
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Notes
(These are just notes and are not steps that are needed for running this project)

To use SASS you need to install sass-loader and node-sass. Then in the template
you set style tags lang attribute to "sass" and be sure to use the scoped
attribute as well.

You will need to modify the config/index.js -> build settings to ensure that the built
files are placed in the wwwroot folder.

Ajax functionality was implemented using whatwg-fetch package.

Debouncing was implemented using lodash package.
