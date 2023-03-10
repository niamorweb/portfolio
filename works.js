// Tableau de données à utiliser pour remplir le HTML
var data = [
  {
    imageSrc: "/portfolio/assets/works/w1.png",
    title: "Ecommerce audiophile",
    description:
      "An e-commerce website for the audiophile with product to add to cart, the cart integrated and a page to checkout the order with the total price.",
    category: "REACTJS · SCSS",
    link: "https://niamorweb.github.io/nslides/",
    codeSource:
      "https://github.com/niamordev/ecommerce-audiophile-vite-project",
  },
  {
    imageSrc: "/portfolio/assets/works/w2.png",
    title: "NSlides",
    description:
      "A website where you can find simple sliders with their demos and their codes in html/css/js",
    category: "REACTJS · SCSS · TAILWINDCSS",
    link: "https://niamorweb.github.io/nslides/",
    codeSource: "https://github.com/niamorweb/nslides",
  },
  {
    imageSrc: "/portfolio/assets/works/w3.png",
    title: "Arch Studio",
    description: "A multipage website with a slider and a great design.",
    category: "REACTJS · SCSS · JS",
    link: "https://niamorweb.github.io/arch-studio/",
    codeSource: "https://github.com/niamorweb/arch-studio",
  },
  {
    imageSrc: "/portfolio/assets/works/w4.png",
    title: "Entertainment web app",
    description:
      "An streaming website to watch films/series with a login/logout interface and the possibily to bookmark films and series that we prefer.",
    category: "REACTJS · SCSS · JS",
    link: "https://entertainment-web-app-five.vercel.app/",
    codeSource: "https://github.com/niamordev/entertainment-web-app/",
  },
  {
    imageSrc: "/portfolio/assets/works/w5.png",
    title: "Photosnap multipage",
    description: "A design multipage website.",
    category: "REACTJS · SCSS · JS",
    link: "https://niamordev.github.io/photosnap-multi-page-website/",
    codeSource: "https://github.com/niamordev/photosnap-multi-page-website",
  },
  {
    imageSrc: "/portfolio/assets/works/w6.png",
    title: "Designo multipage",
    description: "A design multipage website.",
    category: "REACTJS · SCSS · JS",
    link: "https://niamordev.github.io/designo-multipage-website-master/",
    codeSource: "https://github.com/niamordev/designo-multipage-website-master",
  },
  {
    imageSrc: "/portfolio/assets/works/w7.png",
    title: "Countries app",
    description:
      "A website with all countries of the world with their details when we click on them using an API and React.",
    category: "REACTJS · SCSS · JS",
    link: "https://niamordev.github.io/countries-app/",
    codeSource: "https://github.com/niamordev/countries-app/",
  },
  {
    imageSrc: "/portfolio/assets/works/w8.png",
    title: "Space tourism",
    description:
      "A design multipage website for the space lovers using React and with transitions on pages.",
    category: "REACTJS · SCSS · JS",
    link: "https://niamordev.github.io/space-tourism-website-main/",
    codeSource: "https://github.com/niamordev/space-tourism-website-main",
  },
  {
    imageSrc: "/portfolio/assets/works/w9.png",
    title: "Ecommerce single page",
    description: "An e-commerce single page product with a cart integrated.",
    category: "HTML · SCSS · JS",
    link: "https://niamordev.github.io/ecommerce-product-page-main",
    codeSource: "https://github.com/niamordev/ecommerce-product-page-main",
  },
];

// Fonction pour créer un élément HTML avec les données
function createDataElement(data) {
  var element = document.createElement("div");
  element.className =
    "works__work flex flex-col lg:flex-row items-center gap-10 justify-center";
  element.innerHTML = `
  <div class="works__work_img lg:w-1/2 rounded-md overflow-hidden">
    <img
      class="w-full"
      src="${data.imageSrc}"
      alt=""
    />
    </div>
    <div class="lg:w-1/2 flex flex-col self-start  lg:self-end">
      <span class="uppercase text-1 font-semibold">${data.title}</span>
      <span class="text-[20px] lg:text-[32px] mt-3 lg:mt-5">${data.description}</span>
      <span class="text-base lg:text-lg mt-4 lg:mt-7">${data.category}</span>
      <div class="flex flex-col lg:flex-row items-start lg:gap-6 lg:items-center ">
      <a
        href="${data.link}" 
        target="_blank"
        class="works__work_link mt-8 flex items-center text-1 rounded-[100px] border-[1px] border-1 py-2 px-5 w-fit gap-3 text-lg uppercase"
      >
        <span>View website</span>
        <img src="/portfolio/assets/icons/arrow_right.svg" alt=""
      /></a>
            <a
        href="${data.codeSource}"
        target="_blank"
        class="works__work_link mt-5 lg:mt-8 flex items-center text-1 rounded-[100px] border-[1px] border-1 py-2 px-5 w-fit gap-3 text-lg uppercase"
      >
        <span>View code</span>
        <img src="/portfolio/assets/icons/arrow_right.svg" alt=""
      /></a></div>
    </div>
  `;
  return element;
}

// Utiliser la fonction map() pour parcourir les données et créer les éléments HTML correspondants
var dataElements = data.map(createDataElement);

// Ajouter les éléments HTML dans la div "container"
var container = document.querySelector(".works__container_all_works");
dataElements.forEach(function (element) {
  container.appendChild(element);
});
