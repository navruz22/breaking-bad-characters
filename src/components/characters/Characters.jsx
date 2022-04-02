import React from 'react';
import CharactersItem from './CharactersItem';
import spinner from '../../img/spinner.gif'

const Characters = ({cards, isLoading}) => {
    return isLoading ? (<img className='loading' src={spinner} alt='spin'/>) : ( 
        <div className="cards">
            {cards.map(item => 
                <CharactersItem key={item.char_id} item={item}/>
            )}
        </div>
    );
}
 
export default Characters;