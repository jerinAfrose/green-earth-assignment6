// category load
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategory(json.categories));
};

function allTreeBtn() {
  loadCategory();
}
document.addEventListener("click", function () {
  const btn = document.getElementById("all-tree-btn");
  btn.addEventListener("click", allTreeBtn());
});

const displayCategory = (categoriess) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";
  for (let category of categoriess) {
    console.log(category);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="category-btn-${category.category_name}">${category.category_name}
    </button>
    `;
    categoryContainer.append(categoryDiv);
  }
};
