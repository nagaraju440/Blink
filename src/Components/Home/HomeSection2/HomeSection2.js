import './HomeSection2.css'
import CatEyes from '../../../assets/trail1.gif'
import { useNavigate } from "react-router-dom";

function HomeSection2(){
    const navigate=useNavigate()
    return(
        <div>
            <div>
            <div >
                 <div className='home-s2-title' id="game1-id">Game 1</div>
                 <div className='home-s2-container' >
                   <div className='home-s2-inner-container'>
                       <div className='home-s2-left'>
                            <img src={CatEyes} className="home-s2-catimg"></img>
                       </div>
                       <div className='home-s2-right'>
                           <div className='home-s2-inst'>Instructions :</div>
                           <div className='home-s2-para'>We can play the Eye Blink Game here. You must 
blink your eyes quickly so that we can count 
each blink. Whoever gets the most points
in one 30 seconds wins the game.</div>
                            <button className='home-s2-btn' id="game1-id"  onClick={()=>{
                                navigate('/Game1')
                            }} >Play Game</button>
                       </div>
                   </div>
                 </div>
             </div>
            </div>
        </div>
    )
}
export default HomeSection2;