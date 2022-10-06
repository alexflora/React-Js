import React, { Fragment } from "react";
import AdminNav from "../Layouts/AdminNav";
import Footer from "../Layouts/Footer";
import '../Css/adminview.css';
const AdminView = () => {
    return (
        <Fragment>
            <div className="parent_div_style">
                <AdminNav />
                <Footer />
            </div>
        </Fragment>
    );
}
export default AdminView;