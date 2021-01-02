var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};


// preventing form from submit****
var elSearchform = document.querySelector('.js-search-form');
elSearchform.addEventListener('submit', function(evt) {
  evt.preventDefault();
})

/* FIRST WE CREATE SOF DATA TYPES FOR OUR PROJECT...
*/
// GIRLS CHANNEL DATAS ARE HERE
var userChannels = [
  {
    img : 'img/user-pic-one.jpg',
    videoDuration : '4:15',
    title : 'A Brief History of Creation',
    viewAmount : '80k views · 3 days ago',
    author : 'Dollie Blair'
  },
  {
    img : 'img/user-pic-two.jpg',
    videoDuration : '8:00',
    title : 'Select The Right Hotel',
    viewAmount : '123k views · 1 months ago',
    author : 'Dollie Blair'
  },
  {
    img : 'img/user-pic-three.jpg',
    videoDuration : '5:32',
    title : 'Asteroids',
    viewAmount : '43k views · 12 days ago',
    author : 'Dollie Blair'
  },
  {
    img : 'img/user-pic-four.jpg',
    videoDuration : '6:40',
    title : 'Telescopes 101',
    viewAmount : '11k views · 6 months ago',
    author : 'Dollie Blair'
  },
  {
    img : 'img/user-pic-five.jpg',
    videoDuration : '1:45',
    title : 'Medical Care Is Just',
    viewAmount : '18k views · 2 days ago',
    author : 'Dollie Blair'
  },
  {
    img : 'img/user-pic-six.jpg',
    videoDuration : '4:15',
    title : 'Moon Gazing',
    viewAmount : '67k views  ·  4 months ago',
    author : 'Dollie Blair'
  }
];

// RECOMMENDED
var recommendeds = [
  {
    img : 'img/recommend-img-1.jpg',
    videoDuration : '3:40',
    title : 'Dude You Re Getting A Telescope',
    viewAmount : '34k views · 5 months ago',
    author : 'Gussie French'
  },
  {
    img : 'img/recommend-img-2.jpg',
    videoDuration : '2:12',
    title : 'Moon Gazing',
    viewAmount : '54k views  ·  11 months ago',
    author : 'Edward Osborne'
  },
  {
    img : 'img/recommend-img-3.jpg',
    videoDuration : '2:12',
    title : 'Moon Gazing',
    viewAmount : '125k views  ·  4 months ago',
    author : 'Dollie Blair'
  }
];

// FOODS
var foods = [
  {
    img : 'img/food-img-1.jpg',
    videoDuration : '7:36',
    title : 'Astronomy Or Astrology',
    viewAmount : '240k views  ·  4 months ago',
    author : 'Food & Drink'
  },
  {
    img : 'img/food-img-2.jpg',
    videoDuration : '2:19',
    title : 'Advertising Outdoors',
    viewAmount : '13k views  ·  15 days ago',
    author : 'Food & Drink'
  },
  {
    img : 'img/food-img-3.jpg',
    videoDuration : '9:05',
    title : 'Radio Astronomy',
    viewAmount : '1k views  ·  11 months ago',
    author : 'Food & Drink'
  },
  {
    img : 'img/food-img-4.jpg',
    videoDuration : '3:40',
    title : 'A Good Autoresponder',
    viewAmount : '45k views  ·  2 months ago',
    author : 'Food & Drink'
  },
  {
    img : 'img/food-img-5.jpg',
    videoDuration : '1:56',
    title : 'Baby Monitor Technology',
    viewAmount : '86k views  ·  7 days ago',
    author : 'Food & Drink'
  },
  {
    img : 'img/food-img-6.jpg',
    videoDuration : '4:15',
    title : 'Asteroids',
    viewAmount : '123k views  ·  4 months ago',
    author : 'Food & Drink'
  }
]


//WORKING WITH DOM
var elSiteMain = document.querySelector('.js-site-main');

if (elSiteMain) {
  var elUserList = elSiteMain.querySelector('.js-user__list');
  var elRecommendedList = elSiteMain.querySelector('.js-recommended-list');
  var elFoodList = elSiteMain.querySelector('.js-food-list');
}

var elUserItemTemplate = document.querySelector('.js-user-item-template').content;
var elRecomItemTemplate = document.querySelector('.js-recommended-item-template').content;
var elFoodItemTemplate = document.querySelector('.js-food-item-template').content;

// USER CHANNEL\\
var userFragment = document.createDocumentFragment();
userChannels.forEach(function(userChannel) {
  var userItem = elUserItemTemplate.cloneNode(true);
  $_('.user-video__img', userItem).src = userChannel.img;
  $_('.user-video__time', userItem).textContent = userChannel.videoDuration;
  $_('.user-video__title', userItem).textContent = userChannel.title;
  $_('.user-video__view-amount', userItem).textContent = userChannel.viewAmount;
  $_('.user-video__author', userItem).textContent = userChannel.author;

  userFragment.appendChild(userItem);

  elUserList.appendChild(userFragment);
})


// RECOMMENDED PART
var recommendedFragment = document.createDocumentFragment();
recommendeds.forEach(function(recommended) {
  var recommendedItem = elRecomItemTemplate.cloneNode(true);
  $_('.recommended__img', recommendedItem).src = recommended.img;
  $_('.recommended__video-duration', recommendedItem).textContent = recommended.videoDuration;
  $_('.recommended__video-title', recommendedItem).textContent = recommended.title;
  $_('.recommended__time', recommendedItem).textContent = recommended.viewAmount;
  $_('.recommended__video-author', recommendedItem).textContent = recommended.author;

  recommendedFragment.appendChild(recommendedItem);

  elRecommendedList.appendChild(recommendedFragment);
})

//FOODS
var foodsFragment = document.createDocumentFragment();
foods.forEach(function(food) {
  var foodItem = elFoodItemTemplate.cloneNode(true);
  $_('.food-video__img', foodItem).src = food.img;
  $_('.food-video__time', foodItem).textContent = food.videoDuration;
  $_('.food-video__title', foodItem).textContent = food.title;
  $_('.food-video__view-amount', foodItem).textContent = food.viewAmount;
  $_('.food-video__author', foodItem).textContent = food.author;

  foodsFragment.appendChild(foodItem);

  elFoodList.appendChild(foodsFragment);
})
