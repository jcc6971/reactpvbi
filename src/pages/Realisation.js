import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Logocomplet from "../components/Logocomplet";
import ImageGallery from "react-image-gallery";

const Realisation = () => {
  const [idlist, setIdlist] = useState("");
  const [imggstyle, setImggstyle] = useState("none");
  function resetimgg() {
    setImggstyle("none");
  }

  const images = [
    {
      original: "./images/pierres/" + idlist + "1.jpg",
      thumbnail: "./images/pierres/" + idlist + "1.jpg",
    },
    {
      original: "./images/pierres/" + idlist + "2.jpg",
      thumbnail: "./images/pierres/" + idlist + "2.jpg",
    },
    {
      original: "./images/pierres/" + idlist + "3.jpg",
      thumbnail: "./images/pierres/" + idlist + "3.jpg",
    },
    {
      original: "./images/pierres/" + idlist + "4.jpg",
      thumbnail: "./images/pierres/" + idlist + "4.jpg",
    },
    {
      original: "./images/pierres/" + idlist + "5.jpg",
      thumbnail: "./images/pierres/" + idlist + "5.jpg",
    },
    {
      original: "./images/pierres/" + idlist + "6.jpg",
      thumbnail: "./images/pierres/" + idlist + "6.jpg",
    },
  ];

  return (
    <div className="realisation">
      <div className="navreal">
        <Navigation />
      </div>
      <div className="logo">
        <Logocomplet />
      </div>
      <div className="imgg" style={{ display: imggstyle }}>
        <ImageGallery
          items={images}
          onErrorImageURL="./images/pierres/comingsoon.jpg"
        />
        <div className="croix">
          <p
            onClick={() => {
              resetimgg();
            }}
          >
            &#215;
          </p>
        </div>
      </div>
      <div className="txtpage">
        <p>
          Découvrez l'art exceptionnel de la taille de pierre sur mesure, où
          chaque œuvre est une création unique façonnée avec passion.
        </p>
        <p>
          Explorez également notre sélection de{" "}
          <a href="#brique"> nos briques de parement</a> pour donner vie à des
          projets qui allient tradition et modernité.
        </p>
        <p>
          Bienvenue dans notre monde de la pierre, où la perfection artisanale
          rencontre la diversité des possibles.
        </p>

        <p>
          {" "}
          <a href="./contact.html"> Contactez-nous</a> pour concrétiser votre
          projet, donner vie à votre création...
        </p>
        <p className="note">
          Veuillez noter que les photos des produits peuvent différer de la
          réalité en raison de variations d'éclairage, de couleur et
          d'affichage.
        </p>
      </div>
      <div className="general">
        <div className="menu">
          <h1>Nos réalisations</h1>
          <div className="exterieur">
            <div className="h2" id="appui">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Appuis de fenetre
              </h2>
            </div>
            <div className="h2" id="bal">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Boîtes aux lettres
              </h2>
            </div>
            <div className="h2" id="chapeau">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Chapeaux de pilastre{" "}
              </h2>
            </div>
            <div className="h2" id="dallage">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Dallage
              </h2>
            </div>
            <div className="h2" id="dessusmu">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Dessus de murs
              </h2>
            </div>
            <div className="h2" id="entourageporte">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Entourages de porte{" "}
              </h2>
            </div>
            <div className="h2" id="escaliermarche">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Escaliers et marches{" "}
              </h2>
            </div>
            <div className="h2" id="frise">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Frises
              </h2>
            </div>
            <div className="h2" id="linteau">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Linteaux
              </h2>
            </div>
            <div className="h2" id="margelle">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Margelles de piscine
              </h2>
            </div>
            <div className="h2" id="pierrebatiment">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Pierres de Bâtiment
              </h2>
            </div>
            <div className="h2" id="soubassement">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Soubassements
              </h2>
            </div>
            <div className="h2" id="tablebanc">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Tables et Bancs{" "}
              </h2>
            </div>
          </div>
          <h3>Salle de bain</h3>
          <div className="sdb">
            <div className="h2" id="vasque">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Vasques{" "}
              </h2>
            </div>
            <div className="h2" id="baignoire">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Baignoires{" "}
              </h2>
            </div>
            <div className="h2" id="receveur">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                douches{" "}
              </h2>
            </div>
          </div>
          <h3>Cuisine</h3>
          <div className="cuisine">
            <div className="h2" id="evier">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Eviers{" "}
              </h2>
            </div>
            <div className="h2" id="pdt">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Plans de travail{" "}
              </h2>
            </div>
          </div>
          <h3>Créations</h3>
          <div className="mobilier">
            <div className="h2" id="gravure">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Gravures{" "}
              </h2>
            </div>
            <div className="h2" id="creation">
              <h2
                onClick={(e) => {
                  setIdlist(e.target.parentElement.id);
                  setImggstyle("block");
                }}
              >
                Décorations{" "}
              </h2>
            </div>
          </div>
          <h3>Brique de parement</h3>

          <div className="h2" id="brique">
            <h2
              onClick={(e) => {
                setIdlist(e.target.parentElement.id);
                setImggstyle("block");
              }}
            >
              Briques de parement{" "}
            </h2>
            <a href="#" className="btn btn-primary">
              Haut de Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
