import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import airlineService from "../services/airline.service";
import './Ansar.css'

const Promotion = () => {


    const[promotions , setPromotions] = useState([])
    const history = useHistory();

    const init = () => {
        airlineService.getAllPromotions()
          .then(response => {
            console.log('Printing promotion data', response.data);
            setPromotions(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);
    
    return (
        <div>

            <div>

            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>Promotion Image</th>
                    <th>Brand Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {
                    promotions.map(promotions => (
                    <tr key={promotions.promotionId}>
                        <td align="center"><img src={promotions.image} width="50" height="45" alt="Profile Picture"/></td>
                        <td>{promotions.brandName}</td>
                        <td>{promotions.promotionDescription}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>

        </div>

        </div>
    );
}
 
export default Promotion;