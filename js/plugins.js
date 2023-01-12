// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
(function(c,u,x,i,o){
  c._cuxSettings=c._cuxSettings||{id:o};
  var e=u.createElement(x),t=u.getElementsByTagName(x)[0];
  e.src=i;e.async=true;t.parentNode.insertBefore(e,t);
  c._cux_q=[];c._cux=c._cux||{send:function(n,p){c._cux_q.push({n:n,p:p,t:new Date()})}};
})(window, document, 'script', '//dc.cux.io/analyzer.js', '1363343656.0.82470500.1673538838.63c02d16c9587');
