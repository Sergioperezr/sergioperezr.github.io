/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .navbar-nav')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//EDICION DE Sergio Barra Skills

window.addEventListener('scroll', function() {
  const bar_automation = document.querySelector('.bar_automation');
  const bar_uipath = document.querySelector('.bar_uipath');
  const bar_java = document.querySelector('.bar_java');
  const bar_c = document.querySelector('.bar_c');
  const bar_sqlserver = document.querySelector('.bar_sqlserver');
  const bar_postgresql = document.querySelector('.bar_postgresql');
  const bar_mongo = document.querySelector('.bar_mongo');
  const bar_html = document.querySelector('.bar_html');
  const bar_pad = document.querySelector('.bar_pad');
  const bar_rocketbot = document.querySelector('.bar_rocketbot');


  let posAnimation = this.document.getElementById('skills').getBoundingClientRect().top;

  let heightScreen = window.innerHeight/2;
  if (posAnimation < heightScreen ){
      bar_automation.classList.add('class-animate');
      bar_uipath.classList.add('class-animate');
      bar_java.classList.add('class-animate');
      bar_c.classList.add('class-animate');
      bar_sqlserver.classList.add('class-animate');
      bar_postgresql.classList.add('class-animate');
      bar_mongo.classList.add('class-animate');
      bar_html.classList.add('class-animate');
      bar_pad.classList.add('class-animate');
      bar_rocketbot.classList.add('class-animate');
  }

})



// function([string1, string2],target id,[color1,color2])
 consoleText(['proactive.', 'dynamic.', 'collaborative.','competitive.','prudent.','organized.','responsible.','curious.','team worker.'], 'text',['#e5383b','#e09f3e','#9e2a2b','#540b0e','#17c3b2','#fe6d73']);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


//SCRIP PARA GALERAI DE CURSOS Y CERTIFICACIONES
const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');
const modal = document.getElementById('modal_gallery');
const btnCloseModal = document.getElementById('close_modal_gallery');
let imgModal = modal.querySelector('.ctn_modal_gallery .modal_body_gallery img');

function closeModal() {
	document.body.classList.remove('no-scroll-y');
	modal.classList.remove('show_modal_gallery');
}

if ( gallery && images ) {
	document.addEventListener('click', e => {
		if ( modal ) {
			if (e.target.matches('.gallery img') )  {

				let indexImg = Array.from(images).indexOf(e.target);

				let attrSrcImg = Array.from(images).map(imgSrc => imgSrc.getAttribute('src'));
				let indexAttrSrcImg = attrSrcImg[indexImg];

				imgModal.setAttribute('src', indexAttrSrcImg);
				imgModal.style.display = 'block';
				imgModal.style.width = '100%';
				document.body.classList.add('no-scroll-y');
				modal.classList.add('show_modal_gallery');

			}
		}
	});
}

if ( btnCloseModal ) {
	document.addEventListener('click', e => {
		e.target.matches('.close_modal_gallery') || e.target.matches('.close_modal_gallery i') ? closeModal() : '';
	});

	document.addEventListener('keydown', e => {
		e.key === 'Escape' ? closeModal() : '';
	});
}
