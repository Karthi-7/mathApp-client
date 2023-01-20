import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Navbar from '../navbar/Navbar'

function OperationData() {
  const user=JSON.parse(localStorage.getItem('currentUser'));
  const id=user.userData._id;
    const [data,setData]=useState([]);

    const fetchData=async()=>{
        try{
          const response=await (await axios.get(`${process.env.REACT_APP_BASE_URL}/getDatas/${id}`)).data;
          setData(response)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()

    },[])

  return (
    <>
    <Navbar />
    <div className='d-flex justify-content-center'>
    <table className='table table-bordered mt-5 w-75 '>
    <tbody>
    <tr  className='table table-secondary text-center'>
            <th  scope="col">Input 1</th>
            <th  scope="col">Type of Operation</th>
            <th  scope="col">Input 2</th>
            <th  scope="col">Answer</th>
        </tr>

        {
            data.map((item)=>(
                <tr key={item._id} className='text-center'>
              <td>{item.input_1}</td>
              <td>{item.operands}</td>
              <td>{item.input_2}</td>
              <td>{item.output}</td>
        </tr>

            ))
        }
       

    </tbody>
     
    </table>

    </div>
 
      
    </>
  )
}

export default OperationData
