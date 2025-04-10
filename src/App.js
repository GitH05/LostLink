
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './components/IndexPage';
import LostItemForm from './components/LostItemForm';
import FoundItemForm from './components/FoundItemForm';
import PostItem from './components/PostItem';
import { Slide, ToastContainer } from 'react-toastify';
import Login from './components/Login';
import { UserProvider } from './provider/UserProvider';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import PostDetail from './components/PostDetail';
import { useEffect, useState } from 'react';
import Dasclaimer from './components/Dasclaimer';
import HomePage from './components/HomePage';

function App() {
  const [popupshow,setpopupshow]=useState(false)
  useEffect(() => {
    setTimeout(() => {
      setpopupshow(true)
    }, 7000);
    
  }, []);
  return (
    <>
    {popupshow?(<UserProvider>
   <Routes>
    <Route path='/' element={<IndexPage/>}>
    <Route index element={<HomePage/>} />
    <Route path='/lostform' element={<LostItemForm/>}/>
    <Route path='/foundform' element={<FoundItemForm/>}/>
    <Route path='/post' element={<PostItem/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/postdetail/:id' element={<PostDetail/>}/>
    </Route>
   </Routes>
   <ToastContainer autoClose={2000} transition={Slide} />
   </UserProvider>):(<Dasclaimer/>)}
   </>
  );
}

export default App;
