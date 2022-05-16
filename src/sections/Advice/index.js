import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState([]);
  const [addAdvice, setAddAdvice] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  }, [addAdvice]);

  const addToFavorite = () => {
    setFavorites((prevFavorites) => [...prevFavorites, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        setAddAdvice={setAddAdvice}
        advice={advice}
        addAdvice={addAdvice}
        addToFavorite={addToFavorite}
      />
      <FavouriteSlipsList favorites={favorites} />
    </section>
  );
}

export default AdviceSection;
