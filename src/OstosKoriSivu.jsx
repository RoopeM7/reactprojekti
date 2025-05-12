import React from "react";
import OstosKori from "./OstosKori";

const OstoskoriSivu = ({ ostosKori, poistaTuoteKorista, tyhjennaKori }) => {
  return (
    <div>
      <button onClick={tyhjennaKori}>Tyhjennä kaikki ostoskorista</button>
      <OstosKori
        KoriTavarat={ostosKori}
        PoistaTuoteKorista={poistaTuoteKorista}
      />
    </div>
  );
};

export default OstoskoriSivu;
