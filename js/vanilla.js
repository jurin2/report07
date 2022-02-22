 // menu
 let mainNav = document.querySelector('.main-nav');
 let subNav = document.querySelector('.sub-nav');
 console.log(mainNav,subNav);

 mainNav.addEventListener('mouseenter',function(){
     subNav.classList.toggle('active');
 })
 subNav.addEventListener("mouseleave",function(){
     subNav.classList.remove('active');
 })


 // slider        
 let mainSlides = document.querySelectorAll('.slides li');
 let tmp=0;

 setInterval(function(){
     mainSlides[tmp].style.opacity='0';
     nextIdx = (tmp + 1) % mainSlides.length;
     mainSlides[nextIdx].style.opacity='1';
     tmp=nextIdx;
 },3000);


 
 // f-site
 let fSite = document.querySelector('.f-site span');
 let fList = document.querySelector('.f-list');
 fSite.addEventListener('click',function(){
     fList.classList.toggle('show');
 })



 // notice modal
 let noticeList = document.getElementsByClassName('noticetxt');
 let notiTxt = document.getElementsByClassName('notice-modal');
 let notiClose = document.getElementsByClassName('notice-close');
 let notifuncs = [];

 function ntModal(num){
     return function(){
         noticeList[num].addEventListener('click',function(){
             notiTxt[num].classList.add('active');
         })
         notiClose[num].addEventListener('click',function(){
             notiTxt[num].classList.remove('active');
         })
     }
 }
 // 모달 수만큼 함수를 호출해서 funcs에 저장
 for(let idx=0; idx<noticeList.length; idx++){
     notifuncs[idx] = ntModal(idx);
 }
 // 모달 수만큼 funcs에 저장된 함수를 호출
 for(let idx2=0; idx2<noticeList.length; idx2++){
     notifuncs[idx2]();
 }



 // gallery modal
 let photo = document.getElementsByClassName('photo');
 let modals = document.getElementsByClassName('modal');
 let close = document.getElementsByClassName('close');
 let funcs = [];

 function Modal(num) {
     return function(){
         photo[num].addEventListener('click',function(){
             modals[num].style.display = 'block';
             console.log(num);
         })
         close[num].addEventListener('click',function(){
             modals[num].style.display = 'none';
         })
     };
 }
 // 모달 수만큼 함수를 호출해서 funcs에 저장
 for(let idx=0; idx<photo.length; idx++){
     funcs[idx] = Modal(idx);
 }
 // 모달 수만큼 funcs에 저장된 함수를 호출
 for(let idx2=0; idx2<photo.length; idx2++){
     funcs[idx2]();
 }