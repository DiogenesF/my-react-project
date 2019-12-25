import React from "react";


function SignUp() {


    return (
        <div className="container">
            <h5>By creating an account here, you will be able to keep your own to-do list and access it
                anytime, and it's only available to you :D</h5>

                <form class="col s6">
                    <div class="row col s6"> 
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div class="row col s6"> 
                        <label>Email</label>
                        <input type="email" />
                    </div> 
                </form>
        </div>
    );
}

export default SignUp;