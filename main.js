document.addEventListener('DOMContentLoaded', function () {
  const wrappers = document.querySelectorAll('.image-text-wrapper');

  wrappers.forEach(wrapper => {
    const images = wrapper.querySelectorAll('.image-container img');
    const leftArrow = wrapper.querySelector('.nav-arrow.left');
    const rightArrow = wrapper.querySelector('.nav-arrow.right');
    const container = wrapper.querySelector('.image-container');
    let currentIndex = 0;
    let animating = false;
    let startX = 0;
    let endX = 0;

    images.forEach(img => {
      img.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.45s ease';
    });

    function showImage(index, direction = 0) {
      if (animating || index === currentIndex) return;
      animating = true;

      const current = images[currentIndex];
      const next = images[index];
      const offset = direction > 0 ? 100 : -100;

      next.style.transform = `translateX(${offset}%)`;
      next.style.opacity = '0';
      next.classList.add('visible');

      requestAnimationFrame(() => {
        next.style.transform = 'translateX(0)';
        next.style.opacity = '1';
        current.style.transform = `translateX(${-offset}%)`;
        current.style.opacity = '0';
      });

      setTimeout(() => {
        current.classList.remove('visible');
        current.style.transform = '';
        current.style.opacity = '';
        next.style.transform = '';
        next.style.opacity = '';
        currentIndex = index;
        animating = false;
        updateArrowState();
      }, 450);
    }

    function nextImage() {
      if (currentIndex < images.length - 1) {
        showImage(currentIndex + 1, 1);
      }
    }

    function prevImage() {
      if (currentIndex > 0) {
        showImage(currentIndex - 1, -1);
      }
    }

    function updateArrowState() {
      leftArrow.style.opacity = currentIndex === 0 ? '0.3' : '1';
      leftArrow.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
      rightArrow.style.opacity = currentIndex === images.length - 1 ? '0.3' : '1';
      rightArrow.style.pointerEvents = currentIndex === images.length - 1 ? 'none' : 'auto';
    }

    ['click', 'touchstart'].forEach(eventType => {
      rightArrow.addEventListener(eventType, e => {
        e.preventDefault();
        nextImage();
      });
      leftArrow.addEventListener(eventType, e => {
        e.preventDefault();
        prevImage();
      });
    });

    container.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].clientX;
    });

    container.addEventListener('touchend', e => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const diffX = startX - endX;
      const threshold = 50;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0 && currentIndex < images.length - 1) {
          nextImage();
        } else if (diffX < 0 && currentIndex > 0) {
          prevImage();
        }
      }
    }

    images[currentIndex].classList.add('visible');
    updateArrowState();
  });
});