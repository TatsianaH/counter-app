import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";

function App() {

    const initialCountersState = [
        {id: 100, name: 'Counter 1', count: 2},
        {id: 101, name: 'Counter 2', count: 5},
        {id: 102, name: 'Counter 3', count: 8},
    ];

    const [counters, setCounters] = useState(initialCountersState);

    const resetTotalCount = () => {
        const newCounts = counters.map(el => ({...el, count: 0}))
        setCounters(newCounts);
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

    const removeCounter = (id) => {
        const newCounters = counters.filter(el => el.id !== id);
        setCounters(newCounters);
    };

    const addCounter = (name, count) => {
        const newCounters = [...counters, {id: Math.random(), name, count: Number(count)}];
        setCounters(newCounters);
    };

    return (
        <div className='container'>
            <h1>Counters</h1>
            <hr/>

            Total
            {
                counters.reduce((acc, curr) => acc + curr.count, 0)
            }
            <button onClick={resetTotalCount} className='btn btn-danger'>Reset Total Count</button>
            {counters.map(el => <Counter key={el.id}
                                         id={el.id}
                                         name={el.name}
                                         count={el.count}
                                         increment={incrementCounter}
                                         decrement={decrementCounter}
                                         remove={removeCounter}/>)}

                                         <hr/>
                                         <AddCounterForm onSubmit={addCounter}/>
        </div>
    );
}

export default App;
