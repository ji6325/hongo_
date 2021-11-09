;(function($){

  var hongo = {        
      init: function(){
          this.scrollEventFn();
          this.headerFn();
          this.section1Fn();
          this.section2Fn();
          this.section3Fn();
          this.section4Fn();
          this.section5Fn();
          this.section6Fn();
          this.section7Fn();
          this.section8Fn();
          this.footerFn();
      },
      scrollEventFn:function(){
       
      },
      headerFn:function(){         

          var scrollBefore = 0;
          var scrollAfter = 0;
          var $win      = $(window);
          var result    = null;
          var $header    = $('#header')
          var $nav       = $('#header #nav');
          var $mainBtn =  $('.main-btn');
          var $sub =  $('.sub');
          var $navUlLi =  $('#nav>ul>li');
          var $subBtn    = $('#header .sub-btn');
          var $subSub    = $('#header .sub-sub');
          var $mobileBtn = $('#header .mobile-btn');
          var $bar       = $('#header .bar')
          var btn = 0;

          function scrollEvent(){

            scrollAfter = $win.scrollTop();

            var scr = function(){ 
              result = scrollBefore-scrollAfter > 0 ? 'UP' : 'DOWN';
            }
          
            scr();
            if(scrollAfter==0){
              $header.removeClass('addUp');
              $header.removeClass('addDown');


            }
            else{
            if(result == 'UP'){
              if( btn == 1 ){ //햄버거 버튼이 클릭된 상태
                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                $header.removeClass('addUp');
                $header.addClass('addDown'); /* 헤더가 사라짐 */
                $nav.stop().slideUp(0); /* 슬라이드 닫힘. */
                btn = 0; //버튼을 클릭 안상태로 전환
                }
                else{
                  $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                  $header.addClass('addDown'); /* 위로 올릴때 header검정메뉴만 올라옴 */
                  $header.removeClass('addUp'); /* 헤더가 사라짐 */
              }                 
          }

          if(result == 'DOWN'){
            if( btn == 1 ){
                $header.removeClass('addDown');
                $header.addClass('addUp');
                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                $nav.stop().slideUp(0); /* 슬라이드 닫힘. */
                btn = 0; //버튼을 클릭 안상태로 전환
            }
            else{
                $header.removeClass('addDown');
                $header.addClass('addUp');
                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
            }
        }                       
    }

            scrollBefore = scrollAfter;



          }
          scrollEvent();
                $win.scroll(function(){
                  scrollEvent();
          });     


            

            


          //980px 초과
           function pcEventFn(){
            $nav.stop().show();
            $sub.stop().hide();
            $subSub.stop().hide();
            $nav.css({display:'inline-block'});

            //1Depth
            $mainBtn.on({
              mouseenter:function(e){
                e.preventDefault();
                $sub.stop().slideUp(100);
                $(this).next().stop().slideDown(600);
                $(this).children().stop().css({left:-100+'%'},0);
                $(this).children().stop().animate({left:0},500);
              }
            });

            $navUlLi.on({
              mouseleave:function(e){
                e.preventDefault();
                $sub.stop().hide();
                $(this).find('span').stop().animate({left:100+'%'},500);
              }
            });  
                     
            //2Depth
            $subBtn.on({
              mouseenter:function(e){
                e.preventDefault();
                $subSub.stop().hide();
                $(this).next().stop().show(); 
              }
            });
        
            $navUlLi.on({
              mouseleave:function(e){
                e.preventDefault();
                $subSub.stop().hide();
              }
            });
           }//pc Event end
          

          //980px 이하
          //모바일 메뉴
           function mobileEventFn(){
            //초기화 설정 //pc 모드일때 설정해논 값이 있어 모바일할떄 초기화 해야함.
              $sub.stop().hide();
              $subSub.stop().show();

              
              $bar.removeClass('addMobile');
              $nav.stop().slideUp(0);

              //이벤트삭제하기
              $mainBtn.off('mouseenter');
              $subBtn.off('mouseenter');
              $navUlLi.off('mouseleave');    
              $subSub.off('mouseleave');
            }


            
            function pcMobileFn(){
              if($win.innerWidth() > 980){
                pc=1;
                mobile=0;
                pcEventFn();
                btn=0;
              }
              else if($win.innerWidth() <= 980){
                pc=0;
                mobile=1;
                mobileEventFn();
              }
            }
            pcMobileFn();
            setTimeout(pcMobileFn, 100);


            
            $win.resize(function(){
              setTimeout(pcMobileFn, 100);
            });


            mobileEventFn()

             $mainBtn.each(function(idx){
             $(this).on({
              click:function(e){
                e.preventDefault();
                if(mobile==1){
                  if($('#header #nav > ul > li > a > i').eq(idx).hasClass('iconRotate')==false){
                    $mainBtn.children().removeClass('iconRotate');
                    $sub.stop().slideUp(300);
                    $(this).next().stop().slideToggle(300); 
                    $(this).children(idx).toggleClass('iconRotate');
                  }else{
                    $(this).next().stop().slideToggle(300); 
                    $(this).children(idx).toggleClass('iconRotate');
                  }
                }
              }
            });
          });

            //햄버거
            $mobileBtn.bind({
              click:function(){
                  if( btn == 0 ){
                      btn = 1;
                      $nav.stop().slideDown(300);
                      $bar.addClass('addMobile');                        
                  }
                  else{
                      btn = 0;
                      $nav.stop().slideUp(300);
                      $bar.removeClass('addMobile');                        
                  }                    
              }
          });   
      },

      section1Fn:function(){ 
        var $window    = $(window);
        var $winW      = $(window).width();
        var $winH      = $(window).height();
        var $section1 = $('#section1');


        var $slideWrap = $("#section1 .slide-wrap");
        var $slideWrapText = $("#section1 .text-slide-wrap");
        var $slideWrapImg = $("#section1 .image-slide-wrap");


        var $slideView = $("#section1 .slide-view");


        var $slide   = $('#section1 .slide');
        var $textSlide   = $('#section1 .text-slide');
        var $imgSlide   = $('#section1 .image-slide');


        var $textSlideW = $('#section1 .text-slide').innerHeight();
        var $imgSlideW = $('#section1 .image-slide').innerWidth();



        var $pageBtn = $("#section1 .page-btn");
        var n=$('#section1 .slide').length-2
        var cnt = 0;


        function resizeFn(){
          $winW    = $(window).width();
          $slide.css({width:$winW}); //즉시 변환 너비 높이 적용 실행
          $winH    = $(window).height();





          $section1.css({width:$winW, height:$winH}); //즉시 변환 너비 높이 적용 실행  
          $slideWrap.stop().animate({left:-$winW*cnt},0)

          $textSlideW = $('#section1 .text-slide').innerHeight();
          $slideWrapText.stop().animate({top:-$textSlideW*cnt},0);
          $imgSlideW = $('#section1 .image-slide').innerWidth();
          $slideWrapImg.stop().animate({left:-$imgSlideW*cnt},0);

          slideFn();
        }

        setTimeout(resizeFn, 100); //0.01초 후에 resizeFn을 실행해라

        $window.resize(function(){ 
          
          resizeFn(); // 크기변경시에만 실행
        });
        

      
        function slideFn(){
          $slideWrap.stop().animate({left:-$winW*cnt},600, 'easeInOutExpo' ,function(){
            if(cnt>n-1){cnt=0}
            if(cnt<0){cnt=n-1}
            $slideWrap.stop().animate({left:-$winW*cnt},0);
          });
          $slideWrapText.stop().animate({top:-$textSlideW*cnt},2000, 'easeInOutExpo',function(){
            if(cnt>n-1){cnt=0}
            if(cnt<0){cnt=n}
            $slideWrapText.stop().animate({top:-$textSlideW*cnt},0);
          });

            $slideWrapImg.stop().animate({left:-$imgSlideW*cnt},2000, 'easeInOutExpo',function(){
                if(cnt>n-1){cnt=0}
                if(cnt<0){cnt=n-1}
                $slideWrapImg.stop().animate({left:-$imgSlideW*cnt},0);
            }); 
          pageBtnAddLineFn();
        
        }

        function nextSlideCountFn(){
          cnt++;
          slideFn();
        }
        function prevSlideCountFn(){
          cnt--;
          slideFn();
        }

        $slideView.swipe({
          swipeLeft:function(){
            if( !$slideWrap.is(':animated' )){
            nextSlideCountFn();
            }
          },

          swipeRight:function(){
            if( !$slideWrap.is(':animated' )){
              prevSlideCountFn();
              }
          }
        })



        function pageBtnAddLineFn(){
          $pageBtn.removeClass('addLine');
          $pageBtn.eq(cnt > n-1 ? 0 : cnt).addClass('addLine');
        }
        pageBtnAddLineFn(); 



        $pageBtn.each(function(idx){
          $(this).on({
          click:function(){
            cnt=idx;
            slideFn();
          }
        });
      });

      //마우스 무브 이벤트
      var $smallImg = $('#section1 .image-slide-container');
      var $sec1 = $('#section1');
      var y = 0;
      var x = 0;

      $sec1.on({
        mousemove:function(event){
          x = -event.clientX*.05;
          y = -event.clientY*.05;
          
          $smallImg.css({top:y+0,right:-x+0});
        }
      });

    


      },
      section2Fn:function(){
        // 페럴록스
        var t = 0;

        $(window).scroll(function(){

          if($(window).scrollTop() >= $('#section2').offset().top-700 ){
            if(t==0){
            t=1; 
            $('#section2 .wrap .gap .container > ul > li').addClass('sec2On');
            }
          }

          if($(window).scrollTop() === 0){
            t=0;
            $('#section2 .wrap .gap .container > ul > li').removeClass('sec2On');
            
          }
        })
      },
      section3Fn:function(){
        
      },
      section4Fn:function(){
        // 페럴록스
        var t = 0;

        $(window).scroll(function(){

          if($(window).scrollTop() >= $('#section4').offset().top-700 ){
            if(t==0){
            t=1; 
            $('#section4 .wrap .gap .container .text-title-wrap').addClass('sec4On');
            }
          }

          if($(window).scrollTop() === 0){
            t=0;
            $('#section4 .wrap .gap .container .text-title-wrap').removeClass('sec4On');
            
          }
        })
      
      },
      section5Fn:function(){
        // 페럴록스
        var t = 0;

        $(window).scroll(function(){

          if($(window).scrollTop() >= $('#section5').offset().top-700 ){
            if(t==0){
            t=1; 
            $('#section5').addClass('sec5On');
            }
          }

          if($(window).scrollTop() === 0){
            t=0;
            $('#section5').removeClass('sec5On');
            
          }
        })
      },
      section6Fn:function(){
        var $sec6Img = $('#section6 .sec6-product-gap img')
        var $sec6ContentBox = $('#section6 .sec6-content-box');
        var $iconFn = $('#section6 .sec6-content-box .icon-btn1');

        // 페럴록스
        var t = 0;

        $(window).scroll(function(){

          if($(window).scrollTop() >= $('#section6').offset().top-700 ){
            if(t==0){
            t=1; 
            $('#section6 .wrap .gap .container .sec6-title-wrap').addClass('sec6On');
            }
          }

          if($(window).scrollTop() === 0){
            t=0;
            $('#section6 .wrap .gap .container .sec6-title-wrap').removeClass('sec6On');
            
          }
        })
      

        //호버시 이미지 변환
        $sec6Img.eq(0).on({
          mouseenter:function(){
            $sec6Img.eq(0).attr('src','./img/furniture-modern-01-a-1000x1000.jpg.jpg');
          }
        });
        $sec6Img.eq(0).on({
          mouseleave:function(){
            $sec6Img.eq(0).attr('src','./img/furniture-modern-01-1-360x360.jpg.jpg');
          }
        });
        $sec6Img.eq(1).on({
          mouseenter:function(){
            $sec6Img.eq(1).attr('src','./img/furniture-modern-02-a-1000x1000.jpg.jpg');
          }
        });
        $sec6Img.eq(1).on({
          mouseleave:function(){
            $sec6Img.eq(1).attr('src','./img/furniture-modern-02-1000x1000.jpg.jpg');
          }
        });

        $sec6Img.eq(2).on({
          mouseenter:function(){
            $sec6Img.eq(2).attr('src','./img/furniture-modern-04-c-1-1000x500.jpg.jpg');
          }
        });
        $sec6Img.eq(2).on({
          mouseleave:function(){
            $sec6Img.eq(2).attr('src','./img/furniture-modern-04-b-1000x500.jpg.jpg');
          }
        });

        $sec6Img.eq(3).on({
          mouseenter:function(){
            $sec6Img.eq(3).attr('src','./img/furniture-modern-05-a-1000x1000.jpg.jpg');
          }
        });
        $sec6Img.eq(3).on({
          mouseleave:function(){
            $sec6Img.eq(3).attr('src','./img/furniture-modern-05-1000x1000.jpg.jpg');
          }
        });
      },
      section7Fn:function(){
        // 페럴록스
        var t = 0;

        $(window).scroll(function(){

          if($(window).scrollTop() >= $('#section7').offset().top-700 ){
            if(t==0){
            t=1; 
            $('#section7').addClass('sec7On');
            }
          }

          if($(window).scrollTop() === 0){
            t=0;
            $('#section7').removeClass('sec7On');
            
          }
        })
      },
      section8Fn:function(){
        var $imgLeft = $('#section8 ul li');
        var $imgMove = $('#section8 .sec8-img-content img');

        // 페럴록스
        var t = 0;

        $(window).scroll(function(){

          if($(window).scrollTop() >= $('#section8').offset().top-700 ){
            if(t==0){
            t=1; 
            $('#section8 .wrap .gap .container .sec8-title-wrap').addClass('sec8On');
            }
          }

          if($(window).scrollTop() === 0){
            t=0;
            $('#section8 .wrap .gap .container .sec8-title-wrap').removeClass('sec8On');
            
          }
        })

        $imgMove.on({
          mouseenter:function(){
            $imgLeft.removeClass('onLeft');
            $(this).addClass('onLeft');
          },
        });
        $imgMove.on({
            mouseleave:function(){
              $(this).removeClass('onLeft');
          }
        });

       
        
      },
      footerFn:function(){

      }
  } 


  hongo.init();

})(jQuery);