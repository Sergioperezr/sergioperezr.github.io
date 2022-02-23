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
  }

})



// function([string1, string2],target id,[color1,color2])
 consoleText(['proactive.', 'dynamic.', 'collaborative.','competitive.','innovative.','organized.','responsible.','leader.','team worker.'], 'text',['#6c757d','tomato','rebeccapurple','lightblue']);
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
