import baseStyled, { css, ThemedStyledInterface } from 'styled-components';
export { css } from 'styled-components';

export const theme = {
  dark: {
    mainBg: `#333`,
    fontColor: `#FFF`,
    fontColor2: `#B4B4B4`,
    borderColor: `#E8E8E8`,
    btnFontColor: `#7A7A7A`,
    btnBg: `#333`,
    btnBg2: `#F8F8F8`,
    btnBg3: `#2C7FFF`,
    borderRadius: `20px`,
    borderRadius2: `6px`,
  },

  light: {
    mainBg: `#fff`,
    fontColor: `#222222`,
    fontColor2: `#B4B4B4`,
    borderColor: `#E8E8E8`,
    btnFontColor: `#7A7A7A`,
    btnBg: `#FFF`,
    btnBg2: `#F8F8F8`,
    btnBg3: `#2C7FFF`,
    borderRadius: `20px`,
    borderRadius2: `6px`,
  },
};

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
