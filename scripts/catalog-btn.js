function activ_french() {
    box_french_btn.className = 'catalog-nav-btn-activ';
    french_grid.className = 'catalog-grid-activ';
    box_germany_btn.className = 'catalog-nav-btn';
    germany_grid.className = 'catalog-grid';
    box_england_btn.className = 'catalog-nav-btn';
    england_grid.className = 'catalog-grid';
};
function activ_germany() {
    box_french_btn.className = 'catalog-nav-btn';
    french_grid.className = 'catalog-grid';
    box_germany_btn.className = 'catalog-nav-btn-activ';
    germany_grid.className = 'catalog-grid-activ';
    box_england_btn.className = 'catalog-nav-btn';
    england_grid.className = 'catalog-grid';
};
function activ_england() {
    box_french_btn.className = 'catalog-nav-btn';
    french_grid.className = 'catalog-grid';
    box_germany_btn.className = 'catalog-nav-btn';
    germany_grid.className = 'catalog-grid';
    box_england_btn.className = 'catalog-nav-btn-activ';
    england_grid.className = 'catalog-grid-activ';
};

const french_btn = document.getElementById('french-btn');
const germany_btn = document.getElementById('germany-btn');
const england_btn = document.getElementById('england-btn');

const french_grid = document.getElementById('french-grid');
const germany_grid = document.getElementById('germany-grid');
const england_grid = document.getElementById('england-grid');

const box_french_btn = document.getElementById('box-french-btn');
const box_germany_btn = document.getElementById('box-germany-btn');
const box_england_btn = document.getElementById('box-england-btn');
console.log(french_btn,germany_btn,england_btn);
french_btn.addEventListener('click', activ_french);
germany_btn.addEventListener('click', activ_germany);
england_btn.addEventListener('click', activ_england);
