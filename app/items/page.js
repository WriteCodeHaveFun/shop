'use client'
import fetchData from '@/lib/fetchData';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Items() {
    const searchParams = useSearchParams();
    const curPath = usePathname();

    const [curData, setCurData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const q = searchParams.get('search');

    useEffect(() => {
        async function getData() {
            setIsFetching(true);
            const result = await fetchData(q);
            setIsFetching(false);
            return result;
        }
    
        async function fetchD() {
            setIsFetching(true);
            const result = await getData();
            setIsFetching(false);
            console.log('Items data: ')
            console.log(result)
            setCurData(result);
          }
        
          fetchD();
    }, [q]);

    if (searchParams.get('search')) {
        // Получить все соответствия some_search из базы данных mongodb
        // и отобразить их на странице
        return (
            <>
                <h1>Страница с параметром поиска: {q}</h1>
                {/* <button 
                    style={{width: '10px', height: '10px', backgroundColor: 'black'}}
                    onClick={() => router.push(`/items/${q}`)}
                    value='button'
                ></button> */}
                { isFetching ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <p>Loaded! Number of items: {curData.length}</p>
                    </>
                    
                )}
                <Link href={`${curPath}/${q}`}>go to: {q}</Link>
            </>
        )
    }

    return (
        <>
            <h1>Стандартная страница items</h1>
        </>
    )
}