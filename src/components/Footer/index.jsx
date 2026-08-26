import React from "react";
import { footerData } from "./data";
import { InstagramLogo } from "../SvgImage/InstagramLogo";
import { LinkedinLogo } from "../SvgImage/LinkedinLogo";
import { GuidaPsicologiLogo } from "../SvgImage/GuidaPsicologiLogo";
import "./style.css";

export function Footer() {
  const footer = footerData;

  return (
    <div className="footer-container">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <a
          href={footer.instagramLogo.linkTo}
          target="_blank"
          rel="noreferrer"
          aria-label={footer.instagramLogo.alt}
          style={{ cursor: "pointer" }}
        >
          <InstagramLogo />
        </a>
        <a
          href={footer.linkedinLogo.linkTo}
          target="_blank"
          rel="noreferrer"
          aria-label={footer.linkedinLogo.alt}
          style={{ cursor: "pointer", marginLeft: "9px" }}
        >
          <LinkedinLogo />
        </a>
        <a
          href={footer.guidaPsicologiLogo.linkTo}
          target="_blank"
          rel="noreferrer"
          aria-label={footer.guidaPsicologiLogo.alt}
          style={{ cursor: "pointer", marginLeft: "6px" }}
        >
          <GuidaPsicologiLogo />
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} - Silvia Castelletti
      </div>
    </div>
  );
}
