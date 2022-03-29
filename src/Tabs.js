import { useState } from "react";
import {NavLink} from 'react-router-dom';
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import "./App.css";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="mrgnbtm30px">
    <div className="flexcentr_hv"><h2 className="heading mrgnbtm15px"><NavLink to="/">Top Gainers &amp; Loosers</NavLink></h2><span className="bluelink"><NavLink to="/">More from Top Gainers</NavLink></span> </div>
    
    <div className="topgainertab mdeshcont"> 
      <div className="bloc-tabs">
        <div className="flexalignnav">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          TOP GAINERS
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          TOP LOSERS
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          TOP VOLUME
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          TOP VALUE
        </button>
        </div>

        <div className="flexcentr_hv">
      <select className="minimal">
        <option value="NSE">NSE </option>
        <option value="bse">BSE</option>
      </select>

      <select className="minimal">
        <option value="NSE">Daily </option>
        <option value="bse">BSE</option>
      </select>

      <select className="minimal">
        <option value="NSE">All </option>
        <option value="bse">BSE</option>
      </select>
    </div>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}><FirstTab /></div>
        <div className={toggleState === 2 ? "content  active-content" : "content"}><SecondTab /></div>
        <div className={toggleState === 3 ? "content  active-content" : "content"}><FirstTab /></div>
        <div className={toggleState === 4 ? "content  active-content" : "content"}><SecondTab /></div>

      </div>
      </div>
      </div>
    </>
  );
}

export default Tabs;