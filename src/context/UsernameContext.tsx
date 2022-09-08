import { createContext, Dispatch, SetStateAction } from "react";

interface IUsernameContext {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}
const defaultState = {
  username: "",
  setUsername: () => {},
};
export const UsernameContext = createContext<IUsernameContext>(defaultState);
