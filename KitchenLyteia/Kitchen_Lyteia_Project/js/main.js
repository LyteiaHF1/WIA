(function() {
    // Modernizr function to check if browser supports canvas
    var mTest = function() {
        if(Modernizr.canvas) {
            var theCanvas = document.getElementById("Canvas1");
            console.log("Canvas Works! ");
        } else {
            console.log("Your browser does not support canvas.");
        }
    }    
    mTest();
google.load("visualization", "1",{packages:["corechart"]});

//once libaries are loaded then run function 

google.setOnLoadCallback(drawChart);
window.onload = function() {    
   			$('#coin-slider').coinslider({
            effect: 'random',
            width: 960,
            height: 600,
            spw: 7,
            delay: 3000,
            hoverPause: true
        });   
       //First Canvas  
       //Setting up the canvas 
       //Using DrawScript for page logo
        var theCanvas = document.getElementById("Canvas1");
        if (theCanvas && theCanvas.getContext) {
            var ctx = theCanvas.getContext("2d");
            if (ctx) {
            	ctx.fillStyle="#E5E51E";//changed to hex cause color was showing green
				ctx.lineStyle="rgb(9,15,17)";
				ctx.lineWidth=0.25;
				ctx.beginPath();
				ctx.moveTo(84,11);
				ctx.lineTo(91,11);
				ctx.lineTo(91,27);
				ctx.lineTo(109,27);
				ctx.lineTo(109,11);
				ctx.lineTo(115,11);
				ctx.lineTo(115,51);
				ctx.lineTo(109,51);
				ctx.lineTo(109,33);
				ctx.lineTo(91,33);
				ctx.lineTo(91,51);
				ctx.lineTo(84,51);
				ctx.lineTo(84,11);
				ctx.fill();
				ctx.stroke();
				
				ctx.fillStyle="#E5E51E";//changed to hex cause color was showing green
				ctx.lineStyle="rgb(9,15,17)";
				ctx.lineWidth=0.25;
				ctx.beginPath();
				ctx.moveTo(116,19);
				ctx.bezierCurveTo(117,17,117,15,118,13);
				ctx.bezierCurveTo(119,11,120,10,122,9);
				ctx.bezierCurveTo(123,8,125,7,127,6);
				ctx.bezierCurveTo(129,5,131,5,133,5);
				ctx.bezierCurveTo(136,5,139,6,141,7);
				ctx.bezierCurveTo(143,8,145,9,147,11);
				ctx.bezierCurveTo(149,13,150,15,151,18);
				ctx.bezierCurveTo(152,20,152,23,152,26);
				ctx.bezierCurveTo(152,29,152,31,151,34);
				ctx.bezierCurveTo(150,36,149,39,147,41);
				ctx.bezierCurveTo(145,42,143,44,141,45);
				ctx.bezierCurveTo(139,46,136,47,133,47);
				ctx.bezierCurveTo(131,47,129,46,127,45);
				ctx.bezierCurveTo(125,45,123,44,121,42);
				ctx.bezierCurveTo(120,41,119,39,118,37);
				ctx.bezierCurveTo(117,35,117,33,116,31);
				ctx.lineTo(123,31);
				ctx.bezierCurveTo(123,32,124,33,124,35);
				ctx.bezierCurveTo(125,36,125,37,126,38);
				ctx.bezierCurveTo(127,39,128,40,129,40);
				ctx.bezierCurveTo(130,41,132,41,133,41);
				ctx.bezierCurveTo(135,41,137,41,139,40);
				ctx.bezierCurveTo(140,39,141,38,142,36);
				ctx.bezierCurveTo(143,35,144,33,145,31);
				ctx.bezierCurveTo(145,30,145,28,145,26);
				ctx.bezierCurveTo(145,24,145,22,145,20);
				ctx.bezierCurveTo(144,19,143,17,142,16);
				ctx.bezierCurveTo(141,14,140,13,139,12);
				ctx.bezierCurveTo(137,11,135,11,133,11);
				ctx.bezierCurveTo(132,11,130,11,129,11);
				ctx.bezierCurveTo(128,12,127,12,127,13);
				ctx.bezierCurveTo(126,14,125,15,125,16);
				ctx.bezierCurveTo(124,17,124,18,123,19);
				ctx.lineTo(116,19);
				ctx.fill();
				ctx.stroke();

            }
        }
        	
        //2nd Canvas Pie Chart Of Data For What We Do 
          var canvas = document.getElementById("Canvas2"),
                ctx2 = canvas.getContext("2d"),
                data = [
                    {
                        value: 50,
                        color: "#E5E51E"
                    },
                    {
                        value: 25,
                        color: "#F0EAD6"
                    },
                    {
                        value: 25,
                        color: "#ACCBE8"
                    }
                   
        ];
            new Chart(ctx2).Pie(data);  
            
        //Hides gallery section on load 
        $('#gallery').hide()
        //Shows Gallery Section When Button Clicked
        $("#hide_showVideo").click(function(){
            $("#gallery").fadeToggle(600);
            });
   
        //Hides charts and data visualation on load
        $('#whatwedo').hide()
        //Shows Chart Section When Button Clicked
        $("#hide_dataCharts").click(function(){
            $("#whatwedo").slideToggle(600);
            
        });
        
        
    }
        	function drawChart(){
	
	//create data table using array 
	
			var data = google.visualization.arrayToDataTable([
				["Sneaker Number","# Of Pairs Brought"],
				["18", 8],
				["11", 40],
				["6", 12],
				["5", 10],
				["4", 30]		
			]);
			
			var options = {
				title: "Favorite Air Jordan 2014"
	}
		
	//Create the chart 
	var chart = new google.visualization.BarChart(document.getElementById("bar"));
	
	
	//draw the chart
	
	chart.draw(data, options);
	
}   
})();




