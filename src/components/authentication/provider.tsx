import { message } from "antd";
import { FC, ReactNode, useState } from "react";
import userData from "../../assets/data/users-data";
import { mockAuth, AuthContext } from "../../utils/authentication";
import { LoginFormValues } from "./types";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  let [user, setUser] = useState<string | null>(null);

  let signin = (authenticateUser: LoginFormValues, callback: VoidFunction) => {
    const hasMatch = userData.find(
      (user) =>
        user.userName === authenticateUser.username &&
        user.password === authenticateUser.password &&
        user.branchId === authenticateUser.branchId
    );

    return mockAuth.signin(() => {
      if (hasMatch) {
        setUser(authenticateUser.username);
        callback();
      } else {
        message.error("Incorrect Username or Password");
      }
    });
  };

  let signout = (callback: VoidFunction) => {
    return mockAuth.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
