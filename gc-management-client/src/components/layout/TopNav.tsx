import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const TopNav: React.FC = () => {
  return (
    <div className="App">
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Golf Master</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default TopNav;
