(function() {
    // Modernizr function to check if browser supports canvas
    var modernizrTest = function() {
        if(Modernizr.canvas) {
            var theCanvas = document.getElementById("Canvas1");
            console.log("Canvas is working");
        } else {
            console.log("Your browser does not support HTML5 canvas.");
        }
    }    
    modernizrTest();
    
    
    window.onload = function() {
        
        
        // Logo using canvas and DrawScript
        var theCanvas = document.getElementById("Canvas1");
        if (theCanvas && theCanvas.getContext) {
            var ctx = theCanvas.getContext("2d");
            if (ctx) {
                
                //Text was made manually
                ctx.fillStyle = "#f4f4f4";                
                ctx.font = "italic bold 14pt Helvetica";
                ctx.fillText("YOU Booze", 50,20);
                ctx.fillStyle = "#f4f4f4";
                ctx.font = "10pt Helvetica italic";
                ctx.fillText('YOU May Lose', 50,37);
                
                ctx.lineStyle="rgb(57,140,209)";
                ctx.lineWidth=2;
                ctx.beginPath();
                ctx.moveTo(35,49);
                ctx.strokeStyle = "#FFF";
                ctx.bezierCurveTo(35,49,125,32,169,50);
                ctx.stroke();
            }
        }
        
        
        
         var canvas = document.getElementById("canvas"),
                ctx2 = canvas.getContext("2d"),
                data = [
                    {
                        value: 36,
                        color: "#e0440e"
                    },
                    {
                        value: 35,
                        color: "#e6693e"
                    }, 
                    {
                        value: 23,
                        color: "#ec8f6e"
                    }
                    
                    
                   
        ];
            new Chart(ctx2).Pie(data);
    
        
       //Hides  section on load 
        $('#animate1').hide()
        //Shows Section When Button Clicked
        $(".slideup").click(function(){
            $("#animate1").slideToggle(500);
            });
   
        //Hides on load
        $('#animate2').hide()
        //Shows Section When Button Clicked
        $(".slideup1").click(function(){
            $("#animate2").slideToggle(500);
            
        });
        
        
    }
 
       
    //Alcohol use by Gender
    //Combo Chart Using Google Charts
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart2);
    
    function drawChart2() {
       var data = google.visualization.arrayToDataTable([
          ['Gender', 'Beer', 'Wine', 'Liquor', 'N/A'],
          ['Male',  48,      25,         30,             6],
          ['Female', 22,      51,        21,             6]
          ]);

        var options = {
          title : 'Alcohol Use By Gender',
          vAxis: {title: "Precentage"},
          hAxis: {title: "Sex"},
          seriesType: "bars",
          series: {5: {type: "line"}},
          colors:['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
 
    
})();