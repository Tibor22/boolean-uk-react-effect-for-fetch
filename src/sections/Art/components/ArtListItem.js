import SubjectList from "./SubjectList";

export default function ArtListItem({ art }) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt={art.artist_title}
        />
      </div>
      <h3>{art.artist_display}</h3>
      <p>Artist: {art.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <SubjectList art={art} />
    </li>
  );
}
