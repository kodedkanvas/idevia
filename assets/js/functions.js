!function(e){e(document).ready(function(){function t(t){return t=e.trim(t),!(""==t||t.length<3||t.length>20)&&t}function n(t){t=e.trim(t);var n=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;return!!t.match(n)&&t}function s(t){t=e.trim(t);var n=/^\d{10}$/;return!!n.test(t)&&t}function a(t){return t=e.trim(t),0!=t.length&&t}function o(t){return t=e.trim(t),0!=t.length&&t}function i(t){var n='<ul class="errors">';e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",r(n)}function r(t){e(".modal-body").html(""),e(".modal-body").html(t),e(".modal").addClass("active")}e(".hamburger-btn").on("click",function(){e(this).toggleClass("active"),e(".nav-links").toggleClass("open")}),e(window).on("scroll",function(){var t=e(window).scrollTop();t>10?e(".main-nav").addClass("scrolled"):e(".main-nav").removeClass("scrolled")}),e(".subscription-form").submit(function(t){var s="http://idevia.us14.list-manage.com/subscribe/post-json?u=3f061ce908d4a9a95609fe498&id=62f00ab9cc&c=?",a=e("#subscription-form").serialize(),o=e("#sub-email-footer").val(),c=[],o=n(o);return 0==o?(c.push("Email is not valid"),i(c),!1):(e.ajax({type:"GET",url:s,data:a,catche:!1,dataType:"json",contentType:"application/json; charset=utf-8",error:function(e){r('<h3 class="error-text">We are unable to connect at the moment. Please try again soon !</h3>')},success:function(e){r("success"!=e.result?'<h3 class="success-text">'+e.msg+"</h3>":'<h3 class="success-text">'+e.msg+"</h3>")}}),!1)});var c=e(".tabs"),l=e(".panel");e(".tabs").on("click","a",function(t){t.preventDefault();var n=e(this).attr("href");l.filter(":not(.hidden)").addClass("hidden"),e(n).removeClass("hidden"),c.find(".current").removeClass("current"),e(this).addClass("current")}),e("#start-your-project").submit(function(){var c="https://formspree.io/idevia.in@gmail.com",l="Start My Project",u=e("#name").val(),h=e("#email").val(),m=e("#phone").val(),d=e("#business").val(),v=e("#message").val(),p=[],f=[];e.each(e("input[name='project']:checked"),function(){p.push(e(this).val())}),p=p.join(", ");var g={subject:l,name:u,email:h,phone:m,business:d,project:p,message:v},y='<h3 class="success">Your message is sent. We will reach you soon !</h3>',u=t(u);0==u&&f.push("Name is not valid");var h=n(h);0==h&&f.push("Email is not valid");var m=s(m);0==m&&f.push("Phone no. is not valid");var d=a(d);0==d&&f.push("Business can not be empty"),0==p.length&&f.push("Project type is not chosen");var v=o(v);return 0==v&&f.push("Project details can not be empty"),0!=f.length?(i(f),!1):(e.ajax({type:"POST",url:c,data:g}),r(y),!1)}),e("#get-in-touch").submit(function(){var s="//formspree.io/idevia.in@gmail.com",a=e("#git-name").val(),c=e("#git-email").val(),l=e("#git-message").val(),u="General Query",h=[],m={subject:u,name:a,email:c,message:l},d='<h3 class="success">Your message is sent. We will reach you soon !</h3>',a=t(a);0==a&&h.push("Name is not valid");var c=n(c);0==c&&h.push("Email is not valid");var l=o(l);return 0==l&&h.push("Message can not be empty"),0!=h.length?(i(h),!1):(e.ajax({type:"POST",url:s,data:m}),r(d),!1)}),e(".input-number").keydown(function(t){e(".input-number").val();46==t.keyCode||8==t.keyCode||t.keyCode>95&&t.keyCode<106||(t.keyCode<48||t.keyCode>57)&&t.preventDefault()}),e(".visit-store-btn").on("click",function(){var e="<h3>Thank You for your interest !</h3>";e+="<h4>Our team is working hard to make it online on this New Year</h4>",e+="<h4>Cheers !</h4>",r(e)}),e("#closeModal").on("click",function(){e(".modal").removeClass("active")})}),e(window).on("load",function(){e(".spinner").hide()})}(jQuery);