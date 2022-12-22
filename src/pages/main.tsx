import { FC } from "react";
import { LoginFormValues } from "../components/authentication/types";
import Template from "../components/template";
import { useAuth } from "../utils/authentication";
import Authenticated from "./authenticated";
import Login from "./login";

const Main: FC = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <Login />;
  } else {
    return <Authenticated />;
  }
};

export default Main;
