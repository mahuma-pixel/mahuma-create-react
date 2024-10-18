import React from "react";

export default function Weather(){return <div>
    <div className="container">
    <div className="row">
        <form className="form">
        <input type="search" placeholder="Type city" className="useForm col-sm-9" />
        <input type="submit" value={'search'} className="submitForm col-sm-3" />
    </form>
</div></div>
<h1>
    San Fransisco
</h1>
<div className="container">
    <div className="row">
        <div className="col-sm-6"> <ul><li>
            Saturday 01:17, smoke</li>
            <li>Humidity: <span className="values">30%</span>, Wind: <span className="values">6.69km/h</span>
                </li></ul></div>
        <div className="col-sm-6"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=" alt="forecast"></img></span>
        <span className="temperature">23°C</span></div>
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