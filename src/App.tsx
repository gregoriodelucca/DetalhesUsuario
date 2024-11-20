import React from "react";
import UserDetails from "./components/UserDetails";
import { User } from "./interfaces/User";

const App: React.FC = () => {
  const user: User = {
    id: 1,
    name: "gregorio de lucca ",
    email: "gregoriodelucca@gmail.com",
    phone: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipcode: "12345",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>User Details</h1>
      <UserDetails user={user} />
    </div>
  );
};

export default App;
