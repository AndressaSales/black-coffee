import Image from "next/image";
import Link from "next/link";

export default function MenuC(){
    return(
        <main>
            <div className="bg-[#333333] w-[100%]">

                <div className="flex p-[10px] items-center justify-between">
                    <h3 className="text-orange-500 t3 text-2xl">Menu</h3>
                   <Link className="text-orange-500 t4 text-2xl" href={'/'}>Black Coffee</Link>
                </div>

                <div className="flex items-center justify-evenly bg-[#404040] i1 flex-wrap">
                    <div className="w-[250px]">
                        <div>
                            <Image src={'/assets/hot-coffees.jpg'} alt="HOT COFFEE" 
                            width={1000} height={100} className="rounded-[50%]"/>
                        </div>
                        <div className="text-center mt-[10px]">
                                <h2 className="text-orange-500 text-xl">Café Quente</h2>
                                <label className="text-[#fff] mt-10px">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit dignissimos voluptatum aspernatur eos doloribus inventore quo qui, magnam recusandae hic libero explicabo sequi corporis, ducimus quidem rerum corrupti atque.
                                </label>
                        </div>
                    </div>

                    <div className="w-[250px]">
                        <div>
                            <Image src={'/assets/cold-coffees.jpg'} alt=""  width={1000} height={100} className="rounded-[50%]"/>
                        </div>
                        <div className="text-center mt-[10px]">
                            <h2 className="text-orange-500 text-xl">Café Frio</h2>
                            <label className="text-[#fff] mt-[10px]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur autem cupiditate eius quasi ex, laboriosam accusamus, et deserunt doloremque corrupti nostrum! Atque consectetur nihil enim id neque nobis alias totam.
                            </label>
                        </div>
                    </div>

                    <div className="w-[250px]">
                        <div>
                            <Image src={'/assets/frappuccino.jpg'} alt="frappuccino" width={1000} height={100} className="rounded-[50%]"/>
                        </div>
                        <div className="text-center mt-[10px]">
                            <h2 className="text-orange-500 text-xl">frappuccino</h2>
                            <label className="text-[#fff] mt-[10px]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium aliquid blanditiis dolorum aspernatur quas, harum consequatur, dignissimos natus odio praesentium laboriosam laborum ab quam, velit labore? Tempora voluptatibus assumenda voluptatem!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}