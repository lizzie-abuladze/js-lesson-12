const data = [
  {
    id: 1,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dh4kldk-b088ecb8-c7b4-41ce-a752-d84d36c03f80.jpg/v1/fill/w_1192,h_670,q_70,strp/kung_fu_panda_4_po___live_wallpaper_for_pc_by_favorisxp_dh4kldk-pre.jpg",
    title: "PO in peace",
  },
  {
    id: 2,
    imageUrl:
      "https://wizarddojo.com/wp-content/uploads/2024/08/kung-fu-panda-4.jpeg",
    title: "PO wants to fight",
  },
  {
    id: 3,
    imageUrl:
      "https://getwallpapers.com/wallpaper/full/c/5/a/1007814-kung-fu-wallpaper-1920x1227-for-iphone.jpg",
    title: "slay PO",
  },
  {
    id: 4,
    imageUrl: "https://wallpaper.dog/large/5540381.jpg",
    title: "PO is always hungry",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

function createDiv() {
  let divEl = document.createElement("div");
  return divEl;
}

function createTitle(item) {
  let titleEl = document.createElement("h2");
  titleEl.innerText = item.title;

  return titleEl;
}

function createImgTag(item) {
  //   const imageEl = document.createElement("img");
  //   imageEl.setAttribute("src", item.imageUrl);
  //   imageEl.classList.add("image-el");

  //   return imageEl;

  const bgImage = document.createElement("div");
  bgImage.style.backgroundImage = `url(${item.imageUrl})`;
  bgImage.classList.add("bg-image");

  return bgImage;
}

// main slider function
function setSlide() {
  sliderContent.innerHTML = " ";
  console.log(data[sliderIndex]);

  const divNewSlide = createDiv(); // div
  const imageNewSlide = createImgTag(data[sliderIndex]); //img
  const titleNewSlide = createTitle(data[sliderIndex]); //title h2

  divNewSlide.appendChild(imageNewSlide);
  divNewSlide.appendChild(titleNewSlide);
  sliderContent.appendChild(divNewSlide);
}
setSlide();

// new slide

function arrowClickLeft() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    setSlide();
    return;
  }
  sliderIndex--;
  setSlide();
}

function arrowClickRight() {
  if (sliderIndex >= data.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  setSlide();
}

arrowLeft.addEventListener("click", arrowClickLeft);

arrowRight.addEventListener("click", arrowClickRight);

// setInterval(()=> {
//     arrowClickRight();
// }, 3000)
