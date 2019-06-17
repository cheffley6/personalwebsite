// sketch.js

var drops = [];
function setup() {
    canvas = createCanvas(.81 * window.innerWidth, 1 * window.innerHeight);
    for (var i = 0; i < 100; i++) {
        drops[i] = new Drop();
    }
    img = loadImage("possiibleBackground.png");
    img.resize(canvas.width, canvas.height);
}
j = 1;
let defaultColor = [random(0, 255), random(0, 255), random(0, 255)];
//let techGold = [179, 163, 105];
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
    this.colorScheme = [random(0, 255), random(0, 255), random(0, 255)];

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
        stroke(random(0, 255), random(0, 255), random(0, 255));
        line(this.x, this.y, this.x, this.y + this.len);
    }
            
}
// function mousePressed() {
//     for (let i = 0; i < drops.length; i++) {
//         if (Math.abs(mouseX - drops[i].x) < 10) {
//             if (Math.abs(mouseY - drops[i].y) < 100) {
//                 alert("got one");
//                 drops[i].defaultColor = false;
//                 drops[i].show(tec);
//                 drops[i].fall();
//                 drop = drops[i];
//                 break;
//             }
//         }
//     }
// }
