// declares variables for big circle and small circle in cursor
var cursorBig = document.querySelector('.big');
var cursorSmall = document.querySelector('.small');
var a = document.querySelectorAll('a');

// positions the two circles in a desired placement
document.addEventListener('mousemove', function(e){
  cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorSmall.style.left = x + 'px';
  cursorSmall.style.top = y + 'px';
});

// adds class when cursor clicks
document.addEventListener('mousedown', function(){
  cursorBig.classList.add('click');
  cursorSmall.classList.add('hover__small');
});

// removes class when cursor stops clicking
document.addEventListener('mouseup', function(){
  cursorBig.classList.remove('click');
  cursorSmall.classList.remove('hover__small');
});

// adds and removes class when mouse hovers and stops hovering
a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursorBig.classList.add('hover__big');
    cursorSmall.classList.add('hover__small');
  });
  item.addEventListener('mouseleave', () => {
    cursorBig.classList.remove('hover__big');
    cursorSmall.classList.remove('hover__small');
  });
})

const icons = document.querySelectorAll('.social_icon');
  icons.forEach(icon => {
      icon.addEventListener('click', function() {
          
          const link = this.getAttribute('data-link');
          
          window.open(link,'_blank');

      });
});