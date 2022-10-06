import '../Css/register.css'
import { Link } from 'react-router-dom'
const Button = (props) => {
    return (
        <div className={props.dclass}>
            <Link to={props.navigate} style={{ textDecoration: "none" }}><button type={props.btype} className={props.bclass} onClick={props.bfunction}>{props.bname}</button></Link>
        </div>
    );
}
export default Button
