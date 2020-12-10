"use strict";

var _require = require('etcd3'),
    Etcd3 = _require.Etcd3;

var client = new Etcd3();

(function _callee() {
  var psw;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client.get('contraseña').string());

        case 2:
          psw = _context.sent;
          console.log('contraseña es:', psw); // const allFValues = await client.getAll().prefix('f').keys();
          // console.log('all our keys starting with "f":', allFValues);

          _context.next = 6;
          return regeneratorRuntime.awrap(client["delete"]().all());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
})();