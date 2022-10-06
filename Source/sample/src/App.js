// import './App.css';
// import Select from 'react-select';
import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
//import Button from './Button/Button';
import Registraion from './Button/Registration';
import Test from './Routeset/Home';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './Login/Login';
import { createContext } from 'react';
// function Sample()
// {
//   return(
//     <div>
//       <h1>Hello woorld</h1>
//     </div>
//   );
// } export default Sample;

// function Test()
// {
//   return(
//     <div>
//       <p class="head_style">This is react page</p>
//     </div>
//   );
// }
// export {Test};

// export const a=10;
// export function Sam(){
//   return(<div>
//     {a}
//     </div>)
// }


// function Test1()
// {
//   return(
//     <div>
//       <p>test2</p>
//     </div>
//   );
// }export {Test1};

// function Form()
// {
//   var userdata={}
//   function Blur(event){
//     userdata={...userdata,[event.target.name]:event.target.value}
//   }

//   function Submit(event){
//     console.log(userdata)
//   }
//   function test(event){
//     console.log(event.target.value)
//   }

//    const country=[
//     {value:'india',label:'India'},
//     {value:'amarica',label:'Amarica'},
//     {value:'japan',lable:'Japan'}
//   ]
//   const state=[
//     {value:'tamil nadu',label:'Tamil Nadu'},
//     {value:'kerala',label:'Kerala'},
//     {value:'mumbai',label:'Mumbai'}
//   ]
//   return(
//     <div>
//       <div className="parent_container">
//         <div className='btn_div'>
//           <button className="home_btn">Home</button>
//         </div>
//         <div className="form">
//         <div className="div_style">
//           <label className='label_style' forid='name' >Name</label>
//           <input type="text" className='input_style' id='name' name='Name' onBlur={test}/>
//         </div>
//         <div className="div_style">
//           <label className='label_style'>DOB</label>
//           <input type="date" className='input_style' name="DOB" onBlur={Blur} />
//         </div>
//         <div className="div_style">
//           <label className='label_style'>Age</label>
//           <input type="number" className='input_style' name="Age" onBlur={Blur} />
//         </div>
//         <div className="div_style">
//           <label className='label_style'>Gender</label>
//           <input type="radio" className="radio_style" value="Male" name="gender" onBlur={Blur} /><label className="radio_lable">Male</label>
//           <input type="radio" className="radio_style" value="Female" name="gender" onBlur={Blur}/><label className="radio_lable">Female</label>
//         </div>
//         <div className="div_style">
//           <label className='label_style'>Country</label>
//           <Select options={country} className='input_style' name="Country" onBlur={Blur} />
//         </div>
//         <div className="div_style">
//           <label className='label_style'>State</label>
//           <Select options={state} className='input_style' name="State" onBlur={Blur}/>
//         </div>
//         <div className='checkbox-part'>
//           <input type="checkbox" name="Qualified" onBlur={Blur}/><label>Developer Qulaified</label>
//         </div>
//         <div>
//           <button className="submit_btn" onClick={Submit}>Submit</button>
//         </div>

//       </div>
//       </div>
//     </div>

//   )
// }
// export {Form};
export default function App() {
    // const [auth, setauth] = useState();
    // const PrivateRoute = () => {
    //     return (
    //         auth ? <Outlet /> : <Navigate to='/login' />
    //     )
    // }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Test />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}



            // <BrowserRouter>
            //     <Routes>
            //         <Route element={<PrivateRoute />}>
            //             <Route path='/registraion' element={<Registraion />} />
            //         </Route>
            //         <Route path='/login' element={<Login authenticate={setauth} />} />
            //     </Routes>
            // </BrowserRouter>




// export const Main=createContext()
// const logsetinlocal=() =>
// {
//     const [isLogIn, setIsLogIn] = useState(false)
    
//     const logIn = async (date) => {
//         const finalData = JSON.stringify(data)
//         console.log(finalData)
//         await localStorage.setItem('userLog', finalData)
//         setIsLogIn(true)
//     }
//     useLayoutEffect(() =>
//     {
//         alert("uselayout")
//         const data = localStorage.getItem('userLog')
//         if (data) {
//             setIsLogIn(true)
//         }
//         else {
//             setIsLogIn(false)
//         }
//     },[])

//     useEffect(() =>
//     {
//        alert("useeffect")
//     }, [])
    
//     return (
//         <div>
//             <Main.Provider value={{ logIn }}
//             <BrowserRouter>
//                 <Routes>
//                     {
//                         isLogIn ?
//                             <Fragment>
//                                 <Route path='' element={<Home />} />
//                                 <Route path="*" element={ } />
//                             </Fragment>

//                             :
//                             <Fragment>
//                                 <Route path='/' element={<Login />} />
//                                 <Route path="*" element={ }/> // for default page for 404 error
//                             </Fragment>
                            
//                     }
//                 </Routes>
//             </BrowserRouter>
//             </Main.Provider>
//         </div>
//     );

// }