import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export default function NotFound() {
  return (
    <Page>
      <Helmet>
        <title>Pagina non trovata</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="section-container">
        <div className="section-title">Pagina non trovata</div>
        <p>
          Mi dispiace 😔&#44; non è possibile trovare la pagina che stai
          cercando.
        </p>
        <Link to="/">Torna indietro</Link>.
      </div>
    </Page>
  );
}
