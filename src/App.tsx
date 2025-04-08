import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Chip,
} from "@heroui/react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

const App = () => {
  const BuildLogo = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#d6336c"
      >
        <path d="M666-163 475-354q-20 8-43.5 12.5T384-337q-99 0-169.5-70T144-576q0-38 9.5-72t28.5-63l144 144 70-70-144-144q29-17 62.5-26t69.5-9q100 0 170 71t70 170q0 23-4.5 42.5T607-493l195 194q14 14 14 34.5T802-230l-68 67q-14 14-34 14t-34-14Z" />
      </svg>
    );
  };
  const navBar = (
    <Navbar isBordered maxWidth="2xl" style={{paddingLeft: '20px', paddingRight: '20px'}}>
      <NavbarBrand style={{ display: "flex", gap: "10px" }}>
        <p style={{ fontSize: "30px", fontFamily: "Inter, sans-serif" }}>Chatly</p>
        <Chip
          size="sm"
          variant="dot"
          color="success"
          style={{ marginTop: "5px" }}
        >
          1.0.0
        </Chip>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        {" "}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Chip color="danger" variant="flat" startContent={<BuildLogo />}>
            Made with React and Tailwind
          </Chip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.hdqwalls.com/download/satoru-gojo-the-strongest-domain-un-1440x900.jpg')",
      }}
    >
      <div style={{ backdropFilter: "blur(500px)", minHeight: "100vh" }}>
        {navBar}
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
