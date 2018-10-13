'use strict';

function compose() {
  var args = [].slice.call(arguments);

  args.forEach(function(s, i) {
    if (i >= args.length - 1) {
      return;
    }
    var sNext = args[i + 1];
    s.pipe(sNext);
    s.pipe = function(dest) {
      return sNext.pipe(dest);
    };
    s.unpipe = function(dest) {
      return sNext.unpipe(dest);
    };
  });

  return args[0];
}

module.exports = compose;
