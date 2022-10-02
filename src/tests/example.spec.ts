import { shallowMount } from "@vue/test-utils";
import OptionsScreen from "@/components/OptionsScreen.vue";

describe("OptionsScreen.vue", () => {
  test("renders options page when passed", () => {
    const wrapper = shallowMount(OptionsScreen, {});
    expect(wrapper.text()).toMatch("Options Page");
  });
});
