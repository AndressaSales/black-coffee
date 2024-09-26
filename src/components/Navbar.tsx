import Link from "next/link";

export default function Navbar(){
    return(
        <main className="flex justify-between items-center p-[40px] h-[70px] w-[100%] absolute z-[1]">
            <div className="text-[20px] text-[#fff] logo">
                <Link href={'/'}>
                    Black <span className="text-orange-500">Coffee</span>
                </Link>
            </div>

            <div className="flex text-[#FFF]">
                <Link href={'/'}
                className="mr-4 hover:border-2 hover:border-t-transparent hover:border-r-transparent hover:border-l-transparent hover:border-b-orange-500">Home</Link>
                <Link href={'/Menu'} className="hover:border-2 hover:border-l-transparent hover:border-t-transparent hover:border-r-transparent mr-4 hover:border-b-orange-500">Menu</Link>
                <Link href={'/Cart'} className="hover:border-2 
                hover:border-r-transparent hover:border-l-transparent
                hover:border-t-transparent mr-4 hover:border-b-orange-500">Shop</Link>
                <Link href={'/Contatos'}
                className="hover:border-2 hover:border-r-transparent hover:border-t-transparent hover:border-l-transparent hover:border-b-orange-500">Contatos</Link>
            </div>
        </main>
    )
}