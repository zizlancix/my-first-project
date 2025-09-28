elf.addEventListener("push", event => {

  const data = event.data ? event.data.json() : {};

  const title = data.title || "Notification";

  const options = {

    body: data.body || "You got a new message",

    icon: data.icon || "/apple-touch-icon.png"

  };
 
  event.waitUntil(self.registration.showNotification(title, options));

});
 
