const InputBox = ({ label, value, onChangeInput }) => {
    return <div className="flex flex-col">
        <label className="text-sm font-semibold tracking-wide text-gray-700 uppercase">{label}</label>
        <input type="number" min="0" className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200" value={value} onWheel={(e) => e.target.blur()} onChange={(event) => onChangeInput(Number(event.target.value))} />
    </div>
}
export default InputBox;