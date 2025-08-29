const CharacterDetails = ({ character, onBack }) => {
    if (!character) {
        return null;
    }

    return (
        <div className="flex justify-center p-8 min-h-screen items-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-2xl w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 transform transition-all duration-300 hover:scale-105">
                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                    <img className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-xl" src={character.image} alt={character.name}/>
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">{character.name}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        <span className="font-semibold">Especie:</span> {character.species}
                    </p>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p className="flex items-center justify-center md:justify-start">
                        <span className="font-semibold mr-2">Estado:</span>
                        <span className={`text-sm px-3 py-1 rounded-full font-bold ${ character.status === "Alive" ? "bg-green-500" : character.status === "Dead" ? "bg-red-500" : "bg-gray-500" } text-white`}>
                            {character.status}
                        </span>
                        </p>
                        <p>
                            <span className="font-semibold">Origen:</span> {character.origin.name}
                        </p>
                        <p>
                            <span className="font-semibold">Ubicación:</span> {character.location.name}
                        </p>
                    </div>
                    <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105" onClick={onBack}> Volver </button>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;