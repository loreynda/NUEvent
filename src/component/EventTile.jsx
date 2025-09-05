import React from 'react';

const EventTile = ({ title, date, location, image }) => {
    return (
        <div style={{
            width: '300px',
            height: '18rem',
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1.5rem',
        }}>
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
            />
            <h1 style={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                fontFamily: "'Montserrat', sans-serif",
            }}>{title}</h1>
            <div style={{
                fontSize: '1.2rem',
                marginBottom: '0.3rem',
                fontFamily: "'Montserrat', sans-serif",
            }}>{date}</div>
            <div style={{
                fontSize: '1.2rem',
                fontFamily: "'Montserrat', sans-serif",
            }}>{location}</div>
        </div>
    );
};

export default EventTile;