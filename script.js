const nav1=document.getElementById('nav-dialog')

function handleMenu(){
    console.log("hello")
    nav1.classList.toggle('hidden')
}


// initial position of slider
// translate-x-1 means translate x through 4px
const initialTranslateLTR=-48*4;
const initialTranslateRTL=36*4;

// element-> observe element
function setupIntersectObserver(element,isLTR,speed){
    const intersectionCallback=(entries)=>{
        const isintersecting=entries[0].isIntersecting;
        // observe element show in the viewport it means 
        // isintersecting true
        if(isintersecting){
            document.addEventListener('scroll',scrollHandler)
        }
        else{
            document.removeEventListener('scroll',scrollHandler)
        }
   }
   const intersectionObserver=new IntersectionObserver(intersectionCallback);

   intersectionObserver.observe(element);

   function scrollHandler(){
    const translateX=(window.innerHeight-element.getBoundingClientRect().top)*speed;

    let totaltranslate=0;
    if(isLTR){
        totaltranslate=translateX+initialTranslateLTR;
    }
    else{
        totaltranslate=-(translateX+initialTranslateRTL);
    }

    element.style.transform=`translateX(${totaltranslate}px)`
   }
}

const line1=document.getElementById('line1')
const line2=document.getElementById('line2')
const line3=document.getElementById('line3')
const line4=document.getElementById('line4')

setupIntersectObserver(line1,true,0.15);
setupIntersectObserver(line2,false,0.15);
setupIntersectObserver(line3,true,0.15);
setupIntersectObserver(line4,true,0.8);