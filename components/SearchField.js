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
                e.target.blur();
                router.push(`/items`)
            } else {
                e.target.blur();
                router.push(`/items?search=${curQ}`)
            }

        }
    }

    function handleSearchClick(e) {
        const isEmptySearch = e.target.closest(`div`).querySelector(`input[type=search]`).value === '';
        
        if (isEmptySearch) {
            e.target.blur();
            router.push(`/items`)
        } else {
            e.target.blur();
            router.push(`/items?search=${curQ}`)
        }

    }
    return(
        <>
            <div className="my-4">
                <input
                    type="search"
                    placeholder="Search..."
                    name="main search field"
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