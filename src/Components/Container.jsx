import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import CardList from './cardlist/cardlist';

class ContainerComponent extends Component {
    state = {
        currentTemp: null,
        sunnyCount: 0,
        week: [
            {
                day:'Sunday',
                temp: 75,
                weather: 'sunny'
            },
            {
                day:'Monday',
                temp:64,
                weather: 'cloudy'
            },
            {
                day:'Tuesday',
                temp: 55,
                weather: 'cold'
            },
            {
                day:'Wednesday',
                temp: 66,
                weather: 'cloudy'
            },
            {
                day:'Thursday',
                temp:99,
                weather: 'sunny'
            },
            {
                day:'Friday',
                temp:87,
                weather: 'sunny'
            },
            {
                day:'Saturday',
                temp:77,
                weather:"sunny"
            }
        ]
    };

    render(){
        return(
            <Container>
                <CardList
                week={this.state.week}>
                </CardList>
            </Container>
        )
    }

}

export default ContainerComponent;