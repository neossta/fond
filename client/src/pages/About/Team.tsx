import { FC } from "react";
import { Column, Container, TextSmall, Title } from "../../styled/components";
import styled from "@emotion/styled";
import {
  Team1,
  Team2,
  Team3,
  Team4,
  Team5,
  TeamBorder,
} from "../../assets/img";
import {
  $desktopWidth,
  $phoneWidth,
  $primaryBg,
  $tableWidth,
} from "../../styled/variables";
import { TitleMedium } from "../../components/text/TitleMedium";

const config = [
  {
    avatar: Team1,
    name: "Пётр Тихонов",
    descr:
      "Исполнительный директор Фонда Румянцева, в прошлом — учитель истории",
    text: "Лидер проекта",
  },
  {
    avatar: Team2,
    name: "Борис Гаврилин",
    descr: "Преподаватель Уральского федерального университета",
    text: "Интеграция в сообщество и работа с учителями",
  },
  {
    avatar: Team3,
    name: "Михаил Попов",
    descr: "Преподаватель института Ispring",
    text: "Контроль над методической и научной составляющей",
  },
  {
    avatar: Team4,
    name: "Иван Оконовенко",
    descr: "Сооснователь Фонда Румянцева",
    text: "Поиск ключевых партнеров, развитие программ Фонда",
  },
  {
    avatar: Team5,
    name: "Алёна Башкатова",
    descr: "Координатор проектов",
    text: "Организация мероприятий, сопровождение участников конкурса «Учитель истории»",
  },
];

export const Team: FC = () => {
  return (
    <Wrapper id="team">
      <TitleMedium>Команда</TitleMedium>
      <List>
        {config.map((item, index) => (
          <Item key={index}>
            <AvatarWrapper>
              <Avatar src={item.avatar} />
            </AvatarWrapper>

            <Right>
              <Border src={TeamBorder} />
              <ContentWrapper>
                {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                  }}
                > */}
                <Name>{item.name}</Name>
                <Descr>{item.descr}</Descr>
                <TextSmall>{item.text}</TextSmall>
                {/* </div> */}
              </ContentWrapper>
            </Right>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 8rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 6rem;
    margin-top: 25rem;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;
  padding-top: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-right: 0;
    padding-top: 0;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    gap: 0.8rem;
  }
`;

const Item = styled.li`
  padding-bottom: 3rem;
  background: ${$primaryBg};
  height: 100%;
  min-width: 0;
  display: flex;
  gap: 1rem;
  @media screen and (max-width: ${$phoneWidth}) {
    gap: 0.5rem;
  }
`;
const Right = styled(Column)`
  flex: 1;
  position: relative;
  align-items: start;
  height: fit-content;
  min-height: 100%;
  max-height: 100%;
`;

const ContentWrapper = styled.div`
  margin-top: 100%;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 1.5rem;
  }
`;

const AvatarWrapper = styled.div`
  flex: 1.2;
  min-width: 0;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: stretch;

  @media screen and (max-width: ${$phoneWidth}) {
    margin-right: 0;
    flex: 1.1;
  }
  @media screen and (min-width: ${$desktopWidth}) {
    flex: 1;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 20px;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    height: 100%;
  }
`;

const Name = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.3rem;
  margin-bottom: 1.3rem;
  z-index: 1;
  @media screen and (max-width: ${$tableWidth}) {
    margin-bottom: 0.55rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 1.1rem;
  }
`;

const Descr = styled(TextSmall)`
  margin-bottom: 0.8rem;
  @media screen and (max-width: ${$phoneWidth}) {
    margin-bottom: 0.5rem;
    line-height: 1.1rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 0.9rem;
  }
`;

const Border = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 55%;
  @media screen and (max-width: ${$phoneWidth}) {
    height: 40%;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    height: calc(100% - 10rem);
  }
  @media screen and (min-width: ${$desktopWidth}) {
    height: 50%;
  }
`;
