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
  apiKey:            "ВСТАВЬ_СЮДА",        // apiKey
  authDomain:        "ВСТАВЬ_СЮДА",        // authDomain
  databaseURL:       "ВСТАВЬ_СЮДА",        // databaseURL (важно!)
  projectId:         "ВСТАВЬ_СЮДА",        // projectId
  storageBucket:     "ВСТАВЬ_СЮДА",        // storageBucket
  messagingSenderId: "ВСТАВЬ_СЮДА",        // messagingSenderId
  appId:             "ВСТАВЬ_СЮДА"         // appId
};

/* После вставки своих данных — сохрани файл.
   Сайт автоматически начнёт работать с реальной базой. */
