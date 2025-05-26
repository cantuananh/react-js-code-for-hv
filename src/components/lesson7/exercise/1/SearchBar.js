function SearchBar({ users }) {
    return (
        <ul>
            {
                users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))
            }
        </ul>
    );
}

export default SearchBar;
