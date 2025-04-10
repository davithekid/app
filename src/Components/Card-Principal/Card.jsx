export default function Banner() {
    const comics = [

        { id: 1, name: 'spiderman', img: './spiderman2.jpg' },
        { id: 2, name: 'superman', img: './superman.jpg' },
        { id: 3, name: 'batman', img: './batman.png' },
        { id: 4, name: 'boku no hero', img: './bokunohero.webp' },
        { id: 5, name: 'one piece', img: './onepiece.jpg' },
        { id: 6, name: 'kaguya-sama', img: './kaguysama.webp' },

    ]
    return (
        <>
            <section>
                <h1 className="flex justify-center font-bold text-2xl">Destaques</h1>

                    
                <div className="md:hidden flex justify-center">
                    <div className="animes flex w-[90%] h-[225px]">
                        {comics.map((comic, index) =>index>2&& (
                            <img key={comic.id} src={comic.img} className="w-0 grow-100 object-cover duration-300 ease-out opacity-40 rounded-2xl m-[1%] hover:w-[117px] hover:opacity-100 hover:contrats-[120%]" ></img>
                        ))}
                    </div>
                </div>

                
                <div className="hidden md:flex justify-center">
                    <div className="animes flex w-[60%] h-[450px]">
                        {comics.map((comic) => (
                            <img key={comic.id} src={comic.img} className="w-0 grow-100 object-cover duration-300 ease-out opacity-40 rounded-2xl m-[1%] hover:w-[117px] hover:opacity-100 hover:contrats-[120%]" ></img>
                        ))}
                    </div>
                </div>

            </section>

        </>
    )
}