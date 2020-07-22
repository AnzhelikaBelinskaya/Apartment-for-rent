export const transport =
{
  'ru-RU': {
    tabs: ["Такси", "Ласточка", "Автобус", "Каршеринг"],
    description: [{
      type: "Такси",
      instructions: ` 
          Быстро и с комфортом можно доехать на такси.
          Водители ждут пассажиров прямо на выходе из аэропорта.
          Но лучше воспользоваться сервисами Яндекс.Такси или Gett.`,
      time: "40 минут",
      cost: "~1000 рублей",
      buttonName: "Построить маршрут",
      link: "https://taxi.yandex.ru/#index"
    },
    {
      type: "Ласточка",
      instructions: `
            Из Аэропорта в Сочи ходит поезд “Ласточка”. 
        На выходе из аэропорта, с левой стороны находится ЖД Станция.
            На поезде необходимо доехать до станции "Ж/д вокзал Сочи". 
        Далее на такси или автобусе по адресу ул.Клубничная 1/19`,
      time: "50 минут",
      cost: "150 рублей",
      buttonName: "Посмотреть расписание",
      link: ""
    },
    {
      type: "Автобус",
      instructions: `
            Автобусная остановка находится на выходе из аэропорта.
        Маршрутом №105, 105с или 105э можно добраться 
        до Ж/д вокзала Сочи, далее автобусом или
        на такси по адресу ул.Клубничная 1/19`,
      time: " 1 час 20 минут",
      buttonName: "Построить маршрут",
      link: "https://yandex.ru/maps/-/CCQdFBaRXA",
      cost: " 170 рублей"
    },
    {
      type: "Каршеринг",
      instructions: `
            Если у Вас есть водительские права, скачайте 
        приложение: UrentCar, YouDrive, BelkaCar .
        В районе аэропорта достаточно большой выбор автомобилей.
           Оставить автомобиль, арендованный в каршеринге
        можно будет недалеко от дома.`,
      time: "40 минут",
      cost: "350-500 рублей",
      buttonName: "Построить маршрут",
      link: "https://yandex.ru/maps/-/CCQdFBE08B"
    }],
    titles: {
      time: "Время в пути",
      price: "Стоимость"
    }
  },
  'en-US': {
    tabs: ["Taxi", "Train", "Bus", "Carsharing"],
    description: [{
      type: "Taxi",
      instructions: ` To take a tixi is a fast and comfortable way.
        Drivers are waitin at the main exit of the airoprt
        `,
      time: "40  minutes",
      cost: "~1000 rubles",
      buttonName: "Make a route",
      link: "https://taxi.yandex.ru/#index"
    },
    {
      type: "Train",
      instructions: `The "Lastochka" train runs from the Airport to Sochi.
At the exit from the airport, on the left side is the Railway Station.
    Take the train to the Sochi Railway Station.
Then take a taxi or bus to the address Klubnichnaya street 1 / 19`,
      time: "50 minutes",
      cost: "150 rubles",
      buttonName: "View the schedule",
      link: "https://rasp.yandex.ru/suburban/adler-sochi--sochi/today"
    },
    {
      type: "Bus",
      instructions: `The bus stop is at the exit from the airport.
Route number 105, 105c or 105e will take you
to the Sochi railway station, then go by bus or
by taxi to Klubnichnaya street 1/19`,
      time: " 1 hour 20 minutes",
      buttonName: "Make a route",
      link: "https://yandex.ru/maps/-/CCQdFBaRXA",
      cost: " 170 rubles"
    },
    {
      type: "Carsharing",
      instructions: `If you have a driver's license, download
application: UrentCar, YouDrive, BelkaCar.
There is a large selection of cars in the airport area.
   You can leave a rented car in special areas not far from home.`,
      time: "40 minutes",
      cost: "350-500 rubles",
      buttonName: "Make a route",
      link: "https://yandex.ru/maps/-/CCQdFBE08B"
    }],
    titles: {
      time: "Time",
      price: "Price"
    }
  }

}








