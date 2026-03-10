import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './Customer/Components/Navbar';
import Home from './Customer/Screens/Home';
import Product from './Customer/Screens/Product';
import ProductDetails from './Customer/Screens/ProductDetails';
import Cart from './Customer/Screens/Cart';
import Checkout from './Customer/Screens/Checkout';
import Profile from './Customer/Screens/Profile';
import Orders from './Customer/Screens/Orders';
// import OrderDetails from './Customer/Screens/OrderDetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import OrderDetails from './Customer/Screens/OrderDetails';
import BecomeSeller from './Customer/Screens/BecomeSeller';
import SellerDashboard from './Seller/Screens/SellerDashboard';
import AdminDashboard from './Admin/Screens/AdminDashboard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './Store/store';
import { fetchSellerProfile } from './Store/Seller/sellerSlice';
import Auth from './Customer/Components/Auth';
import { fetchUserProfile } from './Store/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector(store => store);
  // const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  },[])

  useEffect(() => {
    dispatch(fetchUserProfile({jwt: auth.jwt || localStorage.getItem("jwt")}));
  },[auth.jwt])

  // useEffect(() => {
  //   if(seller.profile)
  //     navigate("/seller")
  // },[seller.profile])
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/products/:category' element={<Product />} />
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/profile/*' element={<Profile />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders/:orderId/:orderItemId' element={<OrderDetails />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/seller/*' element={<SellerDashboard />} />
          <Route path='/admin/*' element={<AdminDashboard />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App
