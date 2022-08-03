import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {v1} from "uuid";

interface IGet {
    userId: number
    id: number
    title: string
    body: string
}

function App() {

    const [get, setGet] = useState<IGet[]>([])

    const getRequestHandler = () => {
        setGet([])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])

    return (
        <div className="App">
            <Button nickName={'Clean page'} callback={getRequestHandler}/>
            <p></p>
            {get.map(el => {
                return (
                    <ul>
                        <li key={v1()}>
                            <span>{el.id} - </span>
                            <span>{el.title} - </span>
                            <span>{el.body}</span>
                        </li>
                    </ul>
                )
            })}
        </div>
    );
}

export default App;
