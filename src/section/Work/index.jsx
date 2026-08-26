import React from "react";
import Markdown from "react-markdown";
import { workData } from "./data";
import { Card } from "../../components/Card";
import "./style.css";

export function Work({ sectionId }) {
  const work = workData;

  return (
    <section id={sectionId} className="section-container">
      <>
        <div className="section-title">{work.title}</div>
        <div className="section-description">
          <Markdown>{work.markdown}</Markdown>
        </div>
        <div className="row">
          {work.cards.map((card, index) => {
            return (
              <div className="col-sm-12, col-md-6 col-lg-4" key={index}>
                <Card
                  image={card.image}
                  title={card.title}
                  children={card.description}
                />
              </div>
            );
          })}
        </div>
      </>
    </section>
  );
}
