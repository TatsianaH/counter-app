import React from 'react';
import './App.css';

function Counter(props) {
    return (
        <div className='card mb-2'>
            <div className='card-body'>
                <div className='row'>
                    <div className="col">
                        ID <strong>{props.id}</strong>
                    </div>
                    <div className="col">
                        Counter name <strong>{props.counter.name}</strong>
                    </div>
                    <div className="col">
                        <button id="buttonDecr" onClick={() => props.decrement(props.counter.id)}
                                className='btn btn-primary'>-
                        </button>
                        <strong>{props.counter.count}</strong>
                        <button id="buttonIncr" onClick={() => props.increment(props.counter.id)}
                                className='btn btn-primary'>+
                        </button>
                    </div>

                    <div className="col">
                        <button onClick={() => props.remove(props.counter)} className='btn btn-danger'>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Counter;
