import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import airlineService from "../services/airline.service";
import './Ansar.css'

function UpdateFlight(){

    const {id} = useParams();
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

    const history = useHistory();


    const updateFlight = (e) => {
        console.log("FLIGHT ID" , id)
        e.preventDefault();
        var flightId = id;
        const flight = {flightName, flightFrom, flightTo, totalSeats, economicPrice, 
            businessPrice, firstClassPrice, flightDepartureDate, flightArrivalDate,
            flightDepartureTime, flightArrivalTime ,flightId};
        airlineService.bookTicket(flight)
                .then(response => {
                    console.log('Flight data updated successfully', response.data);
                    history.goBack();
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } 
    
      useEffect(() => {
          console.log("FLIGHT ID" , id)
        if (id) {
           console.log(id)
            airlineService.getTicketDetails(id)
                .then(response => {
                    setFlightName(response.data.flightName);
                    setFlightFrom(response.data.flightFrom);
                    setFlightTo(response.data.flightTo)
                    setEconomicPrice(response.data.economicPrice)
                    setBusinessPrice(response.data.businessPrice)
                    setFirstClassPrice(response.data.firstClassPrice)
                    setFlightArrivalDate(response.data.flightArrivalDate)
                    setFlightDepartureDate(response.data.flightDepartureDate)
                    setFlightArrivalTime(response.data.flightArrivalTime)
                    setFlightDepartureTime(response.data.flightDepartureTime)
                    setTotalSeats(response.data.totalSeats)

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
    }    },[])







    return(
        <div id="regbody">

        <div className="container">

        <div className="container">
            <br/>
        <h3 class="loginhead">UPDATE FLIGHT DETAILS</h3>

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
                </div>

                <div className="form-group">
                    <input 
                        type="date" 
                        className="form-control col-4"
                        id="flightdeparturedate"
                        value={flightDepartureDate}
                        step="2"
                        onChange={(e) => setFlightDepartureDate(e.target.value)}
                        placeholder="ENTER DATE OF DEPARTURE"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="date" 
                        className="form-control col-4"
                        id="flightarrivalDate"
                        value={flightArrivalDate}
                        step="2"
                        onChange={(e) => setFlightArrivalDate(e.target.value)}
                        placeholder="ENTER DATE OF ARRIVAL"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="time" 
                        className="form-control col-4"
                        id="flightdeparturetime"
                        step="2"
                        value={flightDepartureTime}
                        onChange={(e) => setFlightDepartureTime(e.target.value)}
                        placeholder="ENTER TIME OF DEPARTURE"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="time" 
                        className="form-control col-4"
                        id="arrivaltime"
                        step="2"
                        value={flightArrivalTime}
                        onChange={(e) => setFlightArrivalTime(e.target.value)}
                        placeholder="ENTER TIME OF ARRIVAL"
                    />
                </div>

                <div >
                    <button onClick={(e)=>updateFlight(e)}className="btn btn-primary">
                        UPDATE FLIGHT</button>
                </div>
            </form>
            <hr/>
        </div>
        </div>
        </div>
    )
}

export default UpdateFlight;




