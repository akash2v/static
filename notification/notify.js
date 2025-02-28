if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

function showNotification() {
    Notification.requestPermission().then(function(result) {
        if (result === "granted") {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification("Happy Birthday", {
                    body: "Wishing you a day filled with happiness and a year filled with joy. Happy Birthday!",
                    icon: "images/bday.png"
                });
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("notifyButton").addEventListener("click", showNotification);
});
