'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Items() {
    // return(
    //     <>
    //         <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //             <h1>This is Items page</h1>
    //         </main>
    //     </>
    // )
    const searchParams = useSearchParams();
    const router = useRouter();
    const curPath = usePathname();
    const q = searchParams.get('search');

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
                <Link href={`${curPath}/${q}`}>go to: {q}</Link>
                <p>router query: {router.query}</p>
            </>
        )
    }

    return (
        <>
            <h1>Стандартная страница items</h1>
            <p>router query: {router.query}</p>
        </>
    )
}