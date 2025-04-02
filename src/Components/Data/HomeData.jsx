import coffee1 from '../../../public/Image/coffee1.png';
import hover1 from '../../../public/Image/hover1.png';
import hover2 from '../../../public/Image/hover2.png';
import hover3 from '../../../public/Image/hover3.png';
import hover4 from '../../../public/Image/hover4.png';
import hover5 from '../../../public/Image/hover5.png';
import hover6 from '../../../public/Image/hover6.png';
import coffee2 from '../../../public/Image/coffee2.png';
import coffee3 from '../../../public/Image/coffee3.png';
import coffee4 from '../../../public/Image/coffee4.png';
import coffee5 from '../../../public/Image/coffee5.png';
import coffee6 from '../../../public/Image/coffee6.png';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import image1 from '../../../public/Image/2.png';
import image2 from '../../../public/Image/4.png';
import image3 from '../../../public/Carousel/image3.jpg';
import image4 from '../../../public/Carousel/image4.jpg';
import image5 from '../../../public/Carousel/image5.jpg';
import image6 from '../../../public/Carousel/image6.jpg';

export const heroSection = [
  {
    subHeader: ' We are byte & bean',
    header: {
      text1: 'Your Daily',
      text2: 'Brew',
      text3: 'Reimagined',
    },
    description:
      'Join us for a perfect blend of flavor and convenience, designed for the modern coffee lover.',
    button: 'About Us',
  },
];

export const Coffee = [
  {
    id: 1,
    name: 'Espresso',
    ingredients: ['Finely ground coffee', 'Hot water'],
    price: '2.5',
    image: coffee1,
    hover: hover1,
  },
  {
    id: 2,
    name: 'Americano',
    ingredients: ['Espresso', 'Hot water'],
    price: '3.0',
    image: coffee2,
    hover: hover2,
  },
  {
    id: 3,
    name: 'Cappuccino',
    ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    price: '3.8',
    image: coffee3,
    hover: hover3,
  },
  {
    id: 4,
    name: 'Latte',
    ingredients: ['Espresso', 'Steamed milk', 'Light foam'],
    price: '4.0',
    image: coffee4,
    hover: hover4,
  },
  {
    id: 5,
    name: 'Mocha',
    ingredients: [
      'Espresso',
      'Steamed milk',
      'Chocolate syrup',
      'Whipped cream',
    ],
    price: '4.5',
    image: coffee5,
    hover: hover5,
  },
  {
    id: 6,
    name: 'Macchiato',
    ingredients: ['Espresso', 'Foamed milk'],
    price: '3.5',
    image: coffee6,
    hover: hover6,
  },
  {
    id: 7,
    name: 'Flat White',
    ingredients: ['Espresso', 'Velvety steamed milk'],
    price: '3.9',
  },
  {
    id: 8,
    name: 'Affogato',
    ingredients: ['Espresso', 'Vanilla ice cream'],
    price: '4.2',
  },
  {
    id: 9,
    name: 'Cold Brew',
    ingredients: ['Cold brewed coffee', 'Ice'],
    price: '4.0',
  },
  {
    id: 10,
    name: 'Iced Latte',
    ingredients: ['Espresso', 'Milk', 'Ice'],
    price: '4.2',
  },
];

const image = [
  {
    id: 1,
    src: image1,
    alt: 'Image',
  },
  {
    id: 2,
    src: image2,
    alt: 'Image',
  },
  {
    id: 3,
    src: image3,
    alt: 'Image',
  },
  {
    id: 4,
    src: image4,
    alt: 'Image',
  },
  {
    id: 5,
    src: image5,
    alt: 'Image',
  },
  {
    id: 6,
    src: image6,
    alt: 'Image',
  },
];

const comingSoon = () => {
  return (
    <div className='relative w-[300px] h-[400px] left-10 border-[1px] border-solid border-black-Color'>
      <img src={image6} alt='image' className='w-full h-full ' />

      {/* Text centered over the image */}
      <div className='absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[20px] rounded-lg border border-white/20'>
        <h1 className='text-white text-3xl font-bold'>SOON</h1>
      </div>
    </div>
  );
};
export const StoreData = [
  {
    id: 1,
    name: 'Bytebourg',
    location: '123 Byte Street, Tech City',
    carousel: <InfiniteScroll images={image} />,
  },
  {
    id: 2,
    name: 'Beanova',
    location: '45 Bean Avenue, Innovation Park',
    carousel: <InfiniteScroll images={image} />,
  },
  {
    id: 3,
    name: 'Brewesse',
    location: 'Coming Soon to Your City!',
    carousel: comingSoon(),
  },
];

export const playlistPart1 = [
  'Blinding Lights - The Weeknd',
  'Leave The Door Open - Silk Sonic',
  'Good 4 U - Olivia Rodrigo',
  'Peaches - Justin Bieber',
  'Kiss Me More - Doja Cat',
  'Heartbreak Anniversary - Giveon',
  'Save Your Tears - The Weeknd',
  'Call Out My Name - The Weeknd',
  'Essence - Wizkid feat. Justin Bieber & Tems',
  'Adore You - Harry Styles',
];

export const playlistPart2 = [
  'Replay - Iyaz',
  'Solo - Iyaz',
  'What Makes You Beautiful - One Direction',
  'Eenie Meenie - Justin Bieber & Sean Kingston',
  'Somebody to Love - Justin Bieber',
  'Whatcha Say - Jason Derulo',
  'Ridin’ Solo - Jason Derulo',
  'Beautiful Girls - Sean Kingston',
  'Dynamite - Taio Cruz',
  'Break Your Heart - Taio Cruz ft. Ludacris',
];

export const playlistPart3 = [
  'DJ Got Us Fallin’ In Love - Usher ft. Pitbull',
  'Take You There - Sean Kingston',
  'Forever - Chris Brown',
  'No Air - Jordin Sparks & Chris Brown',
  'Love Like Woe - The Ready Set',
  'Glad You Came - The Wanted',
  'Beauty and a Beat - Justin Bieber ft. Nicki Minaj',
  'Starships - Nicki Minaj',
  'Tik Tok - Kesha',
  'Call Me Maybe - Carly Rae Jepsen',
];
