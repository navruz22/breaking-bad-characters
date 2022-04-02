import React, {useState} from 'react';

const Search = ({getQuery}) => {

    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q);
    }

    return (  
        <div className="search">
            <input value={text} type="text" placeholder='Search characters...' onChange={(e) => onChange(e.target.value)} />    
        </div>
    );
}
 
export default Search;