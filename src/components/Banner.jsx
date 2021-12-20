import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../static/style/Banner.css';
import Search from './Search'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();
    return (
        <div className='banner'>
            <div className="d-flex banner__search row">
                {showSearch && <Search />}
                <button onClick={() => setShowSearch(!showSearch)} className='banner__search__button btn'>
                    {showSearch ? "Hide" : "Search Dates"}
                </button>
            </div>
            <div className="d-flex banner__info row">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <br />
                <button onClick={() => history.push("/search")} className='explore btn btn-ripple'>Explore Nearby</button>
            </div>
        </div >
    )
}

export default Banner
