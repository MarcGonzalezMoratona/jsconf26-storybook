import { addons } from "storybook/manager-api";
import myCustomTheme from "./myCustomTheme";

addons.setConfig({
  theme: myCustomTheme,
});
