export default function FavouriteSlipsList({ favorites }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      {favorites && (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.advice}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
