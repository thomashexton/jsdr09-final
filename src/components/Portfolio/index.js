import { useEffect, useState, useRef } from "react";

import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnitmatedLetters";

import { getDocs } from "firebase/firestore";
import { dbRef } from "../../firebase";

// import { CSSRulePlugin } from "gsap/all";
// import { Timeline, Power2 } from "gsap/gsap-core";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  // let container = useRef(null);
  // let image = useRef(null);
  // let tl = new Timeline();

  useEffect(() => {
    getPortfolio();

    // tl.to(container, 1, { css: { visibility: "visible" } });
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(dbRef);
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    setLoading(false);
  };

  const renderPortfolioItems = (portfolio) => {
    return (
      <>
        {portfolio.map((elem, index) => {
          return (
            <div className='portfolio-item'>
              <div className='portfolio-item-info'>
                <h3>{elem.itemName}</h3>
                <p>{elem.itemDescription}</p>
                <button onClick={() => window.open(elem.itemURL)}>View Site</button>
              </div>
              <div className='img-container' key={`portfolio-item-${index}`}>
                <img src={elem.imageURL} alt={elem.itemName} />
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return loading ? (
    <Loader type='line-scale' color='#fed002' width={500} />
  ) : (
    <div className='portfolio-content'>
      <div className='container'>
        <h1>
          <AnimatedLetters stringArray={"Portfolio".split("")} startIndex={1} />
        </h1>

        {renderPortfolioItems(portfolio)}
      </div>
    </div>
  );
}

export default Portfolio;
