import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description: 
            'The core UI building block - compose the user interface by'

    },
    {
        image: jsxImg,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the'
    },
    {
        image: propsImg,
        title: 'Props',
        description: 
            'Make components configurable (and therefore reusable) by '
    },
   {
        image: stateImg,
      title:'State',
        description: 
            'React-managed data which, when changed, causes the compone'
   }

];

export const EXAMPLES = {
    components: {
        title: 'Components',
        description:
            'Components are the building blocks of react',
        code: `
        function Welcome() {
            return <h1>Hello, World!</h1>;
     }`,
    },
    
    jsx: {
        title: 'JSX',
        description:
            'JSX is a syntax extension to Javascript.',
        code: `
        <div>
            <h1>Welcome {userName}</h1>
            <p>Time to learn React!</p>
        </div>`,
    },  
    props: {
        title: 'Props',
        description: 'Components accept arbitrary inputs called props. They are like functions',
        code: `
        // Example of using props in a functional component
        function Greeting(props) {
            return <h1>Hello, {props.name}!</h1>;
        }
        `
    },
    state: {
        title: 'State',
        description:
            'State allows React components to change their output over time ',
        code: `
    // Example of using state in a React component
    import React, { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    }`
    }
};