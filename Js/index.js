
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
      if (btn.classList.contains('liked')) {
        btn.classList.remove('bi-heart');
        btn.classList.add('bi-heart-fill');
      } else {
        btn.classList.remove('bi-heart-fill');
        btn.classList.add('bi-heart');
      }
    });
  });