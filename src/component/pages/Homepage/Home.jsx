import React,{useState,useEffect} from "react";
import Navbar from "../../navbar/Navbar";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";
import "./home.scss";
import axios from "axios"
import OperationData from "../../table/OperationData";

function Home() {


  const user=JSON.parse(localStorage.getItem('currentUser'));

  
  const id=user.userData._id;

  const navigate=useNavigate()
  const [data,setData]=useState({
    input_1:0,input_2:0, operands:"",userId:null
    
  })

  const[ans,setAns]=useState(0);

  const oper_data={
    input_1:parseInt(data.input_1),
    input_2:parseInt(data.input_2),
    operands:data.operands,
    userId:id
    
  }


  const calculate=async()=>{
    try{
      const response=await (await axios.post(`${process.env.REACT_APP_BASE_URL}/operations`,oper_data)).data
      const res=response.data.output;
    
      setAns(res)
    }
    catch(err){
      console.log(err)
    }
   
    
   
  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData((prev)=>{
      return{
        ...prev,[name]:value
      }
    })
  }

const viewDetails=()=>{
   navigate('/operationDatas')
}

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="container">
          <motion.div
            style={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "tween" }}
            className="title text-center mt-5"
          >
            <h3 style={{ color: "#567189" }} >YOU TELL I DO...</h3>
          </motion.div>
          <motion.div
            style={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "tween" }}
            className=" text-center mt-5"
          >
            <p className="text-muted h5">Math is Fun...</p>
          </motion.div>

          <div className="content text-center">
          <label htmlFor="" className="me-3">Enter the Values :</label>
            <input
          
              type="number"
              name="input_1"
              min={0}
              max={9}
              onChange={handleChange}
              placeholder="value 1"
              required
            
            />
           <select name="operands"  onChange={handleChange}>
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="times">x</option>
            <option value="dividedBy">/</option>
           </select>

            <input
              className=""
              type="number"
              name="input_2"
              id=""
              min={0}
              max={9}
              placeholder="value 2"
              onChange={handleChange}
              required
              
            />

            <button className="button" onClick={calculate}>=</button>
            <div className="ans">
            <h5>Answer :</h5>
            <p className="result text-center">{ans}</p>

            </div>
            <button className="btn btn-lg btn-outline-secondary mt-5" onClick={viewDetails}>View activities</button>
          



          



          </div>
        </div>
      </div>
    
    </>
  );
}

export default Home;
