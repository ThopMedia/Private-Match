document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.addEventListener('keydown', (e) => {
    const blockedKeys = [
        'PrintScreen',
        'F12',
        ...(e.ctrlKey && e.shiftKey ? ['I', 'J', 'C', 'U'] : []), 
        ...(e.ctrlKey && e.key === 'u' ? ['u'] : []) 
    ];

    if (blockedKeys.includes(e.key)) {
        e.preventDefault();
        return false;
    }
});

const watermarks = document.querySelectorAll('.watermark');
let watermarkVisible = true;

setInterval(() => {
    watermarkVisible = !watermarkVisible;
    const opacity = watermarkVisible ? 0.7 : 0.4;
    watermarks.forEach(wm => {
        wm.style.opacity = opacity;
        wm.style.transform = `translateY(${watermarkVisible ? '0' : '2px'})`;
    });
}, 1500);

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

if (window.location !== window.parent.location) {
    window.top.location = window.location;
}

document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

document.querySelectorAll('.detail-label, .footer-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.7)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.textShadow = 'none';
    });
});

document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
}, { passive: false });
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('touchstart', (e) => {
        e.stopPropagation(); 
    }, { passive: true }); 
});