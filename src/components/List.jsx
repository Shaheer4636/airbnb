import React from 'react'
import './styles/list.css'
const List = ({ data }) => {

    return (
        <div className='list'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <div className="cards-list">
                {data.map(item => {
                    // badge logic 
                    let badgeText;
                    if (item.openSpots === 0) {
                        badgeText = "SOLD OUT";
                    } else if (item.location === "Online") {
                        badgeText = "ONLINE";
                    }

                    return (
                        <div key={item.id} className="card">
                            {badgeText && <div className="card--badge">{badgeText}</div>}
                            <img
                                src={`/images/${item.coverImg}`}
                                className="card--image"
                                alt={item.title}
                            />
                            <div className="card--stats">
                                <img
                                    src="/images/star.png"
                                    className="card--star"
                                    alt="rating star"
                                />
                                <span>{item.stats.rating}</span>
                                <span className="gray">({item.stats.reviewCount}) • </span>
                                <span className="gray">{item.location}</span>
                            </div>
                            <p className="card--title">{item.title}</p>
                            <p className="card--price">
                                <span className="bold">From ${item.price}</span> / person
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default List
