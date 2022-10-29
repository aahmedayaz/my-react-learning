const myStyle = {
    width: "100%",
    height: "10vh",
    backgroundColor: "black",
    color: "white",
    fontFamily : "Arial",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
}

function Footer(){
    return(
        <>
            <div className="footer" style={myStyle}>
                <h1>This is Footer</h1>
            </div>
        </>
    )
}

export default Footer;