import {useState,useEffect,useRef} from 'react'
import './Game1Video.css'
import { useLocation } from 'react-router-dom';
import CounterWithMediaPipe from '../../WebCam/CounterWithMediaPipe';
import Game1 from '../../WebCam/Game1';
import { useNavigate } from "react-router-dom";
function Game1Video(props){
    const navigate=useNavigate()
    // console.log("props is")
    var [sec,setSec]=useState(5)
    const ref = useRef(null);
    const [startVideo,setStartVideo]=useState(0);
    var [Blinks,setBlinks]=useState(0)
    const [TimerCompleted,setTimerCompleted]=useState(0)
    const location=useLocation()
    console.log("props is",props,"location is",location)
   function StartVideo(){
       setStartVideo(1)
       setTimeout(()=>{
        VideoStarted()
       },3000)
    // return ()=>  clearInterval(s)
   }
   function VideoStarted(){
    var s= setInterval(()=>{
        setSec(sec-1)
        sec=sec-1
   console.log("i am from set Interval",sec)
    if(sec==0){
       clearInterval(s)
       setTimerCompleted(1)
    }
     },1000)
   }
   const updateBlinks=()=>{
          setBlinks(Blinks+1)
          Blinks=Blinks+1
   }
   const NextPerson=()=>{
       setTimerCompleted(0)
       const data=location.state.data
       data[location.state.index].score=Blinks;
       data[location.state.index].completed=1;
    //    console.log("data is",data,data[location.state.index+1])
    navigate("/Game1/"+data[location.state.index+1].name,{state:{data:data,index:location.state.index+1,currentPerson:data[location.state.index+1]}})
          
   }
   useEffect(()=>{
//    console.log(document.getElementById("v").width,"is widthhhh")
// console.log('width', ref.current ? ref.current.offsetWidth : 0);



   })
    return(
        <div>
            <div>
            <div className='game1-video-bg'>
                    <div className='game1-video-center'>
                    <div className='game1-video-names-text'>It's {location.state.currentPerson.name} turn . . .</div>                             
                    <div className='game1-video-container'>
                    {
                        TimerCompleted===0?<div>
                            {
                        startVideo===0?<div>
                             <div className='game1-video-container1' ref={ref} id="v">
                         <button  className='home-video-btn' onClick={StartVideo} >Start Round</button>
                     </div>
                        </div>:<div >
                            <Game1 width={ref.current ?ref.current.offsetWidth:'auto'} height={ref.current ?ref.current.offsetHeight:'auto'} updateBlinks={updateBlinks} VideoStarted={VideoStarted}/>
                            {/* <CounterWithMediaPipe/> */}
                        </div>
                    }
                        </div>:<div>
                        <div>
                             <div className='game1-video-container1' >
                         <button  className='home-video-btn' onClick={NextPerson} >Start NextPerson</button>
                     </div>
                        </div>
                        </div>
                    }
                    </div>
                     <div className='game1-video-sec'>00:{sec}<sub className='sub-text'>Sec</sub></div>
                     <div className='game1-score-text'>Score : {Blinks}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Game1Video