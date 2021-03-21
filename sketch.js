// Adapted from Dan Shiffman, natureofcode.com



var colorPallet = function(red, yellow, green){
    this.red = red;
    this.yellow = yellow;
    this.green = green;
};

function pickColorPallet(x){
    if(x < 400){
        var diff = 400-x;
        
        var colorDeviation = diff *4.1;
        
        var a = new colorPallet(0, 255 - colorDeviation, 0 + colorDeviation);
        
        return a;
    }
    else if(x > 400){
        var diff = x - 400;
        
        var colorDeviation = diff *4.1;
        
        var a = new colorPallet(0 + colorDeviation, 255 - colorDeviation, 0);
        
        return a;
    }
}

setup = function(){
    createCanvas(800, 400);    
}

draw = function() {
    // The nextGaussian() function returns a normal distribution of random numbers with the following parameters: a mean of zero and a standard deviation of one
    var num = randomGaussian();
    var standardDeviation = 60;
    var mean = 400;
    
    // Multiply by the standard deviation and add the mean.
    var x = standardDeviation * num + mean;
    
    noStroke();
    
    var colors = pickColorPallet(x);
    
    fill(colors.red, colors.yellow, colors.green, 10);
    rect(x, 200, 3, 100);
};




