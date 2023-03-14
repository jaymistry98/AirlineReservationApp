import { useEffect, useState } from "react/cjs/react.development";
import { Link, useHistory, useParams } from "react-router-dom";
import airlineService from "../services/airline.service";
import './Ansar.css'
import Promotion from "./Promotion";


function UserPage(){

  //  const {flightId} = useParams();
    const [flightFrom, setFlightFrom] = useState('');
    const[flightTo, setFlightTo] = useState('');
    const[flights , setFlights] = useState([])
    const [flightDepartureDate, setDepartureDate] = useState('')
    const[bookFlights , setBookFlights] = useState([])
    const[ticketPrice, setTicketPrice] = useState('')
    const[offers , setOffers] = useState([])
    const history = useHistory();

    const[seats , setSeats] = useState(1)
    const [discountAmt , setDiscountAmt] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)


    const init=(e)=>{
    e.preventDefault();
      if(flightFrom==="" || flightTo==="" || flightDepartureDate===""){
        if(flightFrom==="")
          document.getElementById("from").innerText="ENTER FROM LOCATION"
        else
        document.getElementById("from").innerText=""

        if(flightTo==="")
        document.getElementById("to").innerText="ENTER TO LOCATION"
        else
        document.getElementById("to").innerText=""

        if(flightDepartureDate==="")
        document.getElementById("depdate").innerText="ENTER DEPARTURE DATE"
        else
        document.getElementById("depdate").innerText=""

      }
      else{
        document.getElementById("to").innerText=""
        document.getElementById("from").innerText=""
        document.getElementById("depdate").innerText=""


        airlineService.getAllFlights()
        .then(response => {
          console.log('Printing Flights data', response.data);
          setFlights(response.data);
          var flag = 0;
          response.data.map(flight => {
            console.log("FOR LOOP")
            if(flight.flightFrom === flightFrom && flight.flightTo === flightTo 
              && flight.flightDepartureDate=== flightDepartureDate){
                console.log("VERIFY")
                flag=1;
                console.log("VERIFY FLAG", flag);
              }})
          
          if (flag===0){
            console.log("ALERT FLAG", flag);
            window.alert("NO FLIGHTS FOUND");
            console.log("ALERT FLAG", flag);
    
          }



        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 

        airlineService.getAllOffers()
        .then(response => {
          console.log('Printing Discounts data', response.data);
          setOffers(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
      }

      }

      const ticketData = (id) => {
        console.log('Printing id', id);
        airlineService.getTicketDetails(id)
          .then(response => {
            console.log('Ticket Details', response.data);
            setBookFlights(response.data)
            init();
          })
          .catch(error => {
            console.log('Something went wrong', error);
          })
      }

      const selectDiscount = (dis) => {
        console.log('Discount', dis);
        setDiscountAmt(dis);
        console.log(discountAmt)
      }

      const getPrice=()=>{
      if(seats<=bookFlights.totalSeats){
        if(ticketPrice==="economic" ){
          var fp = seats*( bookFlights.economicPrice - bookFlights.economicPrice*discountAmt/100);
          setFinalPrice(fp);
        }
        else if(ticketPrice==="business"){
          var fp = seats * (bookFlights.businessPrice - bookFlights.businessPrice*discountAmt/100);
          setFinalPrice(fp);
        }
        else if(ticketPrice==="first"){
          var fp = seats * (bookFlights.firstClassPrice - bookFlights.firstClassPrice*discountAmt/100);
          setFinalPrice(fp);
        }
        bookFlights.totalSeats=bookFlights.totalSeats-seats;
      }
      else{
        window.alert("SEATS NOT AVAILABLE")
      }
      }

      var flightId = bookFlights.flightId;
      var flightName = bookFlights.flightName;
      //var flightFrom = bookFlights.flightFrom;
      //var flightTo = bookFlights.flightTo;
      var totalSeats = bookFlights.totalSeats;
      var economicPrice = bookFlights.economicPrice;
      var businessPrice = bookFlights.businessPrice;
      var firstClassPrice = bookFlights.firstClassPrice;
      //var flightDepartureDate = bookFlights.flightDepartureDate;
      var flightArrivalDate = bookFlights.flightArrivalDate;
      var flightDepartureTime = bookFlights.flightDepartureTime;
      var flightArrivalTime = bookFlights.flightArrivalTime;
    
      const ticket = {flightId , flightName , flightFrom , flightTo ,
      totalSeats, economicPrice , businessPrice , firstClassPrice , flightDepartureDate , 
    flightArrivalDate , flightDepartureTime , flightArrivalTime }
      const bookTicket = (flightId) => {
        if(finalPrice===0){
          window.alert("GET YOUR FINAL PRICE BEFORE BOOKING")
        }
        else{
        console.log('Printing id', flightId);
        airlineService.bookTicket(ticket)
          .then(response => {
            console.log('Ticket Details', response.data);
            history.push("/endpage")
          })
          .catch(error => {
            console.log('Something went wrong', error);
          })
        }
      }

     

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
        <br/>
        <br/>
        <br/>
                    <div className="container">

            <p class="loginhead">PROVIDE TRAVEL DETAILS</p>
            <form className="form-group">
                      <input 
                          type="text" 
                          className="form-control col-4"
                          id="flightfrom"
                          value={flightFrom}
                        onChange={(e) => setFlightFrom(e.target.value)}
                        placeholder="FROM.."
                    />
                          <p id="from"></p>

                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="flightto"
                        value={flightTo}
                        onChange={(e) => setFlightTo(e.target.value)}
                        placeholder="TO.."
                    />
                          <p id="to"></p>
                          <label for="departuredate">DEPARTURE DATE</label>                    
                      <input 
                        type="date" 
                        className="form-control col-4"
                        id="departuredate"
                        value={flightDepartureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        placeholder="DEPARTURE DATE.."
                    />
                      <p id="depdate"></p>
                      

                    <div>
                    <button onClick={(e) => init(e)} className="btn btn-primary">
                      SUBMIT</button>
                    </div>
                  

            </form>
            </div>

      
                  <hr></hr>
            <div className="container">
            <p class="tablehead">FLIGHTS AVAILABLE</p>
            
            <table  class="styled-table">
                <thead>
                    <tr>
                        <td>FLIGHT NAME</td>
                        <td>FROM</td>
                        <td>TO</td>
                        <td>SEATS AVAILABLE</td>
                        <td>ECONOMIC PRICE</td>
                        <td>BUSINESS PRICE</td>
                        <td>FIRST CLASS PRICE</td>
                        <td>DEPARTURE DATE</td>
                        <td>ARRIVAL DATE</td>
                        <td>DEPARTURE TIME</td>
                        <td>ARRIVAL TIME</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
               
                {
            flights.map(flight => {
                if(flight.flightFrom === flightFrom && flight.flightTo === flightTo 
                  && flight.flightDepartureDate=== flightDepartureDate){ 
              return (<tr key={flight.flightId}>
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
               <button className="btn btn-primary ml-2" onClick={() => {
                    ticketData(flight.flightId);
                  }}>SELECT</button>
             
               </td>
                
              </tr>
              )}
            })
          }
          
                </tbody>
            </table >
            </div>
            <hr></hr>
            <div className='container'>
              
            <p class="tablehead">OFFERS AVAILABLE</p>
            
            <table  class="styled-table">
                <thead>
                    <tr>
                        <td>FLIGHT FROM</td>
                        <td>FLIGHT TO</td>
                        <td>DISCOUNT</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                     
                {
            offers.map(offer => {
                if(offer.offerFrom === flightFrom && offer.offerTo === flightTo){
              return (<tr key={offer.offerId}>
                <td>{offer.offerFrom}</td>
                <td>{offer.offerTo}</td>
                <td>{offer.discount}</td>
                <td>
                <button className="btn btn-primary ml-2" onClick={() => {
                    selectDiscount(offer.discount);
                  }}>SELECT</button>
                </td>
                
              </tr>
              )}
            })
          }

                </tbody>
            </table>
        </div>
        <hr></hr>

        <div  class="container" id="seatclass">
        <p class="loginhead">SEAT PREFERENCE</p>   
        <form> 
        <div>
            <select class="form-control col-4" value={ticketPrice} 
                onChange={(e) => setTicketPrice(e.target.value)}>   
                      <option value="" disabled selected>Select Your Seat Category</option>
                      <option value="economic">ECONOMIC CLASS</option>
                      <option value="business">BUSINESS CLASS</option>
                      <option value="first">FIRST CLASS</option>                       
              </select>
        </div>
<br/>
        <div>
        <input 
              type="text" 
              className="form-control col-4"
              id="seats"
             value={seats}
              onChange={(e) => setSeats(e.target.value)}
             placeholder="NO OF SEATS.."
                    />

        </div>
        </form>
        </div>
        <hr></hr>
        <div className="container">
        <p class="tablehead">HERE ARE YOUR TICKET DETAILS</p>
            
            <table  class="styled-table">
            
                <thead>
                    <tr>
                        <td>FLIGHT NAME</td>
                        <td>FROM</td>
                        <td>TO</td>
                        <td>DEPARTURE DATE</td>
                        <td>ARRIVAL DATE</td>
                        <td>DEPARTURE TIME</td>
                        <td>ARRIVAL TIME</td>
                        <td>PRICE</td>
                    </tr>
                </thead>
                <tbody>
                {
               <tr key={bookFlights.flightId}>
                <td>{bookFlights.flightName}</td>
                <td>{bookFlights.flightFrom}</td>
                <td>{bookFlights.flightTo}</td>
                <td>{bookFlights.flightDepartureDate}</td>
                <td>{bookFlights.flightArrivalDate}</td>
                <td>{bookFlights.flightDepartureTime}</td>
                <td>{bookFlights.flightArrivalTime}</td>
                
                {(()=>{
                if(ticketPrice!="") {
                 return(
                  <td>
                    <button className="btn btn-primary ml-2" onClick={() => {
                    getPrice();
                  }}>GET FINAL PRICE</button>

                </td>
                 )
                }
              })()
              }
              </tr>
          }
                </tbody>
            </table >
            </div>
          <hr></hr>
          <div className="container">
            <mark class="end">FINAL PRICE : {finalPrice}</mark>
            
<hr></hr>            
            <button className="btn btn-primary ml-1 col-3" onClick={() => {
                    bookTicket();
                  }}>BOOK</button>
          </div> 
<hr></hr>
          <Promotion/>

            
</div>
          
       
    )
}

export default UserPage;






