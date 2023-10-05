import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { add, decreaseQty,increaseQty} from './Slices/CartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const SinglePage = ({ products, status, cartitem, count }) => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const addToCart = (product) => {
    const existingItem = cartitem.find((item) => item.id === product.id);

    if (existingItem) {
      dispatch(increaseQty(product.id))
    } else {
      dispatch(add(product));
      dispatch(increaseQty(product.id))
      toast.success(`product has been added to your cart!`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  console.log("product", product);
  if (!product) {
    return <div>User not found</div>;
  }
  const handleSubmit=()=>{
    navigate('/products')
  }


  return (
    <div>
      
      <div className="row f-flex justify-content-around container ms-sm-5">
        
      
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
       
          <img className="d-block w-100 h-75   mt-5" src={product.image} alt={product.name} />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>{product.name}</h3>
          <button id="review_btn" type="button" className="btn btn-warning  " onClick={handleSubmit} >
            Back
          </button> 
          <p id="product_id">Product # {product.id}</p>
          <hr />
          <p id="product_id"><b>Product Name</b> {product.title}</p>
          <hr />
          <span id="no_of_reviews">({product.rating.count} Reviews)</span>
          <span id="no_of_reviews">({product.rating.rate} )</span>
          <hr />
          <p id="product_price">Price - ₹{product.price}</p>
          {/* <div className="stockCounter " style={{display:"flex"}}>
            <span className="btn btn-danger minus" onClick={() => dispatch(decreaseQty(product.id))} >-</span>
            <h2 className='me-3 ms-3'>{product.quantity}</h2>
            {console.log(product.quantity)}
            <span className="btn btn-success plus" onClick={() => dispatch(increaseQty(product.id))} >+</span>
          </div> */}
         
          {/* <button id="review_btn" type="button" className="btn btn-success mt-4 w-100" onClick={() => addToCart(product)} >
            Add to Cart
          </button> */}
          <hr />
          <h4 className="mt-2">Description:</h4>
          <p>{product.description}</p>
          <hr />
        
        </div>
      </div>
    </div>
  )
}
