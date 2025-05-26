function InputBox({ handleSearch }) {
    return (
        <input type="text"
            placeholder="Type name search..."
            onChange={(e) => handleSearch(e.target.value)}
        ></input>
    );
}

export default InputBox;