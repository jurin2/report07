 // 서브메뉴
 let mainNavEl = document.querySelector('.main-nav');
 let subNavEl = document.querySelector('.sub-nav');

 function subNav(subH){
     subNavEl.style.height = subH;
 }
     
 // 서브메뉴 호출 이벤트
 mainNavEl.addEventListener('mouseenter',function(){
     subNav('190px');
 });

 // 서브메뉴 닫기 이벤트
 subNavEl.addEventListener('mouseleave',function(){
     subNav('0');
 });


 // 페이드 슬라이드
 let slideEls = document.querySelectorAll('.slider .img-box');
 let idx = 1;

 function slider(idx){
     for(let cnt=0; cnt<slideEls.length; cnt++){
         slideEls[cnt].style.opacity = '0';
     }
     slideEls[idx].style.opacity = '1';
 }

 setInterval(function(){
     if(idx>3){
         idx=0;
     }
     slider(idx++)    
 },3000)


 // 공지사항 모달
 let modalEl = document.querySelector('.modal');
 let modalTit = document.querySelector('.modal-tit');
 let notiTitle = document.querySelectorAll('.notice-txt .title');
 let btnMoClose = document.querySelector('.btn-modal-close');

 for(let idx=0; idx<notiTitle.length; idx++){
     notiTitle[idx].addEventListener('click',function(){
         modalTit.innerHTML = this.innerHTML;
         modalEl.style.display = 'flex';
     })
 }
 btnMoClose.addEventListener('click',function(){
     modalEl.style.display = 'none';
 })


 // 갤러리 모달
 let modalGall = document.querySelector('.modal-gallery');
 let imgBox = document.querySelectorAll('.gallery .img-box img'); 
 let btnGalClose = document.querySelector('.modal-gallery .btn-modal-close');
 let gallimg = document.querySelector('.gallery-img');


 for(let idx=0; idx<imgBox.length; idx++){
     imgBox[idx].addEventListener('click',function(){
         let newImg = this.src;
         gallimg.setAttribute('src',newImg);

         modalGall.style.display = 'flex';
     });
 }
 
 btnGalClose.addEventListener('click',function(){
     modalGall.style.display = 'none';
 })
