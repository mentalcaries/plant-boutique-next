import woodenPlanter from '../public/images/wooden-planter.jpg';
import woodenPlanterDark from '..//public/images/wooden-planter-dark.jpg';
import wireTrellis from '../public/images/wiretrellis.jpg';
import wireTrellisPair from '../public/images/wiretrellis2.jpg';
import wirePlanterSingle from '../public/images/wireplanter1.jpg'
import wirePlanterDouble from '../public/images/wireplanter2.jpg'
import bambooDark from '../public/images/bamboo1.jpg';
import bamboolight from '../public/images/bamboo2.jpg';


const collection = [
  {
    title: 'Wooden Planter',
    coverImage: woodenPlanter,
    description: [
      'Our Boho wooden hanging planters are made from locally sourced wood and come in two colours: Espresso and Natural. ',
      'They feature a 6" wooden base with a cutout that can fit a 4.5 to 5" pot, 18" of cotton rope and a metal S hook. Available with or without a pot.',
    ],
    productImages: [woodenPlanter, woodenPlanterDark],
  },
  {
    title: 'Wire Planter',
    coverImage: wirePlanterDouble,
    description: [
      'Our metal hanging planters handmade with brass and gold hardware and are perfect for adding some extra treatment to your window treatment ',
      'We have multiple sizes available for a variety of pots. Includes S hook and chain',
    ],
    productImages: [wirePlanterSingle, wirePlanterDouble],
  },
  {
    title: 'Bamboo Trellis',
    coverImage: bamboolight,
    description: [
      'Here\'s where it all began! These trellises are made from all-natural bamboo, and are hand tied and sealed to protect against moisture. They make vining divine',
      'Available in multiple sizes. Add some "plant bling" to give them a little extra encouragement to grow!',
    ],
    productImages: [bambooDark, bamboolight],
  },
  {
    title: 'Wire Trellis',
    coverImage: wireTrellisPair,
    description: [
      'So many options! Our wire trellises are perfect for your vining plants, or to add some zing to your succulent pots ',
      'These are all hand made with a durable gauge wire. We love a challenge, so these can be custom made to whatever shapes your heart desire',
    ],
    productImages: [wireTrellis, wireTrellisPair],
  },
];


export {collection};
