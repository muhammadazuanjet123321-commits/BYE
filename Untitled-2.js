/*=====================================
 PREMIUM FAREWELL WEBSITE
 script.js
=====================================*/

/*==============================
 LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});


/*==============================
 AOS
==============================*/

AOS.init({

    duration:1200,

    once:true,

    easing:"ease-in-out"

});


/*==============================
 GSAP INTRO
==============================*/

gsap.from(".hero h3",{

    y:-60,

    opacity:0,

    duration:1

});

gsap.from(".hero h1",{

    y:80,

    opacity:0,

    duration:1.3,

    delay:.3

});

gsap.from(".hero p",{

    y:50,

    opacity:0,

    duration:1.3,

    delay:.8

});

gsap.from(".btn",{

    scale:.5,

    opacity:0,

    duration:1,

    delay:1.2

});


/*==============================
 TYPEWRITER HERO
==============================*/

const heroText="Salam Perpisahan";

let heroIndex=0;

function heroTyping(){

    if(heroIndex<heroText.length){

        document.getElementById("typingText").innerHTML += heroText.charAt(heroIndex);

        heroIndex++;

        setTimeout(heroTyping,120);

    }

}

heroTyping();


/*==============================
 MESSAGE TYPEWRITER
==============================*/

const message=`

Kepada seluruh warga ESCATEC,

Terima kasih atas segala ilmu, tunjuk ajar,
sokongan dan persahabatan sepanjang saya
berkhidmat di sini.

Saya amat menghargai setiap detik yang
telah kita lalui bersama.

Sekiranya ada salah dan silap,
saya memohon ampun dan maaf.

Semoga kita semua dipermudahkan
segala urusan dan terus berjaya
dalam kehidupan masing-masing.

Terima kasih atas segalanya.

`;

let msgIndex=0;

function typingMessage(){

    const target=document.getElementById("messageTyping");

    if(msgIndex<message.length){

        target.innerHTML+=message.charAt(msgIndex);

        msgIndex++;

        setTimeout(typingMessage,28);

    }

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typingMessage();

observer.disconnect();

}

})

});

observer.observe(document.querySelector(".message"));


/*==============================
 MUSIC BUTTON
==============================*/

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}else{

music.pause();

playing=false;

musicBtn.innerHTML='<i class="fa-solid fa-volume-high"></i>';

}

});


/*==============================
 PARTICLES
==============================*/

particlesJS("particles-js",{

particles:{

number:{

value:70

},

color:{

value:"#7cdfff"

},

shape:{

type:"circle"

},

opacity:{

value:.4

},

size:{

value:3

},

move:{

enable:true,

speed:1

},

line_linked:{

enable:true,

color:"#6fdcff",

opacity:.2

}

}

});


/*==============================
 SCROLL FADE
==============================*/

window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(".glass-card,.profile-card");

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-120){

card.classList.add("active");

}

})

});


/*==============================
 HERO PARALLAX
==============================*/

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

gsap.to(".hero-content",{

x:x,

y:y,

duration:1

});

});
/*=====================================
 PREMIUM EFFECTS PART 2
=====================================*/

/*==============================
 GLOW CURSOR
==============================*/

const cursor = document.createElement("div");
cursor.className = "cursor-glow";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/*==============================
 3D TILT EFFECT
==============================*/

const tiltCards = document.querySelectorAll(".glass-card,.profile-card");

tiltCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});


/*==============================
 HERO BUTTON RIPPLE
==============================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


/*==============================
 FLOATING HERO
==============================*/

gsap.to(".hero-content",{

y:18,

repeat:-1,

yoyo:true,

duration:3,

ease:"sine.inOut"

});


/*==============================
 GALLERY HOVER
==============================*/

const gallery=document.querySelectorAll(".gallery img");

gallery.forEach(img=>{

img.addEventListener("mouseenter",()=>{

gsap.to(img,{

scale:1.08,

duration:.4

});

});

img.addEventListener("mouseleave",()=>{

gsap.to(img,{

scale:1,

duration:.4

});

});

});


/*==============================
 RANDOM STARS
==============================*/

for(let i=0;i<70;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(star);

}


/*==============================
 FOOTER FADE
==============================*/

gsap.from("footer",{

opacity:0,

y:100,

scrollTrigger:"footer"

});


/*==============================
 HEART CLICK EFFECT
==============================*/

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.className="heart-pop";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1200);

});


/*==============================
 SCROLL PROGRESS BAR
==============================*/

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

progress.style.width=(current/total)*100+"%";

});


/*==============================
 YEAR AUTO
==============================*/

const year=document.querySelector("#year");

if(year){

year.textContent=new Date().getFullYear();

}