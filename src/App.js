import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";
import TotalCounter from "./TotalCounter";
import ConfirmationDelete from "./ConfirmationDelete";


function App() {

    const initialCountersState = [
        {id: 100, name: 'Counter 1', count: 2},
        {id: 101, name: 'Counter 2', count: 5},
        {id: 102, name: 'Counter 3', count: 8},
    ];

    const [counters, setCounters] = useState(initialCountersState);
    const [confirmCounter, setConfirmCounter] = useState({});


    const resetTotalCount = () => {
        const newCounts = counters.map(el => ({...el, count: 0}));
        setCounters(newCounts);
    };
    const totalSum = (counters) => {
        return counters.reduce((acc, curr) => acc + curr.count, 0);
    };

    const incrementCounter = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].count = newCounters[index].count + 1;
        setCounters(newCounters);
    };

    const decrementCounter = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, count: el.count - 1};
            return el;
        });
        setCounters(newCounters);
    };

    const confirmRemoveCounter = counter => {
        setConfirmCounter(counter);
    };
    const removeConfirmed = () => {
        const newCounters = counters.filter(el => el.id !== confirmCounter.id);
        setCounters(newCounters);
        setConfirmCounter({});
    };

    const confirmDeleteCancel = () => {
        setConfirmCounter({});
    };

    const addCounter = (name, count) => {
        const newCounters = [...counters, {id: Math.random(), name, count: Number(count)}];
        setCounters(newCounters);
    };



    return (
        <div className='container'>
            <div className='card mb-2'>
                <div className='card-header'>
                    <h1>Counters</h1>
                </div>

            </div>
            <hr/>
            <TotalCounter resetTotalCount={resetTotalCount} totalSum={totalSum} counters={counters}/>
            {
                counters.map(el => <Counter key={el.id}
                                            counter={el}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            remove={confirmRemoveCounter}
                />)
            }

            <hr/>
            <AddCounterForm onSubmit={addCounter}/>

            <ConfirmationDelete
            name={confirmCounter.name}
            onSuccess={removeConfirmed}
            onCancel={confirmDeleteCancel}
            />

        </div>
    );
}

export default App;
