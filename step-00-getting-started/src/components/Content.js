const myStyle = {
    width: "100%",
    height: "80vh",
    backgroundColor: "Yellow",
    color: "black",
    fontFamily : "Arial",
    textAlign: "center",
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
}

function Content(){
    return(
        <>
            <div className="content" style={myStyle}>
                <h1>I am the Content</h1>
            </div>
        </>
    )
}

export default Content;