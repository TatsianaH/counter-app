import React, {useState} from 'react';
import './App.css';

function AddCounterForm(props) {
    const [name, setName] = useState(' ');
    const [count, setCount] = useState(0);

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('');
        setCount(0);
    };

    return (
        <div className='row'>
            <div className='col'>
                <input type="text" name='name' className='form-control' value={name}
                       onChange={e => setName(e.target.value)}/>
            </div>
            <div className='col'>
                <input type="number" count='count' className='form-control' value={count}
                       onChange={e => setCount(e.target.value)}/>
            </div>
            <div className='col'>
                <button onClick={() => onSubmit(name, count)} className='btn-outline-secondary'>Create</button>
            </div>
        </div>
    );
}

export default AddCounterForm;
