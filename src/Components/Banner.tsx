import Image from "next/image";

export default function Banner(){
    return(
        <main className="">
            <div>
                <Image 
                    src='/assets/banner_c.jpg'
                    alt="banner"
                    width={0}
                    height={0}
                    className="w-full h-screen"
                />
            </div>
        </main>
    )
}