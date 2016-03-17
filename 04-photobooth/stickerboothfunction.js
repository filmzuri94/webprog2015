$(document).ready(function(){
    $("#camera-control button").click(takephoto);
    $(".draggable").attr({
    	 "draggable":"true",
    	 "ondragstart":"drag(event)"
    });
    $("body").keydown(managephoto);
});

function takephoto(){
	CameraTool.initCameraOn("camera");
	// setTimeout(function(){ alert("Hello"); }, 3000);
	setTimeout(function(){ $( "#countdown" ).html("3"); }, 1000);
	setTimeout(function(){ $( "#countdown" ).html("2"); }, 2000);
	setTimeout(function(){ $( "#countdown" ).html("1"); }, 3000);
	setTimeout(function(){ $( "#countdown" ).html(""); }, 4000);
	setTimeout(function(){ CameraTool.captureTo("photo"); }, 4000);
	setTimeout(function(){ CameraTool.hideCamera(); }, 4000);
	// CameraTool.captureTo("photoframe");
	// CameraTool.hideCamera();
}


function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.);

}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}

function managephoto(e){
	
	//left
	if(e.which == 37 && e.shiftKey == false ){}
	//right
	if(e.which == 39 && e.shiftKey == false ){}
	//up
	if(e.which == 38 && e.shiftKey == false ){}
	//down
	if(e.which == 40 && e.shiftKey == false ){}
	//l-rotate
	if(e.which == 37 && e.shiftKey == true ){}
	//r-rotate
	if(e.which == 39 && e.shiftKey == true ){}
	
}