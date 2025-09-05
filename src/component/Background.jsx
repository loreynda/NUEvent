import React from 'react';
import bg_image from '../assets/bg_image.png';

const Background = ({ children }) => {
    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100vw',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Background image */}
            <img
                src={bg_image}
                alt="Background"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
            {/* Blue overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(59, 70, 150, 0.6)', // #3b4696 with opacity
                    zIndex: 1,
                }}
            />
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                {children}
            </div>
        </div>
    );
};

export default Background;