function ItemLista({ texto, onRemover }) {
    return (
        <div className="flex justify-between items-center border border-gray-200">
            <span>{texto}</span>
            <button onClick={onRemover} className="text-red-600 text-sm">
                Remover
            </button >
        </div >
    );

}
export default ItemLista;