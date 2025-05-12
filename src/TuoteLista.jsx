import React, { useEffect, useState } from "react";
import "./TuoteLista.css";
const TuoteLista = ({ onAddToCart }) => {
  const [tuotteet, setTuotteet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/tuote") // HAEN tällä TUOTTEET datapalvelimesta
      .then((res) => {
        if (!res.ok) throw new Error("Verkkovirhe");
        return res.json();
      })
      .then((data) => setTuotteet(data))
      .catch((error) => console.error("Virhe tuotteiden haussa:", error));
  }, []);
  return (
    <div>
      <h2 className="otsikko">Tuotteet</h2>
      <div className="TuoteKohta">
        {tuotteet.map((tuote) => (
          <div key={tuote.tuoteID} className="tuotekortti">
            <h4>{tuote.tuotenimi}</h4>
            <p>Hinta: {tuote.hinta} $</p>
            <p>Valmistaja: {tuote.valmistaja}</p>
            <p>Tyyppi: {tuote.tyyppi}</p>
            <p>Määrä: {tuote.tuotemäärä}</p>
            <p>Värit: {tuote.värit.join(", ")}</p>
            <p>
              <strong>Lisätiedot:</strong>
            </p>
            <ul>
              <li>Malli: {tuote.lisätiedot?.malli}</li>
              <li>Energialuokka: {tuote.lisätiedot?.energialuokka}</li>
              <li>Kommentti: {tuote.lisätiedot?.kommentti}</li>
            </ul>
            <button onClick={() => onAddToCart(tuote)}>
              Lisää ostoskoriin
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuoteLista;
