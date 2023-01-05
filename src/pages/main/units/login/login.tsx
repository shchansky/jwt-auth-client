import React from "react";

export const Login = () => {
  const [login, setLogin] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("11111");
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            name="login"
            type="text"
            value={login}
            onChange={(ev) => setLogin(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="text"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};
