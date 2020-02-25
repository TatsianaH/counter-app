import React from 'react';
import './App.css';

function TotalCounter(props) {
    return (
        <div className='card mb-2'>
            <div className='card-body'>
                <div className='row'>
                    <div className="col-4">
                        <strong>
                            Total
                            {props.totalSum(props.counters)}
                        </strong>
                        <button id="buttonTotal" onClick={props.resetTotalCount} className='btn btn-danger'>Reset Total Count</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalCounter;
