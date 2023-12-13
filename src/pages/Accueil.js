import React from "react";
import Navigation from "../components/Navigation";
import Logocomplet from "../components/Logocomplet";

const Accueil = () => {
  return (
    <div className="accueil">
      <Navigation />
      <div className="page">
        <Logocomplet />
        <div className="presentation">
          <h3>La Beauté Éternelle de la Pierre de Soignies</h3>
          <p>
            Vous cherchez à donner à votre projet de construction ou de
            rénovation une touche d'élégance intemporelle ?
          </p>
          <p>
            Vous êtes au bon endroit. Chez nous, nous sommes passionnés par
            l'art de la taille de pierre en utilisant la pierre de Soignies, une
            ressource naturelle d'une beauté rare et la création de briques de
            parement d'exception.
          </p>

          <p>
            Originaire de la région de Soignies en Belgique, la pierre que nous
            utilisons est réputée pour sa qualité exceptionnelle, sa durabilité
            et sa beauté inégalée. Elle a été utilisée dans la construction de
            certains des bâtiments les plus emblématiques du monde, et nous
            sommes fiers de continuer cette tradition.
          </p>

          <p>
            Que vous ayez besoin de briques de parement élégantes pour habiller
            votre façade ou que vous souhaitiez une pièce de sculpture sur
            pierre sur mesure pour orner votre espace, notre équipe d'artisans
            est prête à donner vie à vos idées.
          </p>

          <p>Projets Uniques, Résultats Inoubliables</p>

          <p>
            Explorez <a href="./realisations.html">nos réalisations</a> pour y
            découvrir des idées inspirantes.
          </p>
          <p>
            Que vous soyez un architecte, un entrepreneur ou un particulier,
            nous sommes votre partenaire de confiance pour tous vos besoins en
            taille de pierre et en briques de parement de qualité supérieure.
          </p>

          <p>
            Nous attendons avec impatience de travailler avec vous pour
            transformer vos idées en réalité. N'hésitez pas à{" "}
            <a href="./contact.html"> nous contacter</a> pour discuter de votre
            projet ou pour obtenir des informations complémentaires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
