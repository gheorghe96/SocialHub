import React, { createContext, useContext, useState } from "react";

type AppProviderProps = { children: React.ReactNode };

interface CurrentUserContextType {
  user: undefined;
}

const AppContext = createContext<CurrentUserContextType | null>(null);
export function ContextProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState();

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
