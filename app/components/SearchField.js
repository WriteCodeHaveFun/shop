'use client';
import { useState } from "react";
import fetchData from './SearchResults';

export default function SearchField() {
    const [curQ, setCurQ] = useState('');
    const [curData, setCurData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    
    async function getData() {
        setIsFetching(true);
        const data = await fetchData(curQ);
        setIsFetching(false);
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
                &nbsp;
            </button>
            <p>results: </p>
            {isFetching ? (
                <p>Loading...</p>
            ) : (
                curData.length === 0 ? (
                    <p>No match found</p>
                ) : (
                    <ul>
                        {curData.map((elem, i) => (
                            <li key={i}>{elem.name}</li>
                        ))}
                    </ul>
                )
            )}

        </>
    )
}