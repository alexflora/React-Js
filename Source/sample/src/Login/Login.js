import { React, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
const Login = ({ authenticate }) => {
    var [Username, setUsername] = useState('');
    var [password, setpassword] = useState('');
    const navigate = useNavigate();

    const user = {
        username: "alexander",
        password: "8124101766",
    };

    const handleOnclick = (event) => {
        event.preventDefault();

        if (Username === user.username && password === user.password) {
            authenticate(true);
            navigate('/home')
            alert("login successfully")
        }
        else {
            alert('please enter valid username & password')
        }
        // if (Username === user.email || Username === user.username) {
        //   if (password === user.password) {
        //     console.log("User Loged In");
        //   } else {
        //     console.log("wrong password");
        //   }
        // } else {
        //   console.log("please check you username or Email");
        // }
    };
    return (
        <div className="parent">
            <div className="login_left_div">
            </div>
            <div className="login_Right_div">
                <div className="login_right_parent_div">
                    <h4>LOGIN PAGE</h4>
                    <div className="login_div_style">
                        <label className="login_label_style">UserName</label>
                        <input type="text" className="login_input_style" name='uname' value={Username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="login_div_style">
                        <label className="login_label_style">Password</label>
                        <input className="login_input_style" type="text" name='password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className="login_btn_div">
                        <button className="login_btn_style" onClick={handleOnclick}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login;




// const Loginpage = () => {
//     var [Username, setUsername] = useState('');
//     var [Password, setpassword] = useState('');
//     const navigate = useNavigate();

//     // use context which is already diclare in the app component
//     const { logIn } = useContext(Main)


//     const handleOnclick = (event) => {
//         event.preventDefault();

//         if (Username === user.username && Password === user.password) {

//             // send the value to the methoed of login which is defind in the app
//             logIn({ username: Username, password: Password })

//             alert("login successfully")
//         }
//         else {
//             alert('please enter valid username & password')
//         }
//         // if (Username === user.email || Username === user.username) {
//         //   if (password === user.password) {
//         //     console.log("User Loged In");
//         //   } else {
//         //     console.log("wrong password");
//         //   }
//         // } else {
//         //   console.log("please check you username or Email");
//         // }
//     };
//     return (
//         <div className="parent">
//             <div className="login_left_div">
//             </div>
//             <div className="login_Right_div">
//                 <div className="login_right_parent_div">
//                     <h4>LOGIN PAGE</h4>
//                     <div className="login_div_style">
//                         <label className="login_label_style">UserName</label>
//                         <input type="text" className="login_input_style" name='uname' value={Username} onChange={(e) => setUsername(e.target.value)} />
//                     </div>
//                     <div className="login_div_style">
//                         <label className="login_label_style">Password</label>
//                         <input className="login_input_style" type="text" name='password' value={password} onChange={(e) => setpassword(e.target.value)} />
//                     </div>
//                     <div className="login_btn_div">
//                         <button className="login_btn_style" onClick={handleOnclick}>Login</button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
