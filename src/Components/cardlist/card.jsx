import React from 'react';
import { Card } from 'semantic-ui-react';

const daycard = (props) => {
    return(
        <Card>
            <Card.Header textAlign='center'>
                {props.day}
            </Card.Header>
            <Card.Description>
                the weather for {props.day} is {props.weather} with a temperature of {props.temp}F
            </Card.Description>
        </Card>
    )
}

export default daycard;