import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

// ✅ Регистрация
export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ Пользователь успешно зарегистрирован");
  } catch (error) {
    console.error("❌ Ошибка при регистрации:", error.message);
  }
};

// ✅ Вход
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Вход выполнен");
  } catch (error) {
    console.error("❌ Ошибка при входе:", error.message);
  }
};
