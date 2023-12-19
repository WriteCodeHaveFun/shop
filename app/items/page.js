'use client'
import fetchData from '@/lib/fetchDataByName';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ShowItems from '@/components/ShowItems';

export default function Items() {
    const searchParams = useSearchParams();

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
            setIsFetching(false);
            setCurData(result);
            
        }
        getData();
    }, [q]);

    return (
        <>
            { isFetching ? (
                <div className='h-full'>
                    <p className='text-center'>Loading...</p>
                </div>
            ) : (
                <>
                    <ShowItems itemsData={curData}></ShowItems>
                </>
                
            )}
        </>
    )
}