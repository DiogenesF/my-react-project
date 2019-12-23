import React from "react";

function MyContent() {

    return (
        <>
            <h3 style={{
                position: "absolute",
                zIndex: "2",
                left: "27%",
                color: "white",
            }}><strong>Be welcome to my webpage!!</strong></h3>
            <div style={{
                height: "100%",
                width: "100%",
                position: "relative",
                opacity: "0.8"
            }}>
                <img src="assets/images/computer-science.png" alt="back" height="700px" width="100%" />
                <div>
                    <h6 style={{
                        position: "absolute",
                        zIndex: "2",
                        color: "white",
                        marginTop: "-230px",
                        marginRight: "150px",
                        marginLeft: "150px"
                        
                    }}><strong>This is a website that I created using React just to practice and
                    test my knowledge using this library. I didn't want to spend too much
                    time with the design so I decided to keep it as simples as possible xD</strong>
                    </h6>
                </div>
            </div>
            <div style={{
                position: "absolute",
                left: "50%",
                marginLeft: "-150px",
                top: "50%",
                marginTop: "-100px"
            }}>
                <img src="assets/images/my_image.png" alt="me" height="300" width="300"></img>
            </div>
        </>
    );
}

export default MyContent;