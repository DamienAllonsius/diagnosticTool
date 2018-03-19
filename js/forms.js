var c = document.getElementById("mySVG");
var ctx = c.getContext("2d");


function afficher(id)
{
	document.getElementById('outilDiag').style.display="none";
	document.getElementById('regles').style.display="none";
	document.getElementById('aPropos').style.display="none";
    document.getElementById(id).style.display="block";
    return true;
}

//~ var forms = document.getElementById('formCriteria');
//~ var children = forms.childNodes;
   
//~ function getLevels(){
	//~ var levels=[];
	//~ for (var i = 0, c = children.length; i < c; i++) {
		//~ if(children[i].nodeType==1){
			//~ var v=parseInt(children[i].firstChild.nextSibling.value);
			//~ if(!isNaN(v) && v<=5 && v>=0){
				//~ levels.push(children[i].firstChild.nextSibling.value);
			//~ }
			//~ else{
				//~ levels.push(0);
			//~ }
		//~ }
	//~ }
	//~ return levels;
//~ }

//~ var levels=getLevels();
//~ drawLevels(ctx,levels);

//~ forms.addEventListener('input', function() {
//~ var levels=getLevels();
//~ drawLevels(ctx,levels);
//~ risks(levels);
//~ });	



function risks(levels){
	var h=0;
	var m=0;
	var l=0;
	var r='';
	for (var i=0; i<levels.length; i++){
		if(levels[i]==5){
			h++;
		}
		else if(levels[i]>2){
			m++;
		}
		else{
			l++;
		}
	}
	if(lang=="en"){
		if(h>1){	
			$("#risk").text("high");  
			$("#risk").css('color','red'); 
		}
		else if (m+h<3){
			$("#risk").text("low");
			$("#risk").css('color','green'); 
		}	
		else {
			$("#risk").text("medium"); 
			$("#risk").css('color','orange'); 
		}
	}
	else{
		if(h>1){	
			$("#risk").text("élevé");  
			$("#risk").css('color','red'); 
		}
		else if (m+h<3){
			$("#risk").text("faible");
			$("#risk").css('color','green'); 
		}	
		else {
			$("#risk").text("moyen"); 
			$("#risk").css('color','orange'); 
		}
	}
}



var levels=Array.apply(null, Array(8)).map(Number.prototype.valueOf,0);


//~ $(function() {
	//~ $('#datetimepicker1').datetimepicker({
	//~ language: 'pt-BR'
	//~ });
//~ });

function eraseData() {
	document.getElementById("formData").reset();
	$("#textDropdownMenuHF").text(""); 
}

$(document).ready(function(){	
	 $("#dropdownMenuHF").click(function(event){
		 $("#textDropdownMenuHF").text(event.target.text)
	});
});

//~ SALE ! 
function eraseCriteria() {
	levels=Array.apply(null, Array(8)).map(Number.prototype.valueOf,0);
	drawLevels(ctx,levels,lang);
	$("#textDropdownMenu1").text(""); 
	$("#textDropdownMenu2").text(""); 
	$("#textDropdownMenu3").text(""); 
	$("#textDropdownMenu4").text(""); 
	$("#textDropdownMenu5").text(""); 
	$("#textDropdownMenu6").text(""); 
	$("#textDropdownMenu7").text(""); 
	$("#textDropdownMenu8").text(""); 
}

//~ SALE ! 

$(document).ready(function(){	
    $("#dropdownMenu1").click(function(event){
        $("#textDropdownMenu1").text(event.target.text)
       levels[0]=event.target.id[event.target.id.length - 1]
       drawLevels(ctx,levels,lang);
    }); 
    $("#dropdownMenu2").click(function(event){
        $("#textDropdownMenu2").text(event.target.text)
        levels[1]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    }); 
    $("#dropdownMenu3").click(function(event){
        $("#textDropdownMenu3").text(event.target.text)
        levels[2]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    }); 
    $("#dropdownMenu4").click(function(event){
        $("#textDropdownMenu4").text(event.target.text)
        levels[3]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    });
    $("#dropdownMenu5").click(function(event){
        $("#textDropdownMenu5").text(event.target.text)
        levels[4]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    });
    $("#dropdownMenu6").click(function(event){
        $("#textDropdownMenu6").text(event.target.text)
        levels[5]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    });
    $("#dropdownMenu7").click(function(event){
        $("#textDropdownMenu7").text(event.target.text)
        levels[6]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    });
    $("#dropdownMenu8").click(function(event){
        $("#textDropdownMenu8").text(event.target.text)
        levels[7]=event.target.id[event.target.id.length - 1]
        drawLevels(ctx,levels,lang);
    });
    
});

$("#printBtn").click(function(event){
	
    var win = window.open('','','left=0,top=0,width=552,height=477,toolbar=0,scrollbars=0,status =0');
    var content = "<html>";
    content += "<body onload=\"window.print(); window.close();\">";
    //~ content += "<img src=\"logo.png\" >" ;
    //~ content += document.getElementById("formData").innerHTML ;
    //~ content += document.getElementById("formCriteria").innerHTML ;
    //~ content += document.getElementById("mySVG").innerHTML ;
    content +=  " <strong>"+$("#headerIdentity").text()+"</strong> <br/>";
    content +=  "<ul>  <li>"+$("#labelSurnameClient").text() + " : " + $("#inputPrenomPatient").val(); + "</li> ";
    content += "<li>"+$("#labelNameClient").text()+" : " + $("#inputNomPatient").val(); +"</li>";
    content += "<li>" +$("#labelSexe").text()+ " : " + $("#textDropdownMenuHF").text() +"</li>";
    content += "<li>" +$("#ageClient").text()+ " : " + $("#inputAgePatient").val(); +"</li>";
    content += "<li> "+$("#labelDateConsultation").text() + " : " + $("#datepicker").val(); +"</li>";
    content +=  "</ul>";
 
 
    content +="<strong>Diagramme d'évaluation </strong> <br/>";
    content +=  "<ul>  <li>"+ $("#labelFaces").text() + " : " + $("#textDropdownMenu1").text() + "</li> ";      
	content +=  "  <li>"+ $("#labelProfondeur").text() + " : " + $("#textDropdownMenu2").text() + "</li> ";      
	content +=  " <li>"+ $("#labelPerte").text() + " : " + $("#textDropdownMenu3").text() + "</li> ";      
	content +=  "  <li>"+ $("#labelAssemblage").text() + " : " + $("#textDropdownMenu4").text() + "</li> ";      
	content +=  "  <li>"+ $("#labelFacesPlaque").text() + " : " + $("#textDropdownMenu5").text() + "</li> ";      
	content +=  "  <li>"+ $("#labelEtatParodontal").text() + " : " + $("#textDropdownMenu6").text() + "</li> ";      
	content +=  "  <li>"+ $("#labelTabac").text() + " : " + $("#textDropdownMenu7").text() + "</li> ";   
	content +=  "  <li>"+ $("#labelDiabete").text() + " : " + $("#textDropdownMenu8").text() + "</li> ";      
    content +=  "</ul>";
    
    content +=  "<div> <strong>"+$("#risquePeri").text()+"  </strong> : " + "<span style=\"color:"+$("#risk").css("color")+"\">" + $("#risk").text()+"</span>"  + "</div>";
    
    //~ content += c.innerHTML ;
    var canvasdata =c.toDataURL("image/png");
    content += "</br>";
    content += '<center><img src="'+canvasdata+'"> </center>'; 
    
    content += "</body>";
    content += "</html>";

    win.document.write(content);
    win.document.close();
    
});





