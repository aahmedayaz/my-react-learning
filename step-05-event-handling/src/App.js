import React from "react";
import Event , {Event2} from "./EventBindingFunctionalComponent/Event";
import Events , {Events2} from "./EventBindingClassComponent/Events";

function App() {
  return (
    <>
      <h1>Event Binding in Functional Component</h1>
      <Event name="Ahmed" />
      <Event2/>
      <h1>Event Binding in Class Component</h1>
      <Events name="Muhammad" />
      <Events2 />
    </>
  );
}

export default App;
