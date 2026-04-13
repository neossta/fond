import { css, Global } from '@emotion/react';
import { FC } from 'react';
import { calcFluidFontSize, fontFace } from './mixins';
import emotionReset from 'emotion-reset';
import {
  $desctopLatgeWidth,
  $desktopWidth,
  $mainBackgroundColor,
  $mainFont,
  $mainFontColor,
  $mainFontSize,
  $phoneWidth,
  $tableWidth,
} from './variables';
import { SCREEN_EXTRA_LG, SCREEN_LG, SCREEN_MD, SCREEN_SM } from '../utils/consts';
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
          font-size: ${calcFluidFontSize(6, 14, SCREEN_SM, SCREEN_MD)};
        }
        @media screen and (max-width: ${$phoneWidth}) {
          font-size: ${calcFluidFontSize(11.9465, 20.48, 280, SCREEN_SM)};
        }
        @media screen and (max-width: ${$desctopLatgeWidth}) {
          font-size: ${calcFluidFontSize(3, 16, SCREEN_LG, SCREEN_EXTRA_LG)};
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
        display: flex;
        flex-direction: column;
        margin: 0;
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
        
      /* Стилизация элементов формы amoCRM */
#amoforms_iframe_1592870 {
  font-family: ${$mainFont};
  background-color: red;
  width: 500px !important;
}
  #amoforms_main_wrapper {
   background-color: red;
  }

#amoforms_iframe_1592870 input,
#amoforms_iframe_1592870 textarea,
#amoforms_iframe_1592870 select {
background-color: red !important;
  border: 2px solid #e1e5e9 !important;
  border-radius: 6px !important;
  padding: 12px 16px !important;
  font-size: 16px !important;
  transition: border-color 0.3s ease !important;
}

#amoforms_cont_1592870 input:focus,
#amoforms_cont_1592870 textarea:focus,
#amoforms_cont_1592870 select:focus {
  border-color: #4a89dc !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(74, 137, 220, 0.1) !important;
}

#amoforms_cont_1592870 button {
  background: linear-gradient(135deg, #4a89dc, #5d9cec) !important;
  border: none !important;
  border-radius: 6px !important;
  padding: 14px 28px !important;
  color: white !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  cursor: pointer !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

#amoforms_cont_1592870 button:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(74, 137, 220, 0.3) !important;
}

#amoforms_cont_1592870 label {
  font-weight: 500 !important;
  color: #2d3748 !important;
  margin-bottom: 8px !important;
  display: block !important;
}
    `}
  />
);
