// // import { useState } from "react";
// // import { Link, useHistory, useParams } from "react-router-dom";
// // import { useEffect } from "react/cjs/react.development";
// // import airlineService from "../services/airline.service";



// // function OwnerPage(){

   
// //     const {flightId} = useParams();
// //     const[flightName, setFlightName] = useState('');
// //     const[flightFrom, setFlightFrom] = useState('');
// //     const[flightTo, setFlightTo] = useState('');
// //     const[totalSeats,setTotalSeats] = useState('');
// //     const[flightArrivalDate, setFlightArrivalDate] = useState('');
// //     const[flightDepartureDate, setFlightDepartureDate] = useState('');
// //     const[flightArrivalTime, setFlightArrivalTime] = useState('');
// //     const[flightDepartureTime, setFlightDepartureTime] = useState('');
// //     const[economicPrice, setEconomicPrice] = useState('');
// //     const[businessPrice, setBusinessPrice] = useState('');
// //     const[firstClassPrice, setFirstClassPrice] = useState('');
    
// //     const[flights , setFlights] = useState([])

// //     const history = useHistory();


// //     const[feedbacks , setFeedbacks] = useState([])
// //     const[promotions , setPromotions] = useState([])


// //     const[brandName, setBrandName] = useState('');
// //     const[promotionDescription , setPromotionDescription] =  useState('')
// //     const[image,setImage] = useState('')

   
// //     const saveFlight = (e) =>{
// //         e.preventDefault();
        
// //         const flight = {flightName, flightFrom, flightTo, totalSeats, economicPrice, 
// //             businessPrice, firstClassPrice, flightDepartureDate, flightArrivalDate,
// //             flightDepartureTime, flightArrivalTime ,flightId};

// //             if(flightName===""|| flightFrom===""|| flightTo===""|| totalSeats===""|| economicPrice===""|| 
// //                 businessPrice===""|| firstClassPrice===""|| flightDepartureDate===""|| flightArrivalDate===""||
// //                 flightDepartureTime===""|| flightArrivalTime==="" )
// //                 {

// //                 if(flightName===""){
// //                     document.getElementById('vname').innerText="Enter Flight Name"
// //                 }
// //                 else{
// //                     document.getElementById('vname').innerText=""
// //                 }

// //                 if(flightFrom===""){
// //                     document.getElementById('vfrom').innerText="Enter Flight Departure Location"
// //                 }
// //                 else{
// //                     document.getElementById('vfrom').innerText=""
// //                 }

// //                 if(flightTo===""){
// //                     document.getElementById('vto').innerText="Enter Flight Arrival Location"
// //                 }
// //                 else{
// //                     document.getElementById('vto').innerText=""
// //                 }

// //                 if(totalSeats===""){
// //                     document.getElementById('vseats').innerText="Enter Flight  Total Seats"
// //                 }
// //                 else{
// //                     document.getElementById('vseats').innerText=""
// //                 }

// //                 if(economicPrice===""){
// //                     document.getElementById('veconomic').innerText="Enter Flight Economic Class Price"
// //                 }
// //                 else{
// //                     document.getElementById('veconomic').innerText=""
// //                 }

// //                 if(businessPrice===""){
// //                     document.getElementById('vbuisness').innerText="Enter Flight Buisness Class Price"
// //                 }
// //                 else{ 
// //                     document.getElementById('vbuisness').innerText=""
// //                 }

// //                 if(firstClassPrice===""){
// //                     document.getElementById('vfirst').innerText="Enter Flight First Class Price"
// //                 }
// //                 else{
// //                     document.getElementById('vfirst').innerText=""
// //                 }

// //                 if(flightDepartureDate===""){
// //                     document.getElementById('vddate').innerText="Enter Flight Departure Date"
// //                 }
// //                 else{
// //                     document.getElementById('vddate').innerText=""
// //                 }

// //                 if(flightArrivalDate===""){
// //                     document.getElementById('vadate').innerText="Enter Flight Arrival Date"
// //                 }
// //                 else{
// //                     document.getElementById('vadate').innerText=""
// //                 }

// //                 if(flightDepartureTime===""){
// //                     document.getElementById('vdtime').innerText="Enter Flight Departure Time"
// //                 }
// //                 else{
// //                     document.getElementById('vdtime').innerText=""
// //                 }

// //                 if(flightArrivalTime===""){
// //                     document.getElementById('vatime').innerText="Enter Flight Arrival Time"
// //                 }
// //                 else{
// //                     document.getElementById('vatime').innerText=""
// //                 }
// //             }
// //             else{    
// //                 document.getElementById('vname').innerText=""
// //                 document.getElementById('vfrom').innerText=""
// //                  document.getElementById('vto').innerText=""
// //                  document.getElementById('vseats').innerText=""
// //                   document.getElementById('veconomic').innerText=""
// //                   document.getElementById('vbuisness').innerText=""
// //                   document.getElementById('vfirst').innerText=""
// //                    document.getElementById('vddate').innerText=""
// //                    document.getElementById('vadate').innerText=""
// //                    document.getElementById('vdtime').innerText=""
// //                     document.getElementById('vatime').innerText=""
                    
// //         airlineService.createFlight(flight)
// //             .then(response => {
// //                 console.log("Flight added successfully", response.data);
// //                 setFlightName("");
// //                     setFlightFrom("");
// //                     setFlightTo("")
// //                     setEconomicPrice("")
// //                     setBusinessPrice("")
// //                     setFirstClassPrice("")
// //                     setFlightArrivalDate("")
// //                     setFlightDepartureDate("")
// //                     setFlightArrivalTime("")
// //                     setFlightDepartureTime("")
// //                     setTotalSeats("")
// //                 init()
// //               history.push("/ownerpage");
// //             })
// //             .catch(error => {
// //                 console.log('something went wrong', error);
// //             })
// //             }
// //         }


// //         const promotionDelete = (id) => {
// //             console.log('Printing id', id);
// //             airlineService.deletePromotion(id)
// //               .then(response => {
// //                 console.log('Promotion deleted successfully', response.data);
// //                 init();
// //               })
// //               .catch(error => {
// //                 console.log('Something went wrong', error);
// //               })
// //           }

// //     const addPromo = (e) => {
// //         e.preventDefault();
        
// //         const user = {image, brandName, promotionDescription};
        
// //             airlineService.createPromotion(user)
// //             .then(response => {
// //                 console.log("Promotion added successfully", response.data);
// //               //history.push("/login");
// //                 window.alert("Promotion Added")
// //             })
// //             .catch(error => {
// //                 console.log('something went wrong', error);
// //             })
// //             }
    
// //             const flightDelete = (id) => {
// //                 console.log('Printing id', id);
// //                 airlineService.deleteFlight(id)
// //                   .then(response => {
// //                     console.log('Flight deleted successfully', response.data);
// //                     init();
// //                   })
// //                   .catch(error => {
// //                     console.log('Something went wrong', error);
// //                   })
// //               }



// //     const init = () => {
// //     airlineService.getAllFeedback()
// //       .then(response => {
// //         console.log('Printing Feedback data', response.data);
// //         setFeedbacks(response.data);
// //       })
// //       .catch(error => {
// //         console.log('Something went wrong', error);
// //       }) 

// //       airlineService.getAllPromotions()
// //           .then(response => {
// //             console.log('Printing promotion data', response.data);
// //             setPromotions(response.data);
// //           })
// //           .catch(error => {
// //             console.log('Something went wrong', error);
// //           }) 

// //       airlineService.getAllFlights()
// //           .then(response => {
// //             console.log('Printing Flights data', response.data);
// //             setFlights(response.data);
// //           })
// //           .catch(error => {
// //             console.log('Something went wrong', error);
// //           }) 
// //   }

// //   useEffect(() => {
// //     init();
// //   }, []);




// //     return(
// //         <div className="container">
// //                 <div className="container">
// //         <div className="container">
// //         <form>
// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="flightname"
// //                         value={flightName}
// //                         onChange={(e) => setFlightName(e.target.value)}
// //                         placeholder="ENTER FLIGHT NAME"
// //                     />
// //                     <p id="vname"></p>
// //                 </div>
// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="flightfrom"
// //                         value={flightFrom}
// //                         onChange={(e) => setFlightFrom(e.target.value)}
// //                         placeholder="ENTER FLIGHT FROM.."
// //                     />
// //                         <p id="vfrom"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="flightto"
// //                         value={flightTo}
// //                         onChange={(e) => setFlightTo(e.target.value)}
// //                         placeholder="ENTER FLIGHT TO.."
// //                     />
// //                         <p id="vto"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="totalseats"
// //                         value={totalSeats}
// //                         onChange={(e) => setTotalSeats(e.target.value)}
// //                         placeholder="ENTER TOTAL SEATS IN FLIGHT"
// //                     />
// //                         <p id="vseats"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="economicprice"
// //                         value={economicPrice}
// //                         onChange={(e) => setEconomicPrice(e.target.value)}
// //                         placeholder="ENTER ECONOMIC PRICE"
// //                     />
// //                         <p id="veconomic"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="businessprice"
// //                         value={businessPrice}
// //                         onChange={(e) => setBusinessPrice(e.target.value)}
// //                         placeholder="ENTER BUSINESS PRICE"
// //                     />
// //                         <p id="vbuisness"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="firstclassprice"
// //                         value={firstClassPrice}
// //                         onChange={(e) => setFirstClassPrice(e.target.value)}
// //                         placeholder="ENTER FIRST CLASS PRICE"
// //                     />
// //                         <p id="vfirst"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="date" 
// //                         className="form-control col-4"
// //                         id="flightdeparturedate"
// //                         value={flightDepartureDate}
// //                         onChange={(e) => setFlightDepartureDate(e.target.value)}
// //                         placeholder="ENTER DATE OF DEPARTURE"
// //                     />
// //                         <p id="vddate"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="date" 
// //                         className="form-control col-4"
// //                         id="flightarrivalDate"
// //                         value={flightArrivalDate}
// //                         onChange={(e) => setFlightArrivalDate(e.target.value)}
// //                         placeholder="ENTER DATE OF ARRIVAL"
// //                     />
// //                         <p id="vadate"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="time" 
// //                         className="form-control col-4"
// //                         id="flightdeparturetime"
// //                         step="2"
// //                         value={flightDepartureTime}
// //                         onChange={(e) => setFlightDepartureTime(e.target.value)}
// //                         placeholder="ENTER TIME OF DEPARTURE"
// //                     />
// //                         <p id="vdtime"></p>
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="time" 
// //                         className="form-control col-4"
// //                         id="arrivaltime"
// //                         step="2"
// //                         value={flightArrivalTime}
// //                         onChange={(e) => setFlightArrivalTime(e.target.value)}
// //                         placeholder="ENTER TIME OF ARRIVAL"
// //                     />
// //                         <p id="vatime"></p>
// //                 </div>

// //                 <div >
// //                     <button onClick={(e)=>saveFlight(e)}className="btn btn-primary">Save</button>
// //                 </div>
// //             </form>
        
// //         </div>
// //       <div className="container">
// //             <table border="2px">
// //                 <thead>
// //                     <tr>
// //                         <th>FLIGHT NAME</th>
// //                         <th>FROM</th>
// //                         <th>TO</th>
// //                         <th>SEATS AVAILABLE</th>
// //                         <th>ECONOMIC PRICE</th>
// //                         <th>BUSINESS PRICE</th>
// //                         <th>FIRST CLASS PRICE</th>
// //                         <th>DEPARTURE DATE</th>
// //                         <th>ARRIVAL DATE</th>
// //                         <th>DEPARTURE TIME</th>
// //                         <th>ARRIVAL TIME</th>
// //                         <th></th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                 {
// //             flights.map(flight => (
// //               <tr key={flight.flightId}>
// //                 <td>{flight.flightName}</td>
// //                 <td>{flight.flightFrom}</td>
// //                 <td>{flight.flightTo}</td>
// //                 <td>{flight.totalSeats}</td>
// //                 <td>{flight.economicPrice}</td>
// //                 <td>{flight.businessPrice}</td>
// //                 <td>{flight.firstClassPrice}</td>
// //                 <td>{flight.flightDepartureDate}</td>
// //                 <td>{flight.flightArrivalDate}</td>
// //                 <td>{flight.flightDepartureTime}</td>
// //                 <td>{flight.flightArrivalTime}</td>
// //                 <td>
// //                 <Link className="btn btn-info" to={`/flight/${flight.flightId}`}>
// //                     Update</Link>
// //                 <button className="btn btn-danger ml-2" onClick={() => {
// //                     flightDelete(flight.flightId);
// //                 }}>Delete</button>
// //                 </td>
// //               </tr>
// //             ))
// //           }
// //                 </tbody>
// //             </table>
// //         </div>


// //         <div className="container">

// //         <from>
// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="image"
// //                         value={image}
// //                         onChange={(e) => setImage(e.target.value)}
// //                         placeholder="PROVIDE BRAND IMAGE URL"
// //                     />
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="brandname"
// //                         value={brandName}
// //                         onChange={(e) => setBrandName(e.target.value)}
// //                         placeholder="ENTER BRAND NAME"
// //                     />
// //                 </div>

// //                 <div className="form-group">
// //                     <input 
// //                         type="text" 
// //                         className="form-control col-4"
// //                         id="promotiondescription"
// //                         value={promotionDescription}
// //                         onChange={(e) => setPromotionDescription(e.target.value)}
// //                         placeholder="ENTER CONTENT FOR ADVERTISMENT"
// //                     />
// //                 </div>
// //                 <div >
// //                       <button onClick={(e)=>addPromo(e)} className="btn btn-primary">
// //                           Save Promotion</button>
// //                 </div>
// //         </from>
// //         </div>

// //         <div>

// // <table className="table table-bordered table-striped">
// //     <thead className="thead-dark">
// //     <tr>
// //         <th>Promotion Image</th>
// //         <th>Brand Name</th>
// //         <th>Description</th>
// //         <th></th>
// //     </tr>
// //     </thead>
// //     <tbody>
// //     {
// //         promotions.map(promotions => (
// //         <tr key={promotions.promotionId}>
// //             <td align="center"><img src={promotions.image} width="50" height="45" alt="Profile Picture"/></td>
// //             <td>{promotions.brandName}</td>
// //             <td>{promotions.promotionDescription}</td>
// //             <td>
// //             <Link className="btn btn-info" to={`/promotion/${promotions.promotionId}`}>
// //                     Update</Link>
                    

// //                   <button className="btn btn-danger ml-2" onClick={() => {
// //                     promotionDelete(promotions.promotionId);
// //                   }}>Delete</button>
// //             </td>
// //         </tr>
// //         ))
// //     }
// //     </tbody>
// // </table>

// // </div>



// //         <table border="2px">
// //             <thead>
// //                 <tr>
// //                     <td>
// //                         FEEDBACK DESCRIPTION
// //                     </td>
// //                     <td>
// //                         RATING
// //                     </td>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //             {
// //             feedbacks.map(feedback => (
// //               <tr key={feedback.feedbackId}>
// //                 <td>{feedback.feedbackDescription}</td>
// //                 <td>{feedback.rating}</td>
                
// //               </tr>
// //             ))
// //           }
                
// //             </tbody>
// //         </table>
// //         </div>
// //         </div>

// //     )

// // }

// // export default OwnerPage;





// import { useState } from "react";
// import { Link, useHistory, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
// import airlineService from "../services/airline.service";



// function OwnerPage(){

   
//     const {flightId} = useParams();
//     const[flightName, setFlightName] = useState('');
//     const[flightFrom, setFlightFrom] = useState('');
//     const[flightTo, setFlightTo] = useState('');
//     const[totalSeats,setTotalSeats] = useState('');
//     const[flightArrivalDate, setFlightArrivalDate] = useState('');
//     const[flightDepartureDate, setFlightDepartureDate] = useState('');
//     const[flightArrivalTime, setFlightArrivalTime] = useState('');
//     const[flightDepartureTime, setFlightDepartureTime] = useState('');
//     const[economicPrice, setEconomicPrice] = useState('');
//     const[businessPrice, setBusinessPrice] = useState('');
//     const[firstClassPrice, setFirstClassPrice] = useState('');
    
//     const[flights , setFlights] = useState([])

//     const history = useHistory();


//     const[feedbacks , setFeedbacks] = useState([])
//     const[promotions , setPromotions] = useState([])


//     const[brandName, setBrandName] = useState('');
//     const[promotionDescription , setPromotionDescription] =  useState('')
//     const[image,setImage] = useState('')

   
//     const saveFlight = (e) =>{
//         e.preventDefault();
        
//         const flight = {flightName, flightFrom, flightTo, totalSeats, economicPrice, 
//             businessPrice, firstClassPrice, flightDepartureDate, flightArrivalDate,
//             flightDepartureTime, flightArrivalTime ,flightId};

//             if(flightName===""|| flightFrom===""|| flightTo===""|| totalSeats===""|| economicPrice===""|| 
//                 businessPrice===""|| firstClassPrice===""|| flightDepartureDate===""|| flightArrivalDate===""||
//                 flightDepartureTime===""|| flightArrivalTime==="" )
//                 {

//                 if(flightName===""){
//                     document.getElementById('vname').innerText="Enter Flight Name"
//                 }
//                 else{
//                     document.getElementById('vname').innerText=""
//                 }

//                 if(flightFrom===""){
//                     document.getElementById('vfrom').innerText="Enter Flight Departure Location"
//                 }
//                 else{
//                     document.getElementById('vfrom').innerText=""
//                 }

//                 if(flightTo===""){
//                     document.getElementById('vto').innerText="Enter Flight Arrival Location"
//                 }
//                 else{
//                     document.getElementById('vto').innerText=""
//                 }

//                 if(totalSeats===""){
//                     document.getElementById('vseats').innerText="Enter Flight  Total Seats"
//                 }
//                 else{
//                     document.getElementById('vseats').innerText=""
//                 }

//                 if(economicPrice===""){
//                     document.getElementById('veconomic').innerText="Enter Flight Economic Class Price"
//                 }
//                 else{
//                     document.getElementById('veconomic').innerText=""
//                 }

//                 if(businessPrice===""){
//                     document.getElementById('vbuisness').innerText="Enter Flight Buisness Class Price"
//                 }
//                 else{ 
//                     document.getElementById('vbuisness').innerText=""
//                 }

//                 if(firstClassPrice===""){
//                     document.getElementById('vfirst').innerText="Enter Flight First Class Price"
//                 }
//                 else{
//                     document.getElementById('vfirst').innerText=""
//                 }

//                 if(flightDepartureDate===""){
//                     document.getElementById('vddate').innerText="Enter Flight Departure Date"
//                 }
//                 else{
//                     document.getElementById('vddate').innerText=""
//                 }

//                 if(flightArrivalDate===""){
//                     document.getElementById('vadate').innerText="Enter Flight Arrival Date"
//                 }
//                 else{
//                     document.getElementById('vadate').innerText=""
//                 }

//                 if(flightDepartureTime===""){
//                     document.getElementById('vdtime').innerText="Enter Flight Departure Time"
//                 }
//                 else{
//                     document.getElementById('vdtime').innerText=""
//                 }

//                 if(flightArrivalTime===""){
//                     document.getElementById('vatime').innerText="Enter Flight Arrival Time"
//                 }
//                 else{
//                     document.getElementById('vatime').innerText=""
//                 }
//             }
//             else{    
//                 document.getElementById('vname').innerText=""
//                 document.getElementById('vfrom').innerText=""
//                  document.getElementById('vto').innerText=""
//                  document.getElementById('vseats').innerText=""
//                   document.getElementById('veconomic').innerText=""
//                   document.getElementById('vbuisness').innerText=""
//                   document.getElementById('vfirst').innerText=""
//                    document.getElementById('vddate').innerText=""
//                    document.getElementById('vadate').innerText=""
//                    document.getElementById('vdtime').innerText=""
//                     document.getElementById('vatime').innerText=""
                    
//         airlineService.createFlight(flight)
//             .then(response => {
//                 console.log("Flight added successfully", response.data);
//                 setFlightName("");
//                     setFlightFrom("");
//                     setFlightTo("")
//                     setEconomicPrice("")
//                     setBusinessPrice("")
//                     setFirstClassPrice("")
//                     setFlightArrivalDate("")
//                     setFlightDepartureDate("")
//                     setFlightArrivalTime("")
//                     setFlightDepartureTime("")
//                     setTotalSeats("")
//                 init()
//               history.push("/ownerpage");
//             })
//             .catch(error => {
//                 console.log('something went wrong', error);
//             })
//             }
//         }


//         const promotionDelete = (id) => {
//             console.log('Printing id', id);
//             airlineService.deletePromotion(id)
//               .then(response => {
//                 console.log('Promotion deleted successfully', response.data);
//                 init();
//               })
//               .catch(error => {
//                 console.log('Something went wrong', error);
//               })
//           }

//     const addPromo = (e) => {
//         e.preventDefault();
        
//         const user = {image, brandName, promotionDescription};
        
//         if(image=="" || brandName==="" || promotionDescription===""){
//             if(image===""){
//                 document.getElementById('vbimage').innerText="Enter Brand Image"
//             }
//             else{
//                 document.getElementById('vbimage').innerText=""
//             }
    
//             if(brandName===""){
//                 document.getElementById('vbname').innerText="Enter Brand Name"
//             }
//             else{
//                 document.getElementById('vbname').innerText=""
//             }
//             if(promotionDescription===""){
//                 document.getElementById('vbdescription').innerText="Enter Brand Description"
//             }
//             else{
//                 document.getElementById('vbdescription').innerText=""
//             }
//         }  
//         else{
//             document.getElementById('vbimage').innerText=""
//             document.getElementById('vbname').innerText=""
//             document.getElementById('vbdescription').innerText=""

//             airlineService.createPromotion(user)
//             .then(response => {
//                 console.log("Promotion added successfully", response.data);
//                 setImage("")
//                 setBrandName("")
//                 setPromotionDescription("")
//               init();
//                 window.alert("Promotion Added")
//             })
//             .catch(error => {
//                 console.log('something went wrong', error);
//             })
//             }
//         }
    
//             const flightDelete = (id) => {
//                 console.log('Printing id', id);
//                 airlineService.deleteFlight(id)
//                   .then(response => {
//                     console.log('Flight deleted successfully', response.data);
//                     init();
//                   })
//                   .catch(error => {
//                     console.log('Something went wrong', error);
//                   })
//               }



//     const init = () => {
//     airlineService.getAllFeedback()
//       .then(response => {
//         console.log('Printing Feedback data', response.data);
//         setFeedbacks(response.data);
//       })
//       .catch(error => {
//         console.log('Something went wrong', error);
//       }) 

//       airlineService.getAllPromotions()
//           .then(response => {
//             console.log('Printing promotion data', response.data);
//             setPromotions(response.data);
//           })
//           .catch(error => {
//             console.log('Something went wrong', error);
//           }) 

//       airlineService.getAllFlights()
//           .then(response => {
//             console.log('Printing Flights data', response.data);
//             setFlights(response.data);
//           })
//           .catch(error => {
//             console.log('Something went wrong', error);
//           }) 
//   }

//   useEffect(() => {
//     init();
//   }, []);




//     return(
//         <div className="container">
//                 <div className="container">
//         <div className="container">
//         <form>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="flightname"
//                         value={flightName}
//                         onChange={(e) => setFlightName(e.target.value)}
//                         placeholder="ENTER FLIGHT NAME"
//                     />
//                     <p id="vname"></p>
//                 </div>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="flightfrom"
//                         value={flightFrom}
//                         onChange={(e) => setFlightFrom(e.target.value)}
//                         placeholder="ENTER FLIGHT FROM.."
//                     />
//                         <p id="vfrom"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="flightto"
//                         value={flightTo}
//                         onChange={(e) => setFlightTo(e.target.value)}
//                         placeholder="ENTER FLIGHT TO.."
//                     />
//                         <p id="vto"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="totalseats"
//                         value={totalSeats}
//                         onChange={(e) => setTotalSeats(e.target.value)}
//                         placeholder="ENTER TOTAL SEATS IN FLIGHT"
//                     />
//                         <p id="vseats"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="economicprice"
//                         value={economicPrice}
//                         onChange={(e) => setEconomicPrice(e.target.value)}
//                         placeholder="ENTER ECONOMIC PRICE"
//                     />
//                         <p id="veconomic"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="businessprice"
//                         value={businessPrice}
//                         onChange={(e) => setBusinessPrice(e.target.value)}
//                         placeholder="ENTER BUSINESS PRICE"
//                     />
//                         <p id="vbuisness"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="firstclassprice"
//                         value={firstClassPrice}
//                         onChange={(e) => setFirstClassPrice(e.target.value)}
//                         placeholder="ENTER FIRST CLASS PRICE"
//                     />
//                         <p id="vfirst"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="date" 
//                         className="form-control col-4"
//                         id="flightdeparturedate"
//                         value={flightDepartureDate}
//                         onChange={(e) => setFlightDepartureDate(e.target.value)}
//                         placeholder="ENTER DATE OF DEPARTURE"
//                     />
//                         <p id="vddate"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="date" 
//                         className="form-control col-4"
//                         id="flightarrivalDate"
//                         value={flightArrivalDate}
//                         onChange={(e) => setFlightArrivalDate(e.target.value)}
//                         placeholder="ENTER DATE OF ARRIVAL"
//                     />
//                         <p id="vadate"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="time" 
//                         className="form-control col-4"
//                         id="flightdeparturetime"
//                         step="2"
//                         value={flightDepartureTime}
//                         onChange={(e) => setFlightDepartureTime(e.target.value)}
//                         placeholder="ENTER TIME OF DEPARTURE"
//                     />
//                         <p id="vdtime"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="time" 
//                         className="form-control col-4"
//                         id="arrivaltime"
//                         step="2"
//                         value={flightArrivalTime}
//                         onChange={(e) => setFlightArrivalTime(e.target.value)}
//                         placeholder="ENTER TIME OF ARRIVAL"
//                     />
//                         <p id="vatime"></p>
//                 </div>

//                 <div >
//                     <button onClick={(e)=>saveFlight(e)}className="btn btn-primary">Save</button>
//                 </div>
//             </form>
        
//         </div>
//       <div className="container">
//             <table border="2px">
//                 <thead>
//                     <tr>
//                         <th>FLIGHT NAME</th>
//                         <th>FROM</th>
//                         <th>TO</th>
//                         <th>SEATS AVAILABLE</th>
//                         <th>ECONOMIC PRICE</th>
//                         <th>BUSINESS PRICE</th>
//                         <th>FIRST CLASS PRICE</th>
//                         <th>DEPARTURE DATE</th>
//                         <th>ARRIVAL DATE</th>
//                         <th>DEPARTURE TIME</th>
//                         <th>ARRIVAL TIME</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//             flights.map(flight => (
//               <tr key={flight.flightId}>
//                 <td>{flight.flightName}</td>
//                 <td>{flight.flightFrom}</td>
//                 <td>{flight.flightTo}</td>
//                 <td>{flight.totalSeats}</td>
//                 <td>{flight.economicPrice}</td>
//                 <td>{flight.businessPrice}</td>
//                 <td>{flight.firstClassPrice}</td>
//                 <td>{flight.flightDepartureDate}</td>
//                 <td>{flight.flightArrivalDate}</td>
//                 <td>{flight.flightDepartureTime}</td>
//                 <td>{flight.flightArrivalTime}</td>
//                 <td>
//                 <Link className="btn btn-info" to={`/flight/${flight.flightId}`}>
//                     Update</Link>
//                 <button className="btn btn-danger ml-2" onClick={() => {
//                     flightDelete(flight.flightId);
//                 }}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           }
//                 </tbody>
//             </table>
//         </div>


//         <div className="container">

//         <from>
//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="image"
//                         value={image}
//                         onChange={(e) => setImage(e.target.value)}
//                         placeholder="PROVIDE BRAND IMAGE URL"
//                     />
//                     <p id="vbimage"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="brandname"
//                         value={brandName}
//                         onChange={(e) => setBrandName(e.target.value)}
//                         placeholder="ENTER BRAND NAME"
//                     />
//                         <p id="vbname"></p>
//                 </div>

//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="promotiondescription"
//                         value={promotionDescription}
//                         onChange={(e) => setPromotionDescription(e.target.value)}
//                         placeholder="ENTER CONTENT FOR ADVERTISMENT"
//                     />
//                         <p id="vbdescription"></p>
//                 </div>
//                 <div >
//                       <button onClick={(e)=>addPromo(e)} className="btn btn-primary">
//                           Save Promotion</button>
//                 </div>
//         </from>
//         </div>

//         <div>

// <table className="table table-bordered table-striped">
//     <thead className="thead-dark">
//     <tr>
//         <th>Promotion Image</th>
//         <th>Brand Name</th>
//         <th>Description</th>
//         <th></th>
//     </tr>
//     </thead>
//     <tbody>
//     {
//         promotions.map(promotions => (
//         <tr key={promotions.promotionId}>
//             <td align="center"><img src={promotions.image} width="50" height="45" alt="Profile Picture"/></td>
//             <td>{promotions.brandName}</td>
//             <td>{promotions.promotionDescription}</td>
//             <td>
//             <Link className="btn btn-info" to={`/promotion/${promotions.promotionId}`}>
//                     Update</Link>
                    

//                   <button className="btn btn-danger ml-2" onClick={() => {
//                     promotionDelete(promotions.promotionId);
//                   }}>Delete</button>
//             </td>
//         </tr>
//         ))
//     }
//     </tbody>
// </table>

// </div>



//         <table border="2px">
//             <thead>
//                 <tr>
//                     <td>
//                         FEEDBACK DESCRIPTION
//                     </td>
//                     <td>
//                         RATING
//                     </td>
//                 </tr>
//             </thead>
//             <tbody>
//             {
//             feedbacks.map(feedback => (
//               <tr key={feedback.feedbackId}>
//                 <td>{feedback.feedbackDescription}</td>
//                 <td>{feedback.rating}</td>
                
//               </tr>
//             ))
//           }
                
//             </tbody>
//         </table>
//         </div>
//         </div>

//     )

// }

// export default OwnerPage;



import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import airlineService from "../services/airline.service";



function OwnerPage(){

   
    const {flightId} = useParams();
    const[flightName, setFlightName] = useState('');
    const[flightFrom, setFlightFrom] = useState('');
    const[flightTo, setFlightTo] = useState('');
    const[totalSeats,setTotalSeats] = useState('');
    const[flightArrivalDate, setFlightArrivalDate] = useState('');
    const[flightDepartureDate, setFlightDepartureDate] = useState('');
    const[flightArrivalTime, setFlightArrivalTime] = useState('');
    const[flightDepartureTime, setFlightDepartureTime] = useState('');
    const[economicPrice, setEconomicPrice] = useState('');
    const[businessPrice, setBusinessPrice] = useState('');
    const[firstClassPrice, setFirstClassPrice] = useState('');
    
    const[flights , setFlights] = useState([])

    const history = useHistory();


    const[feedbacks , setFeedbacks] = useState([])
    const[promotions , setPromotions] = useState([])


    const[brandName, setBrandName] = useState('');
    const[promotionDescription , setPromotionDescription] =  useState('')
    const[image,setImage] = useState('')

   
    const saveFlight = (e) =>{
        e.preventDefault();
        
        const flight = {flightName, flightFrom, flightTo, totalSeats, economicPrice, 
            businessPrice, firstClassPrice, flightDepartureDate, flightArrivalDate,
            flightDepartureTime, flightArrivalTime ,flightId};

            if(flightName===""|| flightFrom===""|| flightTo===""|| totalSeats===""|| economicPrice===""|| 
                businessPrice===""|| firstClassPrice===""|| flightDepartureDate===""|| flightArrivalDate===""||
                flightDepartureTime===""|| flightArrivalTime==="" )
                {

                if(flightName===""){
                    document.getElementById('vname').innerText="Enter Flight Name"
                }
                else{
                    document.getElementById('vname').innerText=""
                }

                if(flightFrom===""){
                    document.getElementById('vfrom').innerText="Enter Flight Departure Location"
                }
                else{
                    document.getElementById('vfrom').innerText=""
                }

                if(flightTo===""){
                    document.getElementById('vto').innerText="Enter Flight Arrival Location"
                }
                else{
                    document.getElementById('vto').innerText=""
                }

                if(totalSeats===""){
                    document.getElementById('vseats').innerText="Enter Flight  Total Seats"
                }
                else{
                    document.getElementById('vseats').innerText=""
                }

                if(economicPrice===""){
                    document.getElementById('veconomic').innerText="Enter Flight Economic Class Price"
                }
                else{
                    document.getElementById('veconomic').innerText=""
                }

                if(businessPrice===""){
                    document.getElementById('vbuisness').innerText="Enter Flight Buisness Class Price"
                }
                else{ 
                    document.getElementById('vbuisness').innerText=""
                }

                if(firstClassPrice===""){
                    document.getElementById('vfirst').innerText="Enter Flight First Class Price"
                }
                else{
                    document.getElementById('vfirst').innerText=""
                }

                if(flightDepartureDate===""){
                    document.getElementById('vddate').innerText="Enter Flight Departure Date"
                }
                else{
                    document.getElementById('vddate').innerText=""
                }

                if(flightArrivalDate===""){
                    document.getElementById('vadate').innerText="Enter Flight Arrival Date"
                }
                else{
                    document.getElementById('vadate').innerText=""
                }

                if(flightDepartureTime===""){
                    document.getElementById('vdtime').innerText="Enter Flight Departure Time"
                }
                else{
                    document.getElementById('vdtime').innerText=""
                }

                if(flightArrivalTime===""){
                    document.getElementById('vatime').innerText="Enter Flight Arrival Time"
                }
                else{
                    document.getElementById('vatime').innerText=""
                }
            }
            else{    
                document.getElementById('vname').innerText=""
                document.getElementById('vfrom').innerText=""
                 document.getElementById('vto').innerText=""
                 document.getElementById('vseats').innerText=""
                  document.getElementById('veconomic').innerText=""
                  document.getElementById('vbuisness').innerText=""
                  document.getElementById('vfirst').innerText=""
                   document.getElementById('vddate').innerText=""
                   document.getElementById('vadate').innerText=""
                   document.getElementById('vdtime').innerText=""
                    document.getElementById('vatime').innerText=""
                    
        airlineService.createFlight(flight)
            .then(response => {
                console.log("Flight added successfully", response.data);
                setFlightName("");
                    setFlightFrom("");
                    setFlightTo("")
                    setEconomicPrice("")
                    setBusinessPrice("")
                    setFirstClassPrice("")
                    setFlightArrivalDate("")
                    setFlightDepartureDate("")
                    setFlightArrivalTime("")
                    setFlightDepartureTime("")
                    setTotalSeats("")
                init()
              history.push("/ownerpage");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
            }
        }


        const promotionDelete = (id) => {
            console.log('Printing id', id);
            airlineService.deletePromotion(id)
              .then(response => {
                console.log('Promotion deleted successfully', response.data);
                init();
              })
              .catch(error => {
                console.log('Something went wrong', error);
              })
          }

    const addPromo = (e) => {
        e.preventDefault();
        
        const user = {image, brandName, promotionDescription};
        
        if(image=="" || brandName==="" || promotionDescription===""){
            if(image===""){
                document.getElementById('vbimage').innerText="Enter Brand Image"
            }
            else{
                document.getElementById('vbimage').innerText=""
            }
    
            if(brandName===""){
                document.getElementById('vbname').innerText="Enter Brand Name"
            }
            else{
                document.getElementById('vbname').innerText=""
            }
            if(promotionDescription===""){
                document.getElementById('vbdescription').innerText="Enter Brand Description"
            }
            else{
                document.getElementById('vbdescription').innerText=""
            }
        }  
        else{
            document.getElementById('vbimage').innerText=""
            document.getElementById('vbname').innerText=""
            document.getElementById('vbdescription').innerText=""

            airlineService.createPromotion(user)
            .then(response => {
                console.log("Promotion added successfully", response.data);
                setImage("")
                setBrandName("")
                setPromotionDescription("")
              init();
                window.alert("Promotion Added")
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
            }
        }
    
            const flightDelete = (id) => {
                console.log('Printing id', id);
                airlineService.deleteFlight(id)
                  .then(response => {
                    console.log('Flight deleted successfully', response.data);
                    init();
                  })
                  .catch(error => {
                    console.log('Something went wrong', error);
                  })
              }



    const init = () => {
    airlineService.getAllFeedback()
      .then(response => {
        console.log('Printing Feedback data', response.data);
        setFeedbacks(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 

      airlineService.getAllPromotions()
          .then(response => {
            console.log('Printing promotion data', response.data);
            setPromotions(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 

      airlineService.getAllFlights()
          .then(response => {
            console.log('Printing Flights data', response.data);
            setFlights(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
  }

  useEffect(() => {
    init();
  }, []);




    return(
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
          <Link className="btn btn-info" to={`/login`}  >
              LOGOUT</Link>
              </div>          
        </nav>
    

        <div className="container">
                <div className="container">
        <div className="container">
            <br/>
            <br/>
            <br/>
        <h1 className="loginhead">ENTER FLIGHT DETAILS</h1>

        <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="flightname"
                        value={flightName}
                        onChange={(e) => setFlightName(e.target.value)}
                        placeholder="ENTER FLIGHT NAME"
                    />
                    <p id="vname"></p>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="flightfrom"
                        value={flightFrom}
                        onChange={(e) => setFlightFrom(e.target.value)}
                        placeholder="ENTER FLIGHT FROM.."
                    />
                        <p id="vfrom"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="flightto"
                        value={flightTo}
                        onChange={(e) => setFlightTo(e.target.value)}
                        placeholder="ENTER FLIGHT TO.."
                    />
                        <p id="vto"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="totalseats"
                        value={totalSeats}
                        onChange={(e) => setTotalSeats(e.target.value)}
                        placeholder="ENTER TOTAL SEATS IN FLIGHT"
                    />
                        <p id="vseats"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="economicprice"
                        value={economicPrice}
                        onChange={(e) => setEconomicPrice(e.target.value)}
                        placeholder="ENTER ECONOMIC PRICE"
                    />
                        <p id="veconomic"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="businessprice"
                        value={businessPrice}
                        onChange={(e) => setBusinessPrice(e.target.value)}
                        placeholder="ENTER BUSINESS PRICE"
                    />
                        <p id="vbuisness"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="firstclassprice"
                        value={firstClassPrice}
                        onChange={(e) => setFirstClassPrice(e.target.value)}
                        placeholder="ENTER FIRST CLASS PRICE"
                    />
                        <p id="vfirst"></p>
                </div>

                <div className="form-group">
                <label for="flightdeparturedate">DEPARTURE DATE</label>                    

                    <input 
                        type="date" 
                        className="form-control col-4"
                        id="flightdeparturedate"
                        value={flightDepartureDate}
                        onChange={(e) => setFlightDepartureDate(e.target.value)}
                        placeholder="ENTER DATE OF DEPARTURE"
                    />
                        <p id="vddate"></p>
                </div>

                <div className="form-group">
                <label for="flightarrivaldate">ARRIVAL DATE</label>                    

                    <input 
                        type="date" 
                        className="form-control col-4"
                        id="flightarrivalDate"
                        value={flightArrivalDate}
                        onChange={(e) => setFlightArrivalDate(e.target.value)}
                        placeholder="ENTER DATE OF ARRIVAL"
                    />
                        <p id="vadate"></p>
                </div>

                <div className="form-group">
                <label for="flightdeparturetime">DEPARTURE TIME</label>                    

                    <input 
                        type="time" 
                        className="form-control col-4"
                        id="flightdeparturetime"
                        step="2"
                        value={flightDepartureTime}
                        onChange={(e) => setFlightDepartureTime(e.target.value)}
                        placeholder="ENTER TIME OF DEPARTURE"
                    />
                        <p id="vdtime"></p>
                </div>

                <div className="form-group">
                <label for="flightarrival">ARRIVAL TIME</label>                    

                    <input 
                        type="time" 
                        className="form-control col-4"
                        id="arrivaltime"
                        step="2"
                        value={flightArrivalTime}
                        onChange={(e) => setFlightArrivalTime(e.target.value)}
                        placeholder="ENTER TIME OF ARRIVAL"
                    />
                        <p id="vatime"></p>
                </div>

                <div >
                    <button onClick={(e)=>saveFlight(e)}className="btn btn-primary">
                        SAVE FLIGHT</button>
                </div>
            </form>
        
        </div>
        <hr></hr>
        <p class="tablehead">FLIGHTS AVAILABLE</p>

      <div className="container">
            <table class="styled-table" border="2px">
                <thead>
                    <tr>
                        <th>FLIGHT NAME</th>
                        <th>FROM</th>
                        <th>TO</th>
                        <th>SEATS AVAILABLE</th>
                        <th>ECONOMIC PRICE</th>
                        <th>BUSINESS PRICE</th>
                        <th>FIRST CLASS PRICE</th>
                        <th>DEPARTURE DATE</th>
                        <th>ARRIVAL DATE</th>
                        <th>DEPARTURE TIME</th>
                        <th>ARRIVAL TIME</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
            flights.map(flight => (
              <tr key={flight.flightId} class="active-row">
                <td>{flight.flightName}</td>
                <td>{flight.flightFrom}</td>
                <td>{flight.flightTo}</td>
                <td>{flight.totalSeats}</td>
                <td>{flight.economicPrice}</td>
                <td>{flight.businessPrice}</td>
                <td>{flight.firstClassPrice}</td>
                <td>{flight.flightDepartureDate}</td>
                <td>{flight.flightArrivalDate}</td>
                <td>{flight.flightDepartureTime}</td>
                <td>{flight.flightArrivalTime}</td>
                <td>
                <Link className="btn btn-info" to={`/flight/${flight.flightId}`}>
                    Update</Link>
                <button className="btn btn-danger ml-2" onClick={() => {
                    flightDelete(flight.flightId);
                }}>Delete</button>
                </td>
              </tr>
            ))
          }
                </tbody>
            </table>
        </div>

          <hr></hr>
        <div className="container">
        <h1 className="loginhead">ENTER PROMOTION DETAILS</h1>

        <from>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="PROVIDE BRAND IMAGE URL"
                    />
                    <p id="vbimage"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="brandname"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="ENTER BRAND NAME"
                    />
                        <p id="vbname"></p>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="promotiondescription"
                        value={promotionDescription}
                        onChange={(e) => setPromotionDescription(e.target.value)}
                        placeholder="ENTER CONTENT FOR ADVERTISMENT"
                    />
                        <p id="vbdescription"></p>
                </div>
                <div >
                      <button onClick={(e)=>addPromo(e)} className="btn btn-primary">
                          SAVE PROMOTION</button>
                </div>
        </from>
        </div>
        <p class="tablehead">PROMOTIONS</p>

        <div class="container">
<table className="table table-bordered table-striped" class="styled-table">
    <thead className="thead-dark">
    <tr>
        <th>Promotion Image</th>
        <th>Brand Name</th>
        <th>Description</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {
        promotions.map(promotions => (
        <tr key={promotions.promotionId}>
            <td align="center"><img src={promotions.image} width="50" height="45" alt="Profile Picture"/></td>
            <td>{promotions.brandName}</td>
            <td>{promotions.promotionDescription}</td>
            <td>
            <Link className="btn btn-info" to={`/promotion/${promotions.promotionId}`}>
                    Update</Link>
                    

                  <button className="btn btn-danger ml-2" onClick={() => {
                    promotionDelete(promotions.promotionId);
                  }}>Delete</button>
            </td>
        </tr>
        ))
    }
    </tbody>
</table>
</div>

        <hr></hr>

        <p class="tablehead">FFEEDBACKS</p>

<div class="container">

        <table border="2px" class="styled-table">
            <thead>
                <tr>
                    <td>
                        FEEDBACK DESCRIPTION
                    </td>
                    <td>
                        RATING
                    </td>
                </tr>
            </thead>
            <tbody>
            {
            feedbacks.map(feedback => (
              <tr key={feedback.feedbackId}>
                <td>{feedback.feedbackDescription}</td>
                <td>{feedback.rating}</td>
                
              </tr>
            ))
          }
                
            </tbody>
        </table>
</div>

        </div>
        </div>
        </div>

    )

}

export default OwnerPage;



