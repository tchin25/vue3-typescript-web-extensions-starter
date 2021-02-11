import { browser, Runtime } from "webextension-polyfill-ts";

browser.runtime.onMessage.addListener(
  (message: any, sender: Runtime.MessageSender) => {
    // To view console logs in a background page on Chrome,
    // you go to chrome://extensions/ and inspect views under your extension
    console.log("Hello from background.js");
    if (message.from) {
      console.log("Message sent by: " + message.from);
    }
  }
);
