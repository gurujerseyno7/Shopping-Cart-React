import React, { Fragment } from 'react'

import { useSelector } from 'react-redux'

import {  Link, useParams } from 'react-router-dom'

 

export const UserComponent = () => {

    const {id}=useParams()

    const {user}=useSelector((state)=>state.users)

    console.log(typeof user);

    console.log(user);

    const final=user.find((e)=>e.id===parseInt(id))

    console.log(final.cartitem);

    const over=final.cartitem;

    const cart=over.map((e)=>{

      return{

        title:e.title,

        price:e.price,

        image:e.image,

        id:e.id,

        quantity:e.quantity,

      }

    })

    const totalCount = over.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = over.reduce((acc, item) => acc + item.price * item.quantity, 0);

 

    // const final=siva.cartitem

  return (

    <div className='image '>

    <div className='container '>

      <Fragment>

        {cart.length === 0 ? (

          <h2 className='mt-5'>Your Cart is Empty</h2>

        ) : (

          <Fragment>

            <h2 className='mt-5 text-danger'>

              Total  <b>{cart.length} items</b>

            </h2>

            <div className='row d-flex justify-content-between'>

              <div className='col-12 col-lg-6'>

                {cart.map((item) => (

                  <Fragment key={item.id}>

                    <hr />

                    <div className='cart-item'>

                      <div className='row'>

                        <div className='col-4 col-lg-3'>

                        <Link to={`/product/${item.id}`}>

                          <img src={item.image} alt={item.name} height='115' width='115' />

                          </Link>

                        </div>

                       

                        <div className='col-5 col-lg-3'>

                          {item.title}

                        </div>

                        <div className='col-4 col-lg-2 mt-4 mt-lg-0'>

                          <p id='card_item_price'>₹ {item.price}</p>

                        </div>

                        <div className='col-4 col-lg-3 mt-4 mt-lg-0'>

                          <div className='stockCounter' style={{ display: 'flex' }}>

                     

                            <h6 className='ms-3 me-3'>{item.quantity}</h6>

                         

                          </div>

                          <p className='mt-3 text-warning'><b>Total Value:</b> ₹{item.price * item.quantity}</p>

                        </div>

                        <div className='col-4 col-lg-1 mt-4 mt-lg-0'>

                         

                        </div>

                      </div>

                    </div>

                  </Fragment>

                ))}

                <hr />

              </div>

              <div className='col-12 col-lg-3 my-4'>

                <div className='order_summary  '>

                  <h4>Order Details</h4>

                  <hr />

                  <p>

                    Total Count: <span className='order-summary-values'>{totalCount} Products</span>

                  </p>

                  <p>

                    Total Price: <span className='order-summary-values'>₹ {(totalPrice).toFixed(2)}</span>

                  </p>

                  <hr />

               

                </div>

              </div>

            </div>

          </Fragment>

        )}

      </Fragment>

    </div>

    </div>

  )

}