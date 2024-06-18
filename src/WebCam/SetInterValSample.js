
import {useState,useEffect} from 'react'
function SetIntervalSample (){
    const [x,setX]=useState(0)
    useEffect(()=>{
        // console.log("hiii andii")
        var s= setInterval(()=>{
            console.log("i am from set Interval",x)
        setX(x+1)

          },1000)
        return ()=>  clearInterval(s)
    
       
    })
    return(
        <div>
            <div>hellooooo{x}</div>
        </div>
    )
}
export default SetIntervalSample;