import React from "react";

let color = {
    color : "dodgerBlue"
}

function Event({ name }) {

    function displayName(){
        alert("My name is : " + name);
    }
    return (
        <>
        <h3 style={color}>My name is : {name}</h3>
        <button onClick={displayName}>Display Name</button>
        </>
    );
}

export function Event2() {

    function DisplayName(name){
        alert("My name is : " + name)
    }

    return (
        <>
            <button onClick={() => DisplayName("Ahmed Ayaz")}>Display My Name</button>
        </>
    )
}


export default Event;
