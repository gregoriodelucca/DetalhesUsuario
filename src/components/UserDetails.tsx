import React from "react";
import { User } from "../interfaces/User";

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserDetails;
