import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import { Page } from "../../components/Page";
import { Seo } from "../../components/Seo";
import { StructuredData } from "../../components/StructuredData";
import { WhoAmI } from "../../section/WhoAmI";
import { Work } from "../../section/Work";
import { Where } from "../../section/Where";
import { Contacts } from "../../section/Contacts";
import { Approach } from "../../section/Approach";

export default function Home() {
  return (
    <Page headerType="root">
      <Seo title="Psicologa Silvia Castelletti" />
      <StructuredData />
      <WhoAmI sectionId="chisono" />
      <Work sectionId="comelavoro" />
      <Approach sectionId="ilmioapproccio" />
      <Where sectionId="dovericevo" />
      <Contacts sectionId="contatti" />
      <ToastContainer
        theme="colored"
        position="bottom-right"
        autoClose={4000}
        transition={Slide}
      />
    </Page>
  );
}
