import styled from "@emotion/styled"
import { TitleMedium } from "../../components/text/TitleMedium";
import { Button } from "../../components/form";
import { $lightColor, $phoneWidth } from "../../styled/variables";
import CarouselComponent from "../../components/carousel";
import { Winner1, Winner10, Winner11, Winner12, Winner13, Winner2, Winner3, Winner4, Winner5, Winner6, Winner7, Winner8, Winner9 } from "../../assets/img";
import { useState } from "react";

const winners = [
    {
        name: 'Оксана Борисейко, Белгород',
        img: Winner1,
        nomination: 'Победитель премии «Учитель истории 2024»',
        quote: '«Сегодня ни в коем случае нельзя навязывать ученикам своё мнение. Они живут в таком огромном информационном поле, что учитель может быть лишь навигатором, который показывает верную дорогу, но не управляет движением.»'
    },
    {
        name: 'Надежда Смирнова, Салават',
        img: Winner2,
        nomination: 'Номинация «Выбор жюри»',
        quote: '«Учитель должен не только владеть материалом, но и получать удовольствие от взаимодействия с ученической аудиторией.»',
    },
    {
        name: 'Алексей Овчинников, Купино',
        img: Winner3,
        nomination: 'Номинация «Лучший урок»',
        quote: '«Честь и слава историческому факультету Новосибирского государственного педагогического университета!»',
    },
    {
        name: 'Алла Романова, Самара',
        img: Winner4,
        nomination: 'Номинация «Народный выбор»',
    },
    {
        name: 'Роман Павловский, Павловск',
        img: Winner5,
        nomination: 'Призёр I степени',
    },
    {
        name: 'Елена Меньшинина, Москва',
        img: Winner6,
        nomination: 'Призёр I степени',
    },
    {
        name: 'Герман Хайдуков, Москва',
        img: Winner7,
        nomination: 'Призёр I степени',
    },
    {
        name: 'Виктория Плецельман, Москва',
        img: Winner8,
        nomination: 'Призёр II степени',
    },
    {
        name: 'Вера Колесникова, Керчь',
        img: Winner9,
        nomination: 'Призёр II степени',
    },
    {
        name: 'Юлия Тункова, Арзамас',
        img: Winner10,
        nomination: 'Призёр II степени',
    },
    {
        name: 'Олег Плесовских, Ильинка',
        img: Winner11,
        nomination: 'Призёр III степени',
    },
    {
        name: 'Павел Реутов, Одинцово',
        img: Winner12,
        nomination: 'Призёр III степени',
    },
    {
        name: 'Софья Стругач, Новосибирск',
        img: Winner13,
        nomination: 'Призёр III степени',
    },

]
export default function Winners() {
    return (
        <Container>
            <CarouselComponent>
                {winners.map(w => (
                    <Person>
                        <Photo src={w.img} />
                        <TextMedium>{w.name}</TextMedium>
                        <TextSmall>{w.nomination}</TextSmall>
                        <Quote>{w.quote}</Quote>
                    </Person>
                ))}
            </CarouselComponent>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;


const Person = styled.div`
    width: 29rem;
    height: 100%;
    background-color: #FFFFFF1A;
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF4D;
    border-radius: 20px;
    padding: 1.5rem;
    padding-bottom: 3rem;
    // justify-content: space-between;
    // align-items: baseline;
`;

const TextMedium = styled.p`
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: ${$lightColor};
  font-weight: 500;
  padding-bottom: 5px;
`;

const TextSmall = styled.p`
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: 400;
  color: #F5F5F580;
`;

const Quote = styled.p`
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: 200;
  color: ${$lightColor};
  padding-top: 1.2rem;
  text-align: left;
`;

const Photo = styled.img`
  width: 17rem;
  height: 17rem;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  object-fit: cover;
`;