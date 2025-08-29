const Characters = ({ characters = [], onSelectCharacter}) => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {characters.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out transform hover:shadow-2xl" onClick={() => onSelectCharacter(item)}>
                        <div className="flex justify-center">
                            <img className="w-full h-auto object-cover rounded-t-xl" src={item.image} alt={item.name}/>
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{item.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default Characters;