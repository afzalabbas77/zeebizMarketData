import React from 'react';
import {NavLink} from 'react-router-dom';

const Newsfeed =(props) => {
    return(
        <>
           
               
                  <ul className="mostreadrgtbox">
                    <li>
                      <NavLink to={props.linktext}>
                      <img src={props.imgsrc} alt={props.title} />
                      <p>{props.para}</p>
                      </NavLink>
                    </li>

                   

                  </ul>
                
        </>
    );
}

export default Newsfeed;