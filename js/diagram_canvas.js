var widthCanvas = 550;
var heightCanvas = 460;
var centerPolygonX=widthCanvas/2;
var centerPolygonY=heightCanvas/2;
var radiusPolygon=heightCanvas/2.5;
var numberLevels=5;
var gradient=10;
var levelLineWidth=0.3;
var contourLineWidth=4;
var polygonLineWidth=3;

var levelIndex=[6,5,3,1,0];
var levelColors=["red","rgb(240,128,0)","rgb(255,255,0)","rgb(0,255,0)","rgb(255,255,255)"];


document.getElementById('mySVG').setAttribute('width',widthCanvas);
document.getElementById('mySVG').setAttribute('height',heightCanvas);


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

function coordinatePolygonLevels(levels){
	var numberOfEdges=levels.length;
	coordinates=coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,radiusPolygon/(1+numberLevels));
	if(levels.length!=coordinates.length){
		alert('not a right number of levels');
	}
	var newCoordinates=[];
	for (var iter=0; iter < levels.length; iter++){
			currentCoordinate=[coordinates[iter][0]+(coordinates[iter][0]-centerPolygonX)*levels[iter],coordinates[iter][1]+(coordinates[iter][1]-centerPolygonY)*levels[iter]];
		newCoordinates.push(currentCoordinate);
	}
	return newCoordinates;
}

function createPath(ctx,levels,coordLevels,lineWidth){
	var numberOfEdges=levels.length;
	ctx.beginPath();
	ctx.moveTo(coordLevels[0][0],coordLevels[0][1]);
	for (var iter = 0; iter < numberOfEdges; iter++) {
		ctx.lineTo(coordLevels[iter][0],coordLevels[iter][1]);
	}
		
	ctx.closePath(); 
	ctx.lineWidth=lineWidth; 
}

function drawDiagram(ctx,levels){
	
	var numberOfEdges = levels.length;

	// Fill the global contour with gradient
	createPath(ctx,levels,coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,radiusPolygon),contourLineWidth);
	ctx.strokeStyle="black";
	ctx.stroke();
	
	// Create contour gradient
	for (var iterGradient=0; iterGradient<levelIndex.length-1; iterGradient++){
		var coordLevels=coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,levelIndex[iterGradient]*radiusPolygon/(numberLevels+1));
		createPath(ctx,levels,coordLevels,levelLineWidth);
		var colorGrd=ctx.createRadialGradient(centerPolygonX,centerPolygonY,levelIndex[iterGradient+1]*radiusPolygon/(numberLevels+1),centerPolygonX,centerPolygonY,levelIndex[iterGradient]*radiusPolygon/(numberLevels+1));
		colorGrd.addColorStop(0,levelColors[iterGradient+1]);
		colorGrd.addColorStop(1,levelColors[iterGradient]);
		ctx.fillStyle = colorGrd;
		ctx.fill();
	}
	
	// Create contour levels
	
	for (var levelIter=1; levelIter <7; levelIter++) {
		var coordLevels=coordinateRegularPolygon(numberOfEdges,centerPolygonX,centerPolygonY,levelIter*radiusPolygon/(numberLevels+1));
		createPath(ctx,levels,coordLevels,levelLineWidth);
		ctx.strokeStyle="black";
		ctx.stroke();
	}

	
}

function drawLevels(ctx,levels,lang){
	ctx.clearRect(0, 0, widthCanvas, heightCanvas);
	drawDiagram(ctx,levels);
	ctx.fillStyle = "black";
	ctx.font = heightCanvas/40+"px font-family";
	ctx.fillText("0",centerPolygonX + radiusPolygon*Math.cos(Math.PI/8)/(numberLevels+1) ,centerPolygonY-radiusPolygon*Math.sin(Math.PI/8)/(numberLevels+1)); 
	ctx.fillText("1",centerPolygonX + radiusPolygon*Math.cos(Math.PI/8)/(numberLevels+2)*2 ,centerPolygonY-radiusPolygon*Math.sin(Math.PI/8)/(numberLevels+2)*2); 
	ctx.fillText("2",centerPolygonX + radiusPolygon*Math.cos(Math.PI/8)/(numberLevels+2)*3 ,centerPolygonY-radiusPolygon*Math.sin(Math.PI/8)/(numberLevels+2)*3); 
	ctx.fillText("3",centerPolygonX + radiusPolygon*Math.cos(Math.PI/8)/(numberLevels+2)*4 ,centerPolygonY-radiusPolygon*Math.sin(Math.PI/8)/(numberLevels+2)*4); 
	ctx.fillText("4",centerPolygonX + radiusPolygon*Math.cos(Math.PI/8)/(numberLevels+2)*5 ,centerPolygonY-radiusPolygon*Math.sin(Math.PI/8)/(numberLevels+2)*5); 
	ctx.fillText("5",centerPolygonX + radiusPolygon*Math.cos(Math.PI/8)/(numberLevels+2)*6 ,centerPolygonY-radiusPolygon*Math.sin(Math.PI/8)/(numberLevels+2)*6); 

	fillTextCanvas(lang);
	
	risks(levels);
	var coordPolygonLevels=coordinatePolygonLevels(levels);
	createPath(ctx,levels,coordPolygonLevels,polygonLineWidth);
	ctx.strokeStyle="rgb(51,15,255)";
	ctx.stroke();
}

function fillTextCanvas(lang){
	if(lang=="fr"){
	ctx.fillStyle = "black";
	ctx.font = heightCanvas/40+"px font-family";
	ctx.fillText("Saignement et/ou suppuration au sondage",centerPolygonX + 1.2*radiusPolygon*Math.cos(Math.PI/1.5) ,centerPolygonY-1.2*radiusPolygon*Math.sin(Math.PI/1.5)); 
	ctx.fillText("Profondeur de poche",centerPolygonX + 1*radiusPolygon*Math.cos(Math.PI/3.7) ,centerPolygonY-1*radiusPolygon*Math.sin(Math.PI/3.7)); 
	ctx.fillText("Perte osseuse",centerPolygonX + 1.03*radiusPolygon*Math.cos(0) ,centerPolygonY-1.03*radiusPolygon*Math.sin(0)); 
	ctx.fillText("Excès de ciment",centerPolygonX + 1.05*radiusPolygon*Math.cos(-Math.PI/3.4) ,centerPolygonY-1.05*radiusPolygon*Math.sin(-Math.PI/3.4)); 
	ctx.fillText("Hygiène orale",centerPolygonX + 1.14*radiusPolygon*Math.cos(Math.PI/1.8) ,centerPolygonY-1.14*radiusPolygon*Math.sin(-Math.PI/1.8)); 
	ctx.fillText("Antécédents",centerPolygonX + 1.3*radiusPolygon*Math.cos(Math.PI/4.6+Math.PI) ,centerPolygonY-1.3*radiusPolygon*Math.sin(Math.PI+Math.PI/4.6)); 
	ctx.fillText("de parodontopathies",centerPolygonX + 1.5*radiusPolygon*Math.cos(Math.PI/4.6+Math.PI) ,centerPolygonY-1.5*radiusPolygon*Math.sin(Math.PI+Math.PI/4.6)); 
	ctx.fillText("Tabagisme",centerPolygonX + 1.4*radiusPolygon*Math.cos(Math.PI) ,centerPolygonY-1.4*radiusPolygon*Math.sin(Math.PI)); 
	ctx.fillText("Statut diabétique",centerPolygonX + 1.45*radiusPolygon*Math.cos(3.3*Math.PI/4) ,centerPolygonY-1.45*radiusPolygon*Math.sin(3.3*Math.PI/4)); 
	ctx.font = heightCanvas/42+"px font-family";
	ctx.fillStyle = "green";
	ctx.fillText("Zone à risque faible",10,10); 
	ctx.fillStyle = "orange";
	ctx.fillText("Zone à risque modéré",10,25); 
	ctx.fillStyle = "red";
	ctx.fillText("Zone à risque élevé",10,40); 
	} 
	
	if(lang=="en"){
	ctx.fillStyle = "black";
	ctx.font = heightCanvas/40+"px font-family";
	ctx.fillText("Bleeding on probing/suppuration",centerPolygonX + 1.2*radiusPolygon*Math.cos(Math.PI/1.5) ,centerPolygonY-1.2*radiusPolygon*Math.sin(Math.PI/1.5)); 
	ctx.fillText("Probing depth",centerPolygonX + 1*radiusPolygon*Math.cos(Math.PI/3.7) ,centerPolygonY-1*radiusPolygon*Math.sin(Math.PI/3.7)); 
	ctx.fillText("Bone loss",centerPolygonX + 1.03*radiusPolygon*Math.cos(0) ,centerPolygonY-1.03*radiusPolygon*Math.sin(0)); 
	ctx.fillText("Excess cement",centerPolygonX + 1.05*radiusPolygon*Math.cos(-Math.PI/3.4) ,centerPolygonY-1.05*radiusPolygon*Math.sin(-Math.PI/3.4)); 
	ctx.fillText("Oral hygiene",centerPolygonX + 1.14*radiusPolygon*Math.cos(Math.PI/1.8) ,centerPolygonY-1.14*radiusPolygon*Math.sin(-Math.PI/1.8)); 
	ctx.fillText("Periodontal",centerPolygonX + 1.3*radiusPolygon*Math.cos(Math.PI/4.6+Math.PI) ,centerPolygonY-1.3*radiusPolygon*Math.sin(Math.PI+Math.PI/4.6)); 
	ctx.fillText("diseases",centerPolygonX + 1.25*radiusPolygon*Math.cos(Math.PI/4.6+Math.PI) ,centerPolygonY-1.45*radiusPolygon*Math.sin(Math.PI+Math.PI/4.6)); 
	ctx.fillText("Smoking",centerPolygonX + 1.4*radiusPolygon*Math.cos(Math.PI) ,centerPolygonY-1.4*radiusPolygon*Math.sin(Math.PI)); 
	ctx.fillText("Glycemic status",centerPolygonX + 1.45*radiusPolygon*Math.cos(3.3*Math.PI/4) ,centerPolygonY-1.45*radiusPolygon*Math.sin(3.3*Math.PI/4)); 
	ctx.font = heightCanvas/42+"px font-family";
	ctx.fillStyle = "green";
	ctx.fillText("Low risk area",10,10); 
	ctx.fillStyle = "orange";
	ctx.fillText("Moderate risk area",10,25); 
	ctx.fillStyle = "red";
	ctx.fillText("High risk area",10,40); 
	}
}


