import Banner from "@/Components/Card-Principal/Card";
import Catalogo from "@/Components/Catalago/Catalago";
import GeneroComics from "@/Components/Generos/Genero";
import Image from "next/image";

export default function Home() {
    return(
      <>
      <Banner/>
      <GeneroComics/>
      <Catalogo/>
      </>
    )
}
