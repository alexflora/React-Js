import React from "react";
import '../Css/register.css'
const Input = (props) => {
    return (

        <div className={props.dclass}>
            <label className={props.lclass} htmlFor={props.iname}>{props.lname}</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {
                    props?.image && <img src={props?.image} style={{ height: '30px', width: '30px', objectFit: 'cover' }} />
                }
                <input className={props.iclass} id={props.iname} type={props.itype} value={props.ivalue} onChange={props.icfunction} onBlur={props.ibfunction} name={props.iname} disabled={props.disable} />
            </div>
        </div>
    );
}
export default Input;
