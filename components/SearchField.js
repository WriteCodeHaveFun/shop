'use client';
import { useState } from "react";
import fetchData from '../lib/fetchData';
// import { redirect } from "next/dist/server/api-utils";
// import { useRouter } from "next/navigation";

export default function SearchField() {
    const [curQ, setCurQ] = useState('');
    const [curData, setCurData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    // const router = useRouter();
    
    async function getData() {
        setIsFetching(true);
        const data = await fetchData(curQ);
        setIsFetching(false);
        setCurData(data);
        console.log(`cur data: `);
        console.log(data); // temp
        // router.push(`/items?search=q`)
    }
    return(
        <>
            <div className="my-4">
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
            </div>
        </>
    )
}