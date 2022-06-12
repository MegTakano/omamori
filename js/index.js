// 動きのきっかけとなるアニメーションの名前を定義
$('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
    }else{
    $(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
    }
    });

$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
    }else{
    $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
    }
    });