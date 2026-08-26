import React from "react";
import Markdown from "react-markdown";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { approachData } from "./data";

export function Approach({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const aproach = approachData;

  return (
    <section id={sectionId} className="section-container">
      {isSmallScreen ? (
        <>
          <div className="section-title">{aproach.title}</div>
          <div className="section-description">
            <Markdown>{aproach.markdown}</Markdown>
          </div>
          <img
            className="section-image"
            src={aproach.image.src}
            alt={aproach.image.alt}
            loading="eager"
          />
        </>
      ) : (
        <div className="row" style={{ display: "flex" }}>
          <img
            className="section-image"
            src={aproach.image.src}
            alt={aproach.image.alt}
            loading="eager"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              marginLeft: "50px",
            }}
          >
            <div className="section-title">{aproach.title}</div>
            <div className="section-description">
              <Markdown>{aproach.markdown}</Markdown>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
