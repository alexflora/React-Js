import Login from './Pages/Login'
import Dashbord from "./Pages/Dashbord";
import Registration from "./Pages/Register";
import Employee from './Pages/Employee';
import Booking from './Pages/Booking';
import Branch from './Pages/Branch';
import Hall from './Pages/Hall';
import Theater from './Pages/Theater';
import Payment from './Pages/Payment';
import Movie from "./Pages/Movie";
import Show from "./Pages/Show";
import Language from "./Pages/Language";
import Status from "./Pages/Status";
import Cardview from './Pages/Cardview';
// import AdminView from './Pages/AdminView';
import CustomerView from './Pages/CustomerView';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useState, useLayoutEffect, Fragment } from 'react';
import axios from 'axios';

function App() {
  const [auth, setauth] = useState(false);
  const [loader, setLoader] = useState(true);
  const PrivateRoute = () => {
    return (
      auth ? <Outlet /> : <Navigate to='/login' />
    )
  }

  useLayoutEffect(() => {
    function getInitialDatas() {
      try {
        let local = localStorage.getItem('access')
        if (local !== null) {
          axios.defaults.headers['Authorization'] = 'JWT ' + local;
          setauth(true)
        }
      } finally { setLoader(false) }
    }
    getInitialDatas();
  }, [])

  if (loader) return (<Fragment></Fragment>)

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Dashbord />} />
          <Route path='/login' element={<Login maketrue={setauth} />} />
          <Route element={<PrivateRoute />}>
            <Route path='/view' element={<CustomerView />} />
            <Route path='/cardview' element={<Cardview />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/branch' element={<Branch />} />
            <Route path='/hall' element={<Hall />} />
            <Route path='/theater' element={<Theater />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/show' element={<Show />} />
            <Route path='/language' element={<Language />} />
            <Route path='/status' element={<Status />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
