
export default function Banner(){
    return(
        <main>
            <div className=" lg:flex lg:float-left sm:grid sm:grid-cols-1 pl-10 ">
              <div className="items-center justify-center flex">
              <video loop autoPlay controls className="h-[400px] w-[500px]  sm:w-[500px]" >
                    <source src="/assets/video_banner.mp4" />
                </video>
              </div>
                <div className="lg:pt-40 pl-10 ">
                    <h2 className="text-white text-5xl pb-5">Conheça o Melhor Café do Brasil</h2>
                    <p className="text-white text-left">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga optio omnis tenetur quibusdam molestias tempore velit officia accusamus pariatur assumenda perspiciatis necessitatibus rem unde consequuntur vero illo nam, quod repellat!
                    </p>
                </div>
            </div>
        </main>
    )
}