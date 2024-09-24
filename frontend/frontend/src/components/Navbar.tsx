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
                className="border-2 border-[#fff] border-t-transparent border-l-transparent border-r-transparent mr-4 hover:border-b-orange-500">Home</Link>
                <Link href={'/menu'} className="border-2 border-[#fff] border-l-transparent border-t-transparent border-r-transparent mr-4 hover:border-b-orange-500">Menu</Link>
                <Link href={'/cart'} className="border-2 border-[#fff] border-t-transparent border-r-transparent border-l-transparent mr-4 hover:border-b-orange-500">Shop</Link>
                <Link href={'/contatos'}
                className="border-2 border-[#fff] border-l-transparent border-r-transparent border-t-transparent hover:border-b-orange-500">Contatos</Link>
            </div>
        </main>
    )
}