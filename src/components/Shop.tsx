import Image from "next/image";
import Link from "next/link";

export default function Shop(){
    return(
        <main>
            <div className="bg-[#333333] w-[100%]">

                <div className="flex p-[10px] items-center justify-between">
                    <h3 className="text-orange-500 t3 text-2xl">Menu</h3>
                    <Link className="text-orange-500 t4 text-2xl" href={'/'}>Black Coffee</Link>
                </div>

                <div className="flex items-center justify-evenly bg-[#404040] i1 flex-wrap">
                    
                        <div className="w-[250px] m-[20px]">
                            <div className="w-[100%] h-[280px] overflow-hidden">
                                <Image src={'/assets/caramel-macchiato.jpg'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="p-[20px] text-[#fff]">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="star" className="size-[10px] relative b-[5px]"/>
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="star" className="size-[10px] relative b-[5px]"/>
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="star" className="size-[10px] relative b-[5px]"/>
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="star" className="size-[10px] relative b-[5px]"/>
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="star" className="size-[10px] relative b-[5px]"/>
                                        <Image src={'/assets/star-half.png'} width={100} height={100} alt="star" className="size-[10px] relative b-[5px]"/>
                                    </div>
                                    <label className="font-mono text-[20px]">R$15.99</label>
                                </div>
                                <h3 className="font-bold text-center p-[3px] font-serif">Caramelo Macchiato</h3>
                                <label>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                            </div>
                        </div>

                        <div className="w-[250px] m-[20px]">
                            <div className="w-[100%] overflow-hidden h-[280px]">
                                <Image src={'/assets/flat-white.png'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="text-[#fff] p-[20px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="size-[10px] relative b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="size-[10px] relative b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="size-[10px] relative b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="size-[10px] relative b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="size-[10px] relative b-[5px]" />
                                        <Image src={'/assets/star-half.png'} alt="" width={100} height={100} className="size-[10px] relative b-[5px]" />
                                    </div>
                                    <label className="font-mono text-[20px]">R$18.90</label>
                                </div>
                                <h3 className="font-bold font-serif text-center p-[3px]">Flat White</h3>
                                <label>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </label>
                            </div>
                        </div>

                        <div className="w-[250px] m-[20px]">
                            <div className="overflow-hidden w-[100%] h-[280px]">
                                <Image src={'/assets/chocolate-frappuccino.png'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="p-[20px] text-[#fff]">
                                <div className="items-center justify-between flex">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} width={100} alt="" height={100} className="relative b-[5px] size-[10px]" />
                                        <Image src={'/assets/star.png'} width={100} alt="" height={100} className="relative b-[5px] size-[10px]" />
                                        <Image src={'/assets/star.png'} width={100} alt="" height={100} className="relative b-[5px] size-[10px]" />
                                        <Image src={'/assets/star.png'} width={100} alt="" height={100} className="relative b-[5px] size-[10px]" />
                                        <Image src={'/assets/star.png'} width={100} alt="" height={100} className="relative b-[5px] size-[10px]" />
                                        <Image src={'/assets/star-half.png'} width={100} alt="" height={100} className="relative b-[5px] size-[10px]" />
                                    </div>
                                    <label className="font-mono text-[20px]">R$20.00</label>
                                </div>
                                <h3 className="font-bold font-serif text-center p-[3px]">Frappuccino Chocolate</h3>
                                <label>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </label>
                            </div>
                        </div>

                        <div className="w-[250px] m-[20px]">
                            <div className="overflow-hidden w-[100%] h-[280px]">
                                <Image src={'/assets/frappe.jpg'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="text-[#fff] p-[20px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star-half.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                    </div>
                                    <label className="font-mono text-[20px] p-[3px]">R$20.00</label>
                                </div>
                                <h3 className="text-center font-bold font-serif">Frappe</h3>
                                <label>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </label>
                            </div>
                        </div>

                        <div className="w-[250px] m-[20px]">
                            <div className="overflow-hidden w-[100%] h-[280px]">
                                <Image src={'/assets/caffe-mocha.png'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="text-[#fff] p-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star-half.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                    </div>
                                    <label className="font-mono text-[20px]">R$27.99</label>
                                </div>
                                <h3 className="font-bold font-serif text-center p-[3px]">Café Mocha</h3>
                                <label>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </label>
                            </div>
                        </div>    

                        <div className="w-[250px] m-[20px]">
                            <div className="overflow-hidden w-[100%] h-[280px]">
                                <Image src={'/assets/vanilla-frappuccino.jpg'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="text-[#fff] p-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star-half.png'} alt="" width={100} height={100} className="relative size-[10px] b-[5px]" />
                                    </div>
                                    <label className="text-[20px] font-mono">R$32.99</label>
                                </div>
                                <h3 className="font-bold font-serif text-center p-[3px]">Vanilla Frappuccino</h3>
                                <label>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </label>
                            </div>
                        </div>

                        <div className="w-[250px] m-[20px]">
                            <div className="overflow-hidden h-[280px] w-[100%]">
                                <Image src={'/assets/white-chocolate-mocha.jpg'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="text-[#fff] p-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" /> 
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" /> 
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" /> 
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" /> 
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" /> 
                                        <Image src={'/assets/star-half.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" /> 
                                    </div>
                                    <label className="font-mono text-[20px]" >R$ 36.00</label>
                                </div>
                                <h3 className="p-[3px] font-bold font-serif text-center">Chocolate Branco</h3>
                                <label>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                            </div>
                        </div>

                        <div className="w-[250px] m-[20px]">
                            <div className="overflow-hidden w-[100%] h-[280px]">
                                <Image src={'/assets/ice-latte.jpg'} alt="" 
                                width={1000} height={100} className="image"/>
                            </div>
                            <div className="text-[#fff] p-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                        <Image src={'/assets/star-half.png'} width={100} height={100} alt="" className="relative size-[10px] b-[5px]" />
                                    </div>
                                    <label className="font-mono text-[20px]">R$40.99</label>
                                </div>
                                <h3 className="font-bold font-serif p-[3px] text-center">Café Gelado</h3>
                                <label>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                            </div>
                        </div>

                </div>
            </div>
        </main>
    )
}