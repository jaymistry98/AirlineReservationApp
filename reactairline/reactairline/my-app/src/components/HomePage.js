import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import airlineService from "../services/airline.service";
import { useEffect } from "react/cjs/react.development";
import Promotion from "./Promotion";
import './Ansar.css'
import NavBar  from "./NavBar";



const HomePage=()=>{


    const[flights , setFlights] = useState([])

    const[offers , setOffers] = useState([])

    const init = () => {
        airlineService.getAllFlights()
          .then(response => {
            console.log('Printing Flights data', response.data);
            setFlights(response.data);
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
 


    useEffect(() => {
        init();
      }, []);
    

    return(
     
        <div className="maindiv">
          <nav class="navbar fixed-top navbar-dark bg-dark">
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
          <Link className="btn btn-info" to={`/register`}  >
              REGISTER</Link>
              </div>          
        </nav>
         
        
<br></br>
<br>
</br>
<br>
</br>
            <p class="tablehead">FLIGHTS AVAILABLE</p>
        <div class="container">
            <table  class="styled-table">
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
              </tr>
            ))
          }
                </tbody>
            </table>
        </div>

        <p></p>
        <p class="tablehead">OFFERS AVAILABLE</p>


        <div className="container">
            <table class="styled-table" >
                <thead>
                    <tr>
                        <td>FLIGHT FROM</td>
                        <td>FLIGHT TO</td>
                        <td>DISCOUNT</td>
                    </tr>
                </thead>
                <tbody>
                {
            offers.map(offer => (
              <tr key={offer.offerId} class="active-row">
                <td>{offer.offerFrom}</td>
                <td>{offer.offerTo}</td>
                <td>{offer.discount}</td>
              </tr>
            ))
          }

                </tbody>
            </table>
        </div>
          <br>
          </br>
          <Promotion/>
        </div>
    )
}                            
export default HomePage;