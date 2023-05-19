
function App() {
  let firstName = "Ahmed Ayaz"
  let age = 18
  let profession = "Doctor"
  return (
    <>
      <p>My name is {firstName}</p>
      <p>My Age is {age}</p>
      <p>My Profession is {profession}</p>
      <p>Am i ready to make NIC ? {(age >= 18) ? "True" : "False"}</p>
    </>
  );
}

export default App;
