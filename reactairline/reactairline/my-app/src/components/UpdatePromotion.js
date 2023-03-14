import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import airlineService from "../services/airline.service";




export default function UpdatePromotion(){


    const {id} = useParams();
    const [promotionDescription , setPromotionDescription] = useState('')
    const [brandName , setBrandName] = useState('')
    const [image , setImage] = useState('')

    const history = useHistory();


    const updatePromotion = (e) => {
        console.log("PROMOTION ID")
        e.preventDefault();
        var promotionId = id;
        const promotion = {promotionDescription , brandName , image , promotionId}
        airlineService.updatePromotion(promotion)
                .then(response => {
                    console.log('Promotion data updated successfully', response.data);
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
            airlineService.getPromotionById(id)
                .then(response => {
                    setPromotionDescription(response.data.promotionDescription)
                    setBrandName(response.data.brandName)
                    setImage(response.data.image)

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
        <p class="loginhead">UPDATE PROMOTION DETAILS</p>
        <form>
        <div className="form-group">

        <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="PROVIDE IMAGE URL"
                    />
                </div>

        <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="brandname"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="BRAND NAME"
                    />
            </div>


                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="promotiondescription"
                        value={promotionDescription}
                        onChange={(e) => setPromotionDescription(e.target.value)}
                        placeholder="PROVIDE PROMOTION DESCRIPTION"
                    />
                </div>
                <div >
                    <button onClick={(e)=>updatePromotion(e)}className="btn btn-primary">
                        UPDATE PROMOTION</button>
                </div>
                </div>
        </form>

</div>
</div>
</div>
    )

}