import store from "store";

const checkJWT = (): boolean => {
  //   console.log(store.get("jwt"));
  //   alert(store.get("jwt") == undefined);
  return store.get("jwt") == undefined && store.get("jwt") == "" ? false : true;
};
export default checkJWT;
