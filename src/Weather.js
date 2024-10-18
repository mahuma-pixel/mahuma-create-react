import React from "react";

export default function Weather(){return <div>
    <div className="container">
    <div className="row">
        <form className="form">
        <input type="search" placeholder="Type city" className="useForm col-sm-9" />
        <input type="submit" value={'search'} className="submitForm col-sm-3" />
    </form>
</div></div>
<div className="container">
    <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6"></div>
    </div></div>
    <br/>
    <div className="container">
    <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
    </div></div>
</div>}