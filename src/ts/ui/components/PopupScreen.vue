<template>
  <div>Popup</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { browser } from "webextension-polyfill-ts";

export default defineComponent({
  mounted() {
    // Can access web-extension api through Vue files
    // Sends a message to the background script every time the popup is opened
    browser.runtime.sendMessage({ from: "PopupScreen.vue" });
  },
});
</script>

<style lang="scss"></style>
