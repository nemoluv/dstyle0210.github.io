define(["jquery","lazyload"],function(a,b){function c(b){var c={target:"img.lazy",loadCage:"<span class='lazyLoad'></span>",errorCage:"<span class='lazyError'></span>",effect:"fadeIn",onload:function(){},onerror:function(){}};a.extend(c,b),c.loadCage&&a(c.target).wrap(c.loadCage),a(window).ready(function(){setTimeout(function(){a(c.target).show().lazyload({effect:c.effect,load:function(b){c.loadCage&&a(this).unwrap(),c.onload.call(null,b)},error:function(b){c.errorCage&&(c.loadCage&&a(this).unwrap(),a(c.target).wrap(c.errorCage)),c.onerror.call(null,b)}})},300)})}return c});