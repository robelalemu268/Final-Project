document.querySelectorAll('.faq-title').forEach(title => {
    title.addEventListener('click', () => {
        const openContent = document.querySelector('.faq-content:not([style*="display: none"])');
        if (openContent && openContent !== title.nextElementSibling) {
            openContent.style.display = 'none';
        }
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
