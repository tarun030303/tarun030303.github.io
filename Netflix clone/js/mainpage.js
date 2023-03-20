const magnifyingglassEl = document.querySelector(".magnifying-glass");
const searchcontainerEl = document.querySelector(".search-container");
const inputEl = document.querySelector("input");
const myvideo = document.querySelector("#myvideo");
const mainbackground = document.querySelector(".main-background");

// to play the video in background
  mainbackground.onclick = function() {
    console.log("loaded"); 
    setTimeout(() => {
        myvideo.play();
      }, 5000);
         console.log("loaded"); 
  };

magnifyingglassEl.addEventListener("click",hide);

window.removeEventListener("click",hide);

function hide(){
    searchcontainerEl.classList.toggle("hide");
    inputEl.classList.toggle("hide");
}

const genredropdownEl = document.querySelector(".genre-dropdown");
const genresbtnEl = document.querySelector(".genres-btn");

genresbtnEl.addEventListener("click",function(){
    genredropdownEl.classList.toggle("hide-genre-dropdown")
})


// const genredropdownEl = document.querySelector(".genre-dropdown");
// const genresbtnEl = document.querySelector(".genres-btn");

// if(genresbtnEl.addEventListener("click")){
//     update();
// }
// // else{
// //     windwel();
// // }
// function update(){
// genredropdownEl.classList.toggle("hide-genre-dropdown")
// }

// function windwel(){
//     genredropdownEl.classList.add("hide-genre-dropdown")
//     }

// window.addEventListener("click");

const subheaderEl = document.querySelector(".sub-header");
const mainheaderEl = document.querySelector(".main-header");
// const bodyEl = document.querySelector("body");

let x;
document.body.onscroll = function( event ) {
    x = window.pageYOffset;
    // console.log(x);
    if(x>=55){
    subheaderEl.style.backgroundColor = "#141414";
    subheaderEl.style.top = "0";
    if(x>400){
        myvideo.pause();
    }
}
    else{
        subheaderEl.style.background ="transparent";
        subheaderEl.style.top = "60px";
    }
    if(x<300){
        myvideo.play();
    }
} ;


// const notificationcontainerEl = document.querySelector(".notification-container");
// const bellEl = document.querySelector(".bell");
// const first = document.querySelectorAll(".first");

// bellEl.addEventListener("mouseover",function(){
    
//     notificationcontainerEl.classList.remove("hide-notification");
// })


// bellEl.addEventListener("mouseout",function(){
    
//     notificationcontainerEl.classList.add("hide-notification");
// })

// first.addEventListener("mouseover",function(){
//     notificationcontainerEl.classList.remove("hide-notification");
// })


// for arrows slider

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const secondcontainer = document.querySelector(".second-container1")
const imgcontainer = document.querySelector(".img-container1");
const images = document.querySelectorAll(".image1");
const lengths = images.length;
console.log(lengths)
let slideno1 = 6;
// console.log(lengths)
right.addEventListener("click",()=>{
    if(slideno1 < lengths){
        // console.log(slideno);
        if((lengths-slideno1) < 6){
        let slideno = (lengths-slideno1);
        slideno1 = slideno1 - 6;
        // console.log(slideno);
        imgcontainer.style.transform = `translateX(-${((slideno1)*185)+(slideno*185)}px)`
        slideno1= lengths;
        }
        else{
            imgcontainer.style.transform = `translateX(-${(slideno1)*185}px)`
            // console.log(slideno)
        if((lengths-slideno1) > 6){

            slideno1 = slideno1 + 6;
        }
        }
    }
})

left.addEventListener("click",()=>{
        if(slideno1 > 12){
            console.log(slideno1)
            imgcontainer.style.transform = `translateX(-${(slideno1-12)*185}px)`
            slideno1 = slideno1 - 6;
            console.log(slideno1)

        }
        else{
            imgcontainer.style.transform = `translateX(0px)`
            slideno1 = 6;
        }
})

const images2 = document.querySelectorAll(".image2");
const right2 = document.querySelector(".right2");
const left2 = document.querySelector(".left2");
const imgcontainer2 = document.querySelector(".img-container2")
const lengths2 = images2.length;

let slideno2 = 6;
// console.log(lengths)
right2.addEventListener("click",()=>{
    if(slideno2 < lengths2){
        // console.log(slideno);
        if((lengths2-slideno2) < 6){
        let slideno = (lengths2-slideno2);
        slideno2 = slideno2 - 6;
        // console.log(slideno);
        imgcontainer2.style.transform = `translateX(-${((slideno2)*185)+(slideno*185)}px)`
        slideno2= lengths2;
        }
        else{
            imgcontainer2.style.transform = `translateX(-${(slideno2)*185}px)`
            // console.log(slideno)
        if((lengths2-slideno2) > 6){

            slideno2 = slideno2 + 6;
        }
        }
    }
})

left2.addEventListener("click",()=>{
        if(slideno2 > 12){
            console.log(slideno2)
            imgcontainer2.style.transform = `translateX(-${(slideno2-12)*185}px)`
            slideno2 = slideno2 - 6;
            console.log(slideno2)

        }
        else{
            imgcontainer2.style.transform = `translateX(0px)`
            slideno2 = 6;
        }
})

const images3 = document.querySelectorAll(".image3");
const right3 = document.querySelector(".right3");
const left3 = document.querySelector(".left3");
const imgcontainer3 = document.querySelector(".img-container3")
const lengths3 = images3.length;

let slideno3 = 6;
// console.log(lengths)
right3.addEventListener("click",()=>{
    if(slideno3 < lengths3){
        // console.log(slideno);
        if((lengths3-slideno3) < 6){
        let slideno = (lengths3-slideno3);
        slideno3 = slideno3 - 6;
        console.log(slideno);
        imgcontainer3.style.transform = `translateX(-${((slideno3)*185)+(slideno*185)}px)`
        slideno3= lengths2;
        }
        else{
            imgcontainer3.style.transform = `translateX(-${(slideno3)*185}px)`
            // console.log(slideno)
        if((lengths3-slideno3) > 6){

            slideno3 = slideno3 + 6;
        }
        }
    }
})

left3.addEventListener("click",()=>{
        if(slideno3 > 12){
            console.log(slideno3)
            imgcontainer3.style.transform = `translateX(-${(slideno3-12)*185}px)`
            slideno3 = slideno3 - 6;
            console.log(slideno3)

        }
        else{
            imgcontainer3.style.transform = `translateX(0px)`
            slideno3 = 6;
        }
})


const images4 = document.querySelectorAll(".image4");
const right4 = document.querySelector(".right4");
const left4 = document.querySelector(".left4");
const imgcontainer4 = document.querySelector(".img-container4")
const lengths4 = images4.length;

let slideno4 = 6;
// console.log(lengths)
right4.addEventListener("click",()=>{
    if(slideno4 < lengths4){
        // console.log(slideno);
        if((lengths4-slideno4) < 6){
        let slideno = (lengths4-slideno4);
        slideno4 = slideno4 - 6;
        // console.log(slideno);
        imgcontainer4.style.transform = `translateX(-${((slideno4)*185)+(slideno*185)}px)`
        slideno4= lengths4;
        }
        else{
            imgcontainer4.style.transform = `translateX(-${(slideno4)*185}px)`
            // console.log(slideno)
        if((lengths4-slideno4) > 6){

            slideno4 = slideno4 + 6;
        }
        }
    }
})

left4.addEventListener("click",()=>{
        if(slideno4 > 12){
            console.log(slideno4)
            imgcontainer4.style.transform = `translateX(-${(slideno4-12)*185}px)`
            slideno4 = slideno4 - 6;
            console.log(slideno4)

        }
        else{
            imgcontainer4.style.transform = `translateX(0px)`
            slideno4 = 6;
        }
})


const images5 = document.querySelectorAll(".image5");
const right5 = document.querySelector(".right5");
const left5 = document.querySelector(".left5");
const imgcontainer5 = document.querySelector(".img-container5")
const lengths5 = images5.length;

let slideno5 = 6;
// console.log(lengths)
right5.addEventListener("click",()=>{
    if(slideno5 < lengths5){
        // console.log(slideno);
        if((lengths5-slideno5) < 6){
        let slideno = (lengths5-slideno5);
        slideno5 = slideno5 - 6;
        // console.log(slideno);
        imgcontainer5.style.transform = `translateX(-${((slideno5)*185)+(slideno*185)}px)`
        slideno5 = lengths5;
        }
        else{
            imgcontainer5.style.transform = `translateX(-${(slideno5)*185}px)`
            // console.log(slideno)
        if((lengths5-slideno5) > 6){

            slideno5 = slideno5 + 6;
        }
        }
    }
})

left5.addEventListener("click",()=>{
        if(slideno5 > 12){
            console.log(slideno5)
            imgcontainer5.style.transform = `translateX(-${(slideno5-12)*185}px)`
            slideno5 = slideno5 - 6;
            console.log(slideno5)

        }
        else{
            imgcontainer5.style.transform = `translateX(0px)`
            slideno5 = 6;
        }
})

/// video player array

// const trailers = [
//     "videos/Wednesday Addams _ Official Teaser _ Netflix.mp4",
//     "videos/365 Days_ This Day _ Official Trailer _ Netflix.mp4",
//     "videos/A Boy Called Christmas _ Official Trailer _ Netflix.mp4",
//     "videos/Enola Holmes 2 _ Official Trailer_ Part 1 _ Netflix.mp4",
//     "videos/Stranger Things 4 _ Official Trailer _ Netflix.mp4",
//     "videos/Elite Season 4 _ Official English Trailer 4K _ English Trailer.mp4",
//     "videos/YOU S2 _ Official Trailer _ Netflix.mp4",
//     "videos/THE MIDNIGHT CLUB _ Official Trailer _ Netflix.mp4",
//     "videos/Daniel Spellbound _ NEW Series Official Trailer _ Netflix After School.mp4",
//     "videos/Squid Game _ Official Trailer _ Netflix.mp4",
//     "videos/Black Adam – Official Trailer 1.mp4",
//     "videos/Marvel Studios’ Black Panther_ Wakanda Forever _ Official Trailer.mp4",
//     "videos/ANNABELLE_ CREATION - Official Trailer.mp4",
//     "videos/JUMANJI_ THE NEXT LEVEL - Official Trailer (HD).mp4",
//     "videos/Manike (Full Video)- Thank God - Nora,Sidharth- Tanishk,Yohani,Jubin,Surya R -Rashmi Virag-Bhushan K.mp4",
//     "videos/Marvel Studios’ Guardians of the Galaxy Volume 3 _ Official Trailer.mp4",
//     "videos/Moana Official Trailer.mp4",
//     "videos/The Spiderwick Chronicles (2008) Trailer #1 _ Movieclips Classic Trailers.mp4",
//     "videos/Slumberland _ Official Teaser _ Jason Momoa _ Netflix.mp4",
//     "videos/Ozark _ Official Trailer [HD] _ Netflix.mp4",
//     "videos/Vikings Season 1 Trailer.mp4",
//     "videos/Delhi Crime_ Season 2 _ Official Trailer _ Netflix India.mp4",
//     "videos/House of Cards _ Series Trailer [HD] _ Netflix.mp4",
//     "videos/Baahubali 2 - The Conclusion _ Official Trailer (Hindi) _ S.S. Rajamouli _ Prabhas _ Rana Daggubati.mp4",
//     "videos/Tanhaji_ The Unsung Warrior - Official Trailer 2 _ Ajay D, Saif Ali K, Kajol _ Om Raut _ 10 Jan 2020.mp4",
//     "videos/Drishyam 2_ OFFICIAL TRAILER _ Ajay Devgn Akshaye Khanna Tabu Shriya Saran Abhishek Pathak Bhushan K.mp4",
//     "videos/Luka Chuppi Official Trailer _ Kartik Aaryan,Kriti Sanon,Pankaj Tripathi,Aparshakti Khurana_ 1 March.mp4",
//     "videos/Monica, O My Darling _ Rajkummar Rao, Huma Qureshi, Radhika Apte _ Official Trailer _ Netflix India.mp4",
//     "videos/One Night Stand Official Trailer _ Sunny Leone, Tanuj Virwani _ T-Series.mp4",
//         "videos/Lockwood & Co. _ Official Trailer _ Netflix.mp4",
//          "videos/Money Heist_ Part 5 Vol. 2 _ Official English Trailer _ Netflix.mp4",
//          "videos/Brahmastra.Part.One.-.Shiva.2022.Hindi.720p.WEB-DL.ESub.-.Vegamovies.to.mkv",
//     "videos/Pirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.1080p.BrRip.x264.Deceit.YIFY.mp4",

// ];




const trailers = {
        0 : "videos/Wednesday Addams _ Official Teaser _ Netflix.mp4",
        1 : "videos/365 Days_ This Day _ Official Trailer _ Netflix.mp4",
        2 : "videos/A Boy Called Christmas _ Official Trailer _ Netflix.mp4",
        3 : "videos/Enola Holmes 2 _ Official Trailer_ Part 1 _ Netflix.mp4",
        4 : "videos/Stranger Things 4 _ Official Trailer _ Netflix.mp4",
        5 : "videos/Elite Season 4 _ Official English Trailer 4K _ English Trailer.mp4",
        6 : "videos/YOU S2 _ Official Trailer _ Netflix.mp4",
        7 : "videos/THE MIDNIGHT CLUB _ Official Trailer _ Netflix.mp4",
        8 : "videos/Daniel Spellbound _ NEW Series Official Trailer _ Netflix After School.mp4",
        9 : "videos/Squid Game _ Official Trailer _ Netflix.mp4",
        10 : "videos/Black Adam – Official Trailer 1.mp4",
        11 : "videos/Marvel Studios’ Black Panther_ Wakanda Forever _ Official Trailer.mp4",
        12 : "videos/ANNABELLE_ CREATION - Official Trailer.mp4",
        13 : "videos/JUMANJI_ THE NEXT LEVEL - Official Trailer (HD).mp4",
        14 : "videos/Manike (Full Video)- Thank God - Nora,Sidharth- Tanishk,Yohani,Jubin,Surya R -Rashmi Virag-Bhushan K.mp4",
        15 : "videos/Marvel Studios’ Guardians of the Galaxy Volume 3 _ Official Trailer.mp4",
        16 : "videos/Moana Official Trailer.mp4",
        17 : "videos/The Spiderwick Chronicles (2008) Trailer #1 _ Movieclips Classic Trailers.mp4",
        18 : "videos/Slumberland _ Official Teaser _ Jason Momoa _ Netflix.mp4",
        19 : "videos/Ozark _ Official Trailer [HD] _ Netflix.mp4",
        20 : "videos/Vikings Season 1 Trailer.mp4",
        21 : "videos/Delhi Crime_ Season 2 _ Official Trailer _ Netflix India.mp4",
        22 : "videos/House of Cards _ Series Trailer [HD] _ Netflix.mp4",
        23 : "videos/Baahubali 2 - The Conclusion _ Official Trailer (Hindi) _ S.S. Rajamouli _ Prabhas _ Rana Daggubati.mp4",
        24 : "videos/Tanhaji_ The Unsung Warrior - Official Trailer 2 _ Ajay D, Saif Ali K, Kajol _ Om Raut _ 10 Jan 2020.mp4",
        25 : "videos/Drishyam 2_ OFFICIAL TRAILER _ Ajay Devgn Akshaye Khanna Tabu Shriya Saran Abhishek Pathak Bhushan K.mp4",
        26 : "videos/Luka Chuppi Official Trailer _ Kartik Aaryan,Kriti Sanon,Pankaj Tripathi,Aparshakti Khurana_ 1 March.mp4",
        27 : "videos/Monica, O My Darling _ Rajkummar Rao, Huma Qureshi, Radhika Apte _ Official Trailer _ Netflix India.mp4",
        28 : "videos/One Night Stand Official Trailer _ Sunny Leone, Tanuj Virwani _ T-Series.mp4",
        29 : "videos/Death Note _ OFFICIAL TRAILER.mp4",
        30 : "videos/Dark Season 3 _ Official Trailer _ Netflix.mp4",
        31 : "videos/Sex Education_ Season 2 _ Official Trailer _ Netflix.mp4",
        32 : "videos/Never Have I Ever _ Official Trailer _ Netflix.mp4",
        33 : "videos/Dark Desire _ Tráiler oficial _ Netflix.mp4",
        34 : "videos/The Babysitter_ Killer Queen _ Official Trailer _ Netflix.mp4",
        35 : "videos/The Kissing Booth 2 _ Official Sequel Trailer _ Netflix.mp4",
        36 : "videos/american pie naked mile.mp4",
        37 : "videos/No Strings Attached -- Official Trailer 2011 [HD].mp4",
        38 : "videos/American Reunion Official Trailer #2 - American Pie Movie (2012) HD.mp4",
        39 : "videos/Mighty Little Bheem _ Official Trailer _ Netflix.mp4",
        40 : "videos/The Boss Baby Back in Business _ Official Trailer [HD] _ Netflix.mp4",
        41 : "videos/Grizzy and the Lemmings Season 2 Notice.mp4",
        42 : "videos/PJ Masks _ Robots! _ Disney Junior UK.mp4",
        43 : "videos/Peppa Pig The Golden Boots trailer _ Peppa Pig Official Family Kids Cartoon.mp4",
        44 : "videos/Shaun the Sheep The Movie – Second Teaser Trailer.mp4",
        45 : "videos/Sonic The Hedgehog (2020) - New Official Trailer - Paramount Pictures.mp4",
        46 : "videos/A Tale Dark & Grimm NEW Series Trailer _ Netflix After School.mp4",
        47 : "videos/Scaredy Cats NEW Series Trailer 🐈_⬛ Netflix After School.mp4",
        48 : "videos/Mariposa and the Fairy Princess Trailer _ @Barbie.mp4"
}





// video player display
const videoplayer = document.querySelector(".video-player");
const faarrowleft = document.querySelector(".fa-arrow-left");
const videoplayervideo = document.querySelector(".video-players-video");
const bodyEl = document.querySelector("body");
const moviename = document.querySelector(".moviename");
// const vid1 = document.querySelector(".vid1");
// vid1.addEventListener("click",function(){
     function playTrailer(index,name){
        console.log(index);
    videoplayervideo.src = trailers[index];
    moviename.innerHTML = name;
    videoplayer.classList.add("video-player-hide");
    // if(videoplayervideo.currentTime < 10){
    // videoplayervideo.currentTime = 0;
    // }
    videoplayervideo.play();
    myvideo.pause();
    // window.onscroll = function () {
    //     window.scrollTo(0,0);
    //     }
    bodyEl.classList.add("onscroll-body");
}//)

faarrowleft.addEventListener("click",function(){
    videoplayer.classList.remove("video-player-hide");
    videoplayervideo.pause();
    // window.onscroll = function () {
    //     window.scroll;
    //     }
    bodyEl.classList.remove("onscroll-body");
})


