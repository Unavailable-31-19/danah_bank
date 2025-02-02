// app.js

// Конфигурация Firebase

// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };
  const firebaseConfig = {
    apiKey: "AIzaSyD3EDKVbNdPHBhMNGFB4RTnk8QNVMeg1Ho",
    authDomain: "danah-school-db.firebaseapp.com",
    projectId: "danah-school-db",
    storageBucket: "danah-school-db.firebasestorage.app",
    messagingSenderId: "400447808100",
    appId: "1:400447808100:web:89967a70ff3aed90d7b571",
    measurementId: "G-RYYDGMENTC"
  };

// Инициализация Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);

// Обработка формы логина
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Вход пользователя
    firebase.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Успешный вход
            const user = userCredential.user;
            console.log("Пользователь вошел:", user);
            window.location.href = "dashboard.html"; // Перенаправление на другую страницу
        })
        .catch((error) => {
            // Обработка ошибок
            const errorMessage = error.message;
            document.getElementById('error-message').textContent = errorMessage;
        });
});
