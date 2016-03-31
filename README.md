# Photo Album

This is a simple vanilla React app, used for educational purposes.

## Set-up

1. Run ```bower install``` to install dependencies (React, jQuery, and lodash).
2. If you do not already have it installed on your computer, globally install live-server with ```sudo npm install -g live-server```. This will serve the pages from a server and provide live reloading of the browser when files are updated.
3. Run ```live-server``` to start the server. This will automatically open index.html in the browser.

### Notes

This repo uses Babel 5.6.15 rather than the current latest (6.1.19) because there is an undiagnosed bug in the later version that causes an error to show up in the console.

### Creating a "Hello World" React app

This is the barest of the bare bones for React. We will not even bundle the JavaScript files, to avoid the added confusion of Webpack.

Conceptually, these are the steps needed to create a React app.

1. You must serve the files from a server, rather than rendering them directly from the file system. This is so that Babel can transpile the ES6 syntax. ES6, and therefore Babel, is not technically needed for React, but it is so commonly used with React that we will include it here.

2. Create an index.html file with:
  * ```<div id="app"></div>``` inside the body tag
  * Babel as the first script
  * ```<script type="text/babel" src="components/App.js"></script>```

The ```div``` with id "app" will be where the entire React app gets rendered, using ReactDOM (see next step).

Babel will make the script type ```text/babel``` available to all subsequent scripts in your HTML file. It must appear in index.html before any script files that use ES6 syntax.

The App.js file will be the entry point for your React app.

3. Create a ```components``` folder and a file ```App.js``` inside it. Inside here, you will define a class called ```App``` that extends ```React.component```. This will simply return some JSX. Then use ReactDOM to actually render that component inside a specific DOM element, i.e. ```document.getElementById('#app')```.

## Components

There are three types of React components you will see.

### Functional components with no props

```
window.Gallery = () => (
  <p>This is a gallery with no custom title</p>
);
```

### Functional components with props

```
window.Gallery = (props) => (
  <p>This is a gallery with title { props.title }</p>
);
```

### Class components

```
class Gallery extends React.Component {
  render() {
    return <p>This is a gallery with title {this.props.title}</p>;
  }
}
window.Gallery = Gallery;
```

Start from the first, and move up only as necessary. Class components are needed only if you want to maintain *state* on that component.