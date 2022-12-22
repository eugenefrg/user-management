import { useContext } from "react";
import AuthContext from "./context";
import mockAuth from "./mock-auth";

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthContext, mockAuth };
