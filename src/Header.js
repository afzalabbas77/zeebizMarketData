import {NavLink} from 'react-router-dom';
import Ticker from './Ticker';
import Navbar from './Navbar';
import BreadcrumTopadd from './BreadcrumTopadd';
import sunnyimg from './images/sunny.png';

function Header() {
  
  return (
    
    <>
          <header>
          <div className="lang-bg">
            <div className="top-container">
              <div className="lang-block">
                <NavLink to ="/" target="_blank" title="English News">English</NavLink>
                <NavLink to ="/hindi" target="_blank" title="Hindi News">हिन्दी</NavLink>
                <NavLink to ="/marathi" target="_blank" title="Marathi News">मराठी</NavLink>
                <NavLink to ="/bengali" target="_blank" title="Bengali News">বাংলা</NavLink>
                <NavLink to ="/tamil" target="_blank" title="Tamil News">தமிழ்</NavLink>
                <NavLink to ="/malayalam" target="_blank" title="Malaylam News">മലയാളം</NavLink>
                <NavLink to ="/gujarati" target="_blank" title="Gujarati News">ગુજરાતી</NavLink>
                <NavLink to ="/telugu" target="_blank" title="Telugu News">తెలుగు</NavLink>
                <NavLink to ="/kannada" target="_blank" title="Kannada News" >ಕನ್ನಡ</NavLink>
                <NavLink to ="/hindi/zeeodisha" target="_blank" title="Odisha News">ଓଡ଼ିଶା</NavLink>
                <NavLink to ="/hindi/zeephh" target="_blank" title="Punjabi News">ਪੰਜਾਬੀ</NavLink>
                <NavLink to ="https://www.zeebiz.com/" target="_blank" className="active">Business</NavLink>
                <NavLink to ="https://www.bgr.in/" target="_blank" rel="nofollow">Tech</NavLink>
                <NavLink to ="https://www.wionews.com/" target="_blank" rel="nofollow">World</NavLink>
                <NavLink to ="https://www.bollywoodlife.com/" target="_blank" rel="nofollow">Movies</NavLink>
                <NavLink to ="https://www.thehealthsite.com/" target="_blank" rel="nofollow">Health</NavLink>
              </div>
              <div className="social-b">
                <ul>
                  <li className="weather"><img src={sunnyimg} alt="" /><NavLink to = "/" className="thi">Thiruvananthapuram <span>37°C</span><i className="weathericon"></i></NavLink></li>
                  <li><span className="pr">Petrol Rs.81.20</span><span className="dr">Deisel Rs. 79.12</span></li>
                  <li><NavLink to = "/" className="topfbicon"></NavLink><NavLink to = "/" className="toptwittericon"></NavLink><NavLink to = "/" className="toputbeicon"></NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="myheader">
            <div id="header" className="navi">
              
                <Navbar></Navbar>
         
             
              <Ticker></Ticker>
              
            </div>
          </div>
        </header>
        <BreadcrumTopadd />
    </>
  );
}

export default Header;
