import React from "react";
import Markdown from "react-markdown";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { whoamiData } from "./data";
import "./style.css";

export function WhoAmI({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const whoami = whoamiData;

  return (
    <section className="section-whoami">
      <div id={sectionId} className="section-container">
        {isSmallScreen ? (
          <>
            <div className="section-title">{whoami.title}</div>
            <div className="section-description ">
              <Markdown>{whoami.markdown}</Markdown>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <a href={whoami.ctaButton.url}>
                <button type="button" className="btn btn-secondary">
                  {whoami.ctaButton.label}
                </button>
              </a>
              <a href={whoami.ctaButton2.url}>
                <button type="button" className="btn btn-info">
                  {whoami.ctaButton2.label}
                </button>
              </a>
            </div>

            <img
              className="section-image"
              src={whoami.image.src}
              alt={whoami.image.alt}
              loading="eager"
            />
          </>
        ) : (
          <div className="row" style={{ display: "flex" }}>
            <div style={{ flex: "1", marginRight: "50px" }}>
              <div className="section-title">{whoami.title}</div>
              <div className="section-title" style={{ marginTop: "-30px" }}>
                {whoami.subtitle}
              </div>
              <div className="section-description">
                <Markdown>{whoami.markdown}</Markdown>
              </div>

              <div style={{ display: "flex", marginTop: "30px" }}>
                <a href={whoami.ctaButton.url} style={{ marginRight: "20px" }}>
                  <button type="button" className="btn btn-secondary">
                    {whoami.ctaButton.label}
                  </button>
                </a>
                <a href={whoami.ctaButton2.url}>
                  <button type="button" className="btn btn-info">
                    {whoami.ctaButton2.label}
                  </button>
                </a>
              </div>
            </div>

            <img
              className="section-image"
              src={whoami.image.src}
              alt={whoami.image.alt}
              loading="eager"
            />
          </div>
        )}
      </div>
    </section>
  );
}
