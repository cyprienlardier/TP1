function Overview({platforme, indicateur , montant, pourcentage }) {
  return (
    <div className="overview">
      <p>{platforme}</p>
      <p>{indicateur}</p>
      <p>{montant}</p>
      <p>{pourcentage}</p>
    </div>
  );
}
export default Overview;