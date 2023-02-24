const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const nameEl = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    ' <img src="https://i.ibb.co/kybm5w7/e996e273-39d6-40ce-af00-177476d279ca.jpg"/>';
  title.innerHTML = "Opinion about life";
  excerpt.innerHTML = `I painted E.M.Remarque's quote about life, creating a 3D effect and a
  sense of depth. Artwork is made in Russian traditional ligature technique. <br />Canvas, acrylic, brush, d=60 cm.`;
  profileImg.innerHTML =
    '<img src="https://mir-s3-cdn-cf.behance.net/user/230/7c37c41140248245.625ee53d149a0.jpg"/>';
  nameEl.innerHTML = "Julia Koverzneva";
  date.innerHTML = "July 01, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
