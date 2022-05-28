import React, {Component} from 'react';
import { useState, useEffect } from 'react'

function Main(){
    const [fetchData, setFetchData] = useState([])

    const test = () => {
        fetch(`http://localhost:8090/test`)
        .then(res => res.json())
        .then(data =>  data.map((v,i) => {
            setFetchData(v['name'])
            console.log("v: ", v['name'])
        }))
        console.log("api: ",fetchData)
    }
    return(
        <div>
            <h1>Main</h1>
            <button onClick={test}>GetData: {fetchData}</button>
        </div>
    );
} export default Main;