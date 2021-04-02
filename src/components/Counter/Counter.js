import React, { useState } from 'react'
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='Counter table-dark mt-2'>
            <h2>Counter</h2>
            <div className="row-7">
                <button onClick={() => setCount(count - 100)} className="col-sm-1 btn btn-danger m-1">-100</button>
                <button onClick={() => setCount(count - 5)} className="col-sm-1 btn btn-danger m-1">-5</button>
                <button onClick={() => setCount(count - 1)} className="col-sm-1 btn btn-danger m-1">-1</button>
                <h3 className="btn-group-vertical m-4">{count}</h3>
                <button onClick={() => setCount(count + 1)} className="col-sm-1 btn btn-success m-1">+1</button>
                <button onClick={() => setCount(count + 5)} className="col-sm-1 btn btn-success m-1">+5</button>
                <button onClick={() => setCount(count + 100)} className="col-sm-1 btn btn-success m-1">+100</button>
            </div>
        </div>
    )
}
