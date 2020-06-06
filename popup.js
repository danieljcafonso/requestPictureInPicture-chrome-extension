let clicker = document.getElementById("open");

clicker.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: "document.querySelector('video').requestPictureInPicture()" },
    );
  });
};
