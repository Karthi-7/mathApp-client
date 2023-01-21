import React, { useState, useEffect } from "react";
import "./auth.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Auth() {
  const navigate=useNavigate()
  const [isLogin, setLogin] = useState(false);

  //state for signup
  const [signupData, setsignup] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
  });

    //handle signupform
    const handlesignupForm=(e)=>{
    const {name,value}=e.target;
     setsignup((prev)=>{
      return {
        ...prev,[name]:value
      }
     })
  }


//state for login

const [loginData, setlogin] = useState({
    email: "",
    password: "",
  });

 //hendlelogin form

 const handleLoginForm=(e)=>{
  const {name,value}=e.target;
  setlogin((prev)=>{
    return{
      ...prev,[name]:value
    }
  })
 }


//  let reqInstance = axios.create({
//   headers: {
//     Authorization : `Bearer ${localStorage.getItem("auth")}`
//     }
//   })

 const loginSubmit=async()=>{
  

  try{
    const response=await (await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`,loginData)).data;
    localStorage.setItem('currentUser',JSON.stringify(response))
    navigate('/home')


  }
  catch(err){
    console.log(err)
  }


}



  //onsubmit signup
  const signupSubmit=async()=>{
  

    try{
      const response=await (await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`,signupData)).data;
      console.log(response,"res")
      handlelogin()


    }
    catch(err){
      console.log(err)
    }


  }

  const handlesignup = () => {
    setLogin(!isLogin);
  };

  const handlelogin = () => {
    setLogin(!isLogin);
  };
  return (
    <>
      {!isLogin && (
        <div className="signup">
          <motion.div
            style={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "tween" }}
          >
            <div className="container">
              <h2 className="text-light text-center">You Tell I do ...</h2>
              <p className="text-light text-center">Signup here</p>
              <input type="text" name="username" placeholder="username"  onChange={handlesignupForm}/>
              <input type="email" name="email" placeholder="email"  onChange={handlesignupForm}/>
              <input type="password" name="password" placeholder="password" onChange={handlesignupForm}/>
              <div className="text-center">
                <label htmlFor="" className="d-block text-light mb-3">
                  Select Role
                </label>
                <div class="form-check form-check-inline">
                  <input
                    className=""
                    type="radio"
                    name="role"
                    id="inlineRadio1"
                    value="master"
                    onChange={handlesignupForm}
                  />
                  <label class="form-check-label text-light" for="inlineRadio1">
                    master
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    className="radio-btn "
                    type="radio"
                    name="role"
                    id="inlineRadio2"
                    value="student"
                    onChange={handlesignupForm}
                  />
                  <label class="form-check-label text-light" for="inlineRadio2">
                    student
                  </label>
                </div>
              </div>

              <div className="d-flex ">
                <button 
                className="btn btn-warning m-auto mt-2 btn-lg"
                onClick={signupSubmit}
                >
                  Signup
                </button>
              </div>
              <p
                className="text-light text-center mt-2 login-step"
                onClick={handlelogin}
              >
                Already have an account? Login
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {isLogin && (
        <div className="login">
          <motion.div
            style={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "tween" }}
          >
            <div className="container">
              <h2 className="text-light text-center">You Tell I do</h2>
              <p className="text-light text-center">Login here</p>
              <input type="email" name="email"  placeholder="email" onChange={handleLoginForm}/>
              <input type="password" name="password"  placeholder="password" onChange={handleLoginForm} />
              <div className="d-flex ">
                <button className="btn  btn-warning m-auto mt-2 btn-lg"
                         onClick={loginSubmit}
                 >
                  Login
                </button>
              </div>
              <p
                className="text-light text-center mt-2 login-step"
                onClick={handlesignup}
              >
                Dont have an account? Signup
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Auth;
