import { HiSearch, HiHome } from 'react-icons/hi'
import { IoBook } from "react-icons/io5";
import HeaderItem from '../HeaderItem/HeaderItem.jsx';


export default function Header() {
    // menu e icons
    const menu = [
        { name: "Home", icon: HiHome },
        { name: "Search", icon: HiSearch },
        { name: "Reviews", icon: IoBook },
    ]
    return (
        <>
            <header>
                <nav className="flex items-center justify-between bg-gradient-to-b
            from-blue-500
            via-blue-900 gap-6">

                    <div className="flex gap-10">
                        <span><img src="./MyLastComic.png" className="w-50 ml-5 top-5 cursor-pointer" alt="" /></span>
                        <div className="flex items-center justify-center tracking-widest">
                            <ul className="flex items-center justify-center gap-10 font-bold text-3xl">
                                {menu.map((item, index) => (
                                    <li key={index} className="flex items-center hover:text-yellow-400 transition-all duration-200 ease-in cursor-pointer">
                                        <HeaderItem name={item.name} Icon={item.icon}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="flex mr-5">
                        <ul className="flex">
                            <li><img src="./icon-perfil.jpeg" className="w-20 rounded-full border-4 border-blue-900"></img></li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}