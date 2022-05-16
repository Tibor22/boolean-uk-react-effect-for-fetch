import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [arts, setArts] = useState(null);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        setArts(data.data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">{arts && <ArtList arts={arts} />}</ul>
      </div>
    </section>
  );
}

export default ArtsSection;
