import { Finalist1, Finalist10, Finalist11, Finalist12, Finalist13, Finalist14, Finalist15, Finalist16, Finalist2, Finalist3, Finalist4, Finalist5, Finalist6, Finalist7, Finalist8, Finalist9, Winner1, Winner10, Winner11, Winner12, Winner2, Winner4, Winner5, Winner6, Winner7, Winner8, Winner9 } from "../assets/img";

interface Region {
    title: string;
    shortTitle?: string;
    data?: {
        applications: number,
        finalists?: {
            name: string;
            organisation: string;
            city: string;
            image?: string;
        }[],
        jury?: {
            name: string;
            organisation: string;
            city: string;
            image?: string;
        }[]
    }
}

export const regionsData: Record<string, Region> = {
    "01": { title: "Республика Адыгея", data: { applications: 1 } },
    "02": {
        title: "Республика Башкортостан", data: {
            applications: 6,
            finalists: [{
                name: 'Смирнова Надежда Васильевна',
                organisation: 'МБОУ Гимназия № 2',
                city: 'Салават',
                image: Winner2,
            }]
        }
    },
    "03": {
        title: "Республика Бурятия", data: {
            applications: 10,
            finalists: [{
                name: 'Меньшикова Евгения Игоревна',
                organisation: 'ГБОУ Лицей-интернат №6',
                city: 'Улан-Удэ',
                image: Finalist2,
            }]
        }
    },
    "04": { title: "Республика Алтай", data: { applications: 1, } },
    "05": {
        title: "Республика Дагестан", data: {
            applications: 18,
            finalists: [{
                name: 'Сайфуллаев Алишер Анварович',
                organisation: 'МБОУ Цмурская СОШ',
                city: 'Цмур',
                image: Finalist9,
            }]
        }
    },
    "06": { title: "Республика Ингушетия", data: { applications: 2 } },
    "07": { title: "Кабардино-Балкарская Республика" },
    "08": { title: "Республика Калмыкия" },
    "09": { title: "Карачаево-Черкесская Республика", data: { applications: 2, } },
    "10": { title: "Республика Карелия", data: { applications: 2, } },
    "11": { title: "Республика Коми", data: { applications: 2, } },
    "12": {
        title: "Республика Марий Эл", data: {
            applications: 4,
            jury: [{
                name: 'Попов Михаил Александрович',
                organisation: 'член жюри',
                city: 'Йошкар-Ола',
            }]
        }
    },
    "13": { title: "Республика Мордовия", data: { applications: 10, } },
    "14": {
        title: "Республика Саха (Якутия)", data: {
            applications: 12, finalists: [{
                name: 'Забелина Екатерина Геннадьевна',
                organisation: 'МБОУ СОШ с УИОП',
                city: 'Алдан',
                image: Winner2,
            }]
        }
    },
    "15": { title: "Республика Северная Осетия" },
    "16": { title: "Республика Татарстан", data: { applications: 12, } },
    "17": { title: "Республика Тыва" },
    "18": { title: "Удмуртская Республика", data: { applications: 11, } },
    "19": { title: "Республика Хакасия", data: { applications: 3, } },
    "20": { title: "Чеченская Республика" },
    "21": {
        title: "Чувашская Республика", data: {
            applications: 3, finalists: [{
                name: 'Григорьев Александр Владимирович',
                organisation: 'МБОУ СОШ № 45',
                city: 'Чебоксары',
            }]
        }
    },
    "22": { title: "Алтайский край", data: { applications: 8, } },
    "23": {
        title: "Краснодарский край", data: {
            applications: 17, finalists: [
                {
                    name: 'Тимошенко Владислав Александрович ',
                    organisation: 'МБОУ гимназия Эврика им. В. А. Сухомлинского',
                    city: 'Анапа',
                    image: Finalist4,
                },
                {
                    name: 'Бурлаченко Елена Сергеевна',
                    organisation: 'МБОУ СОШ №8 имени А.Н.Докучая',
                    city: 'Бичевой',
                    image: Finalist10,
                }
            ]
        }
    },
    "24": {
        title: "Красноярский край", data: {
            applications: 39,
            finalists: [{
                name: 'Омельяненко Татьяна Валерьевна',
                organisation: 'МБОУ Школа №90',
                city: 'Железногорск',
            },
            {
                name: 'Чепиков Иван Андреевич',
                organisation: 'МБОУ Раздолинская СОШ имени Героя Советского Союза Ф. Тюменцева',
                city: 'Раздолинск',
                image: Finalist12,
            }]
        }
    },
    "25": { title: "Приморский край", data: { applications: 5, } },
    "26": { title: "Ставропольский край", data: { applications: 43, } },
    "27": { title: "Хабаровский край", data: { applications: 7, } },
    "28": { title: "Амурская область", data: { applications: 8, } },
    "29": { title: "Архангельская область", data: { applications: 4, } },
    "30": {
        title: "Астраханская область", data: {
            applications: 2, finalists: [{
                name: 'Нестеренко Наталья Витальевна',
                organisation: 'МБОУ СОШ № 54',
                city: 'Астрахань',
            }]
        }
    },
    "31": {
        title: "Белгородская область", data: {
            applications: 3, finalists: [{
                name: 'Борисейко Оксана Михайловна',
                organisation: 'ОГАОУ ОК Алгоритм Успеха',
                city: 'Белгород',
                image: Winner1,
            }]
        }
    },
    "32": {
        title: "Брянская область", data: {
            applications: 4, finalists: [{
                name: 'Селезнева Людмила Евгеньевна',
                organisation: 'МБОУ-гимназия № 1 им. Ю. А. Гагарина',
                city: 'Клинцы',
                image: Finalist1,
            }]
        }
    },
    "33": { title: "Владимирская область", data: { applications: 3, } },
    "34": { title: "Волгоградская область", data: { applications: 4, } },
    "35": {
        title: "Вологодская область", data: {
            applications: 13,
            finalists: [{
                name: 'Кушнерева Ксения Владимировна',
                organisation: 'МОУ СОШ №1 с углубленным изучением английского языка',
                city: 'Вологда',
                image: Finalist5,
            },
            {
                name: 'Звозко Влада Александровна',
                organisation: 'МБОУ ВМО Огарковская средняя школа им. М.Г. Лобытова',
                city: 'Огарково',
                image: Finalist6,
            }]
        }
    },
    "36": {
        title: "Воронежская область", data: {
            applications: 3, finalists: [
                {
                    name: 'Дмитриев Павел Владимирович',
                    organisation: 'МБОУ ОСОШ №11',
                    city: 'Воронеж',
                    image: Finalist7,
                }
            ]
        }
    },
    "37": { title: "Ивановская область", data: { applications: 7, } },
    "38": { title: "Иркутская область", data: { applications: 39, } },
    "39": { title: "Калининградская область", data: { applications: 5, } },
    "40": { title: "Калужская область", data: { applications: 5, } },
    "41": { title: "Камчатский край", data: { applications: 11, } },
    "42": { title: "Кемеровская область", data: { applications: 8, } },
    "43": {
        title: "Кировская область", data: {
            applications: 9, finalists: [{
                name: 'Минрахманова Альбина Альбертовна',
                organisation: 'КОГОБУ Лицей г. Малмыжа',
                city: 'Малмыж',
                image: Finalist8,
            }]
        }
    },
    "44": { title: "Костромская область" },
    "45": { title: "Курганская область" },
    "46": { title: "Курская область", data: { applications: 6, } },
    "48": {
        title: "Липецкая область", data: {
            applications: 4, finalists: [{
                name: 'Родионова Екатерина Аркадьевна',
                organisation: 'МБОУ гимназия №12',
                city: 'Липецк',
                image: Finalist16,
            }]
        }
    },
    "49": { title: "Магаданская область", data: { applications: 1, } },
    "51": { title: "Мурманская область", data: { applications: 8, } },
    "52": {
        title: "Нижегородская область", data: {
            applications: 13, finalists: [
                {
                    name: 'Тункова Юлия Юрьевна',
                    organisation: 'МБОУ Лицей',
                    city: 'Арзамас, Нижегородская область',
                },
                {
                    name: 'Новикова Юлия Ивановна',
                    organisation: 'МАОУ СШ №3',
                    city: 'Кстово, Нижегородская область',
                },
                {
                    name: 'Кузнецов Роман Владимирович',
                    organisation: 'МБОУ Школа № 160',
                    city: 'Нижний Новгород',
                },
                {
                    name: 'Сергеичева Наталья Юрьевна',
                    organisation: 'МАОУ Гимназия №2',
                    city: 'Нижний Новгород',
                },
            ]
        }
    },
    "53": { title: "Новгородская область", data: { applications: 1, } },
    "54": {
        title: "Новосибирская область", data: {
            applications: 42, finalists: [
                {
                    name: 'Овчинников Алексей Алексеевич ',
                    organisation: 'МБОУ СОШ № 148',
                    city: 'Купино',
                },
                {
                    name: 'Береснев Владислав Юрьевич',
                    organisation: 'СОШ № 172',
                    city: 'Новосибирск',
                },
                {
                    name: 'Стругач Софья Александровна ',
                    organisation: 'МБОУ СОШ №187 им. кавалера ордена Мужества Александра Бурмистрова',
                    city: 'Новосибирск',
                }
            ],
            jury: [{
                name: 'Карпов Дмитрий Сергеевич',
                organisation: 'член жюри',
                city: 'Новосибирск',
            }]
        }
    },
    "55": { title: "Омская область", data: { applications: 17, } },
    "56": {
        title: "Оренбургская область", data: {
            applications: 21, finalists: [{
                name: 'Лукьянова Ирина Ришатовна',
                organisation: 'ЧОУ СОШ Экополис',
                city: 'Оренбург',
            }]
        }
    },
    "57": { title: "Орловская область", data: { applications: 5, } },
    "58": { title: "Пензенская область", data: { applications: 3, } },
    "59": {
        title: "Пермский край", data: {
            applications: 7,
            jury: [{
                name: 'Савельев Никита Сергеевич',
                organisation: 'член жюри',
                city: 'Пермь',
            }]
        }
    },
    "60": { title: "Псковская область", data: { applications: 1, } },
    "61": {
        title: "Ростовская область", data: {
            applications: 5,
            finalists: [{
                name: 'Золотова Елена Юрьевна',
                organisation: 'МБОУ СОШ № 4',
                city: 'Миллерово',
            }]
        }
    },
    "62": { title: "Рязанская область", data: { applications: 13, } },
    "63": {
        title: "Самарская область", data: {
            applications: 24, finalists: [
                {
                    name: 'Романова Алла Владимировна',
                    organisation: 'МБОУ Школа Дневной пансион-84',
                    city: 'Самара',
                },
                {
                    name: 'Морев Анатолий Игоревич',
                    organisation: 'ГБОУ СОШ №1 ОЦ',
                    city: 'Смышляевка',
                },
                {
                    name: 'Бурлакова Татьяна Викторовна ',
                    organisation: 'МБУ Школа №72',
                    city: 'Тольятти',
                }
            ]
        }
    },
    "64": { title: "Саратовская область", data: { applications: 11, } },
    "65": { title: "Сахалинская область", data: { applications: 4, } },
    "66": {
        title: "Свердловская область", data: {
            applications: 30,
            finalists: [
                {
                    name: 'Казанцева Юлия Владиславовна ',
                    organisation: 'МАОУ Гимназия №37',
                    city: 'Екатеринбург',
                }
            ],
            jury: [
                {
                    name: 'Балакаев Михаил Геннадьевич',
                    organisation: 'член жюри',
                    city: 'Екатеринбург',
                },
                {
                    name: 'Гаврилин Борис Александрович',
                    organisation: 'член жюри',
                    city: 'Екатеринбург',
                },
                {
                    name: 'Захаров Артем Андреевич',
                    organisation: 'член жюри',
                    city: 'Екатеринбург',
                },
                {
                    name: 'Пономарев Дмитрий Юрьевич',
                    organisation: 'член жюри',
                    city: 'Екатеринбург',
                },
                {
                    name: 'Храмцов Михаил Вадимович',
                    organisation: 'член жюри',
                    city: 'Екатеринбург',
                },

            ]
        }
    },
    "67": { title: "Смоленская область", data: { applications: 7, } },
    "68": { title: "Тамбовская область", data: { applications: 1, } },
    "69": {
        title: "Тверская область", data: {
            applications: 4, finalists: [
                {
                    name: 'Аглямов Николай Александрович',
                    organisation: 'МОУ Верхневолжская СОШ',
                    city: 'Рязаново',
                }
            ]
        }
    },
    "70": {
        title: "Томская область", data: {
            applications: 9, finalists: [
                {
                    name: 'Лошакова Мария Анатольевна',
                    organisation: 'МАОУ Гимназия №29',
                    city: 'Томск',
                }
            ]
        }
    },
    "71": { title: "Тульская область", data: { applications: 18, } },
    "72": {
        title: "Тюменская область", data: {
            applications: 18, finalists: [{
                name: 'Плесовских Олег Леонидович',
                organisation: 'Ильинская СОШ - филиал МАОУ Новоселезнёвская СОШ',
                city: 'Ильинка',
            }]
        }
    },
    "73": {
        title: "Ульяновская область", data: {
            applications: 5, finalists: [
                {
                    name: 'Штаева Валентина Петровна',
                    organisation: 'школа',
                    city: 'Радищево',
                }
            ]
        }
    },
    "74": {
        title: "Челябинская область", data: {
            applications: 38, finalists: [{
                name: 'Чернобривец Иван Георгиевич',
                organisation: 'МОУ СОШ № 5',
                city: 'Магнитогорск',
            }]
        }
    },
    "75": { title: "Забайкальский край", data: { applications: 10, } },
    "76": {
        title: "Ярославская область", data: {
            applications: 10, finalists: [
                {
                    name: 'Смирнов Никита Алексеевич ',
                    organisation: 'МОУ Средняя школа №91 ИнТех',
                    city: 'Ярославль',
                },
            ]
        }
    },
    "77": {
        title: "Москва и Московская область", data: {
            applications: 116,
            finalists: [
                {
                    name: 'Александров Игорь Ярославович ',
                    organisation: 'АНО СОШ Академическая гимназия',
                    city: 'Москва',
                    image: Finalist15,
                },
                {
                    name: 'Аманов Станислав Фараджевич',
                    organisation: 'ГБОУ Школа №641 им С.Есенина',
                    city: 'Москва',
                    image: Finalist13,
                },
                {
                    name: 'Амелин Лев Константинович',
                    organisation: 'Свободное развитие',
                    city: 'Москва',
                    image: Finalist14,
                },
                {
                    name: 'Кадыков Александр Николаевич',
                    organisation: 'Лицей РАНХиГС',
                    city: 'Москва',
                },
                {
                    name: 'Лихачев Григорий Дмитриевич',
                    organisation: 'ГБОУ Школа №11238',
                    city: 'Москва',
                },
                {
                    name: 'Маркин Виктор Лелнидович',
                    organisation: 'ОАНО Наукославль',
                    city: 'Москва',
                },
                {
                    name: 'Меньшинина Елена Сергеевна',
                    organisation: 'ГБОУ Школа №1505',
                    city: 'Москва',
                    image: Winner6,
                },
                {
                    name: 'Пирогов Дмитрий Викторович',
                    organisation: 'ОЧУ Православная Свято-Петровская школа',
                    city: 'Москва',
                },
                {
                    name: 'Плецельман Виктория Львовна',
                    organisation: 'ГБОУ Школа №1535',
                    city: 'Москва',
                    image: Winner8,
                },
                {
                    name: 'Стригин Владимир Олегович',
                    organisation: 'ГБОУ Измайловская Школа № 1508',
                    city: 'Москва',
                },
                {
                    name: 'Суздальцев Илья Алексеевич',
                    organisation: 'ГБОУ Школа №1381',
                    city: 'Москва',
                },
                {
                    name: 'Устюжанинов Илья Дмитриевич',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Хайдуков Герман Николаевич',
                    organisation: 'ГБОУ Школа № 1159',
                    city: 'Москва',
                    image: Winner7,
                },
                {
                    name: 'Камчатнов Григорий Александрович',
                    organisation: 'НО АНО Павловская гимназия',
                    city: 'Веледниково',
                },
                {
                    name: 'Реутов Павел Павлович',
                    organisation: 'МБОУ Одинцовская гимназия №11',
                    city: 'Одинцово',
                    image: Winner12,
                },
                {
                    name: 'Меньшиков Александр Эдуардович',
                    organisation: 'МОУ Лицей № 23',
                    city: 'Подольск',
                },
                {
                    name: 'Сажнев Иван Юрьевич',
                    organisation: 'ГБОУ Школа №338',
                    city: 'Сосенское',
                },
            ],
            jury: [
                {
                    name: 'Абрамов Андрей Владимирович',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Баев Евгений Викторович',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Грибков Иван Владимирович',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Коломиец Артем Валентинович',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Косиченко Иван Никитович',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Новиков Петр Алексеевич',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Пивгородняя Елена Артуровна',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Устюжанинов Илья Дмитриевич',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
                {
                    name: 'Черных Александр Александрович',
                    organisation: 'член жюри',
                    city: 'Москва',
                },
            ]
        }
    },
    "78": {
        title: "Санкт-Петербург", data: {
            applications: 42,
            finalists: [
                {
                    name: 'Павловский Роман Валерьевич ',
                    organisation: 'АНОО Школа им. А.М. Горчакова',
                    city: 'Павловск',
                },
                {
                    name: 'Битюкова Лариса Анатольевна',
                    organisation: 'ГБОУ СОШ №582',
                    city: 'Санкт-Петербург',
                },
                {
                    name: 'Лесниченко Иван Михайлович',
                    organisation: 'ГБОУ школа № 525 им. дважды Героя Советского Союза Г.М. Гречко',
                    city: 'Санкт-Петербург',
                },
                {
                    name: 'Медведева Ксения Антоновна',
                    organisation: 'ГБОУ СОШ №172',
                    city: 'Санкт-Петербург',
                },
            ],
            jury: [
                {
                    name: 'Барышников Никита Вячеславович',
                    organisation: 'член жюри',
                    city: 'Санкт-Петербург',
                },
                {
                    name: 'Бежан Виктор Владимирович',
                    organisation: 'член жюри',
                    city: 'Санкт-Петербург',
                },
                {
                    name: 'Иванов Егор Эдуардович',
                    organisation: 'член жюри',
                    city: 'Санкт-Петербург',
                },
                {
                    name: 'Кирильчик Денис Викторович',
                    organisation: 'член жюри',
                    city: 'Санкт-Петербург',
                },
                {
                    name: 'Масленников Владимир Михайлович',
                    organisation: 'член жюри',
                    city: 'Санкт-Петербург',
                },
            ]
        }
    },
    "79": { title: "Еврейская автономная область" },
    "80": {
        title: "Донецкая Народная Республика", shortTitle: "ДНР", data: {
            applications: 16, finalists: [{
                name: 'Петрушина Инна Михайловна',
                organisation: 'ГБОУ Школа №112',
                city: 'Донецк',
                image: Finalist3,
            }]
        }
    },
    "81": { title: "Луганская Народная Республика", data: { applications: 2, } },
    "82": {
        title: "Республика Крым", data: {
            applications: 13, finalists: [{
                name: 'Колесникова Вера Ивановна',
                organisation: 'МБОУ Школа № 23 имени Героя Советского Союза С.Д.Пошивальникова',
                city: 'Керчь',
                image: Winner9,
            }]
        }
    },
    "83": { title: "Ненецкий AO" },
    "84": { title: "Херсонская область", data: { applications: 3, } },
    "85": { title: "Запорожская область", data: { applications: 2, } },
    "86": { title: "Ханты-Мансийский AO", data: { applications: 2, } },
    "87": { title: "Чукотский АО" },
    "89": {
        title: "Ямало-Ненецкий АО", shortTitle: "ЯНАО", data: {
            applications: 9, finalists: [
                {
                    name: 'Омаров Жаслан Кикпаевич',
                    organisation: 'МОУ СОШ №5',
                    city: 'Надым, ЯНАО',
                },
                {
                    name: 'Грязнов Илья Александрович ',
                    organisation: 'МБОУ Сеяхинская школа-интернат',
                    city: 'Сеяха, ЯНАО',
                },
            ]
        }
    }
};