import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import {Cart} from './components/Cart'

import {SinglePage} from './components/SinglePage';
import { useSelector } from 'react-redux';
import './App.css'

import "react-toastify/dist/ReactToastify.css"


import { SignIn } from './components/Users/SignIn/SignIn';
import { SignUp } from './components/Users/SignUp/SignUp';
import NavBarUp from './components/NavBarUp';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDasboard';
import { UserComponent } from './components/UserComponent';







function App() {
  

  const { products, status } = useSelector((state) => state.products);
 
   const {cartitem,quantity}=useSelector((state)=>state.cartItems)
 
   const {count}=useSelector((state)=>state.counter)
 
   const {user}=useSelector((state)=>state.users)
   console.log(user)
 
   
   const {userLogin}=useSelector((state)=>state.login)
 
  return (

    <div className="App">
    <BrowserRouter>
    
   <Routes>
    <Route element={<NavBarUp user={user} userLogin={userLogin}/>}>
    
    <Route path='/products' element={<Dashboard products={products} status={status} cartitem={cartitem}  userLogin={userLogin}/>}/>
    
    <Route path='/cart' element={<Cart user={user} count={count} quantity={quantity} userLogin={userLogin} />}/>
    </Route>
    <Route path='/product/:id' element={<SinglePage products={products} cartitem={cartitem} count={count}/>}/>
    <Route path='/user/signup' element={<SignUp user={user}/>}/>
    <Route index element={<SignIn user={user} />}/>
    <Route path='/admin/login' element={<AdminLogin />}/>
    <Route path='/admin' element={<AdminDashboard/>}/>
    <Route path='/admin/user/:id' element={<UserComponent/>}/>


    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
