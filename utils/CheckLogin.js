import {
  setItemAsync,
  getItemAsync,
  deleteItemAsync,
  isAvailableAsync,
} from "expo-secure-store";
import Domain from "./domain";

export default async function CheckLogin(key, value, data) {
  try {
    async function save(key, value) {
      return await setItemAsync(key, value);
    }
    async function getValueFor(key) {
      return await getItemAsync(key);
    }
    async function deleteValueFor(key) {
      return await deleteItemAsync(key);
    }
    async function checkDB() {
      return await isAvailableAsync();
    }
    const url = Domain();
    async function _fetch(token) {
      const login = await fetch(`${url}/api/admin/logStatus`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cookie: `adtoken=${token}`,
        },
        credentials: "include",
      });
      if (login.status === 200) {
        return true;
      } else {
        return false;
      }
    }
    if (checkDB) {
      if (key && value) {
        const isSaved = await save(key, value);
        if (!isSaved) {
          return true;
        } else {
          return false;
        }
      } else if (data) {
        if (!data) {
          return false;
        }
        const token = await getValueFor("adtoken");
        if (!token) {
          return false;
        }
        const login = await fetch(`${url}/api/admin/exams/add`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Cookie: `adtoken=${token}`,
          },
          credentials: "include",
          body: JSON.stringify(data),
        });
        if (login.status === 200) {
          return true;
        } else {
          return false;
        }
      } else {
        async function checkToken() {
          const token = await getValueFor("adtoken");
          if (!token) {
            return false;
          }
          const result = await _fetch(token);
          return result;
        }
        return await checkToken();
      }
    }
  } catch (err) {
    console.log(err);
  }
}
