import LeftBody from './LeftBody';
import RightBody from './RightBody';

function Body(){
    return(
        <>

        <div className="container">
        <div className="flex-row">
              <div className="flex-col75"><LeftBody></LeftBody></div>
              <div className="flex-col25"><RightBody></RightBody></div>
              </div>
        </div>

        </>
    )
}

export default Body;
 