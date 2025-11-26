import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);
import "../src/styles.css";
import "../src/assets/all.css";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       date: /Date$/i,
      },
    },
  },
};

export default preview;