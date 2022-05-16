import ArtListItem from "./ArtListItem";
export default function ArtList({ arts }) {
  return (
    <ul className="art-list">
      {arts.map((art) => {
        return <ArtListItem key={art.id} art={art} />;
      })}
    </ul>
  );
}
