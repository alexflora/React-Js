import React, { useEffect } from 'react';
import '../Css/dashbord.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDashbordimage } from '../Redux/Action';
const Test = () => {
    const dispatch = useDispatch()
    const { dashbordimage } = useSelector((state) => state.reducerResult)
    // const [image, setImage] = useState([dashbordimage?.map(res => res?.movieimage)])

    useEffect(() => {
        dispatch(getDashbordimage())
    }, [])

    return (
        <div>
            <table style={{ margin: "auto" }}>
                <tbody>
                    {
                        dashbordimage.map((res, index) => {
                            return (
                                <div class="row g-1">
                                    <div class="col-12">
                                        <img src={res && res.movieimage} alt={index} style={{ width: "500px", height: "200px" }} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Test;