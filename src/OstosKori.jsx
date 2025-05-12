import "./OstosKori.css";

const OstosKori = ({ KoriTavarat, PoistaTuoteKorista, tyhjennaKori }) => {
  const total = KoriTavarat.reduce(
    (sum, tuote) => sum + tuote.hinta * tuote.quantity,
    0
  );

  return (
    <div className="OstosKoriKohta">
      <h2>Ostoskori</h2>
      {KoriTavarat.map((tuote) => (
        <div
          key={tuote.tuoteID}
          className="kori-tuote"
          onClick={() => PoistaTuoteKorista(tuote.tuoteID)}
          style={{ cursor: "pointer" }}
        >
          {tuote.tuotenimi} x {tuote.quantity} ({tuote.hinta} $)
        </div>
      ))}
      <h3>Yhteensä: {total} $</h3>
      <p>(Klikkaa tuotetta jos haluat poistaa yhden kappaleen)</p>
      <button onClick={tyhjennaKori}>Tyhjennä kaikki ostoskorista</button>
    </div>
  );
};

export default OstosKori;
