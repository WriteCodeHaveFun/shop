'use client'
import fetchData from '@/lib/fetchDataByName';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ShowItems from '@/components/ShowItems';

export default function Items() {
    const searchParams = useSearchParams();
    const curPath = usePathname();

    const [curData, setCurData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    let q = searchParams.get('search');

    useEffect(() => {
        async function getData() {
            setIsFetching(true);
            const result = q ? (
                await fetchData(q)
            ) : (
                await fetchData('')
            );
            // return result;
            setIsFetching(false);
            setCurData(result);
            
        }
        getData();
    
        // async function fetchD() {
        //     const result = await getData();
        //     setIsFetching(false);
        //     // console.log('Items data: ')
        //     // console.log(result)
        //     setCurData(result);
        //   }
        
        //   fetchD();
    }, [q]);

    return (
        <>
            {/* <h1>Страница с параметром поиска: {q ? q:''}</h1> */}
            { isFetching ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* <p>Loaded! Number of items: {curData.length}</p> */}
                    <ShowItems itemsData={curData}></ShowItems>
                </>
                
            )}
            {/* { q ? (
                <Link href={`${curPath}/${q}`}>go to: {q}</Link>
            ):(
                <Link href={`${curPath}`}>go to: {q}</Link>
            )} */}
        </>
    )
}