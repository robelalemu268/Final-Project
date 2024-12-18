// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqTitles = document.querySelectorAll('.faq-title');
    faqTitles.forEach(title => {
        title.addEventListener('click', () => {
            const openContent = document.querySelector('.faq-content:not([style*="display: none"])');
            if (openContent && openContent !== title.nextElementSibling) {
                openContent.style.display = 'none';
            }
            const content = title.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            contactForm.style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
        });
    }
});

// Blueimp Gallery Initialization
document.addEventListener('DOMContentLoaded', () => {
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
                index: index,
            });
        });
    }
});

// Camera Recommendation Functionality
const mainOptions = document.querySelectorAll('.main-option');
const categories = document.querySelectorAll('.category');
const recommendations = document.getElementById('recommendations');
const cameraList = document.getElementById('camera-list');

// Removed duplicate declaration of cameraData

mainOptions.forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.categories').forEach(section => section.style.display = 'none');
        const targetId = `${option.getAttribute('data-option')}-categories`;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.style.display = 'flex';
        }
        recommendations.style.display = 'none';
    });
});
cameraList.addEventListener('click', (event) => {
    const cameraItem = event.target.closest('.camera-item');
    if (!cameraItem) return;

    const cameraName = cameraItem.querySelector('p').textContent;
    const camera = Object.values(cameraData).flat().find(cam => cam.name === cameraName);

    if (camera) {
        document.getElementById('popupTitle').textContent = camera.name;
        document.getElementById('popupImage').src = camera.img;
        document.getElementById('popupDescription').textContent = camera.desc;
        document.getElementById('cameraPopup').classList.remove('hidden');
    }
});

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('cameraPopup').classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('cameraPopup')) {
        document.getElementById('cameraPopup').classList.add('hidden');
    }
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

// Responsive Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            topNav.classList.toggle('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');
    const breadcrumb = document.querySelector('.breadcrumb');

    // Handle breadcrumb visibility
    const updateBreadcrumbVisibility = () => {
        if (breadcrumb) {
            breadcrumb.style.display = window.innerWidth > 768 ? 'none' : 'block';
        }
    };

    // Initial check
    updateBreadcrumbVisibility();

    // Handle resize
    window.addEventListener('resize', updateBreadcrumbVisibility);

    // Handle Menu Toggle
    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', () => {
            topNav.classList.toggle('active');
            updateBreadcrumbVisibility();
        });
    }
});
const cameraData = {
    general: [
        { name: "Fujifilm X-T4", img: "images/camera/1.png", desc: "The Fujifilm X-T4 is a versatile mirrorless camera with advanced video and photo capabilities. It features 26.1 MP, 4K video recording, and 5-axis stabilization, making it perfect for both professional and hobbyist photographers." },
        { name: "Fujifilm X-S10", img: "images/camera/2.png", desc: "The Fujifilm X-S10 is designed for creators seeking high performance. It offers a compact body, 4K video, and superb stabilization, making it ideal for travel and everyday photography." },
        { name: "Fujifilm X-A7", img: "images/camera/3.png", desc: "The Fujifilm X-A7 is an entry-level mirrorless camera with a 24.2 MP sensor, excellent autofocus, and easy-to-use touchscreen controls for effortless shooting." }
    ]
};
const form = document.querySelector('form');
const pristine = new Pristine(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate(); // true or false
    console.log(valid ? 'Form is valid!' : 'Form is invalid!');
    const breadcrumb = document.querySelector('.breadcrumb');
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');

    const updateBreadcrumbVisibility = () => {
        breadcrumb.style.display = window.innerWidth <= 768 ? 'block' : 'none';
    };

    window.addEventListener('resize', updateBreadcrumbVisibility);
    updateBreadcrumbVisibility(); // Initial check

    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', () => {
            topNav.classList.toggle('active');
            updateBreadcrumbVisibility();
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Initialize PristineJS
    const pristine = new Pristine(form, {
        classTo: 'form-group',
        errorClass: 'has-error',
        successClass: 'has-success',
        errorTextParent: 'form-group',
        errorTextTag: 'span',
        errorTextClass: 'error'
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission behavior
        const isValid = pristine.validate();

        if (isValid) {
            form.style.display = 'none'; // Hide the form
            thankYouMessage.style.display = 'block'; // Show the Thank You message
        }
    });
});
