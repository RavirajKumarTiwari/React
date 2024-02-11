# Blogs-Context

This project is a simple blog application built with React, demonstrating the use of the Context API for state management. Additionally, it utilizes the `useNavigate` and `useLocation` hooks for navigation within the application.

## What I Learned

### Context API

The Context API is a way to essentially create global variables that can be passed around in a React application. Unlike props, which are passed down the component tree, context is available to every component, regardless of its position in the tree.

### Creating Context

You can create a new context using `React.createContext()`. This returns an object with **Provider** and **Consumer** properties, which can be used to provide and consume context.

```javascript
const MyContext = React.createContext(defaultValue);
```

### Using Context Provider

The **Provider** component is used higher in the tree and accepts a **value** prop. The value prop will be passed to consuming components down the tree.

```javascript
<MyContext.Provider value={/* some value */}>
  {/* child components */}
</MyContext.Provider>
```

### Using Context Consumer

The **Consumer** component is used anywhere below the provider in the tree and accepts a function as a child. The function receives the current context value and returns a React node.

```javascript
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

### `useContext` Hook

React provides a `useContext` hook, which can be used to consume context without wrapping a component in a **Consumer** component. This can make the code cleaner and easier to understand.

In a functional component, you can use the `useContext` hook to access the context value.

### Using `useNavigate` and `useLocation`

`useNavigate` and `useLocation` are React hooks provided by the React Router library for navigating between different pages and accessing the current URL, respectively.

- `useNavigate`: This hook returns a navigate function that can be used to programmatically navigate to a different page in your application. For example:

```javascript
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/another-page');
  }

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
```

- `useLocation`: This hook returns the current location object, which contains information about the current URL. For example:

```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();

  return (
    <div>
      Current URL: {location.pathname}
    </div>
  );
}
```

## Project Structure

- The project is structured as follows:

- `src/contexts`: This directory contains the context definitions.
- `src/components`: This directory contains the React components.
- `src/App.js`: This is the entry point of the application.

### Running the Project

To run the project, use the following commands:

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm start
    ```

This project was a great way to learn about the Context API and how it can be used for state management in a React application. Additionally, integrating `useNavigate` and `useLocation` from React Router adds powerful navigation capabilities to the application, enhancing user experience and interactivity.