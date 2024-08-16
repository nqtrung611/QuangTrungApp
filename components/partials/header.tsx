import Link from "next/link";
import '@/styles/components/header.css'

export default function Header() {
    return (
        <header className="flex items-center pl-5 py-3">
            <Link href='/'>Home</Link>
            <Link href='/todo'>Todo</Link>
            <Link href='/youtube'>YouTube</Link>
            <Link href='/prisma'>Prisma</Link>
            <Link href='/counter'>Counter</Link>
        </header>
    );
}
