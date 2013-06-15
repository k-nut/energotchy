function drawFace(percentage){
    
    var canvas = document.getElementsByTagName("canvas")[0];
    var context = canvas.getContext("2d");

    // outline
    context.beginPath();
    var centerX = 260;
    var centerY = 360;
    var radius = 250;
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI , true);
    // right eye
    context.beginPath();
    context.lineWidth = 0;
    context.arc(160, 260, 20, 0, 2*Math.PI, false);
    context.fillStyle = "black";
    context.fill()
    context.strokeStyle = "black";
    context.stroke();
    // left eye
    context.beginPath();
    context.lineWidth = 0;
    context.arc(360, 260, 20, 0, 2*Math.PI, false);
    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.fill();
    context.stroke();
    context.stroke();
    // mouth
    context.beginPath();
    mood = 360 + 200 * percentage;
    context.lineWidth = 10;
    context.moveTo(160, 460);
    context.quadraticCurveTo(260, mood, 360, 460);
    context.strokeStyle = "black";
    context.stroke();
    if (is_decotime()){
	    decorate(deco, 40, 0);
    }
};

function drawSmiley(percentage) {
    var canvas = document.getElementsByTagName("canvas")[0];
    var context = canvas.getContext("2d");

    // outline
    context.beginPath();
    var centerX = 260;
    var centerY = 360;
    var radius = 250;
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI , true);
    // color
    var greenvalue = Math.round(255*percentage);
    var smileycolor = "rgb(255," + greenvalue + ",0)";
    context.fillStyle = smileycolor;
    context.fill();
    context.lineWidth = 10;
    context.strokeStyle = "#bada55";
    context.stroke();
    drawFace(percentage);
    return "Smiley";
}

function drawPie(percentage) {
    // Took a lot of this from bepickles peity project
    // http://benpickles.github.com/peity/
    
    var centre = 360;
    var adjust = -Math.PI / 2;
    var slice = percentage * Math.PI * 2;

    var canvas = document.getElementsByTagName("canvas")[0];
    var canvas = canvas.getContext("2d");
    
    var greenvalue = Math.round(255*percentage);
    var smileycolor = "rgb(255," + greenvalue + ",0)";

    // Plate.
    canvas.beginPath();
    canvas.moveTo(260, centre);
    canvas.arc(260, 360, 250, slice + adjust, (slice == 0) ? Math.PI * 2 : adjust, false);
    canvas.fillStyle = "red";
    canvas.fill();

    // Slice of pie.
    canvas.beginPath();
    canvas.moveTo(260, centre);
    canvas.arc(260, 360, 250, adjust, slice + adjust, false);
    canvas.fillStyle = smileycolor;
    canvas.fill();
    drawFace(percentage);
    return "Pie";
}

function drawSun(percentage){
    var canvas = document.getElementsByTagName("canvas")[0];
    context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(100, 100);
    context.stroke();
}

function decorate(img, x, y) {
    var canvas = document.getElementsByTagName("canvas")[0];
    if (typeof G_vmlCanvasManager != 'undefined') { 
	    G_vmlCanvasManager.initElement(canvas); 
    }
    var context = canvas.getContext("2d");
    context.drawImage(img, x, y);
}

function is_decotime(){
	today = new Date(); 
	if (today > 1322697600000 && today < 1325894400000){
		return true;
	}
	else {
		return false;
	}
}
