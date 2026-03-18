/* ========================================
   HAVEN — script.js
   ======================================== */


/* 1. НАВИГАЦИЯ — прилипает при скролле */
window.addEventListener('scroll', function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});


/* 2. АНИМАЦИЯ ПОЯВЛЕНИЯ (reveal) */
var revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });
}


/* 3. СЧЁТЧИКИ — только если блок .stats есть на странице */
var statsSection = document.querySelector('.stats');
if (statsSection) {
  var statEls = document.querySelectorAll('.stat-n[data-target]');
  var counted = false;

  var statsObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !counted) {
      counted = true;

      statEls.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
        var current = 0;
        var step = Math.ceil(target / 60);

        var timer = setInterval(function () {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.innerHTML = current + suffix;
        }, 20);
      });
    }
  }, { threshold: 0.4 });

  statsObserver.observe(statsSection);
}


/* 4. СЛАЙДЕР ОТЗЫВОВ — только если элементы есть на странице */
var tq = document.getElementById('tq');
var ta = document.getElementById('ta');
var dots = document.querySelectorAll('.testi-dot');

if (tq && ta && dots.length > 0) {
  var testimonials = [
    {
      text: '"HAVEN нашёл нам дом мечты за три недели. Команда работала безупречно — от первого звонка до подписания документов."',
      author: '— Александра и Дмитрий Воронцовы, Москва'
    },
    {
      text: '"Продали квартиру выше рыночной цены на 12%. Профессиональный подход, честность и реальный результат — это HAVEN."',
      author: '— Николай Петров, Санкт-Петербург'
    },
    {
      text: '"Доверили управление виллой в Сочи. Всегда полная загрузка, надёжные арендаторы и прозрачная отчётность."',
      author: '— Семья Ковалёвых, Сочи'
    }
  ];

  var currentIdx = 0;

  function goTo(idx) {
    currentIdx = idx;
    tq.style.opacity = '0';
    ta.style.opacity = '0';
    setTimeout(function () {
      tq.textContent = testimonials[idx].text;
      ta.textContent = testimonials[idx].author;
      tq.style.opacity = '1';
      ta.style.opacity = '1';
    }, 350);
    dots.forEach(function (d, i) {
      d.classList.toggle('on', i === idx);
    });
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goTo(parseInt(dot.getAttribute('data-i'), 10));
    });
  });

  setInterval(function () {
    goTo((currentIdx + 1) % testimonials.length);
  }, 5000);
}


/* 5. ФОРМА — только если кнопка есть на странице */
var submitBtn = document.getElementById('submit-btn');
if (submitBtn) {
  submitBtn.addEventListener('click', function () {
    submitBtn.textContent = '✓ Заявка отправлена';
    submitBtn.style.background = '#5a7a50';
    submitBtn.disabled = true;
    setTimeout(function () {
      submitBtn.textContent = 'Отправить заявку';
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 4000);
  });
}
