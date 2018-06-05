/**
 *create Map depends on Openlayers
 * @copyright wenchencheng junmeiqu
 */

function GHMap(lon,lat,divId, zoom,extent){
//  var isHttps = parseInt(parameterHttpId);	
	var isHttps = 0;
	this.layerList=[];
	this.layerName=[];
	this.colorList= new Array(5);
	var projectLonLat = ol.proj.transform([lon,lat],'EPSG:4326','EPSG:3857');
	var controls = ol.control.defaults({rotate: false}); 
	var interactions = ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false});
	if(extent){
		var extentArray = [];
		var extentMin = ol.proj.transform([extent[0], extent[1]],'EPSG:4326','EPSG:3857');
			extentArray.push(extentMin[0]);
			extentArray.push(extentMin[1]);
		var	extentMax = ol.proj.transform([extent[2], extent[3]],'EPSG:4326','EPSG:3857');
			extentArray.push(extentMax[0]);
			extentArray.push(extentMax[1]);
			
	}else{
		var extentArray = [-Infinity, -Infinity,Infinity, Infinity]
	}
	this.map = new ol.Map({
		target: document.getElementById(divId),
		view: new ol.View({
			center:projectLonLat,
			projection:	'EPSG:3857',
			zoom: zoom,
			minZoom: 7,
			extent:extentArray,
			moveTolerance: 10
		}),
		controls: controls,
	    interactions: interactions
	});
	var headerHttp = (isHttps==1)?'https':'http';
	var tmpLayer = new ol.layer.Tile({
	    source: new ol.source.XYZ({
	        url: headerHttp+"://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
	    }),
	    name: 'road'
	});

	this.map.addLayer(tmpLayer);
	var tmpLayer = new ol.layer.Tile({
	    source: new ol.source.XYZ({
	        url: headerHttp+"://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}"
	    }),
	    name: 'label'
	});
	
	  GHMap.prototype.map = this.map;
  // modified by wenchen 
  // add gaode map 
//	var tmpLayer = new ol.layer.Tile({
//	    source: new ol.source.XYZ({
//	        url: "http:///webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
//	    }),
//	    name: 'label'
//	});
	this.map.addLayer(tmpLayer);
	
}
GHMap.prototype.queryLayer = function(queryUrl){
	$.ajax({
		type: "GET",
        url: queryUrl,
        contentType: "application/json; charset=utf-8",
        success: function (message) {
        	
        }
	});
}
GHMap.prototype.addSingleClick = function(fn){
	var baseMap = this.map;
	var objectMark = this;
	this.map.on('singleclick', function(evt){
		var coordinate = null;
		var tmpResult = baseMap.forEachLayerAtPixel(evt.pixel, function(evts) {
			var tmpName = evts.get('name');
			var tmpLayer = objectMark.__proto__.literatorLayerList(tmpName,objectMark);
			return tmpLayer;
		});
		if(!tmpResult) {
				objectMark.getPopup().setPosition(undefined);
			return;
		}
		var layer = tmpResult[0]
		var layerName = objectMark.layerName[tmpResult[1]];
		var wmsSource = layer.getSource();
		if(layerName!=='labelPoint'&&layerName!=='mapRoutePollution'){
			if(objectMark.getPopup())
				{
				objectMark.getPopup().setPosition(undefined);
				}
			
		}
		try{
			var viewResolution = baseMap.getView().getResolution();
			var url = wmsSource.getGetFeatureInfoUrl(
					evt.coordinate, viewResolution, 'EPSG:3857',
					//{'INFO_FORMAT': 'text/javascript'});
				{'INFO_FORMAT': 'application/json'});
			reqwest({
				url: url,
				type: 'json',
				jsonpCallbackName: 'parseResponse'
			}).then(function(data){
				var coordinate = evt.coordinate;
				fn(data,coordinate,layerName,objectMark);
			});
		}catch(e){
			var count = 0;
			baseMap.forEachFeatureAtPixel(evt.pixel, function(feature){
				if(count == 0){
					var coordinate = evt.coordinate;
					fn(feature,coordinate,layerName,objectMark);
					count++;
				}
			});
		}
	});
}
GHMap.prototype.setCenter = function(lon,lat){
	var map = this.map;
	var projectLonLat = ol.proj.transform([lon,lat],'EPSG:4326','EPSG:3857');
	var tmpView= map.getView();
	tmpView.setCenter(projectLonLat);
}
GHMap.prototype.hasLayer=function(name){
	var mark = this;
	var tmpLayer = this.__proto__.literatorLayerList(name,mark);
	if(tmpLayer!=undefined){
		return true;
	}
	else{
		return false;
	}
}
GHMap.prototype.addLayer=function(name,url,mapType, opacity,extent,cql_filter,wmsUrl){
	//0.表示wfs 1.表示底图 2.表示wms 3.img
//	var isHttps = parseInt(parameterHttpId);
	var isHttps = 0;
	var headerHttp = (isHttps==1)?'https':'http';
	//var portHttp = (isHttps==1)?'11001':'8256';
	//var portHttp = (isHttps==1)?'8082':'8256';
	var portHttp = (isHttps==1)?'8086':'8086';
	var tmpUrl = '123.126.40.68';
    //var tmpUrl = '123.126.40.68';
	//portHttp  = 8086;
	//var tmpUrl = '220.195.2.246';
	//portHttp  = 8256;
	var tmpLayer = null;
	var cql_filter = cql_filter==undefined?'1=1':cql_filter;
	opacity = opacity==undefined?'1':opacity;
	//var wmsUrl = wmsUrl==undefined?headerHttp+'://220.195.2.246:'+portHttp+'/geoserver/hotgrid/wms':wmsUrl;
	var wmsUrl = wmsUrl==undefined?headerHttp+'://'+tmpUrl+':'+portHttp+'/geoserver/water/wms':wmsUrl;
	switch(mapType){
	case 0:
		var hotspotSource = new ol.source.Vector({
	        format: new ol.format.GeoJSON(),
	        url: url,
	        strategy: ol.loadingstrategy.bbox
	      });
		tmpLayer = new ol.layer.Vector({
	        source: hotspotSource,
	        name: name
	      });
		break;
	case 1:
		tmpLayer = new ol.layer.Tile({
		    source: new ol.source.XYZ({
		        url: url
		    }),
		    name: name
		});
		break;
	case 2:
		 tmpLayer = new ol.layer.Tile({
	          source: new ol.source.TileWMS({
	           //url: 'http://123.126.40.68:8086/geoserver/hotgrid/wms',
	            url:wmsUrl,
	        	// url:headerHttp+'://'+tmpUrl+':'+portHttp+'/geoserver/hotgrid/wms',
	        	  params: {'LAYERS': url, 'TILED': true,cql_filter:cql_filter},
	            serverType: 'geoserver',
	            crossOrigin:'anonymous'
	          }),
	          name: name,
	          opacity: opacity
	        });
		break;
	case 3:
		 var projection = new ol.proj.Projection({
		      code: 'xkcd-image',
		      units: 'pixels',
		      extent: extent
		    });
			tmpLayer = new ol.layer.Image({
		        source: new ol.source.ImageStatic({
		          url: url,
		          projection: projection,
		          imageExtent: extent
		        }),
		        name: name,
		        opacity:opacity
		      });
			break;
   case 4:
			tmpLayer = url;
			break;
  	case 5:
		 tmpLayer = new ol.layer.Tile({
	          source: new ol.source.TileWMS({
	            url: headerHttp+'://'+tmpUrl+':'+portHttp+'/geoserver/raster/wms',
	            params: {'LAYERS': url},
	            serverType: 'geoserver',
	            crossOrigin:'anonymous'
	          }),
	          name: name,
	          opacity: opacity
	        });
		break;
  	case 6:
  		 var projection = new ol.proj.Projection({
  		      code: 'EPSG:4326',
  		      extent: extent
  		  });
			tmpLayer = new ol.layer.Image({
		        source: new ol.source.ImageStatic({
		          url: url,
		          projection: projection,
		          imageExtent: extent
		        }),
		        name: name,
		        opacity:opacity
		      });
			break;
	}
	this.layerList.push(tmpLayer);
	this.layerName.push(name);
	this.map.addLayer(tmpLayer);
}
GHMap.prototype.getLayer=function(name){
	var mark = this;
	var tmpLayer = this.__proto__.literatorLayerList(name,mark)[0];
	return tmpLayer;
}
GHMap.prototype.removeLayerAll=function(){
	var marker = this;
	var nameList = this.layerList;
	nameList.forEach(function(data){
		var tmpLayer = marker.__proto__.literatorLayerList(data,marker);
		marker.map.removeLayer(tmpLayer[0]);
		marker.layerList.splice(tmpLayer[1],1);
		marker.layerName.splice(tmpLayer[2],1);
	});
}
GHMap.prototype.removeLayer=function(name){
	//var tmpLayer = GHMap.prototype.literatorLayerList(name);
	var objectO = this;
	var tmpLayer = this.__proto__.literatorLayerList(name,objectO);
	this.map.removeLayer(tmpLayer[0]);
	this.layerList.splice(tmpLayer[1],1);
	this.layerName.splice(tmpLayer[2],1);
}
GHMap.prototype.literatorLayerList=function(name,mark){
	var layerList = mark.layerList;
	length = layerList.length;
	var tmpLayer=null;
	for(var i=0;i<length;i++){
		tmpLayer=layerList[i];
		var tmpName = tmpLayer.get('name');
		if(tmpName==name){
			return [tmpLayer,i];
		}
	}
}
GHMap.prototype.setLayerVisible=function(name,isVisible){
	var objectMark = this;
	var tmpLayer = this.__proto__.literatorLayerList(name,objectMark);
	tmpLayer = tmpLayer[0];
	tmpLayer.setVisible(isVisible);
}
GHMap.prototype.getLayerVisible=function(name){
	var objectMark = this;
	var tmpLayer = this.__proto__.literatorLayerList(name,objectMark);
	tmplayer = tmpLayer[0];
	if(tmplayer!=undefined){
		return true;
	}
	else{
		return false;
	}
}
GHMap.prototype.setLayerStyle=function(layerName,styleFun,columnList){
	var mark = this;
	var tmpLayer = this.__proto__.literatorLayerList(layerName,mark)[0];
	tmpLayer.setStyle(function(feature){
		return styleFun(feature,columnList);
	});
}
GHMap.prototype.setZoom=function(zoomLevel){
	var map = this.map;
	var tmpView= map.getView();
	tmpView.setZoom(zoomLevel);
}
GHMap.prototype.getSource = function(layerName){
	var objectMark = this;
	var tmpLayer = this.__proto__.literatorLayerList(layerName,objectMark)[0];
	var tmpSource = tmpLayer.getSource();
	return tmpSource;
}
GHMap.prototype.changeSource=function(layerName,sourceUrl,sourceType,cql_filter,extent){
	var isHttps = parseInt(parameterHttpId);
	var headerHttp = (isHttps==1)?'https':'http';
	var portHttp = (isHttps==1)?'11001':'10001';
	cql_filter = cql_filter==undefined?'1=1':cql_filter;
	//var baseUrl = (isHttps==1)?'gis.hotgrid.cn':'220.195.2.246';
	var baseUrl = 'gis.hotgrid.cn';
	var objectMark = this;
	var layer = this.__proto__.literatorLayerList(layerName,objectMark)[0];
	var tmpSource = null;
	switch(sourceType){
	case 0:
		tmpSource =  new ol.source.TileWMS({
	            url: headerHttp+'://'+baseUrl+':'+portHttp+'/geoserver/hotgrid/wms',
	            params: {'LAYERS': sourceUrl, 'TILED': true,cql_filter:cql_filter},
	            serverType: 'geoserver',
	            crossOrigin:'anonymous'
	          });
		break;
	case 1:
		tmpSource = new ol.source.Vector({
	        format: new ol.format.GeoJSON(),
	        url: sourceUrl,
	        strategy: ol.loadingstrategy.bbox
	      });
		break;
	case 2:
		tmpSource =  new ol.source.TileWMS({
	            url: headerHttp+'://'+baseUrl+':'+portHttp+'/geoserver/raster/wms',
	            params: {'LAYERS': sourceUrl, 'TILED': true,cql_filter:cql_filter},
	            serverType: 'geoserver',
	            crossOrigin:'anonymous'
	          });
		break;
	case 3:
		 var projection = new ol.proj.Projection({
  		      code: 'EPSG:4326',
  		      extent: extent
  		  });
		 tmpSource =new ol.source.ImageStatic({
		          url: sourceUrl,
		          projection: projection,
		          imageExtent: extent,
		          opacity:cql_filter
		   });
			break;
	case 4:
		tmpSource= new ol.source.Vector({
				features: sourceUrl
			});
	}
	layer.setSource(tmpSource);
}
GHMap.prototype.highlight=function(queryUrl,columnList,typeIndex,needZoom){
	var tmpColorList = this.colorList;
	var markObject = this;
	var tmpHighLightLayer = this.__proto__.literatorLayerList('highlight',markObject)[0];
	$.ajax({
		type: "GET",
        url: queryUrl,
        contentType: "application/json; charset=utf-8",
        success: function (message) {
        	var features = message['features'];
            var tmpLength = features.length;
            var color = 'rgba(0,102,204,1)';
            for(var i=0;i<tmpLength;i++){
            	 var tmpData = features[i];
            	 var tmpGeo = tmpData[columnList[0]]['coordinates'];//'geometry'
            	 var current_projection = new ol.proj.Projection({code: "EPSG:4326"});
            	 var new_projection = new ol.proj.Projection({code:"EPSG:3857"});
            	 tmpGeo = new ol.geom.MultiPolygon(tmpGeo);
            	 tmpGeo = tmpGeo.transform(current_projection,new_projection);
            	 var tmpData = tmpData['properties'];
            	 var tmpId = tmpData[columnList[1]];//'GBDM'
            	 var vectorSource = null;
            	 var layerFeatureList = tmpHighLightLayer.getSource().getFeatures();
            	 var tmpColorLength = layerFeatureList.length;
            	 if(tmpId==columnList[2]){
            		 var changeMarker = null;
            		 var unchangeMarker = null;
            		 switch(typeIndex){
            		 case 0:
            			 var changeMarker = new ol.Feature({
            				 geometry:tmpGeo,
            				 name:'0'
            			 });
            			 layerFeatureList[0]=changeMarker;
            			 markObject.colorList[0]=color;
            			 break;
            		 case 1:
            			 var changeMarker = new ol.Feature({
            				 geometry:tmpGeo,
            				 name:'1'
            			 });
            			 layerFeatureList[1]=changeMarker;
            			 markObject.colorList[1]='rgba(142,172,172,1)'
            			 break;
            		 case 2:
            			 var changeMarker = new ol.Feature({
            				 geometry:tmpGeo,
            				 name:'2'
            			 });
            			 layerFeatureList[2]=changeMarker;
        				 var tmpExtent = tmpGeo.getExtent();
            			 var tmpView= markObject.map.getView();
            			 var tmpLon = (tmpExtent[0]+tmpExtent[2])/2;
            			 var tmpLat = (tmpExtent[1]+tmpExtent[3])/2;
            			 tmpView.setCenter([tmpLon,tmpLat]);
            			 if(needZoom){
            				 tmpView.setZoom(needZoom);
            			 }else{
            				 tmpView.setZoom(10);
            			 }
            			 markObject.colorList[2]='rgba(255,24,23,1)';
            			 break;
            		 case 3:
            			 var changeMarker = new ol.Feature({
            				 geometry:tmpGeo,
            				 name:'3'
            			 });
            			 layerFeatureList[3]=changeMarker;
            			 if(needZoom!=undefined){
            				 var tmpExtent = tmpGeo.getExtent();
                			 var tmpView= markObject.map.getView();
                			 var tmpLon = (tmpExtent[0]+tmpExtent[2])/2;
                			 var tmpLat = (tmpExtent[1]+tmpExtent[3])/2;
                			 tmpView.setCenter([tmpLon,tmpLat]);
                			 tmpView.setZoom(14);
            			 }
            			 markObject.colorList[3]='rgba(0,255,255,1)';
            			 break;
            		 case 4:
            			 var changeMarker = new ol.Feature({
            				 geometry:tmpGeo,
            				 name:'4'
            			 });
            			 layerFeatureList[4]=changeMarker;
            			 markObject.colorList[4] = 'rgba(0,255,255,1)';
            			 break;
            		 }
            		 if(typeIndex<=4){
            			 vectorSource = new ol.source.Vector({
        					 features: layerFeatureList
        	 			  });
            			 tmpHighLightLayer.setSource(vectorSource);
            			 tmpHighLightLayer.setStyle(function(feature){
                			 var name = feature.get('name');
                			 var tmpColor = markObject.colorList[name];
                			 var tmpStyle = new ol.style.Style({
                								stroke: new ol.style.Stroke({
                											color: tmpColor,
                											width: 5
                										})
                							});
                			return tmpStyle;
                		 });
            			 tmpHighLightLayer.setVisible(true);
                		 break;
            		 }
            		 else{

            		 }
            	 }
            }
        }
	});
//	fetch(queryUrl)
//	.then(function(response){
//		return response.json();
//	})
//	.then(function(json){
//		//省份高亮、城市高亮、区县网格高亮、热点网格高亮、预报网格高亮、popup
//		var format = new ol.format.GeoJSON();
//        var features = format.readFeatures(json);
//        var tmpLength = features.length;
//        var color = 'rgba(0,102,204,1)';
//        for(var i=0;i<tmpLength;i++){
//        	 var tmpData = features[i];
//        	 var tmpData = tmpData.getProperties();
//        	 var tmpGeo = tmpData[columnList[0]];//'geometry'
//        	 var current_projection = new ol.proj.Projection({code: "EPSG:4326"});
//        	 var new_projection = new ol.proj.Projection({code:"EPSG:3857"});
//        	 tmpGeo = tmpGeo.transform(current_projection,new_projection);
//        	 var tmpId = tmpData[columnList[1]];//'GBDM'
//        	 var vectorSource = null;
//        	 var layerFeatureList = tmpHighLightLayer.getSource().getFeatures();
//        	 var tmpColorLength = layerFeatureList.length;
//        	 if(tmpId==columnList[2]){
//        		 var changeMarker = null;
//        		 var unchangeMarker = null;
//        		 switch(typeIndex){
//        		 case 0:
//        			 var changeMarker = new ol.Feature({
//        				 geometry:tmpGeo,
//        				 name:'0'
//        			 });
//        			 layerFeatureList[0]=changeMarker;
//        			 markObject.colorList[0]=color;
//        			 break;
//        		 case 1:
//        			 var changeMarker = new ol.Feature({
//        				 geometry:tmpGeo,
//        				 name:'1'
//        			 });
//        			 layerFeatureList[1]=changeMarker;
//        			 markObject.colorList[1]='rgba(142,172,172,1)'
//        			 break;
//        		 case 2:
//        			 var changeMarker = new ol.Feature({
//        				 geometry:tmpGeo,
//        				 name:'2'
//        			 });
//        			 layerFeatureList[2]=changeMarker;
//    				 var tmpExtent = tmpGeo.getExtent();
//        			 var tmpView= markObject.map.getView();
//        			 var tmpLon = (tmpExtent[0]+tmpExtent[2])/2;
//        			 var tmpLat = (tmpExtent[1]+tmpExtent[3])/2;
//        			 tmpView.setCenter([tmpLon,tmpLat]);
//        			 if(needZoom){
//        				 tmpView.setZoom(needZoom);
//        			 }else{
//        				 tmpView.setZoom(10);
//        			 }
//        			 markObject.colorList[2]='rgba(255,24,23,1)';
//        			 break;
//        		 case 3:
//        			 var changeMarker = new ol.Feature({
//        				 geometry:tmpGeo,
//        				 name:'3'
//        			 });
//        			 layerFeatureList[3]=changeMarker;
//        			 if(needZoom!=undefined){
//        				 var tmpExtent = tmpGeo.getExtent();
//            			 var tmpView= markObject.map.getView();
//            			 var tmpLon = (tmpExtent[0]+tmpExtent[2])/2;
//            			 var tmpLat = (tmpExtent[1]+tmpExtent[3])/2;
//            			 tmpView.setCenter([tmpLon,tmpLat]);
//            			 tmpView.setZoom(14);
//        			 }
//        			 markObject.colorList[3]='rgba(0,255,255,1)';
//        			 break;
//        		 case 4:
//        			 var changeMarker = new ol.Feature({
//        				 geometry:tmpGeo,
//        				 name:'4'
//        			 });
//        			 layerFeatureList[4]=changeMarker;
//        			 markObject.colorList[4] = 'rgba(0,255,255,1)';
//        			 break;
//        		 }
//        		 if(typeIndex<=4){
//        			 vectorSource = new ol.source.Vector({
//    					 features: layerFeatureList
//    	 			  });
//        			 tmpHighLightLayer.setSource(vectorSource);
//        			 tmpHighLightLayer.setStyle(function(feature){
//            			 var name = feature.get('name');
//            			 var tmpColor = markObject.colorList[name];
//            			 var tmpStyle = new ol.style.Style({
//            								stroke: new ol.style.Stroke({
//            											color: tmpColor,
//            											width: 5
//            										})
//            							});
//            			return tmpStyle;
//            		 });
//        			 tmpHighLightLayer.setVisible(true);
//            		 break;
//        		 }
//        		 else{
//
//        		 }
//        	 }
//        }
//	});
}
GHMap.prototype.addPopUp=function(popup){
	this.map.addOverlay(popup);
}
/**
 * 获取地图弹窗
 * @returns popup
 */
GHMap.prototype.getPopup = function(){
	return this.map.getOverlays().getArray()[0];
}
GHMap.prototype.getMap=function(){
	return this.map;
}
