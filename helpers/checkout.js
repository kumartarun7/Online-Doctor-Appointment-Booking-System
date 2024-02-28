import {loadStripe} from "@stripe/stripe-js";


export async function checkout({lineItems}){

  let stripepromise=null;

  const getstripe=()=>{

    if(!stripepromise){
        stripepromise=loadStripe(`${process.env.API_KEY}`)
      }
      return stripepromise

  }


   const stripe=await getstripe();
   await stripe.redirectToCheckout({

    mode:"payment",
    lineItems,
    successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION}`,
    cancelUrl:window.location.origin

   })


}
