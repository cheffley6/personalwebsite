// sketch.js

var drops = [];
function setup() {
canvas = createCanvas(.8 * window.innerWidth, window.innerHeight);
for (var i = 0; i < 100; i++) {
    drops[i] = new Drop();
}
img = loadImage("https://i.redd.it/ts1ffujfwd921.jpg");
img.resize(canvas.width, canvas.height);
}
j = 1;
function draw() {
    background(img);
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
    }
}

function Drop() {
    this.x = random(width);
    this.y = random(-1000, -100);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 14, 20);
    this.yspeed = map(this.z, 0, 20, 10, 20);

    this.fall = function() {
        this.y = this.y + this.yspeed;
        var grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + grav;

        if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 10);
        this.x = random(width);
        }
    }

    this.show = function() {
        var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(255, 255, 255);
        line(this.x, this.y, this.x, this.y + this.len);
    }
            
}
function mousePressed() {
    for (let i = 0; i < drops.length; i++) {
        if (Math.abs(mouseX - drops[i].x) < 10) {
            if (Math.abs(mouseY - drops[i].y) < 10) {
                alert("got one");
                drop = drops[i];
                break;
            }
        }
    }
}
