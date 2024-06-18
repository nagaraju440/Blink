import {useState} from 'react'
import  './Game1Home.css'
import Navbar from '../Navbar/Navbar';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const { Option } = Select;
const children = [];
function Game1Home(){
    const [names,setNames]=useState([]);
    const navigate=useNavigate();
    function handleChange(value) {
        console.log(`selected ${value}`);
        // setNames(Object.values(value))
        var x=[]
        Object.values(value).map((l,i)=>{
             x.push({
                 name:l,
                 score:0,
                 completed:0
             })
        })
        setNames(x)
        // console.log("x is",names,x)
        // console.log(typeof(value),Object.keys(value),Object.values(value))
      }
    return (
        <div>
            <div>
                <div className='game1-home-bg'>
                    <div className='center'>
                             <div className='home-s2-title'>Game 1</div>
                             <div className='game1-home-names-text'>Please enter names to start Game1</div>
                             <div className='game1-home-select-container'>
                             <Select mode="tags"  className="game1-home-select" placeholder="Type Name and Click Enter " onChange={handleChange} dropdownClassName='select_dropdown'>
                           
                            </Select>
                            <button className='home-s3-btn'  onClick={
                                ()=>{
                                    navigate("/Game1/"+names[0].name,{state:{data:names,index:0,currentPerson:names[0]}})
                                }
                            } >Start Game</button>
                             </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Game1Home;