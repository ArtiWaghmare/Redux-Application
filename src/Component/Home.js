
import React from "react";
import NavBar from "./Nav/NavBar";

const Home = () => {
    return ( 
        <div className="home">
          <NavBar/>
            <h2 className="text">welcome to User</h2>
            <img src="./images/user.jpg" width={"30%"}/>
        </div>
     );
}
 
export default Home;