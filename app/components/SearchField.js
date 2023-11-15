'use client';
import { useState } from "react";
import fetchData from './SearchResults';

export default function SearchField() {
    const [curQ, setCurQ] = useState('');
    const [curData, setCurData] = useState([]);
    
    async function getData() {
        const data = await fetchData(curQ);
        setCurData(data);
    }
    return(
        <>
            <input
                placeholder="Search..."
                onChange={(e) => setCurQ(e.target.value)}
            >
            </input>
            <button 
                style={{width: '10px', height: '10px', backgroundColor: 'black'}} 
                onClick={getData}
            >
            </button>
            <p>results: </p>
            {curData.length == 0 ? (
                <p>no match found</p>
            ) : (
                <ul>
                    {curData.map((elem, i) => (
                        <li key={i}>{elem.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}