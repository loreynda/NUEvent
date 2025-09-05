import React from 'react';

const EventTile = ({ title, date, location, image }) => {
    return (
        <div
            style={{
                width: '300px',
                maxWidth: '90vw',
                height: '20rem',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '1.5rem',
                boxSizing: 'border-box',
            }}
            className="event-tile"
        >
            <img
                src={image}
                alt={title}
                style={{
                    width: '100%',
                    height: '10rem',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '1.2rem',
                }}
                className="event-tile-img"
            />
            <h1
                style={{
                    fontWeight: 'bold',
                    fontSize: '1.3rem',
                    marginBottom: '0.5rem',
                    fontFamily: "'Montserrat', sans-serif",
                }}
            >
                {title}
            </h1>
            <div
                style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.3rem',
                    fontFamily: "'Montserrat', sans-serif",
                }}
            >
                {date}
            </div>
            <div
                style={{
                    fontSize: '1.2rem',
                    fontFamily: "'Montserrat', sans-serif",
                }}
            >
                {location}
            </div>
            {/* for responsiveness */}
            <style>{`
                @media (max-width: 900px) {
                    .event-tile {
                        width: 90vw !important;
                        height: auto !important;
                        padding: 1rem !important;
                        margin-bottom: 1.5rem;
                    }
                    .event-tile-img {
                        height: 7rem !important;
                        margin-bottom: 1rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .event-tile {
                        width: 98vw !important;
                        padding: 0.5rem !important;
                    }
                    .event-tile-img {
                        height: 5rem !important;
                    }
                    .event-tile h1,
                    .event-tile div {
                        font-size: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default EventTile;