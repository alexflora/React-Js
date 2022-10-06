import React from "react";
import '../Css/register.css'
const Input = (props) => {
    return (

        <div className={props.dclass}>
            <label className={props.lclass} htmlFor={props.iname}>{props.lname}</label>
            <input className={props.iclass} id={props.iname} type={props.itype} value={props.ivalue} onChange={props.icfunction} onBlur={props.ibfunction} name={props.iname} disabled={props.disable} />
        </div>
    );
}
export default Input;
