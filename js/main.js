const ingredients = {
  vodka: 'wódka',
  gin: 'gin',
  lightRom: 'jasny rum',
  tequila: 'tequila',
  tripleSec: 'triple sec',
  scotch: 'scotch blended whisky',
  bourbon: 'bourbon',
  jack: 'Tennessee whiskey',
  sweet: 'słodki wermut',
  dry: 'wytrawny wermut',
  angostura: 'Angostura Bitters',
  peychaud: 'Peychaud Bitters',
  angosturaOrange: 'Angostura Orange Bitters',
  angosturaAmaro: 'Angostura Amaro',
  angosturaChocolate: 'Angostura Chocolate Bitters',
  cola: 'Coca Cola',
  simpleSyrup: 'syrop cukrowy',
  soda: 'woda gazowana',
  lemonade: 'lemoniada',
  tonic: 'tonik',
  cream: 'śmietanka',
  lemon: 'sok z cytryny',
  lime: 'sok z limonki',
  orange: 'sok pomarańczowy',
  cranberry: 'sok żurawinowy',
  grapefruit: 'sok grejpfrutowy',
  pineapple: 'sok ananasowy',
  campari: 'Campari',
  rye: 'żytnia whiskey',
  brandy: 'brandy/koniak',
  vodkaLime: 'wódka limonkowa',
  absinthe: 'absynt',
  grenadine: 'grenadina',
  peach: 'likier brzoskwiniowy',
  mint: 'likier miętowy',
  kahlua: 'likier kawowy',
  cacaoDark: 'likier kakaowy ciemny',
  cacaoLight: 'likier kakaowy jasny',
  amaretto: 'Amaretto',
  irishCream: 'Irish Cream',
  chambord: 'Chambord',
  southernComfort: 'Southern Comfort',
  curacao: 'blue curacao',
  darkRom: 'ciemny rum',
  lillet: 'Lillet Blonde',
  fernetBranca: 'Fernet Branca',
  maraschino: 'Maraschino',
  wine: 'wino musujące',
  eggWhite: 'białko',
  mintLeaf: 'liść mięty',
  basilLeaf: 'liść bazylii',
  cider: 'cydr',
  oliveBrine: 'zalewa z oliwek',
  limeCordial: 'lime cordial',
  cachaca: 'cachaca',
  cutHalfOfLime: 'pół pokrojonej limonki',
  tomato: 'sok pomidorowy',
  seasonings: 'przyprawy',
};

const speedRack = [
  ingredients.lemon,
  ingredients.lime,
  ingredients.simpleSyrup,
  ingredients.vodka,
  ingredients.gin,
  ingredients.lightRom,
  ingredients.tequila,
  ingredients.tripleSec,
  ingredients.scotch,
  ingredients.bourbon,
  ingredients.jack,
  ingredients.sweet,
  ingredients.dry,
];
const sideShelf = [
  ingredients.soda,
  ingredients.lemonade,
  ingredients.tonic,
  ingredients.angostura,
  ingredients.peychaud,
  ingredients.orange,
  ingredients.cranberry,
  ingredients.grapefruit,
  ingredients.cream,
];
const backShelf = [
  ingredients.campari,
  ingredients.rye,
  ingredients.brandy,
  ingredients.vodkaLime,
  ingredients.absinthe,
  ingredients.grenadine,
  ingredients.peach,
  ingredients.mint,
  ingredients.kahlua,
  ingredients.cacaoDark,
  ingredients.cacaoLight,
  ingredients.amaretto,
  ingredients.irishCream,
  ingredients.curacao,
  ingredients.darkRom,
  ingredients.angosturaAmaro,
];

const garnishes = {
  cherry: 'wisienka koktajlowa',
  olive: 'oliwka',
  onion: 'cebulka koktajlowa',
  lemon: {
    zest: 'zest z cytryny',
    slice: 'plasterek cytryny',
    quarter: 'ćwiartka cytryny',
  },
  orange: {
    zest: 'zest z pomarańczy',
    slice: 'plasterek pomarańczy',
    quarter: 'ćwiartka pomarańczy',
    piece: 'kawałek pomarańczy',
    halfMoon: 'półksiężyc pomarańczy',
  },
  lime: {
    zest: 'zest z limonki',
    quarter: 'ćwiartka limonki',
  },
  mint: 'gałązka mięty',
  basil: 'bazylia',
  crust: {
    salt: 'crusta z soli',
    sugar: 'crusta z cukru',
  },
  pipe: {
    normal: 'rurka',
    short: 'krótka rurka',
  },
  celery: 'seler naciowy',
  nutmeg: 'gałka muszkatołowa',
  chocolate: {
    sprinkle: 'posypka z czekolady',
    sauce: 'sos czekoladowy',
  },
};
const preps = {
  shake: 'wstrząsanie z lodem',
  dryShake: 'wstrząsanie bez lodu',
  stir: 'mieszanie z lodem',
  topUp: 'top up',
};
const servings = {
  rocks: 'z lodem',
  withoutIce: 'bez lodu',
};
const glasses = {
  lowBall: 'wysokie szkło',
  highBall: 'niskie szkło',
  cocktail: 'kieliszek koktajlowy',
};
const units = {
  ml: 'ml',
  dash: 'd',
  splash: 'splash',
  topUp: 'top up',
  wash: 'wash out/in out',
  pc: 'x',
};
const values = {
  twoPieces: '80',
  oneAndHalfPiece: '60',
  onePiece: '40',
  threeQuarters: '30',
  half: '20',
  fifteen: '15',
  quarter: '10',

  six: '6',
  five: '5',
  four: '4',
  three: '3',
  two: '2',
  one: '1',
};

const recipes = [
  {
    name: 'Old Fashioned',
    ingredients: [
      [values.onePiece, units.ml, ingredients.bourbon],
      [values.five, units.ml, ingredients.simpleSyrup],
      [values.five, units.dash, ingredients.angostura],
    ],
    garnishPieces: [garnishes.cherry, garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Manhattan',
    ingredients: [
      [values.onePiece, units.ml, ingredients.rye],
      [values.half, units.ml, ingredients.sweet],
      [values.five, units.dash, ingredients.angostura],
    ],
    garnishPieces: [garnishes.cherry],
    required: true,
  },
  {
    name: 'Brooklyn',
    ingredients: [
      [values.onePiece, units.ml, ingredients.bourbon],
      [values.half, units.ml, ingredients.dry],
      [values.quarter, units.ml, ingredients.maraschino],
      [values.three, units.dash, ingredients.angosturaOrange],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: false,
  },
  {
    name: 'Rob Roy',
    ingredients: [
      [values.onePiece, units.ml, ingredients.scotch],
      [values.half, units.ml, ingredients.sweet],
      [values.five, units.dash, ingredients.angostura],
    ],
    garnishPieces: [garnishes.cherry],
    required: true,
  },
  {
    name: 'El Presidente',
    ingredients: [
      [values.onePiece, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.sweet],
      [values.five, units.ml, ingredients.tripleSec],
      [values.five, units.dash, ingredients.angostura],
      [values.five, units.ml, ingredients.grenadine],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Sazerac',
    ingredients: [
      [values.onePiece, units.ml, ingredients.rye],
      [values.five, units.ml, ingredients.simpleSyrup],
      [values.one, units.wash, ingredients.absinthe],
      [values.five, units.dash, ingredients.peychaud],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Mint Julep',
    ingredients: [
      [values.onePiece, units.ml, ingredients.bourbon],
      [values.five, units.ml, ingredients.simpleSyrup],
      [values.fifteen, units.pc, ingredients.mintLeaf],
    ],
    garnishPieces: [garnishes.mint, garnishes.pipe.short],
    required: false,
  },
  {
    name: 'Negroni',
    ingredients: [
      [values.threeQuarters, units.ml, ingredients.gin],
      [values.threeQuarters, units.ml, ingredients.campari],
      [values.threeQuarters, units.ml, ingredients.sweet],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Boulevardier',
    ingredients: [
      [values.onePiece, units.ml, ingredients.rye],
      [values.half, units.ml, ingredients.campari],
      [values.half, units.ml, ingredients.sweet],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Right Hand',
    ingredients: [
      [values.onePiece, units.ml, ingredients.darkRom],
      [values.half, units.ml, ingredients.campari],
      [values.three, units.dash, ingredients.angosturaChocolate],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Paper Plane',
    ingredients: [
      [values.half, units.ml, ingredients.rye],
      [values.half, units.ml, ingredients.campari],
      [values.half, units.ml, ingredients.angosturaAmaro],
      [values.half, units.ml, ingredients.lemon],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Americano',
    ingredients: [
      [values.threeQuarters, units.ml, ingredients.campari],
      [values.threeQuarters, units.ml, ingredients.sweet],
      [values.one, units.splash, ingredients.soda],
    ],
    garnishPieces: [garnishes.orange.halfMoon],
    required: true,
  },
  {
    name: 'Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.five, units.ml, ingredients.dry],
    ],
    garnishPieces: [garnishes.olive],
    garnishPiecesOr: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Hanky Panky',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.sweet],
      [values.one, units.dash, ingredients.fernetBranca],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: '50/50 Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.onePiece, units.ml, ingredients.dry],
    ],
    garnishPieces: [garnishes.olive],
    garnishPiecesOr: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Wet Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.quarter, units.ml, ingredients.dry],
    ],
    garnishPieces: [garnishes.olive],
    garnishPiecesOr: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Dirty Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.five, units.ml, ingredients.dry],
      [values.quarter, units.ml, ingredients.oliveBrine],
    ],
    garnishPieces: [garnishes.olive],
    garnishPiecesOr: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'In/Out Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.one, units.wash, ingredients.dry],
    ],
    garnishPieces: [garnishes.olive],
    garnishPiecesOr: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Vesper Martini',
    ingredients: [
      [values.oneAndHalfPiece, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.vodka],
      [values.quarter, units.ml, ingredients.lillet],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Gibson Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.five, units.ml, ingredients.dry],
    ],
    garnishPieces: [garnishes.onion],
    required: true,
  },
  {
    name: 'Extra Dry Martini',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
    ],
    garnishPieces: [garnishes.olive],
    garnishPiecesOr: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Martinez',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.sweet],
      [values.five, units.ml, ingredients.maraschino],
      [values.two, units.dash, ingredients.angosturaOrange],
      [values.two, units.dash, ingredients.angostura],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: false,
  },
  {
    name: 'Cosmopolitan',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodkaLime],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.cranberry],
      [values.quarter, units.ml, ingredients.lime],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: true,
  },
  {
    name: 'Gimlet',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.quarter, units.ml, ingredients.limeCordial],
    ],
    garnishPieces: [garnishes.lime.zest],
    required: false,
  },
  {
    name: 'Whiskey Sour',
    ingredients: [
      [values.onePiece, units.ml, ingredients.jack],
      [values.threeQuarters, units.ml, ingredients.lemon],
      [values.fifteen, units.ml, ingredients.simpleSyrup],
      [values.three, units.dash, ingredients.angostura],
      [values.fifteen, units.ml, ingredients.eggWhite],
    ],
    garnishPieces: [garnishes.lemon.zest, garnishes.cherry],
    required: false,
  },
  {
    name: 'Lynchburg Lemonade',
    ingredients: [
      [values.onePiece, units.ml, ingredients.jack],
      [values.half, units.ml, ingredients.tripleSec],
      [values.threeQuarters, units.ml, ingredients.lemon],
      [values.fifteen, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.lemonade],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Tom Collins',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.threeQuarters, units.ml, ingredients.lemon],
      [values.fifteen, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.soda],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Joe Collins',
    ingredients: [
      [values.onePiece, units.ml, ingredients.scotch],
      [values.threeQuarters, units.ml, ingredients.lemon],
      [values.fifteen, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.soda],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'John Collins',
    ingredients: [
      [values.onePiece, units.ml, ingredients.bourbon],
      [values.threeQuarters, units.ml, ingredients.lemon],
      [values.fifteen, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.soda],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Ramos Gin Fizz',
    ingredients: [
      [values.oneAndHalfPiece, units.ml, ingredients.gin],
      [values.fifteen, units.ml, ingredients.lemon],
      [values.fifteen, units.ml, ingredients.lime],
      [values.threeQuarters, units.ml, ingredients.cream],
      [values.one, units.pc, ingredients.eggWhite],
      [values.fifteen, units.ml, ingredients.simpleSyrup],
      [values.four, units.dash, ingredients.angosturaOrange],
      [values.one, units.topUp, ingredients.soda],
    ],
    garnishPieces: [garnishes.orange.zest],
    required: false,
  },
  {
    name: 'Whiskey Smash',
    ingredients: [
      [values.onePiece, units.ml, ingredients.jack],
      [values.six, units.pc, ingredients.mintLeaf],
      [values.two, units.pc, garnishes.lemon.quarter],
      [values.half, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.mint],
    required: false,
  },
  {
    name: 'Gin Basil Smash',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.quarter, units.ml, ingredients.lemon],
      [values.quarter, units.pc, ingredients.basilLeaf],
      [values.half, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.basil],
    required: false,
  },
  {
    name: 'Side Car',
    ingredients: [
      [values.onePiece, units.ml, ingredients.brandy],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
    ],
    garnishPieces: [garnishes.crust.sugar, garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Between the Sheets',
    ingredients: [
      [values.onePiece, units.ml, ingredients.brandy],
      [values.half, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
    ],
    garnishPieces: [garnishes.crust.sugar, garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'White Lady',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
    ],
    garnishPieces: [garnishes.lemon.zest],
    required: true,
  },
  {
    name: 'Margarita',
    ingredients: [
      [values.onePiece, units.ml, ingredients.tequila],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lime],
    ],
    garnishPieces: [garnishes.lime.zest],
    required: true,
  },
  {
    name: 'Daiquiri',
    ingredients: [
      [values.onePiece, units.ml, ingredients.lightRom],
      [values.threeQuarters, units.ml, ingredients.lime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.lime.zest],
    required: true,
  },
  {
    name: 'Air Mail',
    ingredients: [
      [values.onePiece, units.ml, ingredients.lightRom],
      [values.threeQuarters, units.ml, ingredients.lime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.wine],
    ],
    garnishPieces: [garnishes.lime.zest],
    required: true,
  },
  {
    name: 'Caipirinha',
    ingredients: [
      [values.onePiece, units.ml, ingredients.cachaca],
      [values.one, units.pc, ingredients.cutHalfOfLime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.pipe.normal],
    required: false,
  },
  {
    name: 'Caipirosca',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.pc, ingredients.cutHalfOfLime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.pipe.normal],
    required: false,
  },
  {
    name: 'Caipirissima',
    ingredients: [
      [values.onePiece, units.ml, ingredients.lightRom],
      [values.one, units.pc, ingredients.cutHalfOfLime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.pipe.normal],
    required: false,
  },
  // TODO: Add Canchanchara, Mojito, Mai Tai, Zombie, Corn & Oil, Pina Colada
  //  and Pain Killer
  {
    name: 'Nautilus',
    ingredients: [
      [values.onePiece, units.ml, ingredients.tequila],
      [values.onePiece, units.ml, ingredients.cranberry],
      [values.half, units.ml, ingredients.lime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
    ],
    garnishPieces: [garnishes.mint],
    required: true,
  },
  {
    name: 'Paloma',
    ingredients: [
      [values.onePiece, units.ml, ingredients.tequila],
      [values.onePiece, units.ml, ingredients.grapefruit],
      [values.half, units.ml, ingredients.lime],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.soda],
    ],
    required: true,
  },
  {
    name: 'G&T',
    ingredients: [
      [values.onePiece, units.ml, ingredients.gin],
      [values.one, units.topUp, ingredients.tonic],
      [values.one, units.pc, garnishes.lemon.quarter],
    ],
    required: true,
  },
  {
    name: 'Cuba Libre',
    ingredients: [
      [values.onePiece, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.lime],
      [values.one, units.topUp, ingredients.cola],
      [values.one, units.pc, garnishes.lime.quarter],
    ],
    required: true,
  },
  // TODO: Add Moscow Mule.
  {
    name: 'Tequila Sunrise',
    ingredients: [
      [values.onePiece, units.ml, ingredients.tequila],
      [values.one, units.topUp, ingredients.orange],
      [values.one, units.splash, ingredients.grenadine],
    ],
    garnishPieces: [garnishes.orange.piece],
    required: true,
  },
  {
    name: 'Sex on the Beach',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.peach],
      [values.one, units.topUp, ingredients.orange],
      [values.one, units.topUp, ingredients.cranberry],
    ],
    garnishPieces: [garnishes.orange.piece],
    required: true,
  },
  {
    name: 'Long Island Iced Tea',
    ingredients: [
      [values.half, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.tequila],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.cola],
    ],
    garnishPieces: [garnishes.lemon.quarter],
    required: true,
  },
  {
    name: 'Long Beach Iced T',
    ingredients: [
      [values.half, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.tequila],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.cranberry],
    ],
    garnishPieces: [garnishes.lemon.quarter],
    required: true,
  },
  {
    name: 'California Long Island Iced Tea',
    ingredients: [
      [values.half, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.tequila],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.orange],
    ],
    garnishPieces: [garnishes.lemon.quarter],
    required: true,
  },
  {
    name: 'Electric Long Island Iced Tea',
    ingredients: [
      [values.half, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.tequila],
      [values.half, units.ml, ingredients.curacao],
      [values.half, units.ml, ingredients.lemon],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.lemonade],
    ],
    garnishPieces: [garnishes.lemon.quarter],
    required: true,
  },
  {
    name: 'Polish Long Island Iced Tea',
    ingredients: [
      [values.half, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.gin],
      [values.half, units.ml, ingredients.lightRom],
      [values.half, units.ml, ingredients.tequila],
      [values.half, units.ml, ingredients.tripleSec],
      [values.half, units.ml, ingredients.lemon],
      [values.quarter, units.ml, ingredients.simpleSyrup],
      [values.one, units.topUp, ingredients.cider],
    ],
    garnishPieces: [garnishes.lemon.quarter],
    required: true,
  },
  {
    name: 'Bloody Mary',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.twoPieces, units.ml, ingredients.tomato],
      [values.one, units.pc, ingredients.seasonings],
    ],
    garnishPieces: [garnishes.celery],
    required: false,
  },
  {
    name: 'Screwdriver',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.topUp, ingredients.orange],
    ],
    required: true,
  },
  {
    name: 'Capecodder',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.topUp, ingredients.cranberry],
    ],
    required: true,
  },
  {
    name: 'Greyhound',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.topUp, ingredients.grapefruit],
    ],
    required: true,
  },
  {
    name: 'Madras',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.topUp, ingredients.orange],
      [values.one, units.topUp, ingredients.cranberry],
    ],
    required: true,
  },
  {
    name: 'Baybreeze',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.topUp, ingredients.cranberry],
      [values.one, units.topUp, ingredients.pineapple],
    ],
    required: true,
  },
  {
    name: 'Seabreeze',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.one, units.topUp, ingredients.cranberry],
      [values.one, units.topUp, ingredients.grapefruit],
    ],
    required: true,
  },

  {
    name: 'Black Russian',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.kahlua],
    ],
    required: true,
  },
  {
    name: 'White Russian',
    ingredients: [
      [values.onePiece, units.ml, ingredients.vodka],
      [values.half, units.ml, ingredients.kahlua],
      [values.one, units.splash, ingredients.cream],
    ],
    required: true,
  },
  {
    name: 'God Father',
    ingredients: [
      [values.onePiece, units.ml, ingredients.scotch],
      [values.half, units.ml, ingredients.amaretto],
    ],
    required: true,
  },
  {
    name: 'Brandy Alexander',
    ingredients: [
      [values.half, units.ml, ingredients.brandy],
      [values.half, units.ml, ingredients.cacaoDark],
      [values.half, units.ml, ingredients.cream],
    ],
    garnishPieces: [garnishes.nutmeg],
    required: true,
  },
  {
    name: 'Grasshopper',
    ingredients: [
      [values.half, units.ml, ingredients.mint],
      [values.half, units.ml, ingredients.cacaoLight],
      [values.half, units.ml, ingredients.cream],
    ],
    garnishPieces: [garnishes.chocolate.sprinkle],
    required: true,
  },
  {
    name: 'Orgasm',
    ingredients: [
      [values.half, units.ml, ingredients.kahlua],
      [values.half, units.ml, ingredients.irishCream],
      [values.half, units.ml, ingredients.cream],
    ],
    garnishPieces: [garnishes.chocolate.sauce],
    required: true,
  },
  {
    name: 'Scotch & Soda',
    ingredients: [
      [values.onePiece, units.ml, ingredients.scotch],
      [values.one, units.topUp, ingredients.soda],
    ],
    required: true,
  },
];

const recipeModifiers = [
  ['Perfect', function (recipe) {
    const anyVermouth = recipe.ingredients.find(
      ingredient => ingredient[1] === units.ml && (
        ingredient[2] === ingredients.sweet ||
        ingredient[2] === ingredients.dry
      )
    );

    if (anyVermouth) {
      const amount = Number(anyVermouth[0]) / 2;
      const vermouthType = anyVermouth[2];

      anyVermouth[0] = String(amount);

      recipe.ingredients.splice(recipe.ingredients.indexOf(anyVermouth) + 1, 0, [
        String(amount), units.ml, (
          vermouthType === ingredients.sweet ?
            ingredients.dry :
            ingredients.sweet
        )
      ]);

      return recipe;
    } else {
      return null;
    }
  }],
  ['Dry', function (recipe) {
    const sweetVermouth = recipe.ingredients.find(
      ingredient => ingredient[1] === units.ml &&
        ingredient[2] === ingredients.sweet
      );

    if (sweetVermouth) {
      sweetVermouth[2] = ingredients.dry;
      return recipe;
    } else {
      return null;
    }
  }],
  ['Wet', function (recipe) {
    const anyVermouth = recipe.ingredients.find(
      ingredient => ingredient[1] === units.ml && (
        ingredient[2] === ingredients.sweet ||
        ingredient[2] === ingredients.dry
      )
    );

    if (anyVermouth) {
      const amount = Number(anyVermouth[0]) * 2;

      anyVermouth[0] = String(amount);

      return recipe;
    } else {
      return null;
    }
  }],
  ['Screaming', function (recipe) {
    const anyCreamCoctail = recipe.ingredients.find(
      ingredient => ingredient[0] === values.half &&
        ingredient[1] === units.ml &&
        ingredient[2] === ingredients.cream
    );

    if (anyCreamCoctail) {
      recipe.ingredients.splice(2, 0, [
        values.half, units.ml, ingredients.vodka
      ]);

      return recipe;
    } else {
      return null;
    }
  }],
  ['Multiply', function (recipe) {
    const anyCreamCoctail = recipe.ingredients.find(
      ingredient => ingredient[0] === values.half &&
        ingredient[1] === units.ml &&
        ingredient[2] === ingredients.cream
    );

    if (anyCreamCoctail) {
      recipe.ingredients.splice(2, 0, [
        values.half, units.ml, ingredients.southernComfort
      ]);

      return recipe;
    } else {
      return null;
    }
  }],
  ['Royal', function (recipe) {
    const anyCreamCoctail = recipe.ingredients.find(
      ingredient => ingredient[0] === values.half &&
        ingredient[1] === units.ml &&
        ingredient[2] === ingredients.cream
    );

    if (anyCreamCoctail) {
      recipe.ingredients.splice(2, 0, [
        values.half, units.ml, ingredients.chambord
      ]);

      return recipe;
    } else {
      return null;
    }
  }],
  ['Blue', function (recipe) {
    const anyTripleSec = recipe.ingredients.find(
      ingredient => ingredient[1] === units.ml &&
        ingredient[2] === ingredients.tripleSec
    );

    if (anyTripleSec) {
      anyTripleSec[2] = ingredients.curacao;

      return recipe;
    } else {
      return null;
    }
  }],
];

const additionalRecipes = [];

recipes.forEach(function (recipe) {
  recipeModifiers.forEach(function (modifier) {
    const name = modifier[0];
    const fn = modifier[1];
    const recipeCopy = JSON.parse(JSON.stringify(recipe));
    const newRecipe = fn(recipeCopy);

    if (newRecipe !== null && !recipeCopy.name.match(name)) {
      newRecipe.name = name + ' ' + newRecipe.name;
      additionalRecipes.push(newRecipe);
    }
  });
});

additionalRecipes.forEach(function (additionalRecipe) {
  recipes.push(additionalRecipe);
});

const recipesRequiredOnExam = recipes.filter(function (recipe) {
  return recipe.required;
});

let currentRecipe = recipes[0];
let shouldRandomizeRequiredOnly = true;

const checkRecipe = function (ingredients) {
  if (JSON.stringify(currentRecipe.ingredients) === JSON.stringify(ingredients)) {
    alert('Brawo! Ogarniasz ' + currentRecipe.name + ' :)');
  } else {
    alert('Źle! Prawidłowe składniki ' + currentRecipe.name + ' to: ' +
      currentRecipe.ingredients.map(el => el.join(' ')).join(', '));
  }

  createAddingForm();
  randomizeCocktail();
};

const initSettingsSection = function () {
  const settingsEl = document.querySelector('.settings');
  const inputEl = settingsEl.querySelector('.should-randomize-required-only');

  shouldRandomizeRequiredOnly = inputEl.checked;

  const onInputChange = function () {
    shouldRandomizeRequiredOnly = inputEl.checked;
  };

  inputEl.addEventListener('change', onInputChange, false);
};

const createAddingForm = function () {
  const ingredientsWrapperEl = document.querySelector('.ingredients');
  const addingFormEl = ingredientsWrapperEl.querySelector('.adding-form');
  const addedIngredientsWrapperEl = ingredientsWrapperEl.querySelector('.added-ingredients');
  const ingredientsListEl = document.createElement('ul');

  const valueSectionEl = document.createElement('span');
  const unitSectionEl = document.createElement('span');
  const chooseIngredientSectionEl = document.createElement('span');

  const valueInputEl = document.createElement('select');
  const unitInputEl = document.createElement('select');
  const ingredientInputEl = document.createElement('select');

  const valuePlaceholderEl = document.createElement('option');
  valuePlaceholderEl.disabled = true;
  valuePlaceholderEl.selected = true;
  valuePlaceholderEl.textContent = 'ile';

  const unitPlaceholderEl = document.createElement('option');
  unitPlaceholderEl.disabled = true;
  unitPlaceholderEl.selected = true;
  unitPlaceholderEl.textContent = 'czego';

  const ingredientPlaceholderEl = document.createElement('option');
  ingredientPlaceholderEl.disabled = true;
  ingredientPlaceholderEl.selected = true;
  ingredientPlaceholderEl.textContent = 'jaki składnik';

  valueInputEl.appendChild(valuePlaceholderEl);
  unitInputEl.appendChild(unitPlaceholderEl);
  ingredientInputEl.appendChild(ingredientPlaceholderEl);

  const submitButtonEl = document.createElement('button');

  const checkRecipeButtonEl = document.querySelector('.check-recipe');

  const addedIngredients = [];

  const onSubmitButtonClick = function () {
    const value = valueInputEl.value;
    const unit = unitInputEl.value;
    const ingredientName = ingredientInputEl.value;
    const ingredientEl = document.createElement('li');

    addedIngredients.push([value, unit, ingredientName]);

    ingredientEl.textContent = `${value} ${unit} ${ingredientName}`;
    ingredientsListEl.appendChild(ingredientEl);

    valueInputEl.selectedIndex = 0;
    unitInputEl.selectedIndex = 0;
    ingredientInputEl.selectedIndex = 0;
  };

  const onCheckRecipeButtonClick = function () {
    addingFormEl.innerHTML = '';
    addedIngredientsWrapperEl.innerHTML = '';
    submitButtonEl.removeEventListener('click', onSubmitButtonClick, false);
    checkRecipeButtonEl.removeEventListener('click', onCheckRecipeButtonClick, false);

    checkRecipe(addedIngredients);
  };

  submitButtonEl.type = 'button';
  submitButtonEl.textContent = '+';

  Object.keys(values).forEach(function (valueName) {
    const item = document.createElement('option');
    item.textContent = values[valueName];
    valueInputEl.appendChild(item);
  });

  Object.keys(units).forEach(function (unitName) {
    const item = document.createElement('option');
    item.textContent = units[unitName];
    unitInputEl.appendChild(item);
  });

  Object.keys(ingredients).forEach(function (ingredientName) {
    const item = document.createElement('option');
    item.textContent = ingredients[ingredientName];
    ingredientInputEl.appendChild(item);
  });

  submitButtonEl.addEventListener('click', onSubmitButtonClick, false);

  checkRecipeButtonEl.addEventListener('click', onCheckRecipeButtonClick, false);

  addingFormEl.appendChild(valueSectionEl);
  addingFormEl.appendChild(unitSectionEl);
  addingFormEl.appendChild(chooseIngredientSectionEl);
  addingFormEl.appendChild(submitButtonEl);

  unitSectionEl.appendChild(valueInputEl);
  unitSectionEl.appendChild(unitInputEl);
  unitSectionEl.appendChild(ingredientInputEl);

  addedIngredientsWrapperEl.appendChild(ingredientsListEl);
};

const randomizeCocktail = function () {
  const recipesSet = shouldRandomizeRequiredOnly ?
    recipesRequiredOnExam :
    recipes;

  currentRecipe = recipesSet[Math.floor(Math.random() * recipesSet.length)];

  const cocktailNameEl = document.querySelector('.cocktail-name');
  cocktailNameEl.textContent = currentRecipe.name;
};

initSettingsSection();
createAddingForm();
randomizeCocktail();
