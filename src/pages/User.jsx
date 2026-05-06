import {
    useEffect,
    useState,
} from "react";

const User = () => { 

    const[user,setUser] = useState(null);
    useEffect(()=>
    {
      const response = fetch("https://jsonplaceholder.typicode.com/users");
       const data = response.then((res)=>res.json());
       data.then((d)=>setUser(d));
    },[]);
    return(
    <>
    <h1>User List</h1>
    <ul>
        {user && user.map((u)=>
        (
            <li key={u.id}>{u.name}</li>
        ))}
    </ul>   

   </>
)
}
export default User;