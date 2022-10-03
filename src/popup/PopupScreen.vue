<template>
  <div>Popup</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import browser from "webextension-polyfill";

onMounted(() => {
  // Can access web-extension api through Vue files
  // Sends a message to the background script every time the popup is opened
  browser.runtime.sendMessage({ from: "PopupScreen.vue" });
});
</script>

<style lang="scss"></style>
