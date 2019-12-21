import React, {Fragment} from 'react';
import styles from './Event.module.css'

const Event = (props) => {
    return (
        <Fragment>
            <tr>
                <th>{props.id}</th>
                <th>{props.date}</th>
                <th>{props.time}</th>
                <th>{props.task}</th>
                <th>{props.reportBackMethod}</th>
                <th>{props.from}</th>
                <th>{props.to}</th>
                <th>{props.content}</th>
                <th>{props.actionsMade}</th>
                <th>{props.status}</th>
                <th>{props.timeOfClosue}</th>
                <th>{props.rasham}</th>
            </tr>
        </Fragment>
    );
};

export default Event;