# React

React is a JavaScript library for building user interfaces. It lets you create reusable UI components that can handle data and events. React is used by some of the most popular websites in the world, such as Facebook, Instagram, Netflix, and Airbnb.

## Getting Started

To use React, you need to have **Node.js** and npm installed on your computer. You can download them from [here](https://nodejs.org/en/download).

To create a new React project, you can use the `create-react-app` tool, which sets up everything you need. To install it, run this command in your terminal:

```bash
npm install -g create-react-app
```

Then, to create a new project called `my-app`, run this command:

```bash
create-react-app my-app
```

This will create a folder called `my-app` with all the files and dependencies you need. To start the development server, run this command inside the `my-app` folder:

```bash
npm start
```

This will open your app in your browser at [http://localhost:3000](^2^).

## How to Use

To use React, you need to write your UI components in JSX, a syntax that looks like HTML but allows you to use JavaScript expressions. For example, this is a simple component that renders a greeting message:

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

You can use this component in another component like this:

```jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Ravi" />
      <Greeting name="Raj" />
    </div>
  );
}
```

This will render two greeting messages on the screen.

You can also use hooks to manage the state and effects of your components. For example, this is a component that counts the number of clicks:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

This will render a button that increments a counter on each click.

You can learn more about React from the [official documentation](https://react.dev/).

## Features

Some of the features of React are:

- Declarative: React makes it easy to create interactive UIs by describing how your components should look and behave. React will update and render your components when your data changes.
- Component-Based: React lets you build your UI from isolated and reusable components. Each component has its own state and logic, and can be composed with other components.
- Fast: React uses a virtual DOM to minimize the number of DOM manipulations. It also uses techniques such as batching, memoization, and lazy loading to optimize the performance of your app.
- Flexible: React can be used with any JavaScript library or framework. You can also use it with various tools and languages, such as TypeScript, Babel, Webpack, and Sass.
