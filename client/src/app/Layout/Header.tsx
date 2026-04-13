import styled from "@emotion/styled";
import { FC, useContext, useState } from "react";
import { Container } from "../../styled/components";
import { Link, NavLink } from "react-router-dom";
import { IconClose, IconLogo } from "../../icons";
import { ABOUT_ROUTE, MAIN_ROUTE, SUPPORT_ROUTE } from "../../utils/consts";
import { Button } from "../../components/form";
import {
  $desktopWidth,
  $lightColor,
  $mainBackgroundColor,
  $mainFontColor,
  $phoneWidth,
  $primaryColor,
  $tableWidth,
} from "../../styled/variables";
import { YearContext } from "../../context/YearContext";
import { handleToggleAmoForm } from "../../components/fn";

export const Header: FC = () => {
  const [showBurgerMenu, setShoeBurgerMenu] = useState(false);
  const { setYear } = useContext(YearContext);
  return (
    <Wrapper>
      <MyContainer>
        <Logo to={MAIN_ROUTE}>
          <IconLogo />
        </Logo>
        <Nav>
          <NavLink to={ABOUT_ROUTE}>О нас</NavLink>
          <NavLink to={SUPPORT_ROUTE}>Поддержать</NavLink>
        </Nav>
        <NavLink
          onClick={() => {
            setYear(2025);
            setTimeout(() => {
              handleToggleAmoForm();
            }, 100);
          }}
          style={{ marginLeft: "auto" }}
          to={`${MAIN_ROUTE}#participate`}
        >
          <FormBtn $fitContent type="button">
            Принять участие
          </FormBtn>
        </NavLink>

        <MenuBtn onClick={() => setShoeBurgerMenu(true)}>Меню</MenuBtn>
        {showBurgerMenu ? (
          <MobileMenu>
            <div
              style={{ textAlign: "end", width: "5rem", marginLeft: "auto" }}
              onClick={() => setShoeBurgerMenu(false)}
            >
              <IconClose size={25} />
            </div>
            <NavLink to={ABOUT_ROUTE} onClick={() => setShoeBurgerMenu(false)}>
              О нас
            </NavLink>
            <NavLink
              to={SUPPORT_ROUTE}
              onClick={() => setShoeBurgerMenu(false)}
            >
              Поддержать
            </NavLink>
            <NavLink
              style={{ marginLeft: "auto" }}
              onClick={() =>
                setTimeout(() => {
                  handleToggleAmoForm();
                  setShoeBurgerMenu(false);
                }, 100)
              }
              to={`${MAIN_ROUTE}#participate`}
            >
              <Button
                style={{ marginTop: "1.5rem" }}
                $theme="selected"
                type="button"
              >
                Принять участие
              </Button>
            </NavLink>
          </MobileMenu>
        ) : null}
      </MyContainer>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${$mainBackgroundColor};
  @media screen and (max-width: ${$phoneWidth}) {
    height: 6rem;
  }
`;

const MyContainer = styled(Container)`
  display: flex;
  margin: 0;
  align-items: center;
  margin: 0 8vw;
  @media screen and (max-width: ${$phoneWidth}) {
    justify-content: space-between;
    margin: 0 5vw;
  }
  @media screen and (min-width: ${$desktopWidth}) {
    justify-content: space-between;
    margin: 0 15vw;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    justify-content: space-between;
    margin: 0 6.5vw;
  }
`;

const Logo = styled(Link)`
  display: flex;
  margin-right: 4.5rem;
  svg {
    fill: ${$primaryColor};
    transition: fill 0.3s;
  }
  &:hover {
    svg {
      fill: ${$primaryColor};
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    width: 7rem;
    // margin-right: 0;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    width: 8rem;
    // margin-right: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  > * {
    cursor: pointer;
    position: relative;
    font-size: 1.6rem;
    font-family: "Meta Pro";
    font-weight: 500;
    line-height: 1.6rem;
    color: ${$mainFontColor};
    transition: color 0.3s;
    &:not(:last-child) {
      margin-right: 4.5rem;
    }
    &.active {
      &:before {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    display: none;
  }
`;

const FormBtn = styled(Button)`
  margin-left: auto;
  font-size: 1.6rem;
  @media screen and (max-width: ${$phoneWidth}) {
    display: none;
  }
`;

const MenuBtn = styled.div`
  display: none;
  border-top: 3px solid #25612b;
  border-bottom: 3px solid #25612b;
  width: 4.5rem;
  padding: 1rem 1rem;
  text-align: center;
  @media screen and (max-width: ${$phoneWidth}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  width: 20rem;
  border-radius: 20px;
  padding: 1rem 1rem 2rem 2rem;
  background: ${$primaryColor};
  > * {
    display: block;
    font-size: 1.3rem;
    font-family: "Meta Pro";
    font-weight: 500;
    line-height: 1.6rem;
    color: ${$lightColor};
    transition: color 0.3s;
    width: 100%;
  }
  > a {
    padding: 1rem 0.5rem;
  }
`;
