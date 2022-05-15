import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserProps = {}

const User = (props: UserProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: "karan", email: "karan@mann.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
