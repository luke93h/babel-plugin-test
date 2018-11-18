"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      BinaryExpression: function BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }

        path.node.left = t.identifier("sebmck");
        path.node.right = t.identifier("dork");
      }
    }
  };
};

;