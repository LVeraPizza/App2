// Importa el script de Firebase Messaging
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js");

// Configuración de Firebase (usa la misma que en tu proyecto)
const firebaseConfig = {
    apiKey: "AIzaSyCzMNKimcw1kaaJlMdTKj7RAdlsHyaImBk",
    authDomain: "vera-pizza-app.firebaseapp.com",
    projectId: "vera-pizza-app",
    storageBucket: "vera-pizza-app.firebasestorage.app",
    messagingSenderId: "783988757356",
    appId: "1:783988757356:web:c66d3f2571aff0f125d949",
    measurementId: "G-FNLSPHKXFW"
};

// Inicializa Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);

// Obtén la instancia de Messaging
const messaging = firebase.messaging();

// Maneja las notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log("Recibiste un mensaje en segundo plano:", payload);

    // Opciones de la notificación
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/img/logo_vera_pizza.png",  // Ruta a tu logo (ajústalo a la ubicación correcta)
        //badge: "/images/badge.png"  // (opcional) Puedes agregar un ícono de badge si lo deseas
    };

    // Muestra la notificación
    self.registration.showNotification(notificationTitle, notificationOptions);
});
