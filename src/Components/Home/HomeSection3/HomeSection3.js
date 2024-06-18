import './HomeSection3.css'
import CatEyes from '../../../assets/trail2.gif'
import { useNavigate } from "react-router-dom";

function HomeSection2(){
    const navigate=useNavigate()
    return(
        <div>
            <div>
            <div >
                 <div className='home-s3-title'>Game 2</div>
                 <div className='home-s3-container'>
                   <div className='home-s3-inner-container'>
                       <div className='home-s3-left'>
                            <img src={CatEyes} className="home-s3-catimg"></img>
                       </div>
                       <div className='home-s3-right'>
                           <div className='home-s3-inst'>Instructions :</div>
                           <div className='home-s3-para'>We can play the Eye Open Game here.Until you give up, you must keep your eyes open. 
                           so that we can count the score up to the blink of your eye
                            The game is won by whoever scores the most points .</div>
                            <button className='home-s3-btn' id="game2-id" onClick={()=>{
                                navigate('/Game2')
                            }}  >Play Game</button>
                       </div>
                   </div>
                 </div>
             </div>
            </div>
        </div>
    )
}
export default HomeSection2;