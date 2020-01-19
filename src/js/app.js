//quando scrollo con il mouse nascondo la navbar che vedo e ne mostro un'altra che resta fissa in alto
var $ = require('jquery');
$(document).ready(function(){
  var headerHidden = $('.header-fixed'); //prendo tutto il div contenente la navbar inizialmente nascosta;
  var headerVisible = $('.header-top'); //prendo tutto il div contenente la navbar inizialmente visibile;
  var prevTop = $(window).scrollTop(); //imposto la posizione iniziale sulla posizione corrente sulla pagina
$(window).on('scroll', function(e) { //quando vado a fare scroll con il mouse
  st = $(this).scrollTop(); //imposto la posizione di scorrimento
  //console.log(st);
  if (st > 480) { //se la posizione di scorrimento è maggiore a 480 (quindi quando faccio scroll in basso fino a 480px)
    headerVisible.addClass('hidden'); //nascondo la nav bar che è normalmente visibile
    headerHidden.addClass('active'); //mostro la nav bar che prima era nascosta
  } else { //altrimenti (se faccio scroll in alto)
    headerVisible.removeClass('hidden'); //mostro la navbar che prima avevo nascosto
    headerHidden.removeClass('active'); //nascondo la navbar che prima avevo mostrato
  }
  prevTop = st; //la posizione iniziale sulla posizione corrente sulla pagina, diventa la posizione di scorrimento
});
});
