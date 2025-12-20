import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { DocsContainer } from "./DocsContainer";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { languageMap } from "../src/i18n";

const locales = Object.keys(languageMap).map((lang) => ({
  value: lang,
  title: languageMap[lang] || lang,
}));

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: locales,
      showName: true,
    },
  },
};

i18n.on("languageChanged", (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

const WithI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Colors", "Typography"],
      },
    },
    docs: {
      toc: {
        headingSelector: "h1, h2",
        ignoreSelector: "#stories",
      },
      container: DocsContainer,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  decorators: [
    WithI18next,
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],

  // tags: ["autodocs"],
};

export default preview;
