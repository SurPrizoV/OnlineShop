function header(element) {
  const header = document.createElement("header");
  header.classList.add("header");
  const logoHeader = document.createElement("a");
  logoHeader.classList.add("header__breadcrumbs");
  logoHeader.setAttribute("href", "index.html");
  header.appendChild(logoHeader);
  const logo = document.createElement("img");
  logo.setAttribute("src", "./src/img/main/logo.svg");
  logoHeader.appendChild(logo);
  const headerInput = document.createElement("input");
  headerInput.classList.add("header__input");
  headerInput.setAttribute("placeholder", "Поиск");
  header.appendChild(headerInput);
  const headerMenu = document.createElement("nav");
  headerMenu.classList.add("header__menu");
  header.appendChild(headerMenu);
  const headerCatalog = document.createElement("a");
  headerCatalog.classList.add("header__breadcrumbs");
  headerCatalog.setAttribute("href", "#");
  headerCatalog.textContent = "Каталог";
  headerMenu.appendChild(headerCatalog);
  const headerCart = document.createElement("a");
  headerCart.classList.add("header__breadcrumbs");
  headerCart.setAttribute("href", "#");
  headerCart.textContent = "Корзина";
  headerMenu.appendChild(headerCart);
  return element.appendChild(header);
}

function mainBlock(container) {
  mainBlockArray = [];
  const top = document.createElement("div");
  top.classList.add("top", "center");
  mainBlockArray.push(top);
  header(top);
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Всё, чего заслуживает ваш дом.";
  mainTitle.classList.add("title");
  top.appendChild(mainTitle);
  const mainSubTitle = document.createElement("p");
  mainSubTitle.textContent = "Наша мебель - ваше отражение.";
  mainSubTitle.classList.add("subtitle");
  top.appendChild(mainSubTitle);
  const linkCatalog = document.createElement("a");
  linkCatalog.setAttribute("href", "#");
  linkCatalog.textContent = "Перейти в каталог";
  linkCatalog.classList.add("catalog");
  top.appendChild(linkCatalog);
  const forBox = document.createElement("div");
  forBox.classList.add("for__box", "center");
  mainBlockArray.push(forBox);
  const forBoxTitle = document.createElement("p");
  forBoxTitle.textContent = "Мебель для ...";
  forBoxTitle.classList.add("for__box__title");
  forBox.appendChild(forBoxTitle);
  const forImage = document.createElement("div");
  forImage.classList.add("for");
  forBox.appendChild(forImage);
  const relaxImage = document.createElement("div");
  relaxImage.textContent = "ОТДЫХА";
  relaxImage.classList.add("for_item", "for_item_1", "for_item_big");
  forImage.appendChild(relaxImage);
  const workImage = document.createElement("div");
  workImage.textContent = "РАБОТЫ";
  workImage.classList.add("for_item", "for_item_2", "for_item_big");
  forImage.appendChild(workImage);
  const kitchenImage = document.createElement("div");
  kitchenImage.textContent = "КУХНИ";
  kitchenImage.classList.add("for_item", "for_item_3");
  forImage.appendChild(kitchenImage);
  const childrenRoomImage = document.createElement("div");
  childrenRoomImage.textContent = "ДЕТСКОЙ";
  childrenRoomImage.classList.add("for_item", "for_item_4");
  forImage.appendChild(childrenRoomImage);
  const bathroomImage = document.createElement("div");
  bathroomImage.textContent = "ВАННОЙ";
  bathroomImage.classList.add("for_item", "for_item_5");
  forImage.appendChild(bathroomImage);
  const productBox = document.createElement("div");
  productBox.classList.add("center");
  mainBlockArray.push(productBox);
  const productBoxTitle = document.createElement("p");
  productBoxTitle.textContent = "Специальные предложения";
  productBoxTitle.classList.add("product__box__title");
  productBox.appendChild(productBoxTitle);
  const specialOfferBox = document.createElement('div');
  specialOfferBox.classList.add('product_content');
  productBox.appendChild(specialOfferBox);
  const chandelierBox = document.createElement("div");
  chandelierBox.classList.add("product");
  specialOfferBox.appendChild(chandelierBox);
  const icons = document.createElement("div");
  icons.classList.add("product_icons");
  chandelierBox.appendChild(icons);
  const linkPocket = document.createElement("a");
  linkPocket.setAttribute("href", "#");
  icons.appendChild(linkPocket);
  const pocketImage = document.createElement("img");
  pocketImage.setAttribute("src", "./src/img/main/pocket.svg");
  pocketImage.classList.add('icon_hover');
  linkPocket.appendChild(pocketImage);
  const linkHeart = document.createElement("a");
  linkHeart.setAttribute("href", "#");
  icons.appendChild(linkHeart);
  const heartImage = document.createElement("img");
  heartImage.setAttribute("src", "./src/img/main/heart.svg");
  heartImage.classList.add('icon_hover');
  linkHeart.appendChild(heartImage);
  const chandelierImage = document.createElement('img');
  chandelierImage.setAttribute('src', './src/img/main/voda__lustra.jpg');
  chandelierImage.classList.add('product_img');
  chandelierBox.appendChild(chandelierImage);
  const chandelierLink = document.createElement('a');
  chandelierLink.setAttribute('href', '#');
  chandelierBox.appendChild(chandelierLink);
  const chandelierName = document.createElement('p');
  chandelierName.textContent = 'Люстра VODA';
  chandelierName.classList.add('item');
  chandelierLink.appendChild(chandelierName);
  const chandelierInfo = document.createElement('p');
  chandelierInfo.textContent = 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.';
  chandelierInfo.classList.add('desc');
  chandelierBox.appendChild(chandelierInfo);
  const boxPrice = document.createElement('div');
  boxPrice.classList.add('box__price');
  chandelierBox.appendChild(boxPrice);
  const price = document.createElement('p');
  price.textContent = '45 000 руб.';
  price.classList.add('price');
  boxPrice.appendChild(price);
  const priceSecond = document.createElement('p');
  priceSecond.textContent = '67 000 руб.';
  priceSecond.classList.add('price', 'price2');
  boxPrice.appendChild(priceSecond);
  const sofaBox = document.createElement("div");
  sofaBox.classList.add("product");
  specialOfferBox.appendChild(sofaBox);
  const sofaImage = document.createElement('img');
  sofaImage.setAttribute('src', './src/img/main/divan__ronald.jpg');
  sofaImage.classList.add('product_img');
  sofaBox.appendChild(sofaImage);
  const sofaLink = document.createElement('a');
  sofaLink.setAttribute('href', '#');
  sofaBox.appendChild(sofaLink);
  const sofaName = document.createElement('p');
  sofaName.textContent = 'Диван RONALD';
  sofaName.classList.add('item');
  sofaLink.appendChild(sofaName);
  const sofaInfo = document.createElement('p');
  sofaInfo.textContent = 'Модель отличается простотой линий и форм, отсутствием броского декора.';
  sofaInfo.classList.add('desc');
  sofaBox.appendChild(sofaInfo);
  const boxPriceSofa = document.createElement('div');
  boxPriceSofa.classList.add('box__price');
  sofaBox.appendChild(boxPriceSofa);
  const priceSofa = document.createElement('p');
  priceSofa.textContent = '156 000 руб.';
  priceSofa.classList.add('price');
  boxPriceSofa.appendChild(priceSofa);
  const priceSecondSofa = document.createElement('p');
  priceSecondSofa.textContent = '198 000 руб.';
  priceSecondSofa.classList.add('price', 'price2');
  boxPriceSofa.appendChild(priceSecondSofa);
  const dresserBox = document.createElement("div");
  dresserBox.classList.add("product");
  specialOfferBox.appendChild(dresserBox);
  const dresserImage = document.createElement('img');
  dresserImage.setAttribute('src', './src/img/main/komod__vent.jpg');
  dresserImage.classList.add('product_img');
  dresserBox.appendChild(dresserImage);
  const dresserLink = document.createElement('a');
  dresserLink.setAttribute('href', '#');
  dresserBox.appendChild(dresserLink);
  const dresserName = document.createElement('p');
  dresserName.textContent = 'Комод Vent';
  dresserName.classList.add('item');
  dresserLink.appendChild(dresserName);
  const dresserInfo = document.createElement('p');
  dresserInfo.textContent = 'Европейский дуб - отличается особой прочностью и стабильностью.';
  dresserInfo.classList.add('desc');
  dresserBox.appendChild(dresserInfo);
  const boxPriceDresser = document.createElement('div');
  boxPriceDresser.classList.add('box__price');
  dresserBox.appendChild(boxPriceDresser);
  const priceDresser = document.createElement('p');
  priceDresser.textContent = '34 000 руб.';
  priceDresser.classList.add('price');
  boxPriceDresser.appendChild(priceDresser);
  const priceSecondDresser = document.createElement('p');
  priceSecondDresser.textContent = '45 000 руб.';
  priceSecondDresser.classList.add('price', 'price2');
  boxPriceDresser.appendChild(priceSecondDresser);
  mainBlockArray.forEach((element) => {
    container.appendChild(element);
  });
}