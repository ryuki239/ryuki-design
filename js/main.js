document.addEventListener('DOMContentLoaded', function() {
    
    // 1. スライドショー機能
    const slides = document.querySelectorAll('.slide-img');
    let currentIndex = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 3000);
    }
　
    // 2. もっと見る / 閉じる ボタン機能
    const viewMoreBtn = document.getElementById('view-more-btn');
    const galleryGrid = document.getElementById('gallery-grid');
    const worksSection = document.getElementById('works');

    if (viewMoreBtn && galleryGrid) {
        viewMoreBtn.addEventListener('click', () => {
            galleryGrid.classList.toggle('active');

            if (galleryGrid.classList.contains('active')) {
                viewMoreBtn.textContent = 'Close Archives';
            } else {
                viewMoreBtn.textContent = 'More Archives';
                // スクロール戻り位置調整
                const headerOffset = 80;
                const elementPosition = worksSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    }

    // 3. ライトボックス（画像拡大）機能
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-item .img-wrap');

    galleryImages.forEach(wrap => {
        wrap.addEventListener('click', () => {
            const img = wrap.querySelector('img');
            const src = img.getAttribute('src');
            lightboxImg.setAttribute('src', src);
            lightbox.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

});