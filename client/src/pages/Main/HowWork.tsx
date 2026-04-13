import { Column, Container, TextSmall, Title } from "../../styled/components";
import styled from "@emotion/styled";
import {
  $paleGreen,
  $phoneWidth,
  $primaryBg,
  $primaryColor,
} from "../../styled/variables";
import { TitleMedium } from "../../components/text/TitleMedium";
import { Position_2025PDF } from "../../assets/pdf";
import { Link } from "react-router-dom";

const config = [
  {
    date: "до 4 ноября 2025",
    descr:
      "Зарегистрируйтесь и заполните анкету. Мы пришлем вам небольшой тест, а затем попросим написать эссе на одну из предложенных тем.",
  },
  {
    date: "до 8 декабря 2025",
    descr:
      "Составьте план урока, подберите дополнительные материалы и представьте этот урок на видео.",
  },
  {
    date: "до 25 декабря 2025",
    descr:
      "Подготовьтесь к собеседованию. На нем зададим вопросы о вашем уроке, педагогических методиках, воспитательных приёмах и роли учителя в современной системе образования.",
  },
  {
    date: "22 февраля 2026",
    descr:
      "Примите участие в награждении в рамках образовательного форума — это будет отличная возможность пообщаться и обменяться опытом. Дорогу и проживание оплатим.",
  },
];

export const HowWork = () => {
  return (
    <Wrapper>
      <TitleMedium style={{ marginBottom: "0.8rem" }}>
        Как принять участие?
      </TitleMedium>
      <PositionLink to={Position_2025PDF} target="_blank">
        Положение о конкурсе
      </PositionLink>
      <Content>
        <ItemsColumn style={{ flex: 1 }}>
          <Item
            $inactive
            style={{
              height: "180px",
              marginLeft: "50%",
              marginRight: "-20%",
              justifyContent: "end",
            }}
          >
            <Label>
              <span style={{ color: $paleGreen }}>{`${config[1].date}`}</span>
            </Label>
            <Descr style={{ color: $paleGreen }}>{config[1].descr}</Descr>
            <div className="dot" style={{ background: $paleGreen }}></div>
          </Item>
          <Item $inactive style={{ height: "180px", marginLeft: "15%" }}>
            <Label>
              <span style={{ color: $paleGreen }}>{`${config[0].date}`}</span>
            </Label>
            <Descr style={{ color: $paleGreen }}>{config[0].descr}</Descr>
            <div className="dot" style={{ background: $paleGreen }}></div>
          </Item>
        </ItemsColumn>
        <Divider></Divider>
        <ItemsColumn style={{ flex: 1 }}>
          <Item $inactive style={{ height: "250px", marginLeft: "30%" }}>
            <Label>
              <span style={{ color: $paleGreen }}>{`${config[3].date}`}</span>
            </Label>
            <Descr style={{ color: $paleGreen }}>{config[3].descr}</Descr>
            <div className="dot" style={{ background: $paleGreen }}></div>
          </Item>
          <Item $inactive style={{ height: "250px", justifyContent: "end" }}>
            <Label>
              <span style={{ color: $paleGreen }}>{`${config[2].date}`}</span>
            </Label>
            <Descr style={{ color: $paleGreen }}>{config[2].descr}</Descr>
            <div className="dot" style={{ background: $paleGreen }}></div>
          </Item>
        </ItemsColumn>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 8rem;
  padding-bottom: 8rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 6rem;
    margin-top: 22rem;
    padding-bottom: 0;
    overflow: visible;
  }
`;

const PositionLink = styled(Link)`
  text-decoration: underline;
  font-size: 1.8rem;
  line-height: 1.9rem;
  font-weight: 400;
  padding-top: 5rem;
  color: ${$primaryColor};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.2rem;
  }
`;

const Divider = styled.div`
  position: absolute;
  top: calc(50% - 0.15rem);
  left: 0;
  right: 0;
  height: 0.15rem;
  background-color: #266025;

  @media screen and (max-width: ${$phoneWidth}) {
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.15rem;
    height: auto;
  }
`;

const ItemsColumn = styled(Column)`
  height: 500px;
  gap: 0;
  justify-content: center;

  > :first-child .dot {
    bottom: -10px;
    left: -10px;
  }

  > *:not(:first-child) .dot {
    top: -10px;
    left: -10px;
  }

  @media screen and (max-width: ${$phoneWidth}) {
    height: auto;
    width: 100%;
    overflow: visible;

    > :first-child .dot,
    > *:not(:first-child) .dot {
      top: -8px;
      left: -8px;
      bottom: auto;
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  
  
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    gap: 2rem;
    overflow: visible;
    margin-top: 2rem;
    >: first-child>:first-child {
     order: 1;
    }
    >: first-child >:not(first-child) {
     margin-top: 2rem;
    }
    >: not(first-child)>:first-child {
     order: 1;
    } 
    
  }
`;

const Item = styled.div<{ $inactive?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 3rem;
  position: relative;
  border-left: 0.15rem dashed ${$primaryColor};
  border-image: repeating-linear-gradient(
      to bottom,
      ${(props) => (props.$inactive ? $paleGreen : "#266025")},
      ${(props) => (props.$inactive ? $paleGreen : "#266025")} 4px,
      transparent 4px,
      transparent 6px
    )
    1;

  > .dot {
    position: absolute;
    height: 20px;
    width: 20px;
    background: #266025;
    border-radius: 50%;
    z-index: 10000;
  }

  @media screen and (max-width: ${$phoneWidth}) {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 2rem 1rem 2rem 2rem;
    height: auto !important;
    min-height: 120px;
    justify-content: flex-start !important;
    overflow: visible;
    border-left: none;
    border-top: 0.15rem dashed ${$primaryColor};
    border-image: repeating-linear-gradient(
        to right,
        ${(props) => (props.$inactive ? $paleGreen : "#266025")},
        ${(props) => (props.$inactive ? $paleGreen : "#266025")} 2px,
        transparent 2px,
        transparent 4px
      )
      1;

    > .dot {
      height: 16px;
      width: 16px;
      overflow: visible;
    }
  }
`;

const Label = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.8rem;

  span {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.2rem;
    color: ${$primaryColor};
  }

  @media screen and (max-width: ${$phoneWidth}) {
    margin-bottom: 1rem;

    span {
      font-size: 2rem;
      line-height: 2.2rem;
    }
  }
`;

const Descr = styled(TextSmall)`
  color: #266025;
  max-width: 75%;

  @media screen and (max-width: ${$phoneWidth}) {
    max-width: 100%;
  }
`;
