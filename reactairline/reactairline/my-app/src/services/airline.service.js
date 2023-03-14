import httpClient from "../http-common";


//FLIGHTS
const getAllFlights = () =>{
    return httpClient.get('/allflight');
}

const createFlight = flight =>{
    return httpClient.post('/createflight', flight)
}

const getTicketDetails = id =>{
    return httpClient.get(`/ticketdata/${id}`)

}

const bookTicket = data =>{
    return httpClient.put('updateflight' , data)
}

const deleteFlight = id => {
    return httpClient.delete(`/deleteflight/${id}`);
}




//USERS
const getAllUsers = () =>{
    return httpClient.get('/alluser');
}

const createUser = user =>{
    return httpClient.post('/createuser' , user);
}

const updateUser = user =>{
    return httpClient.put('/updateuser',user)
}


//OFFERS
const getAllOffers=()=>{
    return httpClient.get('/alloffers');
}

const createOffer = offer =>{
    return httpClient.post('/createoffer', offer);
}

const getOfferById = id =>{
    return httpClient.get(`/offerbyid/${id}`)
}

const updateOffer = data =>{
    return httpClient.put('updateoffer' , data)
}

const deleteOffer = id => {
    return httpClient.delete(`/deleteoffer/${id}`);
}


//FEEDBACK

const createFeedback = feedback =>{
    return httpClient.post('/createfeedback',feedback);
}

const getAllFeedback = ()=>{
    return httpClient.get('/allfeedback')
}



//PROMOTION

const getAllPromotions=()=>{
    return httpClient.get('/allpromotions');
}

const getPromotionById = id =>{
    return httpClient.get(`/promotionbyid/${id}`)
}

const createPromotion = promotion =>{
    return httpClient.post('/createpromotion', promotion);
}

const updatePromotion = promotion =>{
    return httpClient.put('/updatepromotion' , promotion)
}

const deletePromotion = id => {
    return httpClient.delete(`/deletepromotion/${id}`);
}


export default { 
    getAllFlights , getAllUsers, createFlight, createUser, 
    getTicketDetails ,createOffer,getAllOffers , bookTicket ,
    createFeedback , getAllPromotions , createPromotion , getAllFeedback,
    getOfferById , updateOffer, deleteOffer, deleteFlight , updateUser,
    updatePromotion , getPromotionById, deletePromotion};