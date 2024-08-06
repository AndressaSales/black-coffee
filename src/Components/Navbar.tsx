import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <main className="justify-between bg-black items-center pb-5 flex border-2 border-[#d4d4d4] border-t-transparent border-r-transparent border-l-transparent">
            <div className="flex items-center justify-center pl-10 pt-5">
                <Link href={'/'}>
                    <Image 
                        src="/assets/c.png" 
                        alt="logo"
                        width={90}
                        height={90}
                    />
                </Link>
            </div>
            
            <nav className="text-white mr-4 text-2xl font-bold">
                <Link 
                    href={''}
                    className="pr-3"
                >Home</Link>
                <Link 
                    href={''}
                    className="pr-3"
                >Sobre</Link>
                <Link 
                    href={''}
                    className="pr-3"
                >Menu</Link>
                <Link 
                    href={''}
                    className="pr-3"
                >Endereço</Link>
            </nav>

            <div className="flex mr-5 cursor-pointer">
                <div className="pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white hover:w-[30px] hover:h-[30px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>

                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white hover:w-[30px] hover:h-[30px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </div>
        </main>
    )
}