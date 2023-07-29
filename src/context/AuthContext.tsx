import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { createContext } from "react";

interface IAuthContextValue {
  currentUser: User | null;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<IAuthContextValue>({
  currentUser: null,
  signInWithGoogle: () => Promise.resolve(),
});

interface IAuthContextProps {
  children?: React.ReactNode;
}

const AuthContextProvider: React.FC<IAuthContextProps> = ({
  children,
}: IAuthContextProps) => {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  const value: IAuthContextValue = {
    currentUser: null,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
