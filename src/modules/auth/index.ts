import auth from "@react-native-firebase/auth";

function signIn(email: string, password: string) {
  return new Promise<void>((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error.code);
      });
  });
}

function signUp(email: string, password: string) {
  return new Promise<void>((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error.code);
      });
  });
}

export { signIn, signUp };
