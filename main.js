





let museumList = $('main nav ul li');
let exhibition = $('main article > div:not(.noWorks)');
let noWorks = $('main article > div.noWorks');

museumList.click(function(e){
  let museum = $(e.target).parent();
  let museumName = museum.attr("class");

  $(exhibition).show();
  $(noWorks).hide();

  if( !museum.hasClass('on') ){   // on상태가 아니면
    museum.addClass('on');
    museum.siblings().removeClass('on');

    if( !museum.hasClass('all') ){  //전체보기가 아닐 시
      for(let i = 0; i < exhibition.length; i++){    // 해당 전시회만 show하고 나머지 hide
        if( !$(exhibition[i]).hasClass(museumName) ){
          $(exhibition[i]).hide();
        }
      }

      if( !$('article').children().is(':visible') ){  //만약 진행중인 전시가 없다면
        $(noWorks).show();
      }
    }
  } 
});



// 랜덤으로 row사이즈 만들기
let randomRow = Array.of(exhibition);
let num = Math.floor(Math.random()*exhibition.length)
for( let i = 0 ; i < num; i++ ){
  let num2 = Math.floor(Math.random()*exhibition.length);
  $(`article div:nth-child(${num2})`).addClass('row');
}