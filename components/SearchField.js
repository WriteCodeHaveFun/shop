'use client';
import { useState } from "react";
// import fetchData from '../lib/fetchData';
import { useRouter } from "next/navigation";

export default function SearchField() {
    const [curQ, setCurQ] = useState('');
    // const [curData, setCurData] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();
    
    // async function getData() {
    //     setIsFetching(true);
    //     const data = await fetchData(curQ);
    //     setIsFetching(false);
    //     setCurData(data);
    //     console.log(`cur data: `);
    //     console.log(data); // temp
    //     router.push(`/items?search=${curQ}`)
    // }

    function handleEnterKeyUp(e) {
        if (e.key === 'Enter') {
            if (!e.target.value) {
                console.log('empty search q')
                return false;
            }
            e.target.blur();
            // getData();
            router.push(`/items?search=${curQ}`)

        }
    }

    function handleSearchClick(e) {
        if (e.target.value = '') {
            console.log('empty search q')
            return false;
        }
        e.target.blur();
        // getData();
        router.push(`/items?search=${curQ}`)

    }
    return(
        <>
            <div className="my-4">
                <input
                    type="search"
                    placeholder="Search..."
                    onChange={(e) => setCurQ(e.target.value)}
                    onKeyUp={handleEnterKeyUp}
                >
                </input>
                <button 
                    style={{width: '10px', height: '10px', backgroundColor: 'black'}} 
                    onClick={handleSearchClick}
                >
                    &nbsp;
                </button>
            </div>
        </>
    )
}