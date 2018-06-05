/**
 * @about common functions
 */
var Common = window.Common || {};
Common.layoutType = "left8";

/**
 * 初始化污染物类型点击事件
 * @param callback
 */
Common.initMapTypeEvent = function(callback) {
	var $div = $('#mapType');
	var $span = $div.find('span');
	if($span.length) {
		$span.on('click', function(){
			var $this = $(this);
			if($this.hasClass('map-span-selected')) return false;
			var id = $this.attr('data-type');
			$span.removeClass('map-span-selected');
			$this.addClass('map-span-selected');
			if(callback) callback(id);
		});
	}
}

/**
 * 初始化污染物类型点击事件
 * @param callback
 */
Common.initPollutionEvent = function(callback) {
	var $div = $('#pType');
	var $span = $div.find('span');
	if($span.length) {
		$span.on('click', function(){
			var $this = $(this);
			if($this.hasClass('p-span-selected')) return false;
			var id = $this.attr('data-ptype');
			$span.removeClass('p-span-selected');
			$this.addClass('p-span-selected');
			if(callback) callback(id);
		});
	}
}

/**
 * update time slider event
 * @returns
 */
Common.updateSliderEvent = function(callback){
	var $updateBtn = $('#updateBtn'),
		$slider = $('#update-slider'),
		$closer = $('#update-slider-closer');
	$updateBtn.click(function(){
		var nowType = $(this).attr('data-type');
		if(nowType == 'hide'){
			var nowType = $(this).attr('data-type','show');
			$slider.css('display', 'block');
			if(callback) callback();
		}else{
			var nowType = $(this).attr('data-type','hide');
			$slider.css('display', 'none');
		}
	});
	$closer.click(function(){
		$updateBtn.attr('data-type','hide');
		$slider.css('display', 'none');
	});
}

/**
 * slider event
 */
Common.sliderEvent = function() {
	$("div.sliderPanel").each(function(){
		$(this).find("div.slideHeader").unbind("click").click(function(){
			var $siblings = $(this).closest(".sliderPanel").siblings("div.sliderPanel");
			var $header = $(this);
			var $fa = $header.find("i.fa");
			var $hide = $header.next();
			var $iframe = $hide.find('iframe');
			var src = $iframe.attr('data-src');
			var id = $header.attr("id");
			if($hide.is(":hidden")){
				$fa.replaceClassName("fa-arrow-down","fa-arrow-up");
				$hide.slideDown(300);
				if($iframe.attr('src') == ''){
					$iframe.attr('src', src); 
				}
				$siblings.each(function(){
					var $header = $(this).find(".slideHeader");
					var $hide = $header.next();
					var $fa = $header.find("i.fa");
					$fa.replaceClassName("fa-arrow-up","fa-arrow-down");
					$hide.slideUp(300);
				});
			} else {
				$fa.replaceClassName("fa-arrow-up","fa-arrow-down");
				$hide.slideUp(300);
			}
		});
	});
}

Common.btnPanelEvent = function(level, type){
	var $btn = $('.btnBar[title="' + level + '"]');
	var $btns = $('.btnBar').not($btn);
	if(type == 'show'){
		$btn.replaceClassName("hide","show");
		var id = $btn.attr('id');
		Common.setPanelDefaultBtn(id);
	} else if(type == 'hide') {
		$btn.replaceClassName("show","hide");
	}
	$btns.replaceClassName("show","hide");
}
/**
 * 设置默认选中第一个
 * @param id
 */
Common.setPanelDefaultBtn = function(id){
	var subBroMenu1 = sub.subBroMenu1;
	for(var key in subBroMenu1){
		if(key.indexOf('cBtn') > -1){
			if($("#"+key).parent().attr('id') == id){
				$("#" + key).css('display', 'block');
			}
		}
	}	
	$("#" + id).find('button').each(function(){
		if($(this)[0].style.display == 'block'){
			$(this).removeClass('btn-default').addClass('btn-primary');
			$(this).click();
			return false;
		}
	})
}

Common.Panel = function(el, fn){
	this.el = el || {};
	this.fn = fn;
	// Variables privadas
	var btns = this.el.find('button');
	// Event
	btns.on('click', {el: this.el, fn: this.fn}, this.click);
	this.calcH();
}
/**
 * 计算右侧各iframe高度
 */
Common.Panel.prototype.calcH = function() {
	var $el = this.el;
	var h = $('#map').height();
	var broMenu = sub.subBroMenu;
	$el.find('button').each(function(){
		var $this = $(this),
			id = '#' + $this.attr('data-id'),
			elmId = $this.attr('id').toLowerCase();
		var count = broMenu[elmId];
		$(id).find('.sliderPanel').each(function(index){
			var $panel = $(this);
			var id = this.id;
			if(sub && sub.subMenu && sub.subMenu.indexOf(id) > -1){
				var $sliderHeader = $panel.find('.slideHeader');
				$panel.css('display', 'block');
				var $next = $sliderHeader.next();
				var $iframe = $next.find('iframe');
				$iframe.css({
					height: (h - count*30) + 'px'
				})
			}
		});
	})
}
/**
 * 按钮点击事件
 */
Common.Panel.prototype.click = function(e){
	var $el = e.data.el;
		$this = $(this),
		id = '#' + $this.attr('data-id'),
		elmId = $this.attr('id'),
		fn = e.data.fn;
	$this.replaceClassName("btn-default","btn-primary");
	$this.siblings('button').each(function(){
		$(this).replaceClassName("btn-primary","btn-default");
	});
	
	$el.attr("activeBtn", $this.attr('id'));
	
	$(id).removeClass('hide').addClass('show');
	var $siblings = $(id).siblings('div.column');
	$siblings.each(function(){
		$(this).removeClass('show').addClass('hide');
	});
	Common.initBtnClickEvent($(id), elmId);
	
	if(fn) fn();
}

Common.initBtnClickEvent = function($element, elmId){
	$element.find('.sliderPanel').each(function(index){
		var $panel = $(this);
		var id = this.id;
		if(sub && sub.subMenu && sub.subMenu.indexOf(id) > -1){
			var $sliderHeader = $panel.find('.slideHeader');
			var $next = $sliderHeader.next();
			var $iframe = $next.find('iframe');
			var src = $iframe.attr('data-src');
			if($iframe.attr('src') == ''){
				$iframe.attr('src', src); 
			}
			if($next.is(":hidden")){
				$sliderHeader.click();
			}
			return false;
		}
	});
}
/**
 * 计算页面高度
 */
Common.calcWidthAndHeight = (function() {
	var h = $(window).height();
	$('#mainContainer').css({
		height: h + 'px',
		padding: '10px 5px'
	});
})();
/**
 * 显示功能
 */
Common.dispalyDiv = (function() {
	if(sub && sub.subMenu){
		var subMenu = sub.subMenu;
		var subBroMenu = sub.subBroMenu;
		var subBroMenu1 = sub.subBroMenu1;
		var buttonArray = [];
		var i;
		for(i = 0; i < subMenu.length; i++){
			var divElm = subMenu[i];
			if(divElm.indexOf('button_') > -1) {
				buttonArray.push(divElm);
			} else {
				$("#" + divElm).css('display', 'block');
			}
			if(divElm == 'water_pc_map_player'){
				$('#playBtn').hide();
			}
		}
		for(var key in subBroMenu){
			$("#" + key).css('display', 'block');
		}
		for(var key in subBroMenu1){
			if(key.indexOf('cBtn')>-1){
				$("#" + key).css('display', 'block');
			}
		}
		return function(d) {
			if(buttonArray && buttonArray.length) {
				var k = 0, p = buttonArray.length;
				if(p === 1 && p[0] === 'button_pm25') return 'hide'; 
				for(; k < p; k++) {
					var divElm = buttonArray[k];
					$("#" + divElm, d).css('display', 'block');
				}
				return 'show';
			}
		}
	}
})();
/**
 * 初始化右侧tab按钮事件
 * @returns
 */
Common.tabEvent = (function(){
	$('.btnBar').each(function(){
		var $this = $(this);
		$this.find('button').css('float', 'left');
		new Common.Panel($this);
	});
})();
/**
 * 刷新右侧列表
 */
Common.reloadFrame = function() {
	var $panel = $('.sliderPanel:visible');
	$panel.find('.slideHeader').each(function(){
		var $this = $(this);
		var $next = $this.next();
		if(!$next.is(":hidden")) {
			var $iframe = $next.find('iframe');
			var src = $iframe.attr('data-src');
			$iframe.attr('src', src); 
		}
	});
}

/**
 * 关闭/打开图层控制
 */
Common.legendSliderEvent = function() {
	var height = $('#legend-container').height();
	$('#legend-container-closer').unbind('click').click(function(){
		$('#legendBtn').show();
		$('#legend-container').hide();
	});
	$('#legendBtn').click(function(){
		$(this).hide();
		$('#legend-container').show();
	});
}
/**
 * 初始化图层控制事件
 * @param fn callback function
 */
Common.initLegendIconEvent = function(fn) {
	var $legend = $('#legend-container');
	var checkIcon = 'fa-square-o';
	$legend.find('i[data-iconType="check"]').each(function(){
		var $icon = $(this);
		var $li = $(this).closest('li');
		var $siblings = $li.siblings('li');
		
		$icon.unbind('click').click(function(event){
			var self = this;
			var status = Number($(this).attr('data-status'));
			var $play = $(this).next();
			if(status == 2){
				if($icon.hasClass('fa-square-o')){
					$icon.removeClass('fa-square-o').addClass('fa-check-square-o');
					self.getAttribute('checked','true');
					if($play.length > 0){
						if($play.hasClass('fa-stop')){
							$play.removeClass('fa-stop').addClass('fa-play');
						}
						$play.removeClass('disabled');
					}
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 2,
							param : 'show' //显示图层
						});
					}
				} else if ($icon.hasClass('fa-check-square-o')){
					//改变为白底黑钩
					$icon.removeClass('fa-check-square-o').addClass('fa-square-o');
					self.getAttribute('checked','false');
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 2,
							param : 'hide' //显示图层
						});
					}
				}
			}
			if(status == 4){
				if($icon.hasClass('fa-square-o')){
					$icon.removeClass('fa-square-o').addClass('fa-check-square');
					self.setAttribute('checked','true');
					if($play.length > 0){
						if($play.hasClass('fa-stop')){
							$play.removeClass('fa-stop').addClass('fa-play');
						}
						$play.removeClass('disabled');
					}
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 2,
							param : 'show' //显示图层
						});
					}
				}
				else if($icon.hasClass('fa-check-square')){
					//改变为白底黑钩
					$icon.removeClass('fa-check-square').addClass('fa-square-o');
					self.setAttribute('checked','false');
					$play.addClass('disabled').unbind('click');
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 2,
							param : 'hide' //显示图层
						});
					}
				}
			}
			if(status == 3){
				if($icon.hasClass('fa-square-o')){
					$icon.removeClass('fa-square-o').addClass('fa-check-square-o');
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 3,
							param : 'littleDot' //显示图层
						});
					}
				}
				else if($icon.hasClass('fa-check-square-o')){
					//改变为黑底白钩
					$icon.removeClass('fa-check-square-o').addClass('fa-check-square');
					$play.removeClass('disabled');
					self.setAttribute('checked','true');
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 3,
							param : 'bigDot' //显示图层
						});
					}
				}
				else{
					//反勾选
					$icon.removeClass('fa-check-square').addClass('fa-square-o');
					$icon.next().addClass('disabled').unbind('click');
					$siblings.each(function(){
						var $li = $(this);
						var $box = $li.find('i[data-iconType="check"]');
						var $play1 = $li.find('i[data-iconType="play"]');
						if($play1.hasClass('disabled')){
							$play1.addClass('disabled').unbind('click');
						}
					});
					self.setAttribute('checked','false');
					if(fn){
						var id = $icon.attr('id');
						fn(id,{
							status : 3,
							param : 'hide' //显示图层
						});
					}
				}
			}
			
			event.stopPropagation();
		})
	});
	
	$legend.find('i[data-iconType="radio"]').each(function(){
		var $icon = $(this);
		var $li = $icon.closest('li');
		$icon.unbind('click').click(function(event){
			var $this = $(this);
			var type = $this.attr('data-type');
			var $siblings = $('i[data-type="' + type + '"]').not($this);
			var selected = this.getAttribute('data-selected');
			var $play = $this.next();
			if(selected == ''){
				this.setAttribute('data-selected','selected');
				$this.replaceClassName('fa-circle-o','fa-dot-circle-o');
				$siblings.each(function(){
					var $li = $(this);
					$li[0].setAttribute('data-selected','');
					$li.replaceClassName('fa-dot-circle-o','fa-circle-o');
					if(fn){
						var id = $li.attr('id');
						fn(id,{
							status : 1,
							param : 'hide' //显示图层
						});
					}
				});
				if(fn){
					var id = $icon.attr('id');
					fn(id,{
						status : 1,
						param : 'show' //显示图层
					});
				}
			}
			else{//点击单选取消选中
				this.setAttribute('data-selected','');
				$this.replaceClassName('fa-dot-circle-o','fa-circle-o');
				$play.addClass('disabled').unbind('click');
				if(fn){
					var id = $icon.attr('id');
					fn(id,{
						status : 1,
						param : 'hide' //显示图层
					});
				}
			}
			event.stopPropagation();//阻止冒泡动作
		});
	});
}
/**
 * 默认选中图层
 */
Common.initDefaultLayer = function() {
	var subMenu = sub.subMenu;
	if(arguments.length){
		var args = Array.prototype.slice.call(arguments);
		var i = 0, l = args[0].length;
		for(; i < l; i++){
			var id = args[0][i];
			$icon = $('#' + id);
			var pid = $icon.closest('li').attr('id');
			if(subMenu.indexOf(pid) > -1 ){
				$icon.click();
			}
		}
	} else {
		$('#legend-container').find('i[data-iconType]').each(function(index){
			var $this = $(this);
			var $li = $this.closest("li");
			var id = $li.attr('id');
			if(subMenu.indexOf(id) > -1 ){
				$this.click();
				return false;
			}
		});
	}
}

/**
 * 改变布局
 * @param callback 
 */
Common.initResizeLayout = function(callback){
	var $leftColumn = $("#mapColumn");
	var $rightColumn = $("#rightColumn");
	var $leftBtn = $("#leftEventPanel");
	var $rightBtn = $("#rightEventPanel");
	$leftBtn.unbind().click(function(){
		var obj = fiveView.returnedValue();
		var viewLevel = obj.viewLevel;
		var $btn = $(this);
		if(Common.layoutType == 'rightHide'){
			$leftColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-8")
				.addClass("col-sm-8")
				.addClass("col-md-8")
				.addClass("col-lg-8");
			$rightColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-4")
				.addClass("col-sm-4")
				.addClass("col-md-4")
				.addClass("col-lg-4");
			if($rightColumn.hasClass("hide"))
				$rightColumn.removeClass("hide");

			setTimeout(function(){
				Common.layoutType = 'left8';
			},300);
			Common.btnPanelEvent(viewLevel, 'show');
			if($("#legend-container").length > 0){
				$("#legend-container").removeAttr("class");
				$("#legend-container").attr("class","legend-container");
			}
			if(callback) callback();
			return false;
		}
		if(Common.layoutType == 'left8'){
			$leftColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-4")
				.addClass("col-sm-4")
				.addClass("col-md-4")
				.addClass("col-lg-4");
			$rightColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-8")
				.addClass("col-sm-8")
				.addClass("col-md-8")
				.addClass("col-lg-8");
			setTimeout(function(){
				Common.layoutType = 'left4';
			},300);
			if($("#legend-container").length > 0){
				$("#legend-container").removeAttr("class");
				$("#legend-container").attr("class","small-legend-container");
			}
			if(callback) callback();
			return false;
		}
		if(Common.layoutType == 'left4'){
			$leftColumn
				.removeAttr("class")
				.addClass("hide");
			$rightColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-12")
				.addClass("col-sm-12")
				.addClass("col-md-12")
				.addClass("col-lg-12");
			setTimeout(function(){
				Common.layoutType = 'leftHide';
			},300);
			if(callback) callback();
			return false;
		}
	});
	
	$rightBtn.unbind().click(function(){
		var obj = fiveView.returnedValue();
		var viewLevel = obj.viewLevel;
		var $btn = $(this);
		if(Common.layoutType == 'leftHide'){//左侧是隐藏状态
			$leftColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-4")
				.addClass("col-sm-4")
				.addClass("col-md-4")
				.addClass("col-lg-4");
			
			$rightColumn
				.removeAttr("class")
				.addClass("col-xs-8")
				.addClass("col-sm-8")
				.addClass("col-md-8")
				.addClass("col-lg-8")
				.addClass("show")
				.addClass("full");
			setTimeout(function(){
				Common.layoutType = 'left4';
			},300);
			
			if($("#legend-container").length > 0){
				$("#legend-container").removeAttr("class");
				$("#legend-container").attr("class","small-legend-container");
			}
			if(callback) callback();
			return false;
		}
		if(Common.layoutType == 'left4'){
			$leftColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-8")
				.addClass("col-sm-8")
				.addClass("col-md-8")
				.addClass("col-lg-8");

			$rightColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-4")
				.addClass("col-sm-4")
				.addClass("col-md-4")
				.addClass("col-lg-4");
			setTimeout(function(){
				Common.layoutType = 'left8';
			},300);
			
			if($("#legend-container").length > 0){
				$("#legend-container").removeAttr("class");
				$("#legend-container").attr("class","legend-container");
			}
			if(callback) callback();
			return false;
		}
		if(Common.layoutType == 'left8'){//变为右侧隐藏状态
			$leftColumn
				.removeAttr("class")
				.addClass("show")
				.addClass("full")
				.addClass("col-xs-12")
				.addClass("col-sm-12")
				.addClass("col-md-12")
				.addClass("col-lg-12");
			
			$rightColumn.removeAttr("class").addClass("hide");
			setTimeout(function(){
				Common.layoutType = 'rightHide';
			},300);
			
			if($("#legend-container").length > 0){
				$("#legend-container").removeAttr("class");
				$("#legend-container").attr("class","legend-container");
			}
			Common.btnPanelEvent(viewLevel, 'hide');
			if(callback) callback();
			return false;
		}
	});
}
