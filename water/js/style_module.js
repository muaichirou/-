(function(global) {
    var handler = {
        getIndex: function(value, type) {
            var range = pollutionRange[type];
            var idx = 0,
                i = 0,
                j = range.length;
            if (type == 8) {
                return 1;
            }
            if (value > 0) {
                if (value < Math.min.apply(null, range)) {
                    idx = 0;
                }
                if (value > Math.max.apply(null, range)) {
                    idx = j;
                }
                for (; i < j; i++) {
                    if (range[i] >= value) {
                        idx = i;
                        break;
                    }
                }
            }
            return idx + 1;
        }
    }

    var methods = {
    	getIndex: handler.getIndex,
        getSiteColor: function(value, type) {
            var idx = handler.getIndex(value, type);
            if (!idx) idx = 0;
            return colorArray[idx];
        },
        getSiteImage: function(value, type) {
            /*var imagePath = path + "/resource/images/gis_site/";
            var src = '';
            var idx = handler.getIndex(value, type);
            if (idx) src = imagePath + 'SiteIcon_Official-0' + idx + '.png';
            return src;*/
            var imagePath = path + "/resource/images/gis_site_new/";
            var src = '';
            var idx = handler.getIndex(value, type);
            //if (idx) 
            src = imagePath + 'SiteIcon_Official-0' + idx + '.png';
            return src;
        
        },
        getSiteIconImage: function(value, type) {
            var imagePath = path + "/resource/images/sensorImage/";
            var src = '';
            var idx = handler.getIndex(value, type);
            if(idx) src = imagePath + 'sensor' + idx + '.png';
            return src;
            /*var imagePath = path + "/resource/images/gis_site_new/";
            var src = '';
            var idx = handler.getIndex(value, type);
            //if (idx) 
          src = imagePath + 'SiteIcon_Official.png';
            return src;*/
        
        },
        getSmallSensorImage: function(value, type) {
            var imagePath = path + "/resource/images/";
            var src = '';
            var idx = handler.getIndex(value, type);
            if (idx) src = imagePath + 'SensorIcon_Official-0' + idx + '.png';
            return src;
        },
        getBigSensorImage: function(value, type) {
            var imagePath = path + "/resource/images/pointImage/";
            var src = '';
            var idx = handler.getIndex(value, type);
            if (idx) src = imagePath + 'icon01_' + idx + '.png';
            return src;
        },
        getGridImage: function(value, type) {
        	var imagePath = path + "/resource/images/pointImage/";
        	var src = '';
        	var idx = handler.getIndex(value, type);
        	if (idx) src = imagePath + 'icon_map_0' + idx + '.png';
        	return src;
        },
        initRecordImage: function(type) {
        	var imagPath = path + "/resource/images/pointImage/";
        	var src = "";
        	if(type === 0){
        		src = imagPath + 'icon_map_01.png';
        	} else if(type === 1){
        		src = imagPath + 'icon_map_03.png';
        	}
        	return src;
        },
        styleForSmallIcon: function(src, scale) {
        	var scale = scale || 0.75;
            return new ol.style.Style({
                image: new ol.style.Icon(({
                    anchor: [0.5, 15],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    scale: scale,
                    src: src
                }))
            })
        },
        styleSiteIcon: function(src,pm25){
        	var i = src.indexOf('.');
			var index = src.slice(i - 1, i);
			var color = 'rgba(255,255,255,1)';
			if(index <= 2) color = 'rgba(0,0,0,1)';
    		var text = new ol.style.Text({
    	        textAlign: "center",
    	        textBaseline: "middle",
    	        font: "normal 10px Arial",
    	        text: pm25,
    	        fill: new ol.style.Fill({color: color}),
    	        stroke: new ol.style.Stroke({color: color, width: '0px'}),
    	        offsetX: 0,
    	        offsetY: 10,
    	        rotation: 0
    	   });
    		return new ol.style.Style({
    			image: new ol.style.Icon(({
                    anchor: [0.5, 45],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: src,
                    opacity: 1
                })),
			    text: text,
			    fill: new ol.style.Fill({
					color: 'rgba(255,255,255,1)'
				}),
			})
    	},
        styleIcon: function(src, pm25) {
            var text = new ol.style.Text({
                textAlign: "center",
                textBaseline: "middle",
                font: "normal 10px Arial",
                text: pm25,
                fill: new ol.style.Fill({ color: 'rgba(0,0,0)' }),
                stroke: new ol.style.Stroke({ color: "rgba(0,0,0,1)", width: '1px' }),
                offsetX: 0,
                offsetY: -25,
                rotation: 0
            });
            return new ol.style.Style({
                image: new ol.style.Icon(({
                    anchor: [0.5, 45],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: src,
                    opacity: 1
                })),
                text: text,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                })
            })
        },
        newStyleSiteIcon: function(src, pm25) {
            var text = new ol.style.Text({
                textAlign: "center",
                textBaseline: "middle",
                font: "normal 14px Arial",
                text: pm25,
                fill: new ol.style.Fill({ color: 'rgba(255,255,255)' }),
                stroke: new ol.style.Stroke({ color: "rgba(0,0,0,1)", width: '1px' }),
                offsetX: 0,
                offsetY: -7,
                rotation: 0,
            });
            return new ol.style.Style({
                image: new ol.style.Icon(({
                    anchor: [0.5, 45],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: src,
                    opacity: 1,
//                    scale:0.6
                })),
                text: text,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                })
            })
        },
        styleCache: function(color) {
            return new ol.style.Style({
                image: new ol.style.RegularShape({
                    points: 3, // 顶点数
                    radius: 10, // 图形大小，单位为像素
                    stroke: new ol.style.Stroke({ // 设置边的样式
                        color: 'rgba(0, 0, 0, 1)',
                        size: 2
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(' + color + ')'
                    }),
                    opacity: 1
                })
            })
        }
    }
    global.styleMod = methods;
})(window);