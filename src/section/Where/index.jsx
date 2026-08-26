import React from "react";
import Markdown from "react-markdown";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { whereData } from "./data";

export function Where({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const where = whereData;

  return (
    <section id={sectionId} className="section-container">
      {isSmallScreen ? (
        <>
          <div className="section-title">{where.title}</div>
          <div className="section-description">
            <Markdown>{where.markdown}</Markdown>
          </div>
          <img
            className="section-image"
            src={where.image2.src}
            alt={where.image2.alt}
            loading="eager"
          />
        </>
      ) : (
        <div className="row" style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              marginRight: "50px",
            }}
          >
            <div className="section-title">{where.title}</div>
            <div className="section-description">
              <Markdown>{where.markdown}</Markdown>
            </div>
          </div>
          <img
            className="section-image"
            src={where.image2.src}
            alt={where.image2.alt}
            loading="eager"
          />
        </div>
      )}
    </section>
  );
}
