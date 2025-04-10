import Catalogo from "../Catalago/Catalago"

export default function GeneroComics (){
    const generos = [
        {id: 1, name: 'Ação', },
        {id: 2, name: 'Aventura'},
        {id: 3, name: 'Romance'},
        {id: 4, name: 'Drama'}
    ]

    return(
        <>
        
            {generos.map((genero) => (
                <div className="flex">
                    <h2>{genero.name}</h2>
                    <Catalogo genreId={genero.id}/>
                </div>
            ))}
        </>
    )
}