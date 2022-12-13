import { useEffect, useState } from "react";

import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnitmatedLetters";

import { getDocs } from "firebase/firestore";
import { dbRef } from "../../firebase";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(dbRef);
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    setLoading(false);
  };

  const renderPortfolioItems = (portfolio) => {
    return (
      <div className='portfolio-content'>
        {portfolio.map((elem, index) => {
          return (
            <div className='portfolio-item' key={`portfolio-item-${index}`}>
              <img src={elem.imageURL} alt={elem.itemName} />
              <h3>{elem.itemName}</h3>
              <p>{elem.itemDescription}</p>
              <button onClick={() => window.open(elem.itemURL)}>View Site</button>
            </div>
          );
        })}
      </div>
    );
  };

  return loading ? (
    <Loader type='line-scale' color='#fed002' width={500} />
  ) : (
    <>
      <h1>
        <AnimatedLetters stringArray={"Portfolio".split("")} startIndex={1} />
      </h1>

      {renderPortfolioItems(portfolio)}
    </>
  );
}

export default Portfolio;
