import './HomeSection4.css'
import CatEyes from '../../../assets/eye-wink.png'
import { useNavigate } from "react-router-dom";

function HomeSection2(){
    const navigate=useNavigate()
    return(
        <div>
            <div>
            <div >
                 <div className='home-s4-title' id="game3-id">Game 3</div>
                 <div className='home-s4-container' >
                   <div className='home-s4-inner-container'>
                       <div className='home-s4-left'>
                            <img src={CatEyes} className="home-s4-catimg"></img>
                       </div>
                       <div className='home-s4-right'>
                           <div className='home-s4-inst'>Instructions :</div>
                           <div className='home-s4-para'>Here is where we can play the Eye Winking Game. The player who blinks only one eye perfectly wins the game..</div>
                            <button className='home-s4-btn' id="game1-id"  onClick={()=>{
                                navigate('/Game3')
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