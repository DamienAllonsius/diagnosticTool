function coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,radiusPolygon){
	var coordinates=[[centerPolygonX,centerPolygonY-radiusPolygon]];
	var angle=2*Math.PI/numberOfEdges;
	for (var iter = 0; iter < numberOfEdges-1; iter++) {
		// To make a rotation : R_{\theta}(a+ib)=exp(i\theta)(a+ib)=cos(\theta)*a - b*sin(\theta) + i*(\cos(\theta)*b +a*sin(\theta))
		var newSummit=[centerPolygonX+(coordinates[iter][0]-centerPolygonX)*Math.cos(angle) - (coordinates[iter][1]-centerPolygonY)*Math.sin(angle),centerPolygonY+(coordinates[iter][1]-centerPolygonY)*Math.cos(angle) + (coordinates[iter][0]-centerPolygonX)*Math.sin(angle)];
		coordinates.push(newSummit);
	}
	return coordinates;
}

function coordinatePolygonLevels(levels,coordinates,centerPolygonX,centerPolygonY){
	if(levels.length!=coordinates.length){
		alert('not a right number of levels');
	}
	var newCoordinates=[];
	for (var iter=0; iter < levels.length; iter++){
		currentCoordinate=[centerPolygonX+(coordinates[iter][0]-centerPolygonX)*levels[iter],centerPolygonY+(coordinates[iter][1]-centerPolygonY)*levels[iter]];
		newCoordinates.push(currentCoordinate);
	}
	return newCoordinates;
}

function strCoordinatePolygon(coordinates){
	var strCoordinates='';
	for (var iter = 0; iter < coordinates.length; iter++) {
		strCoordinates+=coordinates[iter][0]+","+coordinates[iter][1]+" ";
	}
	return strCoordinates
}

var centerPolygonX=200;
var centerPolygonY=120;
var radiusPolygon=115;
var thicknessBlackContour=5;
var numberLevels=5;
var gradient=10;


function drawDiagram(levels){
	var numberOfEdges=levels.length;


	var numberPolygons=gradient*numberLevels;
	for (var iter = 0; iter < numberPolygons; iter++) {
		var r=255-(iter+1)*255/numberPolygons;
		var g=Math.min(255,1.4*iter*255/numberPolygons);
		var b=70;
		if (iter%gradient==0){
			if(iter==0){
				var stroke='stroke:black;stroke-width:'+thicknessBlackContour;
			}
			else{
				var stroke='stroke:black;stroke-width:0.3';
			}
		}
		else{
			var stroke='';
		}
		document.getElementById('mySVG').innerHTML += '<polygon points="" style="fill:rgb('+r+','+g+','+b+')'+';'+stroke+'" id="polygon'+iter+'"/>  Sorry, your browser does not support inline SVG.';
		var polygon = document.getElementById('polygon'+(iter));
		polygon.setAttribute('points',strCoordinatePolygon(coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,radiusPolygon-radiusPolygon*iter/numberPolygons)));
	}
}

function drawLevels(levels){
	var numberOfEdges=levels.length;
	document.getElementById('mySVG').innerHTML += '<polygon points="" style="fill:none;stroke:white;stroke-width:2" id="polygonContour"/>  Sorry, your browser does not support inline SVG.';
	var polygonContour = document.getElementById('polygonContour');
	polygonContour.setAttribute('points',strCoordinatePolygon(coordinatePolygonLevels(levels,coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,radiusPolygon/numberLevels),centerPolygonX,centerPolygonY)));	
}
