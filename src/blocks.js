function mainBlock(container) {
  mainBlockArray = [];
  const top = document.createElement("div");
  top.classList.add("top", "center");
  mainBlockArray.push(top);
  const header = document.createElement("header");
  header.classList.add("header");
  top.appendChild(header);
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
  mainBlockArray.forEach((element) => {
    container.appendChild(element);
  });
}
