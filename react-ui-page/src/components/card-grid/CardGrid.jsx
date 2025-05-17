import React from 'react';
import './card-grid.css';

const cardData = [
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    },
];

const CardGrid = () => {
    return (
        <div className="conatiner">
            <div className="card-grid-container">
                {cardData.map((card, index) => (
                    <div className="info-card" key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <button className="know-more">
                            Know More 
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CardGrid;
