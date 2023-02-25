import React, { createContext, useContext, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

type AppProviderProps = { children: React.ReactNode };

interface CurrentUserContextType {
  user: FirebaseAuthTypes.User | null | undefined;
}

const AppContext = createContext<CurrentUserContextType | null>(null);
export function ContextProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    // auth().signOut();
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return appContext;
};
