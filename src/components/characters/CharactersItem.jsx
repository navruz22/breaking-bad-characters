import React from 'react';

const CharactersItem = ({item}) => {
    return (  
        <div className="card">
            <img src={item.img} alt="character" />  
            <div className="card__content">
                <h3 className='card__name'>{item.name}</h3>    
                <span className='card__actor-name'>Actor name:  <span>{item.portrayed}</span></span>
                <span className="card__birthday">{item.birthday}</span>
                <span className="card__nickname">Nickname: <span>"{item.nickname}"</span></span>
                <span className="card__status">Status: <span>{item.status}</span></span>
            </div>  
        </div>
    );
}
 
export default CharactersItem;