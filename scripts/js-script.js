document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle Functionality
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

    // Contact Form Submission
    const contactForm = document.getElementById('myForm');
    if (contactForm) {
        const thankYouMessage = document.getElementById('thankYouMessage');
        const pristine = new Pristine(contactForm, {
            classTo: 'form-group',
            errorClass: 'has-error',
            successClass: 'has-success',
            errorTextParent: 'form-group',
            errorTextTag: 'span',
            errorTextClass: 'error'
        });

        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            const isValid = pristine.validate();
            if (isValid) {
                contactForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }
        });
    }

    // Blueimp Gallery Initialization
    const links = document.getElementById('links');
    if (links) {
        links.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target.closest('a');
            if (!target) return;

            const galleryLinks = links.querySelectorAll('a');
            const index = Array.from(galleryLinks).indexOf(target);

            blueimp.Gallery(galleryLinks, {
                container: '#blueimp-gallery',
                index: index
            });
        });
    }

    // Camera Recommendation Functionality
    const mainOptions = document.querySelectorAll('.main-option');
    const categories = document.querySelectorAll('.category');
    const recommendations = document.getElementById('recommendations');
    const cameraList = document.getElementById('camera-list');

    const cameraData = {
        general: [
            { name: "Fujifilm X-T4", img: "images/camera/1.png", desc: "A versatile mirrorless camera with advanced video and photo capabilities." },
            { name: "Fujifilm X-S10", img: "images/camera/2.png", desc: "Compact body, 4K video, ideal for travel and everyday photography." },
            { name: "Fujifilm X-A7", img: "images/camera/3.png", desc: "Entry-level mirrorless camera with easy-to-use touchscreen controls." }
        ]
    };

    mainOptions.forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.categories').forEach(section => section.style.display = 'none');
            const targetId = ${option.getAttribute('data-option')}-categories;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.style.display = 'flex';
            }
            recommendations.style.display = 'none';
        });
    });

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.getAttribute('data-category');
            const cameras = cameraData[selectedCategory] || [];

            cameraList.innerHTML = cameras.map(camera => `
                <div class="camera-item">
                    <img src="${camera.img}" alt="${camera.name}">
                    <p>${camera.name}</p>
                </div>
            `).join('');

            recommendations.style.display = 'block';
        });
    });
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');
    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', () => {
            topNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        const contactForm = document.getElementById('myForm');
        const thankYouMessage = document.getElementById('thankYouMessage');
        const pristine = new Pristine(contactForm, {
            classTo: 'form-group',
            errorClass: 'has-error',
            successClass: 'has-success',
            errorTextParent: 'form-group',
            errorTextTag: 'span',
            errorTextClass: 'error'
        });
    
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            const isValid = pristine.validate();
            if (isValid) {
                contactForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }
        });
    });
});