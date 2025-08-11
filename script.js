document.querySelectorAll('#crazy-list li').forEach(el => {
    const randomRotate = (Math.random() * 100) - 50;
    const randomSize = 10 + Math.random() * 40;
    const randomColor = `hsl(${Math.random() * 360}, 100%, 30%)`;
    const randomBg = `hsl(${Math.random() * 360}, 100%, 90%)`;
    
    el.style.transform = `rotate(${randomRotate}deg)`;
    el.style.fontSize = `${randomSize}px`;
    el.style.color = randomColor```
    el.style.backgroundColor = randomBg;
    el.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
});