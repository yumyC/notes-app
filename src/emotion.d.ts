import '@emotion/react';

import { CustomTheme } from './hooks/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
