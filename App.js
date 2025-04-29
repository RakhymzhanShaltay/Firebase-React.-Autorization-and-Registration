import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { registerUser } from "./authFunctions"; // функция регистрации из другого файла

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // для отображения текущего пользователя

  // 📌 Отслеживаем вход/выход пользователя
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("🔵 Пользователь вошёл: ", user.email);
        setUser(user);
      } else {
        console.log("🔴 Пользователь вышел");
        setUser(null);
      }
    });

    return () => unsubscribe(); // отписка от слушателя
  }, []);

  // 📌 Форма регистрации
  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(email, password);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Firebase Регистрация</h2>

      {user ? (
        <p>Привет, {user.email}!</p>
      ) : (
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit">Зарегистрироваться</button>
        </form>
      )}
    </div>
  );
}

export default App;
