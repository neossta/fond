import { css, Global } from '@emotion/react';
import { FC } from 'react';
import { calcFluidFontSize, fontFace } from './mixins';
import emotionReset from 'emotion-reset';
import {
  $desktopWidth,
  $mainBackgroundColor,
  $mainFont,
  $mainFontColor,
  $mainFontSize,
  $phoneWidth,
  $tableWidth,
} from './variables';
import { SCREEN_LG, SCREEN_MD, SCREEN_SM } from '../utils/consts';
import { MetaPro } from '../assets/fonts/MetaPro';

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      ${emotionReset}
      ${fontFace('Meta Pro', MetaPro.Black, 900)}
      ${fontFace('Meta Pro', MetaPro.Bold, 'bold')}
      ${fontFace('Meta Pro', MetaPro.Book, 'normal')}
      ${fontFace('Meta Pro', MetaPro.Light, 300)}
      ${fontFace('Meta Pro', MetaPro.Medium, 500)}
      ${fontFace('Meta Pro', MetaPro.Normal, 'normal')}
      ${fontFace('Meta Pro Cond', MetaPro.CondBlack, 900)}
      ${fontFace('Meta Pro Cond', MetaPro.CondBold, 'bold')}
      ${fontFace('Meta Pro Cond', MetaPro.CondBook, 'normal')}
      ${fontFace('Meta Pro Cond', MetaPro.CondExtraBold, 800)}
      ${fontFace('Meta Pro Cond', MetaPro.CondMedium, 500)}
      ${fontFace('Meta Pro Cond', MetaPro.CondNormal, 'normal')}

      html {
        font-family: ${$mainFont};
        font-size: ${$mainFontSize};
        scroll-behavior: smooth;
        @media screen and (max-width: ${$desktopWidth}) {
          font-size: ${calcFluidFontSize(6.47, 16, SCREEN_MD, SCREEN_LG)};
        }
        @media screen and (max-width: ${$tableWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 31.51, 280, SCREEN_SM)};
        }
        @media screen and (max-width: ${$phoneWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 20.48, 280, SCREEN_SM)};
        }
      }

      body {
        position: relative;
        background: ${$mainBackgroundColor};
        color: ${$mainFontColor};
      }

      * {
        box-sizing: border-box;
      }

      #root {
        min-height: 100vh;
      }
      a {
        color: inherit;
        text-decoration: none;
        outline: none;
      }

       #amoforms_iframe_1353650 {
        position: fixed !important;
        max-width: 55rem !important;
        width: 100% !important;
        height: -webkit-fill-available;
        bottom: auto !important;
        right: auto !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        z-index: 11;
        opacity: 0 !important;
        visibility: hidden !important;
        transition: opacity 0.3s, visibility 0.3s;
        &.active {
          opacity: 1 !important;
          visibility: visible !important;
        }
      } 
    `}
  />
);
