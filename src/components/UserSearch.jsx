import React, { useEffect, useState } from "react";

export default function UserSearch() {
  const [users, setUsers] = useState([]);
  const [copyUsers, setCopyUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("search changed: ", search);
    if (search != "") {
      const currentUsers = users.filter((user) => user.name === search);
      setCopyUsers(currentUsers);
    } else {
      setCopyUsers(users);
    }
  }, [search]);

  const getUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      const data = await response.json();

      setTimeout(() => {
        console.log("Waiting");
        setUsers(data);
        setCopyUsers(data);
        setLoading(false);
      }, 1000);
    } catch (e) {
      console.log(e.message);
    }
  };

  const showLoadingIcon = () => {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    );
  };

  const showUsers = () => {
    return (
      <ul>
        {copyUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch}></input> <br />
      {loading ? showLoadingIcon() : showUsers()}
      <br />
    </div>
  );
}
