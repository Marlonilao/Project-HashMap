import { HashMap } from "./hashMap.js";

const myHash = HashMap(16);
myHash.set("name", "Marlon");
console.log(myHash.get("name"));
console.log(myHash.has("name"));
console.log(myHash.has("nothing"));
