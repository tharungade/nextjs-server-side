import axios from "axios";


export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      <h1>email: {userData.email}</h1>
      <h1>username: {userData.username}</h1>
    </div>
  );
}

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");
	return response.data;
}
