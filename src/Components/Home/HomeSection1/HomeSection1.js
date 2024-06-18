import Navbar from '../../Navbar/Navbar';
import './HomeSection1.css'
import GameImg from '../../../assets/trial4.png'

function HomeSection1(){
   
    return (
        <div>

            <div>
                <div >
                        {/* <Navbar/> */}
                        <div className='home-s1-container'>
                            <div className='home-s1-inner-container'>
                                <div className='home-s1-left'>
                                    <div className='home-s1-text1'>Blink is a social platform where you and your friends may play fun eye games.</div>
                                    <div className='home-s1-text1'>Go play the games and have a lot of fun.</div>
                                    <div className='home-s1-text1'><a onClick={()=>{
                                        const violation = document.getElementById("game1-id"); 
                                        window.scrollTo({
                                          top:violation.offsetTop,
                                          behavior:"smooth"
                                      });
                                      
                                    }} >Game 1</a></div>
                                    <div className='home-s1-text1'><a 
                                     onClick={()=>{
                                        const violation = document.getElementById("game2-id"); 
                                        window.scrollTo({
                                          top:violation.offsetTop,
                                          behavior:"smooth"
                                      });
                                      
                                    }}
                                    >Game 2</a></div>
                                       <div className='home-s1-text1'><a 
                                     onClick={()=>{
                                        const violation = document.getElementById("game3-id"); 
                                        window.scrollTo({
                                          top:violation.offsetTop,
                                          behavior:"smooth"
                                      });
                                      
                                    }}
                                    >Game 3</a></div>
                                </div>
                                <div className='home-s1-right'>
                                    <img  className='home-s1-game-img' src={GameImg}></img>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}
export default HomeSection1;