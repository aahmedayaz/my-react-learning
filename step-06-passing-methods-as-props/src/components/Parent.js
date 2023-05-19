import React from "react";
import Child from "./Child";

function Parent() {

    let Greet = (name) => {
        alert(`Hello Sir ${name}`)
    }

    return (
        <>
            <button onClick={() => Greet("Ayaz")}>Greetings</button>
            <Child call={Greet}/>
        </>
    );
}

export default Parent;
