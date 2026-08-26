import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { headerData } from "./data";
import "./style.css";

export function Header() {
  const header = headerData;

  return (
    <>
      <Navbar
        className="header-container"
        bg="#a51080"
        expand="lg"
        collapseOnSelect={true}
      >
        <img
          className="navbar-icon"
          src={header.image.src}
          alt={header.image.alt}
          loading="eager"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            {header.header.map((nav, index) => {
              return (
                <div key={index}>
                  <Nav.Link href={nav.url}>{nav.label}</Nav.Link>
                </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
