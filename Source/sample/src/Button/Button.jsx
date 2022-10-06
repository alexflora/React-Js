import { useState } from 'react';
import './Button.css';
function Button()
{
    var [sam,setCount]=useState({});
        //window.console.log(setCount(sam+1));
        // window.console.log('hello')
        // setCount(sam+1);
        // console.log(sam);

        function fun(e) {
            if (sam[e.target.name]) {
              setCount({ ...sam, [e.target.name]: +sam[e.target.name] + 1 });
            } else {
              setCount({ ...sam, [e.target.name]: 1 });
            }
          }
          return(
            <div>
              <button name="btn" onClick={fun}>Button</button>
              <h6>button1-{sam ?.button1}</h6>

              <button name="button2" onClick={fun}>Button</button>
              <h6>button1-{sam ?.button2}</h6>
            </div>
        )
} export default Button;

            // <button name="button1" className="btn1" onClick={()=>{test(1)}}>Button</button>
            // <input type="text" id='1'  name="input"  value={sam[1]} className='input'/> 
            // <button name="button1" className="btn1" onClick={()=>{test(2)}}>Button</button>
            // <input type="text" id='2'  name="input"  value={sam[2]} className='input'/>