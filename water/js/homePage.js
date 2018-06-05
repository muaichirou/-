var upFlag = false;
var imageCount = 0;

function initTable(json){
	$("#tplTbody1").html('');
	var tplHtml = $("#template1").html();
	var tpl = _.template(tplHtml);
	$("#tplTbody1").html(tpl({json:json}));
}

var imgArr = [];
function initImageArr(img){
	if(img != "" && img.length > 0){
		var imgObj = {
			src : img,
			width:326,
			height:375
		};
		imgArr.push(imgObj);
	}
}

function testVisibleIndex(){
	var index = 0;
	$("#showImageWindow").find("img").each(function(i){
		if($(this).is(":visible")){
			index = i;
		}
	});
	return index;
}

function initShowImage(visibleIndex,type){
	var $imgs = $("#showImageWindow").find("img");
	var index = 0;
	if(type == 'left'){
		if(visibleIndex <= 0){
			index = $("#showImageWindow").find("img").length-1;
			$("#showImageWindow").find("img").hide();
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
		else{
			index = visibleIndex - 1;
			$("#showImageWindow").find("img:visible").hide();
			
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
	}
	else if(type == 'right'){
		if(visibleIndex >= $("#showImageWindow").find("img").length-1){
			index = 0;
			$("#showImageWindow").find("img").hide();
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
		else{
			index = visibleIndex + 1;
			$("#showImageWindow").find("img:visible").hide();
			
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
	}
}

function testVisibleIndex(){
	var index = 0;
	$("#showImageWindow").find("img").each(function(i){
		if($(this).is(":visible")){
			index = i;
		}
	});
	return index;
}

function initShowImage(visibleIndex,type){
	var $imgs = $("#showImageWindow").find("img");
	var index = 0;
	if(type == 'left'){
		if(visibleIndex <= 0){
			index = $("#showImageWindow").find("img").length-1;
			$("#showImageWindow").find("img").hide();
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
		else{
			index = visibleIndex - 1;
			$("#showImageWindow").find("img:visible").hide();
			
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
	}
	else if(type == 'right'){
		if(visibleIndex >= $("#showImageWindow").find("img").length-1){
			index = 0;
			$("#showImageWindow").find("img").hide();
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
		else{
			index = visibleIndex + 1;
			$("#showImageWindow").find("img:visible").hide();
			
			var $img = $($imgs[index]);
			$img.css({
				'filter':'alpha(opacity=0)',
				opacity:0
			});
			$img.show().animate({
				'filter':'alpha(opacity=100)',
				opacity:1
			},'900');
			var src = $img.attr("src");
			$("#subPhoto").find("img").removeClass("active");
			$("#subPhoto").find("img[src='"+ src +"']").addClass("active");
		}
	}
}

function initImgs(imgArr){
	if(imgArr.length > 0){
		$("#imgpanel").css({
			display:'block'
		});
		var html = "";
		var subHtml = "";
		for(var j=0;j<imgArr.length;j++){
			var obj = imgArr[j];
			var src = obj.src;
			var width = obj.width;
			var height = obj.height;
			if(j==0){
				html += "<img ondblclick='openBgDiv(this)' src='"+ src +"' width='"+ width +"' height='"+ height +"' style='cursor:pointer;'></img>";
				subHtml += "<img src='"+ src +"'></img>";
			}
			else{
				html += "<img ondblclick='openBgDiv(this)' src='"+ src +"' width='"+ width +"' height='"+ height +"' style='display:none;cursor:pointer;'></img>";
				subHtml += "<img src='"+ src +"'></img>";
			}
		}
		
		//生成图片展示
		$("#showImageWindow").html(html);
		$("#showImageWindow").find("img:eq(0)").fadeTo('slow',1);
		$("#subPhoto").html(subHtml);
		
		$("#subPhoto").find("img").each(function(){
			var $this = $(this);
			$this.click(function(){
				$("#subPhoto").find("img").removeClass("active");
				$(this).addClass("active");
				var src = $(this).attr("src");
				$("#showImageWindow").find("img").each(function(){
					if(!$(this).is(":hidden")){
						$(this).hide();
					}
				});
				var $img = $("#showImageWindow").find("img[src='"+ src +"']");
				$img.css({
					'filter':'alpha(opacity=0)',
					opacity:0
				});
				$img.show().animate({
					'filter':'alpha(opacity=100)',
					opacity:1
				},'900');
			});
		});
		
		$("#rightEvent").unbind('click').click(function(){
			var index = testVisibleIndex();
			initShowImage1(index,'right');
		});
		$("#leftEvent").unbind('click').click(function(){
			var index = testVisibleIndex();
			initShowImage1(index,'left');
		});
	}
	else{
		$("#imgpanel").css({
			display:'none'
		});
	}
}

function changeImg(obj){
	var $tr = $(obj).closest("tr");
	var imgStr= $tr.attr("imgArr");
	var imgArr = null;
	eval("imgArr="+imgStr);
	initImgs(imgArr);
}

function initImgArr(imgarr){
	var arr = [];
	for(var i=0;i<imgarr.length;i++){
		var img = imgarr[i];
		if(img != "" && img.length > 0){
			var imgObj = {
				src : img,
				width:326,
				height:375
			};
			arr.push(imgObj);
		}
	}
	return arr;
}

function initMsgListTable(id){
	$.ajaxSettings.async = false;
	var s = {
		id : id
	};
	var param = initParam(s);
	$("#tplTbody1").html('');
	$("#tplTbody2").html('');
	$.ajaxSettings.async = true;
	//callapi("getTActivityProblemTraceListById_SENSOR",param,function(data){
	callapi_async("getTActivityProblemInfoById_SENSOR",param,function(data){
		innerCall(data,function(result){
			if(result){
				var problem = result.problem;
				var trace = result.trace;
				if(problem){
					var image1 = problem.image1;
					var image2 = problem.image2;
					var image3 = problem.image3;
					var image4 = problem.image4;
					var image5 = problem.image5;
					var image6 = problem.image6;
					var image7 = problem.image7;
					var image8 = problem.image8;
					var image9 = problem.image9;
					var attachment = problem['attachment'];
					
					if(attachment){
						$("#downloadPanel").css({
							display:'block'
						});
						$("#downloadLink").attr("href",attachment);
					}
					else{
						$("#downloadPanel").css({
							display:'none'
						});
						$("#downloadLink").attr("href","javascript:void(0)");
					}
					
					var arr = [image1,image2,image3,image4,image5,image6,image7,image8,image9];
					var arr1 = initImgArr(arr);
					
					initImgs(arr1);//图片播放初始化
					
					var regionName = problem.regionName;//区县
					var standGridid = problem.standGridid;//网格
					var problemDatetime = problem.problemDatetime;//发现时间
					var enterpriseName = problem.enterpriseName;//企业名称
					var description = problem.description;//问题描述
					
					var tplHtml1 = $("#tpl1").html();
					var tpl1 = _.template(tplHtml1);
					$("#tplTbody1").html(tpl1({obj:problem}));
					$("#tplTbody1 > tr:first").attr("imgArr",JSON.stringify(arr1));
				}
				
				var list1 = trace;
				var html = "";
				for(var i=0;i<list1.length;i++){
					var o = list1[i];
					var contact = o.contact;//联系方式
					var description = o.description;//状态说明
					var people = o.people;//跟进人员
					var traceDatetime = o.traceDatetime;//跟进时间
					var image1 = o.image1;
					var image2 = o.image2;
					var image3 = o.image3;
					var image4 = o.image4;
					var image5 = o.image5;
					var image6 = o.image6;
					var image7 = o.image7;
					var image8 = o.image8;
					var image9 = o.image9;
					
					var arr = [image1,image2,image3,image4,image5,image6,image7,image8,image9];
					var arr2 = initImgArr(arr);

					initImgs(arr2);//图片播放初始化
					var imgArr = JSON.stringify(arr2);
					
					html += "<tr imgArr='"+ imgArr +"' onclick='changeImg(this)'>"
						html += "<td class=\"text-center\">"+ traceDatetime +"</td>";
						html += "<td class=\"text-center\">"+ description +"</td>";
						html += "<td class=\"text-center\">"+ people +"</td>";
						html += "<td class=\"text-center\">"+ contact +"</td>";
					html += "</tr>";
				}
				$("#tplTbody2").html(html);
			}
			else{
				$("#tplTbody1").html('');
				$("#tplTbody2").html('');
			}
		},function(result){
			$("#tplTbody2").html('');
		});
	});
}




function openLineChartDialog(json){
	var w = $(window).width() * 0.6;
	var h = $(window).height() * 0.6;
	var d = dialog({
		id : 'realtimeWarningAreaAlert',
		title : '实时报警点位',
		content : getId("realtimeWarningAreaDialog"),
		onshow : function(){
			$("#lineChartContainer").css({
				width : (w-30) + 'px',
				height : (h-30) + 'px',
				'overflow' : 'hidden',
				margin : '0 auto',
				clear : 'both'
			});
			initLineChartWithRealtime(json);
		},
		width : w,
		height : h
	});
	d.showModal();
}


function initAlarmTable(alertDetail){
	var arr = alertDetail.split("。");
	var arr1 = [];
	for(var i=0;i<arr.length;i++){
		arr1.push(arr[i]);
	}
	
	var html = "";
	for(var i=0;i<arr1.length;i++){
		var text = arr1[i];
		var line = "";
		line += "<tr>";

		if(text != ''){
			var arr3 = text.split(",");
			for(var j=0;j<arr3.length;j++){
				line += "<td class='text-center'>"+ arr3[j] +"</td>";
			}
		}
		
		line += "</tr>";
		html += line;
	}
	$("#detailTbody").html(html);
}


function initBarChart(freqOfHours){
	var timeArr = [];
	for(var i=0;i<24;i++){
		timeArr.push(i);
	}
	if(freqOfHours && freqOfHours.length > 0){
		var dataArr = freqOfHours.split(",");
		
		var myChart = echarts.init(document.getElementById('barchartDiv'));
		myChart.clear();
		// 过渡---------------------
		myChart.showLoading({
		    text: '正在努力的读取数据中...',    //loading话术
		});
		var option = {
			color: ['#3398DB'],
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
				    data : timeArr,//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				    axisTick: {
				    	alignWithLabel: true
				    }
				}
			],
			yAxis : [
			    {
				   	type : 'value',
				   	interval : 1
				}
			],
			series : [
				{
					type: 'bar',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
					                [
					                    {offset: 0, color: '#83bff6'},
					                    {offset: 0.5, color: '#188df0'},
					                    {offset: 1, color: '#188df0'}
					                ]
					        )
						},
						emphasis: {
							color: new echarts.graphic.LinearGradient(
					              0, 0, 0, 1,
					              [
					                    {offset: 0, color: '#2378f7'},
					                    {offset: 0.7, color: '#2378f7'},
					                    {offset: 1, color: '#83bff6'}
					              ]
					        )
					    }
					},
					name:'超排次数',
					barWidth: '60%',
					data:dataArr//[10, 52, 200, 334, 390, 330, 220]
				}
			]
		};
		myChart.setOption(option);
		setTimeout(function(){
			myChart.hideLoading();
		},800);
	}
}

/**
 * 图片放大
 */
var scrollFunc=function(e){
	var value = 0;
	e = e || window.event;
	 
	if(e.wheelDelta){//IE/Opera/Chrome 
		value=-e.wheelDelta;
	}else if(e.detail){//Firefox 
		value=-e.detail*40;
	}
	
	var w = Number($("#dialogImg").attr("width"));
	var h = Number($("#dialogImg").attr("height"));
	w = w + value;
	h = h + value;
	$("#dialogImg").attr("width",w).attr('height',h).css({
		width:(w-20)+"px",
		height:(h-20)+"px"
	});
	$("#imageDialogDiv").css({
		width : (w) + "px",
		height : (h) + "px"
	});
	
	var $wd = $("#imageDialogDiv");
	var width = $wd.width();
	var height = $wd.height();
	var w = $(window).width();
	var h = $(window).height();
	
	var left = (w - width)/2;
	
	var top = (h - height)/2;
	
	$("#imageDialogDiv").css({
		left : left,
		top : top
	});
	$("#dialogImg").css({
		left : (left + 10) + "px",
		top : (top + 10) + "px"
	});
}

function openBgDiv(obj){
	var $this = $(obj);
	$("#bgDiv").fadeIn('fast');
	var src = $this.attr("src");
	//$("#imageDialogDiv").html("<img id='dialogImg' src='"+ src +"' width='414' height='480'></img>");
	$("#dialogImg").attr("src",src);
	$("#dialogImg").attr("title","双击或点击图片以外区域关闭");
	var $img = $("#dialogImg");
	$img.css({
		cursor:'pointer'
	}).dblclick(function(){
		$("#bgDiv").fadeOut('fast');
		$("#dialogImg").fadeOut('fast');
		$("#imageDialogDiv").fadeOut('fast');
	});
	var width = $("#imageDialogDiv").width();
	var height = $("#imageDialogDiv").height();
	var w = $(window).width();
	var h = $(window).height();
	var left = (w - width)/2;
	var top = (h - height)/2;
	$("#imageDialogDiv").css({
		left : left,
		top : top,
		opacity : 1
	}).fadeIn('fast');
	$("#dialogImg").css({
		left : (left+10)+"px",
		top : (top+10)+"px",
		cursor : "move"
	}).fadeIn('fast');
	
	$("#bgDiv").dblclick(function(){
		$(this).fadeOut('fast');
		$("#dialogImg").fadeOut('fast').css({
			cursor : "pointer"
		});
		$("#imageDialogDiv").fadeOut('fast');
	});
	/*$(document).mouseup(function(e){
		if($(e.target).parent('#bgDiv').length == 0){
			$("#bgDiv").fadeOut('fast');
			$("#dialogImg").fadeOut('fast').css({
				cursor : "pointer"
			});
			$("#imageDialogDiv").fadeOut('fast');
		}
	});*/
	var bgDiv = document.getElementById('bgDiv');
	var dialogImg = document.getElementById('dialogImg');
	//注册事件
	if(bgDiv.addEventListener){//W3C
		bgDiv.addEventListener('DOMMouseScroll',scrollFunc,false);
		dialogImg.addEventListener('DOMMouseScroll',scrollFunc,false);
	}
	
	bgDiv.onmousewheel=scrollFunc;//IE/Opera/Chrome
	dialogImg.onmousewheel=scrollFunc;//IE/Opera/Chrome
	$("#dialogImg").draggable({
		drag : function(event,ui){
			var left = ui.position.left;
			var top = ui.position.top;
			$("#imageDialogDiv").css({
				left : (left-10) + 'px',
				top : (top-10) + 'px'
			});
		}
	});
	var imageListStr = $this.attr('data-src');//轮播地址
	if(imageListStr){//有该属性时图片可轮播
		$('#pre, #next').show();
		var imageList = JSON.parse(imageListStr);
		var count = Number($this.attr('data-count'));
		//向前
		$('#pre').unbind('click').bind('click', function(e){
			e.stopPropagation();
			e.preventDefault();
			if(count == 0){//第一张时向前跳到最后一张
				count = imageList.length - 1;
			}else{
				count -= 1;
			}
			$('#dialogImg').attr('src', imageList[count])
		});
		//向后
		$('#next').unbind('click').bind('click', function(e){
			e.stopPropagation();
			e.preventDefault();
			if(count == imageList.length - 1){//最后一张是向后跳到第一张
				count = 0;
			}else{
				count += 1;
			}
			$('#dialogImg').attr('src', imageList[count])
		});
	}else{//否则轮播按钮隐藏
		$('#pre, #next').hide();
	}
}
function initTabEvent(){
	$("#tabUl").find("li:not(.clear)").each(function(){
		$(this).click(function(){
			//tab选项卡样式动作
			var li = $(this).find("a").attr("href");
			if(li){
				var target = $(this).attr("target");
				$("#activeLi").removeAttr("id");
				$(this).attr("id","activeLi");
			}
		});
	});
}

//等待遮罩层 调用：backDiv("show"); or backDiv("hide");
function backDiv(showType){
	var left = (window.screen.width-440)/2;
	var top = (window.screen.height-100)/2;
	var $backDiv = $("#backDiv");
	var $beforeDiv = $("#beforeDiv");
	var $backImg = $beforeDiv.find(".backImg");
	var $backText = $beforeDiv.find(".backText");
	var $closeBtn = $beforeDiv.find(".closeBtn");
	$beforeDiv.css({
		left:left,
		top:top,
		'background-color':'#FFF'
	});
	if(showType == 'show'){
		$backDiv.show();
		$beforeDiv.show();
	}
	else if(showType == 'hide'){
		$backDiv.hide();
		$beforeDiv.hide();
	}
	$closeBtn.unbind('click').click(function(){
		$backDiv.hide();
		$beforeDiv.hide();
	});
}

function initMenuScroll(){
	var $leftMenu = $("#leftMenu");
	var scrollTop = $leftMenu.scrollTop();
	var panelHeight = $leftMenu.height();
	var $changePanel = $("#changePanel");
	$changePanel.css({
		top : (panelHeight/2+scrollTop) + 'px',
		width : '8px',
		position : 'absolute',
		right : 0,
		'z-index' : '300'
	});
	$leftMenu.scroll(function(){
		var $menuPanel = $(this);
		var scrollTop = $menuPanel.scrollTop();
		var menuHeight = $menuPanel.height();
		var h = (scrollTop + menuHeight/2);
		$changePanel.css({
			top : h + 'px',
			width : '8px',
			position : 'absolute',
			right : 0,
			'z-index' : '300'
		});
	});
}
/**
 * 退出登录
 */
function exitSystem(){
	var urlStr = path+"/homePage/removeSession";
	$.post(urlStr,{
		name : "userName"
	},function(data,status){
		if(status == 'success'){
			if(data == 'ok'){
				var url = path + "/";
				window.location.href = url;
			}
		}
	});
}
function setCurrentUserName(){
	var userName = top.BasicAES.luID;
//	if(userName == 'shunyigrid'){
//		$('.logoMenu').hide();
//	}
	$("#userMsg").html(userName);
}


var userMenu = (function(){
	var subMenu = {};
	var subBroMenu = {};
	var subBroMenu1 = {};
	(function(){
		var resultStr = findResult();
		var data = null;
		eval("data="+resultStr);
		var menuList = data.menuList;
		var sublist = data.sublist;
		for(var i = 0; i < menuList.length; i++){
			var subArr = [];
			var subBroArr = [];
			var subBroArr1 = [];
			var menuId = menuList[i];
			for(var j = 0; j < sublist.length; j++){
				var sub = sublist[j];
				var parentId = sub.parentId;
				var menuCode = sub.menuCode.toLowerCase();
				var brotherId = sub.brotherId.toLowerCase();
				var brotherId1 = sub.brotherId;
				if(menuId == parentId){
					subArr.push(menuCode);
					if(brotherId){
						subBroArr.push(brotherId);
					}
					if(brotherId1){
						subBroArr1.push(brotherId1);
					}
				}
			}
			var tmpArr = distinct(subBroArr);
			var tmpArr1 = distinct(subBroArr1);
			subMenu[menuId] = subArr;
			subBroMenu[menuId] = tmpArr;
			subBroMenu1[menuId] = tmpArr1;
		}
	})();
	var getSubMenuList = function(id){
		return {
			subMenu: subMenu[id],
			subBroMenu: subBroMenu[id],
			subBroMenu1: subBroMenu1[id]
		}
	}
	return {
		getSubMenuList: getSubMenuList,
		subMenu: subMenu
	}
})();

/**
 * 数值去重
 * @param arr
 * @returns
 */
function distinct(arr) {
  var obj = {},
  		i = 0,
  		len = 0;
  if (Array.isArray(arr) && arr.length > 0) {
	  len = arr.length;
	  for (i = 0; i < len; i += 1) {
	      obj[arr[i]]=0;
	  }
	  for(i=0;i<len;i+=1){
		  obj[arr[i]]+=1;
	  }
	  return obj;
  }
  return obj;
}

function findResult(){
	$.ajaxSettings.async = false;
	var result = null;
	var url = getRootPath() + "/homePage/findResult";
	$.post(url,{},function(data,status){
		if(status == 'success'){
			result = data;
		}
	});
	$.ajaxSettings.async = true;
	return result;
}

function getCurrentMenuId(){
	var curId = $("#activeLi").attr("curId");
	return curId;
}

function initMenu(){
	$.ajaxSettings.async = false;
	var iconPath = path + "/resource/images/menu_icon/";
	var customIconPath = path + "/resource/";
	var logoPaht = path + '/resource/';
	var $tabUl = $("#tabUl");
	var resultStr = findResult();
	var result = null;
	eval("result="+resultStr);
	$.ajaxSettings.async = true;
	if(result){
		var productName = result.productName;
		var logo = result.logo;
		$("#productName").html(productName);
		$("#logo").attr('src', logoPaht + logo);
		$("#titleName").html(productName);
		var list = result.menuInfolist;
		if(list && list.length > 0){
			var html = "";
			for(var i=list.length-1;i >= 0;i--){
				var o = list[i];
				var id = o.id;//菜单id
				var menuName = o.menuName;//菜单名称
				var imageurl = o.imageurl;//根据用户自定义出现图标
				var menuIconName = "menu"+id+".png";
				var menuIcon = '';
				if(imageurl && imageurl != ''){
					menuIcon = customIconPath+imageurl;
				}
				else{
					menuIcon = iconPath+menuIconName;
				}
				var url = "";
				if(o.url.indexOf("homePage") == -1){
					url = o.url+"?id="+id;
				}
				else{
					url = path + o.url+"?id="+id;
				}
				var pid = o.pid;
				var line = "";
				if(i == 0){
					line += "<li id='activeLi' imageurl='"+ imageurl +"' menuIconName='"+ menuIconName +"' target='tab4' class='tab-item' curId='"+ id +"' sourceUrl='"+ url +"'>";
//						line += "<a href='"+ url +"' target='iframe1'><span class='tab_txt'>"+ menuName +"</span><span class='tab_mark'></span></a>";
						line += "<a href='"+ url +"' target='iframe1'><span class='tab_txt'><img src='"+ menuIcon +"' menuName='"+ menuName +"'></span><span class='tab_mark'></span></a>";
					line += "</li>";
				}
				else{
					line += "<li target='tab4' imageurl='"+ imageurl +"' menuIconName='"+ menuIconName +"' class='tab-item' curId='"+ id +"' sourceUrl='"+ url +"'>";
//						line += "<a href='"+ url +"' target='iframe1'><span class='tab_txt'>"+ menuName +"</span><span class='tab_mark'></span></a>";
						line += "<a href='"+ url +"' target='iframe1'><span class='tab_txt'><img src='"+ menuIcon +"' menuName='"+ menuName +"'></span><span class='tab_mark'></span></a>";
					line += "</li>";
				}
				html += line;
			}
			$("#tabUl").html(html);
		}
	}
}

$(function(){
	$.ajaxSettings.async = false;
	initMenu();
	setCurrentUserName();
	calcHeight();
	var href = $("#activeLi").find("a").attr("href");
	$("#iframe1").attr("src", href);
	initTabEvent();
	$(window).resize(function(){
		calcHeight();
	});
	$.ajaxSettings.async = true;
});

function getName(){
	var name = findSessionWithName();
	$("#sessionByuserName").html(name);
}
/**
 * 一级菜单脚本事件
 */
function event1(){
	var initSession = getSession("firstMenuId");
	getName();//到后台查询登录用户名称放到页面
	//遍历顶部一级菜单
	var $fMenus = $("div.fMenu");
	var $iframe1 = $("#iframe1");
	var $iconPanel = $("#iconPanel");//向左隐藏导航层的图标层
	var $hidePanel = $("#hidePanel");//向右打开左侧导航层的图标层
	$fMenus.each(function(){
		$(this).unbind('click').click(function(){
			var firstMenuId = $(this).attr("firstMenuId");
			setSession("firstMenuId",firstMenuId);
			var $active = $("#active");
			if($active.length > 0){
				$active.removeAttr("id");
			}
			$fMenus.removeClass("active");//去掉上次的选中class：active效果
			$(this).addClass("active");//添加这次点击的div选中效果
			
			var eventIndex = $(this).attr("eventIndex");//eventIndex:对应二级菜单的功能模块标记
			if(eventIndex == ''){
				$iframe1.attr("scrolling","no");
				var href = path + "/homePage/default_openlayer";//首页
				$iframe1.attr("src",href);//显示首页
				$iconPanel[0].click();//隐藏左侧菜单栏
				var $leftMenu = $("#leftMenu");
				if($leftMenu.hasClass("show")){
					$iconPanel.get(0).click();
					$leftMenu.replaceClass({
						oldClass : 'show',
						newClass : 'hide'
					});
				}
				if($hidePanel.hasClass("show")){
					$hidePanel.replaceClass({
						oldClass : 'show',
						newClass : 'hide'
					});
				}
			}
			else{
				$iframe1.attr("scrolling","yes");
				$("div.range").each(function(i){
					if($(this).hasClass(eventIndex)){
						if($(this).hasClass("hide")){
							$(this).removeClass("hide").addClass("show");
							var $firstRange = $($("."+eventIndex)[0]);
							if(!$firstRange.hasClass("active")){
								$firstRange.addClass("active");//默认二级菜单的第一个菜单设置选中状态
							}
							
							//$firstRange.find("ul:hidden").slideDown(300);//二级菜单下属的三级菜单如果隐藏就显示出来
							var $firstSecondMenuTitle = $firstRange.find(".secondMenuTitle");
							if($firstSecondMenuTitle.find(".line-icon-down").length == 0){//通过下拉图标判断是否存在三级菜单
								var href = $firstSecondMenuTitle.find("a").attr("href");
								var menuId = $firstSecondMenuTitle.find("a").attr("menuId");
								if(href != "javascript:void(0)"){
									//$("#iframe1").attr("src",href);
									setSession("path",href);//将菜单地址存入session
									setSession("menuId",menuId);//将菜单id存入session
								}
							}
							else{
								var $lis = $firstRange.find("ul").find("li");
								$lis.each(function(i){
									if(i == 1){
										var href = $(this).find("a").attr("href");
										var menuId = $(this).find("a").attr("menuId");
										if(href != "javascript:void(0)"){
											//$("#iframe1").attr("src",href);
											setSession("path",href);
											setSession("menuId",menuId);
										}
									}
								});
							}
						}
					}
					else{//点击一级菜单联动过的上次的二级菜单恢复隐藏和收起
						if($(this).hasClass("show")){
							$(this).removeClass("show").addClass("hide");
						}
						if($(this).hasClass("active")){
							$(this).removeClass("active");
							//var $ul = $(this).find("ul:hidden").slideUp(0);
						}
					}
				});
				
				var $leftMenu = $("#leftMenu");
				if($leftMenu.is(":hidden")){
					$("#iconPanel1").get(0).click();
				}
			}
		});
	});
	if(initSession == ""){
		$("#homeFmenu")[0].click();
	}
}
/**
 * 二级菜单脚本事件
 */
function event2(){
	//二级菜单动作
	var $iframe1 = $("#iframe1");
	var $ranges = $("#secondMenu").find("div.range");
	$ranges.each(function(){
		var $range = $(this);
		$(this).unbind('click').click(function(e){
			var $this = $(this);
			var $span = $this.find("div.secondMenuTitle").find("span");
			var isHasIcon = $span.length > 0 ? true : false;
			if(isHasIcon == false){//没有三级菜单
				$ranges.find("ul").each(function(){
					if(!$(this).is(":hidden")){
						//$(this).slideUp(300);
						$ranges.find("div.secondMenuTitle span.line-icon-up").removeClass("line-icon-up").addClass("line-icon-down");
					}
				});
			}
			else{
				var $ul = $this.find("ul");
				if($ul.is(":hidden")){
					$ranges.find("ul").each(function(){
						if(!$(this).is(":hidden")){
							//$(this).slideUp(300);
							$ranges.find("div.secondMenuTitle span.line-icon-up").removeClass("line-icon-up").addClass("line-icon-down");
						}
					});
					//$ul.slideDown(300,function(){
					//	$span.removeClass("line-icon-down").addClass("line-icon-up");
					//});
				}
				else{
					if(upFlag == false){
						//$ul.slideUp(300,function(){
						//	$span.removeClass("line-icon-up").addClass("line-icon-down");
						//});
					}
					else{
						upFlag = false;
					}
				}
				var $linkLis = $ul.find("li:not(.separate):eq(0)");
				var href = $linkLis.find("a").attr("href");
				$iframe1.attr("src",href);
				$iframe1.attr("scrolling","yes");
				
				$ul.find("li:not(.separate)").each(function(){
					$(this).click(function(e){
						var $a = $(this).find("a");
						if($a.length > 0){
							$a[0].click();
						}
						e.stopPropagation();
						e.preventDefault();
					});
				});
				
				var fli = $($ul[0]).find("li:not(.separate)").get(0);
				$("#active").removeAttr("id");
				$(fli).attr("id","active");
			}
			
			$ranges.removeClass("active");
			$this.addClass("active");
			
			var $secondMenuTitle = $this.find(".secondMenuTitle");
			var href = $secondMenuTitle.find("a").attr("href");
			var menuId = $secondMenuTitle.find("a").attr("menuId");
			if(href != undefined || href != "javascript:void(0)"){
				$iframe1.attr("src",href);
				$iframe1.attr("scrolling","yes");
				if(upFlag == false){
					setSession("path",href);
				}
				setSession("menuId",menuId);
				
				var $leftMenu = $("#leftMenu");
				if($leftMenu.is(":hidden")){
					$("#iconPanel1").get(0).click();
				}
			}
			e.stopPropagation();
			e.preventDefault();
		});
	});
}
/**
 * 三级菜单脚本事件
 */
function event3(){
	var $iframe1 = $("#iframe1");
	var $secondMenu = $("#secondMenu");
	var $ranges = $secondMenu.find("div.range");
	$ranges.each(function(){
		var $lis = $(this).find("ul").find("li:gt(0)");
		$lis.each(function(){
			var $this = $(this);
			$this.unbind('click').click(function(e){//三级菜单点击动作
				//删除上一次的三级菜单的选中样式
				var $active = $("#active");
				if($active.length > 0){
					$active.removeAttr("id");
				}
				//添加此次点击li的选中样式
				$(this).attr("id","active");
				
				//找到此三级菜单以上的二级菜单面板(div.range)
				var $firstRange = $(this).parent().parent();
				
				//删除二级菜单的active状态
				$secondMenu.find(".active").removeClass("active");
				//添加此被点击的三级菜单以上所属的二级菜单面板的选中样式
				if($firstRange.hasClass("active") == false){
					$firstRange.addClass("active");
				}
				
				upFlag = true;
				//当前li元素里面链接的网页地址
				var href = $(this).find("a").attr("href");
				var menuId = $(this).find("a").attr("menuId");//菜单id（对应数据库id——唯一值）
				if(href != undefined && href != "javascript:void(0)"){
					$iframe1.attr("src",href);//在右面iframe中显示菜单指向的网页
					$iframe1.attr("scrolling","yes");
					setSession("path",href);
					setSession("menuId",menuId);
				}
				e.stopPropagation();//阻止事件冒泡
				e.preventDefault();//不执行该元素动作的默认行为
			});
		});
	});
}
function event4(){
	var firstId = getSession("firstMenuId");
	if(firstId != ""){
		$("div.fMenu").removeClass("active");
		var $firstMenu = $("div[firstmenuid='"+ firstId +"']");
		$firstMenu.addClass("active");
		var eventIndex1 = $firstMenu.attr("eventIndex");//eventIndex:对应二级菜单的功能模块标记
		$("div.range").each(function(i){
			if($(this).hasClass(eventIndex1)){
				if($(this).hasClass("hide")){
					$(this).removeClass("hide").addClass("show");
					var $firstRange = $($("."+eventIndex1)[0]);
					if(!$firstRange.hasClass("active")){
						$firstRange.addClass("active");//默认二级菜单的第一个菜单设置选中状态
					}
					
					//$firstRange.find("ul:hidden").slideDown(300);//二级菜单下属的三级菜单如果隐藏就显示出来
					var $firstSecondMenuTitle = $firstRange.find(".secondMenuTitle");
					if($firstSecondMenuTitle.find(".line-icon-down").length == 0){//通过下拉图标判断是否存在三级菜单
						var href = $firstSecondMenuTitle.find("a").attr("href");
						var menuId = $firstSecondMenuTitle.find("a").attr("menuId");
						if(href != "javascript:void(0)"){
							//$("#iframe1").attr("src",href);
						}
					}
					else{
						var $lis = $firstRange.find("ul").find("li");
						$lis.each(function(i){
							if(i == 1){
								var href = $(this).find("a").attr("href");
								var menuId = $(this).find("a").attr("menuId");
								if(href != "javascript:void(0)"){
									//$("#iframe1").attr("src",href);
								}
							}
						});
					}
				}
			}
			else{//点击一级菜单联动过的上次的二级菜单恢复隐藏和收起
				if($(this).hasClass("show")){
					$(this).removeClass("show").addClass("hide");
				}
				if($(this).hasClass("active")){
					$(this).removeClass("active");
					//var $ul = $(this).find("ul:hidden").slideUp(0);
				}
			}
		});
		
		var urlPath = getSession("path");
		if(urlPath == ""){
			//var src = $("#iframe1").attr("src");
			//$("#iframe1").attr("src",src);
		}
		else if(urlPath != ""){
			//$("#iframe1").attr("src",urlPath);
			var $leftMenu = $("#leftMenu");
			var $iconPanel = $("#iconPanel");//向左隐藏导航层的图标层
			var $hidePanel = $("#hidePanel");//向右打开左侧导航层的图标层
			
			if($hidePanel.hasClass("hide")){
				$hidePanel.replaceClass({
					oldClass : 'hide',
					newClass : 'show'
				});
				var $iconPanel1 = $("#iconPanel1");
				$iconPanel1[0].click();
			}
		}
		
		var menuId = getSession("menuId");
		if(menuId != ""){
			var $menuId = $("#"+menuId);
			var $range = $menuId.parent().parent();
			//$range.click(function(){
				//$(this).find("ul:hidden").slideDown(300);
			//});
			var menuId = getSession("menuId");
			if(menuId != ""){
				var $menuId = $("#"+menuId);
				$menuId.click();
			}
		}
	}
}

function reLogin(){
	var btn = document.getElementById("exitBtn");
	btn.click();
}

function iconPanelEvent(){
	//点击隐藏图标藏起左侧二级菜单
	var $leftMenu = $("#leftMenu");
	var $hidePanel = $("#hidePanel");
	var $mainMenu = $("#mainMenu");
	var $iframe1 = $("#iframe1");
	$("#iconPanel").click(function(){
		//隐藏菜单
		var isHasShow = $leftMenu.hasClass("show");
		if(isHasShow){
			$leftMenu.removeClass("col-xs-2").removeClass("col-sm-2").removeClass("col-md-2").removeClass("col-lg-2").removeClass("show").addClass("hide");
			$mainMenu
			.removeClass("col-xs-10")
			.removeClass("col-sm-10")
			.removeClass("col-md-10")
			.removeClass("col-lg-10")
			.addClass("col-xs-12")
			.addClass("col-sm-12")
			.addClass("col-md-12")
			.addClass("col-lg-12");
		}
		if($hidePanel.hasClass("hide")){
			$hidePanel.removeClass("hide").addClass("show");
		}
		else{
			$hidePanel.removeClass("show").addClass("hide");
		}
		
		if(window.top.iframe1.resizeFrame)
			window.top.iframe1.resizeFrame();
		
		//处理皮肤管理页面选中框保持原位
		var $cts = $iframe1.contents();
		var $cta = $cts.find("#activeDiv");//皮肤管理页面的选中框元素
		if($cta.length > 0){
			var themeId = $cta.attr("themeId");//选中框选中皮肤id
			if(themeId != undefined){
				var $themePanel = $cts.find("div.themeItem[themeId='"+ themeId +"']");//通过id找到选中的皮肤
				$themePanel[0].click();//皮肤重新选中
			}
		}
	});
	
	$("#iconPanel1").click(function(){
		//露出菜单
		var isHasHide = $leftMenu.hasClass("hide");
		if(isHasHide){
			$leftMenu.addClass("col-xs-2").addClass("col-sm-2").addClass("col-md-2").addClass("col-lg-2").removeClass("hide").addClass("show");
			$mainMenu
			.removeClass("col-xs-12")
			.removeClass("col-sm-12")
			.removeClass("col-md-12")
			.removeClass("col-lg-12")
			.addClass("col-xs-10")
			.addClass("col-sm-10")
			.addClass("col-md-10")
			.addClass("col-lg-10");
		}
		if($hidePanel.hasClass("show")){
			$hidePanel.removeClass("show").addClass("hide");
		}
		if(window.top.iframe1.resizeFrame)
			window.top.iframe1.resizeFrame();
		
		//处理皮肤管理页面选中框保持原位
		var $cts = $iframe1.contents();
		var $cta = $cts.find("#activeDiv");//皮肤管理页面的选中框元素
		if($cta.length > 0){
			var themeId = $cta.attr("themeId");//选中框选中皮肤id
			if(themeId != undefined){
				var $themePanel = $cts.find("div.themeItem[themeId='"+ themeId +"']");//通过id找到选中的皮肤
				$themePanel[0].click();//皮肤重新选中
			}
		}
	});
}

//homePage父页维护高度
function calcHeight(){
	var height = $('.logoMenu ').is(':hidden') ? 0 : 70;
	var h = $(window).height() - height;
	$("#iframe1").css({height:(h)+'px'});
}

function getFrameHeight(){
	var height = $('.logoMenu ').is(':hidden') ? 0 : 70;
	return $(window).height() - height;
}

function exitSystem(url){
	var urlStr = path+"/homePage/removeSession";
	$.post(urlStr,{
		name : "loginUser,firstMenuId,path,menuId"
	},function(data,status){
		if(status == 'success'){
			if(data == 'ok'){
				window.location.href = url;
			}
		}
	});
}

//ajax保存session
function setSession(name,value){
	var url = path+"/homePage/setSession";
	$.post(url,{
		name : name,
		value : value
	},function(data,status){});
}
function getSession(name){
	$.ajaxSettings.async = false;
	var value = "";
	var url = path+"/homePage/getSession";
	$.post(url,{
		name : name
	},function(data,status){
		if(status == 'success'){
			if(data != ""){
				value = data;
			}
		}
	});
	$.ajaxSettings.async = true;
	return value;
}

function calcHeightBySubJsp(){
	var h = $(window).height()-70-10;
	return h;
}
//判断返回子页面父页面所在层的大小
function calcRightOffset(){
	var width = $("#mainMenu").width();
	var height = $("#mainMenu").height();
	return {
		width : width,
		height : height
	};
}

function calcWidth(){
	var width = $(window).width();
	return width;
}


/**
 * 修改密码
 */
function initModifyPwd(){
	$("#sessionByuserName").click(function(){
		var user = findCurrentUser();
		var id = user.id;
		$("#modify_username").val(user.username);
		$("#modify_name").val(user.name);
		$("#modify_oldPwd").val("");
		$("#modify_newPwd").val("");
		$("#modify_confirmPwd").val("");
		var d = dialog({
			id : "modifyPwd",
			title : "修改密码",
			fixed : true,
			okValue : "<i class='fa fa-pencil-square-o'></i> 修改",
			padding : 30,
			ok : function(){
				var oldPwd = $.trim($("#modify_oldPwd").val());
				var newPwd = $.trim($("#modify_newPwd").val());
				var confirmPwd = $.trim($("#modify_confirmPwd").val());
				if(oldPwd == ''){
					alertBubble("请输入旧密码",function(){
						$("#modify_oldPwd").focus();
					},$("#modify_oldPwd")[0]);
					return false;
				}
				else if(newPwd == ''){
					alertBubble("请输入新密码",function(){
						$("#modify_newPwd")[0].focus();
					},$("#modify_newPwd")[0]);
					return false;
				}
				else if(confirmPwd == ''){
					alertBubble("请输入确认密码",function(){
						$("#modify_confirmPwd")[0].focus();
					},$("#modify_confirmPwd")[0]);
					return false;
				}
				else if(newPwd != confirmPwd){
					alertBubble("确认密码和新密码不匹配",function(){
						$("#modify_confirmPwd").val("");
						$("#modify_confirmPwd")[0].focus();
					},$("#modify_confirmPwd")[0]);
					return false;
				}
				else{
					var s = {
						ID : id,
						userName : $("#modify_username").val(),
						password : oldPwd,
						newpwd : newPwd
					};
					return updatePassword(s);
				}
			},
			content:$("#modifyPasswordDialog")[0],
			cancelValue:"<i class='fa fa-close'></i> 关闭",
			cancel:function(){
				return true;
			},
			onshow : function(){
				$("#modify_oldPwd").keyup(function(evt){
					var keycode = evt.keyCode;
					if(keycode == 13){
						$("#modify_newPwd")[0].focus();
					}
				});
				$("#modify_newPwd").keyup(function(evt){
					var keycode = evt.keyCode;
					if(keycode == 13){
						$("#modify_confirmPwd")[0].focus();
					}
				});
			}
		});
		d.showModal();
	});
}

/**
 * 皮肤处理
 */
function initTheme(){
	var user = findCurrentUser();
	var themeValue = user.themeValue;
	
	var head = document.getElementsByTagName('head')[0];
	var link1 = document.createElement('link');
	var link2 = document.createElement('link');
	var link3 = document.createElement('link');
	
	var imgName = "";
	var imagesPath = path + "/resource/dh_dashboard/img/body/";
	if(themeValue != "" && themeValue != undefined){
		var lastIndex = themeValue.lastIndexOf("-");//取得最后一个-的位置
		imgName = themeValue.substring(lastIndex+1,themeValue.length)+".jpg";//得到皮肤对应的背景图片
	}
	
	var $panelHeading = $("div.panel-heading");
	var $divPanels = $("div.panel");
	var $body = $("body");
	if(themeValue != undefined && themeValue != ""){//处理不是默认皮肤的动作
		$body.attr("id",themeValue);
		$divPanels.addClass("tile");
		$panelHeading.addClass("tile-title");
		$panelHeading.css({color:"#FFF"});
		
		link1.href = path + "/resource/dh_dashboard/css/style.css";
		link1.rel = 'stylesheet';
		link1.type = 'text/css';
		link1.id = "link1";
		head.appendChild(link1);
		
		link2.href = path + "/resource/dh_dashboard/css/form.css";
		link2.rel = 'stylesheet';
		link2.type = 'text/css';
		link2.id = "link2";
		head.appendChild(link2);
		
		link3.href = path + "/resource/dh_dashboard/css/font-awesome.min.css";
		link3.rel = 'stylesheet';
		link3.type = 'text/css';
		link3.id = "link3";
		head.appendChild(link3);
		
		var newBootstrap = document.getElementById("newBootstrap");
		$(newBootstrap).after("<link rel=\"stylesheet\" type=\"text/css\" href=\""+ path +"/resource/dh_dashboard/css/bootstrap.css\" id=\"themeBootstrap\"/>");
		$(newBootstrap).remove();
		
		$body.css({
			"background-image":imagesPath+imgName
		});
		
		var topBgColor = "",menuBgColor = "",leftMenuBgColor = "";
		var classId = "";
		if(themeValue == 'skin-blur-violate'){//模糊夕阳色
			topBgColor = "#5B2019";
			menuBgColor = "#8D3B2C";
			leftMenuBgColor = "#663647";
			classId = "active2";
		}
		else if(themeValue == 'skin-blur-lights'){//模糊灯火
			topBgColor = "#181F1F";
			menuBgColor = "#6E6450";
			leftMenuBgColor = "#253332";
			classId = "active3";
		}
		else if(themeValue == 'skin-blur-city'){//模糊都市
			topBgColor = "#0D0710";
			menuBgColor = "#551D38";
			leftMenuBgColor = "#541C34";
			classId = "active4";
		}
		else if(themeValue == 'skin-blur-greenish'){//呈绿
			topBgColor = "#353F34";
			menuBgColor = "#415249";
			leftMenuBgColor = "#575B47";
			classId = "active5";
		}
		else if(themeValue == 'skin-blur-night'){//夜晚
			topBgColor = "#031525";
			menuBgColor = "#0E324A";
			leftMenuBgColor = "#1B3432";
			classId = "active6";
		}
		else if(themeValue == 'skin-blur-sunny'){//和煦
			topBgColor = "#392C18";
			menuBgColor = "#5E4C32";
			leftMenuBgColor = "#2B1B07";
			classId = "active7";
		}
		else if(themeValue == 'skin-blur-blue'){//忧郁蓝
			topBgColor = "#0F3239";
			menuBgColor = "#1B5056";
			leftMenuBgColor = "#232A38";
			classId = "active8";
		}
		else if(themeValue == 'skin-blur-chrome'){//铬黄
			topBgColor = "#252529";
			menuBgColor = "#444449";
			leftMenuBgColor = "#0E0F13";
			classId = "active9";
		}
		else if(themeValue == 'skin-blur-ocean'){//海洋色
			topBgColor = "#1E394B";
			menuBgColor = "#3189C9";
			leftMenuBgColor = "#3C6488";
			classId = "active10";
		}
		else if(themeValue == 'skin-blur-sunset'){//日落
			topBgColor = "#2F1922";
			menuBgColor = "#71432D";
			leftMenuBgColor = "#5F2A12";
			classId = "active11";
		}
		else if(themeValue == 'skin-blur-yellow'){//黄色
			topBgColor = "#57472C";
			menuBgColor = "#836A42";
			leftMenuBgColor = "#63482C";
			classId = "active12";
		}
		else if(themeValue == 'skin-blur-kiwi'){//猕猴桃色
			topBgColor = "#47562F";
			menuBgColor = "#6C8348";
			leftMenuBgColor = "#295532";
			classId = "active13";
		}
		else if(themeValue == 'skin-blur-nexus'){//模糊关系
			topBgColor = "#660E34";
			menuBgColor = "#9C1750";
			leftMenuBgColor = "#811557";
			classId = "active14";
		}
		$("#rowMenu").css({
			"background-color" : topBgColor
		});
		$("#rightMenu").css({
			"background-color" : topBgColor
		});
		$("div.logoutMenu > .top").css({"background-color" : topBgColor});
		$("div.logoutMenu > .bottom").css({"background-color" : topBgColor});
		$("#leftMenu").css({
			"background-color" : leftMenuBgColor,
			"border-top" : "0px solid #fff",
			"border-right" : "0px solid #fff",
			"border-left" : "0px",
			"border-bottom" : "0px"
		});
		var $clazzId = $("#"+classId);
		$("#rightMenu div.fMenu").each(function(){
			$(this).css({
				"background-color" : topBgColor
			}).hover(function(){
				$(this).css({
					"background-color" : menuBgColor
				});
			},function(){
				if($(this).attr("id") == undefined){
					$(this).css({
						"background-color" : topBgColor
					});
				}
			});
			$(this).click(function(){
				if($clazzId.length > 0){
					if($clazzId.attr("id")){
						$clazzId.removeAttr("id");
					}
					$clazzId.removeAttr("style");
					$clazzId.css({
						"background-color" : topBgColor,
						"float" : "right"
					});
				}
				$(this).attr("id",classId);
			});
		});
		
		var $active = $("#rightMenu .active");
		$active.removeClass("active").removeAttr("style").attr("id",classId).css({
			float:"right"
		});
	}
	else{//恢复默认皮肤
		$body.removeAttr("id");
		if($divPanels.hasClass("tile")){
			$divPanels.removeClass("tile");
		}
		if($panelHeading.hasClass("tile-title")){
			$panelHeading.removeClass("tile-title");
			$panelHeading.removeAttr("style");
		}
		$("#link1").remove();
		$("#link2").remove();
		$("#link3").remove();
	}
}
function alertLog(msg,callback){
	var d = dialog({
		id : "alertDialog",
		title:"系统警告：",
		fixed:true,
		width:350,
		onshow : function(){
			$("#dialogPanel").html(msg);
		},
		okValue : "关闭",
		ok:function(){
			if(callback){
				callback();
			}
			return true;
		},
		onclose : function(){
			if(callback){
				callback();
			}
		},
		content:$("#dialogPanel")[0]
	});
	d.showModal();
}



function openIntensifyDialog(id,name,hideTab3){
	var d = dialog({
		title: name,
		id : 'intensifyDialog',
		onshow:function(){
			if(hideTab3){
				$("#tab3Li").hide();
			}
			else{
				$("#tab3Li").show();
			}
			initCalendarData(id);
			ShowTable(id);
		},
		content : getId('intensifyDialog'),
		padding : 5
	});
	d.showModal();
}

function openIntensifyDialogShunYi(id,name,hideTab3){
	var d = dialog({
		title: name,
		id : 'intensifyDialog',
		onshow:function(){
			if(hideTab3){
				$("#tab3Li").hide();
			}
			else{
				$("#tab3Li").show();
			}
			initCalendarData(id);
			ShowTableShunYi(id);
		},
		content : getId('intensifyDialog'),
		padding : 5
	});
	d.showModal();
}

function openSuperviseDetailDialog(tmpid,name){
	var d = dialog({
		title: name,
		id : 'superviseDetailDialog',
		onshow:function(){
			loadPic(tmpid);
		},
		content : getId('superviseDetailDialog'),
		padding : 5
	});
	d.showModal();
}

function loadPic(id){
	$.ajaxSettings.async = false;
	var s = {
		activityId: id
	};
	
	var param = initParam(s);
	$.ajaxSettings.async = true;
	callapi_async("getActivityDetailImagesByActivityId_SENSOR",param,function(data){
		innerCall(data,function(result){
			var picCount = result.length;
			$("#picCount").html(picCount);
			var SupervisionDetailPicture = $("#SupervisionDetailPicture");
			$("#SupervisionDetailPicture").attr("src","");
			$("#SupervisionDetailPicture").show();
			if(result.length==0){
				var SupervisionDetailPicture = $("#SupervisionDetailPicture");
				$("#SupervisionDetailPicture").attr("src","");
				$("#leftEvent1").unbind();
				$("#rightEvent1").unbind();
			}
			else{
				var SupervisionDetailPicture = $("#SupervisionDetailPicture");
				var apath = path+"/resource/images/";
				$("#SupervisionDetailPicture").attr("src",apath+result[0].imagePath);
				$("#leftEvent1").unbind();
				$("#leftEvent1").bind("click",function(){
					preImage(result);
				});
				$("#rightEvent1").unbind();
				$("#rightEvent1").bind("click",function(){
					nextImage(result);					
				});
			}
	
	});
});

}


function nextImage(imageUrl){
	var imageUrlArr = imageUrl;
	
	if(imageUrlArr[0].src != ""){
		imageCount++;
		if(imageCount > imageUrlArr.length -1){
			imageCount = 0;
		}
		var SupervisionDetailPicture = $("#SupervisionDetailPicture");
		var apath = path+"/resource/images/";
		$("#SupervisionDetailPicture").attr("src",apath+imageUrlArr[imageCount].imagePath);
		var currentPic = imageCount+1;
		$("#currentPic").html(currentPic);
		
	}
}

function preImage(imageUrl){
	var imageUrlArr = imageUrl;

	if(imageUrlArr[0].src != ""){
		imageCount--;
		if(imageCount < 0){
			imageCount = imageUrlArr.length -1;
			var currentPic = imageUrlArr.length;
			$("#currentPic").html(currentPic);
		}
		else{
			var currentPic = imageCount+1;
			$("#currentPic").html(currentPic);
		}
		var SupervisionDetailPicture = $("#SupervisionDetailPicture");
		var apath = path+"/resource/images/";
		$("#SupervisionDetailPicture").attr("src",apath+imageUrlArr[imageCount].imagePath);
		
	}
}


function cancelClick(){
	dialog.get('intensifyDialog').close().remove();
}

/**
 * 延迟加载echarts3.js
 * 只加载一次
 */
var appendFlag = true;
function initEcharts(){
	var element = document.createElement("script");
	element.src = path + "/resource/echart/js/echarts3.js";
	//element.src = path + "/resource/echart/js/echarts-all-3.js";
	if(appendFlag){
		document.body.appendChild(element);
		appendFlag = false;
	}
}

function openSupervisionDialog(id){
	var d = dialog({
		id : 'SupervisionDialog',
		onshow:function(){
			LoadSupervisionData(id);
			//initCalendarData(id);
			//ShowTable(id)
		},
		content : getId('SupervisionDialog'),
		padding : 5,
		cancelValue : '关闭',
		cancel : function(){
			return true;
		}
	});
	d.showModal();
}

/**
 * 根据id获取日历数据
 * @param id
 */
function initCalendarData(id){
	$.ajaxSettings.async = false;
	var w = $("#panel-603297").width();
	var h = $("#panel-603297").height();
	$("#calendar").css({'height': h + 'px','width':w + 'px'});
	var s = {
		"id": id
	};
	var param = initParam(s);
	$.ajaxSettings.async = true;
	callapi_async("getGridPollutionSourceTraceCalenderNew_SENSOR",param,function(data){
	//callapi("getTGridSensorSourceTraceCalenderNew_SENSOR",param,function(data){  
		innerCall(data,function(result){
			var  optionData = result;
//			var i;
//			for(i = 0;i<result.length; i++){
//				var r = result[i];
//				var weekday = r.weekday;
//                var hour = r.hour;
//                var avg_RelP = r.avg_RelP == undefined ? 0 : r.avg_RelP;
//				var tempArray = [];
//				tempArray.push(hour);
//				tempArray.push(weekday);
//				tempArray.push(avg_RelP);
//				optionData.push(tempArray);
//			}
			drawCalenderEcharts(optionData);
		})
	});
}

/**
 * 绘制日历图
 * @param optionData
 */
function drawCalenderEcharts(optionData){
	var calendarEcharts = echarts.init(document.getElementById("calendar"));
	calendarEcharts.clear();
	// 过渡---------------------
	calendarEcharts.showLoading({
	    text: '正在努力的读取数据中...',    //loading话术
	});
	var option = {
			title: { 
				text: "污染源谱分析", 
				left: "center",
				top : 10
			},
			tooltip: { 
				position: "top", 
				formatter: "{c}" 
			},
			toolbox: { 
				show: false, 
				feature: { 
					mark: { show: true }, 
					dataView: { show: true, readOnly: false }, 
					saveAsImage: { show: true } 
				} 
			},
			animation: true,
//			grid: { height: "50%", y: "5%" },
			xAxis: { 
				type: "category", 
				data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
				splitArea: { show: true } 
			},
			yAxis: { 
				type: "category", 
				data: ["0", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"], 
				splitArea: { "show": true } 
			},
			visualMap: { 
				min: -15, 
				max: 15, 
				calculable: true, 
				orient: "horizontal", 
				dimension: 2, 
				left: "center", 
				bottom: "0", 
				inRange: { 
					color: ["#009966", "#FFFFCC", "#FF9933"], opacity: 1 
				} 
			},
			series: [{
				name: "谱",
				type: "heatmap",
				data: optionData,
				label: { 
					normal: { show: true }, 
					itemStyle: { 
						emphasis: { 
							shadowBlur: 10, 
							shadowColor: "rgba(0, 0, 0, 0.5)" 
						} 
					} 
				}
			}]
	};
	calendarEcharts.setOption(option);
	setTimeout(function(){
		calendarEcharts.hideLoading();
	},800);
}

function setdragStatus(info){
	$("#dragStatus").val(info);
}

function getKeyAreaAnlyzeDialogSize(){
	var w = $(window).width() - 200;
	w = w * 0.80;
	var h = $(window).height() - 200;
	var obj = {
		width : w,
		height : h
	};
	return obj;
}

/**
 * 得到弹出框的开始和结束时间
 * @returns {
 * 	eventStart : xx,
 * 	eventEnd : xx
 * }
 */
function getDialogTimes(){
	var eventStart = $("#keyArea_right").attr("eventStart");
	var eventEnd = $("#keyArea_right").attr("eventEnd");
	var scope = $("#keyArea_right").attr("scope");
	var regionId = $("#keyArea_right").attr("regionId");
	var siteId = $("#keyArea_right").attr("siteId");
	var level = $("#keyArea_right").attr("level");
	var cityId = $("#keyArea_right").attr("cityId");
	var obj = {
		eventStart : eventStart,
		eventEnd : eventEnd,
		scope : scope,
		regionId: regionId,
		siteId: siteId,
		level: level,
		cityId: cityId
	};
	return obj;
}

function openDialog(eventStart,eventEnd,scope,regionId,siteId,currentMenuId,level,cityId){
	var w = $(window).width() * 0.9;
	var h = $(window).height() * 0.8;
	//var h = w * 0.5;
	var d = dialog({
		id : 'keyAreaAnlyzeDialog',
		title : '污染过程分析',
		onshow : function(){
			var resultStr = findResult();
			var result = null;
			eval("result="+resultStr);
			var root = getRootPath();
			if(result){
				var cid = currentMenuId;
				var list = result.menuInfolist;
				for(var i=0;i<list.length;i++){
					var o = list[i];
					var id = o.id;
					var menuName = o.menuName;
					var url = path + o.url;
					if(cid == id){
						var list1 = o.list;
						var tplHtml = $("#subMenuTemplate").html();
						var tpl = _.template(tplHtml);
						$("#list-group").html(tpl({list:list1,root:root}));
						
						$("#list-group").find(".list-group-item").each(function(){
							var $self = $(this);
							$self.unbind("click").click(function(){
								if($(this).hasClass("active") == false){
									$(this).addClass("active");
								}
								$self.siblings(".list-group-item").removeClass("active");
							});
						});
						
						var href = $("#list-group > a:first").attr("href");
						$("#showFrame").attr("src",href);
						break;
					}
				}
			}
			var $left = $("#keyArea_left");
			var $right = $("#keyArea_right");
			$left.css({
				height : (h-20) + 'px',
				'overflow-x' : 'hidden',
				'border' : '1px solid #ccc',
				'overflow-y' : 'auto',
				'padding' : '0 10px'
			});
			$right.css({
				height : (h-20) + 'px',
				'border' : '1px solid #ccc',
				'padding' : 0
			});
			$("#showFrame").css({
				height : (h-20-2) + 'px'
			});
			
			$("#list-group").find("a.list-group-item").each(function(){
				$(this).unbind("click").click(function(){
					$("#list-group").find("a.list-group-item").removeClass("active");
					$(this).addClass("active");
				});
			});
			
			var $first = $("#list-group").find("a.list-group-item:first");
			$("#keyArea_right").attr("eventStart",eventStart);
			$("#keyArea_right").attr("eventEnd",eventEnd);
			$("#keyArea_right").attr("scope",scope);
			$("#keyArea_right").attr("regionId",regionId);
			$("#keyArea_right").attr("siteId",siteId);
			$("#keyArea_right").attr("level",level);
			$("#keyArea_right").attr("cityId",cityId);
			$first.click();
		},
		content : document.getElementById("keyAreaAnlyzeDialog"),
		lock : true,
		fixed : true,
		width : w,
		height : h,
		padding : 5
	});
	d.showModal();
}

/**
 * 污染过程分析 => 新增案例 确认新增案例
 */
function insertCase(){
	$.ajaxSettings.async = false;
	var close = true;
	var startTime = $("#startCaseTime").val();	//起始时间
	var endTime = $("#endCaseTime").val();		//结束时间
	var name = $("#caseName").val();			//案例名称-0p;
	var index = document.getElementById("caseRange").selectedIndex;
	var siteName = $("#caseRange option:selected").text();
	var siteId = $("#caseRange").val();
	var diclevel = $('#caseRange option:selected').attr('diclevel');
	
	var cityId = $('#caseRange option:selected').attr('cityId');
	var regionId = $('#caseRange option:selected').attr('regionId');
	/*var list = getAuthority();
	for(var i=0;i<list.length;i++){
		var o = list[i];
		var diclevel = o.diclevel;
		if(diclevel == 1){
			cityId = o.cityId;
			regionId = o.regionId;
			break;
		}
	}
	var type = 0;
	if(index == 0){
		type = 0;
	}
	else{
		type = 1;
	}*/
	var s = {
		cityId : cityId,
		regionId : regionId,
		type : '',
		name : name,
		siteName : siteName,
		startTime : startTime,
		endTime : endTime,
		siteId : siteId,
		diclevel: diclevel
	};
	var param = initParam(s);
	callapi("saveTcaseInfo_SENSOR",param,function(data){
		innerCall(data,function(result){
			var d = dialog({
				id : 'alertSuccess',
				title : '系统提示：',
				content : result
			});
			d.showModal();
			setTimeout(function(){
				d.close().remove();
				var win = getIFrameWindow("iframe1");
				win.initQueryList(1,"query","","");
			},2000);
		},function(result){
			var d = dialog({
				id : 'alertError',
				title : '系统提示：',
				content : result
			});
			d.showModal();
			setTimeout(function(){
				d.close().remove();
			},2000);
		});
	});
	$.ajaxSettings.async = true;
	return close;
}
/**
 * 污染过程分析 => 新增案例 初始化下拉框
 * @returns
 */
function initCaseRangeSelect(){
	$.ajaxSettings.async = false;
	var $caseRange = $("#caseRange");
	var cityId = "";
	var regionId = "";
	var s = {
		cityId : cityId,
		regionId : regionId
	};
	var param = initParam(s);
	$.ajaxSettings.async = true;
	callapi_async("getMonitoringSiteDiclevelByRegion_SENSOR",param,function(data){
		innerCall(data,function(result){
			var cityLevel = BasicAES.cityLevel;
			if(result && result.length > 0){
				var html = "";
				for(var i=0;i<result.length;i++){
					var o = result[i];
					var diclevel = o.diclevel;
					var cityId = o.cityId;
					var name = o.name;
					var regionId = o.regionId;
					var siteId = o.siteId;
					if(cityLevel == 2){//城市级别
						if(diclevel != 7){
							html += "<option regionId='"+ regionId +"' cityId='"+ cityId +"' diclevel='"+ diclevel +"' value='"+ siteId +"'>"+ name +"</option>";
						}
					} else { //cityLevel == 3 为区县级别 
						if(diclevel != 0){
							if(siteId != 359 && siteId != 453){
								html += "<option regionId='"+ regionId +"' cityId='"+ cityId +"' diclevel='"+ diclevel +"' value='"+ siteId +"'>"+ name +"</option>";
							}
						}
					}
				}
				$caseRange.html(html);
			}
		});
	});
}
/**
 * 打开 污染过程分析 => 新增案例弹窗
 * @returns
 */
function openAddCaseDialog(){
	var d = dialog({
		id : "addCaseDalog",
		title : "新增案例",
		padding:10,
		width:320,
		onshow : function(){
			$("#startCaseTime,#endCaseTime").datetimepicker({
				format : 'yyyy-mm-dd hh:00:00',
				language : 'zh-CN',
				startView : 1,
				minView : 1,
				todayBtn : true,
				autoclose : true
			});
			var endTime = new Date().format("yyyy-MM-dd hh:00:00");
			$("#endCaseTime").val(endTime);
			var startTime = calcWeek(endTime,-1,'yyyy-MM-dd HH:00:00');
			$("#startCaseTime").val(startTime);
			initCaseRangeSelect();//初始化范围下拉框
		},
		okValue : "确定",
		ok : function(){
			var caseName = $("#caseName").val();
			if(caseName == ''){
				var d1 = dialog({
					content : '请输入案例名称',
					onclose : function(){
						$("#caseName").focus();
					}
				});
				d1.show($("#caseName")[0]);
				setTimeout(function(){
					d1.close().remove();
				},2000);
				return false;
			}
			return insertCase();
		},
		cancelValue : "关闭",
		cancel : function(){
			return true;
		},
		content : document.getElementById("openAddCaseDialog")
	});
	d.showModal();
}

function saveRemediaion(s){
	$.ajaxSettings.async = false;
	var closeAble = false;
	var param = initComplexParam(s);
	callapi("addTgridImprovementPlanInfo_SENSOR",param,function(data){
		innerCall(data,function(result){
			if(result){
				alertDialog(result,function(){
					$("#iframe1")[0].contentWindow.initQueryList(1,'query','','');
					$("#iframe1").contents().find("#queryBtn")[0].click();
				});
			}
			closeAble = true;
		},function(result){
			alertDialog(result);
			closeAble = false;
		});
	});
	$.ajaxSettings.async = true;
	return closeAble;
}

/**
 * 动态添加完成时限
 */
function addRemediaList(){
	$("#addRemedia").unbind("click").click(function(){
		var tplHtml = $("#finishiTmp").html();
		var tpl = _.template(tplHtml);
		var $last = $("#addRemediaionDialog div.finishiFlag:last");
		$last.append(tpl());
		
		$last = $("#addRemediaionDialog div.finishiFlag:last");
		var $remediaTime = $last.find("input.remediaTime");
		$remediaTime.datetimepicker({
			 language : 'zh-CN',
			 format : 'yyyy-mm-dd',
			 startView : 2,
			 minView : 2,
			 todayBtn : true,
			 autoclose : true
		});
		var date = (new Date()).format("yyyy-MM-dd");
		$remediaTime.val(date);
		
		dialog.get('addRemediaion').reset();
	});
}

/**
 * 删除此行的完成时限
 * @param thisObj:删除按钮的DOM对象
 */
function removeRemedia(thisObj){
	var $finishiFlag = $(thisObj).closest("div.finishiFlag");
	$finishiFlag.remove();
}

/**
 * 打开对话框之前清除重置
 */
function clearDialog(){
	getId("remediaType").selectedIndex = 0;
	$("#remediaAction").val('');
	
	$("#addRemediaionDialog div.finishiFlag").each(function(){
		var $my = $(this);
		$my.find('input.remediaDescript').val('');
	});
	
	$("#responsibilityUnit").val('');
	$("#responsibilityPerson").val('');
	$("#responsibilityPhone").val('');
	
	if($("#addRemediaionDialog div.finishiFlag").length > 1){
		$("#addRemediaionDialog div.finishiFlag:gt(0)").remove();
	}
}

/**
 * 新增整改方案
 */
function openAddRemediaionDialog(){
	var d = dialog({
		id : 'addRemediaion',
		title : '新增整改方案',
		content : getId("addRemediaionDialog"),
		onshow : function(){
			if($("#fiveView1").length == 0){
				var time = new Date().getTime();
				var lastJs = "<script type='text/javascript' src=\""+ path +"/resource/js/fiveView1.js?v="+ time +"\" id=\"fiveView1\"></script>";
				$("#publish").after(lastJs);
			}
			
			var $remediaTime = $("#remediaTime");
			$remediaTime.datetimepicker({
				 language : 'zh-CN',
				 format : 'yyyy-mm-dd',
				 startView : 2,
				 minView : 2,
				 todayBtn : true,
				 autoclose : true
			});
			var date = (new Date()).format("yyyy-MM-dd");
			$remediaTime.val(date);
			
			addRemediaList();//动态添加完成时限
			
			clearDialog();
		},
		ok : function(){
			var province1 = $("#province1").val();
			var city1 = $("#city1").val();
			var region1 = $("#region1").val();
			var gridSelect1 = $("#gridSelect1").val();
			gridSelect1 = gridSelect1 == '请选择' ? '' : gridSelect1;
			var remediaName = $.trim($("#remediaName").val());//名称
			var remediaType = $.trim($("#remediaType").val());//类别
			var remediaAction = $.trim($("#remediaAction").val());//整改措施
			var remediaTime = $.trim($("#remediaTime").val());//完成时限
			var jsonString = [];
			$("#addRemediaionDialog div.finishiFlag").each(function(){
				var $my = $(this);
				var time = $my.find('input.remediaTime').val()+" 00:00:00";
				var description = $my.find('input.remediaDescript').val();
				if($.trim(description) != ''){
					var obj = {
						datetime : 	time,
						milestone : description
					};
					jsonString.push(obj);
				}
			});
			var responsibilityUnit = $.trim($("#responsibilityUnit").val());//责任单位
			var responsibilityPerson = $.trim($("#responsibilityPerson").val());//责任人
			var responsibilityPhone = $.trim($("#responsibilityPhone").val());//责任人联系方式
			if(province1 == ''){
				bubble("请选择省",getId("province1"),"left",120);
				return false;
			}
			else if(city1 == ''){
				bubble("请选择城市",getId("city1"),"bottom",120);
				return false;
			}
			else if(region1 == ''){
				bubble("请选择区县",getId("region1"),"bottom",120);
				return false;
			}
			else if(gridSelect1 == ''){
				bubble("请选择网格",getId("gridSelect1"),"right",120);
				return false;
			}
			else if(remediaName == ''){
				bubble("请输入名称",getId("remediaName"),"left",120);
				return false;
			}
			else if(remediaType == ''){
				bubble("请输入类别",getId("remediaType"),"left",120);
				return false;
			}
			else if(remediaAction == ''){
				bubble("请输入整改措施",getId("remediaAction"),"left",120);
				return false;
			}
			else if(jsonString.length == 0){
				bubble("请输入完成时限",getId("remediaTime"),"left",120);
				return false;
			}
			else if(responsibilityUnit == ''){
				bubble("请输入责任单位",getId("responsibilityUnit"),"left",120);
				return false;
			}
			else if(responsibilityPerson == ''){
				bubble("请选择责任人",getId("responsibilityPerson"),"left",120);
				return false;
			}
			else if(responsibilityPhone == ''){
				bubble("请选择责任人联系方式",getId("responsibilityPhone"),"left",120);
				return false;
			}
			else{
				var s = {
					standGrIdId : gridSelect1,
					datatime : "",
					name : remediaName,
					adress : "",
					action : remediaAction,
					jsonString : jsonString,
					username : responsibilityPerson,
					recorduser : responsibilityUnit,
					regionId : region1,
					typeName : remediaType,
					lon : "",
					lat : "",
					sourceName : "",
					contact : responsibilityPhone
				};
				return saveRemediaion(s);
			}
		},
		okValue : '<i class="fa fa-plus-circle"></i> 新增',
		cancel : function(){
			return true;
		},
		cancelValue : '<i class="fa fa-remove"></i> 关闭',
		padding : 10,
		width : 550
	});
	d.showModal();
}

function getKeyArea_right(){
	var $keyArea_right = $("#keyArea_right");
	return $keyArea_right;
}

function warning(alertPointId){
	var d = dialog({
		id : 'alertWarning',
		title : '报警信息',
		content : getId('warningDetail'),
		onshow : function(){
			$.ajaxSettings.async = false;
			var s = {
				standGrIdId : "",
				id : alertPointId
			};
			var param = initParam(s);
			$.ajaxSettings.async = true;
			callapi_async("getTActivityAlertPointInfoByGrid_SENSOR",param,function(data){
				innerCall(data,function(result){
					if(result){
						var o = result[0];
						var lastDate = o.lastDate == '' ? '--' : o.lastDate;
						lastDate = lastDate != '--' ? lastDate.split(" ")[0] : lastDate;
						var numOccurrence = o.numOccurrence;
						var pm25CityAvg = Number(o.pm25CityAvg).toFixed(0);
						var pm25CountyAvg = Number(o.pm25CountyAvg).toFixed(0);
						var hoursnum = o.hoursnum;
						var alertHours = o.alertHours == '' ? '--' : o.alertHours.replace(/,/g,", ");//报警时段
						var alertAddress = o.alertAddress;//报警区域
						var regionName = o.regionName;
						var standGridid = o.standGridid == '' ? '--' : o.standGridid;
						
						$("#standGridid > :text").val(standGridid);
						$("#regionName > :text").val(regionName);
						$("#alertAddress > :text").val(alertAddress);
						$("#alertHours > :text").val(alertHours);
						$("#hoursnum > :text").val(hoursnum);
						$("#pm25CityAvg > :text").val(pm25CityAvg);
						$("#pm25CountyAvg > :text").val(pm25CountyAvg);
						$("#numOccurrence > :text").val(numOccurrence);
						$("#lastDate > :text").val(lastDate);
					}
				});
			});
		},
		width:500
	});
	d.showModal();
}

function formatDate(time){
	var arr = time.split(" ");
	var arr1 = arr[0].split("-");
	var arr2 = arr[1].split(":");
	
	var date = arr1[1]+"-"+arr1[2]+" "+arr2[0]+":"+arr2[1];
	return date;
}

function initLineChartWithCellHourly(json,type,endDatetime,startDatetime){
	$.ajaxSettings.async = false;
	var myChart = echarts.init(document.getElementById('lineChart_cellHourly'));
	myChart.clear();
	// 过渡---------------------
	myChart.showLoading({
	    text: '正在努力的读取数据中...',    //loading话术
	});
	var s = json;
	s.dataSourceType = "2";
	var param = initParam(s);
	var method = s.blockId ? 'getTBlockAlertFeature_SENSOR' : 'getTActivityAlertCellPointHourLine';
	//var method = s.blockId ? 'getTActivityAlertBlockHourLine' : 'getTActivityAlertCellPointHourLine';
	$.ajaxSettings.async = true;
	//var fn = s.blockId ? callapi_twodata_async : callapi_async;
	var fn=callapi_async;
	if(s.blockId){
		fn(method,param,function(data){
			innerCall(data,function(result){
				if(result){
					var alertBlockTime = result.alertBlockTime;
					var time = result.time;
					var cellData;//实时报警浓度
					var gridData;//周边浓度
					cellData = result.cellData;//实时报警浓度
					gridData = result.pointData;//周边浓度
					var time1 = [];
					for(var i=0;i<time.length;i++){
						var t = time[i];
						var arr = t.split(" ");
						var arr1 = arr[0].split("-");
						var arr2 = arr[1].split(":");
						
						var date = arr1[1]+"-"+arr1[2]+" "+arr2[0]+":"+arr2[1];
						time1.push(date);
					}
					time = time1;
					
					var firstTime = time1[0];
					var lastTime = time1[time1.length-1];
					var markLineData = [], markAreaData = [];
					for(var i = 0; i < alertBlockTime.length; i++){
						var markArr = [{
							xAxis: ''
						},{
							xAxis: ''
						}];
						var obj = {};
						var alertDatetime = alertBlockTime[i];
						var alertTime = formatDate(alertDatetime);
						obj.xAxis = alertTime;
						markLineData.push(obj);
					}
					if(type == 1 && endDatetime && startDatetime) {
						var markArr = [{
							xAxis: ''
						},{
							xAxis: ''
						}];
						var date1 = ajaxCalcHour(startDatetime,-1,"yyyy-MM-dd HH:00:00");
						var date2 = ajaxCalcHour(endDatetime,1,"yyyy-MM-dd HH:00:00");
						var arr11 = date1.split(" ");
						var arr22 = date2.split(" ");
						
						var b1 = arr11[0].split("-");
						var b2 = arr11[1].split(":");
						var c1 = b1[1]+"-"+b1[2]+" "+b2[0]+":"+b2[1];
						
						var b11 = arr22[0].split("-");
						var b22 = arr22[1].split(":");
						var c2 = b11[1]+"-"+b11[2]+" "+b22[0]+":"+b22[1];
						markArr[0].xAxis = c1;
						markArr[1].xAxis = c2;
						markAreaData = [markArr];
						markLineData = [];
					}
					// added by wangwei
	                for (var i = 0; i < cellData.length; ++i) {
	                    if (cellData[i] < 0) {
	                        cellData[i] = '-';
	                    }
	                }
	                for (var i = 0; i < gridData.length; ++i) {
	                    if (gridData[i] < 0) {
	                        gridData[i] = '-';
	                    }
	                }
					
					var legendData = (type == 3 || type == 1) ? ['实时报警浓度'] :  ['实时报警浓度','周边浓度'];
					gridData = (type == 3 || type == 1) ? [] : gridData;
					
					var option = {
							title: {
								text: '浓度变化趋势'
							},
							tooltip: {
								trigger: 'axis'
							},
							legend: {
								data : legendData//['报警区域平均浓度','周边平均浓度','城市平均浓度']
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '15%',
								containLabel: true
							},
							toolbox: {
								feature: {
									saveAsImage: {}
								}
							},
							xAxis: {
								type: 'category',
								boundaryGap: false,
								data: time,//['周一','周二','周三','周四','周五','周六','周日']
								splitLine:{
									show:true
								},
								axisLabel:{
									show : true,
									interval : 1,
									rotate : 90//x轴文字倾斜度
								}
							},
							yAxis: {
								type: 'value',
								axisLine: {onZero: false},
								boundaryGap: false,
								splitLine:{
									show:false
								},
								splitArea:{
									show:true,
									areaStyle:{
										shadowColor:'rgba(0,0,0,0.5)'
									}
								}
							},
							series: [
							         {
							        	 name:'实时报警浓度',
							        	 type:'line',
							        	 smooth:true,
							        	 lineStyle: {
							        		 normal: {
							        			 width: 3,
							        			 shadowColor: 'rgba(0,0,0,0.4)',
							        			 shadowBlur: 10,
							        			 shadowOffsetY: 10
							        		 }
							        	 },
							        	 data:cellData,//[120, 132, 101, 134, 90, 230, 210]
							        	 markArea: {
						                     itemStyle: {
						                         normal: {
						                             color: '#FFB500',
						                             opacity : 0.8
						                         }
						                     },
						                     data: markAreaData
						                 },
						                 markLine : {
						                	 label: {
						                		 normal: {
						                             show: false
						                         },
						                         emphasis: {
						                        	 show: false
						                         } 
						                	 },
						                     lineStyle: {
						                         normal: {
						                             type: 'solid',
						                             width: 20,
						                             color: '#FFB500',
						                             opacity: 0.8
						                         },
						                         emphasis: {
						                             type: 'solid',
						                             width: 20,
						                             color: '#FFB500',
						                             opacity: 0.8
						                         }
						                     },
						                     data : markLineData
						                 }
							         },
							         {
							        	 name:'周边浓度',
							        	 type:'line',
							        	 smooth:true,
							        	 lineStyle: {
							        		 normal: {
							        			 width: 3,
							        			 shadowColor: 'rgba(0,0,0,0.4)',
							        			 shadowBlur: 10,
							        			 shadowOffsetY: 10
							        		 }
							        	 },
//		            stack: '总量',
							        	 data:gridData//[220, 182, 191, 234, 290, 330, 310]
							         }
							]
					};
					myChart.setOption(option);
					setTimeout(function(){
						myChart.hideLoading();
					},800);
//					backDiv('hide');
				}
				else{
					setTimeout(function(){
						myChart.hideLoading();
					},800);
				}
			},function(result){
				setTimeout(function(){
					myChart.hideLoading();
				},800);
			});
		});
//	}
//	else{
//		callapi_async(method,param,function(data){
//			innerCall(data,function(result){
//				if(result){
//					var time = result.time;
//					var cellData;//实时报警浓度
//					var gridData;//周边浓度
//					cellData = result.cellData;//实时报警浓度
//					gridData = result.pointData;//周边浓度
//					var time1 = [];
//					for(var i=0;i<time.length;i++){
//						var t = time[i];
//						var arr = t.split(" ");
//						var arr1 = arr[0].split("-");
//						var arr2 = arr[1].split(":");
//						
//						var date = arr1[1]+"-"+arr1[2]+" "+arr2[0]+":"+arr2[1];
//						time1.push(date);
//					}
//					time = time1;
//					
//					var firstTime = time1[0];
//					var lastTime = time1[time1.length-1];
//					var markArr = [];
//					if(alertTime == firstTime){
//						markArr[0] = alertTime;
//						var date = ajaxCalcHour(alertDatetime,1,"yyyy-MM-dd HH:00:00");
//						var a1 = date.split(" ");
//						var a2 = a1[0].split("-");
//						var a3 = a1[1].split(":");
//						var a4 = a2[1]+"-"+a2[2]+" "+a3[0]+":"+a3[1];
//						markArr[1] = a4;
//					}
//					else if(alertTime == lastTime){
//						var date1 = ajaxCalcHour(alertDatetime,-1,"yyyy-MM-dd HH:00:00");
//						var a11 = date1.split(" ");
//						var a22 = a11[0].split("-");
//						var a33 = a11[1].split(":");
//						var a44 = a22[1]+"-"+a22[2]+" "+a33[0]+":"+a33[1];
//						markArr[0] = a44;
//						markArr[1] = alertTime;
//					}
//					else{
//						var date1 = ajaxCalcHour(alertDatetime,-1,"yyyy-MM-dd HH:00:00");
//						var date2 = ajaxCalcHour(alertDatetime,1,"yyyy-MM-dd HH:00:00");
//						var arr11 = date1.split(" ");
//						var arr22 = date2.split(" ");
//						
//						var b1 = arr11[0].split("-");
//						var b2 = arr11[1].split(":");
//						var c1 = b1[1]+"-"+b1[2]+" "+b2[0]+":"+b2[1];
//						
//						var b11 = arr22[0].split("-");
//						var b22 = arr22[1].split(":");
//						var c2 = b11[1]+"-"+b11[2]+" "+b22[0]+":"+b22[1];
//						markArr[0] = c1;
//						markArr[1] = c2;
//					}
//					if(type == 1 && endDatetime && startDatetime) {
//						var date1 = ajaxCalcHour(startDatetime,-1,"yyyy-MM-dd HH:00:00");
//						var date2 = ajaxCalcHour(endDatetime,1,"yyyy-MM-dd HH:00:00");
//						var arr11 = date1.split(" ");
//						var arr22 = date2.split(" ");
//						
//						var b1 = arr11[0].split("-");
//						var b2 = arr11[1].split(":");
//						var c1 = b1[1]+"-"+b1[2]+" "+b2[0]+":"+b2[1];
//						
//						var b11 = arr22[0].split("-");
//						var b22 = arr22[1].split(":");
//						var c2 = b11[1]+"-"+b11[2]+" "+b22[0]+":"+b22[1];
//						markArr[0] = c1;
//						markArr[1] = c2;
//					}
//					// added by wangwei
//	                for (var i = 0; i < cellData.length; ++i) {
//	                    if (cellData[i] < 0) {
//	                        cellData[i] = '-';
//	                    }
//	                }
//	                for (var i = 0; i < gridData.length; ++i) {
//	                    if (gridData[i] < 0) {
//	                        gridData[i] = '-';
//	                    }
//	                }
//					
//					var legendData = (type == 3 || type == 1) ? ['实时报警浓度'] :  ['实时报警浓度','周边浓度'];
//					gridData = type == 3 ? [] : gridData;
//					var myChart = echarts.init(document.getElementById('lineChart_cellHourly'));
//					var option = {
//							title: {
//								text: '浓度变化趋势'
//							},
//							tooltip: {
//								trigger: 'axis'
//							},
//							legend: {
//								data : legendData//['报警区域平均浓度','周边平均浓度','城市平均浓度']
//							},
//							grid: {
//								left: '3%',
//								right: '4%',
//								bottom: '15%',
//								containLabel: true
//							},
//							toolbox: {
//								feature: {
//									saveAsImage: {}
//								}
//							},
//							xAxis: {
//								type: 'category',
//								boundaryGap: false,
//								data: time,//['周一','周二','周三','周四','周五','周六','周日']
//								splitLine:{
//									show:true
//								},
//								axisLabel:{
//									show : true,
//									interval : 1,
//									rotate : 90//x轴文字倾斜度
//								}
//							},
//							yAxis: {
//								type: 'value',
//								axisLine: {onZero: false},
//								boundaryGap: false,
//								splitLine:{
//									show:false
//								},
//								splitArea:{
//									show:true,
//									areaStyle:{
//										shadowColor:'rgba(0,0,0,0.5)'
//									}
//								}
//							},
//							series: [
//							         {
//							        	 name:'实时报警浓度',
//							        	 type:'line',
//							        	 smooth:true,
//							        	 lineStyle: {
//							        		 normal: {
//							        			 width: 3,
//							        			 shadowColor: 'rgba(0,0,0,0.4)',
//							        			 shadowBlur: 10,
//							        			 shadowOffsetY: 10
//							        		 }
//							        	 },
////		            stack: '总量',
//							        	 data:cellData,//[120, 132, 101, 134, 90, 230, 210]
//							        	 markArea: {
//						                     itemStyle: {
//						                         normal: {
//						                             color: '#FFB500',
//						                             opacity : 0.8
//						                         }
//						                     },
//						                     data: [ [{
//						                         //name: '晚高峰',
//						                         xAxis: markArr[0]
//						                     }, {
//						                         xAxis: markArr[1]
//						                     }] ]
//						                 }
//							         },
//							         {
//							        	 name:'周边浓度',
//							        	 type:'line',
//							        	 smooth:true,
//							        	 lineStyle: {
//							        		 normal: {
//							        			 width: 3,
//							        			 shadowColor: 'rgba(0,0,0,0.4)',
//							        			 shadowBlur: 10,
//							        			 shadowOffsetY: 10
//							        		 }
//							        	 },
////		            stack: '总量',
//							        	 data:gridData//[220, 182, 191, 234, 290, 330, 310]
//							         }
//							]
//					};
//					myChart.setOption(option);
//					backDiv('hide');
//				}
//			});
//		});
	}
}

function queryAndDrawLineChart(json,alertDate){
	var myChart = echarts.init(getId('lineChartBlockPanel'));
//	myChart.clear();
	// 过渡---------------------
	myChart.showLoading({
		text: '正在努力的读取数据中...',    //loading话术
	});
	var s = json;
	var param = initParam(s);
	$.ajaxSettings.async = true;
	callapi_async('getTBlockAlertFeature_SENSOR',param,function(data){
		innerCall(data,function(result){
			if(result){
				var nearbypm25 = result.pointData;
				var pm25 = result.cellData;
				var times = result.time;
				var arr = [],arr1 = [],arr2 = [],markAreaData = [],markLineData = [],timeArr = [];
				for(var i=0;i<pm25.length;i++){
					var n = Number(pm25[i]).toFixed(0);
					var pm = n <= -99 ? '-' : n;
					arr.push(pm);
				}
				
				for(var j=0;j<nearbypm25.length;j++){
					var m = Number(nearbypm25[j]).toFixed(0);
					var pm1 = m <= -99 ? '-' : m;
					arr1.push(pm1);
				}
				
				for(var x=0;x<times.length;x++){
					var t = times[x];
					var ar = t.split(" ");
					var day = ar[0];
					var ti = ar[1].split(":");
					var s = day+" "+ti[0]+":"+ti[1];
					arr2.push(s);
					
					if(day == alertDate){
						timeArr.push(s);
					}
				}
				markAreaData.push(timeArr[0]);
				markAreaData.push(timeArr[timeArr.length-1]);
				for(var y=0;y<timeArr.length;y++){
					var obj = {};
					obj.xAxis = timeArr[y];
					markLineData.push(obj);
				}
				var legendData = ['网格浓度','周边浓度'];
				var option = {
					title: {
						text: '浓度变化趋势'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data : legendData//['报警区域平均浓度','周边平均浓度','城市平均浓度']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '130',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: arr2,//['周一','周二','周三','周四','周五','周六','周日']
						splitLine:{
							show:true
						},
						axisLabel:{
							show : true,
							interval : 23,
							rotate : 90//x轴文字倾斜度
						}
					},
					yAxis: {
						type: 'value',
						axisLine: {onZero: false},
						boundaryGap: false,
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
							areaStyle:{
								shadowColor:'rgba(0,0,0,0.5)'
							}
						}
					},
					series: [
					   {
						   	 name:'网格浓度',
							 type:'line',
							 smooth:true,
							 lineStyle: {
								 normal: {
									 width: 3,
									 shadowColor: 'rgba(0,0,0,0.4)',
									 shadowBlur: 10,
									 shadowOffsetY: 10
								 }
							 },
							 data:arr//[120, 132, 101, 134, 90, 230, 210]
							 /*
							 markArea: {
			                     itemStyle: {
			                         normal: {
			                             color: '#FFB500',
			                             opacity : 0.8
			                         }
			                     },
			                     data: [ [{
			                         //name: '晚高峰',
			                         xAxis: markAreaData[0]
			                     }, {
			                         xAxis: markAreaData[1]
			                     }] ],
			                     animation : true,
			                     animationDelay : function(idx){
			                    	 return idx * 100;
			                     },
			                     animationDuration : function(idx){
			                    	 return idx * 100;
			                     },
			                     animationThreshold : 2000,
			                     animationEasing : "cubicOut",
			                     animationDurationUpdate : 300,
			                     animationDelayUpdate: function (idx) {
			                         return idx * 100;
			                     }
			                 }
							 ,
							 markLine : {
								 label: {
									 normal: {
										 show: false
									 },
									 emphasis: {
										 show: false
									 }
								 },
								 lineStyle: {
									 normal: {
										 type: 'solid',
										 width: 10,
										 color: '#FFB500',
										 opacity: 0.8
									 },
									 emphasis: {
										 type: 'solid',
										 width: 10,
										 color: '#FFB500',
										 opacity: 0.8
									 }
								 },
								 data : markLineData
							 }
							 */
						 },
						 {
							name:'周边浓度',
							type:'line',
							smooth:true,
							lineStyle:{
							   normal:{
								   width: 3,
								   shadowColor: 'rgba(0,0,0,0.4)',
								   shadowBlur: 10,
								   shadowOffsetY: 10
							   }
							},
							data:arr1//[220, 182, 191, 234, 290, 330, 310]
						 }
					 ]
				};
				myChart.setOption(option);
				setTimeout(function(){
					myChart.hideLoading();
				},800);
			}
			else{
				setTimeout(function(){
					myChart.hideLoading();
				},800);
			}
		},function(result){
			setTimeout(function(){
				myChart.hideLoading();
			},800);
		});
	});
}

function drawLineChartWithAggregate(json,alertDate){
	$.ajaxSettings.async = false;
	
	var now = new Date().format('yyyy-MM-dd');
	var d1 = new Date(alertDate).getTime();
	var d2 = new Date(now).getTime();
	var end = '';
	var start = '';
	if(d1 >= d2){//基准时间大于当前
		end = now;//按当前取值
	}
	else{
		var tmp1 = d1 + (1000*60*60*24*7);
		if(tmp1 >= d2){
			end = now;//按当前取值
		}
		else{
			end = new Date(tmp1).format('yyyy-MM-dd');
		}
	}
	var tmp2 = d1 - (1000*60*60*24*7);
	start = new Date(tmp2).format('yyyy-MM-dd');
	
	$("#startDate11,#endDate11").datetimepicker({
		language : 'zh-CN',
		format : 'yyyy-mm-dd',
		startView : 2,
		minView : 2,
		autoclose : true,
		todayBtn : true
	}).css({cursor:'pointer','background-color':'#FFF'}).on("changeDate",function(ev){
		var start = new Date($("#startDate11").val());
		var end = new Date($("#endDate11").val());
		if(start > end){
			$("#startDate11,#endDate11").removeAttr('style').css({
				'border':'1px solid red',
				'background-color':'#f2dede'
			});
			bubble('开始时间不能大于结束时间',getId('startDate11'),'bottom',120);
			bubble('结束时间不能小于开始时间',getId('endDate11'),'bottom',120);
		}
		else{
			$("#startDate11,#endDate11").removeAttr("style").css({
				'background-color':'#FFF'
			});
		}
	});
//	var endDate = new Date().format('yyyy-MM-dd');
//	var startDate = new Date().format('yyyy-MM-dd');
//	startDate = ajaxCalcDayByFormat(startDate,-7,'yyyy-MM-dd');
	$("#endDate11").val(end);
	$("#startDate11").val(start);
	
	var w = $(window).width() * 0.8;
	var h = $(window).height() * 0.7;
	$("#lineChartBlockPanel").css({
		width : (w-20) + 'px',
		height : (h-20-40) + 'px',
		'overflow' : 'hidden',
		margin : '0 auto',
		clear : 'both'
	});
	var startTime = $("#startDate11").val() + " 00:00:00";
	var endTime = $("#endDate11").val() + " 23:00:00";
	json.startTime = startTime;
	json.endTime = endTime;
	
	queryAndDrawLineChart(json,alertDate);
	$("#queryBtnWithAggre").unbind().click(function(){
		var startTime = $("#startDate11").val() + " 00:00:00";
		var endTime = $("#endDate11").val() + " 23:00:00";
		var s = json;
		s.startTime = startTime;
		s.endTime = endTime;
		queryAndDrawLineChart(s,alertDate);
	});
}

function drawBarChartWithAggregate(histogram){
	$.ajaxSettings.async = false;
	var timeArr = [];
	for(var i=0;i<24;i++){
		timeArr.push(i);
	}
	var w = $(window).width() * 0.8;
	var h = $(window).height() * 0.7;
	$("#barchartBlockPanel").css({
		width : (w-50) + 'px',
		height : (h-50) + 'px',
		'overflow' : 'hidden',
		margin : '0 auto',
		clear : 'both'
	});
	
	var arr = histogram.split(",");
	
	var myChart = echarts.init(getId('barchartBlockPanel'));
	myChart.clear();
	// 过渡---------------------
	myChart.showLoading({
		text: '正在努力的读取数据中...',    //loading话术
	});
	
	var option = {
		color: ['#3398DB'],
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis : [
			{
				type : 'category',
			    data : timeArr,//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			    axisTick: {
			    	alignWithLabel: true
			    }
			}
		],
		yAxis : [
		    {
			   	type : 'value',
			   	interval : 1
			}
		],
		series : [
			{
				type: 'bar',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
				                [
				                    {offset: 0, color: '#83bff6'},
				                    {offset: 0.5, color: '#188df0'},
				                    {offset: 1, color: '#188df0'}
				                ]
				        )
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
				              0, 0, 0, 1,
				              [
				                    {offset: 0, color: '#2378f7'},
				                    {offset: 0.7, color: '#2378f7'},
				                    {offset: 1, color: '#83bff6'}
				              ]
				        )
				    }
				},
				name:'超排次数',
				barWidth: '60%',
				data:arr//[10, 52, 200, 334, 390, 330, 220]
			}
		]
	};
	myChart.setOption(option);
	setTimeout(function(){
		myChart.hideLoading();
	},800);
	$.ajaxSettings.async = true;
}
/**
 * 小网格高值报警(浓度变化趋势chart图弹出层)
 * @param json : chart线图请求查询json参数
 * @param obj : JSON格式，城市、区县、网格编号、小网格
 * @param alertDate : 提示黄色柱子数据
 * @param histogram : 超排小时数柱状图数据
 */
function openLineDialogWithBlockAggregate(json,obj,alertDate,histogram){
	var w = $(window).width() * 0.8;
	var h = $(window).height() * 0.7;
	var h1 = h * 0.0694;
	var d = dialog({
		id : 'blockAggregate',
		title : '累积高值报警：'+obj.cityName+","+obj.regionName+","+obj.standGridId+","+obj.blockId,
		content : getId("blockAggregateDialog"),
		width : w,
		height : h,
		onshow : function(){
			$("#panel-011,#panel-022").css({
				height : (h - h1) + 'px',
				'border-left' : '1px solid #ddd',
				'border-right' : '1px solid #ddd',
				'border-bottom' : '1px solid #ddd',
				'border-top' : '0px solid #ddd',
				'border-radius' : '0 0 4px 4px',
				'-moz-border-radius' : '0 0 4px 4px',
				'-webkit-border-radius' : '0 0 4px 4px',
				'overflow':'hidden'
			});
			drawBarChartWithAggregate(histogram);
			$("#tab11").click(function(){
				drawBarChartWithAggregate(histogram);//柱状图
			});
			$("#tab22").click(function(){
				drawLineChartWithAggregate(json,alertDate);
			});
			
			var index = 0;
			$("#navBar1 > li").each(function(i){
				var clazz = $(this).attr("class");
				if(clazz == 'active'){
					index = i;
					return true;
				}
			});
			if(index == 0){
				drawBarChartWithAggregate(histogram);
			}
			else if(index == 1){
				drawLineChartWithAggregate(json,alertDate);
			}
		},
		cancelValue : "<i class='fa fa-power-off'></i> 关闭",
		cancel : function(){
			return true;
		},
		padding:10
	});
	d.showModal();
}

function openLineDialogWithCellHourly(json,name,obj){
//	backDiv('show');
	var w = $(window).width() * 0.6;
	var h = $(window).height() * 0.65;
	var d = dialog({
		id : 'cellHourlyAlert',
		title : name || '浓度变化趋势',
		content : getId("lineChartWithCellHourlyDialog"),
		width : w,
		height : h,
		onshow : function(){
			$('#windDirection').html('');
			$('#windSpeed').html('');
			$('#alertType').html('');
			$('#enterpriseList').val('');
			$("#lineChart_cellHourly").css({
				width : (w-100) + 'px',
				height : (h-100) + 'px',
				'overflow' : 'hidden',
				margin : '0 auto',
				clear : 'both'
			});
			if(obj){
				var array = ['北风', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风'];
				$('#windDirection').html((obj.windDirection == -999 ? '--' : array[obj.windDirection]));
				var windSpeed = Number(obj.windSpeed) == -999 ? '--' : Number(obj.windSpeed).toFixed(1)+" 米/秒";
				$('#windSpeed').html(windSpeed);
				var alertType = Number(obj.alertType);
				var alertTypeName = "";
				if(alertType == 1){
					alertTypeName = "短时峰值";
				}
				else if(alertType == 2){
					alertTypeName = "区域峰值";
				}
				else if(alertType == 3){
					alertTypeName = "散乱污聚集";
				}
				else if(alertType == 4){
					alertTypeName = "高架源";
				}
				$('#alertType').html(alertTypeName);
				$('#enterpriseList').val(obj.enterpriseList);
			}
			
			var alertDatetime = json.alertDatetime;
			var nowLong = new Date().getTime();
			var startLong = new Date(alertDatetime).getTime() - 12*60*60*1000;//开始timestamp
			var endLong = new Date(alertDatetime).getTime() + 12*60*60*1000;
			var endTimestamp = endLong > nowLong ? nowLong : endLong;
			var startTime = new Date(startLong).format('yyyy-MM-dd hh:00:00');
			var endTime = new Date(endTimestamp + 60*60*1000).format('yyyy-MM-dd hh:00:00');
			json.startTime = startTime;
			json.endTime = endTime;
			json.type = '1';
			
			initLineChartWithCellHourly(json,obj.alertType,obj.endDatetime,obj.startDatetime);
		}
	});
	d.showModal();
}

function checkformByRemedia(){
	var region3 = $("#region3").val();
	var gridSelect3 = $("#gridSelect3").val() == '请选择' ? '' : $("#gridSelect3").val();
	var fileselect = $("#fileselect").val();
	if(region3 == ''){
		bubble('请选择区县',getId('region3'),'bottom',100);
		return false;
	}
	else if(gridSelect3 == ''){
		bubble('请选择网格',getId('gridSelect3'),'bottom',100);
		return false;
	}
	else if(fileselect == ''){
		bubble('请选择文件',getId('fileselect'),'bottom',100);
		return false;
	}
	else{
		if(fileselect != ''){
			var fix = fileselect.substring(fileselect.lastIndexOf(".")+1,fileselect.length);
			fix = fix.toLowerCase();
			if(fix == 'doc' || fix == 'docx'){
				return true;
			}
			else{
				bubble('请选择文档格式文件',getId('fileselect'),'bottom',100);
				return false;
			}
		}
		return true;
	}
}

function openUploadWithRemediation(){
	var d = dialog({
		id : 'uploadWithRemediationAlert',
		title : '上传整改方案',
		content : getId('uploadWithRemediationDialog'),
		onshow : function(){
			if($("#fiveView3").length == 0){
				var time = new Date().getTime();
				var lastJs = "<script type='text/javascript' src=\""+ path +"/resource/js/fiveView3.js?v="+ time +"\" id=\"fiveView3\"></script>";
				$("#publish").after(lastJs);
			}
			getId('region3').selectedIndex = 0;
			getId('gridSelect3').selectedIndex = 0;
			getId('fileselect').value = '';
			var luID = findSessionWithUserName();
			$("#luID2").val(luID);
			var src = "http://node2211.int.hotgrid.cn:10007/API_Application_Grid/planGridFile/plangridUpload";
//			var src = "http://9.186.105.122:8198/API_Application_Grid/planGridFile/plangridUpload";
			$("#uploadBtn").unbind("click").click(function(){
				var flag = checkformByRemedia();
				if(flag == true){
					$("#form3").attr("action",src);
					$("#form3").submit();
					dialog.get("uploadWithRemediationAlert").close();
				}
			});
		},
		width : 500,
		padding : 10
	});
	d.showModal();
}

function checkformByTab2(){
	var region4 = $("#region4").val();
	var gridSelect4 = $("#gridSelect4").val() == '请选择' ? '' : $("#gridSelect4").val();
	var enterprise = $("#enterprise").val();
	var fileselect1 = $("#fileselect1").val();
	if(region4 == ''){
		bubble("请选择区县",getId("region4"),"bottom",100);
		return false;
	}
	else if(gridSelect4 == ''){
		bubble("请选择网格",getId("gridSelect4"),"bottom",100);
		return false;
	}
	else if(enterprise == null){
		bubble("请选择企业名称",getId("enterprise"),"bottom",100);
		return false;
	}
	else{
		if(fileselect1 == ''){
			bubble("请上传文档格式文件",getId("fileselect1"),"bottom",150);
			return false;
		}
		else{
			var fix = fileselect1.substring(fileselect1.lastIndexOf(".")+1,fileselect1.length);
			fix = fix.toLowerCase();
			if(fix == 'doc' || fix == 'docx'){
				return true;
			}
			else{
				bubble('请选择文档格式文件',getId('fileselect1'),'bottom',150);
				return false;
			}
		}
	}
}

function openUploadWithTab2(){
	var d = dialog({
		id : 'uploadWithRemediationAlert1',
		title : '上传文件',
		content : getId('uploadWithTab2'),
		onshow : function(){
			if($("#fiveView4").length == 0){
				var time = new Date().getTime();
				var lastJs = "<script type='text/javascript' src=\""+ path +"/resource/js/fiveView4.js?v="+ time +"\" id=\"fiveView4\"></script>";
				$("#publish").after(lastJs);
			}
			var luID3 = findSessionWithUserName();
			$("#luID3").val(luID3);
			$("#uploadBtn2").unbind("click").click(function(){
				var flag = checkformByTab2();
				if(flag == true){
					dialog.get("uploadWithRemediationAlert1").close();
					var action = "http://node2211.int.hotgrid.cn:10007/API_Application_Grid/planEnterFile/planEnterUpload";
					$("#form4").attr("action",action);
					$("#form4").submit();
				}
			});
		},
		width : 500,
		padding : 10
	});
	d.showModal();
}

function checkUploadTalk(){
	var city = $("#city6").val();
	var region = $("#region6").val();
	var gridSelect = $("#gridSelect6").val() == '请选择' ? '' : $("#gridSelect6").val();
	var fileselect5 = $("#fileselect5").val();
	if(city == ''){
		bubble("请选择城市",getId("city6"),"right",100);
		return false;
	}
	else if(region == ''){
		bubble("请选择区县",getId("region6"),"right",100);
		return false;
	}
	else if(gridSelect == ''){
		bubble("请选择网格",getId("gridSelect6"),"right",100);
		return false;
	}
	else{
		if(fileselect5 == ''){
			bubble("请选择上传文件",getId("fileselect5"),"right",260);
			return false;
		}
		else{
			var fix = fileselect5.substring(fileselect5.lastIndexOf(".")+1);
			if(fix.toLowerCase() == 'doc' || fix.toLowerCase() == 'docx'){
				return true;
			}
			else{
				bubble("请上传扩展名为doc、docx的文档",getId("fileselect5"),"right",260);
				return false;
			}
		}
	}
}

function uploadTalk(){
	dialog({
		id : 'uploadTalkAlert',
		title : '上传约谈',
		content : getId('uploadTalkDialog'),
		width : 400,
		padding : 10,
		onclose : function(){
		},
		onshow : function(){
			if($("#fiveView6").length == 0){
				var time = new Date().getTime();
				$("#publish").after("<script type=\"text/javascript\" src=\""+ path +"/resource/js/fiveView6.js?v="+ time +"\" id=\"fiveView6\"></script>");
			}
			$("#uploadFormBtn").unbind("click").click(function(){
				var flag = checkUploadTalk();
				if(flag == true){
					var luID = findSessionWithUserName();
					var cityId = $("#city6").val();
					var regionId = $("#region6").val();
					var gridId = $("#gridSelect6").val();
					
					$("#luID_upload").val(luID);
					$("#cityId_upload").val(cityId);
					$("#county_Id_upload").val(regionId);
					$("#stand_GridId_upload").val(gridId);
					
					var $form5 = $("#form5");
					var action = "http://node2211.int.hotgrid.cn:10007/API_Application_Grid/tappointuploadFile/tActAppointmentUploadFile";
//					var action = "http://9.186.105.122:8198/API_Application_Grid/tappointuploadFile/tActAppointmentUploadFile";
					$form5.attr("action",action);
					dialog.get("uploadTalkAlert").close().remove();
					
					$form5[0].submit();
				}
			});
		}
	}).showModal();
}

function skipEvent(id,menuId){
	var $li = $("#tabUl > li[curId='"+ id +"']");
	var sourceUrl = $li.attr("sourceUrl");
	var $a = $li.find("a");
	if(!menuId){
		$a.attr("href",sourceUrl);
		$a[0].click();
	}
	else{
		var href = sourceUrl+"&skipId="+menuId;
		$a.attr("href",href);
		$a[0].click();
	}
}

function setTopPageDefaultId(id){
	var $li = $("#tabUl > li[curId='"+ id +"']");
	var sourceUrl = $li.attr("sourceUrl");
	var $a = $li.find("a");
	$a.attr("href",sourceUrl);
}

function initGridLineChart(jsonObj){
	var myChart = echarts.init(document.getElementById('lineChart'));
	myChart.clear();
	// 过渡---------------------
	myChart.showLoading({
	    text: '正在努力的读取数据中...',    //loading话术
	});
	var endDate = $("#endDate").val();
	endDate = ajaxCalcDayByFormat(endDate,1,'yyyy-MM-dd');
	var alertDate = jsonObj.alertDate;
	
	var s = {		
		cityId : jsonObj.cityId,
		standGrIdId : jsonObj.standGridid,
		startTime : $("#startDate").val(),
		endTime : endDate
	};
	var param = initComplexParam(s);
	callapi_twodata_async("getGridANA02DayLine",param,function(data){
		innerCall(data,function(result){
			if(result){
				var gridData = result.gridData;
				var avgData = result.avgData;
				var newData = [];
				var newData1 = [];
				
				for(var i=0;i<gridData.length;i++){
					var o = gridData[i] == '-99' ? '-' : gridData[i];
					var o1 = avgData[i] == '-99' ? '-' : avgData[i];
					newData.push(o);
					newData1.push(o1);
				}
				gridData = newData;
				avgData = newData1;
				var startAlertDate = '';
				var time = result.time;
				
				var newDate = ajaxCalcDayByFormat(alertDate,-1,'yyyy-MM-dd');
				
				var markArr = [];
				if(time[0] == alertDate){
					startAlertDate = ajaxCalcDayByFormat(alertDate,1,'yyyy-MM-dd');
					markArr[0] = alertDate;
					markArr[1] = startAlertDate;
				}
				else if(time[time.length-1] == newDate){
					startAlertDate = ajaxCalcDayByFormat(newDate,-1,'yyyy-MM-dd');
					markArr[0] = startAlertDate;
					markArr[1] = newDate;
				}
				else{
					startAlertDate = ajaxCalcDayByFormat(alertDate,-1,'yyyy-MM-dd');
					markArr[0] = startAlertDate;
					markArr[1] = alertDate;
				}
				
				var option = {
					title: {
						text: jsonObj.standGridid
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data : ['网格浓度','平均浓度']//['报警区域平均浓度','周边平均浓度','城市平均浓度']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '15%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: time,//['周一','周二','周三','周四','周五','周六','周日']
						splitLine:{
							show:true
						},
						axisLabel:{
							show : true,
							interval : 1,
							rotate : 90//x轴文字倾斜度
						}
					},
					yAxis: {
						type: 'value',
						axisLine: {onZero: false},
						boundaryGap: false,
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
							areaStyle:{
								shadowColor:'rgba(0,0,0,0.5)'
							}
						}
					},
					series: [
						{
					        name:'网格浓度',
					        type:'line',
					        smooth:true,
					        lineStyle: {
					        	 normal: {
					        		 width: 3,
					        		 shadowColor: 'rgba(0,0,0,0.4)',
					        		 shadowBlur: 10,
					        		 shadowOffsetY: 10
					        	 }
					        },
					        data:gridData,//[220, 182, 191, 234, 290, 330, 310]
					        	markArea: {
				                     itemStyle: {
				                         normal: {
				                             color: '#FFB500',
				                             opacity : 0.8
				                         }
				                     },
				                     data: [ [{
				                         //name: '晚高峰',
				                         xAxis: markArr[0]
				                     }, {
				                         xAxis: markArr[1]
				                     }] ]
				               }
						},
						{
							name:'平均浓度',
							type:'line',
							smooth:true,
							lineStyle: {
								normal: {
									width: 3,
									shadowColor: 'rgba(0,0,0,0.4)',
									shadowBlur: 10,
									shadowOffsetY: 10
								}
							},
							data:avgData//[220, 182, 191, 234, 290, 330, 310]
						}
					]
				};
				myChart.setOption(option);
				setTimeout(function(){
					myChart.hideLoading();
				},800);
			}
			else{
				setTimeout(function(){
					myChart.hideLoading();
				},800);
			}
		},function(result){
			setTimeout(function(){
				myChart.hideLoading();
			},800);
		});
	});
}

function openGridLineChartDialog(jsonObj){
	var width = $(window).width() * 0.6;
	var height = $(window).height() * 0.6;
	var d = dialog({
		id : 'gridLineChartDialog',
		title : '网格浓度',
		content : getId('gridLineChartDialog'),
		width : width,
		height : height,
		padding : 10,
		onshow : function(){
			$("#lineChart").css({
				height : (height-50) + 'px',
				width : '100%',
				border : '1px solid #ccc',
				'border-radius' : '4px',
				'-moz-border-radius' : '4px',
				'-webkit-border-radius' : '4px'
			});
			$("#startDate,#endDate").datetimepicker({
				language : 'zh-CN',
				format : 'yyyy-mm-dd',
				startView : 2,
				minView : 2,
				todayBtn : true,
				autoclose : true
			}).on("changeDate",function(ev){
				var start = new Date($("#startDate").val());
				var end = new Date($("#endDate").val());
				if(start > end){
					$("#startDate,#endDate").removeAttr('style').css({
						'border':'1px solid red',
						'background-color':'#f2dede',
						'cursor' : 'pointer'
					});
					bubble('开始时间不能大于结束时间',getId('startDate'),'bottom',120);
					bubble('结束时间不能小于开始时间',getId('endDate'),'bottom',120);
				}
				else{
					$("#startDate,#endDate").removeAttr("style").css({
						'background-color':'#FFF',
						'cursor' : 'pointer'
					});
				}
			});
			var endDate = new Date().format("yyyy-MM-dd");
			var startDate = calcWeek(endDate,-1,'yyyy-MM-dd');
			$("#startDate").val(startDate);
			endDate = ajaxCalcDayByFormat(endDate,-1,'yyyy-MM-dd');
			$("#endDate").val(endDate);
			initGridLineChart(jsonObj);
			$("#gridLineChartBtn").unbind("click").click(function(){
				initGridLineChart(jsonObj);
			});
		}
	});
	d.showModal();
}

function drawPie(data,elem_name,title){
	var pieChart = echarts.init(document.getElementById(elem_name));
	pieChart.clear();
	// 过渡---------------------
	pieChart.showLoading({
	    text: '正在努力的读取数据中...',    //loading话术
	});
	
	var result = [];
	for(var i=0;i<data.length;i++){
		var o = data[i];
		var value = o.gridCount;
		var name = o.regionName;
		var regionId = o.regionId;
		var obj = {
			value : value,
			name : name,
			regionId : regionId
		};
		result.push(obj);
	}
	
	var pieChartOption = {
		backgroundColor : '#FFFFFF',
		textStyle : {
			fontSize:	16,
			fontWeight: 'normal',
			color:'#222222'
		},
		title : {
			text : title,
			left : 'center',
			top : 20,
			textStyle : {
				color : '#222222',
				fontSize:	16
			}
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b} : {c} ({d}%)"
		},
        label: {
            normal: {
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'normal',
                    color:'#222222'
                }
            }
        },
		series : [{
			name : '网格个数',
			type : 'pie',
			radius : '50%',
			center : [ '50%', '53%' ],
			data : result,
//				data : meta_data.sort(function(a, b) {
//					return a.value - b.value
//				}),
			itemStyle : {
				emphasis : {
					shadowBlur : 10,
					shadowOffsetX : 0,
					shadowColor : 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	pieChart.setOption(pieChartOption);
	setTimeout(function(){
		pieChart.hideLoading();
	},800);
}

function openGridCountDialog(cityId,cityName){
	var dialogTitle = cityName+'各区县热点网格分布';
	var d = dialog({
		title : cityName+'各区县热点网格信息：',
		id : 'gridCountDialog',
		onshow : function(){
			var s = {cityId:cityId};
			var param = initParam(s);
			callapi_async('getTGridCurrentHotGroupInfo_SENSOR',param,function(data){
				innerCall(data,function(result){
					if(result && result.length > 0){
						var list = result;
						var tplHtml = $("#gridMsgTpl").html();
						var tpl = _.template(tplHtml);
						$("#gridMsgBody").html(tpl({list:list}));
						
						drawPie(list,'gridMsgPieChart',dialogTitle);//画饼图
					}
					else{
						$("#gridMsgBody").html('');
					}
				},function(result){
					$("#gridMsgBody").html('');
				});
			});
		},
		content : getId('gridCountDialog'),
		padding:5,
		cancelValue : "<i class='fa fa-power-off'></i> 关闭",
		cancel:function(){
			return true;
		}
	});
	d.showModal();
}