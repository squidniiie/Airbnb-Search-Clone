import React from 'react';
import '../static/style/SearchResult.css';

function SearchResult(props) {
    const { img, location, title, description, star, price, total } = props;

    return (
        <div className='d-flex searchResult'>
            <img className="searchResult__img" src={img} />
            <div className="searchResult__heart" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </div>
            <div className="d-flex searchResult__info">
                <div className="searchResult__info__top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_________</p>
                    <p>{description}</p>
                </div>
                <div className="d-flex searchResult__info__bottom">
                    <div className=" d-flex searchResult__rating">
                        <svg className="searchResult__star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <strong>{star}</strong>
                    </div>
                    <div className="searchResult__price">
                        <h3>{price}</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
