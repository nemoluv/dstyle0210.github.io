require.config({
    baseUrl : "js",
    paths : {
        "jquery":"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min",
        "bootstrap":"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min",
        "underscore":"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        "easypiechart":"https://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.4/jquery.easypiechart.min",
        "lazyload":"lib/jquery.lazyload"
    },
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "easypiechart":{ exports: "easypiechart","deps" :['jquery'] },
        "lazyload":{ exports: "lazyload","deps" :['jquery'] }
    }
});


// 이미지 Lazy Load
requirejs(["jquery","app/lazyload/lazyloadApp"],function($,lazyLoad){
    $(function(){
        lazyLoad();
    });
});

// 이미지 Lazy Load
requirejs(["jquery","app/piechart/pieApp"],function($,makepie){
    $(function(){
        makepie();
    });
});


