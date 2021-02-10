import { browser, Runtime } from "webextension-polyfill-ts";

browser.runtime.onMessage.addListener(
  (message: any, sender: Runtime.MessageSender) => {}
);
