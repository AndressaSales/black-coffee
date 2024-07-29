import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <main className="justify-between items-center flex border-2 border-[#d4d4d4] border-t-transparent border-r-transparent border-l-transparent">
            <div className="flex items-center justify-center">
                <Link href={'/'}>
                    <Image 
                        src="/assets/coffe.png" 
                        alt="logo"
                        width={150}
                        height={90}
                    />
                </Link>
            </div>

        </main>
    )
}