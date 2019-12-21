import React, {Component} from 'react';
import Event from './Event/Event';
import EventsHeader from "./EventsHeader";
import Axios from '../Axios/Axios';

class EventGrid extends Component {

    state = {
        events: [
            {
                id: 1,
                task: "save dead man",
                reportBackMethod: "mail",
                from: "dudi",
                to: "pikud north",
                content: "please save body of dead man",
                actionsMade: "taken back",
                status: "Open",
                timeOfClosue: "15:00PM",
                rasham: "michael"
            }, {
                id: 2,
                task: "save alive man",
                reportBackMethod: "SMS",
                from: "yakov",
                to: "pikud south",
                content: "please save him",
                actionsMade: "saved",
                status: "Closed",
                timeOfClosue: "04:00AM",
                rasham: "ziv"
            }
        ]

    };

    addEventHandler = () => {
        const events = this.state.events;
        this.setState({
            events: [...events, {
                id: 3,
                task: "new Event Added!",
                reportBackMethod: "Mail",
                from: "PC",
                to: "Jerusalem",
                content: "please save him",
                actionsMade: "saved",
                status: "Closed",
                timeOfClosue: "04:00AM",
                rasham: "ziv"
            }]
        })
    };

    componentDidMount() { //TODO: complete backend
        Axios
            .get("/blalba/Events")
            .catch(error => {
                console.log(error);
            })
    }


    render() {

        let events = this.state.events.map((event) => { //can also take index here if needed
            let date = new Date();
            return <Event key={event.id}
                          id={event.id}
                          date={date.getDate()}
                          time={date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
                          task={event.task}
                          reportBackMethod={event.reportBackMethod}
                          from={event.from}
                          to={event.to}
                          content={event.content}
                          actionsMade={event.actionsMade}
                          status={event.status}
                          timeOfClosue={event.timeOfClosue}
                          rasham={event.rasham}
            />
        });
        return (
            <div>
                <table>
                    <EventsHeader/>
                    {events}
                    <button onClick={() => this.addEventHandler()}>Add Event</button>
                </table>
            </div>
        );
    }
}

export default EventGrid;