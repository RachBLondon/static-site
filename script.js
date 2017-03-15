var $lines = $('.prompt p');
$lines.hide();
var lineContents = new Array();

var terminal = function() {

  var skip = 0;
  typeLine = function(idx) {
    idx == null && (idx = 0);
    var element = $lines.eq(idx);
    var content = lineContents[idx];
    if(typeof content == "undefined") {
      $('.skip').hide();
      return;
    }
    var charIdx = 0;

    var typeChar = function() {
      var rand = Math.round(Math.random() * 150) + 25;

      setTimeout(function() {
        var char = content[charIdx++];
        element.append(char);
        if(typeof char !== "undefined")
          typeChar();
        else {
          element.append('<br/><span class="output">' + element.text().slice(9, -1) + '</span>');
          element.removeClass('active');
          typeLine(++idx);
        }
      }, skip ? 0 : rand);
    }
    content = '' + content + '';
    element.append(' ').addClass('active');
    typeChar();
  }

  $lines.each(function(i) {
    lineContents[i] = $(this).text();
    $(this).text('').show();
  });

  typeLine();
}

terminal();

//show content
setTimeout(function(){
  document.getElementsByClassName('description')[0].classList.add("showy")
  document.getElementsByClassName('wc-social-media')[0].classList.add("showy")
}, 750);

setTimeout(function(){
  document.getElementsByClassName('class-list')[0].classList.add("showy")
}, 1300);

var applyModalEffect= function(number){
  var trigger = 'trigger_' + number;
  var modal = 'modal_' + number;
  var close = 'close_' + number;
  document.getElementsByClassName(trigger)[0].addEventListener("click", function(){
    document.getElementsByClassName(modal)[0].classList.add("displayer")
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
  });

  document.getElementsByClassName(close)[0].addEventListener('click', function(){
    document.getElementsByClassName(modal)[0].classList.remove("displayer");
  });
}

applyModalEffect(1);
applyModalEffect(2);
applyModalEffect(3);

//escape key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      var modals = document.getElementsByClassName('modal_g')

      for(var i = 0; i < modals.length; i++){
        modals[i].classList.remove("displayer");

      }
    }
};
