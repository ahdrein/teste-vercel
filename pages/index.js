import Link from 'next/link';

function Home(){
    return <div>
            <h1>Home</h1>
            <Link href="/sobre" locale="pt-BR">
                <a >Sobre BR</a>
            </Link>
    
            <Link href="/sobre" locale="en-US">
                <a >Sobre US</a>
            </Link>
        </div>
}

export default Home
