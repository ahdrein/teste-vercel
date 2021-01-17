import Link from 'next/link';
import { useRouter } from 'next/router';

function Home(){
    const router = useRouter()
    return <div>
            <h1>Home</h1>
            <Link href="/sobre" locale="pt-BR">
                <a >Sobre BR 2</a>
            </Link>
    
            <Link href="/sobre" locale="en-US">
                <a >Sobre US</a>
            </Link>
        </div>
}

export default Home
