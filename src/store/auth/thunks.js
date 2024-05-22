import { singInWithGoogle } from "@/firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    console.log({ email, password });
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const res = await singInWithGoogle();
    if (!res.ok) return dispatch(logout(res));
    dispatch(login(res));
  };
};
