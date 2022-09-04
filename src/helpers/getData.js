import { onValue, ref } from "firebase/database";
import { db } from "../Firebase/config";

export default function getData(path = "") {
    let result = null;
    onValue(ref(db, `gameState/${path}`), snapshot => result = snapshot.val())
    return result;
}
