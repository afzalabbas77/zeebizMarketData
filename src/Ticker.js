import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const tickerData = [{"id" : "0","SCRIPCODE":"1","VOLUME":"16596091","VALUE":"9668491637","PER_CHANGE":"1.6214706774159087","LAST_PRICE":"53823.36","COMPANY_NAME":"Sensex","CHANGE":"872.7300000000032","SYMBOL":"Sensex","T_CLASS":"greensensex","ABS_VOLUME":"16,596,091","ABS_VALUE":"9,66,84,91,637.00","ABS_LAST_PRICE":"53823.36","ABS_CHANGE":"872.73","ABS_PER_CHANGE":"1.62%"},{"id" : "1","SCRIPCODE":"NIFTY","VOLUME":"339810357","VALUE":"195276743487.05","PER_CHANGE":"1.5461","LAST_PRICE":"16130.75","COMPANY_NAME":"NIFTY 50","CHANGE":"245.6","SYMBOL":"NIFTY 50","T_CLASS":"redsensex","ABS_VOLUME":"339,810,357","ABS_VALUE":"1,95,27,67,43,487.05","ABS_LAST_PRICE":"16130.75","ABS_CHANGE":"245.60","ABS_PER_CHANGE":"1.54%"},{"id" : "2","SCRIPCODE":"BANKNIFTY","VOLUME":"210829724","VALUE":"55893854567.85","PER_CHANGE":"1.4332","LAST_PRICE":"35207.45","COMPANY_NAME":"NIFTY BANK","CHANGE":"497.45","SYMBOL":"NIFTY BANK","T_CLASS":"greensensex","ABS_VOLUME":"210,829,724","ABS_VALUE":"55,89,38,54,567.85","ABS_LAST_PRICE":"35207.45","ABS_CHANGE":"497.45","ABS_PER_CHANGE":"1.43%"},{"id" : "3","SCRIPCODE":"NIFTYMIDCAP","VOLUME":"689896662","VALUE":"75790444904.65","PER_CHANGE":"0.054","LAST_PRICE":"28265.65","COMPANY_NAME":"NIFTY Midcap 100","CHANGE":"15.25","SYMBOL":"NIFTY Midcap 100","T_CLASS":"redsensex","ABS_VOLUME":"689,896,662","ABS_VALUE":"75,79,04,44,904.65","ABS_LAST_PRICE":"28265.65","ABS_CHANGE":"15.25","ABS_PER_CHANGE":"0.05%"},{"id" : "4","SCRIPCODE":"2","VOLUME":"49754391","VALUE":"16932653717","PER_CHANGE":"1.3974066802411855","LAST_PRICE":"16476.95","COMPANY_NAME":"BSE 100","CHANGE":"230.25","SYMBOL":"BSE 100","T_CLASS":"greensensex","ABS_VOLUME":"49,754,391","ABS_VALUE":"16,93,26,53,717.00","ABS_LAST_PRICE":"16476.95","ABS_CHANGE":"230.25","ABS_PER_CHANGE":"1.39%"},{"id" : "5","SCRIPCODE":"19","VOLUME":"61142088","VALUE":"4617268141","PER_CHANGE":"0.228274489570276","LAST_PRICE":"27134","COMPANY_NAME":"BSE SMALLCAP","CHANGE":"61.93999999999869","SYMBOL":"BSE SMALLCAP","T_CLASS":"redsensex","ABS_VOLUME":"61,142,088","ABS_VALUE":"4,61,72,68,141.00","ABS_LAST_PRICE":"27134.00","ABS_CHANGE":"61.93","ABS_PER_CHANGE":"0.22%"}]

const options = {
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='arrow-left'></i>",
      "<i class='arrow-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,responsive: {
      0: {
        items: 1.2
      },
      600: {
        items: 4
      },
      1000: {
        items:5.5
      }
    }
};


const Ticker = () => {

    return(
        <>
        <div className="subnavbar">
                <div className="container">
                  <div className="bdugetsensex">
        
                      <div className="carousel-wrap">
        <OwlCarousel className= "slider-items owl-carousel" {...options}>
        {
            tickerData.map((val, ind)=>{
                return(
                    <div className = "item" key={val.id}>
                    <div className="sensextop">{val.COMPANY_NAME}</div>
                              <div className="sensexbottom">{val.LAST_PRICE} <span className={val.T_CLASS}>{val.ABS_PER_CHANGE}</span> <span className="colorsensexnormal">{val.ABS_PER_CHANGE}</span></div>
                    </div>
                )
            })
        }
        </OwlCarousel>
        </div>
                    </div>
                </div>
              </div>
        </>
    )



    /*const [users, setUsers] = useState([]);
    const getUsers = async () =>{
        try{
            const response = await fetch('https://api.zeenews.com/markets/v2/stock-ticker.json');
            const response = await fetch('https://jsonplaceholder.typicode.com/albumbs/1/photos');
            setUsers(await response.json());
        }catch(error){
            console.log("my error is " + error)
        }
        
    }
    useEffect(() => {
       getUsers();
    }, []);


    return (
        <>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
                      
        {
            users.map((val, ind)=>{
                return(
                    <div className="item" key={val.ind}>
                    
                    <p><Link to={val.SCRIPCODE}>{val.SCRIPCODE}</Link></p>
                    <img src={val.VOLUME} width="120" alt= "" />
                    </div>
                )
            }
            )
        }      
        
        </OwlCarousel>
        </>
    )*/
}
export default Ticker;