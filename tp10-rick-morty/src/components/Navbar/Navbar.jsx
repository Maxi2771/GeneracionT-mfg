
const Navbar = ({marca}) => {
    return (
        <nav className="w-full mb-5 p-5 bg-slate-800 text-white text-center">
            <div>
                <a className="text-3xl font-bold" href="https://rickandmortyapi.com/" target="_blank">{marca}</a>
            </div>
        </nav>
    )
}

export default Navbar