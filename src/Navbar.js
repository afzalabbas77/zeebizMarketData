import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './images/Zee Business.png';
import navdotimg from './images/3dotblack.svg';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
        <div>
<div className="navbar">
                <div className="container">
                  <ul className="navbarcon widthfirst">
                    <li>
                      <div className="hamburger navopen" id="hamburger-1" onClick={handleToggle}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </div>
                    </li>
                    <li>
                      <NavLink to = "/" title="">
                        <h1><img src={logo} alt="news" /></h1>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="navbarcon">
                    
                    <li><NavLink to ="/malayalam" title="home"><span className="homeicon"></span> </NavLink></li>
                  <li><NavLink to = "/">Personal Finance <i className="bizheadrdropicon"></i></NavLink>
                  <ul className="bizheaderdropdown">
                    <li><NavLink to = "/">PPF</NavLink></li>
                    <li><NavLink to = "/">Mutual Funds</NavLink></li>
                    <li><NavLink to = "/">Income tax</NavLink></li>
                    <li><NavLink to = "/">EPFO</NavLink></li>
                    <li><NavLink to = "/">Income Tax Calculator</NavLink></li>
                    <li><NavLink to = "/">Personal Loan Calculator</NavLink></li>
                    <li><NavLink to = "/">Car Loan Calculator</NavLink></li>
                    <li><NavLink to = "/">SIP calculator</NavLink></li>
                    <li><NavLink to = "/">SWP Calculator</NavLink></li>
                    <li><NavLink to = "/">MF Returns Calculator</NavLink></li>
                    <li><NavLink to = "/">Lumpsum Calculator</NavLink></li>
                  </ul>
                  </li>
                  <li><NavLink to = "/">India<i className="bizheadrdropicon"></i></NavLink>
                    <ul className="bizheaderdropdown">
                      <li><NavLink to = "/">Companies</NavLink></li>
                      <li><NavLink to = "/">Property</NavLink></li>
                      <li><NavLink to = "/">Startups</NavLink></li>
                      <li><NavLink to = "/">Uidai</NavLink></li>
                      
                    </ul>
                    </li>
                  <li><NavLink to = "/">World<i className="bizheadrdropicon"></i></NavLink>
                    <ul className="bizheaderdropdown">
                      <li><NavLink to = "/">Economy</NavLink></li>
                      <li><NavLink to = "/">Politics</NavLink></li>
                      <li><NavLink to = "/">Markets</NavLink></li>
                      
                      
                    </ul>
                    </li>
                  <li><NavLink to = "/">Economy<i className="bizheadrdropicon"></i></NavLink>
                    <ul className="bizheaderdropdown">
                      <li><NavLink to = "/">Aviation</NavLink></li>
                      
                      
                    </ul>
                    </li>
                  <li><NavLink to = "/">Tech<i className="bizheadrdropicon"></i></NavLink>
                    <ul className="bizheaderdropdown">
                      <li><NavLink to = "/">Mobile</NavLink></li>
                      <li><NavLink to = "/">Apps</NavLink></li>
                      
                      
                    </ul>
                    </li>
                  <li><NavLink to = "/">Auto<i className="bizheadrdropicon"></i></NavLink>
                    <ul className="bizheaderdropdown">
                      <li><NavLink to = "/">Cars</NavLink></li>
                      <li><NavLink to = "/">Bikes</NavLink></li>
                    </ul>
                    </li>
                  <li><NavLink to = "/" className="active">Markets<i className="bizheadrdropicon"></i></NavLink>
                    <ul className="bizheaderdropdown">
                      <li><NavLink to = "/">Commodities</NavLink></li>
                      <li><NavLink to = "/">Currency</NavLink></li>
                      
                    </ul>
                    </li>
                  <li><NavLink to = "/">Videos</NavLink></li>
                  <li><NavLink to = "/">Photos</NavLink></li>
                  <li><NavLink to = "/">Jobs</NavLink></li>
                  <li><NavLink to = "/">Authors</NavLink></li>
                  <li className="expandtopmenu"><NavLink to = "/"><img src={navdotimg} className="padimgtopbtm10px" alt = "" /></NavLink>
                    <ul className="bizheaderdropdown">
                      
                      <li><NavLink to = "/">Indian railways</NavLink></li>
                      <li><NavLink to = "/">Budget 2021</NavLink></li>
                    </ul>
                    </li>
                  
                  
                  </ul>
               
                  <ul className="navbarright">
                      <li><NavLink to = "/"><span className="languageicon"></span>Hindi</NavLink></li>
                    <li><NavLink to = "/" title=""><span className="searchicon"></span></NavLink></li>
                    <li><NavLink to = "/" title=""><span className="notificationicon"></span></NavLink></li>
                    <li><NavLink to = "/"><span className="livetvicon"></span></NavLink></li>
                      
                  </ul>
                </div>
                <div className="search" id="searchb">
                <input type="text" placeholder="Search on Zee Business..." className="input-search" /><button type="submit" className="searchButton">GO</button>
                </div>

<div className="container-menu">
                  <div className="container">
                 
                  <div className= {`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                  
                    <div className="menuitems">
                      <div>
                        <ul>
                          <li className="navheading"> <NavLink to = "/"> </NavLink> </li>
                          <li><NavLink to = "/">Top News</NavLink></li>
                          <li><NavLink to = "/">Latest News</NavLink></li>
                          <li><NavLink to = "/">Entertainment</NavLink></li>
                          <li><NavLink to = "/">Bollywood</NavLink></li>
                          <li><NavLink to = "/">Television</NavLink></li>
                          <li><NavLink to = "/">Music</NavLink></li>
                          <li><NavLink to = "/">Regional</NavLink></li>
                          <li><NavLink to = "/">Movie</NavLink></li>
                          <li><NavLink to = "/">Review</NavLink></li>
                          <li><NavLink to = "/">Hollywood</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="navcontactbox">
                      <ul>
                        <li><NavLink to = "/">CONTACT.</NavLink></li>
                        <li><NavLink to = "/">PRIVACY POLICY.</NavLink></li>
                        <li><NavLink to = "/">LEGAL.</NavLink></li>
                        <li><NavLink to = "/">COMPLAINT.</NavLink></li>
                        <li><NavLink to = "/">OUR TEAM.</NavLink></li>
                        <li><NavLink to = "/">INVESTOR INFO.</NavLink></li>
                        <li><NavLink to = "/">ADVERTISE With Us.</NavLink></li>
                        <li><NavLink to = "/">CAREERS.</NavLink></li>
                        <li><NavLink to = "/">WHERE TO WATCH</NavLink></li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
</div>
        </div>
    )
}
 
export default Navbar;