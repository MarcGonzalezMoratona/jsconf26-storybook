import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/addon-docs/blocks';
import { themes } from 'storybook/theming';
import { FC, PropsWithChildren, useMemo } from 'react';

type TExtendedDocsContext = DocsContainerProps & {
  context: DocsContainerProps['context'] & {
    store: { userGlobals: { globals: { theme: string } } };
  };
};

export const DocsContainer: FC<PropsWithChildren<TExtendedDocsContext>> = ({ children, context }) => {
  const currentTheme = context.store.userGlobals.globals?.theme;

  const docsTheme = useMemo(() => (currentTheme?.includes('dark') ? themes.dark : themes.light), [currentTheme]);

  return (
    <BaseContainer theme={docsTheme} context={context}>
      {children}
    </BaseContainer>
  );
};
