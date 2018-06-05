$(function(){
	var testMap;
	//制作地图   声明地图                                      福建坐标                                                      div id   放大倍数
var tmpMap =　new GHMap(119.894609,28.323635,'test',0);

//小流域点位         点击判断出现消失
$("#water_xly_point").click(function(){
	if(!tmpMap.hasLayer('fujian_water')){
		tmpMap.addLayer('fujian_water','water:watershred_jlj_new',2,undefined,undefined,undefined);

	}else{
		tmpMap.removeLayer('fujian_water')

	}
})
//乡镇边界         点击判断出现消失
$("#water_xz_point").click(function(){
	if(!tmpMap.hasLayer('fujian_waterc')){
		tmpMap.addLayer('fujian_waterc','water:fujian_xian',2,undefined,undefined,'1=1');
	}else{
		tmpMap.removeLayer('fujian_waterc')
	}
})
//设备点位         点击判断出现消失
$("#water_equipment_point").click(function(){
	if(!tmpMap.hasLayer('fujian_water_equipment')){
		tmpMap.addLayer('fujian_water_equipment','water:measurePoint',2,undefined,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_water_equipment')
		
	}
})

//工业企业         点击判断出现消失
$("#water_industry_point").click(function(){
	if(!tmpMap.hasLayer('fujian_border')){
		tmpMap.addLayer('fujian_border','water:raster_fujian_potentialPolltutionSource',2,.6,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_border')
	}
})
//热点网格         点击判断出现消失
$("#hot_tab").click(function(){
	if(!tmpMap.hasLayer('fujian_hot')){
		tmpMap.addLayer('fujian_hot','hotgrid:hotgrid_fujian',2,undefined,undefined,undefined);
		console.log("热点网格出现")
	
	}else{
		tmpMap.removeLayer('fujian_hot')
		console.log("热点网格消失")
	}
})
tmpMap.addLayer('fujian_waterimg','water:fujian_river',2,undefined,undefined,undefined);
//水系图        点击判断出现消失
$("#water_img").click(function(){
	if(!tmpMap.hasLayer('fujian_waterimg')){
		tmpMap.addLayer('fujian_waterimg','water:fujian_river',2,undefined,undefined,undefined); 	
	}else{
		tmpMap.removeLayer('fujian_waterimg')
	}
})
//饮水源         点击判断出现消失
$("#water_source").click(function(){
	if(!tmpMap.hasLayer('fujian_watersource')){
		tmpMap.addLayer('fujian_watersource','water:fujian_waterSource',2,undefined,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_watersource')
	}
})
//废水源         点击判断出现消失
$("#water_feiqi").click(function(){
	if(!tmpMap.hasLayer('fujian_waterfeiqi')){
		tmpMap.addLayer('fujian_waterfeiqi','water:feishuiqiye_fujia',2,undefined,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_waterfeiqi')
	}
})
//取水口         点击判断出现消失
$("#water_qushui").click(function(){
	if(!tmpMap.hasLayer('fujian_waterqushui')){
		tmpMap.addLayer('fujian_waterqushui','water:fujian_qushuikou',2,undefined,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_waterqushui')
	}
})
//断面图层         点击判断出现消失
$("#water_section").click(function(){
	if(!tmpMap.hasLayer('fujian_watersection')){
		tmpMap.addLayer('fujian_watersection','water:fujian_section',2,undefined,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_watersection')
	}
})
//土地利用率        点击判断出现消失
$("#water_landused").click(function(){
	if(!tmpMap.hasLayer('fujian_landused')){
		tmpMap.addLayer('fujian_landused','water:fujian_landused',2,.6,undefined,undefined);
	}else{
		tmpMap.removeLayer('fujian_landused')
	}
})




})
