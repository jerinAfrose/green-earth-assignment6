// category load
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

// load trees
const loadTrees = (id) => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayTrees(data.plants);
    });
};

const displayTrees = (trees) => {
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
  trees.forEach((tree) => {
    //console.log(tree);
    const plantCard = document.createElement("div");
    plantCard.innerHTML = `
    <div class="bg-white p-4 space-y-4">
              <img class="rounded-xl" src="${tree.image}" alt="" />
              <h2 class="font-semibold">${tree.name}</h2>
              <p class="text-sm font-light">${tree.description}</p>
              <div class="flex justify-between">
                <button
                  class="btn p-1 rounded-2xl py-0 bg-[#dcfce7] border-none text-green-900"
                >${tree.category}</button>
                <p>৳${tree.price}</p>
              </div>
              <button class="btn w-full rounded-3xl bg-[#15803d] text-white">
                Add to Cart
              </button>
            </div>
    `;
    plantContainer.append(plantCard);
  });
};

const displayCategory = (categoriess) => {
  const categoryContainer = document.getElementById("category-container");
  // categoryContainer.innerHTML = "";
  for (let category of categoriess) {
    console.log(category);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="category-btn-${category.category_name}" class="w-full btn btn-outline border-none hover:bg-[#15803d] hover:text-white">${category.category_name}
    </button>
    `;
    categoryContainer.append(categoryDiv);
  }
};
function allTreeBtn() {
  loadCategory();
  loadTrees();
}
document.addEventListener("click", function () {
  const btn = document.getElementById("all-tree-btn");
  btn.addEventListener("click", allTreeBtn());
});
