import Image from "next/image";
import Link from "next/link";

export default function Shop(){
    return(
        <main>
            <div className="bg-[#333333] w-[100%]">

                <div className="flex p-[10px] items-center justify-between">
                    <h2 className="text-orange-500 t3 text-2xl">Shop</h2>
                    <Link href={'/'} className="text-orange-500 t4 text-2xl">Black Coffee</Link>
                </div>

                <div className="flex items-center justify-evenly bg-[#404040] flex-wrap i1">

                    <div className="w-[280px] h-[20px]">

                        <div className="overflow-hidden w-[100%] h-[280px]">
                            <Image src={'/assets/caramel-macchiato.jpg'} alt="caramel-macchiato" width={1000} height={100} className="image"/>
                        </div>
                        <div>
            
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}