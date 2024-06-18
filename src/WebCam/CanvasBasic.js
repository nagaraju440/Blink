
import {useEffect,useRef} from 'react'
import Webcam from 'react-webcam'
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-core';
import Man from '../man.png'
const videoConstraints={ width: 1280,
    height: 720,
    facingMode: "user"}

function CanvasBasic (){
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const faceMesh=async ()=>{
       
    }
    const runFaceMesh=async(video)=>{
        const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
        const detectorConfig = {
          runtime: 'mediapipe', // or 'tfjs'
          solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
        }
        const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
        // setInterval(()=>{
            detect(detector)

        // },1000)
        // const faces = await detector.estimateFaces(video);
    //    console.log("faces is",faces)
    }
    const detect=async (detector)=>{
        console.log("detector is",detector)
        console.log("hiiii")
        var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
    //    faceMesh()
    //    console.log("video ref is",webcamRef)
       const video=webcamRef.current.video;
    //    console.log("video is",video)
   const faces= detector.estimateFaces(video)
   console.log("faces is",faces)
    }

    useEffect(()=>{
        runFaceMesh()
    //    sendVideo(video)
    })
    return(
        <div>
            <div>
            <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          mirrored
          width={1280}
          style={{position:'absolute',left:0,top:0}}
          videoConstraints={videoConstraints}
        />
            <canvas ref={canvasRef} id="myCanvas" width={1280} height={720} style={{border:'1px solid #000000',position:'absolute',left:0,top:0}}>  </canvas>
            </div>
        </div>

    )
}
export default CanvasBasic