import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../static/style/main.css'


export default () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div className="container col-12 text-center bg-white shadow p-4 rounded">
            <h2>Message from the backend: {message}</h2>
            <img width="4rem" src="bobby.img" alt="bobby" />
            <div className="main card text-center">
                <div className="hero img shadow"></div>
                <div className='col-5'>
                    <p className="main header container col">
                        <h4>With 'āina and join the Ohana</h4>
                        <h2>Hawaiian Adventure,</h2>
                        <h5>paradise at your fingertips.</h5>
                    </p>
                </div>
                <div className="nav btn-group shadow">
                    <a className="nav btn" href="#">Explore</a>
                    <a className="nav btn" href="#">Plan</a>
                    <a className="nav btn" href="#">Book</a>
                </div>
            </div>
            <div className="d-flex bottom row">
                <br />
                <card className="tile card col text-center bg-white shadow p-4">
                    <h4>hello</h4>
                </card>
                <card className="tile card col text-center bg-white shadow p-4">
                    <h4>hello</h4>
                </card>
                <card className="tile card col text-center bg-white shadow p-4">
                    <h4>hello</h4>
                </card>
            </div>
        </div>
    )
}