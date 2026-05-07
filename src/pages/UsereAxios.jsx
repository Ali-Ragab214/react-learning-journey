import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card.jsx";

const UserAxios = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // نبدأ loading = true

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="p-5">Loading...</p>;
  if (error) return <p className="p-5 text-red-500">{error}</p>;

  return (
    <div className="p-5">
      <Card>
        <CardHeader>Users List</CardHeader>
        <CardContent>
          {users.map((user) => (
            <div key={user.id} className="mb-4 border-b pb-2">
              <h3 className="font-bold">{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAxios;


// you may make   file for axios instance and use it in all your components to avoid repeating the baseURL and other configurations
// ممكن بدل لودنج نحط فيه skeleton UI او spinner from a library زي react-spinners or shadcn
//to fetch users with id 

/*
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import CardBody from "../components/CardBody.jsx";
import CardHeader from "../components/CardHeader.jsx";

const UserDetails = () => {
  const { id } = useParams(); // ناخد ال id من ال URL

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        setUser(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // مهم جداً نحط id هنا

  // حالات ال UI
  if (loading) return <p className="p-5">Loading user...</p>;
  if (error) return <p className="p-5 text-red-500">{error}</p>;
  if (!user) return <p className="p-5">User not found</p>;

  return (
    <div className="p-5">
      <Card>
        <CardHeader>User Details</CardHeader>
        <CardBody>
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserDetails;
*/