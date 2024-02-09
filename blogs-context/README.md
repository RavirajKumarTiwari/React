# Blogs-Context

This project is a simple blog application built with React, demonstrating the use of the Context API for state management. The Context API is a component structure provided by the React framework, allowing you to share state and methods with other components without passing props down manually at every level.

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

### How can I access the context value in a functional component using the useContext hook?

- React also provides a `useContext` hook, which can be used to consume context without wrapping a component in a **Consumer** component. This can make the code cleaner and easier to understand.

- In a functional component, you can use the `useContext` hook to access the context value. Here's how you can do it:

- First, you need to import the `useContext` hook from React and the context you want to access.

```javascript
    import React, { useContext } from 'react';
    import MyContext from './MyContext';
```

- Then, inside your functional component, you can call `useContext` and pass in the context you want to access. This will return the current value of that context.

```javascript
    function MyComponent() {
        const contextValue = useContext(MyContext);

    // Now you can use contextValue in your component
        return (
          <div>
            {contextValue}
          </div>
        );
    }
```

- In this example, `contextValue` will hold the current value of `MyContext`. You can use this value in your component as needed. Remember that whenever the provider of `MyContext` updates, your component will re-render with the new value.

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

This project was a great way to learn about the Context API and how it can be used for state management in a React application. It's a powerful tool that can make passing data around your application much easier.
