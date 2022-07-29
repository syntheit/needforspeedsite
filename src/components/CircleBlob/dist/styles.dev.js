"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlobText = exports.Blob = exports.CircleBlobContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  color: white;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 50px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 20em;\n  height: 20em;\n  user-select: none;\n  -webkit-user-drag: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2em;\n  box-sizing: border-box;\n  @media (max-width: 800px) {\n    padding-top: 30px;\n    padding-bottom: 30px;\n    margin: 8%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CircleBlobContainer = _styledComponents["default"].div(_templateObject());

exports.CircleBlobContainer = CircleBlobContainer;

var Blob = _styledComponents["default"].img(_templateObject2());

exports.Blob = Blob;

var BlobText = _styledComponents["default"].p(_templateObject3());

exports.BlobText = BlobText;