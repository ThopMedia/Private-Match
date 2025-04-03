/**
 * Private Match - Silent Security Protection
 * Blocks right-click, screenshots, and downloads without alerts
 */

// ========================
// 1. DISABLE CONTEXT MENU
// ========================
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ========================
// 2. BLOCK SCREENSHOT KEYS
// ========================
document.addEventListener('keydown', (e) => {
    // Block PrintScreen, F12, and DevTools shortcuts
    const blockedKeys = [
        'PrintScreen',
        'F12',
        ...(e.ctrlKey && e.shiftKey ? ['I', 'J', 'C', 'U'] : []), // Ctrl+Shift+I/J/C/U
        ...(e.ctrlKey && e.key === 'u' ? ['u'] : []) // Ctrl+U
    ];

    if (blockedKeys.includes(e.key)) {
        e.preventDefault();
        return false;
    }
});

// ========================
// 3. DYNAMIC WATERMARKS
// ========================
const watermarks = document.querySelectorAll('.watermark');
let watermarkVisible = true;

// Pulse animation for watermarks
setInterval(() => {
    watermarkVisible = !watermarkVisible;
    const opacity = watermarkVisible ? 0.7 : 0.4;
    watermarks.forEach(wm => {
        wm.style.opacity = opacity;
        wm.style.transform = `translateY(${watermarkVisible ? '0' : '2px'})`;
    });
}, 1500);

// ========================
// 4. ANTI-DRAG PROTECTION
// ========================
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// ========================
// 5. ENHANCE SECURITY
// ========================
// Prevent iframe embedding
if (window.location !== window.parent.location) {
    window.top.location = window.location;
}

// Disable text selection (additional layer)
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

// ========================
// 6. UI ENHANCEMENTS
// ========================
// Gold element hover effects
document.querySelectorAll('.detail-label, .footer-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.7)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.textShadow = 'none';
    });
});

// ========================
// 7. TOUCH PROTECTION
// ========================
document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
}, { passive: false });