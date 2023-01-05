import React from "react";
import { useAppDispatch } from "../../../../store";
import { loginUser } from "../../../../store/auth/actionCreators";

export const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginUser({ login, password }));
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
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
