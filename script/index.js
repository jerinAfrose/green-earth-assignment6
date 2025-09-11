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

// load every tree
const loadSingleTree = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displaySingleTree(data.plants);
    });
};

// load tree details
const loadTreeDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayTreeDetails(details.plants);
};

const displayTreeDetails = (tree) => {
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div class="bg-white p-4 space-y-4">
              <img class="w-[280px] h-[350px] object-cover rounded-xl" src="${tree.image}" alt="" />
              <h2 class="font-semibold">${tree.name}</h2>
              <p class="text-sm font-light">${tree.description}</p>
              <div class="flex justify-between">
                <button
                  class="btn p-1 rounded-2xl py-0 bg-[#dcfce7] border-none text-green-900"
                >${tree.category}</button>
                <p>৳${tree.price}</p>
              </div>
            </div>
  `;
  document.getElementById("tree_modal").showModal();
};

const displayTrees = (trees) => {
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
  trees.forEach((tree) => {
    //console.log(tree);
    const plantCard = document.createElement("div");
    plantCard.innerHTML = `
    <div class="bg-white p-4 space-y-4">
              <img class="w-[280px] h-[350px] object-cover rounded-xl" src="${tree.image}" alt="" />
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

const displaySingleTree = (plants, id) => {
  const singleTreeContainer = document.getElementById(`plant-container-${id}`);
  singleTreeContainer.innerHTML = "";
  plants.forEach((plant) => {
    const treeCard = document.createElement("div");
    treeCard.innerHTML = `
    <div class="bg-white p-4 space-y-4">
              <img class="w-[280px] h-[350px] object-cover rounded-xl" src="${plant.image}" alt="" />
              <h2 class="font-semibold">${plant.name}</h2>
              <p class="text-sm font-light">${plant.description}</p>
              <div class="flex justify-between">
                <button
                  class="btn p-1 rounded-2xl py-0 bg-[#dcfce7] border-none text-green-900"
                >${plant.category}</button>
                <p>৳${plant.price}</p>
              </div>
              <button class="btn w-full rounded-3xl bg-[#15803d] text-white">
                Add to Cart
              </button>
            </div>
    `;
    singleTreeContainer.append(treeCard);
  });
};

const displayCategory = (categoriess) => {
  const categoryContainer = document.getElementById("category-container");
  // categoryContainer.innerHTML = "";
  for (let category of categoriess) {
    // console.log(category);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button onclick="loadSingleTree('${category.category}')" id="plant-container-${category.category}"  class="w-full btn btn-outline border-none hover:bg-[#15803d] hover:text-white">${category.category_name}
    </button>
    `;
    categoryContainer.append(categoryDiv);
  }
};
const btn = document.getElementById("all-tree-btn");
btn.addEventListener("click", function allTreeBtn() {
  loadCategory();
});
loadTrees();
loadTreeDetail();
