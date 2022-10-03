import { shallowMount } from "@vue/test-utils";
import OptionsScreen from "../options/OptionsScreen.vue";
import browser from "webextension-polyfill";
import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";

describe("OptionsScreen.vue", () => {
  beforeAll(() => {
    vi.mock("webextension-polyfill", () => ({
      default: {
        runtime: {
          sendMessage: vi.fn(),
        },
      },
    }));
  });

  test("renders options page when passed", () => {
    const wrapper = shallowMount(OptionsScreen, {});
    expect(wrapper.text()).toMatch("Options Page");
    expect(browser.runtime.sendMessage).toBeCalled();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });
});
