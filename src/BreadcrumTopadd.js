import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import bannerimg from './images/bannr970X90.gif';
const BreadcrumTopadd = () => {
    const  [btnState, setBtnState] = useState(false)
  function handleClick(){
    setBtnState(btnState => ! btnState)
  }
  let toggleClassCheck = btnState ? ' heightauto' : '';
    
    return (
        <>

<div className="container mrgnbtm15px">
            <div className="breadcrum"><ul><li><NavLink to = "/">Home</NavLink></li><li><NavLink to = "/">Markets</NavLink></li></ul></div>
          <div className="topbanner mgbt10"><img src={bannerimg} alt="" className="img-res" /></div>

          <div className="biztagsbox" className= {`biztagsbox${toggleClassCheck}`}>
            <ul className="biztags">
              <li><NavLink to = "/">Top gainers</NavLink></li>
              <li><NavLink to = "/">Top Loosers</NavLink></li>
              <li><NavLink to = "/">Highest stock</NavLink></li>
              <li><NavLink to = "/">Lowest stock</NavLink></li>
              <li><NavLink to = "/">level stock</NavLink></li>
              <li><NavLink to = "/">Out performers</NavLink></li>
              <li><NavLink to = "/">Under performers</NavLink></li>
              <li><NavLink to = "/">Advances and Declines</NavLink></li>
              <li><NavLink to = "/">Historical returns</NavLink></li>
              <li><NavLink to = "/">Under performers</NavLink></li>
              <li><NavLink to = "/">Advances and Declines</NavLink></li>
              <li><NavLink to = "/">Historical returns</NavLink></li>
              
            </ul>
            <div className="dot-elastic" onClick={handleClick}></div>
          </div>

        </div>
            
        </>
    )
}

export default BreadcrumTopadd;
