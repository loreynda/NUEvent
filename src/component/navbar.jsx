import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
  ];

  const handleNavClick = (name, href) => {
    setActive(name);
    navigate(href);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        background: "#3b4696",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        height: "60px",
        boxSizing: "border-box",
        borderBottom: "2px solid #3b4696",
        margin: 0,
        fontFamily: "'Montserrat', sans-serif",
        position: "fixed", 
        left: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      {/* logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Uvent Logo" style={{ height: "2.5rem" }} />
      </div>
      {/* hamburger icon for mobile size */}
      <div className="navbar-hamburger" style={{
        display: "none",
        flexDirection: "column",
        cursor: "pointer",
      }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span style={{
          width: "25px",
          height: "3px",
          background: "#fff",
          margin: "4px 0",
          borderRadius: "2px"
        }}></span>
        <span style={{
          width: "25px",
          height: "3px",
          background: "#fff",
          margin: "4px 0",
          borderRadius: "2px"
        }}></span>
        <span style={{
          width: "25px",
          height: "3px",
          background: "#fff",
          margin: "4px 0",
          borderRadius: "2px"
        }}></span>
      </div>
      {/* nav */}
      <div
        className="navbar-links"
        style={{
          display: "flex",
          gap: "25rem",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={e => {
              e.preventDefault();
              handleNavClick(link.name, link.href);
            }}
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              textDecoration: "none",
              position: "relative",
              paddingBottom: "4px",
              cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {link.name}
            {active === link.name && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "3px",
                  background: "#fff",
                  borderRadius: "2px",
                }}
              />
            )}
          </a>
        ))}
      </div>
      {/* icon */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke="#fff" strokeWidth="2" />
          <circle cx="20" cy="16" r="6" stroke="#fff" strokeWidth="2" />
          <path d="M10 32c0-5 5-8 10-8s10 3 10 8" stroke="#fff" strokeWidth="2" fill="none" />
        </svg>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div
          className="navbar-mobile-menu"
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "100%",
            background: "#3b4696",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => {
                e.preventDefault();
                handleNavClick(link.name, link.href);
              }}
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.2rem",
                textDecoration: active === link.name ? "underline" : "none",
                margin: "1rem 0",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      {/* for responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .navbar-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;