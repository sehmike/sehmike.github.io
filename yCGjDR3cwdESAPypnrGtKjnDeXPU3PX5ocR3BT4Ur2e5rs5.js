const images=[],start=1,end=1055;for(let e=1;e<=end;e++)images.push(`https://michaelseh.com/album/${e}.jpg`);const imageDisplay=document.getElementById("image-display");function shuffleImage(){const e=Math.floor(Math.random()*images.length);imageDisplay.src=images[e]}shuffleImage(),setInterval(shuffleImage,500);