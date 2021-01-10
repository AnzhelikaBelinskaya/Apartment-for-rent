export const attractions = {
    mapSettings: {
        center: [43.594688, 40.005110],
        zoom: 9,
    },

    icon:
    {
        layout: 'default#imageWithContent',
        imageHref: '/img/icons/green-pin.png',
        imageSize: [40, 40],
        imageOffset: [-20, -40],
    },

    places: [
        {
            balloon: {
                header: 'Sochi Park',
                footer: 'Activities',
            },
            type: 'Activities',
            title: {
                'ru-RU': 'Сочи Парк',
                'en-US': 'Sochi Park'
            },
            description: {
                'ru-RU': `Тематический парк со множеством развлечений для посетителей любого возраста.
    В парке есть Детский уголок с аттракционами-качалками, детские и семейные аттракционы, веревочный парк «Космические джунгли», водная развивающая площадка, научные шоу и игровая лаборатория под открытым небом, уникальные экстремальные аттракционы.`,
                'en-US': `The theme park is full of entertainment for visitors of all ages.
   In the park there are a Children’s Corner with rocking amusements, children and family attractions, rope park «Space jungle», water development platform, scientific shows and open-air play laboratory, unique extreme attractions.`

            },
            address: {
                'ru-RU': 'Олимпийский проспект, 21 Имеретинская низменность',
                'en-US': 'Olympic prospect, 21 Imeretinskaya lowland'
            },
            imageSrc: '/img/attractions/Sochi-park.jpg',
            coords: [43.404543, 39.964377],
            id: 1,
        },
        {
            balloon: {
                header: 'Aquapark Galaktika',
                footer: 'Activities',
            },
            type: 'Activities',
            title: {
                'ru-RU': 'Аквапарк Галактика',
                'en-US': 'Aquapark Galaktika'
            },
            description: {
                'ru-RU': `Уникальный комплекс водных развлечений с аттракционами: 4 водные горки, волновой бассейн, водопады, ленивые реки для спокойного отдыха. 
    Главная изюмника - подогреваемый бассейн под открытым небом с потрясающим видом на горы. Особенно рекомендуется к посещению в холодное время года.
    После бассейна можно погреться в хаммаме или финской сауне.`,
                'en-US': `A Unique complex of water entertainment with attractions for visitors of any age. 4 water slides for lovers of excitement, wave pool, waterfalls, lazy rivers for relaxing rest. 
    The main feature is a warm outdoor pool  a delightful view of the mountains. 
    After the pool you can warm yourself in the hammam or Finnish sauna.`

            },
            address: {
                'ru-RU': 'с.Эстосадок, Красная Поляна, ул. Ачипсинская, 12',
                'en-US': 'Estosadok, Krasnaya Polyana, Achipsinskaya str, 12'
            },
            imageSrc: '/img/attractions/galaktika.jpg',
            coords: [43.68571618972766, 40.27877031329095],
            id: 2,
        },
        {
            balloon: {
                header: 'Yuzhnye Kultury Park',
                footer: 'Nature',
            },
            type: 'Nature',
            title: {
                'ru-RU': 'Парк "Южные культуры"',
                'en-US': 'Yuzhnye Kultury Park'
            },
            description: {
                'ru-RU': `Парк «Южные культуры» насчитывает сотни экзотических и тропических растений: из Китая, Японии, Африки и американских континентов. На отдельном участке располагается большой розарий.
    Кроме цветов и деревьев на территории дендрологического парка есть два живописных пруда. Особенно рекомендуется к посещению весной.`,
                'en-US': `Yuzhnye Kultury Park has hundreds of exotic and tropical plants from China, Japan, Africa and America. 
    In addition, there are two picturesque ponds and a rosary in the dendrological park. Recommended to visit in spring.`

            },
            address: {
                'ru-RU': 'ул. Губернская, 13',
                'en-US': 'Gubernskaya str, 13'
            },
            imageSrc: '/img/attractions/yuzhnye-kultury.jpg',
            coords: [43.418829769447726, 39.938337584409275],
            id: 3,
        },
        {
            balloon: {
                header: 'Volerniy Complex Laura',
                footer: 'Nature',
            },
            type: 'Nature',
            title: {
                'ru-RU': 'Вольерный комплекс Лаура',
                'en-US': 'Volerniy Complex Laura'
            },
            description: {
                'ru-RU': `Здесь обитают животные Северо-Западного Кавказа, многие из которых относятся к редким видам и занесены в Красную книгу. 
    Посетители могут встретиться с такими хищниками, как рысь, лисица, волк прикаспийский, дикая лесная кошка, енот, барсук, а кроме того, копытными - зубром, туром, оленем, косулей, серной. Тут живут прекрасные гордые птицы – сокол-сапсан, орел степной, лебедь и другие.`,
                'en-US': `It is home to animals from the North-West Caucasus, many of which belong to rare species and are listed in the Red Book. 
    Visitors can meet predators such as bobcats, foxes, wolves of the Caspian Sea, wildfish cats, raccoons, badgers, and also hooves such as teeth, tours, deer, elk, sulfur. Here live beautiful proud birds - falcon-sapsan, eagle steppe, swan and others.`

            },
            address: {
                'ru-RU': 'с.Эстосадок, Красная Поляна, Ачипсинская ул., 16',
                'en-US': 'Estosadok, Krasnaya Polyana, Achipsinskaya str, 16'
            },
            imageSrc: '/img/attractions/volerniy-complex.jpg',
            coords: [43.697299481548484, 40.26809671325377],
            id: 4,
        },
        {
            balloon: {
                header: 'Skypark',
                footer: 'Activities',
            },
            type: 'Activities',
            title: {
                'ru-RU': 'Skypark',
                'en-US': 'Skypark'
            },
            description: {
                'ru-RU': `Skypark – парк уникальных впечатлений! Самый длинный в России подвесной пешеходный мост, который входит в топ-13 самых впечатляющих мостов мира по версии CNN. 
    Здесь можно полетать на самых высоких в мире качелях, прыгнуть с самой высокой в России банджи-площадки, прокатиться на суперскоростном троллее и посмотреть на мир с высоты птичьего полёта, летая на Zipline.`,
                'en-US': `Skypark is a unique experience park! The longest suspended bridge in Russia is one of the top 13 most impressive bridges in the world according to CNN. 
    Here you can fly on the highest swings in the world, jump from the highest in Russia bandja-court, ride in the super-speedtroll and look at the world from a bird’s-eye view flying on Zipline.`

            },
            address: {
                'ru-RU': 'с. Казачий Брод, ул. Краснофлотская',
                'en-US': 'Kazachiy Brod, Krasnoflotskaya str.'
            },
            imageSrc: '/img/attractions/Skypark.jpg',
            coords: [43.524938384246425, 39.99677650301379],
            id: 5,
        },
        {
            balloon: {
                header: 'Rosa Khutor',
                footer: 'Activities',
            },
            type: 'Activities',
            title: {
                'ru-RU': 'Горнолыжный курорт Роза Хутор',
                'en-US': 'Rosa Khutor alpine resort'
            },
            description: {
                'ru-RU': `Роза Хутор — самый новый, большой и современный горнолыжный комплекс Красной Поляны. По мнению многих туристов, это лучший в России горнолыжный курорт. Летом предлагается много развлечений, в том числе пешие прогулки, качели над пропастью, хаски-парк, вейк-серфинг. 
                Потрясаюшие виды, свежий воздух, красивые фотографии. Строго рекомендовано к посещению!`,
                'en-US': `Rosa Khutor» - the newest, largest and most modern ski complex of Krasnaya Polyana. According to many tourists, it is the best ski resort in Russia. In the summer, there are many entertainments, including hiking, skidding, husky park, and wake-surfing.
                Stunning views, fresh air, beautiful photos. Strictly recommended!`

            },
            address: {
                'ru-RU': 'Эстосадок',
                'en-US': 'Estosadok'
            },
            imageSrc: '/img/attractions/rosa-khutor.jpg',
            coords: [43.67183509000701, 40.298104775722486],
            id: 6,
        },
        {
            balloon: {
                header: 'Orlinye skaly',
                footer: 'Nature',
            },
            type: 'Nature',
            title: {
                'ru-RU': 'Орлиные скалы',
                'en-US': 'Orlinye skaly'
            },
            description: {
                'ru-RU': `Место популярно среди любителей активного отдыха и красивой природы. Живописные скалы возвышаются на 379 метров над уровнем моря.
                Свежий чистый воздух, прекрасные панорамные виды, открывающиеся со скал, и умеренная физическая нагрузка —  много пользы и впечатлений. 
                Можно совместить с посещением Агурских водопадов.`,
                'en-US': `
                The place is popular among lovers of active recreation and beautiful nature. The picturesque cliffs rise 379 meters above sea level.
                Fresh air, beautiful panoramic views from the cliffs, and moderate physical exercise - a lot of benefits and impressions.
                Can be combined with visiting Agura Falls.`

            },
            address: {
                'ru-RU': 'ул. Мацестинская',
                'en-US': 'Matsestinskaya str.'
            },
            imageSrc: '/img/attractions/orlinye-skaly.jpg',
            coords: [43.56041261716654, 39.82364205328273],
            id: 7,
        },
        {
            balloon: {
                header: 'Agura Falls',
                footer: 'Nature',
            },
            type: 'Nature',
            title: {
                'ru-RU': 'Агурские водопады',
                'en-US': 'Agura Falls'
            },
            description: {
                'ru-RU': `Место весьма живописное: вода в потоках водопадов прозрачная, а вокруг них много деревьев. Природа создала три группы водопадов, расположенных недалеко друг от друга. К этим водопадам идет тропа, прорубленная в скале. Посещать эту природную достопримечательность рекомендуется зимой либо весной, когда Агура наиболее полноводна. В разгар жаркого лета река мелеет, поэтому Агурские водопады нередко пересыхают. Можно совместить с посещением Орлиных Скал.`,
                'en-US': `
            The place is very picturesque: the water in the waterfalls flows is transparent and there are many trees around them. Nature has created three groups of waterfalls located close to each other. There is a path cut in the rock. It is recommended to visit this natural attraction in winter or spring when Agura is high. In summer, the river is shallow, so the Agur Falls often dry. Can be combined with visiting the Orlinye Skaly.`

            },
            address: {
                'ru-RU': 'ул. Дорога на Большой Ахун',
                'en-US': 'Bolshoy Akhun Road'
            },
            imageSrc: '/img/attractions/agura-falls.jpg',
            coords: [43.55217944797503, 39.81668598502713],
            id: 8,
        },
        {
            balloon: {
                header: 'White cliffs',
                footer: 'Nature',
            },
            type: 'Nature',
            title: {
                'ru-RU': 'Белые скалы',
                'en-US': 'White cliffs'
            },
            description: {
                'ru-RU': `Белые скалы - это кольцевой маршрут длинной около 4.5км, на котором Вас ждут живописные каньоны, красивые водопады, девственный самшитовый лес. Летом можно освежиться в водопаде и попрыгать в реку с обрыва.`,
                'en-US': `
        The white cliffs are a circular route about 4.5 km long, where you will find picturesque canyons, beautiful waterfalls, virgin boxwood forest. In summer you can freshen up in the waterfall and jump into the river from the cliff.`

            },
            address: {
                'ru-RU': 'с. Красная Воля, ул. Лесная',
                'en-US': 'Krasnaya Volya, Lesnaya str.'
            },
            imageSrc: '/img/attractions/white-cliffs.jpg',
            coords: [43.56064439520694, 39.90081084166656],
            id: 9,
        },
        {
            balloon: {
                header: 'Mountain Akhun',
                footer: 'Nature',
            },
            type: 'Nature',
            title: {
                'ru-RU': 'Гора Ахун',
                'en-US': 'Mountain Akhun'
            },
            description: {
                'ru-RU': `Гора Большой Ахун возвышается над уровнем моря на 663 метра, давая уникальную возможность насладиться панорамами видами окружающей местности. С верхней площадки башни открываются великолепные виды на горы, курортный город Сочи и Черное море.`,
                'en-US': `
                Mount Greater Akhun rises above sea level by 663 meters, giving a unique opportunity to enjoy panoramic views of the surrounding area. From the top of the tower there are magnificent views of the mountains, the resort city of Sochi and the Black Sea.`

            },
            address: {
                'ru-RU': 'ул. Дорога на Большой Ахун',
                'en-US': 'Bolshoy Akhun Road'
            },
            imageSrc: '/img/attractions/akhun.jpg',
            coords: [43.55059939291312, 39.84333649374626],
            id: 10,
        },
        {
            balloon: {
                header: 'Navaginskaya str.',
                footer: 'City',
            },
            type: 'City',
            title: {
                'ru-RU': 'ул. Навагинская',
                'en-US': 'Navaginskaya str.'
            },
            description: {
                'ru-RU': `Отличное и весьма фотогеничное место для прогулок всей семьёй.
                Это улица-парк с пешеходными дорожками и тенистыми деревьями, с просторными площадками, где играют дети. Вечером на улице Навагинской можно посмотреть выступления уличных артистов, полюбоваться свето-музыкальным фонтаном и посидеть на летней веранде одного из ресторанов.`,
                'en-US': `
                Excellent and highly photogenic place for family walks. It is a park street with pedestrian paths and shady trees, with spacious playgrounds where children play. In the evening you can see street performances of street artists, admire the light and music fountain and sit on the summer veranda of one of the restaurants.`

            },
            address: {
                'ru-RU': 'ул. Навагинская',
                'en-US': 'Navaginskaya str.'
            },
            imageSrc: '/img/attractions/navaginskaya.jpg',
            coords: [43.584446129855344, 39.72105735780619],
            id: 11,
        },
        {
            balloon: {
                header: 'Marine station',
                footer: 'City',
            },
            type: 'City',
            title: {
                'ru-RU': 'Морской вокзал',
                'en-US': 'Marine station'
            },
            description: {
                'ru-RU': `Самое узнаваемое место в Сочи — это Морской вокзал. При солнце, в пасмурную погоду, в утренних лучах и на закате  - он всегда прекрасен!
                 Отсюда ходят прогулочные теплоходы, можно взять яхту в аренду, перекусить с самым лучшим видом на море или прогуляться по близлежащим скверам. Фотографии получаются великолепные.`,
                'en-US': `
                The most recognizable place in Sochi is the Marine Station. At sunny or cloudy weather, in morning rays or at sunset - it is always beautiful!
                From here you can go to a sea trip, rent a yacht, have a snack with the best view of the sea or take a walk in the nearby squares. Pictures will be excellent.`

            },
            address: {
                'ru-RU': 'ул. Войкова, 1',
                'en-US': 'Voykova str., 1'
            },
            imageSrc: '/img/attractions/marine.jpg',
            coords: [43.58080005820735, 39.718570852357274],
            id: 12,
        },
        {
            balloon: {
                header: 'Khachapury cafe',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'Кафе "Хачапури"',
                'en-US': '"Khachapury" cafe'
            },
            description: {
                'ru-RU': `Самые вкусные в городе хачапури! Очень приятная ,уютная обстановка. Доброжелательный, вежливый и прелупредительный персонал.`,
                'en-US': `
                The most delicious khachapuries in Sochi! Very pleasant, cosy atmosphere. Friendly, polite and anticipatory staff.`

            },
            address: {
                'ru-RU': 'ул. Навагинская, 9Д',
                'en-US': 'Navaginskaya str., 9D'
            },
            imageSrc: '/img/attractions/khachapury.jpg',
            coords: [43.588234, 39.724128],
            id: 13,
        },
        {
            balloon: {
                header: 'Belye nochi',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'Белые ночи',
                'en-US': '"Belye nochi'
            },
            description: {
                'ru-RU': `Кафе «Белые ночи» — отличное место, где можно вкусно перекусить и за довольно символическую сумму попробовать различные виды хинкали.`,
                'en-US': `
                Cafe «Belye nochi» is a great place where you can try different kinds of quincali for a quite symbolic price.`

            },
            address: {
                'ru-RU': 'ул. Орджоникидзе, 9',
                'en-US': 'Ordzhonikidze str., 9'
            },
            imageSrc: '/img/attractions/belye-nochi.jpg',
            coords: [43.576906382889135, 39.72620935927421],
            id: 14,
        },
        {
            balloon: {
                header: 'Stariy Erevan',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'Старый Эриванъ',
                'en-US': 'Stariy Erevan'
            },
            description: {
                'ru-RU': `Традиционный армянский интерьер и приятная атмосфера. Все свежее, вкусное и качественное. Особенно вкусные супы.`,
                'en-US': `
                Traditional Armenian interior and pleasant atmosphere. All fresh, tasty and good. Especially tasty soups.`

            },
            address: {
                'ru-RU': 'yл. Виноградная, 184/3',
                'en-US': 'Vinogradnaya str., 184/3'
            },
            imageSrc: '/img/attractions/stariy-erevan.jpg',
            coords: [43.621899730432894, 39.7190362420867],
            id: 15,
        },
        {
            balloon: {
                header: 'Brigantina',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'Бригантина',
                'en-US': 'Brigantina'
            },
            description: {
                'ru-RU': `Рыбный ресторан в морпорту с уклоном во французскую кухню. Отличный выбор морепродуктов и вина. Из ресторана открывается вид на бухту с пришвартовавшимися яхтами.`,
                'en-US': `
                A fish restaurant with a French cuisine. Excellent choice of seafood and wine. The restaurant overlooks the bay with moored yachts.`

            },
            address: {
                'ru-RU': 'ул. Несебрская, 3',
                'en-US': 'Nesebrskaya str., 3'
            },
            imageSrc: '/img/attractions/brigantina.jpg',
            coords: [43.58206576704838, 39.718560559994174],
            id: 16,
        },
        {
            balloon: {
                header: 'At palma',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'У пальмы',
                'en-US': 'At palma'
            },
            description: {
                'ru-RU': `Изюминка кафе - вид на море. В меню блюда грузинской кухни, особенной популярностью пользуются хачапури.`,
                'en-US': `
                 The main feature of the cafe is the sea view. Dishes of Georgian cuisine are served, khachapuri is the most popular here.`

            },
            address: {
                'ru-RU': 'Приморская улица, 19А',
                'en-US': 'Primorskaya str., 19A'
            },
            imageSrc: '/img/attractions/at-palma.jpg',
            coords: [43.5730314570343, 39.72700369321687],
            id: 17,
        },
        {
            balloon: {
                header: 'Gostidze',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'Гостидзе',
                'en-US': 'Gostidze'
            },
            description: {
                'ru-RU': `Одно из лучших мест в Сочи с грузинской кухней и невероятно уютной атмосферой. Еда, напитки, интерьер, музыка, обслуживание  - все великолепно.`,
                'en-US': `
                One of the best places in Sochi with Georgian cuisine and an incredibly cosy atmosphere. Food, drinks, interior, music, service  - everything is magnificent.`

            },
            address: {
                'ru-RU': 'с.Эсто-Садок, ул.Горная Карусель, 4',
                'en-US': 'Esto-Sadok, Gornaya Carousel str., 4'
            },
            imageSrc: '/img/attractions/gostidze1.jpg',
            coords: [43.68351888264916, 40.26371631276181],
            id: 18,
        },
        {
            balloon: {
                header: 'Semga',
                footer: 'Restaurants',
            },
            type: 'Restaurants',
            title: {
                'ru-RU': 'Sёmga',
                'en-US': 'Semga'
            },
            description: {
                'ru-RU': `Ресторан доставки суши, роллов и пиццы. Много начинки и очень свежая рыба. Вечером обычно перегружены заказами, лучше заказывать заранее. Отличный вариант вкусного ужина дома. Можно заказать через Delivery Club или на сайте semga.su`,
                'en-US': `
                Sushi, Rolls and Pizzas Delivery Restaurant. Lots of stuffing and very fresh fish. In the evenings, it’s usually overcrowded, it’s best to order in advance. It’s a great way to have a nice dinner at home. You can order from Delivery Club or from semga.su.`

            },
            address: {
                'ru-RU': 'Красноармейская ул., 27',
                'en-US': 'Krasnoarmeyskaya str., 27'
            },
            imageSrc: '/img/attractions/semga.jpg',
            coords: [43.60922873016883, 39.723804098445555],
            id: 19,
        },
        {
            balloon: {
                header: 'Riviera park',
                footer: 'City',
            },
            type: 'City',
            title: {
                'ru-RU': 'парк Ривьера',
                'en-US': 'Riviera park'
            },
            description: {
                'ru-RU': `Парк «Ривьера» один из самых популярных парков Сочи. Он красив в любое время года, будь то лето или зима. Многочисленные тенистые аллеи, тихие и укромные уголки привлекают в парк любителей спокойного и уединенного отдыха. Есть также и множество развлечений для детей.`,
                'en-US': `
                Park «Riviera» is one of the most popular parks in Sochi. It is beautiful at any time of the year, whether it is summer or winter. Numerous shady alleys, quiet corners attract to the park lovers of calm and secluded rest. There are also a lot of entertainments for children.`

            },
            address: {
                'ru-RU': 'ул. Егорова, 1',
                'en-US': 'Egorova str., 1'
            },
            imageSrc: '/img/attractions/riviera.jpg',
            coords: [43.58847676786667, 39.715777382286724],
            id: 20,
        },

    ],
}
