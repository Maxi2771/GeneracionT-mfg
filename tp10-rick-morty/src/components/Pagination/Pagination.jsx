const Pagination = ({prev, next, onPrevious, onNext}) => {
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className="w-full flex justify-center my-5">
            <ul className="flex">
                {
                    prev ?
                    <li className="mr-5">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700" onClick={handlePrevious}>Anterior</button>
                    </li>
                    :
                    null
                }
                {
                    next ?
                    <li className="mr-5">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700" onClick={handleNext}>Siguiente</button>
                    </li>
                    :
                    null
                }
            </ul>
        </nav>
    )
}

export default Pagination