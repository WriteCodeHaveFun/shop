'use client';
import { useState } from "react";
// import fetchData from '../lib/fetchData';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
            <div className="my-4 mx-4 md:m-auto flex md:w-3/4 lg:w-1/2">
                {/* <FontAwesomeIcon 
                    style={{
                        height: '45px', 
                        position: 'absolute', 
                        margin: '6px 0 0 7px', 
                        pointerEvents: 'none'
                    }}
                    icon={faMagnifyingGlass} 
                /> */}
                <input
                    className="grow min-w-0 px-4 [@media(min-width:320px)]:pl-[60px] font-bold sm:text-5xl text-[1.5rem] rounded border border-[#efefef]"
                    type="search"
                    placeholder="Search..."
                    name="main search field"
                    onChange={(e) => setCurQ(e.target.value)}
                    onKeyUp={handleEnterKeyUp}
                >
                </input>
                <button 
                    className="ml-4 py-[14px] px-[2px] block border border-[#efefef] rounded box-border font-black sm:text-5xl text-[1.5rem] capitalize"
                    onClick={handleSearchClick}
                >
                    find
                </button>
            </div>
        </>
    )
}