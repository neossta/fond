import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { $phoneWidth, $primaryColor, $lightColor } from '../../styled/variables';

export const Button = styled.button<{ $theme?: 'primary' | 'secondary' | 'selected'; $fitContent?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Meta Pro';
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center; 
  width: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100%')};
  border-radius: 20px;
  border: 1px solid ${$primaryColor};
  padding: 0.8rem 1.5rem;
  transition: color 0.3s, background-color 0.3s;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.3rem;
    line-height: 1.3rem;
    border-radius: 1.5rem;
    padding: 1rem 1rem;
    border: none;
  }

  ${({ $theme }) => {
    switch ($theme) {
      case 'secondary':
        return css`
          background-color: #FFFFFF1A;
          border: 1px solid #FFFFFF4D;
          color: ${$lightColor};
          &:hover {
            background-color: ${$lightColor};
            color: ${$primaryColor};
          }
        `;
      case 'selected':
        return css`
          background-color: ${$lightColor};
          color: ${$primaryColor};
          border: 1px solid #FFFFFF4D;
          &:hover {
            background-color: ${$lightColor};
            color: ${$primaryColor};
          }
        `;

      default:
        return css`
          background-color: ${$primaryColor};
          color: #fff;
          &:hover {
            background-color: ${$lightColor};
            color: ${$primaryColor};
          }
        `;
    }
  }}
`;
