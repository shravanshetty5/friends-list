import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {props.friends.map((friend) => (
            <Card key={friend.id} friend={friend}></Card>
        ))}
    </div>
);
