

import React ,{useEffect} from 'react'     //useState- holding data,useEffect- making API call
import Card from 'react-bootstrap/Card'           //Crd and Button are imported from react-bootstrap
import  Button  from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';

import { fetchProducts } from './Slices/ProductSlice';
import { Link } from 'react-router-dom';
import NavBarUp from './NavBarUp';
import './Product.css'

import { adder } from './Slices/UserSlice';





const Product = ({status,error}) => {
     const dispatch=useDispatch();
     const {products}= useSelector(state=>state.products)//
     const {userLogin}= useSelector(state=>state.login)//


     console.log(userLogin);
    useEffect(()=> // hook for calling API
    {
    dispatch(fetchProducts())
    },[status, dispatch]);                    
       
    if(status === 'loading'){
      return<p>Loading...</p>
    
    }

    if(status==='failed'){
      return<p>Something went wrong</p>
    }
    const addToCart=(product)=>{
   
      
      dispatch(adder({login:userLogin,cart:{...product,quantity:1}})); //login,caritem passed as action
    }
    
    const cards=products.map((product)=>(    
         //products is mapped in cards variable
      <div className='col-md-3' style={{marginBottom:'10px'}}> 
      <Card key={product.id} className='h-100 card-container'>
      <div className='text-center'>
      <Link to={`/product/${product.id}`}>
           <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
           </Link>  
      </div>
      <Card.Body>
      
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.price}
        </Card.Text>
        
      </Card.Body>

      <Card.Footer style={{background:'white'}}>
      <Button variant="primary"  onClick={()=>addToCart(product)}>Add To Cart</Button>

      </Card.Footer>
    </Card>
    </div>
))
    console.log(products)   
    
  return (
    <>
    <div className='head'>
 
       <div className='row'>
        
        {cards}
       </div>

       </div>
    
    </>
  )
}

export default Product