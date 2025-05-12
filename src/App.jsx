import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import TuoteLista from "./TuoteLista";
import OstosKori from "./OstosKori";

function App() {
  const [ostosKori, setOstosKori] = useState([]);

  const handleAddToCart = (tuote) => {
    setOstosKori((VanhaKori) => {
      const olemassaOleva = VanhaKori.find(
        (item) => item.tuoteID === tuote.tuoteID
      );

      if (olemassaOleva) {
        return VanhaKori.map((item) =>
          item.tuoteID === tuote.tuoteID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...VanhaKori, { ...tuote, quantity: 1 }];
    });
  };

  const poistaTuoteKorista = (tuoteID) => {
    setOstosKori((vanhaKori) =>
      vanhaKori
        .map((tuote) =>
          tuote.tuoteID === tuoteID
            ? { ...tuote, quantity: tuote.quantity - 1 }
            : tuote
        )
        .filter((tuote) => tuote.quantity > 0)
    );
  };

  const tyhjennaKori = () => setOstosKori([]);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Etusivu</Link>
          </li>
          <li>
            <Link to="/ostoskori">Ostoskori</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<TuoteLista onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/ostoskori"
          element={
            <div className="koriKohta">
              <OstosKori
                KoriTavarat={ostosKori}
                PoistaTuoteKorista={poistaTuoteKorista}
                tyhjennaKori={tyhjennaKori}
              />
            </div>
          }
        />
        <Route path="*" element={<h2>Sivua ei löytynyt!</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
