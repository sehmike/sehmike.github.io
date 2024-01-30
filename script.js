var s = Snap("#s");
s = Snap(603, 452);

// background 
var upper_left_panel = s.path("M0,38 L 71,0 L 0,0 L0,38");
var green_dark= s.group(upper_left_panel);
green_dark.attr({stroke:'#fff',fill:'#2d3f48','stroke-width':0,'fill-opacity':1,'stroke-linecap':"round"});

var upper_left_panel_2 = s.path("M0,38 L 71,0 L 603,0 L 603,452 L 0,603");
var light_blue = s.group(upper_left_panel_2);
light_blue.attr({stroke:'#fff',fill:'#51648a','stroke-width':0,'fill-opacity':1,'stroke-linecap':"round"});

var upper_left_panel_3 = s.path("M 0,79 L 159,0 L603,0 L603,10 L0,213 L0,79");
var light_green = s.group(upper_left_panel_3);
light_green.attr({stroke:'#fff',fill:'#345e6d','stroke-width':0,'fill-opacity':1,'stroke-linecap':"round"});

var upper_left_panel_4 = s.path("M0,213 L603,10 L603,75 L0,254 L0,213");
var dark_blue = s.group(upper_left_panel_4);
dark_blue.attr({stroke:'#fff',fill:'#3d4e6b','stroke-width':0,'fill-opacity':1,'stroke-linecap':"round"});

var d_left = s.path("M143,61 L173,120 C 123,120 133,61 143,61");
var d_right = s.path("M180,50 L210,100 C 240,90 200,30 180,50");
var darkest_green = s.group(d_left,d_right);
darkest_green.attr({stroke:'#000',fill:'#173236','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var line1 = s.path("M0,38 L 71,0");
var line2 = s.path("M0,79 L 159,0");
var line3 = s.path("M0,213 L603,10");
var line4 = s.path("M0,254 L603,75");
var line5 = s.path("M134,13 L199,120");
var line6 = s.path("M493,0 L513,38");
var line_group = s.group(line1,line2,line3,line4,line5,line6);
line_group.attr({stroke:'#000',fill:'#ab2a2a ','stroke-width':3,'fill-opacity':0,'stroke-linecap':"round"});


// fry
var face= s.path("M235,380 C 240,375 237,298 227,298 C 190,300 190,235 230,248 L 248,276 L 200,130 L 363,170 C 360,170 363,180 367,180 C 367,180 380,190 378,200 L 390,285 C 385,285 410,318 415,318 C 420,320 420,333 413,333  C 413,333 327,330 327,338 L 370,333 C 373,338 371,345 370,345 C 370,342 340,370 340,370 L 318,416 C 310,425 220,395 235,380");

var hair = s.path("M200,275 C 170,275 120,235 157,170 L 123,158 L 157,138 L 147,110 L 178,126 C 195,80 265,75 295,95 C 305,95 280,33 280,30 C 290,30 350,100 345,100 C 355,95 330,35 330,35 C 360,35 425,150 365,170 L 250,145 C 250,145 219,140 222,145 C 230,145 255,183 250,180 C 250,180 210,165 210,170 C 230,170 260,255 248,273 L 230,250 C 210,235 195,270 200,275");

var shoulder = s.path("M120,452 C 220,320 395,400 395,452 L 120,452");

var cuff_front = s.path("M237,375 L235,345 C 190,375 200,452 200,452 L 260,452 C 255,452 225,360 230,360 L 233,375 L 237,375");

var shirt = s.path("M230,390 L 320,400 C 330,385 340,452 340,452 L 260,452 L 230,390");

var cuff_right = s.path("M340,375 C 350,375 380,452 375,452 L 340,452 C 340,452 330,400 328,400 L 340,375");

var jacket_group_behind= s.group(shoulder);
shoulder.attr({stroke:'#000',fill:'#ab2a2a ','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var shirt_group= s.group(shirt);
shirt_group.attr({stroke:'#000',fill:'#fff','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var skin_group = s.group(face);
skin_group.attr({stroke:'#000',fill:'#ffb591','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var hair_group = s.group(hair);
hair_group.attr({stroke:'#000',fill:'#ea711d','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var jacket_group_front = s.group(cuff_front,cuff_right);
jacket_group_front.attr({stroke:'#000',fill:'#ab2a2a ','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var eye_line_left = s.path("M270,252 C 265,250 260,218 264,218");
var eye_line_right = s.path("M332,252 C 340,250 345,210 323,201");

var eye_left_group = s.group(eye_line_left,eye_line_right);
eye_left_group.attr({stroke:'#000','stroke-width':2,'fill-opacity':0,'stroke-linecap':"round"})

var eye_line_far_right = s.path("M383,255 C 403,245 400,200 372,200");
var eye_right_group = s.group(eye_line_far_right);
eye_right_group.attr({stroke:'#000','stroke-width':3,fill:'#ffb591','fill-opacity':1,'stroke-linecap':"round"});

var left_eye = s.path("M265,240 C 267,235 340,230 340,235 L 340,230 C 337,220 267,225 265,235 L 265,240");

var right_eye = s.path("M338,228 C 338,220 395,220 395,220 L 395,230 C 395,228 338,233 338,235 L 338,228");

var eye_group = s.group(left_eye,right_eye);
eye_group.attr({stroke:'#000',fill:'#fff ','stroke-width':2,'fill-opacity':1,'stroke-linecap':"round"});

var nose = s.path("M340,240 C 345,235 360,255 360,255 L 380,255 C 410,255 405,285 380,285 L 365,285");
var nose_group = s.group(nose);
nose_group.attr({stroke:'#000',fill:'#ffb591','stroke-width':3,'fill-opacity':1,'stroke-linecap':"round"});

var pupil_left = s.circle(305,230,5);
var pupil_right = s.circle(375,225,4);

var ear = s.path("M210,270 C 210,250 230,260 235,270");
var ear2 = s.path("M225,260 C 210,260 220,283 230,283");

var ear_group = s.group(ear,ear2);
ear_group.attr({stroke:'#000',fill:'#ffb591','stroke-width':3,'fill-opacity':0,'stroke-linecap':"round"});

var text1 = s.text(125,75,["Not sure if PNG"]);
var text2 = s.text(210,440,["or SVG"]);

text1.selectAll('tspan').attr({"font-size":'60px',"font-family":"Impact,Coda,serif",fill:"#fff",stroke:"#000","stroke-width":3});
text2.selectAll('tspan').attr({"font-size":'60px',"font-family":"Impact,Coda,serif",fill:"#fff",stroke:"#000","stroke-width":3});

