// 메뉴 데이터 (섹션별로)
const menuData = {
    //MATCHA
  "Matcha & Hojicha (One Size)": [
    {
      name: "Ceremonial Matcha",
      description: "AAA+ Piohni",
      price: "49 DKK",
      image: "/Menu Image/DR-MAT-1.png"
    },
    {
      name: "Hot Matcha Latte",
      description: "With oat milk",
      price: "55 DKK",
      image: "/Menu Image/DR-MAT-2.png"
    },
    {
      name: "Classic Iced Matcha",
      description: "With oat milk",
      price: "55 DKK",
      image: "/Menu Image/DR-MAT-3.png"
    },
    {
      name: "Vanila Matcha",
      description: "Organic Vanila Syrup",
      price: "59 DKK",
      image: "/Menu Image/DR-MAT-4.png"
    },
    {
      name: "Strawberry Matcha",
      description: "Studs' best seller",
      price: "59 DKK",
      image: "/Menu Image/DR-MAT-5.png"
    },
    {
      name: "Blueberry Matcha",
      description: "Handmade blueberry syrup",
      price: "59 DKK",
      image: "/Menu Image/DR-MAT-6.png"
    },
    {
      name: "Banana Matcha",
      description: "Handmade Banana syrup",
      price: "59 DKK",
      image: "/Menu Image/DR-MAT-7.png"
    },
    {
      name: "Studs Special Matcha",
      description: "Customize your own matcha",
      price: "59 DKK",
      image: "/Menu Image/DR-MAT-8.png"
    },
    {
      name: "Hojicha Latte",
      description: "100% Japanese quality",
      price: "55 DKK",
      image: "/Menu Image/DR-MAT-9.png"
    },
    {
      name: "Salted Caramel Hojicha",
      description: "100% Danish sea salt",
      price: "55 DKK",
      image: "/Menu Image/DR-MAT-10.png"
    },
    {
      name: "Cream Cloud",
      description: "_ADD-ONS: Whipped cream",
      price: "10 DKK",
      image: "/Menu Image/DR-M-ADD-1.png"
    },
    {
      name: "Lion Mane",
      description: "_ADD-ONS: Collagen shot",
      price: "10 DKK",
      image: "/Menu Image/DR-M-ADD-3.png"
    },
  ],

  //HOT DRINKS
  "Hot Drinks (Small/ Large)": [
    {
      name: "Double Espresso",
      description: "100% organic coffee beans",
      price: "25 DKK",
      image: "/Menu Image/DR-HOT-1.png"
    },
    {
      name: "Cortado",
      description: "100% organic coffee beans",
      price: "35 DKK",
      image: "/Menu Image/DR-HOT-2.png"
    },
    {
      name: "Flat White",
      description: "100% organic coffee beans",
      price: "38 DKK",
      image: "/Menu Image/DR-HOT-3.png"
    },
    {
      name: "Latte",
      description: "100% organic coffee beans",
      price: "42/ 49 DKK",
      image: "/Menu Image/DR-HOT-4.png"
    },
    {
      name: "Capuccino",
      description: "100% organic coffee beans",
      price: "42/ 49 DKK",
      image: "/Menu Image/DR-HOT-5.png"
    },
    {
      name: "Americano",
      description: "100% organic coffee beans",
      price: "35/ 42 DKK",
      image: "/Menu Image/DR-HOT-6.png"
    },
    {
      name: "Filter Coffee",
      description: "100% organic coffee beans",
      price: "29/ 35 DKK",
      image: "/Menu Image/DR-HOT-7.png"
    },
    {
      name: "Chai Latte",
      description: "100% organic chai",
      price: "45 DKK",
      image: "/Menu Image/DR-HOT-8.png"
    },
    {
      name: "Hot Chocolate",
      description: "100% fair trade chocolate",
      price: "45 DKK",
      image: "/Menu Image/DR-HOT-9.png"
    },
  ],

 //COLD DRINKS
  "Cold Drinks (One Size)": [
    {
      name: "Iced Americano",
      description: "100% Korean's favorite",
      price: "30 DKK",
      image: "/Menu Image/DR-COLD-1.png"
    },
    {
      name: "Iced Latte",
      description: "100% organic coffee beans",
      price: "30 DKK",
      image: "/Menu Image/DR-COLD-2.png"
    },
    {
      name: "Iced Chai Latte",
      description: "100% organic chai",
      price: "30 DKK",
      image: "/Menu Image/DR-COLD-3.png"
    },
    {
      name: "Oat Milk",
      description: "_ADD-ONS",
      price: "5 DKK",
      image: "/Menu Image/DR-C-ADD-2.png"
    },
    {
      name: "Extra Espresso Shot",
      description: "_ADD-ONS",
      price: "8 DKK",
      image: "/Menu Image/DR-C-ADD-3.png"
    },
  ],
  //ORGANIC HERBS
  "Organic Tea & Herbal Blends": [
    {
      name: "Green Tea",
      description: "100% Organic",
      price: "39 DKK",
      image: "/Menu Image/DR-TEA-1.png"
    },
    {
      name: "Black Tea",
      description: "99% Organic",
      price: "39 DKK",
      image: "/Menu Image/DR-TEA-2.png"
    },
    {
      name: "Herbal Tea",
      description: "98% Organic",
      price: "39 DKK",
      image: "/Menu Image/DR-TEA-3.png"
    },
  ],
  //PASTRIES
  "Pastries": [
    {
      name: "Croissant",
      description: "with chocolate inside",
      price: "32 DKK",
      image: "/Menu Image/BR-1.png"
    },
    {
      name: "BMO",
      description: "Cheese from a local brand",
      price: "45 DKK",
      image: "/Menu Image/BR-2.png"
    },
    {
      name: "Snurrer",
      description: "Danes' favorite",
      price: "45 DKK",
      image: "/Menu Image/BR-3.png"
    },
    {
      name: "CanelSnurrer",
      description: "Danes' second favorite",
      price: "45 DKK",
      image: "/Menu Image/BR-4.png"
    },
  ]
};

// Select Container
const menuContainer = document.getElementById("menu-container");

// Object Loop 
Object.keys(menuData).forEach(category => {
  const section = document.createElement("section");
  section.classList.add("menu-section");

  // Section title
  const title = document.createElement("h2");
  title.classList.add("section-title")
  title.textContent = category;
  section.appendChild(title);

  // Menu Items
  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      
      <img src="${item.image}" alt="${item.name}" loading="lazy"/>
    
      <div class="menu-info">
        <h3 class="item-name">${item.name}</h3>
        <p class="description">${item.description}</p>
        <p class="price">${item.price}</p>
      </div>
    `;

    section.appendChild(menuItem);
  });

  menuContainer.appendChild(section);
});

const filterButtons = document.querySelectorAll(".filter-bar button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const targetSection = Array.from(document.querySelectorAll(".menu-section"))
                               .find(section => section.querySelector(".section-title").textContent === targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    filterButtons.forEach(btn => btn.classList.remove("active"));
    btn.classList.add("active");
  });
});
