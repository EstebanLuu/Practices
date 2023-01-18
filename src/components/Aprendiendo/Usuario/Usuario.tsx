import { useState } from "react";
import { User } from "@/types";

const Usuario = () => {
  const [user, setUser] = useState<User>({
    uid: "*******",
    name: "******",
  });

  const handleLogin = () => {
    setUser({
      uid: "12345",
      name: "Nicolas Luna",
    });
  };
  return (
    <>
      <div className="section section__bottom">
        <h3 className="title">Usuario</h3>
        <button className="button" onClick={handleLogin}>
          Login
        </button>
        <pre>{JSON.stringify(user)}</pre>
      </div>
    </>
  );
};

export default Usuario;
