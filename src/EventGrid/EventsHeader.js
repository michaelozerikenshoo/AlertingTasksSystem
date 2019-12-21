import React from 'react';
import Event from './Event/Event';

const EventsHeader = () => {
    return (
        <Event id="Id"
               date="Date"
               time="Time"
               task="Task"
               reportBackMethod="Report Back Method"
               from="From"
               to="To"
               content="Content"
               actionsMade="Actions made"
               isClosed="Is closed"
               timeOfClosue="Time of closure"
               rasham="Rasham"/>
    );
};

export default EventsHeader;