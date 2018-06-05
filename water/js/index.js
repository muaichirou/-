
    
      $(function () {
      	

			$("#close").click(function(){
					$(this).parent().hide(200)
				})
				//导出exal
			$(".out").click(function () {
	            $(".tabdata").table2excel({
		                exclude  : "", //过滤位置的 css 类名
		                filename : "站点-" + new Date().getTime() + ".xls" //文件名称
		            });
		        });
        		//显示隐藏菜单
        	$("#fadetoggle").click(function () {
				if($("#box").is(":hidden")){
					$("#box").show(200)
					$(this).html("隐藏菜单")
				}else{
					$("#box").hide(200)
					$(this).html("显示菜单")
				}
			})
            	//表格隐藏显示
//          $("#box h5").click(function () {
//              if ($("#change").children().is(":hidden")) {
//                  $("#change").children().fadeIn(500)
//                  $(this).html("点击隐藏")
//              }else{
//                  $("#change").children().fadeOut(500)   
//                  $(this).html("点击显示")
//                  
//              }
//          })
           		//点击添加样式
            $(".tab>ul>li").click(function () {
                if(!$(this).hasClass("activee")){
                    $(this).addClass("activee")
                }else{
                $(this).removeClass("activee")
                }
            })
           		//点击显示弹窗
            $("#china_child_point .czdd").click(function(){
            	$("#china_child_point").hide(200)
            	$(".diog").show(300)
//          	alert(1)
            })
//            	当前zindex调高 其他隐藏
            $("#guokongpoint,#shebeipoint,#shengkongpoint").click(function () {
                
                if ($(this).siblings("div").is(":hidden")) {
                	$(this).addClass("zin").parent().siblings("li").find("span").removeClass('zin')
                	
                    $(".three_point li>div").hide(500)
                    $(this).siblings("div").show(500)
                }else{
                	$(this).removeClass("zin")
                    $(".three_point li>div").hide(500)
                    $(this).siblings("div").hide(500)

                }
               
            })
            


       }) 
//     缩略图 与 大图

		 var galleryTop = new Swiper('.gallery-top', {
		  spaceBetween: 10,
		  loop:true,
		  zoom:true,
		  loopedSlides: 5, //looped slides should be the same
//		  navigation: {
//		    nextEl: '.swiper-button-next',
//		    prevEl: '.swiper-button-prev',
//		  },
		});
		 var galleryThumbs = new Swiper('.gallery-thumbs', {
		  spaceBetween: 10,
		  slidesPerView: 4,
		  touchRatio: 0.2,
		  loop: true,
		  loopedSlides: 5, //looped slides should be the same
		  slideToClickedSlide: true,
//		  direction: 'vertical',          竖向排列  需要改样式
		});
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;


        
//         $(function(){
//             $.ajax({
//                 method:'get',
//                 url: "listdata.json",
//                 dataType: "json",
// 　　　　　　　　   data:{
//                     email:$("input[text]").val,
//                     password:$("#asd").val
//                 }
//             }).then(res=>{
//                 console.log(res);
                
//             })
        // });
        
 	
   	