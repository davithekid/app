import Catalogo from "../Catalago/Catalago"

export default function  hqCard(movie) { 
    const cards = [
        {id: 1, name: 'spiderman', img: './theamazin.jpg'},
        {id: 2, name: 'attack on titan', img: './aot.jpg'},
    ]

    return (

        <>
        
            <img src={cards} className="" alt="" />
        </>

    )
}