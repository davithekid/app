import Catalogo from "../Catalago/Catalago.jsx";

export default function GeneroComics() {
  const generos = [
    { id: 1, name: "Ação" },
    { id: 2, name: "Aventura" },
    { id: 3, name: "Romance" },
    { id: 4, name: "Drama" },
  ];

  return (
    <>
      {generos.map((genero) => (
        <div key={genero.id} className="flex flex-col">
          <h2 className="font-extrabold text-2xl ml-5">{genero.name}</h2>
          <Catalogo genreId={genero.id} />
        </div>
      ))}
    </>
  );
}
