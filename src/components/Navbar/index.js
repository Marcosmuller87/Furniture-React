import React from "react";
import { Nav, NavTitle, NavIcon } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavTitle>F&M Furniture</NavTitle>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
