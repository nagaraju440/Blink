import {useEffect,useState} from 'react'
import './Game1Complete.css'
import { useLocation ,useNavigate} from 'react-router-dom';
import Congrats from '../../assets/congratsSvg.svg'
function Game1Complete(){
    const location=useLocation();
    const navigate=useNavigate();
    const [name,setName]=useState('')
    console.log("data is and score is",location.state)
    useEffect(()=>{
        var x=location.state;
        var maxName=""
        var max=0;
        Object.values(x).map((l,i)=>{
            // console.log("l is",l)
              if(l.score>max){
                  max=l.score;
                  setName(l.name)
                 maxName=l.name
              }
        })
        // setName(maxName)
        // console.log("hehehehehhehehehehhehehe",maxName)
    })
    return(
        <div>
            <div>
                <div className='game1-home-bg'>
                    <div className='center'>
                             <div className='home-s2-title'>Game Completed</div>
                             <div className='home-s2-title'>Congratulations {name} Won The Game</div>
                             <div className='game1-home-select-container'>
                            <img src={Congrats}></img>
                            <button className='home-s3-btn'  style={{marginTop:30}} onClick={
                                ()=>{
                                    navigate("/Game1")
                                }
                            } >Play Again</button>
                             </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Game1Complete;