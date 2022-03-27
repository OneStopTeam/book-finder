import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'SuncheonR';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/SuncheonR.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Jal_Haru';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Haru.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
    `}
  />
);

export default Fonts;
