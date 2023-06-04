import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <h3>Hi Server how are you doin.....</h3>
      {users.map((user)=> 
      {
        return <article key={user.id}>
        <h4>User Id: {user.id}</h4>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>

      </article>
      })}
    </div>
  );
}

export default App;
