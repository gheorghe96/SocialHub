import firestore from "@react-native-firebase/firestore";

function createPost(payload) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection("Users")
      .add({
        name: "Ada Lovelace",
        age: 30,
      })
      .then(() => {
        console.log("User added!");
      });
  });
}

export { createPost };
