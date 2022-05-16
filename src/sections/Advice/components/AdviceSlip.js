export default function AdviceSlip({
  setAddAdvice,
  advice,
  addAdvice,
  addToFavorite,
}) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      {advice && <p>{advice.advice}</p>}
      <button onClick={() => setAddAdvice(!addAdvice)}>Get More Advice</button>
      <button onClick={addToFavorite}>Save to Favourties</button>
    </section>
  );
}
