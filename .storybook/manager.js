// .storybook/manager.js

import { addons } from '@storybook/addons';
import FoundryTheme from './foundry-theme';

addons.setConfig({
  theme: FoundryTheme,
  showPanel: false,
  isToolshown: false
});