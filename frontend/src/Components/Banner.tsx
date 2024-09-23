import Image from "next/image";

export default function Banner(){
    return(
        <main>
            <div className="lg:flex lg:float-left sm:grid sm:grid-cols-1">
            
            <div className="text-white pt-40 pl-10">
                <h2 className="text-4xl  text-center lg:text-left font-bold">Venha Conhecer o melhor Café da Região</h2>
               <p className="font-mono sm:text-center lg:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quis doloremque quaerat expedita amet eligendi aspernatur nam aliquid adipisci ea veritatis sint sequi nesciunt hic fugit rerum cumque, quod modi.
               </p>
            </div>

               <div className="items-center flex justify-center">
                    <Image
                        src='/assets/bbb.png'
                        alt="banner"
                        width={700}
                        height={500}
                        className="lg:w-[500px] lg: sm:pt-20"
                    />
               </div>
            </div>
        </main>
    )
}