import { createContext } from "react";
import { LoginFormValues } from "../../components/authentication/types";

interface AuthContextType {
  user: any;
  signin: (userData: LoginFormValues, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
