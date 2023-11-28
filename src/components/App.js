import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
//console.log(user);

function App() {
  console.log({user})
const {bio ,city ,color ,links ,name} =user
console.log(bio);
  return (
    <div>
      <NavBar />
      <Home color={color}name={name}city={city}/>
      <About links={links} bio={bio}/>
    </div>
  );
}

export default App;
