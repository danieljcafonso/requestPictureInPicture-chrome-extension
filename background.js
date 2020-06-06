
// A sample object that will be exposed further down and used on popup.js
const sampleBackgroundGlobal = {
  message: "This object comes from background.js",
};

// Listen to short lived messages from in-content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Perform any ther actions depending on the message
  console.log("background.js - received message from in-content.js:", message);
  // Respond message
  sendResponse("some message");
});

// Make variables accessible from chrome.extension.getBackgroundPage()
window.sampleBackgroundGlobal = sampleBackgroundGlobal;
