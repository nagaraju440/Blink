import * as Facemesh from '@mediapipe/face_mesh'
import {FaceMesh}  from '@mediapipe/face_mesh'
import * as cam  from '@mediapipe/camera_utils';
import Webcam from 'react-webcam';
import {useRef,useEffect,useState} from 'react'
var CounterLimit=3
function CounterWithMediaPipe1(){
    
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    // var [closeEyeFrameCounter,setCloseEyeFrameCounter]=useState(0)
    // var [TotalBlinks,setTotalBlinks]=useState(0)
    var camera=null;
    const connectors=window.drawConnectors;
    console.log("coonetors",connectors)

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
                console.log("hehheheh ypu closed the eyeyeyeyyeyeyey")
                // alert("ypou closed the eye")
                // closeEyeFrameCounter=closeEyeFrameCounter+1
                // setCloseEyeFrameCounter(closeEyeFrameCounter)
            }else{
                // if(CounterLimit>closeEyeFrameCounter){
                //     TotalBlinks=TotalBlinks+1;
                //     setTotalBlinks(TotalBlinks)
                //     closeEyeFrameCounter=0
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
        canvasCtx.restore();
    }
    useEffect(()=>{
        console.log(Facemesh.FACEMESH_LEFT_EYE)
        console.log(Facemesh.FACEMESH_RIGHT_EYE)
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
                  width: 700,
                  height: 500,
                  
              })
              camera.start()
          }
    })
    return(
        <div>
            {/* <div>ehehheh</div> */}
             <Webcam
             ref={webcamRef}
             style={{
                 position:'absolute',
                 margin:'0px auto',
                 left:0,
                 right:0,
                 textAlign:'center',
                 width:700,
                 height:500,
             }}
             mirrored={true}
             ></Webcam>
             <canvas 
             ref={canvasRef}

             style={{
                position:'absolute',
                margin:'0px auto',
                left:0,
                right:0,
                textAlign:'center',
                width:700,
                height:500,
             }}
             >

             </canvas>
             <div>Total Blinks are:</div>
        </div>
    )
}
export default CounterWithMediaPipe1;