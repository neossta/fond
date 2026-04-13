import styled from "@emotion/styled";
import { FC } from "react";
import {
  Container,
  TextMediumCapital,
  TextSmall,
} from "../../styled/components";
import {
  ParnerLogo1,
  ParnerLogo10,
  ParnerLogo11,
  ParnerLogo2,
  ParnerLogo3,
  ParnerLogo4,
  ParnerLogo5,
  ParnerLogo6,
  ParnerLogo7,
  ParnerLogo8,
  ParnerLogo9,
  Support1,
  Support2,
  Support3,
  Support4,
  Support5,
  Support6,
  Support7,
} from "../../assets/img";
import { $phoneWidth, $tableWidth } from "../../styled/variables";
import { TitleMedium } from "../../components/text/TitleMedium";

const partners = [
  {
    avatar: ParnerLogo1,
    src: "https://corpsoft24.ru/",
    name: "CorpSoft24",
  },
  {
    avatar: ParnerLogo2,
    src: "https://www.rsuh.ru/ ",
    name: "Российский государственный гуманитарный университет",
  },
  {
    avatar: ParnerLogo3,
    src: "https://www.ozon.ru/",
    name: "OZON",
  },
  {
    avatar: ParnerLogo4,
    src: "https://www.ispring.ru/",
    name: "iSpring",
  },
];

const friends = [
  {
    avatar: ParnerLogo11,
    src: "https://fondnauk.ru/",
    name: "«Проекты Станислава Дробышевского»",
  },
  {
    avatar: ParnerLogo7,
    src: "https://dum.ai/",
    name: "Журнал «Думай АРТ»",
  },
  {
    avatar: ParnerLogo5,
    src: "https://nitkatea.com/",
    name: "Русская чайная «Нитка»",
  },
  {
    avatar: ParnerLogo6,
    src: "https://историк.рф",
    name: "Журнал «Историк»",
  },
  {
    avatar: ParnerLogo8,
    src: "https://otb.org.ru/",
    name: "Компания «ОТБ»",
  },
  {
    avatar: ParnerLogo9,
    src: "https://valuefirst.ru/",
    name: "IT-компания «VALUE FIRST.»",
  },
  {
    avatar: ParnerLogo10,
    src: "https://foma.ru/",
    name: "Журнал «Фома»",
  },
];

const config = [
  {
    avatar: Support1,
    name: "Сергей Волков",
    descr: "Русский историк, доктор исторических наук, профессор ПСТГУ",
  },
  {
    avatar: Support2,
    name: "Алексей Савватеев",
    descr:
      "Просветитель, доктор физико-математических наук, член-корреспондент РАН",
  },
  {
    avatar: Support3,
    name: "Алексей Любжин",
    descr:
      "Доктор филологических наук, специалист по истории российского образования",
  },
  {
    avatar: Support4,
    name: "Василий Тополев",
    descr: "Блогер",
  },
  {
    avatar: Support5,
    name: "Василий Гурков",
    descr: "Автор канала «Комнатный рыцарь»",
  },
  {
    avatar: Support6,
    name: "Александр Оджо",
    descr: "Учитель истории, блогер",
  },
  {
    avatar: Support7,
    name: "Павел Гнилорыбов",
    descr: "Историк, блогер",
  },
];

export const Support: FC = () => {
  return (
    <Wrapper id="support">
      <TitleMedium>нас поддерживают</TitleMedium>
      <GridRow>
        <Partners>
          <TextMediumCapital>партнеры</TextMediumCapital>
          <List $columns={2}>
            {partners.map(({ avatar, name, src }) => (
              <Item key={name}>
                <a href={src} target="_blank">
                  <Avatar src={avatar} />
                </a>
                <Name>{name}</Name>
              </Item>
            ))}
          </List>
        </Partners>
        <Partners>
          <TextMediumCapital>друзья фонда</TextMediumCapital>
          <List $columns={2} className="second-col">
            {friends.map(({ avatar, name, src }) => (
              <Item key={name}>
                <a href={src} target="_blank">
                  <Avatar src={avatar} />
                </a>
                <Descr>{name}</Descr>
              </Item>
            ))}
          </List>
        </Partners>
        <Partners>
          <TextMediumCapital>Информационные партнеры</TextMediumCapital>
          <List $columns={3}>
            {config.map(({ avatar, name, descr }) => (
              <Item key={name}>
                <Avatar src={avatar} />
                <Name>{name}</Name>
                <Descr>{descr}</Descr>
              </Item>
            ))}
          </List>
        </Partners>
      </GridRow>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-bottom: 6rem;
  gap: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const GridRow = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1.15fr 3fr;
  gap: 8.5rem;
  padding-top: 4rem;
  justify-content: space-between;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    padding-top: 1rem;
    gap: 4rem;
    ul {
      &.second-col {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    gap: 5.5rem;
    grid-template-columns: 2.2fr 1.3fr 2.6fr;
  }
`;

const Partners = styled.div``;

const List = styled.ul<{ $columns?: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$columns === 3 ? "repeat(3, 1fr)" : "repeat(2, minmax(0, 1fr))"};
  padding-top: 4rem;
  align-content: baseline;
  gap: 2rem 1.4rem;

  @media screen and (max-width: ${$phoneWidth}) {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 1.3rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    gap: 2rem 0.9rem;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: ${$tableWidth}) {
    > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const Avatar = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 25%;
  object-fit: cover;
  object-position: center top;
  align-self: center;
`;

const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.3rem;
  @media screen and (max-width: ${$phoneWidth}) {
    margin-top: 0.5rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
  }
`;

const Descr = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0%;
  font-weight: 400;
  line-height: 1.2rem;
  width: 100%;
  // word-wrap: break-word;
  // overflow-wrap: break-word;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 0.85rem;
    line-height: 1rem;
  }
`;
