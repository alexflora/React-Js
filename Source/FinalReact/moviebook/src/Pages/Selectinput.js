import React from "react";
import Select from "react-select";


const Selectinput = (props) => {
    return (
        <div className={props.dclass}>
            <label className={props.lclass} htmlFor={props.iname}>{props.lname}</label>
            <Select options={props.optionsval} className={props.iclass} id={props.iname} getOptionLabel={props.optionlabel} getOptionValue={props.optionvalue} value={props.selectvalue} onChange={props.ifunction} name={props.iname} />
        </div>
    );
}
export default Selectinput;