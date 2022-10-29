const myStyle = {
    width: "100%",
    height: "10vh",
    backgroundColor: "DodgerBlue",
    color: "white",
    fontFamily : "Arial",
    textAlign: "center",
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
}

function Navbar(){
    return(
        <>
            <div className="navbar" style={myStyle}>
                <h1>This is Navbar</h1>
            </div>
        </>
    )
}

export default Navbar;