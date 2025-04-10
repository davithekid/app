export default function Catalogo (genreId) {
    
    const catalogoHq = [
        { id: 1, name: 'spiderman', img: './spiderman2.jpg' },
        {id: 2, name: 'spiderman', img: './spiderman.jpg'},
        {id: 3, name: 'spiderman', img: './spiderman.jpg'},
        {id: 4, name: 'spiderman', img: './spiderman.jpg'},
    
    ]
    
    return (

        <div className="flex justify-center gap-5 flex-wrap ">

       { catalogoHq.map((hq) => (
            <div key={hq.id} className="w-20">
             <img src={hq.img}></img> 
            </div>
        ))}
        </div>
    )
}