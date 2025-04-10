export default function HeaderItem({ name, Icon }) {
    return (
        <div className="flex items-center gap-3 text-[18px] cursor-pointer hover:underline
        underline-offset-8" >

            <Icon />
            <h2 className="hidden md:block font-bold">{name}</h2>

        </div>

    )
}