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
import PaymentView from './Pages/PaymentView';
import CustomerView from './Pages/CustomerView';
import EmployeeView from './Pages/EmployeeView';
import MovieView from './Pages/MovieView';
import BookingView from './Pages/BookingView';
import AdminView from './Pages/AdminView';
import Test from './Pages/Test';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useState, useLayoutEffect, Fragment } from 'react';
import axios from 'axios';

function App() {
  const [auth, setauth] = useState(false);
  console.log("auth", auth)
  const [loader, setLoader] = useState(true);
  const PrivateRoute = () => {
    return (
      auth ? <Outlet /> : <Navigate to='/' />
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
      }
      finally { setLoader(false) }
    }
    getInitialDatas();
  }, [])

  if (loader) return (<Fragment></Fragment>)

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/' element={<Login maketrue={setauth} />} />
          <Route element={<PrivateRoute />}>
            <Route path='/test' element={<Test />} />
            <Route path='/dashbord/:id' element={<Dashbord />} />
            <Route path='/customerview' element={<CustomerView />} />
            <Route path='/employeeview' element={<EmployeeView />} />
            <Route path='/adminview' element={<AdminView />} />
            <Route path='/movieview' element={<MovieView />} />
            <Route path='/cardview' element={<Cardview />} />
            <Route path='/payview' element={<PaymentView />} />
            <Route path='/bookview' element={<BookingView />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/booking' element={<Booking />} >
              <Route index element={<Booking />} />
              <Route path=":id" element={<Booking />} />
            </Route>
            <Route exact path='/branch' element={<Branch />} >
              <Route exact index element={<Branch />} />
              <Route exact path=":id" element={<Branch />} />
            </Route>
            <Route path='/movie' element={<Movie />} >
              <Route exact index element={<Movie />} />
              <Route exact path=":id" element={<Movie />} />
            </Route>
            <Route path='/hall' element={<Hall />} />
            <Route path='/theater' element={<Theater />} />
            <Route path='/payment' element={<Payment />} />
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
