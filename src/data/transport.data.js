export const transport = [
  {
    id: 0,
    type: {
      'ru-RU': 'Такси',
      'en-US': 'Taxi',
    },
    instructions: {
      'ru-RU': `Быстро и с комфортом можно доехать на такси.
  Водители ждут пассажиров прямо на выходе из аэропорта.
  Но лучше воспользоваться сервисами Яндекс.Такси или Gett.`,
      'en-US': `Taxi is a fast and comfortable way to get right to the place.
  Drivers are waiting at the main exit of the airoport`,
    },
    time: {
      'ru-RU': '40 минут',
      'en-US': '40  minutes',
    },
    cost: {
      'ru-RU': '~1000 рублей',
      'en-US': '~1000 rubles',
    },
    buttonName: {
      'ru-RU': 'Построить маршрут',
      'en-US': 'Make a route',
    },
    link: 'https://taxi.yandex.ru/#index',
  },
  {
    id: 1,
    type: {
      'ru-RU': 'Ласточка',
      'en-US': 'Train',
    },
    instructions: {
      'ru-RU': `Из Аэропорта в Сочи ходит поезд “Ласточка”.
      На выходе из аэропорта, с левой стороны находится ЖД Станция.
      На поезде необходимо доехать до станции "Ж/д вокзал Сочи".
      Далее на такси или автобусе по адресу ул.Клубничная 1 / 19`,
      'en-US': `The "Lastochka" train runs from the Airport to Sochi.
      At the exit from the airport, on the left side is the Railway Station.
      Take the train to the Sochi Railway Station.
      Then take a taxi or bus to the address Klubnichnaya street 1 / 19`,
    },
    time: {
      'ru-RU': '50 минут',
      'en-US': '50  minutes',
    },
    cost: {
      'ru-RU': '~150 рублей',
      'en-US': '~150 rubles',
    },
    buttonName: {
      'ru-RU': 'Посмотреть расписание',
      'en-US': 'View the schedule',
    },
    link: '=',
  },
  {
    id: 2,
    type: {
      'ru-RU': 'Автобус',
      'en-US': 'Bus',
    },
    instructions: {
      'ru-RU': `
    Автобусная остановка находится на выходе из аэропорта.
      Маршрутом №105, 105с или 105э можно добраться
    до Ж / д вокзала Сочи, далее автобусом или
    на такси по адресу ул.Клубничная 1 / 19`,
      'en-US': `The bus stop is at the exit from the airport.
    Route number 105, 105c or 105e will take you
    to the Sochi railway station, then go by bus or
    by taxi to Klubnichnaya street 1 / 19`,
    },
    time: {
      'ru-RU': '1 час 20 минут',
      'en-US': '1 hour 20 minutes',
    },
    cost: {
      'ru-RU': '200 рублей',
      'en-US': '200 rubles',
    },
    buttonName: {
      'ru-RU': 'Построить маршрут',
      'en-US': 'Make a route',
    },
    link: 'https://yandex.ru/maps/-/CCQdFBE08B',
  },
  {
    id: 3,
    type: {
      'ru-RU': 'Каршеринг',
      'en-US': 'Carsharing',
    },
    instructions: {
      'ru-RU': `
  Если у Вас есть водительские права, скачайте
  приложение: UrentCar, YouDrive, BelkaCar.
  В районе аэропорта достаточно большой выбор автомобилей.
  Оставить автомобиль, арендованный в каршеринге
  можно будет недалеко от дома.`,
      'en-US': `If you have a driver's license, download
  application: UrentCar, YouDrive, BelkaCar.
  There is a large selection of cars in the airport area.
  You can leave a rented car in special areas not far from home.`,
    },
    time: {
      'ru-RU': '40 минут',
      'en-US': '40  minutes',
    },
    cost: {
      'ru-RU': '350-500 рублей',
      'en-US': '350-500 rubles',
    },
    buttonName: {
      'ru-RU': 'Построить маршрут',
      'en-US': 'Make a route',
    },
    link: 'https://yandex.ru/maps/-/CCQdFBE08B',
  },
]
