import axios from "axios"
import { useLoaderData } from "react-router-dom";


//لازم الفانكشن يكون اسمها لودر والكوومبننت يكون اسمه كدا ولازم ال الفانكشن بتاعه ايرور باوندري 

export async function loader() {
    // ممكن تجيب بيانات من API هنا لو حبيت
// مثلاً:
// const response = await fetch('https://jsonplaceholder.typicode.com/users');
// const users = await response.json();
// return { users };

 const response = await axios.get('https://jsonplaceholder.typicode.com/users');
 return response.data; // هترجع ال users ك props لل component
}

export function ErrorBoundary()
{
    return <p className="p-5 text-red-500">Failed to load dashboard data. Please try again later.</p>
}

// export const Component = () => {
//     const users = useLoaderData(); // هتجيب ال users اللي رجعت من ال loader

//     return (
//         <>
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//         <p className="mb-4">Welcome to the dashboard! Here are some users:</p>
//         <ul className="list-disc pl-5">
//             {users.map(user => (
//                 <li key={user.id} className="mb-2">         
//                     <p className="font-bold">{user.name}</p>
//                     <p>Email: {user.email}</p>
//                     <p>Phone: {user.phone}</p>
//                 </li>
//             ))}
//         </ul>
//         </>
//     )
// }



//the commented ,go to main.js and u will see its code 
//but i want to name it Dashboard 

const Dashboard = () => {
    const users = useLoaderData(); // هتجيب ال users اللي رجعت من ال loader

    return (
        <>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">Welcome to the dashboard! Here are some users:</p>
        <ul className="list-disc pl-5">
            {users.map(user => (
                <li key={user.id} className="mb-2">        
                    <p className="font-bold">{user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </li>
            ))}
        </ul>
        </>
    )
}       

export default Dashboard;