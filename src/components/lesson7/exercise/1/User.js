import { useState } from "react";
import SearchBar from "./SearchBar";
import InputBox from "./InputBox";

function User() {
    const users = [
        "Truong Hoang Nam",
        "Nguyen Phuoc Dinh Tien",
        "Tran Dinh Hai",
        "Bui Quang Huy",
        "Tran Duc Duong"
    ];

    const [keyword, setKeyword] = useState("");

    const handleSearch = (value) => {
        setKeyword(value);
    };

    const filterUserSearch = keyword
        ? users.filter(user => user.toLowerCase().includes(keyword.toLowerCase()))
        : users;

    return (
        <div>
            <InputBox handleSearch={handleSearch} />
            <SearchBar users={filterUserSearch} />
        </div>
    );
}

export default User;