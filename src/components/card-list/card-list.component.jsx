import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return props.friends.length === 0 ? 
        (<div className='loader'></div>) :
        (<div className='card-list'>
            {props.friends.map((friend) => (
                <Card key={friend.id} friend={friend}></Card>
            ))}
        </div>)
};
