
// Screenshot Prevention (Frontend Only)
document.addEventListener('keydown', (e) => {
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        alert('Screenshots are disabled for this page.'); // Or any other action
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click is disabled for this page.'); // Or any other action
});

// Image Watermark (Blurred) - This is a basic example, more sophisticated methods can be used.
const images = document.querySelectorAll('.profile-image img');
images.forEach(img => {
    img.style.filter = 'blur(5px)'; // Initial blur
    img.addEventListener('mouseover', () => {
        img.style.filter = 'blur(0px)'; // Remove blur on hover
    });
    img.addEventListener('mouseout', () => {
        img.style.filter = 'blur(5px)'; // Reapply blur on mouseout
    });
});

// No Drag and Drop
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});
