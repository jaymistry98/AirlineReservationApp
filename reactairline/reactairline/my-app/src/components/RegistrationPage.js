import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import airlineService from "../services/airline.service";
import './Ansar.css'

const RegistrationPage = () => {
    const[email, setEmail] = useState('');
    const[userName, setUserName] = useState('');
    const[phone, setPhone] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[securityQuestion, setSecurityQuestion] = useState('');
    const[answer, setAnswer] = useState('');
    const[type , setType] = useState('');
    const history = useHistory();
    const {id} = useParams();



    const saveUser = (e) => {
        e.preventDefault();
        
        const user = {email , userName , phone , password , securityQuestion , answer,type};
    if(email==="" || userName==="" || phone==="" || password==="" || confirmPassword==="" ||
        securityQuestion==="" || answer==="" || type===""){
        if(email===""){
            document.getElementById('vemail').innerText="Enter Your Email Id"
        }
        else{
            document.getElementById('vemail').innerText=""
        }
        if(userName===""){
            document.getElementById('vusername').innerText="Enter Your User Name"
        }
        else{
            document.getElementById('vusername').innerText=""
        }
        if(phone==="" || phone<1000000000 || phone>9999999999){
            document.getElementById('vphone').innerText="Enter Your 10 Digit Phone Number"
        }
        else{
            document.getElementById('vphone').innerText=""
        }
        if(password===""){
            document.getElementById('vpassword').innerText="Enter Your Password"
        }
        else{
            document.getElementById('vpassword').innerText=""
        }
        if(confirmPassword===""){
            document.getElementById('vconfirmpassword').innerText="Confirm Your Password"
        }
        else{
            document.getElementById('vconfirmpassword').innerText=""
        }
        if(securityQuestion===""){
            document.getElementById('vsecurityquestion').innerText="Select your Security Question"
        } 
        else{
            document.getElementById('vsecurityquestion').innerText=""
        }
        if(answer===""){
            document.getElementById('vanswer').innerText="Enter Your Answer"
        } 
        else{
            document.getElementById('vanswer').innerText=""
        }
        if(type===""){
            document.getElementById('vtype').innerText="Select your User Type"
        }  
        else{
            document.getElementById('vtype').innerText=""
        }
    }   
        else{

            //create
            if(password === confirmPassword){
            airlineService.createUser(user)
            .then(response => {
                console.log("User added successfully", response.data);
              history.push("/login");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
            }
            else{
                document.getElementById("notmatch").innerText="PASSWORD DID NOT MATCH"
            }
        }    
    }


    return(
<div id="regbody">
<nav class="navbar navbar-dark bg-dark fixed-top ">
  <a class="navbar-brand" href="#">
    <img src="travel.png" width="40" height="40" 
    class="d-inline-block align-top" alt="xxxxx"></img>
    FlyHigh
  </a>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div id="welcome">Welcome To FlyHigh</div>
  <div></div>
  <div></div>
  <div></div>

  
             <div>
            <Link className="btn btn-info" to={`/login`}>
              LOGIN</Link>
              </div>
              <div>
              <Link className="btn btn-info" to={`/`}>
              HOME</Link>
              </div>          
        </nav>
        <div class="container" >
        <div className="container">
            <br></br>
            <br></br>
            <br/>
            <h3 class="loginhead">Register</h3>
            <form>
            <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER EMAIL"
                        required
                    />
                    <p id="vemail"></p>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="ENTER USER NAME"
                        required
                    />
                     <p id="vusername"></p>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="ENTER MOBILE NUMBER"
                        required
                    />
                     <p id="vphone"></p>
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="ENTER PASSWORD"
                        required
                    />
                     <p id="vpassword"></p>
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control col-4"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="CONFIRM PASSWORD"
                        required
                    />
                         <p id="vconfirmpassword"></p>
                    <div>
                        <p id="notmatch"></p>
                    </div>

                </div>
                
                <div className="form-group"> 
                    <select class="form-control col-4"  value={securityQuestion} 
                    onChange={(e) => setSecurityQuestion(e.target.value)}>   
                            <option value="" disabled selected>Select Your Security Question</option>
                            <option value="school">What is your School name?</option>
                            <option value="pet">What is your pet name?</option>
                            <option value="movie">Which is your favourite movie?</option>
                            <option value="color">Which is your favourite color?</option>

                           
                     </select>
                     <p id="vsecurityquestion"></p>
                </div>
                <p></p> 

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="ENTER SECURITY ANSWER"
                        required
                    />
                         <p id="vanswer"></p>
                </div>
                <div className="form-group">
                    <select class="form-control col-4"  value={type} 
                    onChange={(e) => setType(e.target.value)}>
                            <option value="" disabled selected>
                                Registering as Admin or User</option>
                            <option value="admin">ADMIN</option>
                            <option value="user">USER</option>
                           
                     </select>
                     <p id="vtype"></p>
                </div> 
                <div className="form-group">
                    <button onClick={(e)=>saveUser(e)} className="btn btn-primary">
                        Register</button>
                </div>
            </form>
            <hr/>
        </div>

        </div>
      </div>
    )
}

export default RegistrationPage;


