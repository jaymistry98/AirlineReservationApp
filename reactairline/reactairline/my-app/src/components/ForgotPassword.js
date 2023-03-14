// import { useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
// import airlineService from "../services/airline.service";

// const ForgotPassword = () => {
//     const[email, setEmail] = useState('');

//     const[password, setPassword] = useState('');
//     const[confirmPassword, setConfirmPassword] = useState('');
//     const[securityQuestion, setSecurityQuestion] = useState('');
//     const[answer, setAnswer] = useState('');

//     const[users,setUsers] = useState([])
//     const history = useHistory();
//     const {id} = useParams();

//     const forgot = (e) => {
//         e.preventDefault();
        
//             users.map((user)=>{
//             if(email === user.email &&  securityQuestion === user.securityQuestion && answer === user.answer)
//             {
//                 var userName=user.userName;
//                 var phone=user.phone;
//                 var type = user.type
//                 var userId = user.userId
//             const userD = {email , userName , phone , password , securityQuestion , 
//                 answer,type,userId};
            
//                             if(password === confirmPassword)
//                         {
//                             airlineService.updateUser(userD)
//                             .then(response => 
//                             {
//                                 console.log("Password Updated successfully", response.data);
//                                 history.push("/login");
//                             })

//                             .catch(error => 
//                             {    
//                                 console.log('something went wrong', error);
//                             })
//                         }

//                             else
//                         {
//                                 document.getElementById("notmatch").innerText="PASSWORD DID NOT MATCH"
//                         }
                   
//             }

//             else
//             {
               
//                 document.getElementById('invalid').innerText="INCORRECT INFORMATION"

//             }
            
//         });
        
//         }
   

//     useEffect(() => {
//         airlineService.getAllUsers()
//         .then(response => {
//           console.log('Printing Users data', response.data);
//           setUsers(response.data);
//         })
//         .catch(error => {
//           console.log('Something went wrong', error);
//         }) 
//         }, [])
    
//     return(
        
//         <div className="container">
//             <h3>Forgot Password</h3>
//             <p id="invalid"></p>
//             <hr/>
//             <form>
//             <div className="form-group">
//                     <input 
//                         type="email" 
//                         className="form-control col-4"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your Email"
//                     />

//                 </div>

//                 <div>
//                     <select class="form-control "  value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)}>
                          
//                     <option value="" disabled selected>Select Your Security Question</option>
//                             <option value="school">What is your School name?</option>
//                             <option value="pet">What is your pet name?</option>
//                             <option value="movie">Which is your favourite movie?</option>
//                             <option value="color">Which is your favourite color?</option>
                           
//                      </select>

//                 </div> 


//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="answer"
//                         value={answer}
//                         onChange={(e) => setAnswer(e.target.value)}
//                         placeholder="Enter your Answer"
//                     />

//                 </div>

                

//                 <div className="form-group">
//                     <input 
//                         type="password" 
//                         className="form-control col-4"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="ENTER PASSWORD"
//                         required
//                     />

//                 </div>
//                 <div className="form-group">
//                     <input 
//                         type="password" 
//                         className="form-control col-4"
//                         id="confirmPassword"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         placeholder="CONFIRM PASSWORD"
//                         required
//                     />
//                     <div>
//                         <p id="notmatch"></p>
//                     </div>

//                 </div>

//                 <div >
//                     <br></br>
//                     <button onClick={(e) => forgot(e)} className="btn btn-primary">
//                         Submit</button>
//                 </div>
//             </form>
//             <hr/>
            
//         </div>
       
//     )
// }

// export default ForgotPassword;



import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import airlineService from "../services/airline.service";

const ForgotPassword = () => {
    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[securityQuestion, setSecurityQuestion] = useState('');
    const[answer, setAnswer] = useState('');

    const[users,setUsers] = useState([])
    const history = useHistory();
    const {id} = useParams();

    const forgot = (e) => {
        e.preventDefault();
    if(email==="" || securityQuestion==="" || answer ==="" || password==="" || confirmPassword==="")
        {
        if(email===""){
            document.getElementById('vemail').innerText="Enter Your Email Id"
        }
        else {
            document.getElementById('vemail').innerText=""
        }
        
        if(securityQuestion===""){
            document.getElementById('vsecurityquestion').innerText="Select your Security Question"
        } 
        else {
            document.getElementById('vsecurityquestion').innerText=""
     
        }
        
        if(answer===""){
            document.getElementById('vanswer').innerText="Enter Your Answer"
        } 
        else {
            document.getElementById('vanswer').innerText=""

        }
        if(password===""){
            document.getElementById('vpassword').innerText="Enter Your Password"
        }
        else {
            document.getElementById('vpassword').innerText=""

        }
        
        if(confirmPassword===""){
            document.getElementById('vconfirmpassword').innerText="Confirm Your Password"
        }
        else{
            document.getElementById('vconfirmpassword').innerText=""

        }
    }
        else{
            document.getElementById('vemail').innerText=""
            document.getElementById('vsecurityquestion').innerText=""
            document.getElementById('vanswer').innerText=""
            document.getElementById('vpassword').innerText=""
            document.getElementById('vconfirmpassword').innerText=""
            users.map((user)=>{
            if(email === user.email &&  securityQuestion === user.securityQuestion && answer === user.answer)
            {
                var userName=user.userName;
                var phone=user.phone;
                var type = user.type
                var userId = user.userId
            const userD = {email , userName , phone , password , securityQuestion , 
                answer,type,userId};
            
                            if(password === confirmPassword)
                        {
                            airlineService.updateUser(userD)
                            .then(response => 
                            {
                                console.log("Password Updated successfully", response.data);
                                history.push("/login");
                            })

                            .catch(error => 
                            {    
                                console.log('something went wrong', error);
                            })
                        }

                            else
                        {
                                document.getElementById("notmatch").innerText="PASSWORD DID NOT MATCH"
                        }
                   
            }

            else
            {
               
                document.getElementById('invalid').innerText="INCORRECT INFORMATION"

            }
            
        });
        }
        
        }
   

    useEffect(() => {
        airlineService.getAllUsers()
        .then(response => {
          console.log('Printing Users data', response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
        }, [])
    
    return(
    
    <div class="body">
      <div id="regbody"> 

      <nav class="navbar navbar-dark bg-dark fixed-top">
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
  <div></div>
  <div id="welcome">Welcome To FlyHigh</div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  
             <div>
            <Link className="btn btn-info" to={`/login`}>
              LOGIN</Link>
              </div>
              <div>
          <Link className="btn btn-info" to={`/home`}>
              HOME</Link>
              </div>          
        </nav>




        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <h3 class="loginhead">Forgot Password</h3>
            <p id="invalid"></p>
            <form>
            <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                    />
                    <p id="vemail"></p>
                </div>

                <div>
                    <select class="form-control col-4"  value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)}>
                          
                    <option value="" disabled selected>Select Your Security Question</option>
                            <option value="school">What is your School name?</option>
                            <option value="pet">What is your pet name?</option>
                            <option value="movie">Which is your favourite movie?</option>
                            <option value="color">Which is your favourite color?</option>
                           
                     </select>
                     <p id="vsecurityquestion"></p>
                </div> 


                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter your Answer"
                    />
                        <p id="vanswer"></p>
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

                <div >
                    <button onClick={(e) => forgot(e)} className="btn btn-primary">
                        Reset</button>
                </div>
            </form>
            <hr/>
            
        </div>
        </div> 
        </div>
       
    )
}

export default ForgotPassword;