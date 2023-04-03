const newFilms=[
    {
        id:1,
        name:"Đấu phá thương khung"
    },{
        id:2,
        name:"Đấu la đại lục"
    },{
        id:3,
        name:"Vũ canh kỉ"
    },{
        id:4,
        name:"Yêu thần kí"
    },
]
const dramaFilms=[
    {
        id:1,
        name:"Đấu phá thương khung"
    },{
        id:2,
        name:"Đấu la đại lục"
    },{
        id:3,
        name:"Vũ canh kỉ"
    },{
        id:4,
        name:"Yêu thần kí"
    },
]

const movieFilms=[
    {
        id:1,
        name:"Đấu phá thương khung"
    },{
        id:2,
        name:"Đấu la đại lục"
    },{
        id:3,
        name:"Vũ canh kỉ"
    },{
        id:4,
        name:"Yêu thần kí"
    },
]
const listBanners=[
    {
        id:1,
        src:"https://upload.wikimedia.org/wikipedia/en/2/22/Under_the_Banner_of_Heaven_poster.jpg"
    },{
        id:1,
        src:"https://simg.zalopay.com.vn/zlp-website/assets/phim_hoat_hinh_3_D_trung_quoc_dau_la_di_luc_639a740c5c.jpg"
    },{
        id:1,
        src:"https://cdn.popsww.com/blog/sites/2/2021/07/vu-canh-ky-phim-hoat-hinh-3d-trung-quoc.jpg"
    },{
        id:1,
        src:"https://kenhthieunhi.vn/wp-content/uploads/2021/08/top-15-phim-hoat-hinh-trung-quoc-hay-moi-nhat-2021-phim-3d-co-0-799x1200.jpg"
    },
]

var listLink=document.querySelectorAll('.header_link-item')
var linkAc=document.querySelector('.active')
listLink.forEach((item)=>{
    item.onclick=()=>{
        document.querySelector('.active').classList.remove('active')
        item.classList.add('active')
    }
})
var checkTab=document.querySelector('.tab')
var checkMenu=document.querySelector('.tab_menu')
checkTab.addEventListener('click',()=>{
    if(checkMenu.style.display=='none' || checkMenu.style.display==''){
        checkMenu.style.display="block";
    }
    else{
        checkMenu.style.display="none";
    }
})

var banners=document.querySelectorAll('.content_list-banner')
// console.log(banners)
let indexcur=0;
let maxBanners=banners.length-1;
window.addEventListener('load',()=>{
    banners.forEach((item, index)=>{
        item.style.transform=`translate(${(index-indexcur)*100}%)`
    })
})

const handleBanner=setInterval(()=>{
    if(indexcur==maxBanners){
        indexcur=0;
    }else{
        indexcur++;
    }
    banners.forEach((item,index)=>{
        item.style.transform=`translateX(${(index-indexcur)*100}%)`
    })
},3000)


var contentBannerMobile=document.querySelector(".content_banner-mobile")
var contentLeft=document.querySelector('.content_left')
console.log(contentLeft)
contentBannerMobile.innerHTML=contentLeft.innerHTML
console.log(contentBannerMobile.innerHTML)
console.log(contentBannerMobile)

/*handles banner*/
 



var newFilm=document.querySelectorAll('.new_film')
var dramaFilm=document.querySelectorAll('.drama_film')
var movieFilm=document.querySelectorAll('.movie_film')

function updateFilm(element,type){
    element.forEach((item,index)=>{
        item.innerHTML=`<p>${type[index].name}</p>`
    })
}
updateFilm(newFilm,newFilms)
updateFilm(dramaFilm,dramaFilms)
updateFilm(movieFilm,movieFilms)