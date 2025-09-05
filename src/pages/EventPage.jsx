import React from 'react';
import Background from '../component/Background';
import EventTile from '../component/EventTile';

//images
import Event1 from '../assets/event1.jpg';
import Event2 from '../assets/event2.jpg';
import Event3 from '../assets/event3.jpg';
import Event4 from '../assets/event4.jpg';
import Event5 from '../assets/event5.jpg';
import Event6 from '../assets/event6.jpg';

const events = [
    { title: 'General Assembly', date: 'Date', location: 'Location', image: Event1 },
    { title: 'COMSOC tech it out', date: 'Date', location: 'Location', image: Event2 },
    { title: 'CIT Congress 2025', date: 'Date', location: 'Location', image: Event3 },
    { title: 'CIT Seminar Series 2025', date: 'Date', location: 'Location', image: Event4 },
    { title: 'National IT Skills', date: 'Date', location: 'Location', image: Event5 },
    { title: 'Panangdayaw', date: 'Date', location: 'Location', image: Event6 },
];

const EventPage = () => {
    return (
        <Background>
            <div
                className="event-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                    padding: '4rem 2rem',
                    justifyItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '4rem auto 0 auto', 
                }}
            >
                {events.map((event, idx) => (
                    <EventTile
                        key={idx}
                        title={event.title}
                        date={event.date}
                        location={event.location}
                        image={event.image}
                    />
                ))}
            </div>
            <style>{`
                @media (max-width: 900px) {
                    .event-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1.5rem !important;
                        padding: 2rem 1rem !important;
                        margin-top: 5rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .event-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                        padding: 1rem 0.5rem !important;
                        margin-top: 5rem !important;
                    }
                }
            `}</style>
        </Background>
    );
};

export default EventPage;