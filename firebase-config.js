/* ============================================================
   HAVEN — firebase-config.js
   
   КАК НАСТРОИТЬ (один раз, займёт 5 минут):
   
   1. Зайди на https://console.firebase.google.com
   2. Нажми "Create a project" → дай имя "haven-realestate"
   3. Отключи Google Analytics → "Create project"
   4. Слева нажми "Realtime Database" → "Create database"
   5. Выбери регион Europe-west1 → "Start in test mode" → "Enable"
   6. Слева нажми шестерёнка ⚙ → "Project settings"
   7. Пролистай вниз → "Your apps" → нажми </> (Web)
   8. Дай имя "haven-web" → Register app
   9. Скопируй значения firebaseConfig и вставь сюда ниже
   ============================================================ */

var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyBuihZuhhKn2-vLt8Ampl6nXnUYonTluhU",        // apiKey
  authDomain:        "haven-realestate.firebaseapp.com",        // authDomain
  databaseURL:       "https://haven-realestate-default-rtdb.europe-west1.firebasedatabase.app",        // databaseURL (важно!)
  projectId:         "haven-realestate",        // projectId
  storageBucket:     "haven-realestate.firebasestorage.app",        // storageBucket
  messagingSenderId: "453250401233",        // messagingSenderId
  appId:             "1:453250401233:web:1eacdea67c0219b1dfd6f0"         // appId
};

/* После вставки своих данных — сохрани файл.
   Сайт автоматически начнёт работать с реальной базой. */
