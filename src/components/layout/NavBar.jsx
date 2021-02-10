import React from "react";
//import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { connect } from "react-redux";

const NavBar = () => {
  return (
    <>
      <nav className="navbar d-flex " style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}} >
      
        <NavItems />
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(NavBar);
