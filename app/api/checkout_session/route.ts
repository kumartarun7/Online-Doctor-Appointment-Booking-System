import { NextRequest, NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request:NextRequest) {
  const item = await request.json();


// console.log(item);

  // const transformedItem = {
  //   price_data: {
  //     currency: 'inr',
  //     product_data: {
  //       name: item.name,
  //     },
  //     unit_amount: item.price * 100,
  //   },
  //   description: item.description,
  //   quantity: item.quantity,
  // };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
        
      price_data:{
        currency:'inr' ,
        unit_amount:item.price*100,
        product_data:{
          name: item.name,
          description: item.description,
          images:[item.image]
        },
      },
      quantity:1
    }],
    mode: 'payment',
    success_url: 'http://localhost:3000/home',
    cancel_url: 'http://localhost:3000/services',
  });

 return NextResponse.json({ id: session.id });
}

