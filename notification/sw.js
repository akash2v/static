self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Handle the notification click event
});
