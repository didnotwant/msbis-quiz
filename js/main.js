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
  curacao: 'blue curacao',
  darkRom: 'ciemny rum',
  lillet: 'Lillet Blonde',
  fernetBranca: 'Fernet Branca',
  maraschino: 'Maraschino',
  wine: 'wino musujące',
  eggWhite: 'białko',
  mintLeaf: 'liść mięty',
  cider: 'cydr',
  oliveBrine: 'zalewa z oliwek',
  limeCordial: 'lime cordial',
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
  crust: {
    salt: 'crusta z soli',
    sugar: 'crusta z cukru',
  },
  pipe: {
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
  pc: 'sztuk',
};
const values = {
  oneAndHalfPiece: '60',
  onePiece: '40',
  threeQuarters: '30',
  half: '20',
  fifteen: '15',
  quarter: '10',

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
];

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
  const recipesMaybeFiltered = recipes.filter(function (recipe) {
    if (shouldRandomizeRequiredOnly) {
      return recipe.required;
    }

    return true;
  });

  currentRecipe = recipesMaybeFiltered[Math.floor(Math.random() * recipesMaybeFiltered.length)];

  const cocktailNameEl = document.querySelector('.cocktail-name');
  cocktailNameEl.textContent = currentRecipe.name;
};

initSettingsSection();
createAddingForm();
randomizeCocktail();
