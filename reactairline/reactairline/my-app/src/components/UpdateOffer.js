// import { useHistory, useParams } from "react-router-dom";
// import { useEffect, useState } from "react/cjs/react.development";
// import airlineService from "../services/airline.service";


// function UpdateOffer(){

//     const {id} = useParams();
//     const [offerFrom , setOfferFrom] = useState('')
//     const [offerTo , setOfferTo] = useState('')
//     const [discount , setDiscount] = useState('')

//     const history = useHistory();


//     const updateOffer = (e) => {
//         console.log("OFFER ID")
//         e.preventDefault();
//         var offerId = id;
//         const offer = {offerFrom , offerTo , discount , offerId}
        
//         airlineService.updateOffer(offer)
//                 .then(response => {
//                     console.log('Offer data updated successfully', response.data);
//                     history.goBack();
//                 })
//                 .catch(error => {
//                     console.log('Something went wrong', error);
//                 }) 
//         } 
    
//       useEffect(() => {
//           console.log("ANSAR")
//         if (id) {
//            console.log(id)
//             airlineService.getOfferById(id)
//                 .then(response => {
//                     setOfferFrom(response.data.offerFrom);
//                     setOfferTo(response.data.offerTo);
//                     setDiscount(response.data.discount);

//                 })
//                 .catch(error => {
//                     console.log('Something went wrong', error);
//                 })
//     }    },[])

// return(
//     <div>
//         <form>
//         <div className="form-group">

//         <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="offerfom"
//                         value={offerFrom}
//                         onChange={(e) => setOfferFrom(e.target.value)}
//                         placeholder="ENTER FROM.."
//                     />
//                 </div>

//         <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="offerto"
//                         value={offerTo}
//                         onChange={(e) => setOfferTo(e.target.value)}
//                         placeholder="ENTER TO.."
//                     />
//             </div>


//                 <div className="form-group">
//                     <input 
//                         type="text" 
//                         className="form-control col-4"
//                         id="discount"
//                         value={discount}
//                         onChange={(e) => setDiscount(e.target.value)}
//                         placeholder="ENTER DISCOUNT.."
//                     />
//                 </div>
//                 <div >
//                     <button onClick={(e)=>updateOffer(e)}className="btn btn-primary">
//                         UPDATE OFFER</button>
//                 </div>
//                 </div>
//         </form>


//     </div>
// )





// }


// export default UpdateOffer;


import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import airlineService from "../services/airline.service";


function UpdateOffer(){

    const {id} = useParams();
    const [offerFrom , setOfferFrom] = useState('')
    const [offerTo , setOfferTo] = useState('')
    const [discount , setDiscount] = useState('')

    const history = useHistory();


    const updateOffer = (e) => {
        console.log("OFFER ID")
        e.preventDefault();
        var offerId = id;
        const offer = {offerFrom , offerTo , discount , offerId}
        
        airlineService.updateOffer(offer)
                .then(response => {
                    console.log('Offer data updated successfully', response.data);
                    history.goBack();
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } 
    
      useEffect(() => {
          console.log("ANSAR")
        if (id) {
           console.log(id)
            airlineService.getOfferById(id)
                .then(response => {
                    setOfferFrom(response.data.offerFrom);
                    setOfferTo(response.data.offerTo);
                    setDiscount(response.data.discount);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
    }    },[])

return(
    <div class="body">
    <div id="regbody">
    <div class="container">
        <br></br>
    <h3 class="loginhead">UPDATE OFFER DETAILS</h3>
        <form>
        <div className="form-group">

        <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="offerfom"
                        value={offerFrom}
                        onChange={(e) => setOfferFrom(e.target.value)}
                        placeholder="ENTER FROM.."
                    />
                </div>

        <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="offerto"
                        value={offerTo}
                        onChange={(e) => setOfferTo(e.target.value)}
                        placeholder="ENTER TO.."
                    />
            </div>


                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="discount"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        placeholder="ENTER DISCOUNT.."
                    />
                </div>
                <div >
                    <button onClick={(e)=>updateOffer(e)}className="btn btn-primary">
                        UPDATE OFFER</button>
                </div>
                </div>
        </form>

     </div>

    </div>
    </div>
)





}


export default UpdateOffer;


