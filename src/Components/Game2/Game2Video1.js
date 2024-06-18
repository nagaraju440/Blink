import {useState,useEffect,useRef} from 'react'
// import './Game1Video.css'
import { useLocation } from 'react-router-dom';
import CounterWithMediaPipe from '../../WebCam/CounterWithMediaPipe';
import Game1 from '../../WebCam/Game1';
import { useNavigate } from "react-router-dom";
import * as Facemesh from '@mediapipe/face_mesh'
import {FaceMesh}  from '@mediapipe/face_mesh'
import * as cam  from '@mediapipe/camera_utils';
import Webcam from 'react-webcam';
var s=null;
function Game2Video1(props){
    const navigate=useNavigate()
    // console.log("props is")
    var [sec,setSec]=useState(0)
    const ref = useRef(null);
    const [startVideo,setStartVideo]=useState(0);
    var [Blinks,setBlinks]=useState(0)
    const [TimerCompleted,setTimerCompleted]=useState(0)
    const location=useLocation()
    var [data,setData]=useState(location.state.data)
    var [index,setIndex]=useState(location.state.index)
    var [currentPerson,setCurrentPerson]=useState(location.state.currentPerson)
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    var [closeEyeFrameCounter,setCloseEyeFrameCounter]=useState(0)
    var [TotalBlinks,setTotalBlinks]=useState(0)
    const [isLoaded,setIsLoaded]=useState(0)
    var [isClosed,setIsClosed]=useState(0)
    const [gameOver,setGameOver]=useState(0)
    var camera=null;
    const connectors=window.drawConnectors;
    // console.log("coonetors",connectors)

    function EuclideanDistance(p1,p2){
        var x1=p1.x,y1=p1.y;
        var x2=p2.x,y2=p2.y;
        var dist=Math.sqrt((x2-x1)**2+(y2-y1)**2)
        return dist;
    }
    function onResults(results){
        // console.log(results.multiFaceLandmarks)
        // console.log(Facemesh.FACEMESH_RIGHT_EYE)
        //  console.log(results)
        canvasRef.current.width=webcamRef.current.video.videoWidth;
        canvasRef.current.height=webcamRef.current.video.videoHeight;
        const canvasElement=canvasRef.current;
        const canvasCtx=canvasElement.getContext("2d")
        canvasCtx.save()
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(
            results.image, 0, 0, canvasElement.width, canvasElement.height);
            // console.log("resuluts image",results.image)
        if (results.multiFaceLandmarks) {
          for (const landmarks of results.multiFaceLandmarks) {
            // console.log(landmarks[100])
           
            // console.log(Facemesh.FACEMESH_RIGHT_EYE)

            var r=Object.values(Facemesh.FACEMESH_RIGHT_EYE)
            // console.log("r is",Object.values(r)[0])
            var rl={
              x:landmarks[Object.values(r)[0][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(r)[0][1]].y*(webcamRef.current.video.videoHeight)
            }
            var rr={
              x:landmarks[Object.values(r)[15][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(r)[15][1]].y*(webcamRef.current.video.videoHeight)
            }
            var ru={
              x:landmarks[Object.values(r)[12][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(r)[12][1]].y*(webcamRef.current.video.videoHeight)
            }
            var rd={
              x:landmarks[Object.values(r)[4][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(r)[4][1]].y*(webcamRef.current.video.videoHeight)
            }
            // var k1=Object.values(r)[15];
            // var k2=Object.values(r)[12];
            // var k3=Object.values(r)[4];
            // canvasCtx.beginPath();
            // canvasCtx.arc(landmarks[k[0]].x*(webcamRef.current.video.videoWidth), landmarks[k[1]].y*(webcamRef.current.video.videoHeight),5, 0, 2 * Math.PI);
            // canvasCtx.stroke();
            // canvasCtx.beginPath();
            // canvasCtx.arc(landmarks[k1[0]].x*(webcamRef.current.video.videoWidth), landmarks[k1[1]].y*(webcamRef.current.video.videoHeight),5, 0, 2 * Math.PI);
            // canvasCtx.stroke();
            // canvasCtx.beginPath();
            // canvasCtx.arc(landmarks[k2[0]].x*(webcamRef.current.video.videoWidth), landmarks[k2[1]].y*(webcamRef.current.video.videoHeight),5, 0, 2 * Math.PI);
            // canvasCtx.stroke();
            // canvasCtx.beginPath();
            // canvasCtx.arc(landmarks[k3[0]].x*(webcamRef.current.video.videoWidth), landmarks[k3[1]].y*(webcamRef.current.video.videoHeight),5, 0, 2 * Math.PI);
            // canvasCtx.stroke();

            canvasCtx.beginPath();
            canvasCtx.moveTo(rl.x,rl.y);
            canvasCtx.lineTo(rr.x,rr.y);
            canvasCtx.strokeStyle = '#ff0000';
            canvasCtx.stroke();

            canvasCtx.beginPath();
            canvasCtx.moveTo(ru.x,ru.y);
            canvasCtx.lineTo(rd.x,rd.y);
            canvasCtx.strokeStyle = '#ff0000';
            canvasCtx.stroke();

          //  ...................................Left eye........................................
            var l=Object.values(Facemesh.FACEMESH_LEFT_EYE)
            var ll={
              x:landmarks[Object.values(l)[0][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(l)[0][1]].y*(webcamRef.current.video.videoHeight)
            }
            var lr={
              x:landmarks[Object.values(l)[15][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(l)[15][1]].y*(webcamRef.current.video.videoHeight)
            }
            var lu={
              x:landmarks[Object.values(l)[12][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(l)[12][1]].y*(webcamRef.current.video.videoHeight)
            }
            var ld={
              x:landmarks[Object.values(l)[4][0]].x*(webcamRef.current.video.videoWidth),
              y:landmarks[Object.values(l)[4][1]].y*(webcamRef.current.video.videoHeight)
            }

            canvasCtx.beginPath();
            canvasCtx.moveTo(ll.x,ll.y);
            canvasCtx.lineTo(lr.x,lr.y);
            canvasCtx.strokeStyle = '#ff0000';
            canvasCtx.stroke();

            canvasCtx.beginPath();
            canvasCtx.moveTo(lu.x,lu.y);
            canvasCtx.lineTo(ld.x,ld.y);
            canvasCtx.strokeStyle = '#ff0000';
            canvasCtx.stroke();
            

             var rhd=EuclideanDistance(rl,rr);
             var rvd=EuclideanDistance(ru,rd)
             var lhd=EuclideanDistance(ll,lr);
             var lvd=EuclideanDistance(lu,ld);
             var rRatio=rhd/rvd;
             var lRatio=lhd/lvd;
             var ratio=(rRatio+lRatio)/2;
            //  console.log("ratio is",ratio)
            if(ratio>5.3){
                // TotalBlinks=TotalBlinks+1;
                // setTotalBlinks(TotalBlinks)
                // alert("ypou closed the eye")
                // closeEyeFrameCounter=closeEyeFrameCounter+1
                // setCloseEyeFrameCounter(closeEyeFrameCounter)
                console.log("hehheheh ypu closed the eyeyeyeyyeyey",closeEyeFrameCounter)
                isClosed=1
                setIsClosed(1)
            }else{
                // console.log(closeEyeFrameCounter,"is value")
                // if(closeEyeFrameCounter>=1){
                //     TotalBlinks=TotalBlinks+1;
                //     setTotalBlinks(TotalBlinks)
                //     closeEyeFrameCounter=0
                //     updateBlinks()
                //     setCloseEyeFrameCounter(closeEyeFrameCounter)
                // }
            }

            // r.map((l,i)=>{
            //   canvasCtx.beginPath();
            //   canvasCtx.arc(landmarks[l[0]].x*(webcamRef.current.video.videoWidth), landmarks[l[1]].y*(webcamRef.current.video.videoHeight), 5, 0, 2 * Math.PI);
            //   canvasCtx.stroke();
            // })
            // var r=Object.values(Facemesh.FACEMESH_LEFT_EYE)
            // r.map((l,i)=>{
            //   canvasCtx.beginPath();
            //   canvasCtx.arc(landmarks[l[0]].x*(webcamRef.current.video.videoWidth), landmarks[l[1]].y*(webcamRef.current.video.videoHeight), 5, 0, 2 * Math.PI);
            //   canvasCtx.stroke();
            // })
            // console.log(Object.values(Facemesh.FACEMESH_RIGHT_EYE)[0][0])
            // console.log("landmarks is",landmarks[159])
            //  console.log("right eye cordinates are",Facemesh.FACEMESH_RIGHT_EYE,landmarks)
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION,
            //                {color: '#C0C0C070', lineWidth: 1});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {color: '#FF3030'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_IRIS, {color: '#FF3030'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {color: '#30FF30'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_IRIS, {color: '#30FF30'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {color: '#E0E0E0'});
            // connectors(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {color: '#E0E0E0'});
          }
        }
        // if(isLoaded===0){
        //   setIsLoaded(1)
        //   // props.VideoStarted()
        // }
        canvasCtx.restore();
        
    }
    useEffect(()=>{
        // alert("hehehehhehehheh")
        console.log(Facemesh.FACEMESH_LEFT_EYE)
        console.log(Facemesh.FACEMESH_RIGHT_EYE)
        // const faceMesh = new FaceMesh({locateFile: (file) => {
        //     return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
        //   }});
        //   faceMesh.setOptions({
        //     maxNumFaces: 1,
        //     refineLandmarks: true,
        //     minDetectionConfidence: 0.5,
        //     minTrackingConfidence: 0.5
        //   });
        //   faceMesh.onResults(onResults);
        //   if(typeof webcamRef.current!==undefined && webcamRef.current!==null){
        //       camera=new cam.Camera(webcamRef.current.video,{
        //         onFrame: async () => {
        //             await faceMesh.send({image: webcamRef.current.video});
        //           },
        //           width: '400px',
        //           height:'400px',
        //           facingMode:'environment'
        //       })
        //     //   camera.start()
        //     //   console.log("video startedddddddd")
        //       // alert("video started")
        //   }
    },[]);
   function StartVideo(){
       setStartVideo(1)
       setTimeout(()=>{
       console.log("web red is",webcamRef.current)
        const faceMesh = new FaceMesh({locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
          }});
          faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
          });
          faceMesh.onResults(onResults);
          if(typeof webcamRef.current!==undefined && webcamRef.current!==null){
              camera=new cam.Camera(webcamRef.current.video,{
                onFrame: async () => {
                    await faceMesh.send({image: webcamRef.current.video});
                  },
                  width: '400px',
                  height:'400px',
                  facingMode:'environment'
              })
              camera.start()
          console.log("hiiii ansii")

            //   console.log("video startedddddddd")
              // alert("video started")
          }
        VideoStarted()


       },1000)
    // return ()=>  clearInterval(s)
   }
   function VideoStarted(){
     s= setInterval(()=>{
        setSec(sec+1)
        sec=sec+1
   console.log("i am from set Interval",sec)
    if(isClosed===1){
       clearInterval(s)
       setTimerCompleted(1)
       camera.stop()
       var x=data;
       x[index].score=sec;
       x[index].completed=1;
       setData(x)
       if(index+1<data.length){
        index=index+1;
        setIndex(index)
       }else{
        setGameOver(1)
       }
       console.log("index",index,"next pperson is",data[index])
    }
     },1000)
   }
   const updateBlinks=()=>{
          setBlinks(Blinks+1)
          Blinks=Blinks+1
   }
 
  function StartNext(){
       
        setCurrentPerson(data[index])
          setTimerCompleted(0)
    setStartVideo(0)
    setSec(0)
    setBlinks(0)
    isClosed=0;
    setIsClosed(0)
  }
    return(
        <div>
            <div>
            <div className='game1-video-bg'>
                    <div className='game1-video-center'>
                    {
                        gameOver===0?<div>
                            <div className='game1-video-names-text'>It's {currentPerson.name} turn . . .</div>                             
                    {
                        TimerCompleted===0?<div>
                            {
                        startVideo===0?<div>
                            <div className='game1-video-container1' ref={ref} id="v">
                         <button  className='home-video-btn' onClick={StartVideo} >Start Round</button>
                     </div>
                            </div>:
                            <div>
                                <div>
            {/* <div>ehehheh.{TotalBlinks}</div> */}
             <Webcam
             ref={webcamRef}
             className="webcam"

            //  style={{
            //      position:'absolute',
            //      margin:'0px auto',
            //      left:0,
            //      right:0,
            //      textAlign:'center',
            //      width:'400px',
            //      height:'300px',
            //  }}
             mirrored={true}
             ></Webcam>
             <canvas 
             ref={canvasRef}
             className="canvas-c"

            //  style={{
            //     position:'relative',
            //     margin:'0px auto',
            //     left:0,
            //     right:0,
            //     // textAlign:'center',
            //     width:'400px',
            //      height:'300px'
            //  }}
             >

             </canvas>
        </div>
                            </div>
                    }
                        </div>:<div className='game1-video-container1' ref={ref} id="v">
                            <div style={{color:'black'}}>
                            <div style={{textAlign:'center',fontSize:24}} >Completed</div>
                            <div style={{textAlign:'center',fontSize:24}} >Score is {sec}</div>
                         <button  className='home-video-btn' onClick={StartNext} >Start Next</button>
                            </div>
                     </div>
                    }
                     <div className='game1-video-sec'>00:{sec}<sub className='sub-text'>Sec</sub></div>
                     <div className='game1-score-text'>Score : {sec}</div>
                        </div>:<div>
                        <div className='home-s2-title'>Game Is Over</div>
                             <div className='home-s2-title'>See Who won the Game</div>
                             <div className='game1-home-select-container'>
                            <button className='home-s3-btn'  style={{marginTop:30}} onClick={
                                ()=>{
                                    navigate('/Game2/Completed',{state:data})
                                }
                            } >Winner</button>
                             </div>
                            </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Game2Video1