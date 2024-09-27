const imgMain = document.querySelector('#imgMain');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img1Url = img1.src;
const img2Url = img2.src;
const img3Url = img3.src;
const imgs = [img1, img2, img3]

function switchUrl(e){
  imgMain.src = e.target.src;
}

imgs.forEach(img => {
  img.addEventListener('click', switchUrl);
});
