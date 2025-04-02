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
];
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
    carousel: <p>Coming Soon</p>,
  },
  {
    id: 2,
    name: 'Brewesse',
    location: 'Coming Soon to Your City!',
  },
];
