/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyAoSsJfBAfUg55eDgVUrUphhZ7GkobsRhs",
  authDomain: "sos-service-b2aa1.firebaseapp.com",
  databaseURL: "https://sos-service-b2aa1.firebaseio.com",
  projectId: "sos-service-b2aa1",
  storageBucket: "sos-service-b2aa1.appspot.com",
  messagingSenderId: "1083613103215",
  appId: "1:1083613103215:web:8b48af663eb94a10c5799a",
  measurementId: "G-4QK8DZLMCX"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title;
  const user = firebase.auth().currentUser;
  if (user) {
    const options = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };
    return self.registration.showNotification(title, options);
  }
});
self.addEventListener("notificationclick", function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      let matchingClient = null;
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        if (windowClient.url === feClickAction) {
          matchingClient = windowClient;
          break;
        }
      }
      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return clients.openWindow(feClickAction);
      }
    });
  event.waitUntil(promiseChain);
});
