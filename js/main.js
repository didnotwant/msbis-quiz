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
  cider: 'cydr',
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
};
const values = {
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
  },
  {
    name: 'Manhattan',
    ingredients: [
      [values.onePiece, units.ml, ingredients.rye],
      [values.half, units.ml, ingredients.sweet],
      [values.five, units.dash, ingredients.angostura],
    ],
    garnishPieces: [garnishes.cherry],
  },
  {
    name: 'Rob Roy',
    ingredients: [
      [values.onePiece, units.ml, ingredients.scotch],
      [values.half, units.ml, ingredients.sweet],
      [values.five, units.dash, ingredients.angostura],
    ],
    garnishPieces: [garnishes.cherry],
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
  },
];

let currentRecipe = recipes[0];

const checkRecipe = function (ingredients) {
  console.log('Current recipe ingredients?', JSON.stringify(currentRecipe.ingredients));
  console.log('Ingredients to check?', JSON.stringify(ingredients));

  if (JSON.stringify(currentRecipe.ingredients) === JSON.stringify(ingredients)) {
    alert('Brawo! Ogarniasz ' + currentRecipe.name + ' :)');
  } else {
    alert('Źle! Prawidłowe składniki ' + currentRecipe.name + ' to: ' +
      currentRecipe.ingredients.map(el => el.join(' ')).join(', '));
  }

  createAddForm();
  randomizeCocktail();
};

const createAddForm = function () {
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
  currentRecipe = recipes[Math.floor(Math.random() * recipes.length)];

  const cocktailNameEl = document.querySelector('.cocktail-name');
  cocktailNameEl.textContent = currentRecipe.name;
};

createAddForm();
randomizeCocktail();
