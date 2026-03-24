import Link from "next/link"

export default function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Player View</Link>
                </li>
                <li>
                    <Link href="/lobby">Lobby View</Link>
                </li>
                <li>                   
                    <Link href="/dual">Dual View</Link>
                </li>
            </ul>
        </nav>
    )
}