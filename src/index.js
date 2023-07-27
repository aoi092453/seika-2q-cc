import JustValidate from 'just-validate';

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const validator = new JustValidate('#basic_form');

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let swiperTitle = document.getElementById('swiper-title');
let titleText = 'スライド' + swiper.realIndex +  'を表示しています。';
let titleElement = document.createTextNode(titleText);
swiperTitle.appendChild(titleElement);

swiper.on('slideChange', function () {
  console.log('slide changed');

  console.log(swiper.realIndex);
  
  if(titleElement){
    titleElement.remove();
  }
let titleText = 'スライド' + swiper.realIndex +  'を表示しています。';
titleElement = document.createTextNode(titleText);
swiperTitle.appendChild(titleElement);
  
});



const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titleList = [
  '1つめのタイトル',
  '2つめのタイトル',
  '3つめのタイトル',
  '4つめのタイトル',
];

let swiperTitle2 = document.getElementById('swiper-title2');
let titleText2 = titleList[swiper2.realIndex];
let titleElement2 = document.createTextNode(titleText2);
swiperTitle2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  console.log('slide changed');

  console.log(swiper.realIndex);
  
  if(titleElement2){
    titleElement2.remove();
  }
  let titleText = titleList[swiper2.realIndex];
  titleElement2 = document.createTextNode(titleText);
  swiperTitle2.appendChild(titleElement2);
  
});




validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])
  .onSuccess(onSuccess);

  function onSuccess(event){
    console.log("onsucc", event.target)
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));
  }