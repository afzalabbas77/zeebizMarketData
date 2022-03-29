import bannerimg from './images/add300X250.jpg';
import Newsfeed from './Newsfeed';
import NewsData from './NewsData';

function RightBody(){
    return(
        <>
        <div className="mrgnbtm30px bannercntr"><img src={bannerimg} alt="" /></div>

        <div className="mrgnbtm30px">
        <h2 className="heading mrgnbtm15px">Most Read</h2>
        {
                    /*{ Sdata.filter((val, ind) => (ind < 6)).map((val, ind) => { }*/
                    NewsData.map((val, ind) => {
                     return <Newsfeed key={val.Id}  imgsrc={val.imgsrc} title={val.title} para={val.para} linktext={val.linktext} />
                            })
                     }
        </div>

        <div className="mrgnbtm30px">
        <h2 className="heading mrgnbtm15px">Most Viewed</h2>
        {
                  
              NewsData.map((val, ind) => {
                     return <Newsfeed key={val.Id}  imgsrc={val.imgsrc} title={val.title} para={val.para} linktext={val.linktext} />
                            })
                     }
        </div>

        <div className="mrgnbtm30px">
        <h2 className="heading mrgnbtm15px">Editor’s Pick</h2>
        {
                    
              NewsData.map((val, ind) => {
                     return <Newsfeed key={val.Id}  imgsrc={val.imgsrc} title={val.title} para={val.para} linktext={val.linktext} />
                            })
                     }
        </div>


        </>
    );
}
export default RightBody;