import React from 'react';
import { Card } from 'semantic-ui-react';
import Daycard from './card';

const CardList = (props) => {
    return (
        <Card.Group itemsPerRow={7}>
            {props.week.map((day) => (
                <Daycard
                key={day.day}
                weather={day.weather}
                day={day.day}
                temp={day.temp}>
                </Daycard>
            ))}
        </Card.Group>
    );
}

export default CardList;