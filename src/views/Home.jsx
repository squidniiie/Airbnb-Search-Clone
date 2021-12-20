import React from 'react';
import '../static/style/Home.css';
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className="d-flex home__section">
                <Card
                    src="https://www.travelplusstyle.com/wp-content/uploads/2020/08/papaya-playa-ipalapa-r-r.jpg"
                    title="Beachfront Stays"
                    description="Kick off your shoes and burry your stress in the sand." />
                <Card
                    src="https://www.contiki.com/v-ch1bbugwfn8q/-/media/tours/hero-images/europe/real-sicily/flo-p-2ocbq5dl-f4-unsplash-sized-filter.jpg"
                    title="Lesser Known Islands"
                    description="Venture off the beaten track for unexpected adventures." />
                <Card
                    src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/06/17/10/invisible-house-joshua-tree-06.jpg?width=968"
                    title="Find Unusual Wonders"
                    description="Relax in a stay beyond your wildest dreams." />
            </div>
        </div>
    )
}

export default Home
