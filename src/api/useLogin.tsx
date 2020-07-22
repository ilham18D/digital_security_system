import React from "react";
import firebaseApp from "./firebase";
import { User } from "firebase";
import { UserAuthServiceClient } from "../gen/AuthServiceClientPb";
import { ReqSubscribe } from "../gen/auth_pb";
import { Metadata } from "grpc-web";
interface TAuthState {
  loading: boolean;
  user?: User;
}
export function useLoginApi() {
  const [authState, setAuthState] = React.useState<TAuthState>({
    loading: true,
  });
  const api = new UserAuthServiceClient(
    process.env.REACT_APP_SERVICEURL as string
  );
  const onChangeAuth = React.useCallback(async (user: firebase.User | null) => {
    try {
      if (user !== null) {
        const idToken = await user.getIdTokenResult();

        if (idToken.claims["roles"] === 0) {
          const authorization = await getToken();
          const fcmToken = await firebaseApp.messaging().getToken();
          const reqMetadata: Metadata = { authorization };
          const reqSubscribe = new ReqSubscribe().setFcmtoken(fcmToken);
          await api.login(reqSubscribe, reqMetadata);
          setAuthState({ loading: false, user });
          return;
        }

        throw new Error("permission rejected");
      } else {
        setAuthState({ loading: false, user: undefined });
        return;
      }
    } catch (error) {
      await firebaseApp.auth().signOut();
      setAuthState({ loading: false, user: undefined });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = async () => {
    try {
      const authorization = await getToken();
      await api.logout(new ReqSubscribe().setFcmtoken(""), {
        authorization,
      } as Metadata);
      await firebaseApp.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(onChangeAuth);
    return () => unsubscribe();
  }, [onChangeAuth]);

  return { authState, logout };
}

export async function getToken() {
  try {
    const user = firebaseApp.auth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      return "Bearer " + token;
    }
    throw new Error("akses token ");
  } catch (error) {
    throw new Error("token tidak ditemukan");
  }
}
