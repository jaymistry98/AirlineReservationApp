import axios from "axios";

export default axios.create({
    //baseURL: 'http://localhost:8045/api/v1',
    baseURL: 'http://localhost:8055/flightapp',
    headers: {
        'Content-Type': 'application/json'
    }
});