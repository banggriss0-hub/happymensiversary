const typedText = document.getElementById("typedText");
const playBtn = document.getElementById("playBtn");
const bgm = document.getElementById("bgm");
const slides = document.querySelectorAll(".slide");

const messages = [
  "Hari ini… terasa istimewa 🌸",
  "Tujuh bulan penuh cinta dan kenangan 💕",
  "Terima kasih sudah bertahan bersamaku 🤍",
  "Kita tertawa, kita berjuang, kita tumbuh 🌷",
  "Kamu bukan hanya cinta, tapi rumahku 🏡",
  "Aku mau bilang sesuatu, tapi tunggu ini panjang bangettt, kamu siap siap yaa bacanya, bersiapp, bentarrr lagiii keluar ketikanya dari Ariss palingg guantengg di dunia dan di akhirat nantii hehee,   1            2            3",
  
  " HALOOO GEMBULL SAYANGGKUUU Iii loovveee youuu todaaayy, tomorrowww foreverrrrr.. makaasiiii udaaaaa hadiiirr diidupppkuu, berteemuu dengaannnmuuu adalaaaahhh halll yaanggg taaakkk pernaaahhku bayaanggkaaann sebeluuummmyaaa, begituuuu berunttuunnggnyaaa akuuuu.. bahagiiiaaaa saattt bersamammuuuu tidaaaa bisaaaaa dideskripsikaannn kayaaa majalahhh, karenaaaa gembulll adalaaahh salaaahh satuuu bentuuukk bahagiiiaaa yaangg akuuu impikaaann, jikaaaa bukaannn gembullll oraanggnyaaa akuuu gaakaann bisaaa ngerasaaiiinn yaanggg namannyaaa cinta dannn gaakaaannn pernaaahh tauuu bahwaaaa akuuuu layaakk dicintaaaiii sebaiikk dannn sesayaanggg iniii, cintakuuuu begituuu besaarrr untukkmmuuu, sertaaaa kasiiiihh sayaanggkuuu jugaaaa, cipitttt haraapppp, gembulll punn begituuu mencintaaiiikkuu dannn teruuusss menjagaaaa cipittt dannn terussss sayaaangggg samaaa Arisss cipittt... i loveeee uuu sayaaaanggggkuu babyyy ceboollll mmwwaaahhhh disimpeeeennn yaaahhh diingeettt okkkaayyy sayaaangggg??? jangaann sampeeee diapuuss yaahh textt dariii Arisss cipittt iniiii.. meskipuunnn sekedaarrr ketikaaannn, namunnn inii menggambarrkaann rasaaa kasiii sayaanggkuuu padammuuu sayaaanggg, fix u andd i proud of u babbyyyyy 🤍🤍🫂🫂💖",
];

let slideIndex = 0;
let typingSpeed = 55;

// efek teks mengetik
async function typeMessage(msg) {
  typedText.textContent = "";
  for (let i = 0; i < msg.length; i++) {
    typedText.textContent += msg[i];
    await new Promise(res => setTimeout(res, typingSpeed));
  }
  await new Promise(res => setTimeout(res, 1000));
}

// tampilkan semua pesan satu per satu
async function showMessages() {
  for (let msg of messages) {
    await typeMessage(msg);
  }
  typedText.textContent = "💞 SEMOGAA LANGENG TERUSS YAA SAMPE NIKAH, SAMPE MAUT MEMISAHKAN, SAMPEE PUNYA ANAK SEPULUHH HEHEE 💞";
}

// slideshow berganti otomatis
function startSlideshow() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

// klik tombol mulai
playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  bgm.play();
  slides[0].classList.add("active");
  setInterval(startSlideshow, 4000);
  showMessages();
});