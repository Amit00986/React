import React from "react";

import ReactDOM from "react-dom/client";

// React.createElement  => object  => HTML(DOM)

console.log('"""""""""""""nvn',);

//JSX
const heading2 = (
    <h1
        id="title" key="h2">
        Namaste React
    </h1>
);

// React componenets

// 1. Functional componenets = NEW => that return jsx or react or componenets  or composition of react element.

// Name alaways start with capital letter
//  2. Class Based Componenets = OLD

const HeaderComponent = () => {
    return (<div><h1> Namaste Javascript</h1></div>)
};




const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root


//async defer
root.render(heading2);
