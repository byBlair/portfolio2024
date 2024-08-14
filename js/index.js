document.addEventListener('DOMContentLoaded', function() {
    // 미디어 크기 설정
    let windowW = window.innerWidth;
    if (windowW > 1555) {
      nav();
      asideNav();
    } else if (windowW > 980 && windowW <= 1154) {
      nav();
    } else if (windowW > 580 && windowW <= 979) {
      tNav();
      gallery();
    } else if (windowW <= 579) {
      tNav();
      gallery();
    }
  
    // 화면 크기 변경 시 새로고침
    window.addEventListener('resize', function() {
      window.location.reload();
    });
  
    // 함수 정의
    function nav() {
      document.querySelectorAll('nav li>a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          event.preventDefault();
          const navA = document.querySelector(this.getAttribute('href'));
          const aPos = navA.offsetTop;
          const hh = document.querySelector('header').offsetHeight;
          window.scrollTo({
            top: aPos - hh,
            behavior: 'smooth'
          });
        });
      });
    }
  
    function tNav() {
      let navW = document.querySelector('nav').offsetWidth;
      document.querySelector('header .btn').addEventListener('click', function() {
        this.style.display = 'none';
        document.querySelector('nav').style.left = '0';
      });
      document.querySelectorAll('nav li>a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          event.preventDefault();
          let navB = document.querySelector(this.getAttribute('href')).offsetTop;
          let headerH = document.querySelector('header').offsetHeight;
          window.scrollTo({
            top: navB - headerH,
            behavior: 'smooth'
          });
          document.querySelector('nav').style.left = `-${navW}px`;
          document.querySelector('header .btn').style.display = 'block';
        });
      });
      document.querySelector('nav .close').addEventListener('click', function() {
        document.querySelector('nav').style.left = `-${navW}px`;
        document.querySelector('header .btn').style.display = 'block';
      });
    }
  
    function asideNav() {
      // 필요한 경우 추가 코드 작성
    }
  
    function gallery() {
      let figureW = document.querySelector('#all figure').offsetWidth;
      let allFigures = document.querySelector('#all');
      allFigures.insertBefore(allFigures.lastElementChild, allFigures.firstElementChild);
      allFigures.style.marginLeft = `-${figureW}px`;
  
      document.querySelector('#gallery .prev').addEventListener('click', function() {
        allFigures.style.transition = 'margin-left 0.6s';
        allFigures.style.marginLeft = '0';
        allFigures.addEventListener('transitionend', function() {
          allFigures.insertBefore(allFigures.lastElementChild, allFigures.firstElementChild);
          allFigures.style.transition = 'none';
          allFigures.style.marginLeft = `-${figureW}px`;
        }, { once: true });
      });
  
      document.querySelector('#gallery .next').addEventListener('click', function() {
        allFigures.style.transition = 'margin-left 0.6s';
        allFigures.style.marginLeft = `-${2 * figureW}px`;
        allFigures.addEventListener('transitionend', function() {
          allFigures.appendChild(allFigures.firstElementChild);
          allFigures.style.transition = 'none';
          allFigures.style.marginLeft = `-${figureW}px`;
        }, { once: true });
      });
    }
  
    // 객체 만들기
    function Modal(title, pic, year, program, url, text) {
      this.title = title;
      this.pic = pic;
      this.year = year;
      this.program = program;
      this.url = url;
      this.text = text;
    }
  
    Modal.prototype.action = function() {
      document.querySelector('#modal h4').textContent = this.title;
      document.querySelector('#modal figure>img').setAttribute('src', this.pic);
      document.querySelector('#modal figure>figcaption').textContent = this.title;
      document.querySelector('#modal dl>dd:nth-child(2)').textContent = this.year;
      document.querySelector('#modal dl>dd:nth-child(4)').textContent = this.program;
      const modalLink = document.querySelector('#modal dl>dd>a');
      modalLink.setAttribute('href', this.url);
      modalLink.textContent = this.url;
      document.querySelector('#modal dl>dd:nth-child(8)').textContent = this.text;
    };
  
    let mymodal = [
      new Modal('title01', './images/pic01.png', '2001', '프로그램1', 'http://www.a1.com', 'text01'),
      new Modal('title02', './images/pic02.png', '2002', '프로그램2', 'http://www.a12.com', 'text02'),
      new Modal('title03', './images/pic03.png', '2003', '프로그램3', 'http://www.a13.com', 'text03'),
      new Modal('title04', './images/pic04.png', '2004', '프로그램4', 'http://www.a14.com', 'text04'),
      new Modal('title05', './images/pic05.png', '2005', '프로그램5', 'http://www.a15.com', 'text05'),
    ]
});