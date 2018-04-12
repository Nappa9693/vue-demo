# vue-demo

> A Vue.js project

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

### Vue Pros
- Setup is not too painful. The vue-cli handles a lot of stuff such as webpack setup, unit testing setup, etc.
- Relatively simple compared to Angular (JS or latest). Very straightforward.
- Non opinionated for the most part. Easier to focus on the task at hand rather than trying to make the framework happy.
- Flexible. Not locked into any particular way of doing things for the most part.
- Can be used with Babel, Typescript, or even no transpiler at all.

### Vue Cons
- Reliance on third party libraries for functionality not built into the framework.
- No built in validation.
- No built in debouncing
- No built in ajax.
