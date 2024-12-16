(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1381:
/*!**********************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/components/jyf-Parser/libs/MpHtmlParser.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
/*
 将 html 解析为适用于小程序 rich-text 的 DOM 结构
 github地址：https://github.com/jin-yufeng/Parser
 文档地址：https://jin-yufeng.github.io/Parser
 author：JinYufeng
*/
var CssHandler = __webpack_require__(/*! ./CssHandler.js */ 1382);
var config = __webpack_require__(/*! ./config.js */ 1383);
var emoji; // 需要使用 emoji 补丁包时将此行改为 const emoji = require("./emoji.js");

function isBlankChar(c) {
  return c == ' ' || c == "\xA0" || c == '\t' || c == '\r' || c == '\n' || c == '\f';
}
;
var MpHtmlParser = /*#__PURE__*/function () {
  "use strict";

  function MpHtmlParser(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, MpHtmlParser);
    this.cb = cb;
    this.CssHandler = new CssHandler(options.tagStyle);
    this.data = data;
    this.DOM = [];
    this._attrName = '';
    this._attrValue = '';
    this._attrs = {};
    this._domain = options.domain;
    this._protocol = options.domain ? options.domain.includes("://") ? this._domain.split("://")[0] : "http" : undefined;
    this._i = 0;
    this._sectionStart = 0;
    this._state = this.Text;
    this._STACK = [];
    this._tagName = '';
    this._audioNum = 0;
    this._imgNum = 0;
    this._videoNum = 0;
    this._useAnchor = options.useAnchor;
    this._whiteSpace = false;
  }
  _createClass(MpHtmlParser, [{
    key: "parse",
    value: function parse() {
      if (this.CssHandler) this.data = this.CssHandler.getStyle(this.data);
      if (emoji) this.data = emoji.parseEmoji(this.data);
      // 高亮处理
      if (config.highlight) this.data = this.data.replace(/<[pP][rR][eE]([\s\S]*?)>([\s\S]*?)<\/[pP][rR][eE][\s\S]*?>/g, function () {
        return "<pre" + arguments[1] + '>' + config.highlight(arguments[2], "<pre" + arguments[1] + '>') + "</pre>";
      });
      for (var len = this.data.length; this._i < len; this._i++) {
        this._state(this.data[this._i]);
      }
      if (this._state == this.Text) this.setText();
      while (this._STACK.length) {
        this.popNode(this._STACK.pop());
      }
      if (this.DOM.length) this.DOM[0].PoweredBy = "Parser";
      // console.log(this.DOM)
      if (this.cb) this.cb(this.DOM);else return this.DOM;
    }
  }, {
    key: "setAttr",
    value:
    // 设置属性
    function setAttr() {
      if (config.trustAttrs[this._attrName]) this._attrs[this._attrName] = this._attrValue ? this._attrValue : this._attrName == "src" ? "" : "true";
      this._attrValue = '';
      while (isBlankChar(this.data[this._i])) {
        this._i++;
      }
      if (this.checkClose()) this.setNode();else this._state = this.AttrName;
    }
  }, {
    key: "setText",
    value:
    // 设置文本节点
    function setText() {
      var text = this.getSelection();
      if (text) {
        if (!this._whiteSpace) {
          // 移除空白符
          var flag = false,
            has = false,
            pos;
          for (var i = 0; i < text.length; i++) {
            if (isBlankChar(text[i])) {
              if (!flag) {
                pos = i;
                flag = true;
              }
            } else {
              has = true;
              if (flag) {
                if (i - pos > 1) text = text.substring(0, pos) + ' ' + text.substring(i);
                i = pos;
                flag = false;
              }
            }
          }
          if (flag) text = text.substring(0, pos) + ' ';
          if (!text || !has) return;
        }
        // 检查实体

        var i = text.indexOf('&'),
          j,
          decode;
        while (i != -1 && i < text.length) {
          j = text.indexOf(';', i);
          if (j - i >= 2 && j - i <= 7) {
            var entity = text.substring(i + 1, j);
            if (!entity.includes("sp") && !entity.includes("lt") && !entity.includes("gt")) {
              decode = true;
              break;
            }
          }
          i = text.indexOf('&', i + 1);
        }
        var slibings = this._STACK.length ? this._STACK[this._STACK.length - 1].children : this.DOM;
        if (slibings.length && slibings[slibings.length - 1].type == "text") {
          slibings[slibings.length - 1].text += text;
          if (decode) slibings[slibings.length - 1].decode = true;
        } else slibings.push({
          type: "text",
          text: text,
          decode: decode
        });
      }
    }
  }, {
    key: "setNode",
    value:
    // 设置元素节点
    function setNode() {
      var slibings = this._STACK.length ? this._STACK[this._STACK.length - 1].children : this.DOM;
      var node = {
        name: this._tagName.toLowerCase(),
        attrs: this._attrs
      };
      config.LabelAttrsHandler(node, this);
      this._attrs = {};
      if (this.data[this._i] == '>') {
        if (!config.selfClosingTags[this._tagName]) {
          if (config.ignoreTags[node.name]) {
            var j = this._i;
            // 处理要被移除的标签
            while (this._i < this.data.length) {
              this._i = this.data.indexOf("</", this._i);
              if (this._i == -1) return this._i = this.data.length;
              this._i += 2;
              this._sectionStart = this._i;
              while (!isBlankChar(this.data[this._i]) && this.data[this._i] != '>' && this.data[this._i] != '/') {
                this._i++;
              }
              if (this.data.substring(this._sectionStart, this._i).toLowerCase() == node.name) {
                this._i = this.data.indexOf('>', this._i);
                if (this._i == -1) this._i = this.data.length;else this._sectionStart = this._i + 1;
                this._state = this.Text;
                // 处理svg 
                if (node.name == "svg") {
                  var src = this.data.substring(j, this._i + 1);
                  if (!node.attrs.xmlns) src = " xmlns=\"http://www.w3.org/2000/svg\"" + src;
                  this._i = j;
                  while (this.data[j] != '<') {
                    j--;
                  }
                  src = this.data.substring(j, this._i) + src;
                  this._i = this._sectionStart - 1;
                  node.name = "img";
                  node.attrs = {
                    src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
                    ignore: "true"
                  };
                  slibings.push(node);
                }
                break;
              }
            }
            return;
          } else this._STACK.push(node);
          node.children = [];
        }
      } else this._i++;
      this._sectionStart = this._i + 1;
      this._state = this.Text;
      if (!config.ignoreTags[node.name]) {
        // 检查空白符是否有效
        if (node.name == "pre" || node.attrs.style && node.attrs.style.toLowerCase().includes("white-space") && node.attrs.style.toLowerCase().includes("pre")) {
          this._whiteSpace = true;
          node.pre = true;
        }
        slibings.push(node);
      }
    }
  }, {
    key: "popNode",
    value:
    // 标签出栈处理
    function popNode(node) {
      // 替换一些标签名
      if (config.blockTags[node.name]) node.name = 'div';else if (!config.trustTags[node.name]) node.name = 'span';
      // 空白符处理
      if (node.pre) {
        this._whiteSpace = false;
        node.pre = undefined;
        for (var i = 0; i < this._STACK.length; i++) {
          if (this._STACK[i].pre) this._whiteSpace = true;
        }
      }
      // 处理表格的边框
      if (node.name == 'table') {
        var setBorder = function setBorder(elem) {
          if (elem.name == 'th' || elem.name == 'td') {
            if (node.attrs.border) elem.attrs.style = "border:" + node.attrs.border + "px solid gray;" + (elem.attrs.style || '');
            if (node.attrs.hasOwnProperty("cellpadding")) elem.attrs.style = "padding:" + node.attrs.cellpadding + "px;" + (elem.attrs.style || '');
            return;
          }
          if (elem.type == 'text') return;
          for (var i = 0; i < elem.children.length; i++) {
            setBorder(elem.children[i]);
          }
        };
        if (node.attrs.border) node.attrs.style = "border:" + node.attrs.border + "px solid gray;" + (node.attrs.style || '');
        if (node.attrs.hasOwnProperty("cellspacing")) node.attrs.style = "border-spacing:" + node.attrs.cellspacing + "px;" + (node.attrs.style || '');
        if (node.attrs.border || node.attrs.hasOwnProperty("cellpadding")) for (var i = 0; i < node.children.length; i++) {
          setBorder(node.children[i]);
        }
      }
      // 合并一些不必要的层，减小节点深度
      if (node.children.length == 1 && node.name == "div" && node.children[0].name == "div") {
        var child = node.children[0];
        node.attrs.style = node.attrs.style || '';
        child.attrs.style = child.attrs.style || '';
        if (node.attrs.style.includes("padding") && (node.attrs.style.includes("margin") || child.attrs.style.includes("margin")) && node.attrs.style.includes("display") && child.attrs.style.includes("display") && !(node.attrs.id && node.attrs.id) && !(node.attrs.class && child.attrs.class)) {
          if (child.attrs.style.includes("padding")) child.attrs.style = "box-sizing:border-box;" + child.attrs.style;
          node.attrs.style = node.attrs.style + ";" + child.attrs.style;
          node.attrs.id = (child.attrs.id || '') + (node.attrs.id || '');
          node.attrs.class = (child.attrs.class || '') + (node.attrs.class || '');
          node.children = child.children;
        }
      }
      // 多层样式处理
      if (this.CssHandler.pop) this.CssHandler.pop(node);
    }
  }, {
    key: "checkClose",
    value:
    // 工具函数
    function checkClose() {
      if (this.data[this._i] == '>' || this.data[this._i] == '/' && this.data[this._i + 1] == '>') return true;
      return false;
    }
  }, {
    key: "getSelection",
    value: function getSelection(trim) {
      var str = this._sectionStart == this._i ? '' : this.data.substring(this._sectionStart, this._i);
      while (trim && isBlankChar(this.data[++this._i])) {
        ;
      }
      if (trim) this._i--;
      this._sectionStart = this._i + 1;
      return str;
    }
  }, {
    key: "Text",
    value:
    // 状态机
    function Text(c) {
      if (c == '<') {
        var next = this.data[this._i + 1];
        if (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z') {
          this.setText();
          this._state = this.TagName;
        } else if (next == '/') {
          this.setText();
          this._i++;
          next = this.data[this._i + 1];
          if (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z') {
            this._sectionStart = this._i + 1;
            this._state = this.EndTag;
          } else this._state = this.Comment;
        } else if (next == '!') {
          this.setText();
          this._state = this.Comment;
        }
      }
    }
  }, {
    key: "Comment",
    value: function Comment() {
      if (this.data.substring(this._i + 1, this._i + 3) == "--" || this.data.substring(this._i + 1, this._i + 7) == "[CDATA[") {
        this._i = this.data.indexOf("-->", this._i + 1);
        if (this._i == -1) return this._i = this.data.length;else this._i = this._i + 2;
      } else {
        this._i = this.data.indexOf(">", this._i + 1);
        if (this._i == -1) return this._i = this.data.length;
      }
      this._sectionStart = this._i + 1;
      this._state = this.Text;
    }
  }, {
    key: "TagName",
    value: function TagName(c) {
      if (isBlankChar(c)) {
        this._tagName = this.getSelection(true);
        if (this.checkClose()) this.setNode();else this._state = this.AttrName;
      } else if (this.checkClose()) {
        this._tagName = this.getSelection();
        this.setNode();
      }
    }
  }, {
    key: "AttrName",
    value: function AttrName(c) {
      if (isBlankChar(c)) {
        this._attrName = this.getSelection(true).toLowerCase();
        if (this.data[this._i] == '=') {
          while (isBlankChar(this.data[++this._i])) {
            ;
          }
          this._sectionStart = this._i;
          this._i--;
          this._state = this.AttrValue;
        } else this.setAttr();
      } else if (c == '=') {
        this._attrName = this.getSelection().toLowerCase();
        while (isBlankChar(this.data[++this._i])) {
          ;
        }
        this._sectionStart = this._i;
        this._i--;
        this._state = this.AttrValue;
      } else if (this.checkClose()) {
        this._attrName = this.getSelection().toLowerCase();
        this.setAttr();
      }
    }
  }, {
    key: "AttrValue",
    value: function AttrValue(c) {
      if (c == '"' || c == "'") {
        this._sectionStart++;
        if ((this._i = this.data.indexOf(c, this._i + 1)) == -1) return this._i = this.data.length;
      } else for (; !isBlankChar(this.data[this._i] && this.data[this._i] != '/' && this.data[this._i] != '>'); this._i++) {
        ;
      }
      this._attrValue = this.getSelection();
      while (this._attrValue.includes("&quot;")) {
        this._attrValue = this._attrValue.replace("&quot;", '');
      }
      this.setAttr();
    }
  }, {
    key: "EndTag",
    value: function EndTag(c) {
      if (isBlankChar(c) || c == '>' || c == '/') {
        var name = this.getSelection().toLowerCase();
        var flag = false;
        for (var i = this._STACK.length - 1; i >= 0; i--) {
          if (this._STACK[i].name == name) {
            flag = true;
            break;
          }
        }
        if (flag) {
          var node;
          while (flag) {
            node = this._STACK.pop();
            if (node.name == name) flag = false;
            this.popNode(node);
          }
        } else if (name == 'p' || name == "br") {
          var slibings = this._STACK.length ? this._STACK[this._STACK.length - 1].children : this.DOM;
          var node = {
            name: name
          };
          slibings.push(node);
        }
        this._i = this.data.indexOf('>', this._i);
        if (this._i == -1) this._i = this.data.length;else this._state = this.Text;
      }
    }
  }]);
  return MpHtmlParser;
}();
;
module.exports = {
  parseHtml: function parseHtml(data, options) {
    return new Promise(function (resolve) {
      return new MpHtmlParser(data, options, resolve).parse();
    });
  },
  parseHtmlSync: function parseHtmlSync(data, options) {
    return new MpHtmlParser(data, options).parse();
  }
};

/***/ }),

/***/ 1382:
/*!********************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/components/jyf-Parser/libs/CssHandler.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
/*
 解析和匹配 Css 的选择器
 github地址：https://github.com/jin-yufeng/Parser
 文档地址：https://jin-yufeng.github.io/Parser
 author：JinYufeng
*/
var userAgentStyles = __webpack_require__(/*! ./config.js */ 1383).userAgentStyles;
var CssHandler = /*#__PURE__*/function () {
  "use strict";

  function CssHandler() {
    var tagStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, CssHandler);
    this.styles = Object.assign({}, tagStyle);
  }
  _createClass(CssHandler, [{
    key: "getStyle",
    value: function getStyle(data) {
      var style = '';
      data = data.replace(/<[sS][tT][yY][lL][eE][\s\S]*?>([\s\S]*?)<\/[sS][tT][yY][lL][eE][\s\S]*?>/g, function () {
        style += arguments[1];
        return '';
      });
      this.styles = new CssParser(style, this.styles).parse();
      return data;
    }
  }, {
    key: "parseCss",
    value: function parseCss(css) {
      return new CssParser(css, {}, true).parse();
    }
  }, {
    key: "match",
    value: function match(name, attrs) {
      var tmp,
        matched = (tmp = this.styles[name]) ? tmp + ';' : '';
      if (attrs.class) {
        var classes = attrs.class.split(' ');
        for (var i = 0; i < classes.length; i++) {
          if (tmp = this.styles['.' + classes[i]]) matched += tmp + ';';
        }
      }
      if (tmp = this.styles['#' + attrs.id]) matched += tmp;
      return matched;
    }
  }]);
  return CssHandler;
}();
module.exports = CssHandler;
function isBlankChar(c) {
  return c == ' ' || c == "\xA0" || c == '\t' || c == '\r' || c == '\n' || c == '\f';
}
;
var CssParser = /*#__PURE__*/function () {
  "use strict";

  function CssParser(data, tagStyle, api) {
    _classCallCheck(this, CssParser);
    this.data = data;
    this.res = tagStyle;
    if (!api) for (var item in userAgentStyles) {
      if (tagStyle[item]) tagStyle[item] = userAgentStyles[item] + ';' + tagStyle[item];else tagStyle[item] = userAgentStyles[item];
    }
    this._floor = 0;
    this._i = 0;
    this._list = [];
    this._comma = false;
    this._sectionStart = 0;
    this._state = this.Space;
  }
  _createClass(CssParser, [{
    key: "parse",
    value: function parse() {
      for (; this._i < this.data.length; this._i++) {
        this._state(this.data[this._i]);
      }
      return this.res;
    }
  }, {
    key: "Space",
    value:
    // 状态机
    function Space(c) {
      if (c == '.' || c == '#' || c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
        this._sectionStart = this._i;
        this._state = this.StyleName;
      } else if (c == '/' && this.data[this._i + 1] == '*') this.Comment();else if (!isBlankChar(c) && c != ';') this._state = this.Ignore;
    }
  }, {
    key: "Comment",
    value: function Comment() {
      this._i = this.data.indexOf("*/", this._i);
      if (this._i == -1) this._i = this.data.length;
      this._i++;
      this._state = this.Space;
    }
  }, {
    key: "Ignore",
    value: function Ignore(c) {
      if (c == '{') this._floor++;else if (c == '}' && --this._floor <= 0) {
        this._list = [];
        this._state = this.Space;
      }
    }
  }, {
    key: "StyleName",
    value: function StyleName(c) {
      if (isBlankChar(c)) {
        this._list.push(this.data.substring(this._sectionStart, this._i));
        this._state = this.NameSpace;
      } else if (c == '{') {
        this._list.push(this.data.substring(this._sectionStart, this._i));
        this._floor = 1;
        this._sectionStart = this._i + 1;
        this.Content();
      } else if (c == ',') {
        this._list.push(this.data.substring(this._sectionStart, this._i));
        this._sectionStart = this._i + 1;
        this._comma = true;
      } else if (!(c >= 'a' && c <= 'z') && !(c >= 'A' && c <= 'Z') && !(c >= '0' && c <= '9') && c != '.' && c != '#' && c != '-' && c != '_') this._state = this.Ignore;
    }
  }, {
    key: "NameSpace",
    value: function NameSpace(c) {
      if (c == '{') {
        this._floor = 1;
        this._sectionStart = this._i + 1;
        this.Content();
      } else if (c == ',') {
        this._comma = true;
        this._sectionStart = this._i + 1;
        this._state = this.StyleName;
      } else if (!isBlankChar(c)) {
        if (this._comma) {
          this._state = this.StyleName;
          this._sectionStart = this._i;
          this._i--;
          this._comma = false;
        } else this._state = this.Ignore;
      }
    }
  }, {
    key: "Content",
    value: function Content() {
      this._i = this.data.indexOf('}', this._i);
      if (this._i == -1) this._i = this.data.length;
      // 去除空白符
      var flag = false,
        pos,
        content = this.data.substring(this._sectionStart, this._i);
      for (var i = 0; i < content.length; i++) {
        if (isBlankChar(content[i])) {
          if (!flag) {
            pos = i;
            flag = true;
          }
        } else {
          if (flag) {
            if (pos == 0) content = content.substring(i);else if (i - pos > 1) content = content.substring(0, pos) + (content[pos - 1] == ';' ? (pos--, '') : ' ') + content.substring(i);
            i = pos;
            flag = false;
          }
        }
      }
      if (flag) content = content.substring(0, pos);
      for (var i = 0; i < this._list.length; i++) {
        this.res[this._list[i]] = (this.res[this._list[i]] || '') + content;
      }
      this._list = [];
      this._state = this.Space;
    }
  }]);
  return CssParser;
}();

/***/ }),

/***/ 1383:
/*!****************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/components/jyf-Parser/libs/config.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/* 配置文件 */
function makeMap(str) {
  var map = Object.create(null),
    list = str.split(',');
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      map[item] = true;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return map;
}
// 信任的属性列表，不在列表中的属性将被移除 
var trustAttrs = makeMap("align,alt,app-id,appId," + "author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,muted,name,path,poster,rowspan,size,span,src,start,style,type,lbType,lbtype," + "unit-id,unitId," + "width,xmlns");
// 信任的标签，将保持标签名不变 
var trustTags = makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,u,ul,video,iframe");
// 块级标签，将被转为 div
var blockTags = makeMap("address,article,aside,body,center,cite,footer,header,html,nav,pre,section");
// 被移除的标签（其中 svg 系列标签会被转为图片） 
var ignoreTags = makeMap("area,base,basefont,canvas,circle,command,ellipse,embed,frame,head,input,isindex,keygen,line,link,map,meta,param,path,polygon,rect,script,source,svg,textarea,track,use,wbr,");
// 只能用 rich-text 显示的标签（其中图片不能预览、不能显示视频、音频等） 
var richOnlyTags = makeMap("a,ad,audio,colgroup,fieldset,legend,li,ol,sub,sup,table,tbody,td,tfoot,th,thead,tr,ul,video,iframe,");
// 自闭合标签
var selfClosingTags = makeMap("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr,");
// 默认的标签样式
var userAgentStyles = {
  a: "color:#366092;word-break:break-all;padding:1.5px 0 1.5px 0",
  address: "font-style:italic",
  blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
  center: "text-align:center",
  cite: "font-style:italic",
  code: "padding:0 1px 0 1px;margin-left:2px;margin-right:2px;background-color:#f8f8f8;border-radius:3px",
  dd: "margin-left:40px",
  img: "max-width:100%",
  mark: "background-color:yellow",
  pre: "font-family:monospace;white-space:pre;overflow:scroll",
  s: "text-decoration:line-through",
  u: "text-decoration:underline"
};
var SDKVersion = uni.getSystemInfoSync().SDKVersion;
function versionHigherThan() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var v1 = SDKVersion.split('.'),
    v2 = version.split('.');
  while (v1.length != v2.length) {
    v1.length < v2.length ? v1.push('0') : v2.push('0');
  }
  for (var i = 0; i < v1.length; i++) {
    if (v1[i] == v2[i]) continue;
    if (parseInt(v1[i]) > parseInt(v2[i])) return true;
    return false;
  }
  return true;
}
;

// 版本兼容
if (versionHigherThan("2.7.1")) {
  trustTags.bdi = true;
  trustTags.bdo = true;
  trustTags.caption = true;
  trustTags.rt = true;
  trustTags.ruby = true;
  ignoreTags.rp = true;
  trustTags.big = true;
  trustTags.small = true;
  trustTags.pre = true;
  trustTags.iframe = true;
  richOnlyTags.bdi = true;
  richOnlyTags.bdo = true;
  richOnlyTags.caption = true;
  richOnlyTags.rt = true;
  richOnlyTags.ruby = true;
  richOnlyTags.pre = true;
  blockTags.pre = undefined;
} else {
  blockTags.caption = true;
  userAgentStyles.big = "display:inline;font-size:1.2em";
  userAgentStyles.small = "display:inline;font-size:0.8em";
}
function bubbling(Parser) {
  for (var i = Parser._STACK.length - 1; i >= 0; i--) {
    if (!richOnlyTags[Parser._STACK[i].name]) Parser._STACK[i].c = 1;else return false;
  }
  return true;
}
module.exports = {
  // 高亮处理函数
  highlight: null,
  // 处理标签的属性，需要通过组件递归方式显示的标签需要调用 bubbling(Parser)
  LabelAttrsHandler: function LabelAttrsHandler(node, Parser) {
    var default_style = "max-width: 100% !important;display:block;";
    node.attrs.style = Parser.CssHandler.match(node.name, node.attrs, node) + (node.attrs.style || '');
    switch (node.name) {
      case "ul":
      case "ol":
      case "li":
      case "dd":
      case "dl":
      case "dt":
      case "div":
      case "span":
      case "em":
      case 'p':
        if (node.name === 'span') {
          default_style = 'white-space:normal;';
        }
        if (node.name === 'p' && (!node.attrs.style || !node.attrs.style.includes('margin-top:'))) {
          default_style += 'margin-top:10px;';
        }
        if (node.attrs.style) {
          node.attrs.style = node.attrs.style.includes('width:') ? default_style : node.attrs.style + ";".concat(default_style);
        }
        if (node.attrs.align) {
          node.attrs.style = "text-align:" + node.attrs.align + ';' + node.attrs.style;
          node.attrs.align = undefined;
        }
        break;
      case "img":
        if (node.attrs.height) {
          node.attrs.height = 'auto';
        }
        if (node.attrs.style) {
          node.attrs.style = node.attrs.style.includes('height:') ? default_style : node.attrs.style + ";".concat(default_style);
        }
        if (node.attrs["data-src"]) {
          node.attrs.src = node.attrs.src || node.attrs["data-src"];
          node.attrs["data-src"] = undefined;
        }
        if (node.attrs.src) {
          if (!node.attrs.ignore) {
            if (bubbling(Parser)) node.attrs.i = (Parser._imgNum++).toString();else node.attrs.ignore = "true";
          }
          if (Parser._domain && node.attrs.src[0] == '/') {
            if (node.attrs.src[1] == '/') node.attrs.src = Parser._protocol + ":" + node.attrs.src;else node.attrs.src = Parser._domain + node.attrs.src;
          }
        }
        break;
      case 'a':
      case "ad":
        bubbling(Parser);
        break;
      case "font":
        if (node.attrs.color) {
          node.attrs.style = "color:" + node.attrs.color + ';' + node.attrs.style;
          node.attrs.color = undefined;
        }
        if (node.attrs.face) {
          node.attrs.style = "font-family:" + node.attrs.face + ';' + node.attrs.style;
          node.attrs.face = undefined;
        }
        if (node.attrs.size) {
          var size = parseInt(node.attrs.size);
          if (size < 1) size = 1;else if (size > 7) size = 7;
          var map = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
          node.attrs.style = "font-size:" + map[size - 1] + ';' + node.attrs.style;
          node.attrs.size = undefined;
        }
        break;
      case 'iframe':
      case "video":
      case "audio":
        node.attrs.loop = node.attrs.hasOwnProperty('loop') || false;
        node.attrs.controls = node.attrs.hasOwnProperty('controls') || true;
        node.attrs.autoplay = node.attrs.hasOwnProperty('autoplay') || false;
        if (node.attrs.id) Parser['_' + node.name + "Num"]++;else node.attrs.id = node.name + ++Parser['_' + node.name + "Num"];
        if (node.name == "video") {
          node.attrs.style = node.attrs.style || '';
          if (node.attrs.width) {
            node.attrs.style = "width:" + parseFloat(node.attrs.width) + (node.attrs.height.includes('%') ? '%' : "px") + ';' + node.attrs.style;
            node.attrs.width = undefined;
          }
          if (node.attrs.height) {
            node.attrs.style = "height:" + parseFloat(node.attrs.height) + (node.attrs.height.includes('%') ? '%' : "px") + ';' + node.attrs.style;
            node.attrs.height = undefined;
          }
          if (Parser._videoNum > 3) node.lazyLoad = true;
        }
        // 新增iframe【create_by_xx】 
        if (node.name == 'iframe') {
          // console.log(node.attrs, "====iframe attrs");
        }
        node.attrs.source = [];
        if (node.attrs.src) node.attrs.source.push(node.attrs.src);
        if (!node.attrs.controls && !node.attrs.autoplay) console.warn("存在没有controls属性的 " + node.name + " 标签，可能导致无法播放", node);
        bubbling(Parser);
        break;
      case "source":
        var parent = Parser._STACK[Parser._STACK.length - 1];
        if (parent && (parent.name == "video" || parent.name == "audio")) {
          parent.attrs.source.push(node.attrs.src);
          if (!parent.attrs.src) parent.attrs.src = node.attrs.src;
        }
        break;
    }
    if (Parser._domain && node.attrs.style.includes("url")) node.attrs.style = node.attrs.style.replace(/url\s*\(['"\s]*(\S*?)['"\s]*\)/, function () {
      var src = arguments[1];
      if (src && src[0] == '/') {
        if (src[1] == '/') return "url(" + Parser._protocol + ':' + src + ')';else return "url(" + Parser._domain + src + ')';
      } else return arguments[0];
    });
    if (!node.attrs.style) node.attrs.style = undefined;
    if (Parser._useAnchor && node.attrs.id) bubbling(Parser);
  },
  trustAttrs: trustAttrs,
  trustTags: trustTags,
  blockTags: blockTags,
  ignoreTags: ignoreTags,
  selfClosingTags: selfClosingTags,
  userAgentStyles: userAgentStyles,
  versionHigherThan: versionHigherThan,
  makeMap: makeMap
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1391:
/*!*************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/uni_modules/v-sign/utils/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSize = formatSize;
exports.isNumber = isNumber;
/**
 * 判断是否未数值
 * @param {Object} val
 */
function isNumber(val) {
  return !isNaN(Number(val));
}

/**
 * 处理大小单位
 * @param {Object} val
 */
function formatSize(val) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  return isNumber(val) ? "".concat(val).concat(unit) : val;
}

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1420:
/*!**********************************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/uni_modules/lime-painter/components/common/relation.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.children = children;
exports.parent = parent;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var styles = function styles() {
  var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return v.split(';').filter(function (v) {
    return v && !/^[\n\s]+$/.test(v);
  }).map(function (v) {
    var key = v.slice(0, v.indexOf(':'));
    var value = v.slice(v.indexOf(':') + 1);
    return (0, _defineProperty2.default)({}, key.replace(/-([a-z])/g, function () {
      return arguments[1].toUpperCase();
    }).replace(/\s+/g, ''), value.replace(/^\s+/, '').replace(/\s+$/, '') || '');
  });
};
function parent(parent) {
  return {
    provide: function provide() {
      return (0, _defineProperty2.default)({}, parent, this);
    },
    data: function data() {
      return {
        el: {
          css: {},
          views: []
        }
      };
    },
    watch: {
      css: {
        handler: function handler(v) {
          if (this.canvasId) {
            this.el.css = ((0, _typeof2.default)(v) == 'object' ? v : v && Object.assign.apply(Object, (0, _toConsumableArray2.default)(styles(v)))) || {};
            this.canvasWidth = this.el.css && this.el.css.width || this.canvasWidth;
            this.canvasHeight = this.el.css && this.el.css.height || this.canvasHeight;
          }
        },
        immediate: true
      }
    }
  };
}
function children(parent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var indexKey = options.indexKey || 'index';
  return {
    inject: (0, _defineProperty2.default)({}, parent, {
      default: null
    }),
    watch: {
      el: {
        handler: function handler(v, o) {
          if (JSON.stringify(v) != JSON.stringify(o)) this.bindRelation();
        },
        deep: true,
        immediate: true
      },
      src: {
        handler: function handler(v, o) {
          if (v != o) this.bindRelation();
        },
        immediate: true
      },
      text: {
        handler: function handler(v, o) {
          if (v != o) this.bindRelation();
        },
        immediate: true
      },
      css: {
        handler: function handler(v, o) {
          if (v != o) this.el.css = ((0, _typeof2.default)(v) == 'object' ? v : v && Object.assign.apply(Object, (0, _toConsumableArray2.default)(styles(v)))) || {};
        },
        immediate: true
      },
      replace: {
        handler: function handler(v, o) {
          if (JSON.stringify(v) != JSON.stringify(o)) this.bindRelation();
        },
        deep: true,
        immediate: true
      }
    },
    created: function created() {
      var _this = this;
      if (!this._uid) {
        this._uid = this._.uid;
      }
      Object.defineProperty(this, 'parent', {
        get: function get() {
          return _this[parent] || [];
        }
      });
      Object.defineProperty(this, 'index', {
        get: function get() {
          _this.bindRelation();
          var _this$parent = _this.parent;
          _this$parent = _this$parent === void 0 ? {} : _this$parent;
          var _this$parent$el = _this$parent.el;
          _this$parent$el = _this$parent$el === void 0 ? {} : _this$parent$el;
          var _this$parent$el$views = _this$parent$el.views,
            views = _this$parent$el$views === void 0 ? [] : _this$parent$el$views;
          return views.indexOf(_this.el);
        }
      });
      this.el.type = this.type;
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      this.removeEl();
    },
    methods: {
      removeEl: function removeEl() {
        var _this2 = this;
        if (this.parent) {
          this.parent.el.views = this.parent.el.views.filter(function (item) {
            return item._uid !== _this2._uid;
          });
        }
      },
      bindRelation: function bindRelation() {
        var _this3 = this;
        if (!this.el._uid) {
          this.el._uid = this._uid;
        }
        if (['text', 'qrcode'].includes(this.type)) {
          this.el.text = this.$slots && this.$slots.default && this.$slots.default[0].text || "".concat(this.text || '').replace(/\\n/g, '\n');
        }
        if (this.type == 'image') {
          this.el.src = this.src;
        }
        if (!this.parent) {
          return;
        }
        var views = this.parent.el.views || [];
        if (views.indexOf(this.el) !== -1) {
          this.parent.el.views = views.map(function (v) {
            return v._uid == _this3._uid ? _this3.el : v;
          });
        } else {
          this.parent.el.views = [].concat((0, _toConsumableArray2.default)(views), [this.el]);
        }
      }
    },
    mounted: function mounted() {
      // this.bindRelation()
    }
  };
}

/***/ }),

/***/ 1421:
/*!**********************************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/uni_modules/lime-painter/components/l-painter/props.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    board: Object,
    pathType: String,
    // 'base64'、'url'
    fileType: {
      type: String,
      default: 'png'
    },
    quality: {
      type: Number,
      default: 1
    },
    css: [String, Object],
    // styles: [String, Object],
    width: [Number, String],
    height: [Number, String],
    pixelRatio: Number,
    customStyle: String,
    isCanvasToTempFilePath: Boolean,
    // useCanvasToTempFilePath: Boolean,
    sleep: {
      type: Number,
      default: 1000 / 30
    },
    beforeDelay: {
      type: Number,
      default: 100
    },
    afterDelay: {
      type: Number,
      default: 100
    },
    type: {
      type: String,
      default: '2d'
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 1422:
/*!**********************************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/uni_modules/lime-painter/components/l-painter/utils.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToPath = base64ToPath;
exports.compareVersion = compareVersion;
exports.downloadFile = downloadFile;
exports.getImageInfo = getImageInfo;
exports.isBase64 = void 0;
exports.isNumber = isNumber;
exports.networkReg = void 0;
exports.pathToBase64 = pathToBase64;
exports.prefix = void 0;
exports.sleep = sleep;
exports.toPx = toPx;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var networkReg = /^(http|\/\/)/;
exports.networkReg = networkReg;
var isBase64 = function isBase64(path) {
  return /^data:image\/(\w+);base64/.test(path);
};
exports.isBase64 = isBase64;
function sleep(delay) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, delay);
  });
}
var isDev = ['devtools'].includes(uni.getSystemInfoSync().platform);
// 缓存图片
var cache = {};
function isNumber(value) {
  return /^-?\d+(\.\d+)?$/.test(value);
}
function toPx(value, baseSize) {
  var isDecimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 如果是数字
  if (typeof value === 'number') {
    return value;
  }
  // 如果是字符串数字
  if (isNumber(value)) {
    return value * 1;
  }
  // 如果有单位
  if (typeof value === 'string') {
    var reg = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g;
    var results = reg.exec(value);
    if (!value || !results) {
      return 0;
    }
    var unit = results[3];
    value = parseFloat(value);
    var res = 0;
    if (unit === 'rpx') {
      res = uni.upx2px(value);
    } else if (unit === 'px') {
      res = value * 1;
    } else if (unit === '%') {
      res = value * toPx(baseSize) / 100;
    } else if (unit === 'em') {
      res = value * toPx(baseSize || 14);
    }
    return isDecimal ? res.toFixed(2) * 1 : Math.round(res);
  }
  return 0;
}

// 计算版本
function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
var prefix = function prefix() {
  return wx;
};
exports.prefix = prefix;
var base64ToArrayBuffer = function base64ToArrayBuffer(data) {
  return uni.base64ToArrayBuffer(data);
};

/**
 * base64转路径
 * @param {Object} base64
 */
function base64ToPath(base64) {
  var _ref = /^data:image\/(\w+);base64,/.exec(base64) || [],
    _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    format = _ref2[1];
  return new Promise(function (resolve, reject) {
    var fs = uni.getFileSystemManager();
    //自定义文件名
    if (!format) {
      reject(new Error('ERROR_BASE64SRC_PARSE'));
    }
    var time = new Date().getTime();
    var pre = prefix();
    var filePath = "".concat(pre.env.USER_DATA_PATH, "/").concat(time, ".").concat(format);
    //let buffer = base64ToArrayBuffer(bodyData)
    fs.writeFile({
      filePath: filePath,
      data: base64.split(',')[1],
      //base64.replace(/^data:\S+\/\S+;base64,/, ''),
      encoding: 'base64',
      // data: buffer,
      // encoding: 'binary',
      success: function success() {
        resolve(filePath);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}

/**
 * 路径转base64
 * @param {Object} string
 */
function pathToBase64(path) {
  if (/^data:/.test(path)) return path;
  return new Promise(function (resolve, reject) {
    if (uni.canIUse('getFileSystemManager')) {
      uni.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
    }
  });
}
function getImageInfo(path, useCORS) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {
      var src;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              src = path;
              if (!(cache[path] && cache[path].errMsg)) {
                _context.next = 5;
                break;
              }
              resolve(cache[path]);
              _context.next = 16;
              break;
            case 5:
              _context.prev = 5;
              if (!isBase64(path)) {
                _context.next = 10;
                break;
              }
              _context.next = 9;
              return base64ToPath(path);
            case 9:
              src = _context.sent;
            case 10:
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              reject(_objectSpread(_objectSpread({}, _context.t0), {}, {
                src: src
              }));
            case 15:
              uni.getImageInfo({
                src: src,
                success: function success(image) {
                  var localReg = /^\.|^\/(?=[^\/])/;
                  image.path = localReg.test(src) ? "/".concat(image.path) : image.path;
                  if (isDev) {
                    resolve(image);
                  } else {
                    cache[path] = image;
                    resolve(cache[path]);
                  }
                },
                fail: function fail(err) {
                  reject({
                    err: err,
                    path: path
                  });
                }
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12]]);
    }));
    return function (_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }());
}
function downloadFile(url) {
  if (!url) return Promise.reject({
    err: 'no url'
  });
  return new Promise(function (resolve, reject) {
    if (cache[url]) {
      return reject();
    }
    cache[url] = 1;
    uni.downloadFile({
      url: url,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 1423:
/*!************************************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/uni_modules/lime-painter/components/l-painter/painter.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Painter = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _t = function t() {
  return _t = Object.assign || function (t) {
    for (var e, i = 1, n = arguments.length; i < n; i++) {
      for (var r in e = arguments[i]) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
    }
    return t;
  }, _t.apply(this, arguments);
};
function e(t, e, i, n) {
  return new (i || (i = Promise))(function (r, o) {
    function s(t) {
      try {
        h(n.next(t));
      } catch (t) {
        o(t);
      }
    }
    function a(t) {
      try {
        h(n.throw(t));
      } catch (t) {
        o(t);
      }
    }
    function h(t) {
      var e;
      t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function (t) {
        t(e);
      })).then(s, a);
    }
    h((n = n.apply(t, e || [])).next());
  });
}
function i(t, e) {
  var i,
    n,
    r,
    o,
    s = {
      label: 0,
      sent: function sent() {
        if (1 & r[0]) throw r[1];
        return r[1];
      },
      trys: [],
      ops: []
    };
  return o = {
    next: a(0),
    throw: a(1),
    return: a(2)
  }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
    return this;
  }), o;
  function a(o) {
    return function (a) {
      return function (o) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; s;) {
          try {
            if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
            switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
              case 0:
              case 1:
                r = o;
                break;
              case 4:
                return s.label++, {
                  value: o[1],
                  done: !1
                };
              case 5:
                s.label++, n = o[1], o = [0];
                continue;
              case 7:
                o = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  s = 0;
                  continue;
                }
                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                  s.label = o[1];
                  break;
                }
                if (6 === o[0] && s.label < r[1]) {
                  s.label = r[1], r = o;
                  break;
                }
                if (r && s.label < r[2]) {
                  s.label = r[2], s.ops.push(o);
                  break;
                }
                r[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            o = e.call(t, s);
          } catch (t) {
            o = [6, t], n = 0;
          } finally {
            i = r = 0;
          }
        }
        if (5 & o[0]) throw o[1];
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, a]);
    };
  }
}
var n,
  r,
  o = {
    MP_WEIXIN: "mp-weixin",
    MP_QQ: "mp-qq",
    MP_ALIPAY: "mp-alipay",
    MP_BAIDU: "mp-baidu",
    MP_TOUTIAO: "mp-toutiao",
    MP_DINGDING: "mp-dingding",
    H5: "h5",
    WEB: "web",
    PLUS: "plus"
  },
  s = ["contentSize", "clientSize", "borderSize", "offsetSize"],
  a = "row",
  h = "column",
  d = "top",
  c = "middle",
  l = "bottom",
  f = "left",
  u = "center",
  p = "right",
  g = "view",
  v = "text",
  y = "image",
  b = "qrcode",
  x = "block",
  m = "inline-block",
  w = "none",
  S = "flex",
  z = "absolute",
  B = "fixed",
  M = {
    display: x,
    color: "#000000",
    lineHeight: "1.4em",
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "sans-serif",
    lineCap: "butt",
    flexDirection: a,
    flexWrap: "nowrap",
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "static",
    transformOrigin: "center center"
  },
  I = {
    upx2px: function upx2px(t) {
      return window.innerWidth / 750 * t;
    },
    getSystemInfoSync: function getSystemInfoSync() {
      return {
        screenWidth: window.innerWidth
      };
    },
    getImageInfo: function getImageInfo(t) {
      var e = t.src,
        i = t.success,
        n = t.fail,
        r = new Image();
      r.onload = function () {
        i({
          width: this.naturalWidth,
          height: this.naturalHeight,
          path: this.src,
          src: e
        });
      }, r.onerror = n, r.src = e;
    }
  },
  k = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) ? "undefined" == typeof uni || "undefined" != typeof uni && !uni.addInterceptor ? o.WEB : o.H5 : "object" == (typeof swan === "undefined" ? "undefined" : (0, _typeof2.default)(swan)) ? o.MP_BAIDU : "object" == (typeof tt === "undefined" ? "undefined" : (0, _typeof2.default)(tt)) ? o.MP_TOUTIAO : "object" == (typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) ? o.PLUS : "object" == (typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) ? o.MP_WEIXIN : void 0,
  P = k == o.MP_WEIXIN ? wx : "undefined" != typeof uni ? uni.getImageInfo ? {
    upx2px: function upx2px(t) {
      return uni.upx2px(t);
    },
    getSystemInfoSync: function getSystemInfoSync() {
      return uni.getSystemInfoSync();
    },
    getImageInfo: function getImageInfo(t) {
      return uni.getImageInfo(t);
    },
    downloadFile: function downloadFile(t) {
      return uni.downloadFile(t);
    }
  } : Object.assign(uni, I) : "undefined" != typeof window ? I : uni;
if (!P.upx2px) {
  var W = (null !== (r = P.getSystemInfoSync && (null === (n = uni.getSystemInfoSync()) || void 0 === n ? void 0 : n.screenWidth)) && void 0 !== r ? r : 375) / 750;
  P.upx2px = function (t) {
    return W * t;
  };
}
function R(t) {
  return /^-?\d+(\.\d+)?$/.test(t);
}
function O(t, e, i) {
  if ("number" == typeof t) return t;
  if (R(t)) return 1 * t;
  if ("string" == typeof t) {
    var n = /^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g.exec(t);
    if (!t || !n) return 0;
    var r = n[3];
    t = parseFloat(t);
    var o = 0;
    return "rpx" === r ? o = P.upx2px(t) : "px" === r ? o = 1 * t : "%" === r && e ? o = t * O(e) / 100 : "em" === r && e && (o = t * O(e || 14)), 1 * o.toFixed(2);
  }
  return 0;
}
function L(t) {
  return /%$/.test(t);
}
var T = function T(t) {
    return !(!t || !t.startsWith("linear") && !t.startsWith("radial"));
  },
  A = function A(t, e, i, n, r, o) {
    t.startsWith("linear") ? function (t, e, i, n, r, o) {
      for (var s = function (t, e, i, n, r) {
          void 0 === n && (n = 0);
          void 0 === r && (r = 0);
          var o = t.match(/([-]?\d{1,3})deg/),
            s = o && o[1] ? parseFloat(o[1]) : 0;
          s >= 360 && (s -= 360);
          s < 0 && (s += 360);
          if (0 === (s = Math.round(s))) return {
            x0: Math.round(e / 2) + n,
            y0: i + r,
            x1: Math.round(e / 2) + n,
            y1: r
          };
          if (180 === s) return {
            x0: Math.round(e / 2) + n,
            y0: r,
            x1: Math.round(e / 2) + n,
            y1: i + r
          };
          if (90 === s) return {
            x0: n,
            y0: Math.round(i / 2) + r,
            x1: e + n,
            y1: Math.round(i / 2) + r
          };
          if (270 === s) return {
            x0: e + n,
            y0: Math.round(i / 2) + r,
            x1: n,
            y1: Math.round(i / 2) + r
          };
          var a = Math.round(180 * Math.asin(e / Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2))) / Math.PI);
          if (s === a) return {
            x0: n,
            y0: i + r,
            x1: e + n,
            y1: r
          };
          if (s === 180 - a) return {
            x0: n,
            y0: r,
            x1: e + n,
            y1: i + r
          };
          if (s === 180 + a) return {
            x0: e + n,
            y0: r,
            x1: n,
            y1: i + r
          };
          if (s === 360 - a) return {
            x0: e + n,
            y0: i + r,
            x1: n,
            y1: r
          };
          var h = 0,
            d = 0,
            c = 0,
            l = 0;
          if (s < a || s > 180 - a && s < 180 || s > 180 && s < 180 + a || s > 360 - a) {
            var f = s * Math.PI / 180,
              u = s < a || s > 360 - a ? i / 2 : -i / 2,
              p = Math.tan(f) * u,
              g = s < a || s > 180 - a && s < 180 ? e / 2 - p : -e / 2 - p;
            h = -(c = p + (v = Math.pow(Math.sin(f), 2) * g)), d = -(l = u + v / Math.tan(f));
          }
          if (s > a && s < 90 || s > 90 && s < 90 + a || s > 180 + a && s < 270 || s > 270 && s < 360 - a) {
            var v;
            f = (90 - s) * Math.PI / 180, p = s > a && s < 90 || s > 90 && s < 90 + a ? e / 2 : -e / 2, u = Math.tan(f) * p, g = s > a && s < 90 || s > 270 && s < 360 - a ? i / 2 - u : -i / 2 - u;
            h = -(c = p + (v = Math.pow(Math.sin(f), 2) * g) / Math.tan(f)), d = -(l = u + v);
          }
          return h = Math.round(h + e / 2) + n, d = Math.round(i / 2 - d) + r, c = Math.round(c + e / 2) + n, l = Math.round(i / 2 - l) + r, {
            x0: h,
            y0: d,
            x1: c,
            y1: l
          };
        }(r, t, e, i, n), a = s.x0, h = s.y0, d = s.x1, c = s.y1, l = o.createLinearGradient(a, h, d, c), f = r.match(/linear-gradient\((.+)\)/)[1], u = F(f.substring(f.indexOf(",") + 1)), p = 0; p < u.colors.length; p++) {
        l.addColorStop(u.percents[p], u.colors[p]);
      }
      o.setFillStyle(l);
    }(e, i, n, r, t, o) : t.startsWith("radial") && function (t, e, i, n, r, o) {
      for (var s = F(r.match(/radial-gradient\((.+)\)/)[1]), a = Math.round(t / 2) + i, h = Math.round(e / 2) + n, d = o.createRadialGradient(a, h, 0, a, h, Math.max(t, e) / 2), c = 0; c < s.colors.length; c++) {
        d.addColorStop(s.percents[c], s.colors[c]);
      }
      o.setFillStyle(d);
    }(e, i, n, r, t, o);
  };
function F(t) {
  for (var e = [], i = [], n = 0, r = t.substring(0, t.length - 1).split("%,"); n < r.length; n++) {
    var o = r[n];
    e.push(o.substring(0, o.lastIndexOf(" ")).trim()), i.push(o.substring(o.lastIndexOf(" "), o.length) / 100);
  }
  return {
    colors: e,
    percents: i
  };
}
function j(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i, t;
}
function C() {
  return C = Object.assign ? Object.assign.bind() : function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i) {
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      }
    }
    return t;
  }, C.apply(this, arguments);
}
function E(t, e) {
  return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, E(t, e);
}
function H(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, n = new Array(e); i < e; i++) {
    n[i] = t[i];
  }
  return n;
}
function U(t, e) {
  var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
  if (i) return (i = i.call(t)).next.bind(i);
  if (Array.isArray(t) || (i = function (t, e) {
    if (t) {
      if ("string" == typeof t) return H(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? H(t, e) : void 0;
    }
  }(t)) || e && t && "number" == typeof t.length) {
    i && (t = i);
    var n = 0;
    return function () {
      return n >= t.length ? {
        done: !0
      } : {
        done: !1,
        value: t[n++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Y(t) {
  return "number" == typeof t;
}
function $(t) {
  return "auto" === t || null === t;
}
function D(t) {
  return /%$/.test(t);
}
var X,
  _ = 0,
  N = function () {
    function t() {
      j(this, "elements", []), j(this, "afterElements", []), j(this, "beforeElements", []), j(this, "ids", []), j(this, "width", 0), j(this, "height", 0), j(this, "top", 0), j(this, "left", 0), j(this, "pre", null), j(this, "offsetX", 0), j(this, "offsetY", 0), _++, this.id = _;
    }
    var e = t.prototype;
    return e.fixedBind = function (t, e) {
      void 0 === e && (e = 0), this.container = e ? t.parent : t.root, this.container.fixedLine = this, this.fixedAdd(t);
    }, e.fixedAdd = function (t) {
      this.elements.push(t);
      var e = t.computedStyle.zIndex;
      (void 0 === e ? 0 : e) >= 0 ? this.afterElements.push(t) : this.beforeElements.push(t), this.refreshLayout();
    }, e.bind = function (t) {
      this.container = t.parent, this.container.line = null, this.container.lines ? (this.container.lines.push(this), this.pre = this.getPreLine(), this.top = this.pre.top + this.pre.height, this.left = this.container.contentSize.left) : (this.top = this.container.contentSize.top, this.left = this.container.contentSize.left, this.container.lines = [this]), this.isInline = t.isInline(), this.container.line = this, this.outerWidth = t.parent && t.parent.contentSize.width ? t.parent.contentSize.width : 1 / 0, this.add(t);
    }, e.getPreLine = function () {
      return this.container.lines[this.container.lines.length - 2];
    }, e.canIEnter = function (t) {
      return !((100 * t.offsetSize.width + 100 * this.width) / 100 > this.outerWidth) || (this.closeLine(), !1);
    }, e.closeLine = function () {
      delete this.container.line;
    }, e.add = function (t) {
      this.ids.push(t.id), this.elements.push(t), this.refreshWidthHeight(t);
    }, e.refreshWidthHeight = function (t) {
      t.offsetSize.height > this.height && (this.height = t.offsetSize.height), this.width += t.offsetSize.width || 0, (this.container.lineMaxWidth || 0) < this.width && (this.container.lineMaxWidth = this.width);
    }, e.refreshXAlign = function () {
      if (this.isInline) {
        var t = this.container.contentSize.width - this.width,
          e = this.container.style.textAlign;
        "center" === e ? t /= 2 : "left" === e && (t = 0), this.offsetX = t;
      }
    }, e.getOffsetY = function (t) {
      if (!t || !t.style) return 0;
      var e = (t.style || {}).verticalAlign;
      return "bottom" === e ? this.height - t.contentSize.height : "middle" === e ? (this.height - t.contentSize.height) / 2 : 0;
    }, e.layout = function (t, e) {
      for (var i in this.refreshXAlign(), this.pre ? (this.top = this.pre.top + this.pre.height + this.offsetY, this.left = e + this.offsetX) : (this.top = Math.max(this.top, this.container.contentSize.top, t) + this.offsetY, this.left = Math.max(this.left, this.container.contentSize.left, e) + this.offsetX), this.elements) {
        var n = this.elements[i],
          r = this.elements[i - 1],
          o = this.getOffsetY(n);
        n.style.top = this.top + o, n.style.left = r ? r.offsetSize.left + r.offsetSize.width : this.left, n.getBoxPosition2();
      }
    }, e.refreshLayout = function () {
      this.afterElements = this.afterElements.sort(function (t, e) {
        return t.computedStyle.zIndex - e.computedStyle.zIndex;
      }), this.beforeElements = this.beforeElements.sort(function (t, e) {
        return t.computedStyle.zIndex - e.computedStyle.zIndex;
      });
    }, t;
  }(),
  V = ((X = {})[a] = {
    width: "width",
    contentWidth: "width",
    x: "x",
    y: "y",
    contentX: "left",
    height: "height",
    contentHeight: "height"
  }, X[h] = {
    width: "height",
    contentWidth: "height",
    x: "y",
    y: "x",
    contentX: "top",
    height: "width",
    contentHeight: "width"
  }, X),
  G = function (t) {
    var e, i;
    function n() {
      var e;
      return j(function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(e = t.call(this) || this), "outerWidth", 0), e.exactValue = 0, e.flexTotal = 0, e.key = null, e;
    }
    i = t, (e = n).prototype = Object.create(i.prototype), e.prototype.constructor = e, E(e, i);
    var r = n.prototype;
    return r.bind = function (t) {
      console.warn("[painter] flex-box 功能未完善谨慎使用"), this.container = t.parent, this.container.line = this, this.container.lines ? (this.container.lines.push(this), this.pre = this.getPreLine(), this.top = this.pre.top + this.pre.height, this.left = this.container.contentSize.left) : (this.top = this.container.contentSize.top, this.left = this.container.contentSize.left, this.container.lines = [this]), t.parent && (this.key = V[t.parent.style.flexDirection]), this.initHeight(t), this.outerWidth = t.parent && t.parent.contentSize[this.key.contentWidth] ? t.parent.contentSize[this.key.contentWidth] : 1 / 0, this.add(t);
    }, r.add = function (t) {
      this.ids.push(t.id), Y(t.style.flex) ? this.flexTotal += t.style.flex : Y(t.style[this.key.width]) && (this.exactValue += t.contentSize[this.key.width]), this.elements.push(t), this.refreshWidthHeight(t), t.next || this.closeLine();
    }, r.closeLine = function () {
      this.calcFlex();
    }, r.initHeight = function (t) {
      this[this.key.height] = 0;
    }, r.calcFlex = function () {
      var t = this,
        e = this.container.contentSize[this.key.contentWidth];
      this.elements.forEach(function (i) {
        var n = i.style.width || 0;
        Y(i.style.flex) && (n = i.style.flex / t.flexTotal * (e - t.exactValue)), i.computedStyle[t.key.width] = n, i.getBoxWidthHeight();
      });
    }, r.refreshWidthHeight = function (t) {
      this.container.style.alignItems && !t.style.alignSelf && (t.style.alignSelf = this.container.style.alignItems), t.contentSize[this.key.height] > this[this.key.height] && (this[this.key.height] = t.offsetSize[this.key.height]), this[this.key.width] += t.offsetSize[this.key.width], (this.container.lineMaxWidth || 0) < this[this.key.width] && (this.container.lineMaxWidth = this[this.key.width]);
    }, r.refreshXAlign = function () {
      var t = this,
        e = this.elements.reduce(function (e, i) {
          return e + i.offsetSize[t.key.width];
        }, 0),
        i = this.outerWidth == 1 / 0 ? 0 : this.outerWidth - Math.max(this[this.key.width], e);
      "center" === this.container.style.justifyContent ? i /= 2 : "flex-start" === this.container.style.justifyContent && (i = 0), this.offsetX = i || 0, this.refreshYAlign();
    }, r.refreshYAlign = function () {
      if (1 == this.container.lines.length) return 0;
      var t = this.container.lines.reduce(function (t, e) {
        return t + e.height;
      }, 0);
      if ("center" === this.container.style.alignItems) {
        var e = (this.container.contentSize[this.key.contentHeight] - t) / (this.container.lines.length + 1);
        this.container.lines.forEach(function (t) {
          t.offsetY = e;
        });
      }
      if ("flex-end" === this.container.style.alignItems) {
        var i = this.container.contentSize[this.key.contentHeight] - t;
        this.container.lines[0].offsetY = i;
      }
    }, r.getOffsetY = function (t) {
      return this.container.lines.length > 1 ? 0 : "flex-end" === t.style.alignSelf ? this.container.contentSize[this.key.contentHeight] - t.contentSize[this.key.height] : "center" === t.style.alignSelf ? (this.container.contentSize[this.key.contentHeight] - t.contentSize[this.key.height]) / 2 : 0;
    }, n;
  }(N),
  q = y,
  J = v,
  Q = g,
  Z = b,
  K = x,
  et = m,
  it = S,
  nt = z,
  rt = B,
  ot = 0,
  st = {
    left: null,
    top: null,
    width: null,
    height: null
  },
  at = function () {
    function t(t, e, i, n) {
      var r = this;
      j(this, "id", ot++), j(this, "style", {
        left: null,
        top: null,
        width: null,
        height: null
      }), j(this, "computedStyle", {}), j(this, "originStyle", {}), j(this, "children", {}), j(this, "layoutBox", C({}, st)), j(this, "contentSize", C({}, st)), j(this, "clientSize", C({}, st)), j(this, "borderSize", C({}, st)), j(this, "offsetSize", C({}, st)), this.ctx = n, this.root = i, e && (this.parent = e), this.name = t.name || t.type, this.attributes = this.getAttributes(t);
      var o = this.getComputedStyle(t, null == e ? void 0 : e.computedStyle);
      this.isAbsolute = o.position == nt, this.isFixed = o.position == rt, this.originStyle = o, Object.keys(o).forEach(function (t) {
        Object.defineProperty(r.style, t, {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return o[t];
          },
          set: function set(e) {
            o[t] = e;
          }
        });
      });
      var s = {
        contentSize: C({}, this.contentSize),
        clientSize: C({}, this.clientSize),
        borderSize: C({}, this.borderSize),
        offsetSize: C({}, this.offsetSize)
      };
      Object.keys(s).forEach(function (t) {
        Object.keys(r[t]).forEach(function (e) {
          Object.defineProperty(r[t], e, {
            configurable: !0,
            enumerable: !0,
            get: function get() {
              return s[t][e];
            },
            set: function set(i) {
              s[t][e] = i;
            }
          });
        });
      }), this.computedStyle = this.style;
    }
    var e = t.prototype;
    return e.add = function (t) {
      t.parent = this, this.children[t.id] = t;
    }, e.getChildren = function () {
      var t = this;
      return Object.keys(this.children).map(function (e) {
        return t.children[e];
      });
    }, e.getLineRect = function (t, e) {
      var i = {
          width: 0,
          height: 0
        },
        n = e ? e.lines : this.parent && this.parent.lines;
      return n && n.find(function (e) {
        return e.ids.includes(t);
      }) || i;
    }, e.getComputedStyle = function (t, e) {
      var i = ["color", "fontSize", "lineHeight", "verticalAlign", "fontWeight", "textAlign"],
        n = t.css,
        r = void 0 === n ? {} : n,
        o = t.type,
        s = void 0 === o ? Q : o,
        a = C({}, M);
      if ([J, q, Z].includes(s) && !r.display && (a.display = et), e) for (var h = 0; h < i.length; h++) {
        var d = i[h];
        (r[d] || e[d]) && (r[d] = r[d] || e[d]);
      }
      for (var c = function c() {
          var t = f[l],
            e = r[t];
          if (/-/.test(t) && (t = t.replace(/-([a-z])/g, function (t, e) {
            return e.toUpperCase();
          }), a.key = e), /^(box|text)?shadow$/i.test(t)) {
            var i = [];
            return e.replace(/((\d+(rpx|px)?\s+?){3})(.+)/, function () {
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
                e[n] = arguments[n];
              }
              i = e[1].match(/\d+(rpx|px)?/g).map(function (t) {
                return O(t);
              }).concat(e[4]);
            }), /^text/.test(t) ? a.textShadow = i : a.boxShadow = i, "continue";
          }
          if (/^border/i.test(t) && !/radius$/i.test(t)) {
            var n,
              o = t.match(/^border([BTRLa-z]+)?/)[0],
              h = t.match(/[W|S|C][a-z]+/),
              d = e.replace(/([\(,])\s+|\s+([\),])/g, "$1$2").split(" ").map(function (t) {
                return /^\d/.test(t) ? O(t, "") : t;
              });
            return a[o] = ((n = {})[o + "Width"] = R(d[0]) ? d[0] : 0, n[o + "Style"] = d[1] || "solid", n[o + "Color"] = d[2] || "black", n), 1 == d.length && h && (a[o][o + h[0]] = d[0]), "continue";
          }
          if (/^background(color)?$/i.test(t)) return a.backgroundColor = e, "continue";
          if (/^objectPosition$/i.test(t)) return a[t] = e.split(" "), "continue";
          if (/padding|margin|radius/i.test(t)) {
            var c = /radius$/i.test(t),
              u = c ? "borderRadius" : t.match(/[a-z]+/)[0],
              p = [0, 0, 0, 0].map(function (t, e) {
                return c ? ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"][e] : [u + "Top", u + "Right", u + "Bottom", u + "Left"][e];
              }),
              g = "margin";
            if ("padding" === t || t === g || /^(border)?radius$/i.test(t)) {
              var v,
                y = (null == e ? void 0 : e.split(" ").map(function (e) {
                  return /^\d+(rpx|px)?$/.test(e) ? O(e) : t != g && /auto/.test(e) ? 0 : e;
                }, [])) || [0],
                b = c ? "borderRadius" : t,
                x = y[0],
                m = y[1],
                w = y[2],
                S = y[3];
              a[b] = ((v = {})[p[0]] = $(x) ? 0 : x, v[p[1]] = R(m) || $(m) ? m : x, v[p[2]] = $(R(w) ? w : x) ? 0 : R(w) ? w : x, v[p[3]] = R(S) ? S : m || x, v);
            } else {
              var z;
              if ("object" == (0, _typeof2.default)(a[u])) a[u][t] = u == g && $(e) || D(e) ? e : O(e);else a[u] = ((z = {})[p[0]] = a[u] || 0, z[p[1]] = a[u] || 0, z[p[2]] = a[u] || 0, z[p[3]] = a[u] || 0, z), a[u][t] = u == g && $(e) || D(e) ? e : O(e);
            }
            return "continue";
          }
          if (/^transform$/i.test(t)) return a[t] = {}, e.replace(/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g, function (e, i, n) {
            var o = n.split(",").map(function (t) {
                return t.replace(/(^\s*)|(\s*$)/g, "");
              }),
              s = function s(t, e) {
                return t.includes("deg") ? 1 * t : e && !D(e) ? O(t, e) : t;
              };
            i.includes("matrix") ? a[t][i] = o.map(function (t) {
              return 1 * t;
            }) : i.includes("rotate") ? a[t][i] = 1 * n.match(/^-?\d+(\.\d+)?/)[0] : /[X, Y]/.test(i) ? a[t][i] = /[X]/.test(i) ? s(o[0], r.width) : s(o[0], r.height) : (a[t][i + "X"] = s(o[0], r.width), a[t][i + "Y"] = s(o[1] || o[0], r.height));
          }), "continue";
          /^font$/i.test(t) && console.warn("font 不支持简写"), /^left|top$/i.test(t) && ![nt, rt].includes(r.position) ? a[t] = 0 : a[t] = /^[\d\.]+(px|rpx)?$/.test(e) ? O(e) : /em$/.test(e) && s == J ? O(e, r.fontSize) : e;
        }, l = 0, f = Object.keys(r); l < f.length; l++) {
        c();
      }
      return a;
    }, e.setPosition = function (t, e) {
      var i = {
        left: "width",
        top: "height",
        right: "width",
        bottom: "height"
      };
      Object.keys(i).forEach(function (n) {
        var r = "right" == n ? "left" : "top";
        ["right", "bottom"].includes(n) && void 0 !== t.style[n] && "number" != typeof t.originStyle[r] ? t.style[r] = e[i[n]] - t.offsetSize[i[n]] - O(t.style[n], e[i[n]]) : t.style[n] = O(t.style[n], e[i[n]]);
      });
    }, e.getAttributes = function (t) {
      var e = t.attributes || {};
      return (t.url || t.src) && (e.src = e.src || t.url || t.src), t.replace && (e.replace = t.replace), t.text && (e.text = t.text), e;
    }, e.getOffsetSize = function (t, e, i) {
      void 0 === i && (i = s[3]);
      var n = e || {},
        r = n.margin,
        o = (r = void 0 === r ? {} : r).marginLeft,
        a = void 0 === o ? 0 : o,
        h = r.marginTop,
        d = void 0 === h ? 0 : h,
        c = r.marginRight,
        l = void 0 === c ? 0 : c,
        f = r.marginBottom,
        u = void 0 === f ? 0 : f,
        p = n.padding,
        g = (p = void 0 === p ? {} : p).paddingLeft,
        v = void 0 === g ? 0 : g,
        y = p.paddingTop,
        b = void 0 === y ? 0 : y,
        x = p.paddingRight,
        m = void 0 === x ? 0 : x,
        w = p.paddingBottom,
        S = void 0 === w ? 0 : w,
        z = n.border,
        B = (z = void 0 === z ? {} : z).borderWidth,
        M = void 0 === B ? 0 : B,
        I = n.borderTop,
        k = (I = void 0 === I ? {} : I).borderTopWidth,
        P = void 0 === k ? M : k,
        W = n.borderBottom,
        R = (W = void 0 === W ? {} : W).borderBottomWidth,
        O = void 0 === R ? M : R,
        L = n.borderRight,
        T = (L = void 0 === L ? {} : L).borderRightWidth,
        A = void 0 === T ? M : T,
        F = n.borderLeft,
        j = (F = void 0 === F ? {} : F).borderLeftWidth,
        C = void 0 === j ? M : j,
        E = a < 0 && l < 0 ? Math.abs(a + l) : 0,
        H = d < 0 && u < 0 ? Math.abs(d + u) : 0,
        U = a >= 0 && l < 0,
        Y = d >= 0 && u < 0;
      return i == s[0] && (this[i].left = t.left + a + v + C + (U ? 2 * -l : 0), this[i].top = t.top + d + b + P + (Y ? 2 * -u : 0), this[i].width = t.width + (this[i].widthAdd ? 0 : E), this[i].height = t.height + (this[i].heightAdd ? 0 : H), this[i].widthAdd = E, this[i].heightAdd = H), i == s[1] && (this[i].left = t.left + a + C + (U < 0 ? -l : 0), this[i].top = t.top + d + P + (Y ? -u : 0), this[i].width = t.width + v + m, this[i].height = t.height + b + S), i == s[2] && (this[i].left = t.left + a + C / 2 + (U < 0 ? -l : 0), this[i].top = t.top + d + P / 2 + (Y ? -u : 0), this[i].width = t.width + v + m + C / 2 + A / 2, this[i].height = t.height + b + S + O / 2 + P / 2), i == s[3] && (this[i].left = t.left + (U < 0 ? -l : 0), this[i].top = t.top + (Y ? -u : 0), this[i].width = t.width + v + m + C + A + a + l, this[i].height = t.height + b + S + O + P + u + d), this[i];
    }, e.layoutBoxUpdate = function (t, e, i, n) {
      var r = this;
      if (void 0 === i && (i = -1), "border-box" == e.boxSizing) {
        var o = e || {},
          a = o.border,
          h = (a = void 0 === a ? {} : a).borderWidth,
          d = void 0 === h ? 0 : h,
          c = o.borderTop,
          l = (c = void 0 === c ? {} : c).borderTopWidth,
          f = void 0 === l ? d : l,
          u = o.borderBottom,
          p = (u = void 0 === u ? {} : u).borderBottomWidth,
          g = void 0 === p ? d : p,
          v = o.borderRight,
          y = (v = void 0 === v ? {} : v).borderRightWidth,
          b = void 0 === y ? d : y,
          x = o.borderLeft,
          m = (x = void 0 === x ? {} : x).borderLeftWidth,
          w = void 0 === m ? d : m,
          S = o.padding,
          z = (S = void 0 === S ? {} : S).paddingTop,
          B = void 0 === z ? 0 : z,
          M = S.paddingRight,
          I = void 0 === M ? 0 : M,
          k = S.paddingBottom,
          P = void 0 === k ? 0 : k,
          W = S.paddingLeft,
          R = void 0 === W ? 0 : W;
        i || (t.width -= R + I + b + w), 1 !== i || n || (t.height -= B + P + f + g);
      }
      this.layoutBox && (s.forEach(function (i) {
        return r.layoutBox[i] = r.getOffsetSize(t, e, i);
      }), this.layoutBox = Object.assign({}, this.layoutBox, this.layoutBox.borderSize));
    }, e.getBoxPosition2 = function () {
      var t = this.computedStyle,
        e = this.fixedLine,
        i = this.lines,
        n = t.left,
        r = void 0 === n ? 0 : n,
        o = t.top,
        s = void 0 === o ? 0 : o,
        a = t.padding || {},
        h = a.paddingBottom,
        d = void 0 === h ? 0 : h,
        c = a.paddingRight,
        l = void 0 === c ? 0 : c,
        f = C({}, this.contentSize, {
          left: r,
          top: s
        }),
        u = this.contentSize.top - this.offsetSize.top,
        p = this.contentSize.left - this.offsetSize.left;
      if (this.root.fixedLine && !this.root.isDone) {
        this.root.isDone = !0;
        for (var g, v = U(this.root.fixedLine.elements); !(g = v()).done;) {
          var y = g.value;
          y.setPosition(y, this.root.offsetSize), y.getBoxPosition2();
        }
      }
      if (e) for (var b, x = U(e.elements); !(b = x()).done;) {
        var m = b.value;
        m.setPosition(m, f), m.style.left += r + p + l, m.style.top += s + u + d, m.getBoxPosition2();
      }
      if (i) for (var w, S = U(i); !(w = S()).done;) {
        w.value.layout(f.top + u, f.left + p);
      }
      return this.layoutBoxUpdate(f, t), this.layoutBox;
    }, e.getBoxState = function (t, e) {
      return this.isBlock(t) || this.isBlock(e);
    }, e.isBlock = function (t) {
      return void 0 === t && (t = this), t && t.style.display == K;
    }, e.isFlex = function (t) {
      return void 0 === t && (t = this), t && t.style.display == it;
    }, e.isInFlow = function () {
      return !(this.isAbsolute || this.isFixed);
    }, e.inFlexBox = function (t) {
      return void 0 === t && (t = this), !!t.isInFlow() && !!t.parent && (!(!t.parent || t.parent.style.display !== it) || void 0);
    }, e.isInline = function (t) {
      return void 0 === t && (t = this), t && t.style.display == et;
    }, e.contrastSize = function (t, e, i) {
      var n = t;
      return i && (n = Math.min(n, i)), e && (n = Math.max(n, e)), n;
    }, e.measureText = function (t, e) {
      var i = this.ctx.measureText(t),
        n = i.width,
        r = i.actualBoundingBoxAscent,
        o = i.actualBoundingBoxDescent;
      return {
        ascent: r,
        descent: o,
        width: n,
        fontHeight: r + o || .7 * e + 1
      };
    }, e.getBoxWidthHeight = function () {
      var t,
        e = this,
        i = this.name,
        n = this.computedStyle,
        r = this.attributes,
        o = this.parent,
        s = void 0 === o ? {} : o,
        a = this.ctx,
        h = this.getChildren(),
        d = n.left,
        c = void 0 === d ? 0 : d,
        l = n.top,
        f = void 0 === l ? 0 : l,
        u = n.bottom,
        p = n.right,
        g = n.width,
        v = void 0 === g ? 0 : g,
        y = n.minWidth,
        b = n.maxWidth,
        x = n.minHeight,
        m = n.maxHeight,
        w = n.height,
        S = void 0 === w ? 0 : w,
        z = n.fontSize,
        B = void 0 === z ? 14 : z,
        M = n.fontWeight,
        I = n.fontFamily,
        k = n.fontStyle,
        P = n.position,
        W = n.lineClamp,
        R = n.lineHeight,
        L = n.padding,
        T = void 0 === L ? {} : L,
        A = n.margin,
        F = void 0 === A ? {} : A,
        j = n.border,
        C = (j = void 0 === j ? {} : j).borderWidth,
        E = void 0 === C ? 0 : C,
        H = n.borderRight,
        U = (H = void 0 === H ? {} : H).borderRightWidth,
        Y = void 0 === U ? E : U,
        $ = n.borderLeft,
        X = ($ = void 0 === $ ? {} : $).borderLeftWidth,
        _ = void 0 === X ? E : X,
        V = s.contentSize && s.contentSize.width,
        Z = s.contentSize && s.contentSize.height;
      if (D(v) && V && (v = O(v, V)), D(v) && !V && (v = null), D(S) && Z && (S = O(S, Z)), D(S) && !Z && (S = null), D(y) && V && (y = O(y, V)), D(b) && V && (b = O(b, V)), D(x) && Z && (x = O(x, Z)), D(m) && Z && (m = O(m, Z)), n.padding && null != (t = s.contentSize) && t.width) for (var K in n.padding) {
        Object.hasOwnProperty.call(n.padding, K) && (n.padding[K] = O(n.padding[K], V));
      }
      var tt = T.paddingRight,
        et = void 0 === tt ? 0 : tt,
        it = T.paddingLeft,
        rt = void 0 === it ? 0 : it;
      if (n.margin && [n.margin.marginLeft, n.margin.marginRight].includes("auto")) if (v) {
        var ot = V && V - v - et - rt - _ - Y || 0;
        n.margin.marginLeft == n.margin.marginRight ? n.margin.marginLeft = n.margin.marginRight = ot / 2 : "auto" == n.margin.marginLeft ? n.margin.marginLeft = ot : n.margin.marginRight = ot;
      } else n.margin.marginLeft = n.margin.marginRight = 0;
      var st = F.marginRight,
        at = void 0 === st ? 0 : st,
        ht = F.marginLeft,
        dt = {
          width: v,
          height: S,
          left: 0,
          top: 0
        },
        ct = rt + et + _ + Y + (void 0 === ht ? 0 : ht) + at;
      if (i == J && !this.attributes.widths) {
        var lt = r.text || "";
        a.save(), a.setFonts({
          fontFamily: I,
          fontSize: B,
          fontWeight: M,
          fontStyle: k
        });
        var ft = new Map();
        lt.split("\n").map(function (t) {
          var i = t.split("").map(function (t) {
              var i = ft.get(t);
              if (i) return i;
              var n = e.measureText(t, B).width;
              return ft.set(t, n), n;
            }),
            n = e.measureText(t, B),
            r = n.fontHeight,
            o = n.ascent,
            s = n.descent;
          e.attributes.fontHeight = r, e.attributes.ascent = o, e.attributes.descent = s, e.attributes.widths || (e.attributes.widths = []), e.attributes.widths.push({
            widths: i,
            total: i.reduce(function (t, e) {
              return t + e;
            }, 0)
          });
        }), a.restore();
      }
      if (i == q && null == v) {
        var ut = r.width,
          pt = r.height;
        dt.width = this.contrastSize(Math.round(ut * S / pt) || 0, y, b), this.layoutBoxUpdate(dt, n, 0);
      }
      if (i == J && null == v) {
        var gt = this.attributes.widths,
          vt = Math.max.apply(Math, gt.map(function (t) {
            return t.total;
          }));
        if (s && V > 0 && (vt > V || this.isBlock(this)) && !this.isAbsolute && !this.isFixed) vt = V - ct;
        dt.width = this.contrastSize(vt, y, b), this.layoutBoxUpdate(dt, n, 0);
      }
      if (i == J && !this.attributes.lines) {
        var yt = this.attributes.widths.length;
        this.attributes.widths.forEach(function (t) {
          return t.widths.reduce(function (t, e, i) {
            return t + e > dt.width ? (yt++, e) : t + e;
          }, 0);
        }), yt = W && yt > W ? W : yt, this.attributes.lines = yt;
      }
      if (i == q && null == S) {
        var bt = r.width,
          xt = r.height;
        dt.height = this.contrastSize(O(dt.width * xt / bt) || 0, x, m), this.layoutBoxUpdate(dt, n, 1);
      }
      i == J && null == S && (R = O(R, B), dt.height = this.contrastSize(O(this.attributes.lines * R), x, m), this.layoutBoxUpdate(dt, n, 1, !0)), s && s.children && V && ([Q, J].includes(i) && this.isFlex() || i == Q && this.isBlock(this) && !this.isInFlow()) && (dt.width = this.contrastSize(V - ct, y, b), this.layoutBoxUpdate(dt, n)), v && !D(v) && (dt.width = this.contrastSize(v, y, b), this.layoutBoxUpdate(dt, n, 0)), S && !D(S) && (dt.height = this.contrastSize(dt.height, x, m), this.layoutBoxUpdate(dt, n, 1));
      var mt = 0;
      if (h.length) {
        var wt = null;
        h.forEach(function (t, i) {
          t.getBoxWidthHeight();
          var r = h[i + 1];
          if (r && r.isInFlow() && (t.next = r), t.isInFlow() && !t.inFlexBox()) {
            var o = e.getBoxState(wt, t);
            e.line && e.line.canIEnter(t) && !o ? e.line.add(t) : new N().bind(t), wt = t;
          } else t.inFlexBox() ? e.line && (e.line.canIEnter(t) || "nowrap" == n.flexWrap) ? e.line.add(t) : new G().bind(t) : t.isFixed ? e.root.fixedLine ? e.root.fixedLine.fixedAdd(t) : new N().fixedBind(t) : e.fixedLine ? e.fixedLine.fixedAdd(t) : new N().fixedBind(t, 1);
        }), this.lines && (mt = this.lines.reduce(function (t, e) {
          return t + e.height;
        }, 0));
      }
      var St = 0,
        zt = 0;
      if (!v && (this.isAbsolute || this.isFixed) && V) {
        var Bt = P == nt ? V : this.root.width,
          Mt = Bt - (D(c) ? O(c, Bt) : c) - (D(p) ? O(p, Bt) : p);
        St = n.left ? Mt : this.lineMaxWidth;
      }
      if (!S && (null != f ? f : this.isAbsolute || this.isFixed && Z)) {
        var It = P == nt ? Z : this.root.height,
          kt = It - (D(f) ? O(f, It) : f) - (D(u) ? O(u, It) : u);
        zt = n.top ? kt : 0;
      }
      if (v && !D(v) || dt.width || (dt.width = St || this.contrastSize((this.isBlock(this) && !this.isInFlow() ? V || s.lineMaxWidth : this.lineMaxWidth) || this.lineMaxWidth, y, b), this.layoutBoxUpdate(dt, n, 0)), S || !mt && !zt || (dt.height = zt || this.contrastSize(mt, x, m), this.layoutBoxUpdate(dt, n)), n.borderRadius && this.borderSize && this.borderSize.width) for (var K in n.borderRadius) {
        Object.hasOwnProperty.call(n.borderRadius, K) && (n.borderRadius[K] = O(n.borderRadius[K], this.borderSize.width));
      }
      return this.layoutBox;
    }, e.layout = function () {
      return this.getBoxWidthHeight(), this.root.offsetSize = this.offsetSize, this.getBoxPosition2(), this.offsetSize;
    }, t;
  }(),
  ht = function () {
    var t,
      e,
      i,
      n,
      r,
      o,
      s = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28],
      a = [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177],
      h = [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
      d = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
      c = [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175],
      l = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
      f = [],
      u = [],
      p = [],
      g = [],
      v = [],
      y = 2;
    function b(t, e) {
      var i;
      t > e && (i = t, t = e, e = i), i = e, i *= e, i += e, i >>= 1, g[i += t] = 1;
    }
    function x(t, i) {
      var n;
      for (p[t + e * i] = 1, n = -2; n < 2; n++) {
        p[t + n + e * (i - 2)] = 1, p[t - 2 + e * (i + n + 1)] = 1, p[t + 2 + e * (i + n)] = 1, p[t + n + 1 + e * (i + 2)] = 1;
      }
      for (n = 0; n < 2; n++) {
        b(t - 1, i + n), b(t + 1, i - n), b(t - n, i - 1), b(t + n, i + 1);
      }
    }
    function m(t) {
      for (; t >= 255;) {
        t = ((t -= 255) >> 8) + (255 & t);
      }
      return t;
    }
    var w = [];
    function S(t, e, i, n) {
      var r, o, s;
      for (r = 0; r < n; r++) {
        f[i + r] = 0;
      }
      for (r = 0; r < e; r++) {
        if (255 != (s = c[f[t + r] ^ f[i]])) for (o = 1; o < n; o++) {
          f[i + o - 1] = f[i + o] ^ l[m(s + w[n - o])];
        } else for (o = i; o < i + n; o++) {
          f[o] = f[o + 1];
        }
        f[i + n - 1] = 255 == s ? 0 : l[m(s + w[0])];
      }
    }
    function z(t, e) {
      var i;
      return t > e && (i = t, t = e, e = i), i = e, i += e * e, i >>= 1, g[i += t];
    }
    function B(t) {
      var i, n, r, o;
      switch (t) {
        case 0:
          for (n = 0; n < e; n++) {
            for (i = 0; i < e; i++) {
              i + n & 1 || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 1:
          for (n = 0; n < e; n++) {
            for (i = 0; i < e; i++) {
              1 & n || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 2:
          for (n = 0; n < e; n++) {
            for (r = 0, i = 0; i < e; i++, r++) {
              3 == r && (r = 0), r || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 3:
          for (o = 0, n = 0; n < e; n++, o++) {
            for (3 == o && (o = 0), r = o, i = 0; i < e; i++, r++) {
              3 == r && (r = 0), r || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 4:
          for (n = 0; n < e; n++) {
            for (r = 0, o = n >> 1 & 1, i = 0; i < e; i++, r++) {
              3 == r && (r = 0, o = !o), o || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 5:
          for (o = 0, n = 0; n < e; n++, o++) {
            for (3 == o && (o = 0), r = 0, i = 0; i < e; i++, r++) {
              3 == r && (r = 0), (i & n & 1) + !(!r | !o) || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 6:
          for (o = 0, n = 0; n < e; n++, o++) {
            for (3 == o && (o = 0), r = 0, i = 0; i < e; i++, r++) {
              3 == r && (r = 0), (i & n & 1) + (r && r == o) & 1 || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
          break;
        case 7:
          for (o = 0, n = 0; n < e; n++, o++) {
            for (3 == o && (o = 0), r = 0, i = 0; i < e; i++, r++) {
              3 == r && (r = 0), (r && r == o) + (i + n & 1) & 1 || z(i, n) || (p[i + n * e] ^= 1);
            }
          }
      }
    }
    function M(t) {
      var e,
        i = 0;
      for (e = 0; e <= t; e++) {
        v[e] >= 5 && (i += 3 + v[e] - 5);
      }
      for (e = 3; e < t - 1; e += 2) {
        v[e - 2] == v[e + 2] && v[e + 2] == v[e - 1] && v[e - 1] == v[e + 1] && 3 * v[e - 1] == v[e] && (0 == v[e - 3] || e + 3 > t || 3 * v[e - 3] >= 4 * v[e] || 3 * v[e + 3] >= 4 * v[e]) && (i += 40);
      }
      return i;
    }
    function I() {
      var t,
        i,
        n,
        r,
        o,
        s = 0,
        a = 0;
      for (i = 0; i < e - 1; i++) {
        for (t = 0; t < e - 1; t++) {
          (p[t + e * i] && p[t + 1 + e * i] && p[t + e * (i + 1)] && p[t + 1 + e * (i + 1)] || !(p[t + e * i] || p[t + 1 + e * i] || p[t + e * (i + 1)] || p[t + 1 + e * (i + 1)])) && (s += 3);
        }
      }
      for (i = 0; i < e; i++) {
        for (v[0] = 0, n = r = t = 0; t < e; t++) {
          (o = p[t + e * i]) == r ? v[n]++ : v[++n] = 1, a += (r = o) ? 1 : -1;
        }
        s += M(n);
      }
      a < 0 && (a = -a);
      var h = a,
        d = 0;
      for (h += h << 2, h <<= 1; h > e * e;) {
        h -= e * e, d++;
      }
      for (s += 10 * d, t = 0; t < e; t++) {
        for (v[0] = 0, n = r = i = 0; i < e; i++) {
          (o = p[t + e * i]) == r ? v[n]++ : v[++n] = 1, r = o;
        }
        s += M(n);
      }
      return s;
    }
    var k = null;
    return {
      api: {
        get ecclevel() {
          return y;
        },
        set ecclevel(t) {
          y = t;
        },
        get size() {
          return _size;
        },
        set size(t) {
          _size = t;
        },
        get canvas() {
          return k;
        },
        set canvas(t) {
          k = t;
        },
        getFrame: function getFrame(v) {
          return function (v) {
            var M, k, P, W, R, O, L, T;
            W = v.length, t = 0;
            do {
              if (t++, P = 4 * (y - 1) + 16 * (t - 1), i = d[P++], n = d[P++], r = d[P++], o = d[P], W <= (P = r * (i + n) + n - 3 + (t <= 9))) break;
            } while (t < 40);
            for (e = 17 + 4 * t, R = r + (r + o) * (i + n) + n, W = 0; W < R; W++) {
              u[W] = 0;
            }
            for (f = v.slice(0), W = 0; W < e * e; W++) {
              p[W] = 0;
            }
            for (W = 0; W < (e * (e + 1) + 1) / 2; W++) {
              g[W] = 0;
            }
            for (W = 0; W < 3; W++) {
              for (P = 0, k = 0, 1 == W && (P = e - 7), 2 == W && (k = e - 7), p[k + 3 + e * (P + 3)] = 1, M = 0; M < 6; M++) {
                p[k + M + e * P] = 1, p[k + e * (P + M + 1)] = 1, p[k + 6 + e * (P + M)] = 1, p[k + M + 1 + e * (P + 6)] = 1;
              }
              for (M = 1; M < 5; M++) {
                b(k + M, P + 1), b(k + 1, P + M + 1), b(k + 5, P + M), b(k + M + 1, P + 5);
              }
              for (M = 2; M < 4; M++) {
                p[k + M + e * (P + 2)] = 1, p[k + 2 + e * (P + M + 1)] = 1, p[k + 4 + e * (P + M)] = 1, p[k + M + 1 + e * (P + 4)] = 1;
              }
            }
            if (t > 1) for (W = s[t], k = e - 7;;) {
              for (M = e - 7; M > W - 3 && (x(M, k), !(M < W));) {
                M -= W;
              }
              if (k <= W + 9) break;
              x(6, k -= W), x(k, 6);
            }
            for (p[8 + e * (e - 8)] = 1, k = 0; k < 7; k++) {
              b(7, k), b(e - 8, k), b(7, k + e - 7);
            }
            for (M = 0; M < 8; M++) {
              b(M, 7), b(M + e - 8, 7), b(M, e - 8);
            }
            for (M = 0; M < 9; M++) {
              b(M, 8);
            }
            for (M = 0; M < 8; M++) {
              b(M + e - 8, 8), b(8, M);
            }
            for (k = 0; k < 7; k++) {
              b(8, k + e - 7);
            }
            for (M = 0; M < e - 14; M++) {
              1 & M ? (b(8 + M, 6), b(6, 8 + M)) : (p[8 + M + 6 * e] = 1, p[6 + e * (8 + M)] = 1);
            }
            if (t > 6) for (W = a[t - 7], P = 17, M = 0; M < 6; M++) {
              for (k = 0; k < 3; k++, P--) {
                1 & (P > 11 ? t >> P - 12 : W >> P) ? (p[5 - M + e * (2 - k + e - 11)] = 1, p[2 - k + e - 11 + e * (5 - M)] = 1) : (b(5 - M, 2 - k + e - 11), b(2 - k + e - 11, 5 - M));
              }
            }
            for (k = 0; k < e; k++) {
              for (M = 0; M <= k; M++) {
                p[M + e * k] && b(M, k);
              }
            }
            for (R = f.length, O = 0; O < R; O++) {
              u[O] = f.charCodeAt(O);
            }
            if (f = u.slice(0), R >= (M = r * (i + n) + n) - 2 && (R = M - 2, t > 9 && R--), O = R, t > 9) {
              for (f[O + 2] = 0, f[O + 3] = 0; O--;) {
                W = f[O], f[O + 3] |= 255 & W << 4, f[O + 2] = W >> 4;
              }
              f[2] |= 255 & R << 4, f[1] = R >> 4, f[0] = 64 | R >> 12;
            } else {
              for (f[O + 1] = 0, f[O + 2] = 0; O--;) {
                W = f[O], f[O + 2] |= 255 & W << 4, f[O + 1] = W >> 4;
              }
              f[1] |= 255 & R << 4, f[0] = 64 | R >> 4;
            }
            for (O = R + 3 - (t < 10); O < M;) {
              f[O++] = 236, f[O++] = 17;
            }
            for (w[0] = 1, O = 0; O < o; O++) {
              for (w[O + 1] = 1, L = O; L > 0; L--) {
                w[L] = w[L] ? w[L - 1] ^ l[m(c[w[L]] + O)] : w[L - 1];
              }
              w[0] = l[m(c[w[0]] + O)];
            }
            for (O = 0; O <= o; O++) {
              w[O] = c[w[O]];
            }
            for (P = M, k = 0, O = 0; O < i; O++) {
              S(k, r, P, o), k += r, P += o;
            }
            for (O = 0; O < n; O++) {
              S(k, r + 1, P, o), k += r + 1, P += o;
            }
            for (k = 0, O = 0; O < r; O++) {
              for (L = 0; L < i; L++) {
                u[k++] = f[O + L * r];
              }
              for (L = 0; L < n; L++) {
                u[k++] = f[i * r + O + L * (r + 1)];
              }
            }
            for (L = 0; L < n; L++) {
              u[k++] = f[i * r + O + L * (r + 1)];
            }
            for (O = 0; O < o; O++) {
              for (L = 0; L < i + n; L++) {
                u[k++] = f[M + O + L * o];
              }
            }
            for (f = u, M = k = e - 1, P = R = 1, T = (r + o) * (i + n) + n, O = 0; O < T; O++) {
              for (W = f[O], L = 0; L < 8; L++, W <<= 1) {
                128 & W && (p[M + e * k] = 1);
                do {
                  R ? M-- : (M++, P ? 0 != k ? k-- : (P = !P, 6 == (M -= 2) && (M--, k = 9)) : k != e - 1 ? k++ : (P = !P, 6 == (M -= 2) && (M--, k -= 8))), R = !R;
                } while (z(M, k));
              }
            }
            for (f = p.slice(0), W = 0, k = 3e4, P = 0; P < 8 && (B(P), (M = I()) < k && (k = M, W = P), 7 != W); P++) {
              p = f.slice(0);
            }
            for (W != P && B(W), k = h[W + (y - 1 << 3)], P = 0; P < 8; P++, k >>= 1) {
              1 & k && (p[e - 1 - P + 8 * e] = 1, P < 6 ? p[8 + e * P] = 1 : p[8 + e * (P + 1)] = 1);
            }
            for (P = 0; P < 7; P++, k >>= 1) {
              1 & k && (p[8 + e * (e - 7 + P)] = 1, P ? p[6 - P + 8 * e] = 1 : p[7 + 8 * e] = 1);
            }
            return p;
          }(v);
        },
        utf16to8: function utf16to8(t) {
          var e, i, n, r;
          for (e = "", n = t.length, i = 0; i < n; i++) {
            (r = t.charCodeAt(i)) >= 1 && r <= 127 ? e += t.charAt(i) : r > 2047 ? (e += String.fromCharCode(224 | r >> 12 & 15), e += String.fromCharCode(128 | r >> 6 & 63), e += String.fromCharCode(128 | r >> 0 & 63)) : (e += String.fromCharCode(192 | r >> 6 & 31), e += String.fromCharCode(128 | r >> 0 & 63));
          }
          return e;
        },
        draw: function draw(t, i, n, r, o) {
          i.drawView(n, r);
          var s = i.ctx,
            a = n.contentSize,
            h = a.width,
            d = a.height,
            c = a.left,
            l = a.top;
          r.borderRadius, r.backgroundColor;
          var f = r.color,
            u = void 0 === f ? "#000000" : f;
          r.border, n.contentSize.left, n.borderSize.left, n.contentSize.top, n.borderSize.top;
          if (y = o || y, s) {
            s.save(), i.setOpacity(r), i.setTransform(n, r);
            var p = Math.min(h, d);
            t = this.utf16to8(t);
            var g = this.getFrame(t),
              v = p / e;
            s.setFillStyle(u);
            for (var b = 0; b < e; b++) {
              for (var x = 0; x < e; x++) {
                g[x * e + b] && s.fillRect(c + v * b, l + v * x, v, v);
              }
            }
            s.restore(), i.setBorder(n, r);
          } else console.warn("No canvas provided to draw QR code in!");
        }
      }
    };
  }(),
  dt = y,
  ct = v,
  lt = b,
  ft = g,
  ut = d,
  pt = c,
  gt = l,
  vt = f,
  yt = u,
  bt = p,
  xt = function () {
    function n(t, e) {
      var i,
        n = this;
      this.v = "1.9.3.4", this.id = null, this.pixelRatio = 1, this.width = 0, this.height = 0, this.sleep = 1e3 / 30, this.count = 0, this.isRate = !1, this.isDraw = !0, this.isCache = !0, this.fixed = "", this.useCORS = !1, this.imageBus = [], this.createImage = function (t, e) {
        return new Promise(function (i, r) {
          var o = null;
          o = n.canvas.createImage ? n.canvas.createImage() : new Image(), e && o.setAttribute("crossOrigin", "Anonymous"), o.src = t, o.onload = function () {
            i({
              width: o.naturalWidth || o.width,
              height: o.naturalHeight || o.height,
              path: o,
              src: this.src
            });
          }, o.onerror = function (t) {
            r(t);
          };
        });
      }, this.options = t, Object.assign(this, t), this.component = e, this.ctx = ((i = t.context).setFonts = function (t) {
        var e = t.fontFamily,
          n = void 0 === e ? "sans-serif" : e,
          r = t.fontSize,
          s = void 0 === r ? 14 : r,
          a = t.fontWeight,
          h = void 0 === a ? "normal" : a,
          d = t.fontStyle,
          c = void 0 === d ? "normal" : d;
        k == o.MP_TOUTIAO && (h = "bold" == h ? "bold" : "", c = "italic" == c ? "italic" : ""), i.font = "".concat(c, " ").concat(h, " ").concat(Math.round(s), "px ").concat(n);
      }, i.draw && i.setFillStyle ? i : Object.assign(i, {
        setStrokeStyle: function setStrokeStyle(t) {
          i.strokeStyle = t;
        },
        setLineWidth: function setLineWidth(t) {
          i.lineWidth = t;
        },
        setLineCap: function setLineCap(t) {
          i.lineCap = t;
        },
        setFillStyle: function setFillStyle(t) {
          i.fillStyle = t;
        },
        setFontSize: function setFontSize(t) {
          i.font = "".concat(String(t), "px sans-serif");
        },
        setGlobalAlpha: function setGlobalAlpha(t) {
          i.globalAlpha = t;
        },
        setLineJoin: function setLineJoin(t) {
          i.lineJoin = t;
        },
        setTextAlign: function setTextAlign(t) {
          i.textAlign = t;
        },
        setMiterLimit: function setMiterLimit(t) {
          i.miterLimit = t;
        },
        setShadow: function setShadow(t, e, n, r) {
          i.shadowOffsetX = t, i.shadowOffsetY = e, i.shadowBlur = n, i.shadowColor = r;
        },
        setTextBaseline: function setTextBaseline(t) {
          i.textBaseline = t;
        },
        createCircularGradient: function createCircularGradient() {},
        draw: function draw() {}
      })), this.progress = 0, this.root = {
        width: t.width,
        height: t.height,
        fontSizeRate: 1,
        fixedLine: null
      }, this.size = this.root, this.init();
      var r = 0;
      Object.defineProperty(this, "progress", {
        configurable: !0,
        set: function set(t) {
          r = t, n.lifecycle("onProgress", t / n.count);
        },
        get: function get() {
          return r || 0;
        }
      });
    }
    return n.prototype.lifecycle = function (t, e) {
      this.options.listen && this.options.listen[t] && this.options.listen[t](e);
    }, n.prototype.init = function (t) {
      t && (this.ctx = t), (this.canvas.height || o.WEB == k) && (this.canvas.height = this.size.height * this.pixelRatio, this.canvas.width = this.size.width * this.pixelRatio, this.ctx.scale(this.pixelRatio, this.pixelRatio));
    }, n.prototype.clear = function () {
      this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    }, n.prototype.clipPath = function (t, e, i, n, r, o, s) {
      void 0 === o && (o = !1), void 0 === s && (s = !1);
      var a = this.ctx;
      if (/polygon/.test(r)) {
        var h = r.match(/-?\d+(rpx|px|%)?\s+-?\d+(rpx|px|%)?/g) || [];
        a.beginPath(), h.map(function (r) {
          var o = r.split(" "),
            s = o[0],
            a = o[1];
          return [O(s, i) + t, O(a, n) + e];
        }).forEach(function (t, e) {
          0 == e ? a.moveTo(t[0], t[1]) : a.lineTo(t[0], t[1]);
        }), a.closePath(), s && a.stroke(), o && a.fill();
      }
    }, n.prototype.roundRect = function (t, e, i, n, r, o, s) {
      if (void 0 === o && (o = !1), void 0 === s && (s = !1), !(r < 0)) {
        var a = this.ctx;
        if (a.beginPath(), r) {
          var h = r || {},
            d = h.borderTopLeftRadius,
            c = void 0 === d ? r || 0 : d,
            l = h.borderTopRightRadius,
            f = void 0 === l ? r || 0 : l,
            u = h.borderBottomRightRadius,
            p = void 0 === u ? r || 0 : u,
            g = h.borderBottomLeftRadius,
            v = void 0 === g ? r || 0 : g;
          a.arc(t + i - p, e + n - p, p, 0, .5 * Math.PI), a.lineTo(t + v, e + n), a.arc(t + v, e + n - v, v, .5 * Math.PI, Math.PI), a.lineTo(t, e + c), a.arc(t + c, e + c, c, Math.PI, 1.5 * Math.PI), a.lineTo(t + i - f, e), a.arc(t + i - f, e + f, f, 1.5 * Math.PI, 2 * Math.PI), a.lineTo(t + i, e + n - p);
        } else a.rect(t, e, i, n);
        a.closePath(), s && a.stroke(), o && a.fill();
      }
    }, n.prototype.setTransform = function (t, e) {
      var i = e.transform,
        n = e.transformOrigin,
        r = this.ctx,
        o = i || {},
        s = o.scaleX,
        a = void 0 === s ? 1 : s,
        h = o.scaleY,
        d = void 0 === h ? 1 : h,
        c = o.translateX,
        l = void 0 === c ? 0 : c,
        f = o.translateY,
        u = void 0 === f ? 0 : f,
        p = o.rotate,
        g = void 0 === p ? 0 : p,
        v = o.skewX,
        y = void 0 === v ? 0 : v,
        b = o.skewY,
        x = void 0 === b ? 0 : b,
        m = t.left,
        w = t.top,
        S = t.width,
        z = t.height;
      l = O(l, S) || 0, u = O(u, z) || 0;
      var B = {
          top: O("0%", 1),
          center: O("50%", 1),
          bottom: O("100%", 1)
        },
        M = {
          left: O("0%", 1),
          center: O("50%", 1),
          right: O("100%", 1)
        };
      if (n = n.split(" ").filter(function (t, e) {
        return e < 2;
      }).reduce(function (t, e) {
        if (/\d+/.test(e)) {
          var i = O(e, 1) / (/px|rpx$/.test(e) ? R(t.x) ? z : S : 1);
          return R(t.x) ? Object.assign(t, {
            y: i
          }) : Object.assign(t, {
            x: i
          });
        }
        return R(M[e]) && !R(t.x) ? Object.assign(t, {
          x: M[e]
        }) : Object.assign(t, {
          y: B[e] || .5
        });
      }, {}), (l || u) && r.translate(l, u), (a || d) && r.scale(a, d), g) {
        var I = m + S * n.x,
          k = w + z * n.y;
        r.translate(I, k), r.rotate(g * Math.PI / 180), r.translate(-I, -k);
      }
      (y || x) && r.transform(1, Math.tan(x * Math.PI / 180), Math.tan(y * Math.PI / 180), 1, 0, 0);
    }, n.prototype.setBackground = function (t, e, i, n, r) {
      var s = this.ctx;
      t && "transparent" != t ? T(t) ? A(t, e, i, n, r, s) : s.setFillStyle(t) : [o.MP_TOUTIAO, o.MP_BAIDU].includes(k) ? s.setFillStyle("rgba(0,0,0,0)") : s.setFillStyle("transparent");
    }, n.prototype.setShadow = function (t) {
      var e = t.boxShadow,
        i = void 0 === e ? [] : e,
        n = this.ctx;
      if (i.length) {
        var r = i[0],
          o = i[1],
          s = i[2],
          a = i[3];
        n.setShadow(r, o, s, a);
      }
    }, n.prototype.setBorder = function (t, e) {
      var i = this.ctx,
        n = t.width,
        r = t.height,
        o = t.left,
        s = t.top,
        a = e.border,
        h = e.borderBottom,
        d = e.borderTop,
        c = e.borderRight,
        l = e.borderLeft,
        f = e.borderRadius,
        u = e.lineCap,
        p = a || {},
        g = p.borderWidth,
        v = void 0 === g ? 0 : g,
        y = p.borderStyle,
        b = p.borderColor,
        x = h || {},
        m = x.borderBottomWidth,
        w = void 0 === m ? v : m,
        S = x.borderBottomStyle,
        z = void 0 === S ? y : S,
        B = x.borderBottomColor,
        M = void 0 === B ? b : B,
        I = d || {},
        P = I.borderTopWidth,
        W = void 0 === P ? v : P,
        R = I.borderTopStyle,
        O = void 0 === R ? y : R,
        L = I.borderTopColor,
        T = void 0 === L ? b : L,
        A = c || {},
        F = A.borderRightWidth,
        j = void 0 === F ? v : F,
        C = A.borderRightStyle,
        E = void 0 === C ? y : C,
        H = A.borderRightColor,
        U = void 0 === H ? b : H,
        Y = l || {},
        $ = Y.borderLeftWidth,
        D = void 0 === $ ? v : $,
        X = Y.borderLeftStyle,
        _ = void 0 === X ? y : X,
        N = Y.borderLeftColor,
        V = void 0 === N ? b : N,
        G = f || {},
        q = G.borderTopLeftRadius,
        J = void 0 === q ? f || 0 : q,
        Q = G.borderTopRightRadius,
        Z = void 0 === Q ? f || 0 : Q,
        K = G.borderBottomRightRadius,
        tt = void 0 === K ? f || 0 : K,
        et = G.borderBottomLeftRadius,
        it = void 0 === et ? f || 0 : et;
      if (h || l || d || c || a) {
        var nt = function nt(t, e, n) {
            "dashed" == e ? /mp/.test(k) ? i.setLineDash([Math.ceil(4 * t / 3), Math.ceil(4 * t / 3)]) : i.setLineDash([Math.ceil(6 * t), Math.ceil(6 * t)]) : "dotted" == e && i.setLineDash([t, t]), i.setStrokeStyle(n);
          },
          rt = function rt(t, e, n, r, o, s, a, h, d, c, l, f, p, g, v) {
            i.save(), i.setLineCap(v ? "square" : u), i.setLineWidth(f), nt(f, p, g), i.beginPath(), i.arc(t, e, a, Math.PI * d, Math.PI * c), i.lineTo(n, r), i.arc(o, s, h, Math.PI * c, Math.PI * l), i.stroke(), i.restore();
          };
        if (i.save(), a && !h && !l && !d && !c) return i.setLineWidth(v), nt(v, y, b), this.roundRect(o, s, n, r, f, !1, !!b), void i.restore();
        w && rt(o + n - tt, s + r - tt, o + it, s + r, o + it, s + r - it, tt, it, .25, .5, .75, w, z, M, D && j), D && rt(o + it, s + r - it, o, s + J, o + J, s + J, it, J, .75, 1, 1.25, D, _, V, W && w), W && rt(o + J, s + J, o + n - Z, s, o + n - Z, s + Z, J, Z, 1.25, 1.5, 1.75, W, O, T, D && j), j && rt(o + n - Z, s + Z, o + n, s + r - tt, o + n - tt, s + r - tt, Z, tt, 1.75, 2, .25, j, E, U, W && w);
      }
    }, n.prototype.setOpacity = function (t) {
      var e = t.opacity,
        i = void 0 === e ? 1 : e;
      this.ctx.setGlobalAlpha(i);
    }, n.prototype.drawPattern = function (t, n, r) {
      return e(this, void 0, void 0, function () {
        var e = this;
        return i(this, function (i) {
          return [2, new Promise(function (i, o) {
            e.drawView(n, r, !0, !1, !0);
            var s = e,
              a = s.ctx;
            s.canvas;
            var h = n.width,
              d = n.height,
              c = n.left,
              l = n.top,
              f = r || {},
              u = f.borderRadius,
              p = void 0 === u ? 0 : u,
              g = f.backgroundImage,
              v = f.backgroundRepeat,
              y = void 0 === v ? "repeat" : v;
            g && function (t) {
              var o = a.createPattern(t.src, y);
              a.setFillStyle(o), e.roundRect(c, l, h, d, p, !0, !1), e.setBorder(n, r), i();
            }(t);
          })];
        });
      });
    }, n.prototype.drawView = function (t, e, i, n, r) {
      void 0 === i && (i = !0), void 0 === n && (n = !0), void 0 === r && (r = !0);
      var o = this.ctx,
        s = t.width,
        a = t.height,
        h = t.left,
        d = t.top,
        c = e || {},
        l = c.borderRadius,
        f = void 0 === l ? 0 : l,
        u = c.backgroundColor,
        p = void 0 === u ? "transparent" : u,
        g = c.overflow;
      e.opacity && this.setOpacity(e), this.setTransform(t, e), r && (o.save(), this.setShadow(e)), i && this.setBackground(p, s, a, h, d), e.clipPath ? this.clipPath(h, d, s, a, e.clipPath, i, !1) : this.roundRect(h, d, s, a, f, i, !1), r && o.restore(), n && this.setBorder(t, e), "hidden" == g && o.clip();
    }, n.prototype.drawImage = function (t, n, r, s) {
      return void 0 === n && (n = {}), void 0 === r && (r = {}), void 0 === s && (s = !0), e(this, void 0, void 0, function () {
        var a = this;
        return i(this, function (h) {
          switch (h.label) {
            case 0:
              return [4, new Promise(function (h, d) {
                return e(a, void 0, void 0, function () {
                  var e,
                    a,
                    d,
                    c,
                    l,
                    f,
                    u,
                    p,
                    g,
                    v,
                    y,
                    b,
                    x,
                    m,
                    w,
                    S,
                    z,
                    B,
                    M,
                    I,
                    P,
                    W = this;
                  return i(this, function (i) {
                    return e = this.ctx, a = r.borderRadius, d = void 0 === a ? 0 : a, c = r.backgroundColor, l = void 0 === c ? "transparent" : c, f = r.objectFit, u = void 0 === f ? "fill" : f, p = r.backgroundSize, g = void 0 === p ? "fill" : p, v = r.objectPosition, y = r.backgroundPosition, b = r.boxShadow, r.backgroundImage && (u = g, v = y), b && this.drawView(n, Object.assign(r, {
                      backgroundColor: l || b && (l || "#ffffff")
                    }), !0, !1, !0), x = n.width, m = n.height, w = n.left, S = n.top, e.save(), z = n.contentSize.left - n.borderSize.left, B = n.contentSize.top - n.borderSize.top, s || (this.setOpacity(r), this.setTransform(n, r), this.setBackground(l, x, m, w, S), this.roundRect(w, S, x, m, d, !!(d || !b && l), !1)), w += z, S += B, e.clip(), M = function M(t) {
                      if ("fill" !== u) {
                        var i = function (t, e, i) {
                            var n = t.objectFit,
                              r = t.objectPosition,
                              o = e.width / e.height,
                              s = i.width / i.height,
                              a = 1;
                            "contain" == n && o >= s || "cover" == n && o < s ? a = e.height / i.height : ("contain" == n && o < s || "cover" == n && o >= s) && (a = e.width / i.width);
                            var h = i.width * a,
                              d = i.height * a,
                              c = r || [],
                              l = c[0],
                              f = c[1],
                              u = /^\d+px|rpx$/.test(l) ? O(l, e.width) : (e.width - h) * (L(l) ? O(l, 1) : {
                                left: 0,
                                center: .5,
                                right: 1
                              }[l || "center"]),
                              p = /^\d+px|rpx$/.test(f) ? O(f, e.height) : (e.height - d) * (L(f) ? O(f, 1) : {
                                top: 0,
                                center: .5,
                                bottom: 1
                              }[f || "center"]),
                              g = function g(t, e) {
                                return [(t - u) / a, (e - p) / a];
                              },
                              v = g(0, 0),
                              y = v[0],
                              b = v[1],
                              x = g(e.width, e.height),
                              m = x[0],
                              w = x[1];
                            return {
                              sx: Math.max(y, 0),
                              sy: Math.max(b, 0),
                              sw: Math.min(m - y, i.width),
                              sh: Math.min(w - b, i.height),
                              dx: Math.max(u, 0),
                              dy: Math.max(p, 0),
                              dw: Math.min(h, e.width),
                              dh: Math.min(d, e.height)
                            };
                          }({
                            objectFit: u,
                            objectPosition: v
                          }, n.contentSize, t),
                          r = i.sx,
                          s = i.sy,
                          a = i.sh,
                          h = i.sw,
                          d = i.dx,
                          c = i.dy,
                          l = i.dh,
                          f = i.dw;
                        k == o.MP_BAIDU ? e.drawImage(t.src, d + w, c + S, f, l, r, s, h, a) : e.drawImage(t.src, r, s, h, a, d + w, c + S, f, l);
                      } else e.drawImage(t.src, w, S, x, m);
                    }, I = function I() {
                      e.restore(), W.drawView(n, r, !1, !0, !1), h(1);
                    }, P = function P(t) {
                      M(t), I();
                    }, P(t), [2];
                  });
                });
              })];
            case 1:
              return h.sent(), [2];
          }
        });
      });
    }, n.prototype.drawText = function (t, e, i, n) {
      var r = this.ctx,
        o = e.borderSize,
        s = e.contentSize,
        a = e.left,
        h = e.top,
        d = s.width,
        c = s.height,
        l = s.left - o.left,
        f = s.top - o.top,
        u = i.color,
        p = void 0 === u ? "#000000" : u,
        g = i.lineHeight,
        v = void 0 === g ? "1.4em" : g,
        y = i.fontSize,
        b = void 0 === y ? 14 : y,
        x = i.fontWeight,
        m = i.fontFamily,
        w = i.fontStyle,
        S = i.textAlign,
        z = void 0 === S ? "left" : S,
        B = i.verticalAlign,
        M = void 0 === B ? pt : B,
        I = i.backgroundColor,
        k = i.lineClamp,
        P = i.backgroundClip,
        W = i.textShadow,
        R = i.textDecoration;
      if (this.drawView(e, i, P != ct), v = O(v, b), t) {
        switch (r.save(), this.setShadow({
          boxShadow: W
        }), a += l, h += f, r.setFonts({
          fontFamily: m,
          fontSize: b,
          fontWeight: x,
          fontStyle: w
        }), r.setTextBaseline(pt), r.setTextAlign(z), P ? this.setBackground(I, d, c, a, h) : r.setFillStyle(p), z) {
          case vt:
            break;
          case yt:
            a += .5 * d;
            break;
          case bt:
            a += d;
        }
        var L = n.lines * v,
          T = Math.ceil((c - L) / 2);
        switch (T < 0 && (T = 0), M) {
          case ut:
            break;
          case pt:
            h += T;
            break;
          case gt:
            h += 2 * T;
        }
        var A = n.fontHeight,
          F = n.descent,
          j = (v - A) / 2,
          C = function C(t) {
            var e = r.measureText(t),
              i = e.actualBoundingBoxDescent,
              n = void 0 === i ? 0 : i,
              o = e.actualBoundingBoxAscent,
              s = void 0 === o ? 0 : o,
              a = n + s || .7 * b + 1;
            return M == ut ? {
              fix: s,
              height: a,
              lineY: v - a
            } : M == pt ? {
              fix: v / 2 + n / 4,
              height: a,
              lineY: (v - a) / 2
            } : M == gt ? {
              fix: v - n,
              height: a,
              lineY: 0
            } : {
              fix: 0,
              height: 0,
              lineY: 0
            };
          },
          E = function E(t, e, i) {
            var o = t;
            switch (z) {
              case vt:
                o += i;
                break;
              case yt:
                o = (t -= i / 2) + i;
                break;
              case bt:
                o = t, t -= i;
            }
            if (R) {
              r.setLineWidth(b / 13), r.beginPath();
              var s = .1 * n.fontHeight;
              /\bunderline\b/.test(R) && (F || (e += j / 2), r.moveTo(t, e + s), r.lineTo(o, e + s)), /\boverline\b/.test(R) && (F || (e -= j / 2), r.moveTo(t, e - n.fontHeight - s), r.lineTo(o, e - n.fontHeight - s)), /\bline-through\b/.test(R) && (r.moveTo(t, e - .5 * n.fontHeight), r.lineTo(o, e - .5 * n.fontHeight)), r.closePath(), r.setStrokeStyle(p), r.stroke();
            }
          };
        if (!n.widths || 1 == n.widths.length && n.widths[0].total <= s.width) {
          var H = C(t),
            U = H.fix,
            Y = H.lineY;
          return r.fillText(t, a, h + U), E(a, (h += v) - Y, n && n.widths && n.widths[0].total || n.text), r.restore(), void this.setBorder(e, i);
        }
        for (var $ = t.split(""), D = h, X = a, _ = "", N = 0, V = 0; V <= $.length; V++) {
          var G = $[V] || "",
            q = "\n" === G,
            J = "" == G,
            Q = _ + (G = q ? "" : G),
            Z = r.measureText(Q).width;
          if (N >= k) break;
          if (X = a, Z > s.width || q || J) {
            if (N++, _ = J && Z <= s.width ? Q : _, N === k && Z > d) {
              for (; r.measureText("".concat(_, "...")).width > s.width && !(_.length <= 1);) {
                _ = _.substring(0, _.length - 1);
              }
              _ += "...";
            }
            var K = C(_);
            U = K.fix, Y = K.lineY;
            if (r.fillText(_, X, h + U), E(X, (h += v) - Y, Z), _ = G, h > D + c) break;
          } else _ = Q;
        }
        r.restore();
      }
    }, n.prototype.source = function (t) {
      var n;
      return e(this, void 0, void 0, function () {
        var e,
          r,
          o,
          s = this;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              if (this.node = null, e = +new Date(), "{}" == JSON.stringify(t)) return [2];
              if (!t.type) for (r in t.type = ft, t.css = t.css || {}, t) {
                ["views", "children", "type", "css"].includes(r) || (t.css[r] = t[r], delete t[r]);
              }
              return (null === (n = t.css) || void 0 === n ? void 0 : n.width) || t.css || (t.css = {}), [4, this.create(t)];
            case 1:
              return o = i.sent(), this.size = (null == o ? void 0 : o.layout()) || {}, this.node = o, this.onEffectFinished().then(function (t) {
                return s.lifecycle("onEffectSuccess", t);
              }).catch(function (t) {
                return s.lifecycle("onEffectFail", t);
              }), console.log("布局用时：" + (+new Date() - e) + "ms"), [2, this.size];
          }
        });
      });
    }, n.prototype.getImageInfo = function (t) {
      return this.imageBus[t] || (this.imageBus[t] = this.createImage(t, this.useCORS)), this.imageBus[t];
    }, n.prototype.create = function (n, r) {
      var o, s;
      return e(this, void 0, void 0, function () {
        var e, a, h, d, c, l, f, u, p, g, v, y, b, x, m, S, z;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              if (e = n.type == dt, a = [ct, lt].includes(n.type), h = n.css || {}, d = h.backgroundImage, c = h.display, e && !n.src && !n.url || a && !n.text) return [2];
              if (c == w) return [2];
              if (a && (n.text = String(n.text)), !(e || n.type == ft && d)) return [3, 4];
              l = e ? n.src : "", f = /url\((.+)\)/, d && (null === (o = f.exec(d)) || void 0 === o ? void 0 : o[1]) && (l = (null === (s = f.exec(d)) || void 0 === s ? void 0 : s[1]) || ""), i.label = 1;
            case 1:
              return i.trys.push([1, 3,, 4]), [4, this.getImageInfo(l)];
            case 2:
              return u = i.sent(), p = u.width, g = u.height, !(v = u.path) && e ? [2] : (v && (n.attributes = Object.assign(n.attributes || {}, {
                width: p,
                height: g,
                path: v,
                src: v,
                naturalSrc: l
              })), [3, 4]);
            case 3:
              return y = i.sent(), n.type != ft ? [2] : (this.lifecycle("onEffectFail", _t(_t({}, y), {
                src: l
              })), [3, 4]);
            case 4:
              if (this.count += 1, b = new at(n, r, this.root, this.ctx), !(x = n.views || n.children)) return [3, 8];
              m = 0, i.label = 5;
            case 5:
              return m < x.length ? (S = x[m], [4, this.create(S, b)]) : [3, 8];
            case 6:
              (z = i.sent()) && b.add(z), i.label = 7;
            case 7:
              return m++, [3, 5];
            case 8:
              return [2, b];
          }
        });
      });
    }, n.prototype.drawNode = function (t, n) {
      return void 0 === n && (n = !1), e(this, void 0, void 0, function () {
        var e, r, o, s, a, h, d, c, l, f, u, p, g, v, y, b, x, m, w, S;
        return i(this, function (i) {
          switch (i.label) {
            case 0:
              return e = t.layoutBox, r = t.computedStyle, o = t.attributes, s = t.name, a = t.children, h = t.fixedLine, d = t.attributes, c = d.src, l = d.text, ["fixed"].includes(r.position) && !n ? [2] : (this.ctx.save(), s !== ft ? [3, 7] : c ? r.backgroundRepeat ? [4, this.drawPattern(o, e, r)] : [3, 2] : [3, 5]);
            case 1:
              return i.sent(), [3, 4];
            case 2:
              return [4, this.drawImage(o, e, r, !1)];
            case 3:
              i.sent(), i.label = 4;
            case 4:
              return [3, 6];
            case 5:
              this.drawView(e, r), i.label = 6;
            case 6:
              return [3, 10];
            case 7:
              return s === dt && c ? [4, this.drawImage(o, e, r, !1)] : [3, 9];
            case 8:
              return i.sent(), [3, 10];
            case 9:
              s === ct ? this.drawText(l, e, r, o) : s === lt && ht.api && ht.api.draw(l, this, e, r), i.label = 10;
            case 10:
              if (this.progress += 1, u = (f = h || {}).beforeElements, p = f.afterElements, !u) return [3, 14];
              g = 0, v = u, i.label = 11;
            case 11:
              return g < v.length ? (S = v[g], [4, this.drawNode(S)]) : [3, 14];
            case 12:
              i.sent(), i.label = 13;
            case 13:
              return g++, [3, 11];
            case 14:
              if (!a) return [3, 18];
              y = Object.values ? Object.values(a) : Object.keys(a).map(function (t) {
                return a[t];
              }), b = 0, x = y, i.label = 15;
            case 15:
              return b < x.length ? "absolute" === (S = x[b]).computedStyle.position ? [3, 17] : [4, this.drawNode(S)] : [3, 18];
            case 16:
              i.sent(), i.label = 17;
            case 17:
              return b++, [3, 15];
            case 18:
              if (!p) return [3, 22];
              m = 0, w = p, i.label = 19;
            case 19:
              return m < w.length ? (S = w[m], [4, this.drawNode(S)]) : [3, 22];
            case 20:
              i.sent(), i.label = 21;
            case 21:
              return m++, [3, 19];
            case 22:
              return this.ctx.restore(), [2];
          }
        });
      });
    }, n.prototype.render = function (t) {
      var n = this;
      return void 0 === t && (t = 30), new Promise(function (r, o) {
        return e(n, void 0, void 0, function () {
          var e, n, s, a, h, d, c, l, f, u;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return e = +new Date(), this.init(), [4, (p = t, void 0 === p && (p = 0), new Promise(function (t) {
                  return setTimeout(t, p);
                }))];
              case 1:
                i.sent(), i.label = 2;
              case 2:
                if (i.trys.push([2, 14,, 15]), !this.node) return [3, 12];
                if (n = this.root.fixedLine || {}, s = n.beforeElements, a = n.afterElements, !s) return [3, 6];
                h = 0, d = s, i.label = 3;
              case 3:
                return h < d.length ? (f = d[h], [4, this.drawNode(f, !0)]) : [3, 6];
              case 4:
                i.sent(), i.label = 5;
              case 5:
                return h++, [3, 3];
              case 6:
                return [4, this.drawNode(this.node)];
              case 7:
                if (i.sent(), !a) return [3, 11];
                c = 0, l = a, i.label = 8;
              case 8:
                return c < l.length ? (f = l[c], [4, this.drawNode(f, !0)]) : [3, 11];
              case 9:
                i.sent(), i.label = 10;
              case 10:
                return c++, [3, 8];
              case 11:
                return r(this.node), [3, 13];
              case 12:
                this.lifecycle("onEffectFail", "node is empty"), i.label = 13;
              case 13:
                return [3, 15];
              case 14:
                return u = i.sent(), this.lifecycle("onEffectFail", u), o(u), [3, 15];
              case 15:
                return console.log("渲染用时：" + (+new Date() - e - 30) + "ms"), [2];
            }
            var p;
          });
        });
      });
    }, n.prototype.onEffectFinished = function () {
      var t = this,
        e = Object.keys(this.imageBus).map(function (e) {
          return t.imageBus[e];
        });
      return Promise.all(e);
    }, n.prototype.destroy = function () {
      this.node = [];
    }, n.prototype.save = function (t) {
      try {
        var e = t || {},
          i = e.fileType,
          n = void 0 === i ? "png" : i,
          r = e.quality,
          o = void 0 === r ? 1 : r;
        return this.canvas.toDataURL("image/".concat(n), o);
      } catch (t) {
        return this.lifecycle("onEffectFail", "image cross domain"), t;
      }
    }, n;
  }();
exports.default = exports.Painter = xt;
o.WEB == k && (window.Painter = xt);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 1438:
/*!*************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/components/w-compress/compress.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 图片压缩
 * @param {String} imgUrl  需要压缩的图片路径
 * @param {Object} self	必传，当前组件对象
 * @param {Object} options 压缩参数
 * 		width: 压缩到多宽，默认图片宽度(待优化，传入宽度，应计算高度)
 * 		height: 压缩到多高，默认图片高度
 * 		pixels: 压缩图片的最大分辨率，默认二百万
 * 		quality: 压缩质量，默认0.8
 * 		type: 获取的base64类型，默认jpg
 * 		base64: 是否返回base64，默认true(非H5有效)
 * @return {Promise}
 * 		reject
 * 			code
 * 				-1: 获取图片信息错误
 * 				-2: 极大可能创建图片对象出错(h5会出现，出现概率无限接近0)
 * 				-3: canvas转图片错误(小程序会出现)
 * 				-4: 图片转base64错误(小程序会出现)
 */

// 图片分辨率压缩
var calcImageSize = function calcImageSize(res, pixels) {
  var imgW, imgH;
  imgW = res.width;
  imgH = res.height;
  var ratio;
  if ((ratio = imgW * imgH / pixels) > 1) {
    ratio = Math.sqrt(ratio);
    imgW = parseInt(imgW / ratio);
    imgH = parseInt(imgH / ratio);
  } else {
    ratio = 1;
  }
  return {
    imgW: imgW,
    imgH: imgH
  };
};
var urlTobase64 = function urlTobase64(url, type) {
  return new Promise(function (resolve, reject) {
    uni.getFileSystemManager().readFile({
      filePath: url,
      encoding: 'base64',
      success: function success(res) {
        var base64 = res.data;
        base64 = "data:image/".concat(type, ";base64,").concat(base64);
        resolve(base64);
      }
    });
  });
};
var compress = function compress(imgUrl, slef) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  /*************** 参数默认值 ***************/
  var MAX_PIXELS = 2000000; // 最大分辨率，宽 * 高 的值
  var MAX_QUALITY = 0.8; // 压缩质量
  var IMG_TYPE = 'jpg';
  var CANVAS_ID = 'compress_canvas';
  var BASE_64 = false;
  return new Promise(function (resolve, reject) {
    uni.getImageInfo({
      src: imgUrl,
      success: function success(res) {
        var pixels = options.pixels || MAX_PIXELS;
        var quality = options.quality || MAX_QUALITY;
        var type = options.type || IMG_TYPE;
        var canvasId = options.canvasId || CANVAS_ID;
        var isBase64 = options.base64 || BASE_64;
        var _calcImageSize = calcImageSize(res, pixels),
          imgW = _calcImageSize.imgW,
          imgH = _calcImageSize.imgH;
        var w = options.width || imgW;
        var h = options.height || imgH;
        type = type == 'png' ? 'png' : 'jpg', console.log("%c \u5BBD: ".concat(w, " %c \u9AD8: ").concat(h, " %c \u5206\u8FA8\u7387: ").concat(w * h, " %c \u8D28\u91CF: ").concat(quality, " %c \u7C7B\u578B: ").concat(type), 'color:#f00', 'background-color:#f60;color:#fff', 'color:#F00', 'background-color:#f60;color:#fff', 'color:#F00');

        // 非h5

        slef.height = h;
        slef.width = w;
        slef.$nextTick(function () {
          var canvas = null;
          if (!canvas) {
            canvas = uni.createCanvasContext(canvasId, slef);
          }
          canvas.drawImage(res.path, 0, 0, w, h);
          canvas.draw();
          setTimeout(function () {
            uni.canvasToTempFilePath({
              canvasId: canvasId,
              x: 0,
              y: 0,
              width: w,
              height: h,
              destWidth: w,
              destHeight: h,
              fileType: type,
              quality: quality,
              success: function success(file) {
                if (isBase64) {
                  urlTobase64(file.tempFilePath, type).then(function (res) {
                    canvas = null;
                    resolve(res);
                  }).catch(function (e) {
                    reject({
                      code: -4,
                      msg: '图片转base64错误',
                      data: e
                    });
                  });
                } else {
                  resolve(file.tempFilePath);
                }
              },
              fail: function fail(e) {
                reject({
                  code: -3,
                  msg: 'canvas转图片错误',
                  data: e
                });
              }
            }, slef);
          }, 500);
        });
      }
    });
  });
};
var _default = compress;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1495:
/*!********************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/components/w-picker/areadata/areadata.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cityData = [{
  value: '110000',
  label: '北京市',
  children: [{
    value: "110100",
    label: "北京市",
    children: [{
      value: "110101",
      label: "东城区"
    }, {
      value: "110102",
      label: "西城区"
    }, {
      value: "110105",
      label: "朝阳区"
    }, {
      value: "110106",
      label: "丰台区"
    }, {
      value: "110107",
      label: "石景山区"
    }, {
      value: "110108",
      label: "海淀区"
    }, {
      value: "110109",
      label: "门头沟区"
    }, {
      value: "110111",
      label: "房山区"
    }, {
      value: "110112",
      label: "通州区"
    }, {
      value: "110113",
      label: "顺义区"
    }, {
      value: "110114",
      label: "昌平区"
    }, {
      value: "110115",
      label: "大兴区"
    }, {
      value: "110116",
      label: "怀柔区"
    }, {
      value: "110117",
      label: "平谷区"
    }, {
      value: "110118",
      label: "密云区"
    }, {
      value: "110119",
      label: "延庆区"
    }]
  }]
}, {
  value: '120000',
  label: '天津市',
  children: [{
    value: "120100",
    label: "天津市",
    children: [{
      value: "120101",
      label: "和平区"
    }, {
      value: "120102",
      label: "河东区"
    }, {
      value: "120103",
      label: "河西区"
    }, {
      value: "120104",
      label: "南开区"
    }, {
      value: "120105",
      label: "河北区"
    }, {
      value: "120106",
      label: "红桥区"
    }, {
      value: "120110",
      label: "东丽区"
    }, {
      value: "120111",
      label: "西青区"
    }, {
      value: "120112",
      label: "津南区"
    }, {
      value: "120113",
      label: "北辰区"
    }, {
      value: "120114",
      label: "武清区"
    }, {
      value: "120115",
      label: "宝坻区"
    }, {
      value: "120116",
      label: "滨海新区"
    }, {
      value: "120117",
      label: "宁河区"
    }, {
      value: "120118",
      label: "静海区"
    }, {
      value: "120119",
      label: "蓟州区"
    }]
  }]
}, {
  value: '130000',
  label: '河北省',
  children: [{
    value: "130100",
    label: "石家庄市",
    children: [{
      value: "130102",
      label: "长安区"
    }, {
      value: "130104",
      label: "桥西区"
    }, {
      value: "130105",
      label: "新华区"
    }, {
      value: "130107",
      label: "井陉矿区"
    }, {
      value: "130108",
      label: "裕华区"
    }, {
      value: "130109",
      label: "藁城区"
    }, {
      value: "130110",
      label: "鹿泉区"
    }, {
      value: "130111",
      label: "栾城区"
    }, {
      value: "130121",
      label: "井陉县"
    }, {
      value: "130123",
      label: "正定县"
    }, {
      value: "130125",
      label: "行唐县"
    }, {
      value: "130126",
      label: "灵寿县"
    }, {
      value: "130127",
      label: "高邑县"
    }, {
      value: "130128",
      label: "深泽县"
    }, {
      value: "130129",
      label: "赞皇县"
    }, {
      value: "130130",
      label: "无极县"
    }, {
      value: "130131",
      label: "平山县"
    }, {
      value: "130132",
      label: "元氏县"
    }, {
      value: "130133",
      label: "赵县"
    }, {
      value: "130181",
      label: "辛集市"
    }, {
      value: "130183",
      label: "晋州市"
    }, {
      value: "130184",
      label: "新乐市"
    }, {
      value: "130172",
      label: "石家庄循环化工园区"
    }, {
      value: "130171",
      label: "石家庄高新技术产业开发区"
    }]
  }, {
    value: "130200",
    label: "唐山市",
    children: [{
      value: "130202",
      label: "路南区"
    }, {
      value: "130203",
      label: "路北区"
    }, {
      value: "130204",
      label: "古冶区"
    }, {
      value: "130205",
      label: "开平区"
    }, {
      value: "130207",
      label: "丰南区"
    }, {
      value: "130208",
      label: "丰润区"
    }, {
      value: "130209",
      label: "曹妃甸区"
    }, {
      value: "130223",
      label: "滦县"
    }, {
      value: "130224",
      label: "滦南县"
    }, {
      value: "130225",
      label: "乐亭县"
    }, {
      value: "130227",
      label: "迁西县"
    }, {
      value: "130229",
      label: "玉田县"
    }, {
      value: "130281",
      label: "遵化市"
    }, {
      value: "130283",
      label: "迁安市"
    }, {
      value: "130271",
      label: "唐山市芦台经济技术开发区"
    }, {
      value: "130272",
      label: "唐山市汉沽管理区"
    }, {
      value: "130273",
      label: "唐山高新技术产业开发区"
    }, {
      value: "130274",
      label: "河北唐山海港经济开发区"
    }]
  }, {
    value: "130300",
    label: "秦皇岛市",
    children: [{
      value: "130302",
      label: "海港区"
    }, {
      value: "130303",
      label: "山海关区"
    }, {
      value: "130304",
      label: "北戴河区"
    }, {
      value: "130321",
      label: "青龙满族自治县"
    }, {
      value: "130322",
      label: "昌黎县"
    }, {
      value: "130306",
      label: "抚宁区"
    }, {
      value: "130324",
      label: "卢龙县"
    }, {
      value: "130371",
      label: "秦皇岛市经济技术开发区"
    }, {
      value: "130372",
      label: "北戴河新区"
    }]
  }, {
    value: "130400",
    label: "邯郸市",
    children: [{
      value: "130402",
      label: "邯山区"
    }, {
      value: "130403",
      label: "丛台区"
    }, {
      value: "130404",
      label: "复兴区"
    }, {
      value: "130406",
      label: "峰峰矿区"
    }, {
      value: "130421",
      label: "邯郸县"
    }, {
      value: "130423",
      label: "临漳县"
    }, {
      value: "130424",
      label: "成安县"
    }, {
      value: "130425",
      label: "大名县"
    }, {
      value: "130426",
      label: "涉县"
    }, {
      value: "130427",
      label: "磁县"
    }, {
      value: "130407",
      label: "肥乡区"
    }, {
      value: "130408",
      label: "永年区"
    }, {
      value: "130430",
      label: "邱县"
    }, {
      value: "130431",
      label: "鸡泽县"
    }, {
      value: "130432",
      label: "广平县"
    }, {
      value: "130433",
      label: "馆陶县"
    }, {
      value: "130434",
      label: "魏县"
    }, {
      value: "130435",
      label: "曲周县"
    }, {
      value: "130481",
      label: "武安市"
    }, {
      value: "130471",
      label: "邯郸经济技术开发区"
    }, {
      value: "130473",
      label: "邯郸冀南新区"
    }]
  }, {
    value: "130500",
    label: "邢台市",
    children: [{
      value: "130502",
      label: "桥东区"
    }, {
      value: "130503",
      label: "桥西区"
    }, {
      value: "130521",
      label: "邢台县"
    }, {
      value: "130522",
      label: "临城县"
    }, {
      value: "130523",
      label: "内丘县"
    }, {
      value: "130524",
      label: "柏乡县"
    }, {
      value: "130525",
      label: "隆尧县"
    }, {
      value: "130526",
      label: "任县"
    }, {
      value: "130527",
      label: "南和县"
    }, {
      value: "130528",
      label: "宁晋县"
    }, {
      value: "130529",
      label: "巨鹿县"
    }, {
      value: "130530",
      label: "新河县"
    }, {
      value: "130531",
      label: "广宗县"
    }, {
      value: "130532",
      label: "平乡县"
    }, {
      value: "130533",
      label: "威县"
    }, {
      value: "130534",
      label: "清河县"
    }, {
      value: "130535",
      label: "临西县"
    }, {
      value: "130581",
      label: "南宫市"
    }, {
      value: "130582",
      label: "沙河市"
    }, {
      value: "130571",
      label: "河北邢台经济开发区"
    }]
  }, {
    value: "130600",
    label: "保定市",
    children: [{
      value: "130602",
      label: "竞秀区"
    }, {
      value: "130606",
      label: "莲池区"
    }, {
      value: "130607",
      label: "满城区"
    }, {
      value: "130608",
      label: "清苑区"
    }, {
      value: "130623",
      label: "涞水县"
    }, {
      value: "130624",
      label: "阜平县"
    }, {
      value: "130609",
      label: "徐水区"
    }, {
      value: "130626",
      label: "定兴县"
    }, {
      value: "130627",
      label: "唐县"
    }, {
      value: "130628",
      label: "高阳县"
    }, {
      value: "130629",
      label: "容城县"
    }, {
      value: "130630",
      label: "涞源县"
    }, {
      value: "130631",
      label: "望都县"
    }, {
      value: "130632",
      label: "安新县"
    }, {
      value: "130633",
      label: "易县"
    }, {
      value: "130634",
      label: "曲阳县"
    }, {
      value: "130635",
      label: "蠡县"
    }, {
      value: "130636",
      label: "顺平县"
    }, {
      value: "130637",
      label: "博野县"
    }, {
      value: "130638",
      label: "雄县"
    }, {
      value: "130681",
      label: "涿州市"
    }, {
      value: "130682",
      label: "定州市"
    }, {
      value: "130683",
      label: "安国市"
    }, {
      value: "130684",
      label: "高碑店市"
    }, {
      value: "130671",
      label: "保定高新技术产业开发区"
    }, {
      value: "130672",
      label: "保定白沟新城"
    }]
  }, {
    value: "130700",
    label: "张家口市",
    children: [{
      value: "130702",
      label: "桥东区"
    }, {
      value: "130703",
      label: "桥西区"
    }, {
      value: "130705",
      label: "宣化区"
    }, {
      value: "130706",
      label: "下花园区"
    }, {
      value: "130708",
      label: "万全区"
    }, {
      value: "130709",
      label: "崇礼区"
    }, {
      value: "130722",
      label: "张北县"
    }, {
      value: "130723",
      label: "康保县"
    }, {
      value: "130724",
      label: "沽源县"
    }, {
      value: "130725",
      label: "尚义县"
    }, {
      value: "130726",
      label: "蔚县"
    }, {
      value: "130727",
      label: "阳原县"
    }, {
      value: "130728",
      label: "怀安县"
    }, {
      value: "130730",
      label: "怀来县"
    }, {
      value: "130731",
      label: "涿鹿县"
    }, {
      value: "130732",
      label: "赤城县"
    }, {
      value: "130733",
      label: "崇礼县"
    }, {
      value: "130771",
      label: "张家口市高新技术产业开发区"
    }, {
      value: "130772",
      label: "张家口市察北管理区"
    }, {
      value: "130773",
      label: "张家口市塞北管理区"
    }]
  }, {
    value: "130800",
    label: "承德市",
    children: [{
      value: "130802",
      label: "双桥区"
    }, {
      value: "130803",
      label: "双滦区"
    }, {
      value: "130804",
      label: "鹰手营子矿区"
    }, {
      value: "130821",
      label: "承德县"
    }, {
      value: "130822",
      label: "兴隆县"
    }, {
      value: "130881",
      label: "平泉市"
    }, {
      value: "130824",
      label: "滦平县"
    }, {
      value: "130825",
      label: "隆化县"
    }, {
      value: "130826",
      label: "丰宁满族自治县"
    }, {
      value: "130827",
      label: "宽城满族自治县"
    }, {
      value: "130828",
      label: "围场满族蒙古族自治县"
    }, {
      value: "130871",
      label: "承德高新技术产业开发区"
    }]
  }, {
    value: "130900",
    label: "沧州市",
    children: [{
      value: "130902",
      label: "新华区"
    }, {
      value: "130903",
      label: "运河区"
    }, {
      value: "130921",
      label: "沧县"
    }, {
      value: "130922",
      label: "青县"
    }, {
      value: "130923",
      label: "东光县"
    }, {
      value: "130924",
      label: "海兴县"
    }, {
      value: "130925",
      label: "盐山县"
    }, {
      value: "130926",
      label: "肃宁县"
    }, {
      value: "130927",
      label: "南皮县"
    }, {
      value: "130928",
      label: "吴桥县"
    }, {
      value: "130929",
      label: "献县"
    }, {
      value: "130930",
      label: "孟村回族自治县"
    }, {
      value: "130981",
      label: "泊头市"
    }, {
      value: "130982",
      label: "任丘市"
    }, {
      value: "130983",
      label: "黄骅市"
    }, {
      value: "130984",
      label: "河间市"
    }, {
      value: "130971",
      label: "河北沧州经济开发区"
    }, {
      value: "130972",
      label: "沧州高新技术产业开发区"
    }, {
      value: "130973",
      label: "沧州渤海新区"
    }]
  }, {
    value: "131000",
    label: "廊坊市",
    children: [{
      value: "131002",
      label: "安次区"
    }, {
      value: "131003",
      label: "广阳区"
    }, {
      value: "131022",
      label: "固安县"
    }, {
      value: "131023",
      label: "永清县"
    }, {
      value: "131024",
      label: "香河县"
    }, {
      value: "131025",
      label: "大城县"
    }, {
      value: "131026",
      label: "文安县"
    }, {
      value: "131028",
      label: "大厂回族自治县"
    }, {
      value: "131071",
      label: "廊坊经济技术开发区"
    }, {
      value: "131081",
      label: "霸州市"
    }, {
      value: "131082",
      label: "三河市"
    }]
  }, {
    value: "131100",
    label: "衡水市",
    children: [{
      value: "131102",
      label: "桃城区"
    }, {
      value: "131121",
      label: "枣强县"
    }, {
      value: "131122",
      label: "武邑县"
    }, {
      value: "131123",
      label: "武强县"
    }, {
      value: "131124",
      label: "饶阳县"
    }, {
      value: "131125",
      label: "安平县"
    }, {
      value: "131126",
      label: "故城县"
    }, {
      value: "131127",
      label: "景县"
    }, {
      value: "131128",
      label: "阜城县"
    }, {
      value: "131103",
      label: "冀州区"
    }, {
      value: "131182",
      label: "深州市"
    }, {
      value: "131172",
      label: "衡水滨湖新区"
    }, {
      value: "131171",
      label: "河北衡水经济开发区"
    }]
  }]
}, {
  value: '140000',
  label: '山西省',
  children: [{
    value: "140100",
    label: "太原市",
    children: [{
      value: "140105",
      label: "小店区"
    }, {
      value: "140106",
      label: "迎泽区"
    }, {
      value: "140107",
      label: "杏花岭区"
    }, {
      value: "140108",
      label: "尖草坪区"
    }, {
      value: "140109",
      label: "万柏林区"
    }, {
      value: "140110",
      label: "晋源区"
    }, {
      value: "140121",
      label: "清徐县"
    }, {
      value: "140122",
      label: "阳曲县"
    }, {
      value: "140123",
      label: "娄烦县"
    }, {
      value: "140181",
      label: "古交市"
    }, {
      value: "140171",
      label: "山西转型综合改革示范区"
    }]
  }, {
    value: "140200",
    label: "大同市",
    children: [{
      value: "140202",
      label: "城区"
    }, {
      value: "140203",
      label: "矿区"
    }, {
      value: "140211",
      label: "南郊区"
    }, {
      value: "140212",
      label: "新荣区"
    }, {
      value: "140221",
      label: "阳高县"
    }, {
      value: "140222",
      label: "天镇县"
    }, {
      value: "140223",
      label: "广灵县"
    }, {
      value: "140224",
      label: "灵丘县"
    }, {
      value: "140225",
      label: "浑源县"
    }, {
      value: "140226",
      label: "左云县"
    }, {
      value: "140227",
      label: "大同县"
    }, {
      value: "140271",
      label: "山西大同经济开发区"
    }]
  }, {
    value: "140300",
    label: "阳泉市",
    children: [{
      value: "140302",
      label: "城区"
    }, {
      value: "140303",
      label: "矿区"
    }, {
      value: "140311",
      label: "郊区"
    }, {
      value: "140321",
      label: "平定县"
    }, {
      value: "140322",
      label: "盂县"
    }, {
      value: "140371",
      label: "山西阳泉经济开发区"
    }]
  }, {
    value: "140400",
    label: "长治市",
    children: [{
      value: "140421",
      label: "长治县"
    }, {
      value: "140423",
      label: "襄垣县"
    }, {
      value: "140424",
      label: "屯留县"
    }, {
      value: "140425",
      label: "平顺县"
    }, {
      value: "140426",
      label: "黎城县"
    }, {
      value: "140427",
      label: "壶关县"
    }, {
      value: "140428",
      label: "长子县"
    }, {
      value: "140429",
      label: "武乡县"
    }, {
      value: "140430",
      label: "沁县"
    }, {
      value: "140431",
      label: "沁源县"
    }, {
      value: "140481",
      label: "潞城市"
    }, {
      value: "140402",
      label: "城区"
    }, {
      value: "140411",
      label: "郊区"
    }, {
      value: "140471",
      label: "山西长治高新技术产业园区"
    }]
  }, {
    value: "140500",
    label: "晋城市",
    children: [{
      value: "140502",
      label: "城区"
    }, {
      value: "140521",
      label: "沁水县"
    }, {
      value: "140522",
      label: "阳城县"
    }, {
      value: "140524",
      label: "陵川县"
    }, {
      value: "140525",
      label: "泽州县"
    }, {
      value: "140581",
      label: "高平市"
    }]
  }, {
    value: "140600",
    label: "朔州市",
    children: [{
      value: "140602",
      label: "朔城区"
    }, {
      value: "140603",
      label: "平鲁区"
    }, {
      value: "140621",
      label: "山阴县"
    }, {
      value: "140622",
      label: "应县"
    }, {
      value: "140623",
      label: "右玉县"
    }, {
      value: "140624",
      label: "怀仁县"
    }, {
      value: "140671",
      label: "山西朔州经济开发区"
    }]
  }, {
    value: "140700",
    label: "晋中市",
    children: [{
      value: "140702",
      label: "榆次区"
    }, {
      value: "140721",
      label: "榆社县"
    }, {
      value: "140722",
      label: "左权县"
    }, {
      value: "140723",
      label: "和顺县"
    }, {
      value: "140724",
      label: "昔阳县"
    }, {
      value: "140725",
      label: "寿阳县"
    }, {
      value: "140726",
      label: "太谷县"
    }, {
      value: "140727",
      label: "祁县"
    }, {
      value: "140728",
      label: "平遥县"
    }, {
      value: "140729",
      label: "灵石县"
    }, {
      value: "140781",
      label: "介休市"
    }]
  }, {
    value: "140800",
    label: "运城市",
    children: [{
      value: "140802",
      label: "盐湖区"
    }, {
      value: "140821",
      label: "临猗县"
    }, {
      value: "140822",
      label: "万荣县"
    }, {
      value: "140823",
      label: "闻喜县"
    }, {
      value: "140824",
      label: "稷山县"
    }, {
      value: "140825",
      label: "新绛县"
    }, {
      value: "140826",
      label: "绛县"
    }, {
      value: "140827",
      label: "垣曲县"
    }, {
      value: "140828",
      label: "夏县"
    }, {
      value: "140829",
      label: "平陆县"
    }, {
      value: "140830",
      label: "芮城县"
    }, {
      value: "140881",
      label: "永济市"
    }, {
      value: "140882",
      label: "河津市"
    }]
  }, {
    value: "140900",
    label: "忻州市",
    children: [{
      value: "140902",
      label: "忻府区"
    }, {
      value: "140921",
      label: "定襄县"
    }, {
      value: "140922",
      label: "五台县"
    }, {
      value: "140923",
      label: "代县"
    }, {
      value: "140924",
      label: "繁峙县"
    }, {
      value: "140925",
      label: "宁武县"
    }, {
      value: "140926",
      label: "静乐县"
    }, {
      value: "140927",
      label: "神池县"
    }, {
      value: "140928",
      label: "五寨县"
    }, {
      value: "140929",
      label: "岢岚县"
    }, {
      value: "140930",
      label: "河曲县"
    }, {
      value: "140931",
      label: "保德县"
    }, {
      value: "140932",
      label: "偏关县"
    }, {
      value: "140981",
      label: "原平市"
    }, {
      value: "140971",
      label: "五台山风景名胜区"
    }]
  }, {
    value: "141000",
    label: "临汾市",
    children: [{
      value: "141002",
      label: "尧都区"
    }, {
      value: "141021",
      label: "曲沃县"
    }, {
      value: "141022",
      label: "翼城县"
    }, {
      value: "141023",
      label: "襄汾县"
    }, {
      value: "141024",
      label: "洪洞县"
    }, {
      value: "141025",
      label: "古县"
    }, {
      value: "141026",
      label: "安泽县"
    }, {
      value: "141027",
      label: "浮山县"
    }, {
      value: "141028",
      label: "吉县"
    }, {
      value: "141029",
      label: "乡宁县"
    }, {
      value: "141030",
      label: "大宁县"
    }, {
      value: "141031",
      label: "隰县"
    }, {
      value: "141032",
      label: "永和县"
    }, {
      value: "141033",
      label: "蒲县"
    }, {
      value: "141034",
      label: "汾西县"
    }, {
      value: "141081",
      label: "侯马市"
    }, {
      value: "141082",
      label: "霍州市"
    }]
  }, {
    value: "141100",
    label: "吕梁市",
    children: [{
      value: "141102",
      label: "离石区"
    }, {
      value: "141121",
      label: "文水县"
    }, {
      value: "141122",
      label: "交城县"
    }, {
      value: "141123",
      label: "兴县"
    }, {
      value: "141124",
      label: "临县"
    }, {
      value: "141125",
      label: "柳林县"
    }, {
      value: "141126",
      label: "石楼县"
    }, {
      value: "141127",
      label: "岚县"
    }, {
      value: "141128",
      label: "方山县"
    }, {
      value: "141129",
      label: "中阳县"
    }, {
      value: "141130",
      label: "交口县"
    }, {
      value: "141181",
      label: "孝义市"
    }, {
      value: "141182",
      label: "汾阳市"
    }]
  }]
}, {
  value: '150000',
  label: '内蒙古',
  children: [{
    value: "150100",
    label: "呼和浩特市",
    children: [{
      value: "150102",
      label: "新城区"
    }, {
      value: "150103",
      label: "回民区"
    }, {
      value: "150104",
      label: "玉泉区"
    }, {
      value: "150105",
      label: "赛罕区"
    }, {
      value: "150121",
      label: "土默特左旗"
    }, {
      value: "150122",
      label: "托克托县"
    }, {
      value: "150123",
      label: "和林格尔县"
    }, {
      value: "150124",
      label: "清水河县"
    }, {
      value: "150125",
      label: "武川县"
    }, {
      value: "150171",
      label: "呼和浩特金海工业园区"
    }, {
      value: "150172",
      label: "呼和浩特经济技术开发区"
    }]
  }, {
    value: "150200",
    label: "包头市",
    children: [{
      value: "150202",
      label: "东河区"
    }, {
      value: "150203",
      label: "昆都仑区"
    }, {
      value: "150204",
      label: "青山区"
    }, {
      value: "150205",
      label: "石拐区"
    }, {
      value: "150206",
      label: "白云矿区"
    }, {
      value: "150207",
      label: "九原区"
    }, {
      value: "150221",
      label: "土默特右旗"
    }, {
      value: "150222",
      label: "固阳县"
    }, {
      value: "150223",
      label: "达尔罕茂明安联合旗"
    }, {
      value: "150271",
      label: "包头稀土高新技术产业开发区"
    }]
  }, {
    value: "150300",
    label: "乌海市",
    children: [{
      value: "150302",
      label: "海勃湾区"
    }, {
      value: "150303",
      label: "海南区"
    }, {
      value: "150304",
      label: "乌达区"
    }]
  }, {
    value: "150400",
    label: "赤峰市",
    children: [{
      value: "150402",
      label: "红山区"
    }, {
      value: "150403",
      label: "元宝山区"
    }, {
      value: "150404",
      label: "松山区"
    }, {
      value: "150421",
      label: "阿鲁科尔沁旗"
    }, {
      value: "150422",
      label: "巴林左旗"
    }, {
      value: "150423",
      label: "巴林右旗"
    }, {
      value: "150424",
      label: "林西县"
    }, {
      value: "150425",
      label: "克什克腾旗"
    }, {
      value: "150426",
      label: "翁牛特旗"
    }, {
      value: "150428",
      label: "喀喇沁旗"
    }, {
      value: "150429",
      label: "宁城县"
    }, {
      value: "150430",
      label: "敖汉旗"
    }]
  }, {
    value: "150500",
    label: "通辽市",
    children: [{
      value: "150502",
      label: "科尔沁区"
    }, {
      value: "150521",
      label: "科尔沁左翼中旗"
    }, {
      value: "150522",
      label: "科尔沁左翼后旗"
    }, {
      value: "150523",
      label: "开鲁县"
    }, {
      value: "150524",
      label: "库伦旗"
    }, {
      value: "150525",
      label: "奈曼旗"
    }, {
      value: "150526",
      label: "扎鲁特旗"
    }, {
      value: "150581",
      label: "霍林郭勒市"
    }, {
      value: "150571",
      label: "通辽经济技术开发区"
    }]
  }, {
    value: "150600",
    label: "鄂尔多斯市",
    children: [{
      value: "150602",
      label: "东胜区"
    }, {
      value: "150621",
      label: "达拉特旗"
    }, {
      value: "150622",
      label: "准格尔旗"
    }, {
      value: "150623",
      label: "鄂托克前旗"
    }, {
      value: "150624",
      label: "鄂托克旗"
    }, {
      value: "150625",
      label: "杭锦旗"
    }, {
      value: "150626",
      label: "乌审旗"
    }, {
      value: "150627",
      label: "伊金霍洛旗"
    }, {
      value: "150603",
      label: "康巴什区"
    }]
  }, {
    value: "150700",
    label: "呼伦贝尔市",
    children: [{
      value: "150702",
      label: "海拉尔区"
    }, {
      value: "150721",
      label: "阿荣旗"
    }, {
      value: "150722",
      label: "莫力达瓦达斡尔族自治旗"
    }, {
      value: "150723",
      label: "鄂伦春自治旗"
    }, {
      value: "150724",
      label: "鄂温克族自治旗"
    }, {
      value: "150725",
      label: "陈巴尔虎旗"
    }, {
      value: "150726",
      label: "新巴尔虎左旗"
    }, {
      value: "150727",
      label: "新巴尔虎右旗"
    }, {
      value: "150781",
      label: "满洲里市"
    }, {
      value: "150782",
      label: "牙克石市"
    }, {
      value: "150783",
      label: "扎兰屯市"
    }, {
      value: "150784",
      label: "额尔古纳市"
    }, {
      value: "150785",
      label: "根河市"
    }, {
      value: "150703",
      label: "扎赉诺尔区"
    }]
  }, {
    value: "150800",
    label: "巴彦淖尔市",
    children: [{
      value: "150802",
      label: "临河区"
    }, {
      value: "150821",
      label: "五原县"
    }, {
      value: "150822",
      label: "磴口县"
    }, {
      value: "150823",
      label: "乌拉特前旗"
    }, {
      value: "150824",
      label: "乌拉特中旗"
    }, {
      value: "150825",
      label: "乌拉特后旗"
    }, {
      value: "150826",
      label: "杭锦后旗"
    }]
  }, {
    value: "150900",
    label: "乌兰察布市",
    children: [{
      value: "150902",
      label: "集宁区"
    }, {
      value: "150921",
      label: "卓资县"
    }, {
      value: "150922",
      label: "化德县"
    }, {
      value: "150923",
      label: "商都县"
    }, {
      value: "150924",
      label: "兴和县"
    }, {
      value: "150925",
      label: "凉城县"
    }, {
      value: "150926",
      label: "察哈尔右翼前旗"
    }, {
      value: "150927",
      label: "察哈尔右翼中旗"
    }, {
      value: "150928",
      label: "察哈尔右翼后旗"
    }, {
      value: "150929",
      label: "四子王旗"
    }, {
      value: "150981",
      label: "丰镇市"
    }]
  }, {
    value: "152200",
    label: "兴安盟",
    children: [{
      value: "152201",
      label: "乌兰浩特市"
    }, {
      value: "152202",
      label: "阿尔山市"
    }, {
      value: "152221",
      label: "科尔沁右翼前旗"
    }, {
      value: "152222",
      label: "科尔沁右翼中旗"
    }, {
      value: "152223",
      label: "扎赉特旗"
    }, {
      value: "152224",
      label: "突泉县"
    }]
  }, {
    value: "152500",
    label: "锡林郭勒盟",
    children: [{
      value: "152501",
      label: "二连浩特市"
    }, {
      value: "152502",
      label: "锡林浩特市"
    }, {
      value: "152522",
      label: "阿巴嘎旗"
    }, {
      value: "152523",
      label: "苏尼特左旗"
    }, {
      value: "152524",
      label: "苏尼特右旗"
    }, {
      value: "152525",
      label: "东乌珠穆沁旗"
    }, {
      value: "152526",
      label: "西乌珠穆沁旗"
    }, {
      value: "152527",
      label: "太仆寺旗"
    }, {
      value: "152528",
      label: "镶黄旗"
    }, {
      value: "152529",
      label: "正镶白旗"
    }, {
      value: "152530",
      label: "正蓝旗"
    }, {
      value: "152531",
      label: "多伦县"
    }, {
      value: "152571",
      label: "乌拉盖管委会"
    }]
  }, {
    value: "152900",
    label: "阿拉善盟",
    children: [{
      value: "152921",
      label: "阿拉善左旗"
    }, {
      value: "152922",
      label: "阿拉善右旗"
    }, {
      value: "152923",
      label: "额济纳旗"
    }, {
      value: "152971",
      label: "内蒙古阿拉善经济开发区"
    }]
  }]
}, {
  value: '210000',
  label: '辽宁省',
  children: [{
    value: "210100",
    label: "沈阳市",
    children: [{
      value: "210102",
      label: "和平区"
    }, {
      value: "210103",
      label: "沈河区"
    }, {
      value: "210104",
      label: "大东区"
    }, {
      value: "210105",
      label: "皇姑区"
    }, {
      value: "210106",
      label: "铁西区"
    }, {
      value: "210111",
      label: "苏家屯区"
    }, {
      value: "210112",
      label: "东陵区"
    }, {
      value: "210113",
      label: "新城子区"
    }, {
      value: "210114",
      label: "于洪区"
    }, {
      value: "210115",
      label: "辽中区"
    }, {
      value: "210123",
      label: "康平县"
    }, {
      value: "210124",
      label: "法库县"
    }, {
      value: "210181",
      label: "新民市"
    }, {
      value: "210112",
      label: "浑南区"
    }, {
      value: "210113",
      label: "沈北新区"
    }]
  }, {
    value: "210200",
    label: "大连市",
    children: [{
      value: "210202",
      label: "中山区"
    }, {
      value: "210203",
      label: "西岗区"
    }, {
      value: "210204",
      label: "沙河口区"
    }, {
      value: "210211",
      label: "甘井子区"
    }, {
      value: "210212",
      label: "旅顺口区"
    }, {
      value: "210213",
      label: "金州区"
    }, {
      value: "210224",
      label: "长海县"
    }, {
      value: "210251",
      label: "开发区"
    }, {
      value: "210281",
      label: "瓦房店市"
    }, {
      value: "210214",
      label: "普兰店区"
    }, {
      value: "210283",
      label: "庄河市"
    }]
  }, {
    value: "210300",
    label: "鞍山市",
    children: [{
      value: "210302",
      label: "铁东区"
    }, {
      value: "210303",
      label: "铁西区"
    }, {
      value: "210304",
      label: "立山区"
    }, {
      value: "210311",
      label: "千山区"
    }, {
      value: "210321",
      label: "台安县"
    }, {
      value: "210323",
      label: "岫岩满族自治县"
    }, {
      value: "210381",
      label: "海城市"
    }]
  }, {
    value: "210400",
    label: "抚顺市",
    children: [{
      value: "210402",
      label: "新抚区"
    }, {
      value: "210403",
      label: "东洲区"
    }, {
      value: "210404",
      label: "望花区"
    }, {
      value: "210411",
      label: "顺城区"
    }, {
      value: "210421",
      label: "抚顺县"
    }, {
      value: "210422",
      label: "新宾满族自治县"
    }, {
      value: "210423",
      label: "清原满族自治县"
    }]
  }, {
    value: "210500",
    label: "本溪市",
    children: [{
      value: "210502",
      label: "平山区"
    }, {
      value: "210503",
      label: "溪湖区"
    }, {
      value: "210504",
      label: "明山区"
    }, {
      value: "210505",
      label: "南芬区"
    }, {
      value: "210521",
      label: "本溪满族自治县"
    }, {
      value: "210522",
      label: "桓仁满族自治县"
    }]
  }, {
    value: "210600",
    label: "丹东市",
    children: [{
      value: "210602",
      label: "元宝区"
    }, {
      value: "210603",
      label: "振兴区"
    }, {
      value: "210604",
      label: "振安区"
    }, {
      value: "210624",
      label: "宽甸满族自治县"
    }, {
      value: "210681",
      label: "东港市"
    }, {
      value: "210682",
      label: "凤城市"
    }]
  }, {
    value: "210700",
    label: "锦州市",
    children: [{
      value: "210702",
      label: "古塔区"
    }, {
      value: "210703",
      label: "凌河区"
    }, {
      value: "210711",
      label: "太和区"
    }, {
      value: "210726",
      label: "黑山县"
    }, {
      value: "210727",
      label: "义县"
    }, {
      value: "210781",
      label: "凌海市"
    }, {
      value: "210782",
      label: "北镇市"
    }]
  }, {
    value: "210800",
    label: "营口市",
    children: [{
      value: "210802",
      label: "站前区"
    }, {
      value: "210803",
      label: "西市区"
    }, {
      value: "210804",
      label: "鲅鱼圈区"
    }, {
      value: "210811",
      label: "老边区"
    }, {
      value: "210881",
      label: "盖州市"
    }, {
      value: "210882",
      label: "大石桥市"
    }]
  }, {
    value: "210900",
    label: "阜新市",
    children: [{
      value: "210902",
      label: "海州区"
    }, {
      value: "210903",
      label: "新邱区"
    }, {
      value: "210904",
      label: "太平区"
    }, {
      value: "210905",
      label: "清河门区"
    }, {
      value: "210911",
      label: "细河区"
    }, {
      value: "210921",
      label: "阜新蒙古族自治县"
    }, {
      value: "210922",
      label: "彰武县"
    }]
  }, {
    value: "211000",
    label: "辽阳市",
    children: [{
      value: "211002",
      label: "白塔区"
    }, {
      value: "211003",
      label: "文圣区"
    }, {
      value: "211004",
      label: "宏伟区"
    }, {
      value: "211005",
      label: "弓长岭区"
    }, {
      value: "211011",
      label: "太子河区"
    }, {
      value: "211021",
      label: "辽阳县"
    }, {
      value: "211081",
      label: "灯塔市"
    }]
  }, {
    value: "211100",
    label: "盘锦市",
    children: [{
      value: "211102",
      label: "双台子区"
    }, {
      value: "211103",
      label: "兴隆台区"
    }, {
      value: "211121",
      label: "大洼县"
    }, {
      value: "211122",
      label: "盘山县"
    }]
  }, {
    value: "211200",
    label: "铁岭市",
    children: [{
      value: "211202",
      label: "银州区"
    }, {
      value: "211204",
      label: "清河区"
    }, {
      value: "211221",
      label: "铁岭县"
    }, {
      value: "211223",
      label: "西丰县"
    }, {
      value: "211224",
      label: "昌图县"
    }, {
      value: "211281",
      label: "调兵山市"
    }, {
      value: "211282",
      label: "开原市"
    }]
  }, {
    value: "211300",
    label: "朝阳市",
    children: [{
      value: "211302",
      label: "双塔区"
    }, {
      value: "211303",
      label: "龙城区"
    }, {
      value: "211321",
      label: "朝阳县"
    }, {
      value: "211322",
      label: "建平县"
    }, {
      value: "211324",
      label: "喀喇沁左翼蒙古族自治县"
    }, {
      value: "211381",
      label: "北票市"
    }, {
      value: "211382",
      label: "凌源市"
    }]
  }, {
    value: "211400",
    label: "葫芦岛市",
    children: [{
      value: "211402",
      label: "连山区"
    }, {
      value: "211403",
      label: "龙港区"
    }, {
      value: "211404",
      label: "南票区"
    }, {
      value: "211421",
      label: "绥中县"
    }, {
      value: "211422",
      label: "建昌县"
    }, {
      value: "211481",
      label: "兴城市"
    }]
  }]
}, {
  value: '220000',
  label: '吉林省',
  children: [{
    value: "220100",
    label: "长春市",
    children: [{
      value: "220102",
      label: "南关区"
    }, {
      value: "220103",
      label: "宽城区"
    }, {
      value: "220104",
      label: "朝阳区"
    }, {
      value: "220105",
      label: "二道区"
    }, {
      value: "220106",
      label: "绿园区"
    }, {
      value: "220112",
      label: "双阳区"
    }, {
      value: "220122",
      label: "农安县"
    }, {
      value: "220181",
      label: "九台市"
    }, {
      value: "220182",
      label: "榆树市"
    }, {
      value: "220183",
      label: "德惠市"
    }, {
      value: "220171",
      label: "长春经济技术开发区"
    }, {
      value: "220172",
      label: "长春净月高新技术产业开发区"
    }, {
      value: "220173",
      label: "长春高新技术产业开发区"
    }, {
      value: "220174",
      label: "长春汽车经济技术开发区"
    }]
  }, {
    value: "220200",
    label: "吉林市",
    children: [{
      value: "220202",
      label: "昌邑区"
    }, {
      value: "220203",
      label: "龙潭区"
    }, {
      value: "220204",
      label: "船营区"
    }, {
      value: "220211",
      label: "丰满区"
    }, {
      value: "220221",
      label: "永吉县"
    }, {
      value: "220281",
      label: "蛟河市"
    }, {
      value: "220282",
      label: "桦甸市"
    }, {
      value: "220283",
      label: "舒兰市"
    }, {
      value: "220284",
      label: "磐石市"
    }, {
      value: "220271",
      label: "吉林经济开发区"
    }, {
      value: "220272",
      label: "吉林高新技术产业开发区"
    }, {
      value: "220273",
      label: "吉林中国新加坡食品区"
    }]
  }, {
    value: "220300",
    label: "四平市",
    children: [{
      value: "220302",
      label: "铁西区"
    }, {
      value: "220303",
      label: "铁东区"
    }, {
      value: "220322",
      label: "梨树县"
    }, {
      value: "220323",
      label: "伊通满族自治县"
    }, {
      value: "220381",
      label: "公主岭市"
    }, {
      value: "220382",
      label: "双辽市"
    }]
  }, {
    value: "220400",
    label: "辽源市",
    children: [{
      value: "220402",
      label: "龙山区"
    }, {
      value: "220403",
      label: "西安区"
    }, {
      value: "220421",
      label: "东丰县"
    }, {
      value: "220422",
      label: "东辽县"
    }]
  }, {
    value: "220500",
    label: "通化市",
    children: [{
      value: "220502",
      label: "东昌区"
    }, {
      value: "220503",
      label: "二道江区"
    }, {
      value: "220521",
      label: "通化县"
    }, {
      value: "220523",
      label: "辉南县"
    }, {
      value: "220524",
      label: "柳河县"
    }, {
      value: "220581",
      label: "梅河口市"
    }, {
      value: "220582",
      label: "集安市"
    }]
  }, {
    value: "220600",
    label: "白山市",
    children: [{
      value: "220602",
      label: "八道江区"
    }, {
      value: "220621",
      label: "抚松县"
    }, {
      value: "220622",
      label: "靖宇县"
    }, {
      value: "220623",
      label: "长白朝鲜族自治县"
    }, {
      value: "220605",
      label: "江源区"
    }, {
      value: "220681",
      label: "临江市"
    }, {
      value: "220602",
      label: "浑江区"
    }]
  }, {
    value: "220700",
    label: "松原市",
    children: [{
      value: "220702",
      label: "宁江区"
    }, {
      value: "220721",
      label: "前郭尔罗斯蒙古族自治县"
    }, {
      value: "220722",
      label: "长岭县"
    }, {
      value: "220723",
      label: "乾安县"
    }, {
      value: "220781",
      label: "扶余市"
    }, {
      value: "220771",
      label: "吉林松原经济开发区"
    }]
  }, {
    value: "220800",
    label: "白城市",
    children: [{
      value: "220802",
      label: "洮北区"
    }, {
      value: "220821",
      label: "镇赉县"
    }, {
      value: "220822",
      label: "通榆县"
    }, {
      value: "220881",
      label: "洮南市"
    }, {
      value: "220882",
      label: "大安市"
    }, {
      value: "220871",
      label: "吉林白城经济开发区"
    }]
  }, {
    value: "222400",
    label: "延边朝鲜族自治州",
    children: [{
      value: "222401",
      label: "延吉市"
    }, {
      value: "222402",
      label: "图们市"
    }, {
      value: "222403",
      label: "敦化市"
    }, {
      value: "222404",
      label: "珲春市"
    }, {
      value: "222405",
      label: "龙井市"
    }, {
      value: "222406",
      label: "和龙市"
    }, {
      value: "222424",
      label: "汪清县"
    }, {
      value: "222426",
      label: "安图县"
    }]
  }]
}, {
  value: '230000',
  label: '黑龙江省',
  children: [{
    value: "230100",
    label: "哈尔滨市",
    children: [{
      value: "230102",
      label: "道里区"
    }, {
      value: "230103",
      label: "南岗区"
    }, {
      value: "230104",
      label: "道外区"
    }, {
      value: "230110",
      label: "香坊区"
    }, {
      value: "230107",
      label: "动力区"
    }, {
      value: "230108",
      label: "平房区"
    }, {
      value: "230109",
      label: "松北区"
    }, {
      value: "230111",
      label: "呼兰区"
    }, {
      value: "230123",
      label: "依兰县"
    }, {
      value: "230124",
      label: "方正县"
    }, {
      value: "230125",
      label: "宾县"
    }, {
      value: "230126",
      label: "巴彦县"
    }, {
      value: "230127",
      label: "木兰县"
    }, {
      value: "230128",
      label: "通河县"
    }, {
      value: "230129",
      label: "延寿县"
    }, {
      value: "230112",
      label: "阿城区"
    }, {
      value: "230113",
      label: "双城区"
    }, {
      value: "230183",
      label: "尚志市"
    }, {
      value: "230184",
      label: "五常市"
    }]
  }, {
    value: "230200",
    label: "齐齐哈尔市",
    children: [{
      value: "230202",
      label: "龙沙区"
    }, {
      value: "230203",
      label: "建华区"
    }, {
      value: "230204",
      label: "铁锋区"
    }, {
      value: "230205",
      label: "昂昂溪区"
    }, {
      value: "230206",
      label: "富拉尔基区"
    }, {
      value: "230207",
      label: "碾子山区"
    }, {
      value: "230208",
      label: "梅里斯达斡尔族区"
    }, {
      value: "230221",
      label: "龙江县"
    }, {
      value: "230223",
      label: "依安县"
    }, {
      value: "230224",
      label: "泰来县"
    }, {
      value: "230225",
      label: "甘南县"
    }, {
      value: "230227",
      label: "富裕县"
    }, {
      value: "230229",
      label: "克山县"
    }, {
      value: "230230",
      label: "克东县"
    }, {
      value: "230231",
      label: "拜泉县"
    }, {
      value: "230281",
      label: "讷河市"
    }]
  }, {
    value: "230300",
    label: "鸡西市",
    children: [{
      value: "230302",
      label: "鸡冠区"
    }, {
      value: "230303",
      label: "恒山区"
    }, {
      value: "230304",
      label: "滴道区"
    }, {
      value: "230305",
      label: "梨树区"
    }, {
      value: "230306",
      label: "城子河区"
    }, {
      value: "230307",
      label: "麻山区"
    }, {
      value: "230321",
      label: "鸡东县"
    }, {
      value: "230381",
      label: "虎林市"
    }, {
      value: "230382",
      label: "密山市"
    }]
  }, {
    value: "230400",
    label: "鹤岗市",
    children: [{
      value: "230402",
      label: "向阳区"
    }, {
      value: "230403",
      label: "工农区"
    }, {
      value: "230404",
      label: "南山区"
    }, {
      value: "230405",
      label: "兴安区"
    }, {
      value: "230406",
      label: "东山区"
    }, {
      value: "230407",
      label: "兴山区"
    }, {
      value: "230421",
      label: "萝北县"
    }, {
      value: "230422",
      label: "绥滨县"
    }]
  }, {
    value: "230500",
    label: "双鸭山市",
    children: [{
      value: "230502",
      label: "尖山区"
    }, {
      value: "230503",
      label: "岭东区"
    }, {
      value: "230505",
      label: "四方台区"
    }, {
      value: "230506",
      label: "宝山区"
    }, {
      value: "230521",
      label: "集贤县"
    }, {
      value: "230522",
      label: "友谊县"
    }, {
      value: "230523",
      label: "宝清县"
    }, {
      value: "230524",
      label: "饶河县"
    }]
  }, {
    value: "230600",
    label: "大庆市",
    children: [{
      value: "230602",
      label: "萨尔图区"
    }, {
      value: "230603",
      label: "龙凤区"
    }, {
      value: "230604",
      label: "让胡路区"
    }, {
      value: "230605",
      label: "红岗区"
    }, {
      value: "230606",
      label: "大同区"
    }, {
      value: "230621",
      label: "肇州县"
    }, {
      value: "230622",
      label: "肇源县"
    }, {
      value: "230623",
      label: "林甸县"
    }, {
      value: "230624",
      label: "杜尔伯特蒙古族自治县"
    }, {
      value: "230671",
      label: "大庆高新技术产业开发区"
    }]
  }, {
    value: "230700",
    label: "伊春市",
    children: [{
      value: "230702",
      label: "伊春区"
    }, {
      value: "230703",
      label: "南岔区"
    }, {
      value: "230704",
      label: "友好区"
    }, {
      value: "230705",
      label: "西林区"
    }, {
      value: "230706",
      label: "翠峦区"
    }, {
      value: "230707",
      label: "新青区"
    }, {
      value: "230708",
      label: "美溪区"
    }, {
      value: "230709",
      label: "金山屯区"
    }, {
      value: "230710",
      label: "五营区"
    }, {
      value: "230711",
      label: "乌马河区"
    }, {
      value: "230712",
      label: "汤旺河区"
    }, {
      value: "230713",
      label: "带岭区"
    }, {
      value: "230714",
      label: "乌伊岭区"
    }, {
      value: "230715",
      label: "红星区"
    }, {
      value: "230716",
      label: "上甘岭区"
    }, {
      value: "230722",
      label: "嘉荫县"
    }, {
      value: "230781",
      label: "铁力市"
    }]
  }, {
    value: "230800",
    label: "佳木斯市",
    children: [{
      value: "230803",
      label: "向阳区"
    }, {
      value: "230804",
      label: "前进区"
    }, {
      value: "230805",
      label: "东风区"
    }, {
      value: "230811",
      label: "郊区"
    }, {
      value: "230822",
      label: "桦南县"
    }, {
      value: "230826",
      label: "桦川县"
    }, {
      value: "230828",
      label: "汤原县"
    }, {
      value: "230833",
      label: "抚远市"
    }, {
      value: "230881",
      label: "同江市"
    }, {
      value: "230882",
      label: "富锦市"
    }]
  }, {
    value: "230900",
    label: "七台河市",
    children: [{
      value: "230902",
      label: "新兴区"
    }, {
      value: "230903",
      label: "桃山区"
    }, {
      value: "230904",
      label: "茄子河区"
    }, {
      value: "230921",
      label: "勃利县"
    }]
  }, {
    value: "231000",
    label: "牡丹江市",
    children: [{
      value: "231002",
      label: "东安区"
    }, {
      value: "231003",
      label: "阳明区"
    }, {
      value: "231004",
      label: "爱民区"
    }, {
      value: "231005",
      label: "西安区"
    }, {
      value: "231086",
      label: "东宁市"
    }, {
      value: "231025",
      label: "林口县"
    }, {
      value: "231081",
      label: "绥芬河市"
    }, {
      value: "231083",
      label: "海林市"
    }, {
      value: "231084",
      label: "宁安市"
    }, {
      value: "231085",
      label: "穆棱市"
    }, {
      value: "231071",
      label: "牡丹江经济技术开发区"
    }]
  }, {
    value: "231100",
    label: "黑河市",
    children: [{
      value: "231102",
      label: "爱辉区"
    }, {
      value: "231121",
      label: "嫩江县"
    }, {
      value: "231123",
      label: "逊克县"
    }, {
      value: "231124",
      label: "孙吴县"
    }, {
      value: "231181",
      label: "北安市"
    }, {
      value: "231182",
      label: "五大连池市"
    }]
  }, {
    value: "231200",
    label: "绥化市",
    children: [{
      value: "231202",
      label: "北林区"
    }, {
      value: "231221",
      label: "望奎县"
    }, {
      value: "231222",
      label: "兰西县"
    }, {
      value: "231223",
      label: "青冈县"
    }, {
      value: "231224",
      label: "庆安县"
    }, {
      value: "231225",
      label: "明水县"
    }, {
      value: "231226",
      label: "绥棱县"
    }, {
      value: "231281",
      label: "安达市"
    }, {
      value: "231282",
      label: "肇东市"
    }, {
      value: "231283",
      label: "海伦市"
    }]
  }, {
    value: "232700",
    label: "大兴安岭地区",
    children: [{
      value: "232721",
      label: "呼玛县"
    }, {
      value: "232722",
      label: "塔河县"
    }, {
      value: "232723",
      label: "漠河县"
    }, {
      value: "232701",
      label: "加格达奇区"
    }, {
      value: "232704",
      label: "呼中区"
    }, {
      value: "232703",
      label: "新林区"
    }]
  }]
}, {
  value: '310000',
  label: '上海市',
  children: [{
    value: '310100',
    label: '上海市',
    children: [{
      value: "310101",
      label: "黄浦区"
    }, {
      value: "310104",
      label: "徐汇区"
    }, {
      value: "310105",
      label: "长宁区"
    }, {
      value: "310106",
      label: "静安区"
    }, {
      value: "310107",
      label: "普陀区"
    }, {
      value: "310109",
      label: "虹口区"
    }, {
      value: "310110",
      label: "杨浦区"
    }, {
      value: "310112",
      label: "闵行区"
    }, {
      value: "310113",
      label: "宝山区"
    }, {
      value: "310114",
      label: "嘉定区"
    }, {
      value: "310115",
      label: "浦东新区"
    }, {
      value: "310116",
      label: "金山区"
    }, {
      value: "310117",
      label: "松江区"
    }, {
      value: "310118",
      label: "青浦区"
    }, {
      value: "310120",
      label: "奉贤区"
    }, {
      value: "310151",
      label: "崇明区"
    }]
  }]
}, {
  value: '320000',
  label: '江苏省',
  children: [{
    value: "320100",
    label: "南京市",
    children: [{
      value: "320102",
      label: "玄武区"
    }, {
      value: "320104",
      label: "秦淮区"
    }, {
      value: "320105",
      label: "建邺区"
    }, {
      value: "320106",
      label: "鼓楼区"
    }, {
      value: "320111",
      label: "浦口区"
    }, {
      value: "320113",
      label: "栖霞区"
    }, {
      value: "320114",
      label: "雨花台区"
    }, {
      value: "320115",
      label: "江宁区"
    }, {
      value: "320116",
      label: "六合区"
    }, {
      value: "320117",
      label: "溧水区"
    }, {
      value: "320118",
      label: "高淳区"
    }]
  }, {
    value: "320200",
    label: "无锡市",
    children: [{
      value: "320205",
      label: "锡山区"
    }, {
      value: "320206",
      label: "惠山区"
    }, {
      value: "320211",
      label: "滨湖区"
    }, {
      value: "320281",
      label: "江阴市"
    }, {
      value: "320282",
      label: "宜兴市"
    }, {
      value: "320213",
      label: "梁溪区"
    }, {
      value: "320214",
      label: "新吴区"
    }]
  }, {
    value: "320300",
    label: "徐州市",
    children: [{
      value: "320302",
      label: "鼓楼区"
    }, {
      value: "320303",
      label: "云龙区"
    }, {
      value: "320305",
      label: "贾汪区"
    }, {
      value: "320311",
      label: "泉山区"
    }, {
      value: "320321",
      label: "丰县"
    }, {
      value: "320322",
      label: "沛县"
    }, {
      value: "320324",
      label: "睢宁县"
    }, {
      value: "320381",
      label: "新沂市"
    }, {
      value: "320382",
      label: "邳州市"
    }, {
      value: "320371",
      label: "徐州经济技术开发区"
    }]
  }, {
    value: "320400",
    label: "常州市",
    children: [{
      value: "320402",
      label: "天宁区"
    }, {
      value: "320404",
      label: "钟楼区"
    }, {
      value: "320411",
      label: "新北区"
    }, {
      value: "320412",
      label: "武进区"
    }, {
      value: "320481",
      label: "溧阳市"
    }, {
      value: "320413",
      label: "金坛区"
    }]
  }, {
    value: "320500",
    label: "苏州市",
    children: [{
      value: "320505",
      label: "虎丘区"
    }, {
      value: "320506",
      label: "吴中区"
    }, {
      value: "320507",
      label: "相城区"
    }, {
      value: "320581",
      label: "常熟市"
    }, {
      value: "320582",
      label: "张家港市"
    }, {
      value: "320583",
      label: "昆山市"
    }, {
      value: "320509",
      label: "吴江区"
    }, {
      value: "320585",
      label: "太仓市"
    }, {
      value: "320508",
      label: "姑苏区"
    }, {
      value: "320571",
      label: "苏州工业园区"
    }]
  }, {
    value: "320600",
    label: "南通市",
    children: [{
      value: "320602",
      label: "崇川区"
    }, {
      value: "320611",
      label: "港闸区"
    }, {
      value: "320612",
      label: "通州区"
    }, {
      value: "320621",
      label: "海安县"
    }, {
      value: "320623",
      label: "如东县"
    }, {
      value: "320681",
      label: "启东市"
    }, {
      value: "320682",
      label: "如皋市"
    }, {
      value: "320684",
      label: "海门市"
    }, {
      value: "320671",
      label: "南通经济技术开发区"
    }]
  }, {
    value: "320700",
    label: "连云港市",
    children: [{
      value: "320703",
      label: "连云区"
    }, {
      value: "320706",
      label: "海州区"
    }, {
      value: "320707",
      label: "赣榆区"
    }, {
      value: "320722",
      label: "东海县"
    }, {
      value: "320723",
      label: "灌云县"
    }, {
      value: "320724",
      label: "灌南县"
    }, {
      value: "320771",
      label: "连云港经济技术开发区"
    }, {
      value: "320772",
      label: "连云港高新技术产业开发区"
    }]
  }, {
    value: "320800",
    label: "淮安市",
    children: [{
      value: "320804",
      label: "淮阴区"
    }, {
      value: "320812",
      label: "清江浦区"
    }, {
      value: "320826",
      label: "涟水县"
    }, {
      value: "320813",
      label: "洪泽区"
    }, {
      value: "320830",
      label: "盱眙县"
    }, {
      value: "320831",
      label: "金湖县"
    }, {
      value: "320803",
      label: "淮安区"
    }, {
      value: "320871",
      label: "淮安经济技术开发区"
    }]
  }, {
    value: "320900",
    label: "盐城市",
    children: [{
      value: "320902",
      label: "亭湖区"
    }, {
      value: "320903",
      label: "盐都区"
    }, {
      value: "320921",
      label: "响水县"
    }, {
      value: "320922",
      label: "滨海县"
    }, {
      value: "320904",
      label: "大丰区"
    }, {
      value: "320923",
      label: "阜宁县"
    }, {
      value: "320924",
      label: "射阳县"
    }, {
      value: "320925",
      label: "建湖县"
    }, {
      value: "320981",
      label: "东台市"
    }, {
      value: "320971",
      label: "盐城经济技术开发区"
    }]
  }, {
    value: "321000",
    label: "扬州市",
    children: [{
      value: "321002",
      label: "广陵区"
    }, {
      value: "321003",
      label: "邗江区"
    }, {
      value: "321011",
      label: "维扬区"
    }, {
      value: "321023",
      label: "宝应县"
    }, {
      value: "321081",
      label: "仪征市"
    }, {
      value: "321084",
      label: "高邮市"
    }, {
      value: "321012",
      label: "江都区"
    }, {
      value: "321071",
      label: "扬州经济技术开发区"
    }]
  }, {
    value: "321100",
    label: "镇江市",
    children: [{
      value: "321102",
      label: "京口区"
    }, {
      value: "321111",
      label: "润州区"
    }, {
      value: "321112",
      label: "丹徒区"
    }, {
      value: "321181",
      label: "丹阳市"
    }, {
      value: "321182",
      label: "扬中市"
    }, {
      value: "321183",
      label: "句容市"
    }, {
      value: "321171",
      label: "镇江新区"
    }]
  }, {
    value: "321200",
    label: "泰州市",
    children: [{
      value: "321202",
      label: "海陵区"
    }, {
      value: "321203",
      label: "高港区"
    }, {
      value: "321281",
      label: "兴化市"
    }, {
      value: "321282",
      label: "靖江市"
    }, {
      value: "321283",
      label: "泰兴市"
    }, {
      value: "321204",
      label: "姜堰区"
    }, {
      value: "321271",
      label: "泰州医药高新技术产业开发区"
    }]
  }, {
    value: "321300",
    label: "宿迁市",
    children: [{
      value: "321302",
      label: "宿城区"
    }, {
      value: "321311",
      label: "宿豫区"
    }, {
      value: "321322",
      label: "沭阳县"
    }, {
      value: "321323",
      label: "泗阳县"
    }, {
      value: "321324",
      label: "泗洪县"
    }]
  }]
}, {
  value: '330000',
  label: '浙江省',
  children: [{
    value: "330100",
    label: "杭州市",
    children: [{
      value: "330102",
      label: "上城区"
    }, {
      value: "330103",
      label: "下城区"
    }, {
      value: "330104",
      label: "江干区"
    }, {
      value: "330105",
      label: "拱墅区"
    }, {
      value: "330106",
      label: "西湖区"
    }, {
      value: "330108",
      label: "滨江区"
    }, {
      value: "330109",
      label: "萧山区"
    }, {
      value: "330110",
      label: "余杭区"
    }, {
      value: "330122",
      label: "桐庐县"
    }, {
      value: "330127",
      label: "淳安县"
    }, {
      value: "330182",
      label: "建德市"
    }, {
      value: "330111",
      label: "富阳区"
    }, {
      value: "330112",
      label: "临安区"
    }, {
      value: "330186",
      label: "其它区"
    }]
  }, {
    value: "330200",
    label: "宁波市",
    children: [{
      value: "330203",
      label: "海曙区"
    }, {
      value: "330205",
      label: "江北区"
    }, {
      value: "330206",
      label: "北仑区"
    }, {
      value: "330211",
      label: "镇海区"
    }, {
      value: "330212",
      label: "鄞州区"
    }, {
      value: "330225",
      label: "象山县"
    }, {
      value: "330226",
      label: "宁海县"
    }, {
      value: "330281",
      label: "余姚市"
    }, {
      value: "330282",
      label: "慈溪市"
    }, {
      value: "330213",
      label: "奉化区"
    }]
  }, {
    value: "330300",
    label: "温州市",
    children: [{
      value: "330302",
      label: "鹿城区"
    }, {
      value: "330303",
      label: "龙湾区"
    }, {
      value: "330304",
      label: "瓯海区"
    }, {
      value: "330305",
      label: "洞头区"
    }, {
      value: "330324",
      label: "永嘉县"
    }, {
      value: "330326",
      label: "平阳县"
    }, {
      value: "330327",
      label: "苍南县"
    }, {
      value: "330328",
      label: "文成县"
    }, {
      value: "330329",
      label: "泰顺县"
    }, {
      value: "330381",
      label: "瑞安市"
    }, {
      value: "330382",
      label: "乐清市"
    }, {
      value: "330371",
      label: "温州经济技术开发区"
    }]
  }, {
    value: "330400",
    label: "嘉兴市",
    children: [{
      value: "330402",
      label: "南湖区"
    }, {
      value: "330411",
      label: "秀洲区"
    }, {
      value: "330421",
      label: "嘉善县"
    }, {
      value: "330424",
      label: "海盐县"
    }, {
      value: "330481",
      label: "海宁市"
    }, {
      value: "330482",
      label: "平湖市"
    }, {
      value: "330483",
      label: "桐乡市"
    }]
  }, {
    value: "330500",
    label: "湖州市",
    children: [{
      value: "330502",
      label: "吴兴区"
    }, {
      value: "330503",
      label: "南浔区"
    }, {
      value: "330521",
      label: "德清县"
    }, {
      value: "330522",
      label: "长兴县"
    }, {
      value: "330523",
      label: "安吉县"
    }]
  }, {
    value: "330600",
    label: "绍兴市",
    children: [{
      value: "330602",
      label: "越城区"
    }, {
      value: "330621",
      label: "柯桥区"
    }, {
      value: "330681",
      label: "诸暨市"
    }, {
      value: "330604",
      label: "上虞区"
    }, {
      value: "330683",
      label: "嵊州市"
    }, {
      value: "330624",
      label: "新昌县"
    }]
  }, {
    value: "330700",
    label: "金华市",
    children: [{
      value: "330702",
      label: "婺城区"
    }, {
      value: "330703",
      label: "金东区"
    }, {
      value: "330723",
      label: "武义县"
    }, {
      value: "330726",
      label: "浦江县"
    }, {
      value: "330727",
      label: "磐安县"
    }, {
      value: "330781",
      label: "兰溪市"
    }, {
      value: "330782",
      label: "义乌市"
    }, {
      value: "330783",
      label: "东阳市"
    }, {
      value: "330784",
      label: "永康市"
    }]
  }, {
    value: "330800",
    label: "衢州市",
    children: [{
      value: "330802",
      label: "柯城区"
    }, {
      value: "330803",
      label: "衢江区"
    }, {
      value: "330822",
      label: "常山县"
    }, {
      value: "330824",
      label: "开化县"
    }, {
      value: "330825",
      label: "龙游县"
    }, {
      value: "330881",
      label: "江山市"
    }]
  }, {
    value: "330900",
    label: "舟山市",
    children: [{
      value: "330902",
      label: "定海区"
    }, {
      value: "330903",
      label: "普陀区"
    }, {
      value: "330921",
      label: "岱山县"
    }, {
      value: "330922",
      label: "嵊泗县"
    }]
  }, {
    value: "331000",
    label: "台州市",
    children: [{
      value: "331002",
      label: "椒江区"
    }, {
      value: "331003",
      label: "黄岩区"
    }, {
      value: "331004",
      label: "路桥区"
    }, {
      value: "331083",
      label: "玉环市"
    }, {
      value: "331022",
      label: "三门县"
    }, {
      value: "331023",
      label: "天台县"
    }, {
      value: "331024",
      label: "仙居县"
    }, {
      value: "331081",
      label: "温岭市"
    }, {
      value: "331082",
      label: "临海市"
    }]
  }, {
    value: "331100",
    label: "丽水市",
    children: [{
      value: "331102",
      label: "莲都区"
    }, {
      value: "331121",
      label: "青田县"
    }, {
      value: "331122",
      label: "缙云县"
    }, {
      value: "331123",
      label: "遂昌县"
    }, {
      value: "331124",
      label: "松阳县"
    }, {
      value: "331125",
      label: "云和县"
    }, {
      value: "331126",
      label: "庆元县"
    }, {
      value: "331127",
      label: "景宁畲族自治县"
    }, {
      value: "331181",
      label: "龙泉市"
    }]
  }]
}, {
  value: '340000',
  label: '安徽省',
  children: [{
    value: "340100",
    label: "合肥市",
    children: [{
      value: "340111",
      label: "包河区"
    }, {
      value: "340104",
      label: "蜀山区"
    }, {
      value: "340103",
      label: "庐阳区"
    }, {
      value: "340102",
      label: "瑶海区"
    }, {
      value: "340171",
      label: "合肥高新技术产业开发区"
    }, {
      value: "340172",
      label: "合肥经济技术开发区"
    }, {
      value: "340173",
      label: "合肥新站高新技术产业开发区"
    }, {
      value: "340121",
      label: "长丰县"
    }, {
      value: "340122",
      label: "肥东县"
    }, {
      value: "340123",
      label: "肥西县"
    }, {
      value: "340124",
      label: "庐江县"
    }, {
      value: "340181",
      label: "巢湖市"
    }]
  }, {
    value: "340200",
    label: "芜湖市",
    children: [{
      value: "340202",
      label: "镜湖区"
    }, {
      value: "340203",
      label: "弋江区"
    }, {
      value: "340207",
      label: "鸠江区"
    }, {
      value: "340208",
      label: "三山区"
    }, {
      value: "340221",
      label: "芜湖县"
    }, {
      value: "340222",
      label: "繁昌县"
    }, {
      value: "340223",
      label: "南陵县"
    }, {
      value: "340225",
      label: "无为县"
    }, {
      value: "340272",
      label: "安徽芜湖长江大桥经济开发区"
    }, {
      value: "340271",
      label: "芜湖经济技术开发区"
    }]
  }, {
    value: "340300",
    label: "蚌埠市",
    children: [{
      value: "340302",
      label: "龙子湖区"
    }, {
      value: "340303",
      label: "蚌山区"
    }, {
      value: "340304",
      label: "禹会区"
    }, {
      value: "340311",
      label: "淮上区"
    }, {
      value: "340321",
      label: "怀远县"
    }, {
      value: "340322",
      label: "五河县"
    }, {
      value: "340323",
      label: "固镇县"
    }, {
      value: "340371",
      label: "蚌埠市高新技术开发区"
    }, {
      value: "340372	",
      label: "蚌埠市经济开发区"
    }]
  }, {
    value: "340400",
    label: "淮南市",
    children: [{
      value: "340402",
      label: "大通区"
    }, {
      value: "340403",
      label: "田家庵区"
    }, {
      value: "340404",
      label: "谢家集区"
    }, {
      value: "340405",
      label: "八公山区"
    }, {
      value: "340406",
      label: "潘集区"
    }, {
      value: "340421",
      label: "凤台县"
    }, {
      value: "340422",
      label: "寿县"
    }]
  }, {
    value: "340500",
    label: "马鞍山市",
    children: [{
      value: "340503",
      label: "花山区"
    }, {
      value: "340504",
      label: "雨山区"
    }, {
      value: "340521",
      label: "当涂县"
    }, {
      value: "340506",
      label: "博望区"
    }, {
      value: "340522",
      label: "含山县"
    }, {
      value: "340523",
      label: "和县"
    }]
  }, {
    value: "340600",
    label: "淮北市",
    children: [{
      value: "340602",
      label: "杜集区"
    }, {
      value: "340603",
      label: "相山区"
    }, {
      value: "340604",
      label: "烈山区"
    }, {
      value: "340621",
      label: "濉溪县"
    }]
  }, {
    value: "340700",
    label: "铜陵市",
    children: [{
      value: "340705",
      label: "铜官区"
    }, {
      value: "340706",
      label: "义安区"
    }, {
      value: "340711",
      label: "郊区"
    }, {
      value: "340722",
      label: "枞阳县"
    }]
  }, {
    value: "340800",
    label: "安庆市",
    children: [{
      value: "340802",
      label: "迎江区"
    }, {
      value: "340803",
      label: "大观区"
    }, {
      value: "340811",
      label: "宜秀区"
    }, {
      value: "340822",
      label: "怀宁县"
    }, {
      value: "340824",
      label: "潜山县"
    }, {
      value: "340825",
      label: "太湖县"
    }, {
      value: "340826",
      label: "宿松县"
    }, {
      value: "340827",
      label: "望江县"
    }, {
      value: "340828",
      label: "岳西县"
    }, {
      value: "340881",
      label: "桐城市"
    }, {
      value: "340871",
      label: "安徽安庆经济开发区"
    }]
  }, {
    value: "341000",
    label: "黄山市",
    children: [{
      value: "341002",
      label: "屯溪区"
    }, {
      value: "341003",
      label: "黄山区"
    }, {
      value: "341004",
      label: "徽州区"
    }, {
      value: "341021",
      label: "歙县"
    }, {
      value: "341022",
      label: "休宁县"
    }, {
      value: "341023",
      label: "黟县"
    }, {
      value: "341024",
      label: "祁门县"
    }]
  }, {
    value: "341100",
    label: "滁州市",
    children: [{
      value: "341102",
      label: "琅琊区"
    }, {
      value: "341103",
      label: "南谯区"
    }, {
      value: "341122",
      label: "来安县"
    }, {
      value: "341124",
      label: "全椒县"
    }, {
      value: "341125",
      label: "定远县"
    }, {
      value: "341126",
      label: "凤阳县"
    }, {
      value: "341181",
      label: "天长市"
    }, {
      value: "341182",
      label: "明光市"
    }, {
      value: "341171",
      label: "苏滁现代产业园"
    }, {
      value: "341172",
      label: "滁州经济技术开发区"
    }]
  }, {
    value: "341200",
    label: "阜阳市",
    children: [{
      value: "341202",
      label: "颍州区"
    }, {
      value: "341203",
      label: "颍东区"
    }, {
      value: "341204",
      label: "颍泉区"
    }, {
      value: "341221",
      label: "临泉县"
    }, {
      value: "341222",
      label: "太和县"
    }, {
      value: "341225",
      label: "阜南县"
    }, {
      value: "341226",
      label: "颍上县"
    }, {
      value: "341282",
      label: "界首市"
    }, {
      value: "341272",
      label: "阜阳经济技术开发区"
    }, {
      value: "341271",
      label: "阜阳合肥现代产业园区"
    }]
  }, {
    value: "341300",
    label: "宿州市",
    children: [{
      value: "341302",
      label: "埇桥区"
    }, {
      value: "341321",
      label: "砀山县"
    }, {
      value: "341322",
      label: "萧县"
    }, {
      value: "341323",
      label: "灵璧县"
    }, {
      value: "341324",
      label: "泗县"
    }, {
      value: "341371",
      label: "宿州马鞍山现代产业园区"
    }, {
      value: "341372",
      label: "宿州经济技术开发区"
    }]
  }, {
    value: "341500",
    label: "六安市",
    children: [{
      value: "341502",
      label: "金安区"
    }, {
      value: "341503",
      label: "裕安区"
    }, {
      value: "341504",
      label: "叶集区"
    }, {
      value: "341522",
      label: "霍邱县"
    }, {
      value: "341523",
      label: "舒城县"
    }, {
      value: "341524",
      label: "金寨县"
    }, {
      value: "341525",
      label: "霍山县"
    }]
  }, {
    value: "341600",
    label: "亳州市",
    children: [{
      value: "341602",
      label: "谯城区"
    }, {
      value: "341621",
      label: "涡阳县"
    }, {
      value: "341622",
      label: "蒙城县"
    }, {
      value: "341623",
      label: "利辛县"
    }]
  }, {
    value: "341700",
    label: "池州市",
    children: [{
      value: "341702",
      label: "贵池区"
    }, {
      value: "341721",
      label: "东至县"
    }, {
      value: "341722",
      label: "石台县"
    }, {
      value: "341723",
      label: "青阳县"
    }]
  }, {
    value: "341800",
    label: "宣城市",
    children: [{
      value: "341802",
      label: "宣州区"
    }, {
      value: "341821",
      label: "郎溪县"
    }, {
      value: "341822",
      label: "广德县"
    }, {
      value: "341823",
      label: "泾县"
    }, {
      value: "341824",
      label: "绩溪县"
    }, {
      value: "341825",
      label: "旌德县"
    }, {
      value: "341881",
      label: "宁国市"
    }, {
      value: "341871",
      label: "宣城市经济开发区"
    }]
  }]
}, {
  value: '350000',
  label: '福建省',
  children: [{
    value: "350100",
    label: "福州市",
    children: [{
      value: "350102",
      label: "鼓楼区"
    }, {
      value: "350103",
      label: "台江区"
    }, {
      value: "350104",
      label: "仓山区"
    }, {
      value: "350105",
      label: "马尾区"
    }, {
      value: "350111",
      label: "晋安区"
    }, {
      value: "350121",
      label: "闽侯县"
    }, {
      value: "350122",
      label: "连江县"
    }, {
      value: "350123",
      label: "罗源县"
    }, {
      value: "350124",
      label: "闽清县"
    }, {
      value: "350125",
      label: "永泰县"
    }, {
      value: "350128",
      label: "平潭县"
    }, {
      value: "350181",
      label: "福清市"
    }, {
      value: "350182",
      label: "长乐市"
    }]
  }, {
    value: "350200",
    label: "厦门市",
    children: [{
      value: "350203",
      label: "思明区"
    }, {
      value: "350205",
      label: "海沧区"
    }, {
      value: "350206",
      label: "湖里区"
    }, {
      value: "350211",
      label: "集美区"
    }, {
      value: "350212",
      label: "同安区"
    }, {
      value: "350213",
      label: "翔安区"
    }]
  }, {
    value: "350300",
    label: "莆田市",
    children: [{
      value: "350302",
      label: "城厢区"
    }, {
      value: "350303",
      label: "涵江区"
    }, {
      value: "350304",
      label: "荔城区"
    }, {
      value: "350305",
      label: "秀屿区"
    }, {
      value: "350322",
      label: "仙游县"
    }]
  }, {
    value: "350400",
    label: "三明市",
    children: [{
      value: "350402",
      label: "梅列区"
    }, {
      value: "350403",
      label: "三元区"
    }, {
      value: "350421",
      label: "明溪县"
    }, {
      value: "350423",
      label: "清流县"
    }, {
      value: "350424",
      label: "宁化县"
    }, {
      value: "350425",
      label: "大田县"
    }, {
      value: "350426",
      label: "尤溪县"
    }, {
      value: "350427",
      label: "沙县"
    }, {
      value: "350428",
      label: "将乐县"
    }, {
      value: "350429",
      label: "泰宁县"
    }, {
      value: "350430",
      label: "建宁县"
    }, {
      value: "350481",
      label: "永安市"
    }]
  }, {
    value: "350500",
    label: "泉州市",
    children: [{
      value: "350502",
      label: "鲤城区"
    }, {
      value: "350503",
      label: "丰泽区"
    }, {
      value: "350504",
      label: "洛江区"
    }, {
      value: "350505",
      label: "泉港区"
    }, {
      value: "350521",
      label: "惠安县"
    }, {
      value: "350524",
      label: "安溪县"
    }, {
      value: "350525",
      label: "永春县"
    }, {
      value: "350526",
      label: "德化县"
    }, {
      value: "350527",
      label: "金门县"
    }, {
      value: "350581",
      label: "石狮市"
    }, {
      value: "350582",
      label: "晋江市"
    }, {
      value: "350583",
      label: "南安市"
    }]
  }, {
    value: "350600",
    label: "漳州市",
    children: [{
      value: "350602",
      label: "芗城区"
    }, {
      value: "350603",
      label: "龙文区"
    }, {
      value: "350622",
      label: "云霄县"
    }, {
      value: "350623",
      label: "漳浦县"
    }, {
      value: "350624",
      label: "诏安县"
    }, {
      value: "350625",
      label: "长泰县"
    }, {
      value: "350626",
      label: "东山县"
    }, {
      value: "350627",
      label: "南靖县"
    }, {
      value: "350628",
      label: "平和县"
    }, {
      value: "350629",
      label: "华安县"
    }, {
      value: "350681",
      label: "龙海市"
    }]
  }, {
    value: "350700",
    label: "南平市",
    children: [{
      value: "350702",
      label: "延平区"
    }, {
      value: "350721",
      label: "顺昌县"
    }, {
      value: "350722",
      label: "浦城县"
    }, {
      value: "350723",
      label: "光泽县"
    }, {
      value: "350724",
      label: "松溪县"
    }, {
      value: "350725",
      label: "政和县"
    }, {
      value: "350781",
      label: "邵武市"
    }, {
      value: "350782",
      label: "武夷山市"
    }, {
      value: "350783",
      label: "建瓯市"
    }, {
      value: "350703",
      label: "建阳区"
    }]
  }, {
    value: "350800",
    label: "龙岩市",
    children: [{
      value: "350802",
      label: "新罗区"
    }, {
      value: "350821",
      label: "长汀县"
    }, {
      value: "350803",
      label: "永定区"
    }, {
      value: "350823",
      label: "上杭县"
    }, {
      value: "350824",
      label: "武平县"
    }, {
      value: "350825",
      label: "连城县"
    }, {
      value: "350881",
      label: "漳平市"
    }]
  }, {
    value: "350900",
    label: "宁德市",
    children: [{
      value: "350902",
      label: "蕉城区"
    }, {
      value: "350921",
      label: "霞浦县"
    }, {
      value: "350922",
      label: "古田县"
    }, {
      value: "350923",
      label: "屏南县"
    }, {
      value: "350924",
      label: "寿宁县"
    }, {
      value: "350925",
      label: "周宁县"
    }, {
      value: "350926",
      label: "柘荣县"
    }, {
      value: "350981",
      label: "福安市"
    }, {
      value: "350982",
      label: "福鼎市"
    }]
  }]
}, {
  value: '360000',
  label: '江西省',
  children: [{
    value: "360100",
    label: "南昌市",
    children: [{
      value: "360102",
      label: "东湖区"
    }, {
      value: "360103",
      label: "西湖区"
    }, {
      value: "360104",
      label: "青云谱区"
    }, {
      value: "360105",
      label: "湾里区"
    }, {
      value: "360111",
      label: "青山湖区"
    }, {
      value: "360121",
      label: "南昌县"
    }, {
      value: "360112",
      label: "新建区"
    }, {
      value: "360123",
      label: "安义县"
    }, {
      value: "360124",
      label: "进贤县"
    }]
  }, {
    value: "360200",
    label: "景德镇市",
    children: [{
      value: "360202",
      label: "昌江区"
    }, {
      value: "360203",
      label: "珠山区"
    }, {
      value: "360222",
      label: "浮梁县"
    }, {
      value: "360281",
      label: "乐平市"
    }]
  }, {
    value: "360300",
    label: "萍乡市",
    children: [{
      value: "360302",
      label: "安源区"
    }, {
      value: "360313",
      label: "湘东区"
    }, {
      value: "360321",
      label: "莲花县"
    }, {
      value: "360322",
      label: "上栗县"
    }, {
      value: "360323",
      label: "芦溪县"
    }]
  }, {
    value: "360400",
    label: "九江市",
    children: [{
      value: "360402",
      label: "濂溪区"
    }, {
      value: "360403",
      label: "浔阳区"
    }, {
      value: "360404",
      label: "柴桑区"
    }, {
      value: "360423",
      label: "武宁县"
    }, {
      value: "360424",
      label: "修水县"
    }, {
      value: "360425",
      label: "永修县"
    }, {
      value: "360426",
      label: "德安县"
    }, {
      value: "360428",
      label: "都昌县"
    }, {
      value: "360429",
      label: "湖口县"
    }, {
      value: "360430",
      label: "彭泽县"
    }, {
      value: "360481",
      label: "瑞昌市"
    }, {
      value: "360482",
      label: "共青城市"
    }, {
      value: "360483",
      label: "庐山市"
    }]
  }, {
    value: "360500",
    label: "新余市",
    children: [{
      value: "360502",
      label: "渝水区"
    }, {
      value: "360521",
      label: "分宜县"
    }]
  }, {
    value: "360600",
    label: "鹰潭市",
    children: [{
      value: "360602",
      label: "月湖区"
    }, {
      value: "360622",
      label: "余江县"
    }, {
      value: "360681",
      label: "贵溪市"
    }]
  }, {
    value: "360700",
    label: "赣州市",
    children: [{
      value: "360702",
      label: "章贡区"
    }, {
      value: "360704",
      label: "赣县区"
    }, {
      value: "360722",
      label: "信丰县"
    }, {
      value: "360723",
      label: "大余县"
    }, {
      value: "360724",
      label: "上犹县"
    }, {
      value: "360725",
      label: "崇义县"
    }, {
      value: "360726",
      label: "安远县"
    }, {
      value: "360727",
      label: "龙南县"
    }, {
      value: "360728",
      label: "定南县"
    }, {
      value: "360729",
      label: "全南县"
    }, {
      value: "360730",
      label: "宁都县"
    }, {
      value: "360731",
      label: "于都县"
    }, {
      value: "360732",
      label: "兴国县"
    }, {
      value: "360733",
      label: "会昌县"
    }, {
      value: "360734",
      label: "寻乌县"
    }, {
      value: "360735",
      label: "石城县"
    }, {
      value: "360781",
      label: "瑞金市"
    }, {
      value: "360703",
      label: "南康区"
    }]
  }, {
    value: "360800",
    label: "吉安市",
    children: [{
      value: "360802",
      label: "吉州区"
    }, {
      value: "360803",
      label: "青原区"
    }, {
      value: "360821",
      label: "吉安县"
    }, {
      value: "360822",
      label: "吉水县"
    }, {
      value: "360823",
      label: "峡江县"
    }, {
      value: "360824",
      label: "新干县"
    }, {
      value: "360825",
      label: "永丰县"
    }, {
      value: "360826",
      label: "泰和县"
    }, {
      value: "360827",
      label: "遂川县"
    }, {
      value: "360828",
      label: "万安县"
    }, {
      value: "360829",
      label: "安福县"
    }, {
      value: "360830",
      label: "永新县"
    }, {
      value: "360881",
      label: "井冈山市"
    }]
  }, {
    value: "360900",
    label: "宜春市",
    children: [{
      value: "360902",
      label: "袁州区"
    }, {
      value: "360921",
      label: "奉新县"
    }, {
      value: "360922",
      label: "万载县"
    }, {
      value: "360923",
      label: "上高县"
    }, {
      value: "360924",
      label: "宜丰县"
    }, {
      value: "360925",
      label: "靖安县"
    }, {
      value: "360926",
      label: "铜鼓县"
    }, {
      value: "360981",
      label: "丰城市"
    }, {
      value: "360982",
      label: "樟树市"
    }, {
      value: "360983",
      label: "高安市"
    }]
  }, {
    value: "361000",
    label: "抚州市",
    children: [{
      value: "361002",
      label: "临川区"
    }, {
      value: "361021",
      label: "南城县"
    }, {
      value: "361022",
      label: "黎川县"
    }, {
      value: "361023",
      label: "南丰县"
    }, {
      value: "361024",
      label: "崇仁县"
    }, {
      value: "361025",
      label: "乐安县"
    }, {
      value: "361026",
      label: "宜黄县"
    }, {
      value: "361027",
      label: "金溪县"
    }, {
      value: "361028",
      label: "资溪县"
    }, {
      value: "361003",
      label: "东乡区"
    }, {
      value: "361030",
      label: "广昌县"
    }]
  }, {
    value: "361100",
    label: "上饶市",
    children: [{
      value: "361102",
      label: "信州区"
    }, {
      value: "361121",
      label: "上饶县"
    }, {
      value: "361103",
      label: "广丰区"
    }, {
      value: "361123",
      label: "玉山县"
    }, {
      value: "361124",
      label: "铅山县"
    }, {
      value: "361125",
      label: "横峰县"
    }, {
      value: "361126",
      label: "弋阳县"
    }, {
      value: "361127",
      label: "余干县"
    }, {
      value: "361128",
      label: "鄱阳县"
    }, {
      value: "361129",
      label: "万年县"
    }, {
      value: "361130",
      label: "婺源县"
    }, {
      value: "361181",
      label: "德兴市"
    }]
  }]
}, {
  value: '370000',
  label: '山东省',
  children: [{
    value: "370100",
    label: "济南市",
    children: [{
      value: "370102",
      label: "历下区"
    }, {
      value: "370103",
      label: "市中区"
    }, {
      value: "370104",
      label: "槐荫区"
    }, {
      value: "370105",
      label: "天桥区"
    }, {
      value: "370112",
      label: "历城区"
    }, {
      value: "370113",
      label: "长清区"
    }, {
      value: "370124",
      label: "平阴县"
    }, {
      value: "370125",
      label: "济阳县"
    }, {
      value: "370126",
      label: "商河县"
    }, {
      value: "370114",
      label: "章丘区"
    }, {
      value: "370171",
      label: "济南高新技术产业开发区"
    }]
  }, {
    value: "370200",
    label: "青岛市",
    children: [{
      value: "370202",
      label: "市南区"
    }, {
      value: "370203",
      label: "市北区"
    }, {
      value: "370211",
      label: "黄岛区"
    }, {
      value: "370212",
      label: "崂山区"
    }, {
      value: "370213",
      label: "李沧区"
    }, {
      value: "370214",
      label: "城阳区"
    }, {
      value: "370281",
      label: "胶州市"
    }, {
      value: "370215",
      label: "即墨区"
    }, {
      value: "370283",
      label: "平度市"
    }, {
      value: "370285",
      label: "莱西市"
    }, {
      value: "370271",
      label: "青岛高新技术产业开发区"
    }]
  }, {
    value: "370300",
    label: "淄博市",
    children: [{
      value: "370302",
      label: "淄川区"
    }, {
      value: "370303",
      label: "张店区"
    }, {
      value: "370304",
      label: "博山区"
    }, {
      value: "370305",
      label: "临淄区"
    }, {
      value: "370306",
      label: "周村区"
    }, {
      value: "370321",
      label: "桓台县"
    }, {
      value: "370322",
      label: "高青县"
    }, {
      value: "370323",
      label: "沂源县"
    }]
  }, {
    value: "370400",
    label: "枣庄市",
    children: [{
      value: "370402",
      label: "市中区"
    }, {
      value: "370403",
      label: "薛城区"
    }, {
      value: "370404",
      label: "峄城区"
    }, {
      value: "370405",
      label: "台儿庄区"
    }, {
      value: "370406",
      label: "山亭区"
    }, {
      value: "370481",
      label: "滕州市"
    }]
  }, {
    value: "370500",
    label: "东营市",
    children: [{
      value: "370502",
      label: "东营区"
    }, {
      value: "370503",
      label: "河口区"
    }, {
      value: "370521",
      label: "垦利县"
    }, {
      value: "370522",
      label: "利津县"
    }, {
      value: "370523",
      label: "广饶县"
    }, {
      value: "370589",
      label: "西城区"
    }, {
      value: "370571",
      label: "东营经济技术开发区"
    }, {
      value: "370572",
      label: "东营港经济开发区"
    }]
  }, {
    value: "370600",
    label: "烟台市",
    children: [{
      value: "370602",
      label: "芝罘区"
    }, {
      value: "370611",
      label: "福山区"
    }, {
      value: "370612",
      label: "牟平区"
    }, {
      value: "370613",
      label: "莱山区"
    }, {
      value: "370634",
      label: "长岛县"
    }, {
      value: "370681",
      label: "龙口市"
    }, {
      value: "370682",
      label: "莱阳市"
    }, {
      value: "370683",
      label: "莱州市"
    }, {
      value: "370684",
      label: "蓬莱市"
    }, {
      value: "370685",
      label: "招远市"
    }, {
      value: "370686",
      label: "栖霞市"
    }, {
      value: "370687",
      label: "海阳市"
    }, {
      value: "370671",
      label: "烟台高新技术产业开发区"
    }, {
      value: "370672",
      label: "烟台经济技术开发区"
    }]
  }, {
    value: "370700",
    label: "潍坊市",
    children: [{
      value: "370702",
      label: "潍城区"
    }, {
      value: "370703",
      label: "寒亭区"
    }, {
      value: "370704",
      label: "坊子区"
    }, {
      value: "370705",
      label: "奎文区"
    }, {
      value: "370724",
      label: "临朐县"
    }, {
      value: "370725",
      label: "昌乐县"
    }, {
      value: "370772",
      label: "潍坊滨海经济技术开发区"
    }, {
      value: "370781",
      label: "青州市"
    }, {
      value: "370782",
      label: "诸城市"
    }, {
      value: "370783",
      label: "寿光市"
    }, {
      value: "370784",
      label: "安丘市"
    }, {
      value: "370785",
      label: "高密市"
    }, {
      value: "370786",
      label: "昌邑市"
    }]
  }, {
    value: "370800",
    label: "济宁市",
    children: [{
      value: "370811",
      label: "任城区"
    }, {
      value: "370826",
      label: "微山县"
    }, {
      value: "370827",
      label: "鱼台县"
    }, {
      value: "370828",
      label: "金乡县"
    }, {
      value: "370829",
      label: "嘉祥县"
    }, {
      value: "370830",
      label: "汶上县"
    }, {
      value: "370831",
      label: "泗水县"
    }, {
      value: "370832",
      label: "梁山县"
    }, {
      value: "370881",
      label: "曲阜市"
    }, {
      value: "370812",
      label: "兖州区"
    }, {
      value: "370883",
      label: "邹城市"
    }, {
      value: "370871",
      label: "济宁高新技术产业开发区"
    }]
  }, {
    value: "370900",
    label: "泰安市",
    children: [{
      value: "370902",
      label: "泰山区"
    }, {
      value: "370903",
      label: "岱岳区"
    }, {
      value: "370921",
      label: "宁阳县"
    }, {
      value: "370923",
      label: "东平县"
    }, {
      value: "370982",
      label: "新泰市"
    }, {
      value: "370983",
      label: "肥城市"
    }]
  }, {
    value: "371000",
    label: "威海市",
    children: [{
      value: "371002",
      label: "环翠区"
    }, {
      value: "371003",
      label: "文登区"
    }, {
      value: "371082",
      label: "荣成市"
    }, {
      value: "371083",
      label: "乳山市"
    }, {
      value: "371071",
      label: "威海火炬高技术产业开发区"
    }, {
      value: "371072",
      label: "威海经济技术开发区"
    }, {
      value: "371073",
      label: "威海临港经济技术开发区"
    }]
  }, {
    value: "371100",
    label: "日照市",
    children: [{
      value: "371102",
      label: "东港区"
    }, {
      value: "371103",
      label: "岚山区"
    }, {
      value: "371121",
      label: "五莲县"
    }, {
      value: "371122",
      label: "莒县"
    }, {
      value: "371171",
      label: "日照经济技术开发区"
    }, {
      value: "371172",
      label: "日照国际海洋城"
    }]
  }, {
    value: "371200",
    label: "莱芜市",
    children: [{
      value: "371202",
      label: "莱城区"
    }, {
      value: "371203",
      label: "钢城区"
    }]
  }, {
    value: "371300",
    label: "临沂市",
    children: [{
      value: "371302",
      label: "兰山区"
    }, {
      value: "371311",
      label: "罗庄区"
    }, {
      value: "371312",
      label: "河东区"
    }, {
      value: "371321",
      label: "沂南县"
    }, {
      value: "371322",
      label: "郯城县"
    }, {
      value: "371323",
      label: "沂水县"
    }, {
      value: "371324",
      label: "兰陵县"
    }, {
      value: "371325",
      label: "费县"
    }, {
      value: "371326",
      label: "平邑县"
    }, {
      value: "371327",
      label: "莒南县"
    }, {
      value: "371328",
      label: "蒙阴县"
    }, {
      value: "371329",
      label: "临沭县"
    }, {
      value: "371371",
      label: "临沂高新技术产业开发区"
    }, {
      value: "371373",
      label: "临沂临港经济开发区"
    }, {
      value: "371372",
      label: "临沂经济技术开发区"
    }]
  }, {
    value: "371400",
    label: "德州市",
    children: [{
      value: "371402",
      label: "德城区"
    }, {
      value: "371403",
      label: "陵城区"
    }, {
      value: "371422",
      label: "宁津县"
    }, {
      value: "371423",
      label: "庆云县"
    }, {
      value: "371424",
      label: "临邑县"
    }, {
      value: "371425",
      label: "齐河县"
    }, {
      value: "371426",
      label: "平原县"
    }, {
      value: "371427",
      label: "夏津县"
    }, {
      value: "371428",
      label: "武城县"
    }, {
      value: "371481",
      label: "乐陵市"
    }, {
      value: "371482",
      label: "禹城市"
    }, {
      value: "371471",
      label: "德州经济技术开发区"
    }, {
      value: "371472",
      label: "德州运河经济开发区"
    }]
  }, {
    value: "371500",
    label: "聊城市",
    children: [{
      value: "371502",
      label: "东昌府区"
    }, {
      value: "371521",
      label: "阳谷县"
    }, {
      value: "371522",
      label: "莘县"
    }, {
      value: "371523",
      label: "茌平县"
    }, {
      value: "371524",
      label: "东阿县"
    }, {
      value: "371525",
      label: "冠县"
    }, {
      value: "371526",
      label: "高唐县"
    }, {
      value: "371581",
      label: "临清市"
    }]
  }, {
    value: "371600",
    label: "滨州市",
    children: [{
      value: "371602",
      label: "滨城区"
    }, {
      value: "371621",
      label: "惠民县"
    }, {
      value: "371622",
      label: "阳信县"
    }, {
      value: "371623",
      label: "无棣县"
    }, {
      value: "371603",
      label: "沾化区"
    }, {
      value: "371625",
      label: "博兴县"
    }, {
      value: "371626",
      label: "邹平县"
    }]
  }, {
    value: "371700",
    label: "菏泽市",
    children: [{
      value: "371702",
      label: "牡丹区"
    }, {
      value: "371721",
      label: "曹县"
    }, {
      value: "371722",
      label: "单县"
    }, {
      value: "371723",
      label: "成武县"
    }, {
      value: "371724",
      label: "巨野县"
    }, {
      value: "371725",
      label: "郓城县"
    }, {
      value: "371726",
      label: "鄄城县"
    }, {
      value: "371727",
      label: "定陶区"
    }, {
      value: "371728",
      label: "东明县"
    }, {
      value: "371771",
      label: "菏泽经济技术开发区"
    }, {
      value: "371772",
      label: "菏泽高新技术开发区"
    }]
  }]
}, {
  value: '410000',
  label: '河南省',
  children: [{
    value: "410100",
    label: "郑州市",
    children: [{
      value: "410102",
      label: "中原区"
    }, {
      value: "410103",
      label: "二七区"
    }, {
      value: "410104",
      label: "管城回族区"
    }, {
      value: "410105",
      label: "金水区"
    }, {
      value: "410106",
      label: "上街区"
    }, {
      value: "410108",
      label: "惠济区"
    }, {
      value: "410122",
      label: "中牟县"
    }, {
      value: "410181",
      label: "巩义市"
    }, {
      value: "410182",
      label: "荥阳市"
    }, {
      value: "410183",
      label: "新密市"
    }, {
      value: "410184",
      label: "新郑市"
    }, {
      value: "410185",
      label: "登封市"
    }, {
      value: "410171",
      label: "郑州经济技术开发区"
    }, {
      value: "410172",
      label: "郑州高新技术产业开发区"
    }, {
      value: "410173",
      label: "郑州航空港经济综合实验区"
    }]
  }, {
    value: "410200",
    label: "开封市",
    children: [{
      value: "410202",
      label: "龙亭区"
    }, {
      value: "410203",
      label: "顺河回族区"
    }, {
      value: "410204",
      label: "鼓楼区"
    }, {
      value: "410205",
      label: "禹王台区"
    }, {
      value: "410211",
      label: "金明区"
    }, {
      value: "410221",
      label: "杞县"
    }, {
      value: "410222",
      label: "通许县"
    }, {
      value: "410223",
      label: "尉氏县"
    }, {
      value: "410225",
      label: "兰考县"
    }, {
      value: "410212",
      label: "祥符区"
    }]
  }, {
    value: "410300",
    label: "洛阳市",
    children: [{
      value: "410302",
      label: "老城区"
    }, {
      value: "410303",
      label: "西工区"
    }, {
      value: "410304",
      label: "廛河回族区"
    }, {
      value: "410305",
      label: "涧西区"
    }, {
      value: "410306",
      label: "吉利区"
    }, {
      value: "410307",
      label: "洛龙区"
    }, {
      value: "410322",
      label: "孟津县"
    }, {
      value: "410323",
      label: "新安县"
    }, {
      value: "410324",
      label: "栾川县"
    }, {
      value: "410325",
      label: "嵩县"
    }, {
      value: "410326",
      label: "汝阳县"
    }, {
      value: "410327",
      label: "宜阳县"
    }, {
      value: "410328",
      label: "洛宁县"
    }, {
      value: "410329",
      label: "伊川县"
    }, {
      value: "410381",
      label: "偃师市"
    }, {
      value: "410371",
      label: "洛阳高新技术产业开发区"
    }, {
      value: "471005",
      label: "其它区"
    }]
  }, {
    value: "410400",
    label: "平顶山市",
    children: [{
      value: "410402",
      label: "新华区"
    }, {
      value: "410403",
      label: "卫东区"
    }, {
      value: "410404",
      label: "石龙区"
    }, {
      value: "410411",
      label: "湛河区"
    }, {
      value: "410421",
      label: "宝丰县"
    }, {
      value: "410422",
      label: "叶县"
    }, {
      value: "410423",
      label: "鲁山县"
    }, {
      value: "410425",
      label: "郏县"
    }, {
      value: "410481",
      label: "舞钢市"
    }, {
      value: "410482",
      label: "汝州市"
    }, {
      value: "410471",
      label: "平顶山高新技术产业开发区"
    }, {
      value: "410472",
      label: "平顶山市新城区"
    }]
  }, {
    value: "410500",
    label: "安阳市",
    children: [{
      value: "410502",
      label: "文峰区"
    }, {
      value: "410503",
      label: "北关区"
    }, {
      value: "410505",
      label: "殷都区"
    }, {
      value: "410506",
      label: "龙安区"
    }, {
      value: "410522",
      label: "安阳县"
    }, {
      value: "410523",
      label: "汤阴县"
    }, {
      value: "410526",
      label: "滑县"
    }, {
      value: "410527",
      label: "内黄县"
    }, {
      value: "410581",
      label: "林州市"
    }, {
      value: "410571",
      label: "安阳高新技术产业开发区"
    }]
  }, {
    value: "410600",
    label: "鹤壁市",
    children: [{
      value: "410602",
      label: "鹤山区"
    }, {
      value: "410603",
      label: "山城区"
    }, {
      value: "410611",
      label: "淇滨区"
    }, {
      value: "410621",
      label: "浚县"
    }, {
      value: "410622",
      label: "淇县"
    }, {
      value: "410671",
      label: "鹤壁经济技术开发区"
    }]
  }, {
    value: "410700",
    label: "新乡市",
    children: [{
      value: "410702",
      label: "红旗区"
    }, {
      value: "410703",
      label: "卫滨区"
    }, {
      value: "410704",
      label: "凤泉区"
    }, {
      value: "410711",
      label: "牧野区"
    }, {
      value: "410721",
      label: "新乡县"
    }, {
      value: "410724",
      label: "获嘉县"
    }, {
      value: "410725",
      label: "原阳县"
    }, {
      value: "410726",
      label: "延津县"
    }, {
      value: "410727",
      label: "封丘县"
    }, {
      value: "410728",
      label: "长垣县"
    }, {
      value: "410781",
      label: "卫辉市"
    }, {
      value: "410782",
      label: "辉县市"
    }, {
      value: "410771",
      label: "新乡高新技术产业开发区"
    }, {
      value: "410773",
      label: "新乡市平原城乡一体化示范区"
    }, {
      value: "410772",
      label: "新乡经济技术开发区"
    }]
  }, {
    value: "410800",
    label: "焦作市",
    children: [{
      value: "410802",
      label: "解放区"
    }, {
      value: "410803",
      label: "中站区"
    }, {
      value: "410804",
      label: "马村区"
    }, {
      value: "410811",
      label: "山阳区"
    }, {
      value: "410821",
      label: "修武县"
    }, {
      value: "410822",
      label: "博爱县"
    }, {
      value: "410823",
      label: "武陟县"
    }, {
      value: "410825",
      label: "温县"
    }, {
      value: "410882",
      label: "沁阳市"
    }, {
      value: "410883",
      label: "孟州市"
    }, {
      value: "410871",
      label: "焦作城乡一体化示范区"
    }]
  }, {
    value: "410900",
    label: "濮阳市",
    children: [{
      value: "410902",
      label: "华龙区"
    }, {
      value: "410922",
      label: "清丰县"
    }, {
      value: "410923",
      label: "南乐县"
    }, {
      value: "410926",
      label: "范县"
    }, {
      value: "410927",
      label: "台前县"
    }, {
      value: "410928",
      label: "濮阳县"
    }, {
      value: "410971",
      label: "河南濮阳工业园区"
    }, {
      value: "410972",
      label: "濮阳经济技术开发区"
    }]
  }, {
    value: "411000",
    label: "许昌市",
    children: [{
      value: "411002",
      label: "魏都区"
    }, {
      value: "411003",
      label: "建安区"
    }, {
      value: "411024",
      label: "鄢陵县"
    }, {
      value: "411025",
      label: "襄城县"
    }, {
      value: "411081",
      label: "禹州市"
    }, {
      value: "411082",
      label: "长葛市"
    }, {
      value: "411071",
      label: "许昌经济技术开发区"
    }]
  }, {
    value: "411100",
    label: "漯河市",
    children: [{
      value: "411102",
      label: "源汇区"
    }, {
      value: "411103",
      label: "郾城区"
    }, {
      value: "411104",
      label: "召陵区"
    }, {
      value: "411121",
      label: "舞阳县"
    }, {
      value: "411122",
      label: "临颍县"
    }, {
      value: "411171",
      label: "漯河经济技术开发区"
    }]
  }, {
    value: "411200",
    label: "三门峡市",
    children: [{
      value: "411202",
      label: "湖滨区"
    }, {
      value: "411221",
      label: "渑池县"
    }, {
      value: "411222",
      label: "陕县"
    }, {
      value: "411224",
      label: "卢氏县"
    }, {
      value: "411281",
      label: "义马市"
    }, {
      value: "411282",
      label: "灵宝市"
    }, {
      value: "411203",
      label: "陕州区"
    }, {
      value: "411271",
      label: "河南三门峡经济开发区"
    }]
  }, {
    value: "411300",
    label: "南阳市",
    children: [{
      value: "411302",
      label: "宛城区"
    }, {
      value: "411303",
      label: "卧龙区"
    }, {
      value: "411321",
      label: "南召县"
    }, {
      value: "411322",
      label: "方城县"
    }, {
      value: "411323",
      label: "西峡县"
    }, {
      value: "411324",
      label: "镇平县"
    }, {
      value: "411325",
      label: "内乡县"
    }, {
      value: "411326",
      label: "淅川县"
    }, {
      value: "411327",
      label: "社旗县"
    }, {
      value: "411328",
      label: "唐河县"
    }, {
      value: "411329",
      label: "新野县"
    }, {
      value: "411330",
      label: "桐柏县"
    }, {
      value: "411381",
      label: "邓州市"
    }, {
      value: "411371",
      label: "南阳高新技术产业开发区"
    }, {
      value: "411372",
      label: "南阳市城乡一体化示范区"
    }]
  }, {
    value: "411400",
    label: "商丘市",
    children: [{
      value: "411402",
      label: "梁园区"
    }, {
      value: "411403",
      label: "睢阳区"
    }, {
      value: "411421",
      label: "民权县"
    }, {
      value: "411422",
      label: "睢县"
    }, {
      value: "411423",
      label: "宁陵县"
    }, {
      value: "411424",
      label: "柘城县"
    }, {
      value: "411425",
      label: "虞城县"
    }, {
      value: "411426",
      label: "夏邑县"
    }, {
      value: "411481",
      label: "永城市"
    }, {
      value: "411471",
      label: "豫东综合物流产业聚集区"
    }, {
      value: "411472",
      label: "河南商丘经济开发"
    }]
  }, {
    value: "411500",
    label: "信阳市",
    children: [{
      value: "411502",
      label: "浉河区"
    }, {
      value: "411503",
      label: "平桥区"
    }, {
      value: "411521",
      label: "罗山县"
    }, {
      value: "411522",
      label: "光山县"
    }, {
      value: "411523",
      label: "新县"
    }, {
      value: "411524",
      label: "商城县"
    }, {
      value: "411525",
      label: "固始县"
    }, {
      value: "411526",
      label: "潢川县"
    }, {
      value: "411527",
      label: "淮滨县"
    }, {
      value: "411528",
      label: "息县"
    }, {
      value: "411571",
      label: "信阳高新技术产业开发区"
    }]
  }, {
    value: "411600",
    label: "周口市",
    children: [{
      value: "411602",
      label: "川汇区"
    }, {
      value: "411621",
      label: "扶沟县"
    }, {
      value: "411622",
      label: "西华县"
    }, {
      value: "411623",
      label: "商水县"
    }, {
      value: "411624",
      label: "沈丘县"
    }, {
      value: "411625",
      label: "郸城县"
    }, {
      value: "411626",
      label: "淮阳县"
    }, {
      value: "411627",
      label: "太康县"
    }, {
      value: "411628",
      label: "鹿邑县"
    }, {
      value: "411681",
      label: "项城市"
    }, {
      value: "411671",
      label: "河南周口经济开发区"
    }]
  }, {
    value: "411700",
    label: "驻马店市",
    children: [{
      value: "411702",
      label: "驿城区"
    }, {
      value: "411721",
      label: "西平县"
    }, {
      value: "411722",
      label: "上蔡县"
    }, {
      value: "411723",
      label: "平舆县"
    }, {
      value: "411724",
      label: "正阳县"
    }, {
      value: "411725",
      label: "确山县"
    }, {
      value: "411726",
      label: "泌阳县"
    }, {
      value: "411727",
      label: "汝南县"
    }, {
      value: "411628",
      label: "遂平县"
    }, {
      value: "411729",
      label: "新蔡县"
    }, {
      value: "411771",
      label: "河南驻马店经济开发区"
    }]
  }]
}, {
  value: '420000',
  label: '湖北省',
  children: [{
    value: "420100",
    label: "武汉市",
    children: [{
      value: "420101",
      label: "市辖区"
    }, {
      value: "420102",
      label: "江岸区"
    }, {
      value: "420103",
      label: "江汉区"
    }, {
      value: "420104",
      label: "硚口区"
    }, {
      value: "420105",
      label: "汉阳区"
    }, {
      value: "420106",
      label: "武昌区"
    }, {
      value: "420107",
      label: "青山区"
    }, {
      value: "420111",
      label: "洪山区"
    }, {
      value: "420112",
      label: "东西湖区"
    }, {
      value: "420113",
      label: "汉南区"
    }, {
      value: "420114",
      label: "蔡甸区"
    }, {
      value: "420115",
      label: "江夏区"
    }, {
      value: "420116",
      label: "黄陂区"
    }, {
      value: "420117",
      label: "新洲区"
    }]
  }, {
    value: "420200",
    label: "黄石市",
    children: [{
      value: "420201",
      label: "市辖区"
    }, {
      value: "420202",
      label: "黄石港区"
    }, {
      value: "420203",
      label: "西塞山区"
    }, {
      value: "420204",
      label: "下陆区"
    }, {
      value: "420205",
      label: "铁山区"
    }, {
      value: "420222",
      label: "阳新县"
    }, {
      value: "420281",
      label: "大冶市"
    }]
  }, {
    value: "420300",
    label: "十堰市",
    children: [{
      value: "420301",
      label: "市辖区"
    }, {
      value: "420302",
      label: "茅箭区"
    }, {
      value: "420303",
      label: "张湾区"
    }, {
      value: "420304",
      label: "郧阳区"
    }, {
      value: "420322",
      label: "郧西县"
    }, {
      value: "420323",
      label: "竹山县"
    }, {
      value: "420324",
      label: "竹溪县"
    }, {
      value: "420325",
      label: "房县"
    }, {
      value: "420381",
      label: "丹江口市"
    }]
  }, {
    value: "420500",
    label: "宜昌市",
    children: [{
      value: "420501",
      label: "市辖区"
    }, {
      value: "420502",
      label: "西陵区"
    }, {
      value: "420503",
      label: "伍家岗区"
    }, {
      value: "420504",
      label: "点军区"
    }, {
      value: "420505",
      label: "猇亭区"
    }, {
      value: "420506",
      label: "夷陵区"
    }, {
      value: "420525",
      label: "远安县"
    }, {
      value: "420526",
      label: "兴山县"
    }, {
      value: "420527",
      label: "秭归县"
    }, {
      value: "420528",
      label: "长阳土家族自治县"
    }, {
      value: "420529",
      label: "五峰土家族自治县"
    }, {
      value: "420581",
      label: "宜都市"
    }, {
      value: "420582",
      label: "当阳市"
    }, {
      value: "420583",
      label: "枝江市"
    }]
  }, {
    value: "420600",
    label: "襄阳市",
    children: [{
      value: "420601",
      label: "市辖区"
    }, {
      value: "420602",
      label: "襄城区"
    }, {
      value: "420606",
      label: "樊城区"
    }, {
      value: "420607",
      label: "襄州区"
    }, {
      value: "420624",
      label: "南漳县"
    }, {
      value: "420625",
      label: "谷城县"
    }, {
      value: "420626",
      label: "保康县"
    }, {
      value: "420682",
      label: "老河口市"
    }, {
      value: "420683",
      label: "枣阳市"
    }, {
      value: "420684",
      label: "宜城市"
    }]
  }, {
    value: "420700",
    label: "鄂州市",
    children: [{
      value: "420701",
      label: "市辖区"
    }, {
      value: "420702",
      label: "梁子湖区"
    }, {
      value: "420703",
      label: "华容区"
    }, {
      value: "420704",
      label: "鄂城区"
    }]
  }, {
    value: "420800",
    label: "荆门市",
    children: [{
      value: "420801",
      label: "市辖区"
    }, {
      value: "420802",
      label: "东宝区"
    }, {
      value: "420804",
      label: "掇刀区"
    }, {
      value: "420821",
      label: "京山县"
    }, {
      value: "420822",
      label: "沙洋县"
    }, {
      value: "420881",
      label: "钟祥市"
    }]
  }, {
    value: "420900",
    label: "孝感市",
    children: [{
      value: "420901",
      label: "市辖区"
    }, {
      value: "420902",
      label: "孝南区"
    }, {
      value: "420921",
      label: "孝昌县"
    }, {
      value: "420922",
      label: "大悟县"
    }, {
      value: "420923",
      label: "云梦县"
    }, {
      value: "420981",
      label: "应城市"
    }, {
      value: "420982",
      label: "安陆市"
    }, {
      value: "420984",
      label: "汉川市"
    }]
  }, {
    value: "421000",
    label: "荆州市",
    children: [{
      value: "421001",
      label: "市辖区"
    }, {
      value: "421002",
      label: "沙市区"
    }, {
      value: "421003",
      label: "荆州区"
    }, {
      value: "421022",
      label: "公安县"
    }, {
      value: "421023",
      label: "监利县"
    }, {
      value: "421024",
      label: "江陵县"
    }, {
      value: "421071",
      label: "荆州经济技术开发区"
    }, {
      value: "421081",
      label: "石首市"
    }, {
      value: "421083",
      label: "洪湖市"
    }, {
      value: "421087",
      label: "松滋市"
    }]
  }, {
    value: "421100",
    label: "黄冈市",
    children: [{
      value: "421101",
      label: "市辖区"
    }, {
      value: "421102",
      label: "黄州区"
    }, {
      value: "421121",
      label: "团风县"
    }, {
      value: "421122",
      label: "红安县"
    }, {
      value: "421123",
      label: "罗田县"
    }, {
      value: "421124",
      label: "英山县"
    }, {
      value: "421125",
      label: "浠水县"
    }, {
      value: "421126",
      label: "蕲春县"
    }, {
      value: "421127",
      label: "黄梅县"
    }, {
      value: "421171",
      label: "龙感湖管理区"
    }, {
      value: "421181",
      label: "麻城市"
    }, {
      value: "421182",
      label: "武穴市"
    }]
  }, {
    value: "421200",
    label: "咸宁市",
    children: [{
      value: "421201",
      label: "市辖区"
    }, {
      value: "421202",
      label: "咸安区"
    }, {
      value: "421221",
      label: "嘉鱼县"
    }, {
      value: "421222",
      label: "通城县"
    }, {
      value: "421223",
      label: "崇阳县"
    }, {
      value: "421224",
      label: "通山县"
    }, {
      value: "421281",
      label: "赤壁市"
    }]
  }, {
    value: "421300",
    label: "随州市",
    children: [{
      value: "421301",
      label: "市辖区"
    }, {
      value: "421303",
      label: "曾都区"
    }, {
      value: "421321",
      label: "随县"
    }, {
      value: "421381",
      label: "广水市"
    }]
  }, {
    value: "422800",
    label: "恩施土家族苗族自治州",
    children: [{
      value: "422801",
      label: "恩施市"
    }, {
      value: "422802",
      label: "利川市"
    }, {
      value: "422822",
      label: "建始县"
    }, {
      value: "422823",
      label: "巴东县"
    }, {
      value: "422825",
      label: "宣恩县"
    }, {
      value: "422826",
      label: "咸丰县"
    }, {
      value: "422827",
      label: "来凤县"
    }, {
      value: "422828",
      label: "鹤峰县"
    }]
  }, {
    value: "429000",
    label: "省直辖县级行政区划",
    children: [{
      value: "429004",
      label: "仙桃市"
    }, {
      value: "429005",
      label: "潜江市"
    }, {
      value: "429006",
      label: "天门市"
    }, {
      value: "429021",
      label: "神农架林区"
    }]
  }]
}, {
  value: '430000',
  label: '湖南省',
  children: [{
    value: "430100",
    label: "长沙市",
    children: [{
      value: "430101",
      label: "市辖区"
    }, {
      value: "430102",
      label: "芙蓉区"
    }, {
      value: "430103",
      label: "天心区"
    }, {
      value: "430104",
      label: "岳麓区"
    }, {
      value: "430105",
      label: "开福区"
    }, {
      value: "430111",
      label: "雨花区"
    }, {
      value: "430112",
      label: "望城区"
    }, {
      value: "430121",
      label: "长沙县"
    }, {
      value: "430181",
      label: "浏阳市"
    }, {
      value: "430182",
      label: "宁乡市"
    }]
  }, {
    value: "430200",
    label: "株洲市",
    children: [{
      value: "430201",
      label: "市辖区"
    }, {
      value: "430202",
      label: "荷塘区"
    }, {
      value: "430203",
      label: "芦淞区"
    }, {
      value: "430204",
      label: "石峰区"
    }, {
      value: "430211",
      label: "天元区"
    }, {
      value: "430221",
      label: "株洲县"
    }, {
      value: "430223",
      label: "攸县"
    }, {
      value: "430224",
      label: "茶陵县"
    }, {
      value: "430225",
      label: "炎陵县"
    }, {
      value: "430271",
      label: "云龙示范区"
    }, {
      value: "430281",
      label: "醴陵市"
    }]
  }, {
    value: "430300",
    label: "湘潭市",
    children: [{
      value: "430301",
      label: "市辖区"
    }, {
      value: "430302",
      label: "雨湖区"
    }, {
      value: "430304",
      label: "岳塘区"
    }, {
      value: "430321",
      label: "湘潭县"
    }, {
      value: "430371",
      label: "湖南湘潭高新技术产业园区"
    }, {
      value: "430372",
      label: "湘潭昭山示范区"
    }, {
      value: "430373",
      label: "湘潭九华示范区"
    }, {
      value: "430381",
      label: "湘乡市"
    }, {
      value: "430382",
      label: "韶山市"
    }]
  }, {
    value: "430400",
    label: "衡阳市",
    children: [{
      value: "430401",
      label: "市辖区"
    }, {
      value: "430405",
      label: "珠晖区"
    }, {
      value: "430406",
      label: "雁峰区"
    }, {
      value: "430407",
      label: "石鼓区"
    }, {
      value: "430408",
      label: "蒸湘区"
    }, {
      value: "430412",
      label: "南岳区"
    }, {
      value: "430421",
      label: "衡阳县"
    }, {
      value: "430422",
      label: "衡南县"
    }, {
      value: "430423",
      label: "衡山县"
    }, {
      value: "430424",
      label: "衡东县"
    }, {
      value: "430426",
      label: "祁东县"
    }, {
      value: "430471",
      label: "衡阳综合保税区"
    }, {
      value: "430472",
      label: "湖南衡阳高新技术产业园区"
    }, {
      value: "430473",
      label: "湖南衡阳松木经济开发区"
    }, {
      value: "430481",
      label: "耒阳市"
    }, {
      value: "430482",
      label: "常宁市"
    }]
  }, {
    value: "430500",
    label: "邵阳市",
    children: [{
      value: "430501",
      label: "市辖区"
    }, {
      value: "430502",
      label: "双清区"
    }, {
      value: "430503",
      label: "大祥区"
    }, {
      value: "430511",
      label: "北塔区"
    }, {
      value: "430521",
      label: "邵东县"
    }, {
      value: "430522",
      label: "新邵县"
    }, {
      value: "430523",
      label: "邵阳县"
    }, {
      value: "430524",
      label: "隆回县"
    }, {
      value: "430525",
      label: "洞口县"
    }, {
      value: "430527",
      label: "绥宁县"
    }, {
      value: "430528",
      label: "新宁县"
    }, {
      value: "430529",
      label: "城步苗族自治县"
    }, {
      value: "430581",
      label: "武冈市"
    }]
  }, {
    value: "430600",
    label: "岳阳市",
    children: [{
      value: "430601",
      label: "市辖区"
    }, {
      value: "430602",
      label: "岳阳楼区"
    }, {
      value: "430603",
      label: "云溪区"
    }, {
      value: "430611",
      label: "君山区"
    }, {
      value: "430621",
      label: "岳阳县"
    }, {
      value: "430623",
      label: "华容县"
    }, {
      value: "430624",
      label: "湘阴县"
    }, {
      value: "430626",
      label: "平江县"
    }, {
      value: "430671",
      label: "岳阳市屈原管理区"
    }, {
      value: "430681",
      label: "汨罗市"
    }, {
      value: "430682",
      label: "临湘市"
    }]
  }, {
    value: "430700",
    label: "常德市",
    children: [{
      value: "430701",
      label: "市辖区"
    }, {
      value: "430702",
      label: "武陵区"
    }, {
      value: "430703",
      label: "鼎城区"
    }, {
      value: "430721",
      label: "安乡县"
    }, {
      value: "430722",
      label: "汉寿县"
    }, {
      value: "430723",
      label: "澧县"
    }, {
      value: "430724",
      label: "临澧县"
    }, {
      value: "430725",
      label: "桃源县"
    }, {
      value: "430726",
      label: "石门县"
    }, {
      value: "430771",
      label: "常德市西洞庭管理区"
    }, {
      value: "430781",
      label: "津市市"
    }]
  }, {
    value: "430800",
    label: "张家界市",
    children: [{
      value: "430801",
      label: "市辖区"
    }, {
      value: "430802",
      label: "永定区"
    }, {
      value: "430811",
      label: "武陵源区"
    }, {
      value: "430821",
      label: "慈利县"
    }, {
      value: "430822",
      label: "桑植县"
    }]
  }, {
    value: "430900",
    label: "益阳市",
    children: [{
      value: "430901",
      label: "市辖区"
    }, {
      value: "430902",
      label: "资阳区"
    }, {
      value: "430903",
      label: "赫山区"
    }, {
      value: "430921",
      label: "南县"
    }, {
      value: "430922",
      label: "桃江县"
    }, {
      value: "430923",
      label: "安化县"
    }, {
      value: "430971",
      label: "益阳市大通湖管理区"
    }, {
      value: "430972",
      label: "湖南益阳高新技术产业园区"
    }, {
      value: "430981",
      label: "沅江市"
    }]
  }, {
    value: "431000",
    label: "郴州市",
    children: [{
      value: "431001",
      label: "市辖区"
    }, {
      value: "431002",
      label: "北湖区"
    }, {
      value: "431003",
      label: "苏仙区"
    }, {
      value: "431021",
      label: "桂阳县"
    }, {
      value: "431022",
      label: "宜章县"
    }, {
      value: "431023",
      label: "永兴县"
    }, {
      value: "431024",
      label: "嘉禾县"
    }, {
      value: "431025",
      label: "临武县"
    }, {
      value: "431026",
      label: "汝城县"
    }, {
      value: "431027",
      label: "桂东县"
    }, {
      value: "431028",
      label: "安仁县"
    }, {
      value: "431081",
      label: "资兴市"
    }]
  }, {
    value: "431100",
    label: "永州市",
    children: [{
      value: "431101",
      label: "市辖区"
    }, {
      value: "431102",
      label: "零陵区"
    }, {
      value: "431103",
      label: "冷水滩区"
    }, {
      value: "431121",
      label: "祁阳县"
    }, {
      value: "431122",
      label: "东安县"
    }, {
      value: "431123",
      label: "双牌县"
    }, {
      value: "431124",
      label: "道县"
    }, {
      value: "431125",
      label: "江永县"
    }, {
      value: "431126",
      label: "宁远县"
    }, {
      value: "431127",
      label: "蓝山县"
    }, {
      value: "431128",
      label: "新田县"
    }, {
      value: "431129",
      label: "江华瑶族自治县"
    }, {
      value: "431171",
      label: "永州经济技术开发区"
    }, {
      value: "431172",
      label: "永州市金洞管理区"
    }, {
      value: "431173",
      label: "永州市回龙圩管理区"
    }]
  }, {
    value: "431200",
    label: "怀化市",
    children: [{
      value: "431201",
      label: "市辖区"
    }, {
      value: "431202",
      label: "鹤城区"
    }, {
      value: "431221",
      label: "中方县"
    }, {
      value: "431222",
      label: "沅陵县"
    }, {
      value: "431223",
      label: "辰溪县"
    }, {
      value: "431224",
      label: "溆浦县"
    }, {
      value: "431225",
      label: "会同县"
    }, {
      value: "431226",
      label: "麻阳苗族自治县"
    }, {
      value: "431227",
      label: "新晃侗族自治县"
    }, {
      value: "431228",
      label: "芷江侗族自治县"
    }, {
      value: "431229",
      label: "靖州苗族侗族自治县"
    }, {
      value: "431230",
      label: "通道侗族自治县"
    }, {
      value: "431271",
      label: "怀化市洪江管理区"
    }, {
      value: "431281",
      label: "洪江市"
    }]
  }, {
    value: "431300",
    label: "娄底市",
    children: [{
      value: "431301",
      label: "市辖区"
    }, {
      value: "431302",
      label: "娄星区"
    }, {
      value: "431321",
      label: "双峰县"
    }, {
      value: "431322",
      label: "新化县"
    }, {
      value: "431381",
      label: "冷水江市"
    }, {
      value: "431382",
      label: "涟源市"
    }]
  }, {
    value: "433100",
    label: "湘西土家族苗族自治州",
    children: [{
      value: "433101",
      label: "吉首市"
    }, {
      value: "433122",
      label: "泸溪县"
    }, {
      value: "433123",
      label: "凤凰县"
    }, {
      value: "433124",
      label: "花垣县"
    }, {
      value: "433125",
      label: "保靖县"
    }, {
      value: "433126",
      label: "古丈县"
    }, {
      value: "433127",
      label: "永顺县"
    }, {
      value: "433130",
      label: "龙山县"
    }, {
      value: "433172",
      label: "湖南吉首经济开发区"
    }, {
      value: "433173",
      label: "湖南永顺经济开发区"
    }]
  }]
}, {
  value: '440000',
  label: '广东省',
  children: [{
    value: "440100",
    label: "广州市",
    children: [{
      value: "440101",
      label: "市辖区"
    }, {
      value: "440103",
      label: "荔湾区"
    }, {
      value: "440104",
      label: "越秀区"
    }, {
      value: "440105",
      label: "海珠区"
    }, {
      value: "440106",
      label: "天河区"
    }, {
      value: "440111",
      label: "白云区"
    }, {
      value: "440112",
      label: "黄埔区"
    }, {
      value: "440113",
      label: "番禺区"
    }, {
      value: "440114",
      label: "花都区"
    }, {
      value: "440115",
      label: "南沙区"
    }, {
      value: "440117",
      label: "从化区"
    }, {
      value: "440118",
      label: "增城区"
    }]
  }, {
    value: "440200",
    label: "韶关市",
    children: [{
      value: "440201",
      label: "市辖区"
    }, {
      value: "440203",
      label: "武江区"
    }, {
      value: "440204",
      label: "浈江区"
    }, {
      value: "440205",
      label: "曲江区"
    }, {
      value: "440222",
      label: "始兴县"
    }, {
      value: "440224",
      label: "仁化县"
    }, {
      value: "440229",
      label: "翁源县"
    }, {
      value: "440232",
      label: "乳源瑶族自治县"
    }, {
      value: "440233",
      label: "新丰县"
    }, {
      value: "440281",
      label: "乐昌市"
    }, {
      value: "440282",
      label: "南雄市"
    }]
  }, {
    value: "440300",
    label: "深圳市",
    children: [{
      value: "440301",
      label: "市辖区"
    }, {
      value: "440303",
      label: "罗湖区"
    }, {
      value: "440304",
      label: "福田区"
    }, {
      value: "440305",
      label: "南山区"
    }, {
      value: "440306",
      label: "宝安区"
    }, {
      value: "440307",
      label: "龙岗区"
    }, {
      value: "440308",
      label: "盐田区"
    }, {
      value: "440309",
      label: "龙华区"
    }, {
      value: "440310",
      label: "坪山区"
    }]
  }, {
    value: "440400",
    label: "珠海市",
    children: [{
      value: "440401",
      label: "市辖区"
    }, {
      value: "440402",
      label: "香洲区"
    }, {
      value: "440403",
      label: "斗门区"
    }, {
      value: "440404",
      label: "金湾区"
    }]
  }, {
    value: "440500",
    label: "汕头市",
    children: [{
      value: "440501",
      label: "市辖区"
    }, {
      value: "440507",
      label: "龙湖区"
    }, {
      value: "440511",
      label: "金平区"
    }, {
      value: "440512",
      label: "濠江区"
    }, {
      value: "440513",
      label: "潮阳区"
    }, {
      value: "440514",
      label: "潮南区"
    }, {
      value: "440515",
      label: "澄海区"
    }, {
      value: "440523",
      label: "南澳县"
    }]
  }, {
    value: "440600",
    label: "佛山市",
    children: [{
      value: "440601",
      label: "市辖区"
    }, {
      value: "440604",
      label: "禅城区"
    }, {
      value: "440605",
      label: "南海区"
    }, {
      value: "440606",
      label: "顺德区"
    }, {
      value: "440607",
      label: "三水区"
    }, {
      value: "440608",
      label: "高明区"
    }]
  }, {
    value: "440700",
    label: "江门市",
    children: [{
      value: "440701",
      label: "市辖区"
    }, {
      value: "440703",
      label: "蓬江区"
    }, {
      value: "440704",
      label: "江海区"
    }, {
      value: "440705",
      label: "新会区"
    }, {
      value: "440781",
      label: "台山市"
    }, {
      value: "440783",
      label: "开平市"
    }, {
      value: "440784",
      label: "鹤山市"
    }, {
      value: "440785",
      label: "恩平市"
    }]
  }, {
    value: "440800",
    label: "湛江市",
    children: [{
      value: "440801",
      label: "市辖区"
    }, {
      value: "440802",
      label: "赤坎区"
    }, {
      value: "440803",
      label: "霞山区"
    }, {
      value: "440804",
      label: "坡头区"
    }, {
      value: "440811",
      label: "麻章区"
    }, {
      value: "440823",
      label: "遂溪县"
    }, {
      value: "440825",
      label: "徐闻县"
    }, {
      value: "440881",
      label: "廉江市"
    }, {
      value: "440882",
      label: "雷州市"
    }, {
      value: "440883",
      label: "吴川市"
    }]
  }, {
    value: "440900",
    label: "茂名市",
    children: [{
      value: "440901",
      label: "市辖区"
    }, {
      value: "440902",
      label: "茂南区"
    }, {
      value: "440904",
      label: "电白区"
    }, {
      value: "440981",
      label: "高州市"
    }, {
      value: "440982",
      label: "化州市"
    }, {
      value: "440983",
      label: "信宜市"
    }]
  }, {
    value: "441200",
    label: "肇庆市",
    children: [{
      value: "441201",
      label: "市辖区"
    }, {
      value: "441202",
      label: "端州区"
    }, {
      value: "441203",
      label: "鼎湖区"
    }, {
      value: "441204",
      label: "高要区"
    }, {
      value: "441223",
      label: "广宁县"
    }, {
      value: "441224",
      label: "怀集县"
    }, {
      value: "441225",
      label: "封开县"
    }, {
      value: "441226",
      label: "德庆县"
    }, {
      value: "441284",
      label: "四会市"
    }]
  }, {
    value: "441300",
    label: "惠州市",
    children: [{
      value: "441301",
      label: "市辖区"
    }, {
      value: "441302",
      label: "惠城区"
    }, {
      value: "441303",
      label: "惠阳区"
    }, {
      value: "441322",
      label: "博罗县"
    }, {
      value: "441323",
      label: "惠东县"
    }, {
      value: "441324",
      label: "龙门县"
    }]
  }, {
    value: "441400",
    label: "梅州市",
    children: [{
      value: "441401",
      label: "市辖区"
    }, {
      value: "441402",
      label: "梅江区"
    }, {
      value: "441403",
      label: "梅县区"
    }, {
      value: "441422",
      label: "大埔县"
    }, {
      value: "441423",
      label: "丰顺县"
    }, {
      value: "441424",
      label: "五华县"
    }, {
      value: "441426",
      label: "平远县"
    }, {
      value: "441427",
      label: "蕉岭县"
    }, {
      value: "441481",
      label: "兴宁市"
    }]
  }, {
    value: "441500",
    label: "汕尾市",
    children: [{
      value: "441501",
      label: "市辖区"
    }, {
      value: "441502",
      label: "城区"
    }, {
      value: "441521",
      label: "海丰县"
    }, {
      value: "441523",
      label: "陆河县"
    }, {
      value: "441581",
      label: "陆丰市"
    }]
  }, {
    value: "441600",
    label: "河源市",
    children: [{
      value: "441601",
      label: "市辖区"
    }, {
      value: "441602",
      label: "源城区"
    }, {
      value: "441621",
      label: "紫金县"
    }, {
      value: "441622",
      label: "龙川县"
    }, {
      value: "441623",
      label: "连平县"
    }, {
      value: "441624",
      label: "和平县"
    }, {
      value: "441625",
      label: "东源县"
    }]
  }, {
    value: "441700",
    label: "阳江市",
    children: [{
      value: "441701",
      label: "市辖区"
    }, {
      value: "441702",
      label: "江城区"
    }, {
      value: "441704",
      label: "阳东区"
    }, {
      value: "441721",
      label: "阳西县"
    }, {
      value: "441781",
      label: "阳春市"
    }]
  }, {
    value: "441800",
    label: "清远市",
    children: [{
      value: "441801",
      label: "市辖区"
    }, {
      value: "441802",
      label: "清城区"
    }, {
      value: "441803",
      label: "清新区"
    }, {
      value: "441821",
      label: "佛冈县"
    }, {
      value: "441823",
      label: "阳山县"
    }, {
      value: "441825",
      label: "连山壮族瑶族自治县"
    }, {
      value: "441826",
      label: "连南瑶族自治县"
    }, {
      value: "441881",
      label: "英德市"
    }, {
      value: "441882",
      label: "连州市"
    }]
  }, {
    value: "441900",
    label: "东莞市"
  }, {
    value: "442000",
    label: "中山市"
  }, {
    value: "445100",
    label: "潮州市",
    children: [{
      value: "445101",
      label: "市辖区"
    }, {
      value: "445102",
      label: "湘桥区"
    }, {
      value: "445103",
      label: "潮安区"
    }, {
      value: "445122",
      label: "饶平县"
    }]
  }, {
    value: "445200",
    label: "揭阳市",
    children: [{
      value: "445201",
      label: "市辖区"
    }, {
      value: "445202",
      label: "榕城区"
    }, {
      value: "445203",
      label: "揭东区"
    }, {
      value: "445222",
      label: "揭西县"
    }, {
      value: "445224",
      label: "惠来县"
    }, {
      value: "445281",
      label: "普宁市"
    }]
  }, {
    value: "445300",
    label: "云浮市",
    children: [{
      value: "445301",
      label: "市辖区"
    }, {
      value: "445302",
      label: "云城区"
    }, {
      value: "445303",
      label: "云安区"
    }, {
      value: "445321",
      label: "新兴县"
    }, {
      value: "445322",
      label: "郁南县"
    }, {
      value: "445381",
      label: "罗定市"
    }]
  }]
}, {
  value: '450000',
  label: '广西壮族',
  children: [{
    value: "450100",
    label: "南宁市",
    children: [{
      value: "450101",
      label: "市辖区"
    }, {
      value: "450102",
      label: "兴宁区"
    }, {
      value: "450103",
      label: "青秀区"
    }, {
      value: "450105",
      label: "江南区"
    }, {
      value: "450107",
      label: "西乡塘区"
    }, {
      value: "450108",
      label: "良庆区"
    }, {
      value: "450109",
      label: "邕宁区"
    }, {
      value: "450110",
      label: "武鸣区"
    }, {
      value: "450123",
      label: "隆安县"
    }, {
      value: "450124",
      label: "马山县"
    }, {
      value: "450125",
      label: "上林县"
    }, {
      value: "450126",
      label: "宾阳县"
    }, {
      value: "450127",
      label: "横县"
    }]
  }, {
    value: "450200",
    label: "柳州市",
    children: [{
      value: "450201",
      label: "市辖区"
    }, {
      value: "450202",
      label: "城中区"
    }, {
      value: "450203",
      label: "鱼峰区"
    }, {
      value: "450204",
      label: "柳南区"
    }, {
      value: "450205",
      label: "柳北区"
    }, {
      value: "450206",
      label: "柳江区"
    }, {
      value: "450222",
      label: "柳城县"
    }, {
      value: "450223",
      label: "鹿寨县"
    }, {
      value: "450224",
      label: "融安县"
    }, {
      value: "450225",
      label: "融水苗族自治县"
    }, {
      value: "450226",
      label: "三江侗族自治县"
    }]
  }, {
    value: "450300",
    label: "桂林市",
    children: [{
      value: "450301",
      label: "市辖区"
    }, {
      value: "450302",
      label: "秀峰区"
    }, {
      value: "450303",
      label: "叠彩区"
    }, {
      value: "450304",
      label: "象山区"
    }, {
      value: "450305",
      label: "七星区"
    }, {
      value: "450311",
      label: "雁山区"
    }, {
      value: "450312",
      label: "临桂区"
    }, {
      value: "450321",
      label: "阳朔县"
    }, {
      value: "450323",
      label: "灵川县"
    }, {
      value: "450324",
      label: "全州县"
    }, {
      value: "450325",
      label: "兴安县"
    }, {
      value: "450326",
      label: "永福县"
    }, {
      value: "450327",
      label: "灌阳县"
    }, {
      value: "450328",
      label: "龙胜各族自治县"
    }, {
      value: "450329",
      label: "资源县"
    }, {
      value: "450330",
      label: "平乐县"
    }, {
      value: "450331",
      label: "荔浦县"
    }, {
      value: "450332",
      label: "恭城瑶族自治县"
    }]
  }, {
    value: "450400",
    label: "梧州市",
    children: [{
      value: "450401",
      label: "市辖区"
    }, {
      value: "450403",
      label: "万秀区"
    }, {
      value: "450405",
      label: "长洲区"
    }, {
      value: "450406",
      label: "龙圩区"
    }, {
      value: "450421",
      label: "苍梧县"
    }, {
      value: "450422",
      label: "藤县"
    }, {
      value: "450423",
      label: "蒙山县"
    }, {
      value: "450481",
      label: "岑溪市"
    }]
  }, {
    value: "450500",
    label: "北海市",
    children: [{
      value: "450501",
      label: "市辖区"
    }, {
      value: "450502",
      label: "海城区"
    }, {
      value: "450503",
      label: "银海区"
    }, {
      value: "450512",
      label: "铁山港区"
    }, {
      value: "450521",
      label: "合浦县"
    }]
  }, {
    value: "450600",
    label: "防城港市",
    children: [{
      value: "450601",
      label: "市辖区"
    }, {
      value: "450602",
      label: "港口区"
    }, {
      value: "450603",
      label: "防城区"
    }, {
      value: "450621",
      label: "上思县"
    }, {
      value: "450681",
      label: "东兴市"
    }]
  }, {
    value: "450700",
    label: "钦州市",
    children: [{
      value: "450701",
      label: "市辖区"
    }, {
      value: "450702",
      label: "钦南区"
    }, {
      value: "450703",
      label: "钦北区"
    }, {
      value: "450721",
      label: "灵山县"
    }, {
      value: "450722",
      label: "浦北县"
    }]
  }, {
    value: "450800",
    label: "贵港市",
    children: [{
      value: "450801",
      label: "市辖区"
    }, {
      value: "450802",
      label: "港北区"
    }, {
      value: "450803",
      label: "港南区"
    }, {
      value: "450804",
      label: "覃塘区"
    }, {
      value: "450821",
      label: "平南县"
    }, {
      value: "450881",
      label: "桂平市"
    }]
  }, {
    value: "450900",
    label: "玉林市",
    children: [{
      value: "450901",
      label: "市辖区"
    }, {
      value: "450902",
      label: "玉州区"
    }, {
      value: "450903",
      label: "福绵区"
    }, {
      value: "450921",
      label: "容县"
    }, {
      value: "450922",
      label: "陆川县"
    }, {
      value: "450923",
      label: "博白县"
    }, {
      value: "450924",
      label: "兴业县"
    }, {
      value: "450981",
      label: "北流市"
    }]
  }, {
    value: "451000",
    label: "百色市",
    children: [{
      value: "451001",
      label: "市辖区"
    }, {
      value: "451002",
      label: "右江区"
    }, {
      value: "451021",
      label: "田阳县"
    }, {
      value: "451022",
      label: "田东县"
    }, {
      value: "451023",
      label: "平果县"
    }, {
      value: "451024",
      label: "德保县"
    }, {
      value: "451026",
      label: "那坡县"
    }, {
      value: "451027",
      label: "凌云县"
    }, {
      value: "451028",
      label: "乐业县"
    }, {
      value: "451029",
      label: "田林县"
    }, {
      value: "451030",
      label: "西林县"
    }, {
      value: "451031",
      label: "隆林各族自治县"
    }, {
      value: "451081",
      label: "靖西市"
    }]
  }, {
    value: "451100",
    label: "贺州市",
    children: [{
      value: "451101",
      label: "市辖区"
    }, {
      value: "451102",
      label: "八步区"
    }, {
      value: "451103",
      label: "平桂区"
    }, {
      value: "451121",
      label: "昭平县"
    }, {
      value: "451122",
      label: "钟山县"
    }, {
      value: "451123",
      label: "富川瑶族自治县"
    }]
  }, {
    value: "451200",
    label: "河池市",
    children: [{
      value: "451201",
      label: "市辖区"
    }, {
      value: "451202",
      label: "金城江区"
    }, {
      value: "451203",
      label: "宜州区"
    }, {
      value: "451221",
      label: "南丹县"
    }, {
      value: "451222",
      label: "天峨县"
    }, {
      value: "451223",
      label: "凤山县"
    }, {
      value: "451224",
      label: "东兰县"
    }, {
      value: "451225",
      label: "罗城仫佬族自治县"
    }, {
      value: "451226",
      label: "环江毛南族自治县"
    }, {
      value: "451227",
      label: "巴马瑶族自治县"
    }, {
      value: "451228",
      label: "都安瑶族自治县"
    }, {
      value: "451229",
      label: "大化瑶族自治县"
    }]
  }, {
    value: "451300",
    label: "来宾市",
    children: [{
      value: "451301",
      label: "市辖区"
    }, {
      value: "451302",
      label: "兴宾区"
    }, {
      value: "451321",
      label: "忻城县"
    }, {
      value: "451322",
      label: "象州县"
    }, {
      value: "451323",
      label: "武宣县"
    }, {
      value: "451324",
      label: "金秀瑶族自治县"
    }, {
      value: "451381",
      label: "合山市"
    }]
  }, {
    value: "451400",
    label: "崇左市",
    children: [{
      value: "451401",
      label: "市辖区"
    }, {
      value: "451402",
      label: "江州区"
    }, {
      value: "451421",
      label: "扶绥县"
    }, {
      value: "451422",
      label: "宁明县"
    }, {
      value: "451423",
      label: "龙州县"
    }, {
      value: "451424",
      label: "大新县"
    }, {
      value: "451425",
      label: "天等县"
    }, {
      value: "451481",
      label: "凭祥市"
    }]
  }]
}, {
  value: '460000',
  label: '海南省',
  children: [{
    value: "460100",
    label: "海口市",
    children: [{
      value: "460101",
      label: "市辖区"
    }, {
      value: "460105",
      label: "秀英区"
    }, {
      value: "460106",
      label: "龙华区"
    }, {
      value: "460107",
      label: "琼山区"
    }, {
      value: "460108",
      label: "美兰区"
    }]
  }, {
    value: "460200",
    label: "三亚市",
    children: [{
      value: "460201",
      label: "市辖区"
    }, {
      value: "460202",
      label: "海棠区"
    }, {
      value: "460203",
      label: "吉阳区"
    }, {
      value: "460204",
      label: "天涯区"
    }, {
      value: "460205",
      label: "崖州区"
    }]
  }, {
    value: "460300",
    label: "三沙市",
    children: [{
      value: "460321",
      label: "西沙群岛"
    }, {
      value: "460322",
      label: "南沙群岛"
    }, {
      value: "460323",
      label: "中沙群岛的岛礁及其海域"
    }]
  }, {
    value: "460400",
    label: "儋州市"
  }, {
    value: "469000",
    label: "省直辖县级行政区划",
    children: [{
      value: "469001",
      label: "五指山市"
    }, {
      value: "469002",
      label: "琼海市"
    }, {
      value: "469005",
      label: "文昌市"
    }, {
      value: "469006",
      label: "万宁市"
    }, {
      value: "469007",
      label: "东方市"
    }, {
      value: "469021",
      label: "定安县"
    }, {
      value: "469022",
      label: "屯昌县"
    }, {
      value: "469023",
      label: "澄迈县"
    }, {
      value: "469024",
      label: "临高县"
    }, {
      value: "469025",
      label: "白沙黎族自治县"
    }, {
      value: "469026",
      label: "昌江黎族自治县"
    }, {
      value: "469027",
      label: "乐东黎族自治县"
    }, {
      value: "469028",
      label: "陵水黎族自治县"
    }, {
      value: "469029",
      label: "保亭黎族苗族自治县"
    }, {
      value: "469030",
      label: "琼中黎族苗族自治县"
    }]
  }]
}, {
  value: '500000',
  label: '重庆',
  children: [{
    value: "500100",
    label: "市辖区",
    children: [{
      value: "500101",
      label: "万州区"
    }, {
      value: "500102",
      label: "涪陵区"
    }, {
      value: "500103",
      label: "渝中区"
    }, {
      value: "500104",
      label: "大渡口区"
    }, {
      value: "500105",
      label: "江北区"
    }, {
      value: "500106",
      label: "沙坪坝区"
    }, {
      value: "500107",
      label: "九龙坡区"
    }, {
      value: "500108",
      label: "南岸区"
    }, {
      value: "500109",
      label: "北碚区"
    }, {
      value: "500110",
      label: "綦江区"
    }, {
      value: "500111",
      label: "大足区"
    }, {
      value: "500112",
      label: "渝北区"
    }, {
      value: "500113",
      label: "巴南区"
    }, {
      value: "500114",
      label: "黔江区"
    }, {
      value: "500115",
      label: "长寿区"
    }, {
      value: "500116",
      label: "江津区"
    }, {
      value: "500117",
      label: "合川区"
    }, {
      value: "500118",
      label: "永川区"
    }, {
      value: "500119",
      label: "南川区"
    }, {
      value: "500120",
      label: "璧山区"
    }, {
      value: "500151",
      label: "铜梁区"
    }, {
      value: "500152",
      label: "潼南区"
    }, {
      value: "500153",
      label: "荣昌区"
    }, {
      value: "500154",
      label: "开州区"
    }, {
      value: "500155",
      label: "梁平区"
    }, {
      value: "500156",
      label: "武隆区"
    }]
  }, {
    value: "500200",
    label: "县",
    children: [{
      value: "500229",
      label: "城口县"
    }, {
      value: "500230",
      label: "丰都县"
    }, {
      value: "500231",
      label: "垫江县"
    }, {
      value: "500233",
      label: "忠县"
    }, {
      value: "500235",
      label: "云阳县"
    }, {
      value: "500236",
      label: "奉节县"
    }, {
      value: "500237",
      label: "巫山县"
    }, {
      value: "500238",
      label: "巫溪县"
    }, {
      value: "500240",
      label: "石柱土家族自治县"
    }, {
      value: "500241",
      label: "秀山土家族苗族自治县"
    }, {
      value: "500242",
      label: "酉阳土家族苗族自治县"
    }, {
      value: "500243",
      label: "彭水苗族土家族自治县"
    }]
  }]
}, {
  value: '510000',
  label: '四川省',
  children: [{
    value: "510100",
    label: "成都市",
    children: [{
      value: "510101",
      label: "市辖区"
    }, {
      value: "510104",
      label: "锦江区"
    }, {
      value: "510105",
      label: "青羊区"
    }, {
      value: "510106",
      label: "金牛区"
    }, {
      value: "510107",
      label: "武侯区"
    }, {
      value: "510108",
      label: "成华区"
    }, {
      value: "510112",
      label: "龙泉驿区"
    }, {
      value: "510113",
      label: "青白江区"
    }, {
      value: "510114",
      label: "新都区"
    }, {
      value: "510115",
      label: "温江区"
    }, {
      value: "510116",
      label: "双流区"
    }, {
      value: "510117",
      label: "郫都区"
    }, {
      value: "510121",
      label: "金堂县"
    }, {
      value: "510129",
      label: "大邑县"
    }, {
      value: "510131",
      label: "蒲江县"
    }, {
      value: "510132",
      label: "新津县"
    }, {
      value: "510181",
      label: "都江堰市"
    }, {
      value: "510182",
      label: "彭州市"
    }, {
      value: "510183",
      label: "邛崃市"
    }, {
      value: "510184",
      label: "崇州市"
    }, {
      value: "510185",
      label: "简阳市"
    }]
  }, {
    value: "510300",
    label: "自贡市",
    children: [{
      value: "510301",
      label: "市辖区"
    }, {
      value: "510302",
      label: "自流井区"
    }, {
      value: "510303",
      label: "贡井区"
    }, {
      value: "510304",
      label: "大安区"
    }, {
      value: "510311",
      label: "沿滩区"
    }, {
      value: "510321",
      label: "荣县"
    }, {
      value: "510322",
      label: "富顺县"
    }]
  }, {
    value: "510400",
    label: "攀枝花市",
    children: [{
      value: "510401",
      label: "市辖区"
    }, {
      value: "510402",
      label: "东区"
    }, {
      value: "510403",
      label: "西区"
    }, {
      value: "510411",
      label: "仁和区"
    }, {
      value: "510421",
      label: "米易县"
    }, {
      value: "510422",
      label: "盐边县"
    }]
  }, {
    value: "510500",
    label: "泸州市",
    children: [{
      value: "510501",
      label: "市辖区"
    }, {
      value: "510502",
      label: "江阳区"
    }, {
      value: "510503",
      label: "纳溪区"
    }, {
      value: "510504",
      label: "龙马潭区"
    }, {
      value: "510521",
      label: "泸县"
    }, {
      value: "510522",
      label: "合江县"
    }, {
      value: "510524",
      label: "叙永县"
    }, {
      value: "510525",
      label: "古蔺县"
    }]
  }, {
    value: "510600",
    label: "德阳市",
    children: [{
      value: "510601",
      label: "市辖区"
    }, {
      value: "510603",
      label: "旌阳区"
    }, {
      value: "510604",
      label: "罗江区"
    }, {
      value: "510623",
      label: "中江县"
    }, {
      value: "510681",
      label: "广汉市"
    }, {
      value: "510682",
      label: "什邡市"
    }, {
      value: "510683",
      label: "绵竹市"
    }]
  }, {
    value: "510700",
    label: "绵阳市",
    children: [{
      value: "510701",
      label: "市辖区"
    }, {
      value: "510703",
      label: "涪城区"
    }, {
      value: "510704",
      label: "游仙区"
    }, {
      value: "510705",
      label: "安州区"
    }, {
      value: "510722",
      label: "三台县"
    }, {
      value: "510723",
      label: "盐亭县"
    }, {
      value: "510725",
      label: "梓潼县"
    }, {
      value: "510726",
      label: "北川羌族自治县"
    }, {
      value: "510727",
      label: "平武县"
    }, {
      value: "510781",
      label: "江油市"
    }]
  }, {
    value: "510800",
    label: "广元市",
    children: [{
      value: "510801",
      label: "市辖区"
    }, {
      value: "510802",
      label: "利州区"
    }, {
      value: "510811",
      label: "昭化区"
    }, {
      value: "510812",
      label: "朝天区"
    }, {
      value: "510821",
      label: "旺苍县"
    }, {
      value: "510822",
      label: "青川县"
    }, {
      value: "510823",
      label: "剑阁县"
    }, {
      value: "510824",
      label: "苍溪县"
    }]
  }, {
    value: "510900",
    label: "遂宁市",
    children: [{
      value: "510901",
      label: "市辖区"
    }, {
      value: "510903",
      label: "船山区"
    }, {
      value: "510904",
      label: "安居区"
    }, {
      value: "510921",
      label: "蓬溪县"
    }, {
      value: "510922",
      label: "射洪县"
    }, {
      value: "510923",
      label: "大英县"
    }]
  }, {
    value: "511000",
    label: "内江市",
    children: [{
      value: "511001",
      label: "市辖区"
    }, {
      value: "511002",
      label: "市中区"
    }, {
      value: "511011",
      label: "东兴区"
    }, {
      value: "511024",
      label: "威远县"
    }, {
      value: "511025",
      label: "资中县"
    }, {
      value: "511071",
      label: "内江经济开发区"
    }, {
      value: "511083",
      label: "隆昌市"
    }]
  }, {
    value: "511100",
    label: "乐山市",
    children: [{
      value: "511101",
      label: "市辖区"
    }, {
      value: "511102",
      label: "市中区"
    }, {
      value: "511111",
      label: "沙湾区"
    }, {
      value: "511112",
      label: "五通桥区"
    }, {
      value: "511113",
      label: "金口河区"
    }, {
      value: "511123",
      label: "犍为县"
    }, {
      value: "511124",
      label: "井研县"
    }, {
      value: "511126",
      label: "夹江县"
    }, {
      value: "511129",
      label: "沐川县"
    }, {
      value: "511132",
      label: "峨边彝族自治县"
    }, {
      value: "511133",
      label: "马边彝族自治县"
    }, {
      value: "511181",
      label: "峨眉山市"
    }]
  }, {
    value: "511300",
    label: "南充市",
    children: [{
      value: "511301",
      label: "市辖区"
    }, {
      value: "511302",
      label: "顺庆区"
    }, {
      value: "511303",
      label: "高坪区"
    }, {
      value: "511304",
      label: "嘉陵区"
    }, {
      value: "511321",
      label: "南部县"
    }, {
      value: "511322",
      label: "营山县"
    }, {
      value: "511323",
      label: "蓬安县"
    }, {
      value: "511324",
      label: "仪陇县"
    }, {
      value: "511325",
      label: "西充县"
    }, {
      value: "511381",
      label: "阆中市"
    }]
  }, {
    value: "511400",
    label: "眉山市",
    children: [{
      value: "511401",
      label: "市辖区"
    }, {
      value: "511402",
      label: "东坡区"
    }, {
      value: "511403",
      label: "彭山区"
    }, {
      value: "511421",
      label: "仁寿县"
    }, {
      value: "511423",
      label: "洪雅县"
    }, {
      value: "511424",
      label: "丹棱县"
    }, {
      value: "511425",
      label: "青神县"
    }]
  }, {
    value: "511500",
    label: "宜宾市",
    children: [{
      value: "511501",
      label: "市辖区"
    }, {
      value: "511502",
      label: "翠屏区"
    }, {
      value: "511503",
      label: "南溪区"
    }, {
      value: "511521",
      label: "宜宾县"
    }, {
      value: "511523",
      label: "江安县"
    }, {
      value: "511524",
      label: "长宁县"
    }, {
      value: "511525",
      label: "高县"
    }, {
      value: "511526",
      label: "珙县"
    }, {
      value: "511527",
      label: "筠连县"
    }, {
      value: "511528",
      label: "兴文县"
    }, {
      value: "511529",
      label: "屏山县"
    }]
  }, {
    value: "511600",
    label: "广安市",
    children: [{
      value: "511601",
      label: "市辖区"
    }, {
      value: "511602",
      label: "广安区"
    }, {
      value: "511603",
      label: "前锋区"
    }, {
      value: "511621",
      label: "岳池县"
    }, {
      value: "511622",
      label: "武胜县"
    }, {
      value: "511623",
      label: "邻水县"
    }, {
      value: "511681",
      label: "华蓥市"
    }]
  }, {
    value: "511700",
    label: "达州市",
    children: [{
      value: "511701",
      label: "市辖区"
    }, {
      value: "511702",
      label: "通川区"
    }, {
      value: "511703",
      label: "达川区"
    }, {
      value: "511722",
      label: "宣汉县"
    }, {
      value: "511723",
      label: "开江县"
    }, {
      value: "511724",
      label: "大竹县"
    }, {
      value: "511725",
      label: "渠县"
    }, {
      value: "511771",
      label: "达州经济开发区"
    }, {
      value: "511781",
      label: "万源市"
    }]
  }, {
    value: "511800",
    label: "雅安市",
    children: [{
      value: "511801",
      label: "市辖区"
    }, {
      value: "511802",
      label: "雨城区"
    }, {
      value: "511803",
      label: "名山区"
    }, {
      value: "511822",
      label: "荥经县"
    }, {
      value: "511823",
      label: "汉源县"
    }, {
      value: "511824",
      label: "石棉县"
    }, {
      value: "511825",
      label: "天全县"
    }, {
      value: "511826",
      label: "芦山县"
    }, {
      value: "511827",
      label: "宝兴县"
    }]
  }, {
    value: "511900",
    label: "巴中市",
    children: [{
      value: "511901",
      label: "市辖区"
    }, {
      value: "511902",
      label: "巴州区"
    }, {
      value: "511903",
      label: "恩阳区"
    }, {
      value: "511921",
      label: "通江县"
    }, {
      value: "511922",
      label: "南江县"
    }, {
      value: "511923",
      label: "平昌县"
    }, {
      value: "511971",
      label: "巴中经济开发区"
    }]
  }, {
    value: "512000",
    label: "资阳市",
    children: [{
      value: "512001",
      label: "市辖区"
    }, {
      value: "512002",
      label: "雁江区"
    }, {
      value: "512021",
      label: "安岳县"
    }, {
      value: "512022",
      label: "乐至县"
    }]
  }, {
    value: "513200",
    label: "阿坝藏族羌族自治州",
    children: [{
      value: "513201",
      label: "马尔康市"
    }, {
      value: "513221",
      label: "汶川县"
    }, {
      value: "513222",
      label: "理县"
    }, {
      value: "513223",
      label: "茂县"
    }, {
      value: "513224",
      label: "松潘县"
    }, {
      value: "513225",
      label: "九寨沟县"
    }, {
      value: "513226",
      label: "金川县"
    }, {
      value: "513227",
      label: "小金县"
    }, {
      value: "513228",
      label: "黑水县"
    }, {
      value: "513230",
      label: "壤塘县"
    }, {
      value: "513231",
      label: "阿坝县"
    }, {
      value: "513232",
      label: "若尔盖县"
    }, {
      value: "513233",
      label: "红原县"
    }]
  }, {
    value: "513300",
    label: "甘孜藏族自治州",
    children: [{
      value: "513301",
      label: "康定市"
    }, {
      value: "513322",
      label: "泸定县"
    }, {
      value: "513323",
      label: "丹巴县"
    }, {
      value: "513324",
      label: "九龙县"
    }, {
      value: "513325",
      label: "雅江县"
    }, {
      value: "513326",
      label: "道孚县"
    }, {
      value: "513327",
      label: "炉霍县"
    }, {
      value: "513328",
      label: "甘孜县"
    }, {
      value: "513329",
      label: "新龙县"
    }, {
      value: "513330",
      label: "德格县"
    }, {
      value: "513331",
      label: "白玉县"
    }, {
      value: "513332",
      label: "石渠县"
    }, {
      value: "513333",
      label: "色达县"
    }, {
      value: "513334",
      label: "理塘县"
    }, {
      value: "513335",
      label: "巴塘县"
    }, {
      value: "513336",
      label: "乡城县"
    }, {
      value: "513337",
      label: "稻城县"
    }, {
      value: "513338",
      label: "得荣县"
    }]
  }, {
    value: "513400",
    label: "凉山彝族自治州",
    children: [{
      value: "513401",
      label: "西昌市"
    }, {
      value: "513422",
      label: "木里藏族自治县"
    }, {
      value: "513423",
      label: "盐源县"
    }, {
      value: "513424",
      label: "德昌县"
    }, {
      value: "513425",
      label: "会理县"
    }, {
      value: "513426",
      label: "会东县"
    }, {
      value: "513427",
      label: "宁南县"
    }, {
      value: "513428",
      label: "普格县"
    }, {
      value: "513429",
      label: "布拖县"
    }, {
      value: "513430",
      label: "金阳县"
    }, {
      value: "513431",
      label: "昭觉县"
    }, {
      value: "513432",
      label: "喜德县"
    }, {
      value: "513433",
      label: "冕宁县"
    }, {
      value: "513434",
      label: "越西县"
    }, {
      value: "513435",
      label: "甘洛县"
    }, {
      value: "513436",
      label: "美姑县"
    }, {
      value: "513437",
      label: "雷波县"
    }]
  }]
}, {
  value: '520000',
  label: '贵州省',
  children: [{
    value: "520100",
    label: "贵阳市",
    children: [{
      value: "520101",
      label: "市辖区"
    }, {
      value: "520102",
      label: "南明区"
    }, {
      value: "520103",
      label: "云岩区"
    }, {
      value: "520111",
      label: "花溪区"
    }, {
      value: "520112",
      label: "乌当区"
    }, {
      value: "520113",
      label: "白云区"
    }, {
      value: "520115",
      label: "观山湖区"
    }, {
      value: "520121",
      label: "开阳县"
    }, {
      value: "520122",
      label: "息烽县"
    }, {
      value: "520123",
      label: "修文县"
    }, {
      value: "520181",
      label: "清镇市"
    }]
  }, {
    value: "520200",
    label: "六盘水市",
    children: [{
      value: "520201",
      label: "钟山区"
    }, {
      value: "520203",
      label: "六枝特区"
    }, {
      value: "520221",
      label: "水城县"
    }, {
      value: "520281",
      label: "盘州市"
    }]
  }, {
    value: "520300",
    label: "遵义市",
    children: [{
      value: "520301",
      label: "市辖区"
    }, {
      value: "520302",
      label: "红花岗区"
    }, {
      value: "520303",
      label: "汇川区"
    }, {
      value: "520304",
      label: "播州区"
    }, {
      value: "520322",
      label: "桐梓县"
    }, {
      value: "520323",
      label: "绥阳县"
    }, {
      value: "520324",
      label: "正安县"
    }, {
      value: "520325",
      label: "道真仡佬族苗族自治县"
    }, {
      value: "520326",
      label: "务川仡佬族苗族自治县"
    }, {
      value: "520327",
      label: "凤冈县"
    }, {
      value: "520328",
      label: "湄潭县"
    }, {
      value: "520329",
      label: "余庆县"
    }, {
      value: "520330",
      label: "习水县"
    }, {
      value: "520381",
      label: "赤水市"
    }, {
      value: "520382",
      label: "仁怀市"
    }]
  }, {
    value: "520400",
    label: "安顺市",
    children: [{
      value: "520401",
      label: "市辖区"
    }, {
      value: "520402",
      label: "西秀区"
    }, {
      value: "520403",
      label: "平坝区"
    }, {
      value: "520422",
      label: "普定县"
    }, {
      value: "520423",
      label: "镇宁布依族苗族自治县"
    }, {
      value: "520424",
      label: "关岭布依族苗族自治县"
    }, {
      value: "520425",
      label: "紫云苗族布依族自治县"
    }]
  }, {
    value: "520500",
    label: "毕节市",
    children: [{
      value: "520501",
      label: "市辖区"
    }, {
      value: "520502",
      label: "七星关区"
    }, {
      value: "520521",
      label: "大方县"
    }, {
      value: "520522",
      label: "黔西县"
    }, {
      value: "520523",
      label: "金沙县"
    }, {
      value: "520524",
      label: "织金县"
    }, {
      value: "520525",
      label: "纳雍县"
    }, {
      value: "520526",
      label: "威宁彝族回族苗族自治县"
    }, {
      value: "520527",
      label: "赫章县"
    }]
  }, {
    value: "520600",
    label: "铜仁市",
    children: [{
      value: "520601",
      label: "市辖区"
    }, {
      value: "520602",
      label: "碧江区"
    }, {
      value: "520603",
      label: "万山区"
    }, {
      value: "520621",
      label: "江口县"
    }, {
      value: "520622",
      label: "玉屏侗族自治县"
    }, {
      value: "520623",
      label: "石阡县"
    }, {
      value: "520624",
      label: "思南县"
    }, {
      value: "520625",
      label: "印江土家族苗族自治县"
    }, {
      value: "520626",
      label: "德江县"
    }, {
      value: "520627",
      label: "沿河土家族自治县"
    }, {
      value: "520628",
      label: "松桃苗族自治县"
    }]
  }, {
    value: "522300",
    label: "黔西南布依族苗族自治州",
    children: [{
      value: "522301",
      label: "兴义市"
    }, {
      value: "522322",
      label: "兴仁县"
    }, {
      value: "522323",
      label: "普安县"
    }, {
      value: "522324",
      label: "晴隆县"
    }, {
      value: "522325",
      label: "贞丰县"
    }, {
      value: "522326",
      label: "望谟县"
    }, {
      value: "522327",
      label: "册亨县"
    }, {
      value: "522328",
      label: "安龙县"
    }]
  }, {
    value: "522600",
    label: "黔东南苗族侗族自治州",
    children: [{
      value: "522601",
      label: "凯里市"
    }, {
      value: "522622",
      label: "黄平县"
    }, {
      value: "522623",
      label: "施秉县"
    }, {
      value: "522624",
      label: "三穗县"
    }, {
      value: "522625",
      label: "镇远县"
    }, {
      value: "522626",
      label: "岑巩县"
    }, {
      value: "522627",
      label: "天柱县"
    }, {
      value: "522628",
      label: "锦屏县"
    }, {
      value: "522629",
      label: "剑河县"
    }, {
      value: "522630",
      label: "台江县"
    }, {
      value: "522631",
      label: "黎平县"
    }, {
      value: "522632",
      label: "榕江县"
    }, {
      value: "522633",
      label: "从江县"
    }, {
      value: "522634",
      label: "雷山县"
    }, {
      value: "522635",
      label: "麻江县"
    }, {
      value: "522636",
      label: "丹寨县"
    }]
  }, {
    value: "522700",
    label: "黔南布依族苗族自治州",
    children: [{
      value: "522701",
      label: "都匀市"
    }, {
      value: "522702",
      label: "福泉市"
    }, {
      value: "522722",
      label: "荔波县"
    }, {
      value: "522723",
      label: "贵定县"
    }, {
      value: "522725",
      label: "瓮安县"
    }, {
      value: "522726",
      label: "独山县"
    }, {
      value: "522727",
      label: "平塘县"
    }, {
      value: "522728",
      label: "罗甸县"
    }, {
      value: "522729",
      label: "长顺县"
    }, {
      value: "522730",
      label: "龙里县"
    }, {
      value: "522731",
      label: "惠水县"
    }, {
      value: "522732",
      label: "三都水族自治县"
    }]
  }]
}, {
  value: '530000',
  label: '云南省',
  children: [{
    value: "530100",
    label: "昆明市",
    children: [{
      value: "530101",
      label: "市辖区"
    }, {
      value: "530102",
      label: "五华区"
    }, {
      value: "530103",
      label: "盘龙区"
    }, {
      value: "530111",
      label: "官渡区"
    }, {
      value: "530112",
      label: "西山区"
    }, {
      value: "530113",
      label: "东川区"
    }, {
      value: "530114",
      label: "呈贡区"
    }, {
      value: "530115",
      label: "晋宁区"
    }, {
      value: "530124",
      label: "富民县"
    }, {
      value: "530125",
      label: "宜良县"
    }, {
      value: "530126",
      label: "石林彝族自治县"
    }, {
      value: "530127",
      label: "嵩明县"
    }, {
      value: "530128",
      label: "禄劝彝族苗族自治县"
    }, {
      value: "530129",
      label: "寻甸回族彝族自治县"
    }, {
      value: "530181",
      label: "安宁市"
    }]
  }, {
    value: "530300",
    label: "曲靖市",
    children: [{
      value: "530301",
      label: "市辖区"
    }, {
      value: "530302",
      label: "麒麟区"
    }, {
      value: "530303",
      label: "沾益区"
    }, {
      value: "530321",
      label: "马龙县"
    }, {
      value: "530322",
      label: "陆良县"
    }, {
      value: "530323",
      label: "师宗县"
    }, {
      value: "530324",
      label: "罗平县"
    }, {
      value: "530325",
      label: "富源县"
    }, {
      value: "530326",
      label: "会泽县"
    }, {
      value: "530381",
      label: "宣威市"
    }]
  }, {
    value: "530400",
    label: "玉溪市",
    children: [{
      value: "530401",
      label: "市辖区"
    }, {
      value: "530402",
      label: "红塔区"
    }, {
      value: "530403",
      label: "江川区"
    }, {
      value: "530422",
      label: "澄江县"
    }, {
      value: "530423",
      label: "通海县"
    }, {
      value: "530424",
      label: "华宁县"
    }, {
      value: "530425",
      label: "易门县"
    }, {
      value: "530426",
      label: "峨山彝族自治县"
    }, {
      value: "530427",
      label: "新平彝族傣族自治县"
    }, {
      value: "530428",
      label: "元江哈尼族彝族傣族自治县"
    }]
  }, {
    value: "530500",
    label: "保山市",
    children: [{
      value: "530501",
      label: "市辖区"
    }, {
      value: "530502",
      label: "隆阳区"
    }, {
      value: "530521",
      label: "施甸县"
    }, {
      value: "530523",
      label: "龙陵县"
    }, {
      value: "530524",
      label: "昌宁县"
    }, {
      value: "530581",
      label: "腾冲市"
    }]
  }, {
    value: "530600",
    label: "昭通市",
    children: [{
      value: "530601",
      label: "市辖区"
    }, {
      value: "530602",
      label: "昭阳区"
    }, {
      value: "530621",
      label: "鲁甸县"
    }, {
      value: "530622",
      label: "巧家县"
    }, {
      value: "530623",
      label: "盐津县"
    }, {
      value: "530624",
      label: "大关县"
    }, {
      value: "530625",
      label: "永善县"
    }, {
      value: "530626",
      label: "绥江县"
    }, {
      value: "530627",
      label: "镇雄县"
    }, {
      value: "530628",
      label: "彝良县"
    }, {
      value: "530629",
      label: "威信县"
    }, {
      value: "530630",
      label: "水富县"
    }]
  }, {
    value: "530700",
    label: "丽江市",
    children: [{
      value: "530701",
      label: "市辖区"
    }, {
      value: "530702",
      label: "古城区"
    }, {
      value: "530721",
      label: "玉龙纳西族自治县"
    }, {
      value: "530722",
      label: "永胜县"
    }, {
      value: "530723",
      label: "华坪县"
    }, {
      value: "530724",
      label: "宁蒗彝族自治县"
    }]
  }, {
    value: "530800",
    label: "普洱市",
    children: [{
      value: "530801",
      label: "市辖区"
    }, {
      value: "530802",
      label: "思茅区"
    }, {
      value: "530821",
      label: "宁洱哈尼族彝族自治县"
    }, {
      value: "530822",
      label: "墨江哈尼族自治县"
    }, {
      value: "530823",
      label: "景东彝族自治县"
    }, {
      value: "530824",
      label: "景谷傣族彝族自治县"
    }, {
      value: "530825",
      label: "镇沅彝族哈尼族拉祜族自治县"
    }, {
      value: "530826",
      label: "江城哈尼族彝族自治县"
    }, {
      value: "530827",
      label: "孟连傣族拉祜族佤族自治县"
    }, {
      value: "530828",
      label: "澜沧拉祜族自治县"
    }, {
      value: "530829",
      label: "西盟佤族自治县"
    }]
  }, {
    value: "530900",
    label: "临沧市",
    children: [{
      value: "530901",
      label: "市辖区"
    }, {
      value: "530902",
      label: "临翔区"
    }, {
      value: "530921",
      label: "凤庆县"
    }, {
      value: "530922",
      label: "云县"
    }, {
      value: "530923",
      label: "永德县"
    }, {
      value: "530924",
      label: "镇康县"
    }, {
      value: "530925",
      label: "双江拉祜族佤族布朗族傣族自治县"
    }, {
      value: "530926",
      label: "耿马傣族佤族自治县"
    }, {
      value: "530927",
      label: "沧源佤族自治县"
    }]
  }, {
    value: "532300",
    label: "楚雄彝族自治州",
    children: [{
      value: "532301",
      label: "楚雄市"
    }, {
      value: "532322",
      label: "双柏县"
    }, {
      value: "532323",
      label: "牟定县"
    }, {
      value: "532324",
      label: "南华县"
    }, {
      value: "532325",
      label: "姚安县"
    }, {
      value: "532326",
      label: "大姚县"
    }, {
      value: "532327",
      label: "永仁县"
    }, {
      value: "532328",
      label: "元谋县"
    }, {
      value: "532329",
      label: "武定县"
    }, {
      value: "532331",
      label: "禄丰县"
    }]
  }, {
    value: "532500",
    label: "红河哈尼族彝族自治州",
    children: [{
      value: "532501",
      label: "个旧市"
    }, {
      value: "532502",
      label: "开远市"
    }, {
      value: "532503",
      label: "蒙自市"
    }, {
      value: "532504",
      label: "弥勒市"
    }, {
      value: "532523",
      label: "屏边苗族自治县"
    }, {
      value: "532524",
      label: "建水县"
    }, {
      value: "532525",
      label: "石屏县"
    }, {
      value: "532527",
      label: "泸西县"
    }, {
      value: "532528",
      label: "元阳县"
    }, {
      value: "532529",
      label: "红河县"
    }, {
      value: "532530",
      label: "金平苗族瑶族傣族自治县"
    }, {
      value: "532531",
      label: "绿春县"
    }, {
      value: "532532",
      label: "河口瑶族自治县"
    }]
  }, {
    value: "532600",
    label: "文山壮族苗族自治州",
    children: [{
      value: "532601",
      label: "文山市"
    }, {
      value: "532622",
      label: "砚山县"
    }, {
      value: "532623",
      label: "西畴县"
    }, {
      value: "532624",
      label: "麻栗坡县"
    }, {
      value: "532625",
      label: "马关县"
    }, {
      value: "532626",
      label: "丘北县"
    }, {
      value: "532627",
      label: "广南县"
    }, {
      value: "532628",
      label: "富宁县"
    }]
  }, {
    value: "532800",
    label: "西双版纳傣族自治州",
    children: [{
      value: "532801",
      label: "景洪市"
    }, {
      value: "532822",
      label: "勐海县"
    }, {
      value: "532823",
      label: "勐腊县"
    }]
  }, {
    value: "532900",
    label: "大理白族自治州",
    children: [{
      value: "532901",
      label: "大理市"
    }, {
      value: "532922",
      label: "漾濞彝族自治县"
    }, {
      value: "532923",
      label: "祥云县"
    }, {
      value: "532924",
      label: "宾川县"
    }, {
      value: "532925",
      label: "弥渡县"
    }, {
      value: "532926",
      label: "南涧彝族自治县"
    }, {
      value: "532927",
      label: "巍山彝族回族自治县"
    }, {
      value: "532928",
      label: "永平县"
    }, {
      value: "532929",
      label: "云龙县"
    }, {
      value: "532930",
      label: "洱源县"
    }, {
      value: "532931",
      label: "剑川县"
    }, {
      value: "532932",
      label: "鹤庆县"
    }]
  }, {
    value: "533100",
    label: "德宏傣族景颇族自治州",
    children: [{
      value: "533102",
      label: "瑞丽市"
    }, {
      value: "533103",
      label: "芒市"
    }, {
      value: "533122",
      label: "梁河县"
    }, {
      value: "533123",
      label: "盈江县"
    }, {
      value: "533124",
      label: "陇川县"
    }]
  }, {
    value: "533300",
    label: "怒江傈僳族自治州",
    children: [{
      value: "533301",
      label: "泸水市"
    }, {
      value: "533323",
      label: "福贡县"
    }, {
      value: "533324",
      label: "贡山独龙族怒族自治县"
    }, {
      value: "533325",
      label: "兰坪白族普米族自治县"
    }]
  }, {
    value: "533400",
    label: "迪庆藏族自治州",
    children: [{
      value: "533401",
      label: "香格里拉市"
    }, {
      value: "533422",
      label: "德钦县"
    }, {
      value: "533423",
      label: "维西傈僳族自治县"
    }]
  }]
}, {
  value: '540000',
  label: '西藏',
  children: [{
    value: "540100",
    label: "拉萨市",
    children: [{
      value: "540101",
      label: "市辖区"
    }, {
      value: "540102",
      label: "城关区"
    }, {
      value: "540103",
      label: "堆龙德庆区"
    }, {
      value: "540121",
      label: "林周县"
    }, {
      value: "540122",
      label: "当雄县"
    }, {
      value: "540123",
      label: "尼木县"
    }, {
      value: "540124",
      label: "曲水县"
    }, {
      value: "540126",
      label: "达孜县"
    }, {
      value: "540127",
      label: "墨竹工卡县"
    }, {
      value: "540171",
      label: "格尔木藏青工业园区"
    }, {
      value: "540172",
      label: "拉萨经济技术开发区"
    }, {
      value: "540173",
      label: "西藏文化旅游创意园区"
    }, {
      value: "540174",
      label: "达孜工业园区"
    }]
  }, {
    value: "540200",
    label: "日喀则市",
    children: [{
      value: "540202",
      label: "桑珠孜区"
    }, {
      value: "540221",
      label: "南木林县"
    }, {
      value: "540222",
      label: "江孜县"
    }, {
      value: "540223",
      label: "定日县"
    }, {
      value: "540224",
      label: "萨迦县"
    }, {
      value: "540225",
      label: "拉孜县"
    }, {
      value: "540226",
      label: "昂仁县"
    }, {
      value: "540227",
      label: "谢通门县"
    }, {
      value: "540228",
      label: "白朗县"
    }, {
      value: "540229",
      label: "仁布县"
    }, {
      value: "540230",
      label: "康马县"
    }, {
      value: "540231",
      label: "定结县"
    }, {
      value: "540232",
      label: "仲巴县"
    }, {
      value: "540233",
      label: "亚东县"
    }, {
      value: "540234",
      label: "吉隆县"
    }, {
      value: "540235",
      label: "聂拉木县"
    }, {
      value: "540236",
      label: "萨嘎县"
    }, {
      value: "540237",
      label: "岗巴县"
    }]
  }, {
    value: "540300",
    label: "昌都市",
    children: [{
      value: "540302",
      label: "卡若区"
    }, {
      value: "540321",
      label: "江达县"
    }, {
      value: "540322",
      label: "贡觉县"
    }, {
      value: "540323",
      label: "类乌齐县"
    }, {
      value: "540324",
      label: "丁青县"
    }, {
      value: "540325",
      label: "察雅县"
    }, {
      value: "540326",
      label: "八宿县"
    }, {
      value: "540327",
      label: "左贡县"
    }, {
      value: "540328",
      label: "芒康县"
    }, {
      value: "540329",
      label: "洛隆县"
    }, {
      value: "540330",
      label: "边坝县"
    }]
  }, {
    value: "540400",
    label: "林芝市",
    children: [{
      value: "540402",
      label: "巴宜区"
    }, {
      value: "540421",
      label: "工布江达县"
    }, {
      value: "540422",
      label: "米林县"
    }, {
      value: "540423",
      label: "墨脱县"
    }, {
      value: "540424",
      label: "波密县"
    }, {
      value: "540425",
      label: "察隅县"
    }, {
      value: "540426",
      label: "朗县"
    }]
  }, {
    value: "540500",
    label: "山南市",
    children: [{
      value: "540501",
      label: "市辖区"
    }, {
      value: "540502",
      label: "乃东区"
    }, {
      value: "540521",
      label: "扎囊县"
    }, {
      value: "540522",
      label: "贡嘎县"
    }, {
      value: "540523",
      label: "桑日县"
    }, {
      value: "540524",
      label: "琼结县"
    }, {
      value: "540525",
      label: "曲松县"
    }, {
      value: "540526",
      label: "措美县"
    }, {
      value: "540527",
      label: "洛扎县"
    }, {
      value: "540528",
      label: "加查县"
    }, {
      value: "540529",
      label: "隆子县"
    }, {
      value: "540530",
      label: "错那县"
    }, {
      value: "540531",
      label: "浪卡子县"
    }]
  }, {
    value: "542400",
    label: "那曲地区",
    children: [{
      value: "542421",
      label: "那曲县"
    }, {
      value: "542422",
      label: "嘉黎县"
    }, {
      value: "542423",
      label: "比如县"
    }, {
      value: "542424",
      label: "聂荣县"
    }, {
      value: "542425",
      label: "安多县"
    }, {
      value: "542426",
      label: "申扎县"
    }, {
      value: "542427",
      label: "索县"
    }, {
      value: "542428",
      label: "班戈县"
    }, {
      value: "542429",
      label: "巴青县"
    }, {
      value: "542430",
      label: "尼玛县"
    }, {
      value: "542431",
      label: "双湖县"
    }]
  }, {
    value: "542500",
    label: "阿里地区",
    children: [{
      value: "542521",
      label: "普兰县"
    }, {
      value: "542522",
      label: "札达县"
    }, {
      value: "542523",
      label: "噶尔县"
    }, {
      value: "542524",
      label: "日土县"
    }, {
      value: "542525",
      label: "革吉县"
    }, {
      value: "542526",
      label: "改则县"
    }, {
      value: "542527",
      label: "措勤县"
    }]
  }]
}, {
  value: '610000',
  label: '陕西省',
  children: [{
    value: "610100",
    label: "西安市",
    children: [{
      value: "610101",
      label: "市辖区"
    }, {
      value: "610102",
      label: "新城区"
    }, {
      value: "610103",
      label: "碑林区"
    }, {
      value: "610104",
      label: "莲湖区"
    }, {
      value: "610111",
      label: "灞桥区"
    }, {
      value: "610112",
      label: "未央区"
    }, {
      value: "610113",
      label: "雁塔区"
    }, {
      value: "610114",
      label: "阎良区"
    }, {
      value: "610115",
      label: "临潼区"
    }, {
      value: "610116",
      label: "长安区"
    }, {
      value: "610117",
      label: "高陵区"
    }, {
      value: "610118",
      label: "鄠邑区"
    }, {
      value: "610122",
      label: "蓝田县"
    }, {
      value: "610124",
      label: "周至县"
    }]
  }, {
    value: "610200",
    label: "铜川市",
    children: [{
      value: "610201",
      label: "市辖区"
    }, {
      value: "610202",
      label: "王益区"
    }, {
      value: "610203",
      label: "印台区"
    }, {
      value: "610204",
      label: "耀州区"
    }, {
      value: "610222",
      label: "宜君县"
    }]
  }, {
    value: "610300",
    label: "宝鸡市",
    children: [{
      value: "610301",
      label: "市辖区"
    }, {
      value: "610302",
      label: "渭滨区"
    }, {
      value: "610303",
      label: "金台区"
    }, {
      value: "610304",
      label: "陈仓区"
    }, {
      value: "610322",
      label: "凤翔县"
    }, {
      value: "610323",
      label: "岐山县"
    }, {
      value: "610324",
      label: "扶风县"
    }, {
      value: "610326",
      label: "眉县"
    }, {
      value: "610327",
      label: "陇县"
    }, {
      value: "610328",
      label: "千阳县"
    }, {
      value: "610329",
      label: "麟游县"
    }, {
      value: "610330",
      label: "凤县"
    }, {
      value: "610331",
      label: "太白县"
    }]
  }, {
    value: "610400",
    label: "咸阳市",
    children: [{
      value: "610401",
      label: "市辖区"
    }, {
      value: "610402",
      label: "秦都区"
    }, {
      value: "610403",
      label: "杨陵区"
    }, {
      value: "610404",
      label: "渭城区"
    }, {
      value: "610422",
      label: "三原县"
    }, {
      value: "610423",
      label: "泾阳县"
    }, {
      value: "610424",
      label: "乾县"
    }, {
      value: "610425",
      label: "礼泉县"
    }, {
      value: "610426",
      label: "永寿县"
    }, {
      value: "610427",
      label: "彬县"
    }, {
      value: "610428",
      label: "长武县"
    }, {
      value: "610429",
      label: "旬邑县"
    }, {
      value: "610430",
      label: "淳化县"
    }, {
      value: "610431",
      label: "武功县"
    }, {
      value: "610481",
      label: "兴平市"
    }]
  }, {
    value: "610500",
    label: "渭南市",
    children: [{
      value: "610501",
      label: "市辖区"
    }, {
      value: "610502",
      label: "临渭区"
    }, {
      value: "610503",
      label: "华州区"
    }, {
      value: "610522",
      label: "潼关县"
    }, {
      value: "610523",
      label: "大荔县"
    }, {
      value: "610524",
      label: "合阳县"
    }, {
      value: "610525",
      label: "澄城县"
    }, {
      value: "610526",
      label: "蒲城县"
    }, {
      value: "610527",
      label: "白水县"
    }, {
      value: "610528",
      label: "富平县"
    }, {
      value: "610581",
      label: "韩城市"
    }, {
      value: "610582",
      label: "华阴市"
    }]
  }, {
    value: "610600",
    label: "延安市",
    children: [{
      value: "610601",
      label: "市辖区"
    }, {
      value: "610602",
      label: "宝塔区"
    }, {
      value: "610603",
      label: "安塞区"
    }, {
      value: "610621",
      label: "延长县"
    }, {
      value: "610622",
      label: "延川县"
    }, {
      value: "610623",
      label: "子长县"
    }, {
      value: "610625",
      label: "志丹县"
    }, {
      value: "610626",
      label: "吴起县"
    }, {
      value: "610627",
      label: "甘泉县"
    }, {
      value: "610628",
      label: "富县"
    }, {
      value: "610629",
      label: "洛川县"
    }, {
      value: "610630",
      label: "宜川县"
    }, {
      value: "610631",
      label: "黄龙县"
    }, {
      value: "610632",
      label: "黄陵县"
    }]
  }, {
    value: "610700",
    label: "汉中市",
    children: [{
      value: "610701",
      label: "市辖区"
    }, {
      value: "610702",
      label: "汉台区"
    }, {
      value: "610703",
      label: "南郑区"
    }, {
      value: "610722",
      label: "城固县"
    }, {
      value: "610723",
      label: "洋县"
    }, {
      value: "610724",
      label: "西乡县"
    }, {
      value: "610725",
      label: "勉县"
    }, {
      value: "610726",
      label: "宁强县"
    }, {
      value: "610727",
      label: "略阳县"
    }, {
      value: "610728",
      label: "镇巴县"
    }, {
      value: "610729",
      label: "留坝县"
    }, {
      value: "610730",
      label: "佛坪县"
    }]
  }, {
    value: "610800",
    label: "榆林市",
    children: [{
      value: "610801",
      label: "市辖区"
    }, {
      value: "610802",
      label: "榆阳区"
    }, {
      value: "610803",
      label: "横山区"
    }, {
      value: "610822",
      label: "府谷县"
    }, {
      value: "610824",
      label: "靖边县"
    }, {
      value: "610825",
      label: "定边县"
    }, {
      value: "610826",
      label: "绥德县"
    }, {
      value: "610827",
      label: "米脂县"
    }, {
      value: "610828",
      label: "佳县"
    }, {
      value: "610829",
      label: "吴堡县"
    }, {
      value: "610830",
      label: "清涧县"
    }, {
      value: "610831",
      label: "子洲县"
    }, {
      value: "610881",
      label: "神木市"
    }]
  }, {
    value: "610900",
    label: "安康市",
    children: [{
      value: "610901",
      label: "市辖区"
    }, {
      value: "610902",
      label: "汉滨区"
    }, {
      value: "610921",
      label: "汉阴县"
    }, {
      value: "610922",
      label: "石泉县"
    }, {
      value: "610923",
      label: "宁陕县"
    }, {
      value: "610924",
      label: "紫阳县"
    }, {
      value: "610925",
      label: "岚皋县"
    }, {
      value: "610926",
      label: "平利县"
    }, {
      value: "610927",
      label: "镇坪县"
    }, {
      value: "610928",
      label: "旬阳县"
    }, {
      value: "610929",
      label: "白河县"
    }]
  }, {
    value: "611000",
    label: "商洛市",
    children: [{
      value: "611001",
      label: "市辖区"
    }, {
      value: "611002",
      label: "商州区"
    }, {
      value: "611021",
      label: "洛南县"
    }, {
      value: "611022",
      label: "丹凤县"
    }, {
      value: "611023",
      label: "商南县"
    }, {
      value: "611024",
      label: "山阳县"
    }, {
      value: "611025",
      label: "镇安县"
    }, {
      value: "611026",
      label: "柞水县"
    }]
  }]
}, {
  value: '620000',
  label: '甘肃省',
  children: [{
    value: "620100",
    label: "兰州市",
    children: [{
      value: "620101",
      label: "市辖区"
    }, {
      value: "620102",
      label: "城关区"
    }, {
      value: "620103",
      label: "七里河区"
    }, {
      value: "620104",
      label: "西固区"
    }, {
      value: "620105",
      label: "安宁区"
    }, {
      value: "620111",
      label: "红古区"
    }, {
      value: "620121",
      label: "永登县"
    }, {
      value: "620122",
      label: "皋兰县"
    }, {
      value: "620123",
      label: "榆中县"
    }, {
      value: "620171",
      label: "兰州新区"
    }]
  }, {
    value: "620200",
    label: "嘉峪关市",
    children: [{
      value: "620201",
      label: "市辖区"
    }]
  }, {
    value: "620300",
    label: "金昌市",
    children: [{
      value: "620301",
      label: "市辖区"
    }, {
      value: "620302",
      label: "金川区"
    }, {
      value: "620321",
      label: "永昌县"
    }]
  }, {
    value: "620400",
    label: "白银市",
    children: [{
      value: "620401",
      label: "市辖区"
    }, {
      value: "620402",
      label: "白银区"
    }, {
      value: "620403",
      label: "平川区"
    }, {
      value: "620421",
      label: "靖远县"
    }, {
      value: "620422",
      label: "会宁县"
    }, {
      value: "620423",
      label: "景泰县"
    }]
  }, {
    value: "620500",
    label: "天水市",
    children: [{
      value: "620501",
      label: "市辖区"
    }, {
      value: "620502",
      label: "秦州区"
    }, {
      value: "620503",
      label: "麦积区"
    }, {
      value: "620521",
      label: "清水县"
    }, {
      value: "620522",
      label: "秦安县"
    }, {
      value: "620523",
      label: "甘谷县"
    }, {
      value: "620524",
      label: "武山县"
    }, {
      value: "620525",
      label: "张家川回族自治县"
    }]
  }, {
    value: "620600",
    label: "武威市",
    children: [{
      value: "620601",
      label: "市辖区"
    }, {
      value: "620602",
      label: "凉州区"
    }, {
      value: "620621",
      label: "民勤县"
    }, {
      value: "620622",
      label: "古浪县"
    }, {
      value: "620623",
      label: "天祝藏族自治县"
    }]
  }, {
    value: "620700",
    label: "张掖市",
    children: [{
      value: "620701",
      label: "市辖区"
    }, {
      value: "620702",
      label: "甘州区"
    }, {
      value: "620721",
      label: "肃南裕固族自治县"
    }, {
      value: "620722",
      label: "民乐县"
    }, {
      value: "620723",
      label: "临泽县"
    }, {
      value: "620724",
      label: "高台县"
    }, {
      value: "620725",
      label: "山丹县"
    }]
  }, {
    value: "620800",
    label: "平凉市",
    children: [{
      value: "620801",
      label: "市辖区"
    }, {
      value: "620802",
      label: "崆峒区"
    }, {
      value: "620821",
      label: "泾川县"
    }, {
      value: "620822",
      label: "灵台县"
    }, {
      value: "620823",
      label: "崇信县"
    }, {
      value: "620824",
      label: "华亭县"
    }, {
      value: "620825",
      label: "庄浪县"
    }, {
      value: "620826",
      label: "静宁县"
    }, {
      value: "620871",
      label: "平凉工业园区"
    }]
  }, {
    value: "620900",
    label: "酒泉市",
    children: [{
      value: "620901",
      label: "市辖区"
    }, {
      value: "620902",
      label: "肃州区"
    }, {
      value: "620921",
      label: "金塔县"
    }, {
      value: "620922",
      label: "瓜州县"
    }, {
      value: "620923",
      label: "肃北蒙古族自治县"
    }, {
      value: "620924",
      label: "阿克塞哈萨克族自治县"
    }, {
      value: "620981",
      label: "玉门市"
    }, {
      value: "620982",
      label: "敦煌市"
    }]
  }, {
    value: "621000",
    label: "庆阳市",
    children: [{
      value: "621001",
      label: "市辖区"
    }, {
      value: "621002",
      label: "西峰区"
    }, {
      value: "621021",
      label: "庆城县"
    }, {
      value: "621022",
      label: "环县"
    }, {
      value: "621023",
      label: "华池县"
    }, {
      value: "621024",
      label: "合水县"
    }, {
      value: "621025",
      label: "正宁县"
    }, {
      value: "621026",
      label: "宁县"
    }, {
      value: "621027",
      label: "镇原县"
    }]
  }, {
    value: "621100",
    label: "定西市",
    children: [{
      value: "621101",
      label: "市辖区"
    }, {
      value: "621102",
      label: "安定区"
    }, {
      value: "621121",
      label: "通渭县"
    }, {
      value: "621122",
      label: "陇西县"
    }, {
      value: "621123",
      label: "渭源县"
    }, {
      value: "621124",
      label: "临洮县"
    }, {
      value: "621125",
      label: "漳县"
    }, {
      value: "621126",
      label: "岷县"
    }]
  }, {
    value: "621200",
    label: "陇南市",
    children: [{
      value: "621201",
      label: "市辖区"
    }, {
      value: "621202",
      label: "武都区"
    }, {
      value: "621221",
      label: "成县"
    }, {
      value: "621222",
      label: "文县"
    }, {
      value: "621223",
      label: "宕昌县"
    }, {
      value: "621224",
      label: "康县"
    }, {
      value: "621225",
      label: "西和县"
    }, {
      value: "621226",
      label: "礼县"
    }, {
      value: "621227",
      label: "徽县"
    }, {
      value: "621228",
      label: "两当县"
    }]
  }, {
    value: "622900",
    label: "临夏回族自治州",
    children: [{
      value: "622901",
      label: "临夏市"
    }, {
      value: "622921",
      label: "临夏县"
    }, {
      value: "622922",
      label: "康乐县"
    }, {
      value: "622923",
      label: "永靖县"
    }, {
      value: "622924",
      label: "广河县"
    }, {
      value: "622925",
      label: "和政县"
    }, {
      value: "622926",
      label: "东乡族自治县"
    }, {
      value: "622927",
      label: "积石山保安族东乡族撒拉族自治县"
    }]
  }, {
    value: "623000",
    label: "甘南藏族自治州",
    children: [{
      value: "623001",
      label: "合作市"
    }, {
      value: "623021",
      label: "临潭县"
    }, {
      value: "623022",
      label: "卓尼县"
    }, {
      value: "623023",
      label: "舟曲县"
    }, {
      value: "623024",
      label: "迭部县"
    }, {
      value: "623025",
      label: "玛曲县"
    }, {
      value: "623026",
      label: "碌曲县"
    }, {
      value: "623027",
      label: "夏河县"
    }]
  }]
}, {
  value: '630000',
  label: '青海省',
  children: [{
    value: "630100",
    label: "西宁市",
    children: [{
      value: "630101",
      label: "市辖区"
    }, {
      value: "630102",
      label: "城东区"
    }, {
      value: "630103",
      label: "城中区"
    }, {
      value: "630104",
      label: "城西区"
    }, {
      value: "630105",
      label: "城北区"
    }, {
      value: "630121",
      label: "大通回族土族自治县"
    }, {
      value: "630122",
      label: "湟中县"
    }, {
      value: "630123",
      label: "湟源县"
    }]
  }, {
    value: "630200",
    label: "海东市",
    children: [{
      value: "630202",
      label: "乐都区"
    }, {
      value: "630203",
      label: "平安区"
    }, {
      value: "630222",
      label: "民和回族土族自治县"
    }, {
      value: "630223",
      label: "互助土族自治县"
    }, {
      value: "630224",
      label: "化隆回族自治县"
    }, {
      value: "630225",
      label: "循化撒拉族自治县"
    }]
  }, {
    value: "632200",
    label: "海北藏族自治州",
    children: [{
      value: "632221",
      label: "门源回族自治县"
    }, {
      value: "632222",
      label: "祁连县"
    }, {
      value: "632223",
      label: "海晏县"
    }, {
      value: "632224",
      label: "刚察县"
    }]
  }, {
    value: "632300",
    label: "黄南藏族自治州",
    children: [{
      value: "632321",
      label: "同仁县"
    }, {
      value: "632322",
      label: "尖扎县"
    }, {
      value: "632323",
      label: "泽库县"
    }, {
      value: "632324",
      label: "河南蒙古族自治县"
    }]
  }, {
    value: "632500",
    label: "海南藏族自治州",
    children: [{
      value: "632521",
      label: "共和县"
    }, {
      value: "632522",
      label: "同德县"
    }, {
      value: "632523",
      label: "贵德县"
    }, {
      value: "632524",
      label: "兴海县"
    }, {
      value: "632525",
      label: "贵南县"
    }]
  }, {
    value: "632600",
    label: "果洛藏族自治州",
    children: [{
      value: "632621",
      label: "玛沁县"
    }, {
      value: "632622",
      label: "班玛县"
    }, {
      value: "632623",
      label: "甘德县"
    }, {
      value: "632624",
      label: "达日县"
    }, {
      value: "632625",
      label: "久治县"
    }, {
      value: "632626",
      label: "玛多县"
    }]
  }, {
    value: "632700",
    label: "玉树藏族自治州",
    children: [{
      value: "632701",
      label: "玉树市"
    }, {
      value: "632722",
      label: "杂多县"
    }, {
      value: "632723",
      label: "称多县"
    }, {
      value: "632724",
      label: "治多县"
    }, {
      value: "632725",
      label: "囊谦县"
    }, {
      value: "632726",
      label: "曲麻莱县"
    }]
  }, {
    value: "632800",
    label: "海西蒙古族藏族自治州",
    children: [{
      value: "632801",
      label: "格尔木市"
    }, {
      value: "632802",
      label: "德令哈市"
    }, {
      value: "632821",
      label: "乌兰县"
    }, {
      value: "632822",
      label: "都兰县"
    }, {
      value: "632823",
      label: "天峻县"
    }, {
      value: "632857",
      label: "大柴旦行政委员会"
    }, {
      value: "632858",
      label: "冷湖行政委员会"
    }, {
      value: "632859",
      label: "茫崖行政委员会"
    }]
  }]
}, {
  value: '640000',
  label: '宁夏',
  children: [{
    value: "640100",
    label: "银川市",
    children: [{
      value: "640101",
      label: "市辖区"
    }, {
      value: "640104",
      label: "兴庆区"
    }, {
      value: "640105",
      label: "西夏区"
    }, {
      value: "640106",
      label: "金凤区"
    }, {
      value: "640121",
      label: "永宁县"
    }, {
      value: "640122",
      label: "贺兰县"
    }, {
      value: "640181",
      label: "灵武市"
    }]
  }, {
    value: "640200",
    label: "石嘴山市",
    children: [{
      value: "640201",
      label: "市辖区"
    }, {
      value: "640202",
      label: "大武口区"
    }, {
      value: "640205",
      label: "惠农区"
    }, {
      value: "640221",
      label: "平罗县"
    }]
  }, {
    value: "640300",
    label: "吴忠市",
    children: [{
      value: "640301",
      label: "市辖区"
    }, {
      value: "640302",
      label: "利通区"
    }, {
      value: "640303",
      label: "红寺堡区"
    }, {
      value: "640323",
      label: "盐池县"
    }, {
      value: "640324",
      label: "同心县"
    }, {
      value: "640381",
      label: "青铜峡市"
    }]
  }, {
    value: "640400",
    label: "固原市",
    children: [{
      value: "640401",
      label: "市辖区"
    }, {
      value: "640402",
      label: "原州区"
    }, {
      value: "640422",
      label: "西吉县"
    }, {
      value: "640423",
      label: "隆德县"
    }, {
      value: "640424",
      label: "泾源县"
    }, {
      value: "640425",
      label: "彭阳县"
    }]
  }, {
    value: "640500",
    label: "中卫市",
    children: [{
      value: "640501",
      label: "市辖区"
    }, {
      value: "640502",
      label: "沙坡头区"
    }, {
      value: "640521",
      label: "中宁县"
    }, {
      value: "640522",
      label: "海原县"
    }]
  }]
}, {
  value: '650000',
  label: '新疆',
  children: [{
    value: "650100",
    label: "乌鲁木齐市",
    children: [{
      value: "650101",
      label: "市辖区"
    }, {
      value: "650102",
      label: "天山区"
    }, {
      value: "650103",
      label: "沙依巴克区"
    }, {
      value: "650104",
      label: "新市区"
    }, {
      value: "650105",
      label: "水磨沟区"
    }, {
      value: "650106",
      label: "头屯河区"
    }, {
      value: "650107",
      label: "达坂城区"
    }, {
      value: "650109",
      label: "米东区"
    }, {
      value: "650121",
      label: "乌鲁木齐县"
    }, {
      value: "650171",
      label: "乌鲁木齐经济技术开发区"
    }, {
      value: "650172",
      label: "乌鲁木齐高新技术产业开发区"
    }]
  }, {
    value: "650200",
    label: "克拉玛依市",
    children: [{
      value: "650201",
      label: "市辖区"
    }, {
      value: "650202",
      label: "独山子区"
    }, {
      value: "650203",
      label: "克拉玛依区"
    }, {
      value: "650204",
      label: "白碱滩区"
    }, {
      value: "650205",
      label: "乌尔禾区"
    }]
  }, {
    value: "650400",
    label: "吐鲁番市",
    children: [{
      value: "650402",
      label: "高昌区"
    }, {
      value: "650421",
      label: "鄯善县"
    }, {
      value: "650422",
      label: "托克逊县"
    }]
  }, {
    value: "650500",
    label: "哈密市",
    children: [{
      value: "650502",
      label: "伊州区"
    }, {
      value: "650521",
      label: "巴里坤哈萨克自治县"
    }, {
      value: "650522",
      label: "伊吾县"
    }]
  }, {
    value: "652300",
    label: "昌吉回族自治州",
    children: [{
      value: "652301",
      label: "昌吉市"
    }, {
      value: "652302",
      label: "阜康市"
    }, {
      value: "652323",
      label: "呼图壁县"
    }, {
      value: "652324",
      label: "玛纳斯县"
    }, {
      value: "652325",
      label: "奇台县"
    }, {
      value: "652327",
      label: "吉木萨尔县"
    }, {
      value: "652328",
      label: "木垒哈萨克自治县"
    }]
  }, {
    value: "652700",
    label: "博尔塔拉蒙古自治州",
    children: [{
      value: "652701",
      label: "博乐市"
    }, {
      value: "652702",
      label: "阿拉山口市"
    }, {
      value: "652722",
      label: "精河县"
    }, {
      value: "652723",
      label: "温泉县"
    }]
  }, {
    value: "652800",
    label: "巴音郭楞蒙古自治州",
    children: [{
      value: "652801",
      label: "库尔勒市"
    }, {
      value: "652822",
      label: "轮台县"
    }, {
      value: "652823",
      label: "尉犁县"
    }, {
      value: "652824",
      label: "若羌县"
    }, {
      value: "652825",
      label: "且末县"
    }, {
      value: "652826",
      label: "焉耆回族自治县"
    }, {
      value: "652827",
      label: "和静县"
    }, {
      value: "652828",
      label: "和硕县"
    }, {
      value: "652829",
      label: "博湖县"
    }, {
      value: "652871",
      label: "库尔勒经济技术开发区"
    }]
  }, {
    value: "652900",
    label: "阿克苏地区",
    children: [{
      value: "652901",
      label: "阿克苏市"
    }, {
      value: "652922",
      label: "温宿县"
    }, {
      value: "652923",
      label: "库车县"
    }, {
      value: "652924",
      label: "沙雅县"
    }, {
      value: "652925",
      label: "新和县"
    }, {
      value: "652926",
      label: "拜城县"
    }, {
      value: "652927",
      label: "乌什县"
    }, {
      value: "652928",
      label: "阿瓦提县"
    }, {
      value: "652929",
      label: "柯坪县"
    }]
  }, {
    value: "653000",
    label: "克孜勒苏柯尔克孜自治州",
    children: [{
      value: "653001",
      label: "阿图什市"
    }, {
      value: "653022",
      label: "阿克陶县"
    }, {
      value: "653023",
      label: "阿合奇县"
    }, {
      value: "653024",
      label: "乌恰县"
    }]
  }, {
    value: "653100",
    label: "喀什地区",
    children: [{
      value: "653101",
      label: "喀什市"
    }, {
      value: "653121",
      label: "疏附县"
    }, {
      value: "653122",
      label: "疏勒县"
    }, {
      value: "653123",
      label: "英吉沙县"
    }, {
      value: "653124",
      label: "泽普县"
    }, {
      value: "653125",
      label: "莎车县"
    }, {
      value: "653126",
      label: "叶城县"
    }, {
      value: "653127",
      label: "麦盖提县"
    }, {
      value: "653128",
      label: "岳普湖县"
    }, {
      value: "653129",
      label: "伽师县"
    }, {
      value: "653130",
      label: "巴楚县"
    }, {
      value: "653131",
      label: "塔什库尔干塔吉克自治县"
    }]
  }, {
    value: "653200",
    label: "和田地区",
    children: [{
      value: "653201",
      label: "和田市"
    }, {
      value: "653221",
      label: "和田县"
    }, {
      value: "653222",
      label: "墨玉县"
    }, {
      value: "653223",
      label: "皮山县"
    }, {
      value: "653224",
      label: "洛浦县"
    }, {
      value: "653225",
      label: "策勒县"
    }, {
      value: "653226",
      label: "于田县"
    }, {
      value: "653227",
      label: "民丰县"
    }]
  }, {
    value: "654000",
    label: "伊犁哈萨克自治州",
    children: [{
      value: "654002",
      label: "伊宁市"
    }, {
      value: "654003",
      label: "奎屯市"
    }, {
      value: "654004",
      label: "霍尔果斯市"
    }, {
      value: "654021",
      label: "伊宁县"
    }, {
      value: "654022",
      label: "察布查尔锡伯自治县"
    }, {
      value: "654023",
      label: "霍城县"
    }, {
      value: "654024",
      label: "巩留县"
    }, {
      value: "654025",
      label: "新源县"
    }, {
      value: "654026",
      label: "昭苏县"
    }, {
      value: "654027",
      label: "特克斯县"
    }, {
      value: "654028",
      label: "尼勒克县"
    }]
  }, {
    value: "654200",
    label: "塔城地区",
    children: [{
      value: "654201",
      label: "塔城市"
    }, {
      value: "654202",
      label: "乌苏市"
    }, {
      value: "654221",
      label: "额敏县"
    }, {
      value: "654223",
      label: "沙湾县"
    }, {
      value: "654224",
      label: "托里县"
    }, {
      value: "654225",
      label: "裕民县"
    }, {
      value: "654226",
      label: "和布克赛尔蒙古自治县"
    }]
  }, {
    value: "654300",
    label: "阿勒泰地区",
    children: [{
      value: "654301",
      label: "阿勒泰市"
    }, {
      value: "654321",
      label: "布尔津县"
    }, {
      value: "654322",
      label: "富蕴县"
    }, {
      value: "654323",
      label: "福海县"
    }, {
      value: "654324",
      label: "哈巴河县"
    }, {
      value: "654325",
      label: "青河县"
    }, {
      value: "654326",
      label: "吉木乃县"
    }]
  }, {
    value: "659000",
    label: "自治区直辖县级行政区划",
    children: [{
      value: "659001",
      label: "石河子市"
    }, {
      value: "659002",
      label: "阿拉尔市"
    }, {
      value: "659003",
      label: "图木舒克市"
    }, {
      value: "659004",
      label: "五家渠市"
    }, {
      value: "659006",
      label: "铁门关市"
    }]
  }]
}, {
  value: '660000',
  label: '台湾省',
  children: [{
    value: "660100",
    label: "台北市",
    children: [{
      value: "660101",
      label: "中正区"
    }, {
      value: "660102",
      label: "大同区"
    }, {
      value: "660103",
      label: "中山区"
    }, {
      value: "660104",
      label: "松山区"
    }, {
      value: "660105",
      label: "大安区"
    }, {
      value: "660106",
      label: "万华区"
    }, {
      value: "660107",
      label: "信义区"
    }, {
      value: "660108",
      label: "士林区"
    }, {
      value: "660109",
      label: "北投区"
    }, {
      value: "660110",
      label: "内湖区"
    }, {
      value: "660111",
      label: "南港区"
    }, {
      value: "660112",
      label: "文山区"
    }]
  }, {
    value: "660200",
    label: "高雄市",
    children: [{
      value: "660201",
      label: "新兴区"
    }, {
      value: "660202",
      label: "前金区"
    }, {
      value: "660203",
      label: "芩雅区"
    }, {
      value: "660204",
      label: "盐埕区"
    }, {
      value: "660205",
      label: "鼓山区"
    }, {
      value: "660206",
      label: "旗津区"
    }, {
      value: "660207",
      label: "前镇区"
    }, {
      value: "660208",
      label: "三民区"
    }, {
      value: "660209",
      label: "左营区"
    }, {
      value: "660210",
      label: "楠梓区"
    }, {
      value: "660211",
      label: "小港区"
    }]
  }, {
    value: "660300",
    label: "台南市",
    children: [{
      value: "660301",
      label: "中西区"
    }, {
      value: "660302",
      label: "东区"
    }, {
      value: "660303",
      label: "南区"
    }, {
      value: "660304",
      label: "北区"
    }, {
      value: "660305",
      label: "安平区"
    }, {
      value: "660306",
      label: "安南区"
    }]
  }, {
    value: "660400",
    label: "台中市",
    children: [{
      value: "660401",
      label: "中区"
    }, {
      value: "660402",
      label: "东区"
    }, {
      value: "660403",
      label: "南区"
    }, {
      value: "660404",
      label: "西区"
    }, {
      value: "660405",
      label: "北区"
    }, {
      value: "660406",
      label: "北屯区"
    }, {
      value: "660407",
      label: "西屯区"
    }, {
      value: "660408",
      label: "南屯区"
    }]
  }, {
    value: "660500",
    label: "金门县",
    children: [{
      value: "660501",
      label: "金门县"
    }]
  }, {
    value: "660600",
    label: "南投县",
    children: [{
      value: "660601",
      label: "南投县"
    }]
  }, {
    value: "660700",
    label: "基隆市",
    children: [{
      value: "660701",
      label: "仁爱区"
    }, {
      value: "660702",
      label: "信义区"
    }, {
      value: "660703",
      label: "中正区"
    }, {
      value: "660704",
      label: "中山区"
    }, {
      value: "660705",
      label: "安乐区"
    }, {
      value: "660706",
      label: "暖暖区"
    }, {
      value: "660707",
      label: "七堵区"
    }]
  }, {
    value: "660800",
    label: "新竹市",
    children: [{
      value: "660801",
      label: "东区"
    }, {
      value: "660802",
      label: "北区"
    }, {
      value: "660803",
      label: "香山区"
    }]
  }, {
    value: "660900",
    label: "嘉义市",
    children: [{
      value: "660901",
      label: "东区"
    }, {
      value: "660902",
      label: "西区"
    }]
  }, {
    value: "661000",
    label: "新北市",
    children: [{
      value: "661001",
      label: "新北市"
    }]
  }, {
    value: "661100",
    label: "宜兰县",
    children: [{
      value: "661100",
      label: "宜兰县"
    }]
  }, {
    value: "661200",
    label: "新竹县",
    children: [{
      value: "661201",
      label: "新竹县"
    }]
  }, {
    value: "661300",
    label: "桃园县",
    children: [{
      value: "661301",
      label: "桃园县"
    }]
  }, {
    value: "661400",
    label: "苗栗县",
    children: [{
      value: "661401",
      label: "苗栗县"
    }]
  }, {
    value: "661500",
    label: "彰化县",
    children: [{
      value: "661501",
      label: "彰化县"
    }]
  }, {
    value: "661600",
    label: "嘉义县",
    children: [{
      value: "661601",
      label: "嘉义县"
    }]
  }, {
    value: "661700",
    label: "云林县",
    children: [{
      value: "661701",
      label: "云林县"
    }]
  }, {
    value: "661800",
    label: "屏东县",
    children: [{
      value: "661801",
      label: "屏东县"
    }]
  }, {
    value: "661900",
    label: "台东县",
    children: [{
      value: "661901",
      label: "台东县"
    }]
  }, {
    value: "662000",
    label: "花莲县",
    children: [{
      value: "662001",
      label: "花莲县"
    }]
  }, {
    value: "662100",
    label: "澎湖县",
    children: [{
      value: "662101",
      label: "澎湖县"
    }]
  }]
}, {
  value: '670000',
  label: '香港',
  children: [{
    value: "670100",
    label: "香港岛",
    children: [{
      value: "670101",
      label: "中西区"
    }, {
      value: "670102",
      label: "湾仔区"
    }, {
      value: "670103",
      label: "东区"
    }, {
      value: "670104",
      label: "南区"
    }]
  }, {
    value: "670200",
    label: "九龙半岛",
    children: [{
      value: "670201",
      label: "九龙城区"
    }, {
      value: "670202",
      label: "油尖旺区"
    }, {
      value: "670203",
      label: "深水埗区"
    }, {
      value: "670204",
      label: "黄大仙区"
    }, {
      value: "670205",
      label: "观塘区"
    }]
  }, {
    value: "670300",
    label: "新界",
    children: [{
      value: "670301",
      label: "北区"
    }, {
      value: "670302",
      label: "大埔区"
    }, {
      value: "670303",
      label: "沙田区"
    }, {
      value: "670304",
      label: "西贡区"
    }, {
      value: "670305",
      label: "元朗区"
    }, {
      value: "670306",
      label: "屯门区"
    }, {
      value: "670307",
      label: "荃湾区"
    }, {
      value: "670308",
      label: "葵青区"
    }, {
      value: "670309",
      label: "离岛区"
    }]
  }]
}, {
  value: '680000',
  label: '澳门',
  children: [{
    value: "680100",
    label: "澳门半岛",
    children: [{
      value: "680101",
      label: "花地玛堂区"
    }, {
      value: "680102",
      label: "圣安多尼堂区"
    }, {
      value: "680103",
      label: "大堂区"
    }, {
      value: "680104",
      label: "望德堂区"
    }, {
      value: "680105",
      label: "风顺堂区"
    }]
  }, {
    value: "680200",
    label: "离岛",
    children: [{
      value: "680201",
      label: "嘉模堂区"
    }, {
      value: "680202",
      label: "圣方济各堂区"
    }]
  }]
}];
var _default = cityData;
exports.default = _default;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__A3AB04A",
    appName: "预约",
    appVersion: "1.1.0",
    appVersionCode: "110",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.08",
    uniRuntimeVersion: "4.08",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__A3AB04A",
      appName: "预约",
      appVersion: "1.1.0",
      appVersionCode: "110",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"预约","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"预约","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"预约","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"预约","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"预约","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!**************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/pages.json ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 31)();
module.exports = runtime;

/***/ }),

/***/ 31:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 33:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 34:
/*!****************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var files = __webpack_require__(35);
var modules = {};
files.keys().forEach(function (key) {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
var _default = _objectSpread({}, modules);
exports.default = _default;

/***/ }),

/***/ 35:
/*!***************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules sync nonrecursive \.js$ ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin.js": 36,
	"./agent.js": 54,
	"./base.js": 55,
	"./channel.js": 56,
	"./coachbroker.js": 57,
	"./dynamic.js": 58,
	"./member.js": 59,
	"./mine.js": 60,
	"./order.js": 61,
	"./salesman.js": 62,
	"./service.js": 63,
	"./shopstore.js": 64,
	"./technician.js": 65,
	"./user.js": 66
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),

/***/ 36:
/*!************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/admin.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _index$getVirtualPhon;
var _default = (_index$getVirtualPhon = {
  // 首页
  index: function index(param) {
    return _req.req.get("mobilenode/app/IndexAdminOrder/index", param);
  },
  // 拨打客户电话
  getVirtualPhone: function getVirtualPhone(param) {
    return _req.req.post("mobilenode/app/IndexAdminOrder/getVirtualPhone", param);
  },
  // 编辑通知状态
  noticeUpdate: function noticeUpdate(param) {
    return _req.req.post("mobilenode/app/IndexAdminOrder/noticeUpdate", param);
  },
  // 订单列表
  orderList: function orderList(param) {
    return _req.req.get("mobilenode/app/IndexAdminOrder/orderList", param);
  },
  // 订单详情
  orderInfo: function orderInfo(param) {
    return _req.req.get("mobilenode/app/IndexAdminOrder/orderInfo", param);
  },
  // 异常订单详情
  abnOrderInfo: function abnOrderInfo(param) {
    return _req.req.get("mobilenode/app/IndexAdminOrder/abnOrderInfo", param);
  },
  // 可退款服务详情
  canRefundOrderInfo: function canRefundOrderInfo(param) {
    return _req.req.get("mobilenode/app/IndexAdminOrder/canRefundOrderInfo", param);
  },
  // 管理员操作退款
  applyOrderRefund: function applyOrderRefund(param) {
    return _req.req.post("mobilenode/app/IndexAdminOrder/applyOrderRefund", param);
  },
  // 退款
  passRefundV2: function passRefundV2(param) {
    return _req.req.post("mobilenode/app/IndexAdminOrder/passRefundV2", param);
  },
  // 修改订单状态
  adminUpdateOrder: function adminUpdateOrder(param) {
    return _req.req.post("mobilenode/app/IndexAdminOrder/adminUpdateOrder", param);
  }
}, (0, _defineProperty2.default)(_index$getVirtualPhon, "adminUpdateOrder", function adminUpdateOrder(param) {
  return _req.req.post("mobilenode/app/IndexAdminOrder/adminUpdateOrder", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "refundOrderList", function refundOrderList(param) {
  return _req.req.get("mobilenode/app/IndexAdminOrder/refundOrderList", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "refundOrderInfo", function refundOrderInfo(param) {
  return _req.req.get("mobilenode/app/IndexAdminOrder/refundOrderInfo", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "passRefund", function passRefund(param) {
  return _req.req.post("mobilenode/app/IndexAdminOrder/passRefund", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "noPassRefund", function noPassRefund(param) {
  return _req.req.post("mobilenode/app/IndexAdminOrder/noPassRefund", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "adminSelect", function adminSelect(param) {
  return _req.req.get("mobilenode/app/IndexAdminOrder/adminSelect", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "orderChangeCoach", function orderChangeCoach(param) {
  return _req.req.post("mobilenode/app/IndexAdminOrder/orderChangeCoach", param);
}), (0, _defineProperty2.default)(_index$getVirtualPhon, "orderChangeCoachList", function orderChangeCoachList(param) {
  return _req.req.get("mobilenode/app/IndexAdminOrder/orderChangeCoachList", param);
}), _index$getVirtualPhon);
exports.default = _default;

/***/ }),

/***/ 37:
/*!****************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/utils/req.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFile = exports.req = exports.formatUrl = exports.formatImageUrl = exports.fly = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./index.js */ 38));
var _siteinfo = _interopRequireDefault(__webpack_require__(/*! ../siteinfo.js */ 50));
var _index3 = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 40));
var _error4 = __webpack_require__(/*! ./error.js */ 51);
// 接口返回值code说明
// 200=>正常；
// 400=>报错；
// 401=>需要登陆；
// 402=>错误并且弹出报错，报错内容为 error；
// 403=>错误并且弹出报错，报错内容为 error(小程序跳转到个人中心)；
// 404=>错误并且弹出报错，报错内容为 error(小程序跳转到首页)；

var Fly = __webpack_require__(/*! ./wx.js */ 52); //wx.js为您下载的源码文件
var fly = new Fly(); //创建fly实例
exports.fly = fly;
var tokenFly = new Fly();
// 打印站点信息siteInfo
var allSiteInfo = Object.assign({}, {
  time: "2024年1月22日 18:00",
  remark: "(test)~ update:迭代10.8 用户修改定位~"
}, _siteinfo.default);
//添加finally方法,用于指定不管 Promise 对象最后状态如何，都会执行的操作
Promise.prototype.finally = function (callback) {
  var P = this.constructor;
  return this.then(function (value) {
    return P.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return P.resolve(callback()).then(function () {
      throw reason;
    });
  });
};
var isW7 = false;
var isH5 = false;
var formatUrl = function formatUrl(url) {
  var model_name = "longbing_massages_city";
  var baseUrl = isW7 ? "".concat(_siteinfo.default.siteroot, "?i=").concat(_siteinfo.default.uniacid, "&t=").concat(_siteinfo.default.multiid, "&v=").concat(_siteinfo.default.version, "&from=wxapp&c=entry&a=wxapp&do=api&core=core2&m=").concat(model_name, "&s=").concat(url, "&urls=").concat(url) : "".concat(_siteinfo.default.siteroot, "?i=").concat(_siteinfo.default.uniacid, "&m=").concat(model_name, "&s=").concat(url, "&urls=").concat(url);
  if (isH5) {
    baseUrl = "/api?i=".concat(_siteinfo.default.uniacid, "&m=").concat(model_name, "&s=").concat(url);
  }
  return baseUrl;
};
//阿里云地址转为本地域名的 
exports.formatUrl = formatUrl;
var formatImageUrl = function formatImageUrl(url) {
  return url.includes(_siteinfo.default.siteroot) ? url : "".concat(formatUrl("card/getImage"), "&path=").concat(encodeURIComponent(url));
};

//微信小程序登录
exports.formatImageUrl = formatImageUrl;
var wxLogin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var _yield$uni$getLaunchO, query, url, _yield$uni$getProvide, _yield$uni$getProvide2, providerErr, providerData, _yield$uni$login, _yield$uni$login2, loginErr, loginData, _query$pid, pid, _query$coupon_atv_id, coupon_atv_id, login_param, d, _d$data, _code, data, error, autograph, coach_status, userInfo, _$store$state$config$, web_coach_port, _e$response$data, _code2, _error;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return uni.getLaunchOptionsSync();
          case 2:
            _yield$uni$getLaunchO = _context.sent;
            query = _yield$uni$getLaunchO.query;
            url = formatUrl("index/login");
            _context.prev = 5;
            uni.showLoading({
              title: "登录中..."
            });
            _context.next = 9;
            return uni.getProvider({
              service: 'oauth'
            });
          case 9:
            _yield$uni$getProvide = _context.sent;
            _yield$uni$getProvide2 = (0, _slicedToArray2.default)(_yield$uni$getProvide, 2);
            providerErr = _yield$uni$getProvide2[0];
            providerData = _yield$uni$getProvide2[1];
            _context.next = 15;
            return uni.login({
              provider: providerData.provider[0]
            });
          case 15:
            _yield$uni$login = _context.sent;
            _yield$uni$login2 = (0, _slicedToArray2.default)(_yield$uni$login, 2);
            loginErr = _yield$uni$login2[0];
            loginData = _yield$uni$login2[1];
            _query$pid = query.pid, pid = _query$pid === void 0 ? 0 : _query$pid, _query$coupon_atv_id = query.coupon_atv_id, coupon_atv_id = _query$coupon_atv_id === void 0 ? 0 : _query$coupon_atv_id;
            login_param = {
              code: loginData.code,
              pid: pid,
              coupon_atv_id: coupon_atv_id
            }; // console.log("login_param==>", login_param);
            _context.next = 23;
            return tokenFly.post(url, login_param);
          case 23:
            d = _context.sent;
            _d$data = d.data, _code = _d$data.code, data = _d$data.data, error = _d$data.error;
            if (!(_code !== 200)) {
              _context.next = 29;
              break;
            }
            uni.hideLoading();
            (0, _error4.serverError)({
              code: _code,
              msg: error
            });
            throw d;
          case 29:
            //登录成功
            uni.hideLoading();
            autograph = data.autograph, coach_status = data.coach_status, userInfo = data.data;
            _index3.default.commit('updateUserItem', {
              key: 'userInfo',
              val: userInfo
            });
            _index3.default.commit('updateUserItem', {
              key: 'autograph',
              val: autograph
            });
            _$store$state$config$ = _index3.default.state.config.configInfo.web_coach_port, web_coach_port = _$store$state$config$ === void 0 ? 0 : _$store$state$config$;
            _index3.default.commit('updateUserItem', {
              key: 'userPageType',
              val: [2, 3].includes(coach_status) && web_coach_port ? 2 : 1
            });
            return _context.abrupt("return", data);
          case 38:
            _context.prev = 38;
            _context.t0 = _context["catch"](5);
            uni.hideLoading();
            _e$response$data = _context.t0.response.data, _code2 = _e$response$data.code, _error = _e$response$data.error;
            if (_code2 !== 200) {
              (0, _error4.serverError)({
                code: _code2,
                msg: _error
              });
            }
            _context.next = 45;
            return Promise.reject(_context.t0);
          case 45:
            return _context.abrupt("return", _context.sent);
          case 46:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 38]]);
  }));
  return function wxLogin() {
    return _ref.apply(this, arguments);
  };
}();

//公众号登录
var H5LoginNum = 0;
var gzhLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var code, pageUrl, coupon_atv_id, pid, url, _$store$state$user$lo, _$store$state$user$lo2, lat, _$store$state$user$lo3, lng, d, _d$data2, res_code, data, error, autograph, coach_status, userInfo, _$store$state$config$2, web_coach_port, _e$response$data2, _code3, _error2;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            code = _index2.default.getQueryString('code');
            pageUrl = window.location.href;
            console.log(H5LoginNum, "======H5LoginNum");
            if (H5LoginNum == 0 && code) {
              code = '';
            }
            if (!code) {
              _context2.next = 47;
              break;
            }
            coupon_atv_id = _index2.default.getQueryString('coupon_atv_id') || 0;
            pid = _index2.default.getQueryString('pid') || 0;
            url = formatUrl("index/webLogin");
            _$store$state$user$lo = _index3.default.state.user.location, _$store$state$user$lo2 = _$store$state$user$lo.lat, lat = _$store$state$user$lo2 === void 0 ? 0 : _$store$state$user$lo2, _$store$state$user$lo3 = _$store$state$user$lo.lng, lng = _$store$state$user$lo3 === void 0 ? 0 : _$store$state$user$lo3;
            _context2.prev = 9;
            _context2.next = 12;
            return tokenFly.post(url, {
              login_type: 'gzh',
              code: code,
              pid: pid,
              coupon_atv_id: coupon_atv_id,
              lat: lat,
              lng: lng
            });
          case 12:
            d = _context2.sent;
            H5LoginNum = 0;
            _d$data2 = d.data, res_code = _d$data2.code, data = _d$data2.data, error = _d$data2.error;
            if (!(res_code !== 200)) {
              _context2.next = 19;
              break;
            }
            uni.hideLoading();
            (0, _error4.serverError)({
              code: res_code,
              msg: error
            });
            throw d;
          case 19:
            //登录成功
            uni.hideLoading();
            autograph = data.autograph, coach_status = data.coach_status, userInfo = data.data;
            _index3.default.commit('updateUserItem', {
              key: 'isGzhLogin',
              val: true
            });
            _index3.default.commit('updateUserItem', {
              key: 'userInfo',
              val: userInfo
            });
            _index3.default.commit('updateUserItem', {
              key: 'autograph',
              val: autograph
            });
            _$store$state$config$2 = _index3.default.state.config.configInfo.web_coach_port, web_coach_port = _$store$state$config$2 === void 0 ? 0 : _$store$state$config$2;
            _index3.default.commit('updateUserItem', {
              key: 'userPageType',
              val: [2, 3].includes(coach_status) && web_coach_port ? 2 : 1
            });
            return _context2.abrupt("return", data);
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](9);
            uni.hideLoading();
            _e$response$data2 = _context2.t0.response.data, _code3 = _e$response$data2.code, _error2 = _e$response$data2.error; // console.log("catch e code error=======", code, error)
            if (!(_code3 == 40163)) {
              _context2.next = 40;
              break;
            }
            H5LoginNum = 0;
            _context2.next = 37;
            return _index2.default.toAsyncLogin();
          case 37:
            setTimeout(function () {
              _index2.default.hideAll();
              fly.unlock();
            }, 200);
            _context2.next = 42;
            break;
          case 40:
            (0, _error4.serverError)({
              code: _code3,
              msg: _error2
            });
            uni.hideLoading();
          case 42:
            _context2.next = 44;
            return Promise.reject(_context2.t0);
          case 44:
            return _context2.abrupt("return", _context2.sent);
          case 45:
            _context2.next = 55;
            break;
          case 47:
            H5LoginNum = 0;
            _context2.next = 50;
            return _index2.default.toAsyncLogin();
          case 50:
            _index2.default.hideAll();
            fly.unlock();
            _context2.next = 54;
            return Promise.reject("跳转授权===============");
          case 54:
            return _context2.abrupt("return", _context2.sent);
          case 55:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 29]]);
  }));
  return function gzhLogin() {
    return _ref2.apply(this, arguments);
  };
}();

// app登录
var appLoginNum = 0;
var appLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var _$store$state$user, _$store$state$user$au, autograph, _$store$state$user$ap, appLogin, _$store$state$user$lo4, loginType, url, d, _d$data3, res_code, data, error, _autograph, coach_status, userInfo, _$store$state$config$3, web_coach_port, _e$response$data3, _code4, _error3;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _$store$state$user = _index3.default.state.user, _$store$state$user$au = _$store$state$user.autograph, autograph = _$store$state$user$au === void 0 ? '' : _$store$state$user$au, _$store$state$user$ap = _$store$state$user.appLogin, appLogin = _$store$state$user$ap === void 0 ? {} : _$store$state$user$ap, _$store$state$user$lo4 = _$store$state$user.loginType, loginType = _$store$state$user$lo4 === void 0 ? 'weixin' : _$store$state$user$lo4;
            if (appLoginNum == 0 && autograph) {
              appLogin = '';
            }
            // console.log(autograph, "=========================appLogin autograph")
            if (!appLogin) {
              _context3.next = 36;
              break;
            }
            code = '';
            url = formatUrl(loginType == 'weixin' ? 'index/appLogin' : 'index/iosLogin');
            _context3.prev = 5;
            _context3.next = 8;
            return tokenFly.post(url, {
              data: appLogin
            });
          case 8:
            d = _context3.sent;
            appLoginNum = 0;
            _d$data3 = d.data, res_code = _d$data3.code, data = _d$data3.data, error = _d$data3.error;
            if (!(res_code !== 200)) {
              _context3.next = 15;
              break;
            }
            uni.hideLoading();
            (0, _error4.serverError)({
              code: res_code,
              msg: error
            });
            throw d;
          case 15:
            //登录成功
            uni.hideLoading();
            _autograph = data.autograph, coach_status = data.coach_status, userInfo = data.data;
            _index3.default.commit('updateUserItem', {
              key: 'isShowLogin',
              val: false
            });
            _index3.default.commit('updateUserItem', {
              key: 'userInfo',
              val: userInfo
            });
            _index3.default.commit('updateUserItem', {
              key: 'autograph',
              val: _autograph
            });
            _$store$state$config$3 = _index3.default.state.config.configInfo.web_coach_port, web_coach_port = _$store$state$config$3 === void 0 ? 0 : _$store$state$config$3;
            _index3.default.commit('updateUserItem', {
              key: 'userPageType',
              val: [2, 3].includes(coach_status) && web_coach_port ? 2 : 1
            });
            return _context3.abrupt("return", data);
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](5);
            uni.hideLoading();
            appLoginNum = 0;
            _e$response$data3 = _context3.t0.response.data, _code4 = _e$response$data3.code, _error3 = _e$response$data3.error;
            if (_code4 !== 200) {
              (0, _error4.serverError)({
                code: _code4,
                msg: _error3
              });
            }
            _context3.next = 33;
            return Promise.reject(_context3.t0);
          case 33:
            return _context3.abrupt("return", _context3.sent);
          case 34:
            _context3.next = 44;
            break;
          case 36:
            appLoginNum = 0;
            _context3.next = 39;
            return _index2.default.toAsyncLogin();
          case 39:
            _index2.default.hideAll();
            fly.unlock();
            _context3.next = 43;
            return Promise.reject("跳转授权===============");
          case 43:
            return _context3.abrupt("return", _context3.sent);
          case 44:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 25]]);
  }));
  return function appLogin() {
    return _ref3.apply(this, arguments);
  };
}();

//设置超时
fly.config.timeout = 30000;

//设置请求基地址

//给所有请求添加自定义header
fly.config.headers = tokenFly.config.headers = {
  "content-type": "application/json"
};
var isapp = 0;

//添加请求拦截器
fly.interceptors.request.use( /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(request) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //添加验证token
            request.headers['autograph'] = _index3.default.state.user.autograph || '';
            request.headers['isapp'] = isapp;
            return _context4.abrupt("return", request);
          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}());

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use( /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(response) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(response.data.code != 401)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return", response);
          case 2:
            fly.lock();
            console.log("==> MP-WEIXIN 401");
            _context5.next = 6;
            return wxLogin();
          case 6:
            response.request.headers["autograph"] = _index3.default.state.user.autograph || '';
            fly.unlock();
            return _context5.abrupt("return", fly.request(response.request));
          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}(), /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(err) {
    var _err$status, status;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(err, "=======fly.interceptors.response.use err");
            _err$status = err.status, status = _err$status === void 0 ? 0 : _err$status;
            _index2.default.hideAll();
            // networkError({
            // 	code: status,
            // })
            //网络错误
            _context6.next = 5;
            return Promise.reject(err);
          case 5:
            return _context6.abrupt("return", _context6.sent);
          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function (_x3) {
    return _ref6.apply(this, arguments);
  };
}());

//统一处理请求,satus=200网络正常code=200服务器正常
var httpType = ["post", "get"];
var formatReq = function formatReq() {
  var req = {};
  httpType.forEach(function (type) {
    req[type] = /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(url, param) {
        var res, _res$data, code, error, data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                //构造请求地址
                url = formatUrl(url);
                _context7.next = 3;
                return fly[type](url, param);
              case 3:
                res = _context7.sent;
                // console.log(res, "========= formatReq res")
                _res$data = res.data, code = _res$data.code, error = _res$data.error, data = _res$data.data;
                code = code * 1;
                if (!(code === 200)) {
                  _context7.next = 8;
                  break;
                }
                return _context7.abrupt("return", data);
              case 8:
                //code!=200抛出错误
                _index2.default.hideAll();
                if (code == 400 && error) {
                  console.log(code, error, "code != 200");
                  (0, _error4.msgError)({
                    msg: error
                  });
                } else if (code == 407) {
                  _index2.default.goUrl({
                    url: "/user/pages/sys-lock",
                    openType: "reLaunch"
                  });
                }
                _context7.next = 12;
                return Promise.reject(res.data);
              case 12:
                return _context7.abrupt("return", _context7.sent);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      return function (_x4, _x5) {
        return _ref7.apply(this, arguments);
      };
    }();
  });
  return req;
};
var req = formatReq();

// 定义上传,picture--代表图片 audio--音频 video--视频,默认picture
exports.req = req;
var uploadFile = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(url) {
    var _ref9,
      _ref9$name,
      name,
      filePath,
      _ref9$contentType,
      contentType,
      _ref9$header,
      header,
      _ref9$formData,
      formData,
      _yield$uni$uploadFile,
      _yield$uni$uploadFile2,
      resErr,
      res,
      parseData,
      code,
      error,
      data,
      _args8 = arguments;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _ref9 = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {}, _ref9$name = _ref9.name, name = _ref9$name === void 0 ? "file" : _ref9$name, filePath = _ref9.filePath, _ref9$contentType = _ref9.contentType, contentType = _ref9$contentType === void 0 ? '' : _ref9$contentType, _ref9$header = _ref9.header, header = _ref9$header === void 0 ? {
              autograph: _index3.default.state.user.autograph || '',
              isapp: isapp
            } : _ref9$header, _ref9$formData = _ref9.formData, formData = _ref9$formData === void 0 ? {
              type: 'picture'
            } : _ref9$formData;
            url = formatUrl(url);
            _context8.next = 4;
            return uni.uploadFile({
              url: url,
              filePath: filePath,
              name: name,
              formData: formData,
              header: header
            });
          case 4:
            _yield$uni$uploadFile = _context8.sent;
            _yield$uni$uploadFile2 = (0, _slicedToArray2.default)(_yield$uni$uploadFile, 2);
            resErr = _yield$uni$uploadFile2[0];
            res = _yield$uni$uploadFile2[1];
            if (!(res.statusCode != 200)) {
              _context8.next = 14;
              break;
            }
            _index2.default.hideAll();
            console.log(res, "=====================res.statusCode != 200  networkError");
            // networkError();
            _context8.next = 13;
            return Promise.reject(res);
          case 13:
            return _context8.abrupt("return", _context8.sent);
          case 14:
            parseData = JSON.parse(res.data); //服务器错误
            code = parseData.code, error = parseData.error, data = parseData.data;
            if (!(code != 200)) {
              _context8.next = 29;
              break;
            }
            _index2.default.hideAll();
            if (!(code === 401)) {
              _context8.next = 25;
              break;
            }
            fly.lock();
            console.log("==> MP-WEIXIN 401");
            _context8.next = 23;
            return wxLogin();
          case 23:
            _context8.next = 26;
            break;
          case 25:
            (0, _error4.serverError)({
              code: code,
              msg: error
            });
          case 26:
            _context8.next = 28;
            return Promise.reject(res);
          case 28:
            return _context8.abrupt("return", _context8.sent);
          case 29:
            return _context8.abrupt("return", data);
          case 30:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function uploadFile(_x6) {
    return _ref8.apply(this, arguments);
  };
}();
exports.uploadFile = uploadFile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!******************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/utils/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ 39));
var _index = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 40));
var _index2 = _interopRequireDefault(__webpack_require__(/*! api/index.js */ 34));
var _index3 = _interopRequireDefault(__webpack_require__(/*! ./index.js */ 38));
var _default = {
  Validate: _validate.default,
  log: console.log,
  // log: () => {},
  // 计算直线距离
  getDistance: function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // 地球半径，单位米
    var phi1 = lat1 * Math.PI / 180; // 纬度1，弧度制
    var phi2 = lat2 * Math.PI / 180; // 纬度2，弧度制
    var phiDelta = (lat2 - lat1) * Math.PI / 180; // 两点纬度差，弧度制
    var lambdaDelta = (lon2 - lon1) * Math.PI / 180; // 两点经度差，弧度制

    var a = Math.sin(phiDelta / 2) * Math.sin(phiDelta / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(lambdaDelta / 2) * Math.sin(lambdaDelta / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
  },
  //格式化时间
  formatTime: function formatTime(date, format) {
    var newFormat = format || 'YY-M-D h:m:s';
    var formatNumber = this.formatNumber;
    var newDate = date || new Date();
    if (Object.prototype.toString.call(newDate).slice(8, -1) !== "Date") {
      newDate = new Date(date);
    }
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '日', '一', '二', '三', '四', '五', '六'];
    return newFormat.replace(/YY|Y|M|D|h|m|s|week|星期/g, function (a) {
      switch (a) {
        case 'YY':
          return newDate.getFullYear();
        case 'Y':
          return (newDate.getFullYear() + '').slice(2);
        case 'M':
          return formatNumber(newDate.getMonth() + 1);
        case 'D':
          return formatNumber(newDate.getDate());
        case 'h':
          return formatNumber(newDate.getHours());
        case 'm':
          return formatNumber(newDate.getMinutes());
        case 's':
          return formatNumber(newDate.getSeconds());
        case '星期':
          return "星期" + week[newDate.getDay() + 7];
        case 'week':
          return week[newDate.getDay()];
      }
    });
  },
  // 日期转时间戳
  DateToUnix: function DateToUnix(string) {
    var f = string.split(' ', 2);
    var d = (f[0] ? f[0] : '').split('-', 3);
    var t = (f[1] ? f[1] : '').split(':', 3);
    return new Date(parseInt(d[0], 10) || null, (parseInt(d[1], 10) || 1) - 1, parseInt(d[2], 10) || null, parseInt(t[0], 10) || null, parseInt(t[1], 10) || null, parseInt(t[2], 10) || null).getTime() / 1000;
  },
  //格式化数字
  formatNumber: function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  },
  // 保留小数 （不四舍五入）
  formatDecimal: function formatDecimal(num, decimal) {
    num = num.toString();
    var index = num.indexOf('.');
    if (index !== -1) {
      num = num.substring(0, decimal + index + 1);
    } else {
      num = num.substring(0);
    }
    return parseFloat(num).toFixed(decimal);
  },
  // 实时检测输入金额
  formatMoney: function formatMoney(val) {
    if (val.slice(0, 1) == "0" && val.slice(1, 2) > 0) {
      val = val.slice(1, 2);
    }
    if (val.slice(0, 1) == ".") {
      val = '0.';
    }
    if (val == "0.00") {
      val = '0.0';
    }
    return val.replace(/[^\d\.]|^\./g, '').replace(/\.{2}/g, '.').replace(/^([1-9]\d*|0)(\.\d{1,2})(\.|\d{1})?$/, '$1$2').replace(/^0\d{1}/g, '0');
  },
  toWeiXinString: function toWeiXinString(date) {
    var str;
    var newDate = date || new Date();
    if (Object.prototype.toString.call(newDate).slice(8, -1) !== "Date") {
      newDate = new Date(date);
    }
    var now = newDate;
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    var beforeYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2);
    var monday = new Date(today);
    monday.setDate(today.getDate() - (today.getDay() ? today.getDay() - 1 : 6));
    //注意：date初始化默认是按本地时间初始的，但打印默认却是按GMT时间打印的，也就是说打印出的不是本地现在的时间
    //LocaleString的打印也有点问题，"0点"会被打印为"上午12点"
    if (now.getTime() > today.getTime()) {
      str = "";
    } else if (now.getTime() > yesterday.getTime()) {
      str = "昨天";
    } else if (now.getTime() > beforeYesterday.getTime()) {
      str = "前天";
    } else if (now.getTime() > monday.getTime()) {
      var week = {
        "0": "周日",
        "1": "周一",
        "2": "周二",
        "3": "周三",
        "4": "周四",
        "5": "周五",
        "6": "周六"
      };
      str = week[now.getDay() + ""];
    } else {
      var hour = ["凌晨", "早上", "下午", "晚上"];
      var h = now.getHours();
      if (h == 12) str = "中午";else str = hour[parseInt(h / 6)];
      str = now.format("MM月dd ") + str;
    }
    str += now.format("HH:ss");
    return str;
  },
  //返回类型
  typeOf: function typeOf(param) {
    return Object.prototype.toString.call(param).slice(8, -1);
  },
  //判断是否为空
  isEmpty: function isEmpty(param) {
    //基本类型为空
    var condition1 = param === '' || param === null || param === undefined || param === "NaN";
    var condition2;
    var condition3;
    //引用类型为空
    if (!condition1) {
      condition2 = this.typeOf(param) === "Object" && Object.keys(param).length < 1;
      condition3 = this.typeOf(param) === "Array" && param.length < 1;
    }
    return condition1 || condition2 || condition3;
  },
  showLoading: function showLoading() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "加载中" : _ref$title,
      _ref$mask = _ref.mask,
      mask = _ref$mask === void 0 ? true : _ref$mask;
    uni.showLoading({
      title: title,
      mask: mask
    });
  },
  showToast: function showToast() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      title = _ref2.title,
      _ref2$icon = _ref2.icon,
      icon = _ref2$icon === void 0 ? "none" : _ref2$icon;
    uni.showToast({
      title: title,
      icon: icon,
      duration: 2000
    });
  },
  hideAll: function hideAll() {
    uni.hideLoading();
    uni.stopPullDownRefresh();
    uni.hideNavigationBarLoading();
  },
  showModal: function showModal(_ref3) {
    var _ref3$title = _ref3.title,
      title = _ref3$title === void 0 ? "提示" : _ref3$title,
      _ref3$content = _ref3.content,
      content = _ref3$content === void 0 ? "没有返回值,检查服务器是否正常" : _ref3$content;
    uni.showModal({
      title: title,
      content: content,
      showCancel: false
    });
  },
  setNavigationBarColor: function setNavigationBarColor(_ref4) {
    var _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? '#ffffff' : _ref4$color,
      bg = _ref4.bg;
    uni.setNavigationBarColor({
      frontColor: color,
      backgroundColor: bg
      // animation: {
      // 	duration: 100,
      // 	timingFunc: 'easeIn'
      // }
    });
  },
  getQueryString: function getQueryString(name) {
    var reg = new RegExp("([^?&]*)" + name + "=([^&]*)(&|$)");
    var r = window.location.href.match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
  },
  getHostname: function getHostname(url) {
    var reg = /^http(s)?:\/\/(.*?)\//;
    // 必须是http开头或者https开头，结尾为'/'
    var ToReplace = 'Host/';
    url.replace(reg, ToReplace);
    url = reg.exec(url)[2];
    return url;
  },
  //获取标签上data
  getDataSet: function getDataSet(e) {
    return e.currentTarget.dataset;
  },
  //获表单控件值
  getValue: function getValue(e) {
    return e.detail.value;
  },
  getNavBarHeight: function getNavBarHeight() {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$uni$getSystemI, statusBarHeight, navigationBarHeight, navBarHeight;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return uni.getSystemInfoSync();
            case 2:
              _yield$uni$getSystemI = _context.sent;
              statusBarHeight = _yield$uni$getSystemI.statusBarHeight;
              navigationBarHeight = _yield$uni$getSystemI.navigationBarHeight;
              navBarHeight = statusBarHeight * 1 + 44;
              return _context.abrupt("return", navBarHeight);
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  pick: function pick(obj, arr) {
    return arr.reduce(function (acc, curr) {
      return curr in obj && (acc[curr] = obj[curr]), acc;
    }, {});
  },
  getUrlToStr: function getUrlToStr(url, params) {
    console.log(url, params, "=====url, params");
    var text = url;
    if (params) {
      text = "".concat(url, "?") + Object.keys(params)
      // .filter(key => params[key] || params[key] === 0)
      .filter(function (key) {
        return params[key];
      }) // 删除无值的字段，可根据需要进行保留或删除
      .map(function (key) {
        return "".concat(key, "=").concat(params[key]);
      }).toString().replace(/,/g, '&');
    }
    return text;
  },
  toAsyncLogin: function toAsyncLogin() {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var pageArr, pages, _pages, route, _pages$options, options, routeUrl, _$store$state$user$us, userPageType, pageParam, loginPage, openType;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pageArr = ['/pages/order'];
              pages = getCurrentPages();
              _pages = pages[pages.length - 1], route = _pages.route, _pages$options = _pages.options, options = _pages$options === void 0 ? {} : _pages$options;
              route = route === "pages/login" ? "pages/service" : route;
              _context2.next = 6;
              return _this.getUrlToStr("/".concat(route), options);
            case 6:
              routeUrl = _context2.sent;
              _$store$state$user$us = _index.default.state.user.userPageType, userPageType = _$store$state$user$us === void 0 ? 1 : _$store$state$user$us;
              pageParam = route === 'pages/mine' ? "?type=".concat(userPageType) : "";
              loginPage = "".concat(routeUrl).concat(pageParam); // console.log(loginPage, "============toAsyncLogin loginPage")
              openType = pageArr.includes("/".concat(route)) ? "reLaunch" : "navigateTo";
              _index.default.commit('updateUserItem', {
                key: 'loginPage',
                val: loginPage
              });
              _this.goUrl({
                url: "/pages/login",
                openType: openType
              });
            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  toCheckLogin: function toCheckLogin(param) {
    var _$store$state$user = _index.default.state.user,
      _$store$state$user$lo = _$store$state$user.loginType,
      loginType = _$store$state$user$lo === void 0 ? 'weixin' : _$store$state$user$lo,
      userInfo = _$store$state$user.userInfo;
    var _userInfo$id = userInfo.id,
      uid = _userInfo$id === void 0 ? 0 : _userInfo$id,
      _userInfo$phone = userInfo.phone,
      phone = _userInfo$phone === void 0 ? '' : _userInfo$phone;
    var _$store$state$config$ = _index.default.state.config.configInfo,
      _$store$state$config$2 = _$store$state$config$.short_code_status,
      short_code_status = _$store$state$config$2 === void 0 ? 0 : _$store$state$config$2,
      _$store$state$config$3 = _$store$state$config$.bind_phone_type,
      bind_phone_type = _$store$state$config$3 === void 0 ? 0 : _$store$state$config$3;
    var checkLogin = true;
    if (checkLogin) {
      this.goUrl(param);
    }
  },
  toCheckMemberBuy: function toCheckMemberBuy(param, member_info) {
    var can_buy = member_info.can_buy,
      title = member_info.title;
    if (!can_buy) {
      var msg = title ? title.includes('会员') ? title : "".concat(title, "\u4F1A\u5458") : '会员';
      this.showToast({
        title: "\u60A8\u8FD8\u4E0D\u662F".concat(msg)
      });
      return;
    }
    this.goUrl(param);
  },
  goUrl: function goUrl() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$url = _ref5.url,
      url = _ref5$url === void 0 ? "" : _ref5$url,
      _ref5$openType = _ref5.openType,
      openType = _ref5$openType === void 0 ? "navigateTo" : _ref5$openType,
      _ref5$path = _ref5.path,
      path = _ref5$path === void 0 ? "" : _ref5$path,
      _ref5$query = _ref5.query,
      query = _ref5$query === void 0 ? "" : _ref5$query;
    var that = this;
    if (!url) return;
    if (this.typeOf(query) == 'Object') {
      var queryStr = Object.keys(query).map(function (k) {
        return "".concat(k, "=").concat(query[k]);
      }).join('&');
      url = "".concat(url, "&").concat(queryStr);
    }
    var list = ["navigateTo", "redirectTo", "switchTab", "reLaunch"];
    if (list.includes(openType)) {
      if (openType == 'navigateTo' && getCurrentPages().length > 9) {
        uni.redirectTo({
          url: url
        });
      } else {
        uni[openType]({
          url: url
        });
      }
    }
    //返回
    openType == "navigateBack" && uni.navigateBack({
      delta: url
    });

    //跳转小程序
    if (openType == "miniProgram") {
      var mini_data = that.deepCopy(url);
      var arr = mini_data.split(";");
      // console.log(arr, "======= arr miniProgram")
      var appId = arr[0];
      var _path = arr.length > 1 ? arr[1] : '';
      uni.navigateToMiniProgram({
        appId: appId,
        path: _path
      });
    }

    //打电话
    openType == "call" && uni.makePhoneCall({
      phoneNumber: url
    });
    // 复制文本
    openType == 'copy' && uni.setClipboardData({
      data: url,
      success: function success(res) {
        uni.getClipboardData({
          success: function success(res) {
            console.log('复制文本成功 ==>', res.data);
          }
        });
      }
    });
    //跳转网页/播放视频
    if (openType == "web" || openType == 'video') {
      var encode_url = encodeURIComponent(url);
      uni.navigateTo({
        url: "/user/pages/common/".concat(openType, "?url=").concat(encode_url)
      });
    }
  },
  // 刷新上页数据
  back: function back() {
    var pages = getCurrentPages(); //当前页面栈
    if (pages.length > 1) {
      var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象  
      //触发父页面中的方法change()  
      beforePage.$vm.initRefresh();
    }
  },
  //获取页面对象，0时为当前页面
  getPage: function getPage() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var pages = getCurrentPages();
    var page = pages[pages.length - 1 + index];
    return page.$vm;
  },
  // 预览图片
  previewImage: function previewImage(param) {
    var current = param.current,
      urls = param.urls;
    uni.previewImage({
      current: current,
      urls: urls
    });
  },
  // 根据type获取数据字符串 
  getItems: function getItems(o) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
    var items = [];
    o = o || [];
    o.forEach(function (item) {
      items.push(item[type]);
    });
    return items.join(sign);
  },
  // 检查授权
  checkAuth: function checkAuth() {
    var _arguments = arguments;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _ref6, _ref6$type, type, _ref6$tip, tip, _ref6$checkApp, checkApp, contentList, err, result, _yield$uni$getSetting, _yield$uni$getSetting2, _yield$uni$authorize, _yield$uni$authorize2;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6 = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {}, _ref6$type = _ref6.type, type = _ref6$type === void 0 ? "userLocation" : _ref6$type, _ref6$tip = _ref6.tip, tip = _ref6$tip === void 0 ? "" : _ref6$tip, _ref6$checkApp = _ref6.checkApp, checkApp = _ref6$checkApp === void 0 ? false : _ref6$checkApp;
              contentList = {
                phone: "授权获取手机号",
                userLocation: "你的地理位置",
                address: "你的通讯地址",
                invoiceTitle: "发票抬头",
                invoice: "获取发票",
                werun: "微信运动步数",
                record: "你的录音功能",
                writePhotosAlbum: "你的保存到相册功能",
                camera: "摄像头"
              };
              tip = tip || "\u60A8\u6682\u672A\u5F00\u542F".concat(contentList[type], "\u7684\u6388\u6743\uFF0C\u662F\u5426\u5F00\u542F?");
              // 声明
              _context3.next = 5;
              return uni.getSetting();
            case 5:
              _yield$uni$getSetting = _context3.sent;
              _yield$uni$getSetting2 = (0, _slicedToArray2.default)(_yield$uni$getSetting, 2);
              err = _yield$uni$getSetting2[0];
              result = _yield$uni$getSetting2[1];
              if (!err) {
                _context3.next = 11;
                break;
              }
              return _context3.abrupt("return", Promise.reject(err));
            case 11:
              if (!result.authSetting["scope.".concat(type)]) {
                _context3.next = 13;
                break;
              }
              return _context3.abrupt("return", true);
            case 13:
              _context3.next = 15;
              return uni.authorize({
                scope: "scope.".concat(type)
              });
            case 15:
              _yield$uni$authorize = _context3.sent;
              _yield$uni$authorize2 = (0, _slicedToArray2.default)(_yield$uni$authorize, 2);
              err = _yield$uni$authorize2[0];
              result = _yield$uni$authorize2[1];
              if (err) {
                _context3.next = 21;
                break;
              }
              return _context3.abrupt("return", true);
            case 21:
              uni.hideLoading();
              //提示去设置
              return _context3.abrupt("return", new Promise(function (resove, reject) {
                uni.showModal({
                  content: tip,
                  success: function success(res) {
                    if (res.confirm) {
                      uni.openSetting({
                        success: function success(result) {
                          if (result.authSetting["scope.".concat(type)]) {
                            resove(true);
                          } else {
                            reject();
                          }
                        }
                      });
                    } else {
                      reject();
                    }
                  }
                });
              }));
            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  //深拷贝
  deepCopy: function deepCopy(o) {
    var that = this;
    if (o instanceof Array) {
      var n = [];
      for (var i = 0; i < o.length; ++i) {
        n[i] = that.deepCopy(o[i]);
      }
      return n;
    } else if (o instanceof Function) {
      var n = new Function("return " + o.toString())();
      return n;
    } else if (o instanceof Object) {
      var n = {};
      for (var i in o) {
        n[i] = that.deepCopy(o[i]);
      }
      return n;
    } else {
      return o;
    }
  },
  getOptions: function getOptions(options) {
    var comminOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.assign({}, comminOptions, this.formatOptions(options));
  },
  //获取用户端公共参数
  getCommonOptions: function getCommonOptions(options) {
    return this.pick(options, ["staff_id"]);
  },
  // 微信支付
  pay: function pay(pay_list) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var that, param, _pay_list$provider, provider, _pay_list$orderInfo, orderInfo, _yield$uni$requestPay, _yield$uni$requestPay2, err, res;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              that = _this2;
              param = {};
              _pay_list$provider = pay_list.provider, provider = _pay_list$provider === void 0 ? 'wxpay' : _pay_list$provider, _pay_list$orderInfo = pay_list.orderInfo, orderInfo = _pay_list$orderInfo === void 0 ? '' : _pay_list$orderInfo;
              param = that.pick(pay_list, ['nonceStr', 'package', 'signType', 'paySign', 'timeStamp']);
              _context4.next = 6;
              return uni.requestPayment(param);
            case 6:
              _yield$uni$requestPay = _context4.sent;
              _yield$uni$requestPay2 = (0, _slicedToArray2.default)(_yield$uni$requestPay, 2);
              err = _yield$uni$requestPay2[0];
              res = _yield$uni$requestPay2[1];
              if (!err) {
                _context4.next = 17;
                break;
              }
              console.log("=======pay err", err);
              that.showToast({
                title: "\u652F\u4ED8\u5931\u8D25"
              });
              _context4.next = 15;
              return Promise.reject("支付失败");
            case 15:
              _context4.next = 18;
              break;
            case 17:
              return _context4.abrupt("return", true);
            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  // 获取地址
  getLocation: function getLocation() {
    var that = this;
    return new Promise(function (resove, reject) {
      uni.getLocation({
        success: function success(res) {
          var lat = res.latitude,
            lng = res.longitude;
          var locationInfo = {
            lat: lat,
            lng: lng,
            address: '',
            province: '',
            city: '',
            district: ''
          };
          resove(locationInfo);
        },
        fail: function fail(e) {
          console.log(e, "====getLocation fail e");
          var locationInfo = {
            lat: 0,
            lng: 0,
            address: '',
            province: '',
            city: '',
            district: ''
          };
          resove(locationInfo);
        }
      });
    });
  },
  // 选择地址
  chooseLocation: function chooseLocation() {
    var _arguments2 = arguments,
      _this3 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var type, changeUseLoca, param, _yield$uni$chooseLoca, _yield$uni$chooseLoca2, err, loca_data, _ref7, _ref7$name, name, _ref7$address, address, _ref7$latitude, lat, _ref7$longitude, lng, loca_params;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              type = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 0;
              changeUseLoca = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : true;
              if (changeUseLoca) {
                _index.default.commit('updateUserItem', {
                  key: 'useChooseLocation',
                  val: true
                });
              }
              param = {};
              _context5.next = 6;
              return _this3.checkAuth({
                type: 'userLocation'
              });
            case 6:
              _context5.next = 8;
              return uni.chooseLocation(param);
            case 8:
              _yield$uni$chooseLoca = _context5.sent;
              _yield$uni$chooseLoca2 = (0, _slicedToArray2.default)(_yield$uni$chooseLoca, 2);
              err = _yield$uni$chooseLoca2[0];
              loca_data = _yield$uni$chooseLoca2[1];
              _ref7 = err ? {
                name: '',
                address: '',
                latitude: '',
                longitude: ''
              } : loca_data, _ref7$name = _ref7.name, name = _ref7$name === void 0 ? '' : _ref7$name, _ref7$address = _ref7.address, address = _ref7$address === void 0 ? '' : _ref7$address, _ref7$latitude = _ref7.latitude, lat = _ref7$latitude === void 0 ? '' : _ref7$latitude, _ref7$longitude = _ref7.longitude, lng = _ref7$longitude === void 0 ? '' : _ref7$longitude;
              if (type == 1) {
                address = address || name;
              }
              if (type == 2) {
                address = address ? "".concat(address, " ").concat(name) : name;
              }
              loca_params = type == 1 ? {
                lat: lat,
                lng: lng,
                name: name,
                address: address,
                province: '',
                city: '',
                district: ''
              } : {
                lat: lat,
                lng: lng,
                name: name,
                address: address
              };
              if (changeUseLoca) {
                _index.default.commit('updateUserItem', {
                  key: 'useChooseLocation',
                  val: false
                });
              }
              return _context5.abrupt("return", loca_params);
            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  // 获取定位
  getUtilLocation: function getUtilLocation() {
    var _arguments3 = arguments,
      _this4 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var updateLoca, locaParams, _yield$_this4$getLoca, lat, lng, location;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              updateLoca = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : true;
              locaParams = _index3.default.deepCopy(_index.default.state.user.location);
              _context6.next = 4;
              return _this4.getLocation();
            case 4:
              _yield$_this4$getLoca = _context6.sent;
              lat = _yield$_this4$getLoca.lat;
              lng = _yield$_this4$getLoca.lng;
              location = _this4.toChangeUpdateUtilLoca(updateLoca, locaParams, {
                lat: lat,
                lng: lng,
                is_util_loca: 1
              });
              return _context6.abrupt("return", location);
            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  toChangeUpdateUtilLoca: function toChangeUpdateUtilLoca(updateLoca, loca, locaParams) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var location;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              location = Object.assign({}, loca, locaParams);
              if (updateLoca) {
                _index.default.commit('updateUserItem', {
                  key: 'location',
                  val: location
                });
              }
              return _context7.abrupt("return", location);
            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  // 解析地址
  getMapInfo: function getMapInfo() {
    var _arguments4 = arguments,
      _this5 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var updateLoca, params, changeAddr, isUpdate, _$store$state$user$lo2, location, _location, lat, lng, _$store$state$config$4, _$store$state$config$5, realtime_location, _$store$state$config$6, user_update_location, _$store$state$user$us2, _$store$state$user$us3, coach_status, _$store$state$user$us4, coach_position;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              updateLoca = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : true;
              params = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : {};
              changeAddr = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : false;
              isUpdate = _arguments4.length > 3 && _arguments4[3] !== undefined ? _arguments4[3] : false;
              _$store$state$user$lo2 = _index.default.state.user.location, location = _$store$state$user$lo2 === void 0 ? {} : _$store$state$user$lo2;
              if (params.lat && params.lng) {
                location = params;
              }
              _location = location, lat = _location.lat, lng = _location.lng;
              _$store$state$config$4 = _index.default.state.config.configInfo, _$store$state$config$5 = _$store$state$config$4.realtime_location, realtime_location = _$store$state$config$5 === void 0 ? 0 : _$store$state$config$5, _$store$state$config$6 = _$store$state$config$4.user_update_location, user_update_location = _$store$state$config$6 === void 0 ? 0 : _$store$state$config$6;
              if (!(lat && lng && (user_update_location || isUpdate))) {
                _context8.next = 15;
                break;
              }
              _context8.next = 11;
              return _this5.getMapAddr({
                lat: lat,
                lng: lng
              });
            case 11:
              location = _context8.sent;
              if (updateLoca) {
                _index.default.commit('updateUserItem', {
                  key: 'location',
                  val: location
                });
              }
              _$store$state$user$us2 = _index.default.state.user.userCoachStatus, _$store$state$user$us3 = _$store$state$user$us2.status, coach_status = _$store$state$user$us3 === void 0 ? 0 : _$store$state$user$us3, _$store$state$user$us4 = _$store$state$user$us2.coach_position, coach_position = _$store$state$user$us4 === void 0 ? 0 : _$store$state$user$us4;
              if (coach_position && coach_status == 2 && (realtime_location && !changeAddr || params.lat)) {
                _this5.updateCoachAddr(location);
              }
            case 15:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  getMapAddr: function getMapAddr(location) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
      var _location2, lat, lng, data, _JSON$parse, status, result, _result, _result$address, address, _result$address_compo, address_component, _result$formatted_add, formatted_addresses, _formatted_addresses$, recommend, standard_address, province, city, district;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _location2 = location, lat = _location2.lat, lng = _location2.lng;
              _context9.next = 3;
              return _index2.default.base.getMapInfo({
                location: "".concat(lat, ",").concat(lng)
              });
            case 3:
              data = _context9.sent;
              _JSON$parse = JSON.parse(data), status = _JSON$parse.status, result = _JSON$parse.result;
              if (status == 0 || status == 1) {
                if (status == 1) {
                  result = {
                    address: '暂未解析到位置信息',
                    address_component: {
                      province: '',
                      city: '',
                      district: ''
                    }
                  };
                }
                _result = result, _result$address = _result.address, address = _result$address === void 0 ? '暂未解析到位置信息' : _result$address, _result$address_compo = _result.address_component, address_component = _result$address_compo === void 0 ? {} : _result$address_compo, _result$formatted_add = _result.formatted_addresses, formatted_addresses = _result$formatted_add === void 0 ? {} : _result$formatted_add;
                if (status == 0) {
                  _formatted_addresses$ = formatted_addresses.recommend, recommend = _formatted_addresses$ === void 0 ? '' : _formatted_addresses$, standard_address = formatted_addresses.standard_address;
                  address = "".concat(standard_address, " ").concat(recommend);
                }
                province = address_component.province, city = address_component.city, district = address_component.district;
                location = {
                  lat: lat,
                  lng: lng,
                  address: address,
                  province: province,
                  city: city,
                  district: district
                };
              }
              return _context9.abrupt("return", location);
            case 7:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  updateCoachAddr: function updateCoachAddr(location) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
      var _$store$state$user2, _$store$state$user2$u, userCoachStatus, _$store$state$user2$c, coachInfo, upParams, upLatLng, changeOnAddr, val, cval;
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _$store$state$user2 = _index.default.state.user, _$store$state$user2$u = _$store$state$user2.userCoachStatus, userCoachStatus = _$store$state$user2$u === void 0 ? {} : _$store$state$user2$u, _$store$state$user2$c = _$store$state$user2.coachInfo, coachInfo = _$store$state$user2$c === void 0 ? {} : _$store$state$user2$c;
              upParams = _index3.default.pick(location, ['lat', 'lng', 'address']);
              upLatLng = _index3.default.pick(location, ['lat', 'lng']);
              _index2.default.technician.coachUpdate(upParams);
              changeOnAddr = Object.assign({}, _index.default.state.user.changeOnAddr, upParams);
              _index.default.commit('updateUserItem', {
                key: 'changeOnAddr',
                val: changeOnAddr
              });
              val = Object.assign({}, _index3.default.deepCopy(userCoachStatus), upLatLng);
              cval = Object.assign({}, _index3.default.deepCopy(coachInfo), upLatLng);
              _index.default.commit('updateUserItem', {
                key: 'userCoachStatus',
                val: val
              });
              _index.default.commit('updateUserItem', {
                key: 'coachInfo',
                val: cval
              });
            case 10:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 39:
/*!*********************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/utils/validate.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var strategies = {
  // errorMsg参数，提升了适用性
  isNotNull: function isNotNull(value, errorMsg, regType) {
    //去空字符，不为空
    // regType 2去除所有空格
    if (regType == 2 && value) {
      value = value.replace(/(^\s*)|(\s*$)/g, "");
    }
    if (value === '' || value === undefined || value === false || JSON.stringify(value) === '[]' || JSON.stringify(value) === '{}') {
      // 返回字符串true  错误信息
      return errorMsg;
    }
  },
  minLength: function minLength(value, errorMsg, length) {
    //限制最小长度
    if (value.length < length) {
      return errorMsg;
    }
  },
  maxLength: function maxLength(value, errorMsg, length) {
    //限制最大长度
    if (value == null || value.length < 1) {
      return errorMsg;
    } else if (value.length > length) {
      return "".concat(errorMsg, "\uFF0C\u6700\u591A\xA5").concat(length, "\u5B57");
    }
  },
  isAllPhone: function isAllPhone(value, errorMsg, regType, regText) {
    regText = regText || '电话号码';
    var reg = /((^400)-([0-9]{7})$)|(^1[3-9]\d{9}$)|((^0\d{2,3})-(\d{7,8})$)/;
    if (value == null || value == '' || value.length < 1) {
      return errorMsg;
    } else if (!reg.test(value)) {
      return "".concat(value, " ").concat(regText, "\u65E0\u6548");
    }
  },
  isMobile: function isMobile(value, errorMsg) {
    //   if (!/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7}|([0-9]{3,4}-)?[0-9]{7,8})$/.test(value)) { //电话号码校验
    if (value == null || value == '' || value.length < 1) {
      return errorMsg;
    } else if (!/^(1[0-9]{10})$/.test(value)) {
      //电话号码校验
      return "".concat(value, " \u624B\u673A\u53F7\u65E0\u6548");
    }
  },
  isZuoji: function isZuoji(value, errorMsg) {
    if (!/0\d{2,3}-\d{7,8}|\(?0\d{2,3}[)-]?\d{7,8}|\(?0\d{2,3}[)-]*\d{7,8}$/.test(value)) {
      //座机号码校验
      return errorMsg;
    }
  },
  isNotText: function isNotText(value, errorMsg) {
    if (!/^[\u4e00-\u9fa5]+$/.test(value)) {//非中文校验
    } else {
      return errorMsg;
    }
  },
  isWechat: function isWechat(value, errorMsg) {
    if (!/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,29}$/.test(value)) {
      //微信号码校验
      return errorMsg;
    }
  },
  isEmail: function isEmail(value, errorMsg) {
    if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
      //邮箱校验
      return errorMsg;
    }
  },
  isMoney: function isMoney(value, errorMsg, regType) {
    // regType 1大于0；2可为0
    var regArr = {
      1: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
      2: /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
    };
    var reg = regArr[regType];
    if (value == '') {
      return errorMsg;
    } else if (regType == 1 && value * 1 === 0) {
      return "".concat(errorMsg, "\uFF0C\u4E0D\u53EF\u4E3A0");
    } else if (!reg.test(value)) {
      return "".concat(errorMsg, "\uFF0C\u6700\u591A2\u4F4D\u5C0F\u6570");
    }
  },
  isUrl: function isUrl(value, errorMsg) {
    if (value.indexOf('http') < 0) {
      return errorMsg;
    }
  },
  isNumber: function isNumber(value, errorMsg, regType) {
    // 1可为0；2大于0
    var reg = regType == 1 ? /^\+?[0-9]*$/ : /^[1-9]\d*$/;
    if (!reg.test(value * 1)) {
      var msg = regType == 2 ? "".concat(errorMsg, "\uFF0C\u5FC5\u987B\u662F\u5927\u4E8E0\u7684\u6574\u6570") : "".concat(errorMsg, "\uFF0C\u5FC5\u987B\u662F\u6574\u6570");
      return msg;
    }
  },
  isFloatNum: function isFloatNum(value, errorMsg, regType, dotLen, maxNum, unit) {
    // dotLen 保留几位小数
    // regType 1大于0；2可为0 
    var regArr = {
      1: {
        1: /^(([1-9][0-9]*)|(([0]\.\d{1}|[1-9][0-9]*\.\d{1})))$/,
        2: /^(([0-9][0-9]*)|(([0]\.\d{1}|[1-9][0-9]*\.\d{1})))$/
      },
      2: {
        1: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
        2: /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
      }
    };
    var reg = regArr[dotLen][regType];
    if (value == '') {
      return errorMsg;
    } else if (regType == 1 && value * 1 === 0) {
      return "".concat(errorMsg, "\uFF0C\u4E0D\u53EF\u4E3A0");
    } else if (!reg.test(value)) {
      return "".concat(errorMsg, "\uFF0C\u6700\u591A").concat(dotLen, "\u4F4D\u5C0F\u6570");
    } else if (maxNum && value * 1 > maxNum) {
      return "".concat(errorMsg, "\uFF0C\u4E0D\u80FD\u5927\u4E8E").concat(maxNum).concat(unit);
    }
  },
  isIdCard: function isIdCard(value, errorMsg) {
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    if (value == null || value.length < 1) {
      return errorMsg;
    }
    if (regIdCard.test(value)) {
      if (value.length == 18) {
        var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
        var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
        var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
        for (var i = 0; i < 17; i++) {
          idCardWiSum += value.substring(i, i + 1) * idCardWi[i];
        }
        var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
        var idCardLast = value.substring(17); //得到最后一位身份证号码
        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod == 2) {
          if (idCardLast == "X" || idCardLast == "x") {} else {
            return "".concat(value, " \u8EAB\u4EFD\u8BC1\u53F7\u7801\u6700\u540E\u4E00\u4F4D\u5E94\u4E3AX");
          }
        } else {
          //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast == idCardY[idCardMod]) {} else {
            return "".concat(value, " \u8EAB\u4EFD\u8BC1\u53F7\u7801\u65E0\u6548");
          }
        }
      }
    } else {
      return "".concat(value, " \u8EAB\u4EFD\u8BC1\u53F7\u7801\u65E0\u6548");
    }
  }
};
var Validate = /*#__PURE__*/(0, _createClass2.default)(function Validate() {
  (0, _classCallCheck2.default)(this, Validate);
  this.cache = [];
});
Validate.prototype.add = function (value) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var checkType = item.checkType,
    errorMsg = item.errorMsg,
    length = item.length,
    _item$regType = item.regType,
    regType = _item$regType === void 0 ? 1 : _item$regType,
    regText = item.regText,
    _item$dotLen = item.dotLen,
    dotLen = _item$dotLen === void 0 ? 2 : _item$dotLen,
    _item$maxNum = item.maxNum,
    maxNum = _item$maxNum === void 0 ? 0 : _item$maxNum,
    _item$unit = item.unit,
    unit = _item$unit === void 0 ? '' : _item$unit;
  this.cache.push(function () {
    // 规则
    var method, arr;
    //判断为已有的策略还是新增的
    if (typeof checkType === 'string') {
      arr = checkType.split(':');
      var strategy = arr.shift();
      method = strategies[strategy];
    } else {
      arr = [];
      method = checkType;
    }
    arr.unshift(value);
    arr.push(errorMsg);
    var lengthArr = ['minLength', 'maxLength'];
    if (lengthArr.includes(checkType) && length) {
      arr.push(length);
    }
    var regTypeArr = ['isNotNull', 'isAllPhone', 'isMoney', 'isNumber', 'isFloatNum'];
    if (regTypeArr.includes(checkType)) {
      arr.push(regType);
    }
    var regTextArr = ['isAllPhone'];
    if (regTextArr.includes(checkType)) {
      arr.push(regText);
    }
    var dotLenArr = ['isFloatNum'];
    if (dotLenArr.includes(checkType)) {
      arr.push(dotLen);
    }
    var maxNumArr = ['isFloatNum'];
    if (maxNumArr.includes(checkType)) {
      arr.push(maxNum);
    }
    var unitArr = ['isFloatNum'];
    if (unitArr.includes(checkType)) {
      arr.push(unit);
    }
    return method.apply(null, arr);
  });
};
Validate.prototype.start = function () {
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var msg = validatorFunc();
    if (msg) {
      return msg;
    }
  }
};
var _default = Validate;
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!******************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 33));
_vue.default.use(_vuex.default);
var files = __webpack_require__(41);
var modules = {};
files.keys().forEach(function (key) {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
var _default = new _vuex.default.Store({
  modules: modules
});
exports.default = _default;

/***/ }),

/***/ 41:
/*!*****************************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules sync nonrecursive \.js$ ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./config.js": 42,
	"./dynamic.js": 43,
	"./map.js": 44,
	"./order.js": 45,
	"./service.js": 46,
	"./shopstore.js": 47,
	"./technician.js": 48,
	"./user.js": 49
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 41;

/***/ }),

/***/ 42:
/*!***************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/config.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/utils/index.js */ 38));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _default = {
  state: {
    old_attendant_name: '技师',
    old_channel_menu_name: '渠道商',
    configInfo: {
      id: 0,
      isIos: uni.getSystemInfoSync().system.includes('iOS'),
      navBarHeight: uni.getSystemInfoSync().statusBarHeight * 1 + 44,
      curSysHeight: '',
      tabbarHeight: '',
      methodObj: {
        1: 'call',
        2: 'miniProgram',
        3: 'web',
        4: 'navigateTo'
      },
      tabBar: []
    },
    pageArr: ['/pages/service', '/pages/technician', '/pages/shopstore', '/pages/dynamic', '/pages/map', '/pages/order', '/pages/mine'],
    play_method: [{
      method: 'onPlay',
      msg: '开始播放',
      status: true
    }, {
      method: 'onStop',
      msg: '结束播放',
      status: false
    }, {
      method: 'onError',
      msg: '报错Error',
      status: false
    }, {
      method: 'onEnded',
      msg: '自然结束播放',
      status: false
    }],
    audioBg: {},
    audioType: 'service_start_recording',
    playBg: false,
    isHaveAudio: false
  },
  mutations: {
    //修改信息
    updateConfigItem: function updateConfigItem(state, item) {
      var key = item.key,
        val = item.val;
      state[key] = val;
      if (!['configInfo', 'audioType'].includes(key)) return;
      var src = state.configInfo[state.audioType];
      if (key == 'configInfo') {
        uni.setStorageSync('configInfo', val);
      }
      if (key == 'audioType') {
        // if (!src) return
        if (state.playBg) {
          state.audioBg.stop();
        }
      }
      if (state.isHaveAudio) {
        state.audioBg.src = src || '';
        if (key == 'configInfo') return;
      } else {
        if (!src) return;
        state.audioBg = uni.createInnerAudioContext();
        state.isHaveAudio = true;
        state.audioBg.src = src;
        state.audioBg.obeyMuteSwitch = false;
        state.play_method.map(function (item) {
          state.audioBg[item.method](function () {
            console.log('bg=>', item.msg);
            state.playBg = item.status;
          });
        });
      }
      if (key == 'audioType') {
        state.audioBg.play();
      }
    }
  },
  actions: {
    // 获取基本配置
    getConfigInfo: function getConfigInfo(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var commit, state, rules_status, config, base_config, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                rules_status = 0;
                if (param && param.rules_status) {
                  rules_status = param.rules_status;
                }
                _context.next = 5;
                return _index2.default.base.configInfo({
                  rules_status: rules_status == 0 ? 1 : 0
                });
              case 5:
                config = _context.sent;
                if (!config.primaryColor) {
                  config.primaryColor = '#A40035';
                }
                if (!config.subColor) {
                  config.subColor = '#F1C06B';
                }
                if (!config.user_image) {
                  config.user_image = 'https://lbqny.migugu.com/admin/anmo/mine/bg.png';
                }
                if (!config.coach_image) {
                  config.coach_image = 'https://lbqny.migugu.com/admin/anmo/mine/bg.png';
                }
                if (!config.service_btn_color) {
                  config.service_btn_color = '#282B34';
                }
                if (!config.service_font_color) {
                  config.service_font_color = '#EBDDB1';
                }
                if (!config.user_font_color) {
                  config.user_font_color = '#ffffff';
                }
                if (!config.coach_font_color) {
                  config.coach_font_color = '#ffffff';
                }
                base_config = _index.default.pick(state.configInfo, ['isIos', 'navBarHeight', 'curSysHeight', 'tabbarHeight', 'methodObj']);
                data = Object.assign({}, config, base_config);
                commit('updateConfigItem', {
                  key: 'configInfo',
                  val: data
                });
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    toPlayAudio: function toPlayAudio(_ref2, param) {
      var commit = _ref2.commit,
        state = _ref2.state;
      var key = param.key;
      console.log("toPlayAudio========", key);
      commit('updateConfigItem', {
        key: 'audioType',
        val: key
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 43:
/*!****************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/dynamic.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/utils/index.js */ 38));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _default = {
  state: {
    pageActive: false,
    activeIndex: 0,
    haveOperItem: false,
    tabList: [{
      title: '推荐',
      id: 0
    }, {
      title: '关注',
      id: 1,
      number: 0
    }],
    param: {
      page: 1,
      coach_name: ''
    },
    list: {
      data: [],
      last_page: 1,
      current_page: 1
    },
    follow_dynamic_num: 0,
    coach_status: -1
  },
  mutations: {
    updateDynamicItem: function updateDynamicItem(state, item) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key, val;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = item.key, val = item.val;
                state[key] = val;
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  actions: {
    getDynamicIndex: function getDynamicIndex(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, d, tabList;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context2.next = 3;
                return _index2.default.dynamic.getFollowData(param);
              case 3:
                d = _context2.sent;
                commit('updateDynamicItem', {
                  key: 'follow_dynamic_num',
                  val: d.num
                });
                commit('updateDynamicItem', {
                  key: 'coach_status',
                  val: d.coach_status
                });
                tabList = _index.default.deepCopy(state.tabList);
                tabList[1].number = d.num;
                commit('updateDynamicItem', {
                  key: 'tabList',
                  val: tabList
                });
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getDynamicList: function getDynamicList(_ref2, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, methodModel, d, oldList, newList, list;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                methodModel = state.activeIndex == 0 ? 'dynamicList' : 'followDynamicList';
                _context3.next = 4;
                return _index2.default.dynamic[methodModel](param);
              case 4:
                d = _context3.sent;
                oldList = state.list;
                newList = d;
                list = {};
                if (param.page == 1) {
                  list = newList;
                } else {
                  newList.data = oldList.data.concat(newList.data);
                  list = newList;
                }
                commit('updateDynamicItem', {
                  key: 'param',
                  val: param
                });
                commit('updateDynamicItem', {
                  key: 'list',
                  val: list
                });
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 44:
/*!************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/map.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 40));
var _default = {
  state: {
    pageActive: false,
    sexList: [{
      id: -1,
      title: '不限'
    }, {
      id: 0,
      title: '男'
    }, {
      id: 1,
      title: '女'
    }],
    yearList: [{
      id: 0,
      title: '不限',
      year: [0, 0]
    }, {
      id: 1,
      title: '1-3年',
      year: [1, 3]
    }, {
      id: 2,
      title: '3-5年',
      year: [3, 5]
    }, {
      id: 3,
      title: '5-10年',
      year: [5, 10]
    }, {
      id: 4,
      title: '10年以上',
      year: [10, 200]
    }],
    map: {
      latitude: 0,
      longitude: 0,
      scale: 16,
      controls: []
    },
    covers: [],
    service_cate: [],
    param: {
      page: 1,
      sex: -1,
      year: 0,
      cate_id: 0,
      activeIndex: 0,
      coach_name: '',
      service_time: ''
    },
    check: {
      sex: -1,
      year: 0,
      coach_name: '',
      service_time: ''
    },
    mapList: [],
    list: {
      data: [],
      last_page: 1,
      current_page: 1
    },
    mapType: 'map'
  },
  mutations: {
    updateMapItem: function updateMapItem(state, item) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key, val;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = item.key, val = item.val;
                state[key] = val;
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  actions: {
    getMapIndex: function getMapIndex(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, d;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context2.next = 3;
                return _index.default.service.serviceCateList(param);
              case 3:
                d = _context2.sent;
                d.unshift({
                  id: 0,
                  title: '全部'
                });
                commit('updateMapItem', {
                  key: 'service_cate',
                  val: d
                });
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getMapList: function getMapList(_ref2, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, d, map, arr;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                _context3.next = 3;
                return _index.default.service.mapCoachList(param);
              case 3:
                d = _context3.sent;
                map = Object.assign({}, state.map, {
                  latitude: param.lat,
                  longitude: param.lng
                });
                arr = [];
                d.map(function (item, index) {
                  arr.push({
                    id: index,
                    latitude: item.lat,
                    longitude: item.lng,
                    iconPath: item.work_img,
                    width: 40,
                    height: 40
                  });
                });
                commit('updateMapItem', {
                  key: 'map',
                  val: map
                });
                commit('updateMapItem', {
                  key: 'covers',
                  val: arr
                });
                commit('updateMapItem', {
                  key: 'mapList',
                  val: d
                });
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getMapCoachList: function getMapCoachList(_ref3, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var commit, state, _$store$state$config$, coach_format, methodModel, d, oldList, newList, list;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref3.commit, state = _ref3.state;
                _$store$state$config$ = _index2.default.state.config.configInfo.coach_format, coach_format = _$store$state$config$ === void 0 ? 1 : _$store$state$config$;
                methodModel = coach_format == 1 ? 'serviceCoachList' : 'typeServiceCoachList';
                _context4.next = 5;
                return _index.default.service[methodModel](param);
              case 5:
                d = _context4.sent;
                oldList = state.list;
                newList = d;
                list = {};
                if (param.page == 1) {
                  list = newList;
                } else {
                  newList.data = oldList.data.concat(newList.data);
                  list = newList;
                }
                commit('updateMapItem', {
                  key: 'list',
                  val: list
                });
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 45:
/*!**************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/order.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/utils/index.js */ 38));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _req = __webpack_require__(/*! @/utils/req.js */ 37);
var _default = {
  state: {
    pageActive: false,
    // pay_type 1待支付，2待服务，3技-师接单，4技-师出发，5技-师到达，6服务中，7已完成
    activeIndex: 0,
    tabList: [{
      title: '全部',
      id: 0
    }, {
      title: '待支付',
      id: 1
      // number: 10
    }, {
      title: '待服务',
      id: 5
    }, {
      title: '服务中',
      id: 6
    }, {
      title: '已完成',
      id: 7
    }],
    param: {
      page: 1,
      pay_type: 0
    },
    list: {
      data: [],
      last_page: 1,
      current_page: 1
    },
    carList: {},
    haveOperItem: false,
    bellOrderParams: {},
    alipayOrderParams: {},
    isUserMedia: false,
    recorder: null,
    recorder_status: false,
    recorder_order_id: 0,
    coach_travel_order_id: 0,
    coach_travel_arrive_id: 0,
    order_unix_list: []
  },
  mutations: {
    updateOrderItem: function updateOrderItem(state, item) {
      var key = item.key,
        val = item.val;
      state[key] = val;
    }
  },
  actions: {
    getOrderList: function getOrderList(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var commit, state, d, oldList, newList, list, _newList, _newList$current_page, current_page;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context.next = 3;
                return _index2.default.order.orderList(param);
              case 3:
                d = _context.sent;
                oldList = state.list;
                newList = d;
                list = {};
                if (param.page == 1) {
                  _newList = newList, _newList$current_page = _newList.current_page, current_page = _newList$current_page === void 0 ? 0 : _newList$current_page;
                  if (!current_page) {
                    newList = {
                      data: [],
                      last_page: 1,
                      current_page: 1
                    };
                  }
                  list = newList;
                } else {
                  newList.data = oldList.data.concat(newList.data);
                  list = newList;
                }
                commit('updateOrderItem', {
                  key: 'list',
                  val: list
                });
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 获取购物车数据
    getCarList: function getCarList(_ref2, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, carList;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                _context2.next = 3;
                return _index2.default.order.carInfo(param);
              case 3:
                carList = _context2.sent;
                carList.list.map(function (item) {
                  item.checked = false;
                });
                commit('updateOrderItem', {
                  key: 'carList',
                  val: carList
                });
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 46:
/*!****************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/service.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/utils/index.js */ 38));
var _index3 = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 40));
var _default = {
  state: {
    pageActive: false,
    activeIndex: 0,
    tabList: [{
      title: '全部',
      sort: 'top desc'
    }, {
      title: '价格',
      sort: 'price',
      sign: 0,
      is_sign: 1
    }, {
      title: '销量',
      sort: 'total_sale',
      sign: 0,
      is_sign: 1
    }, {
      title: '好评度',
      sort: 'star',
      sign: 0,
      is_sign: 1
    }],
    param: {
      page: 1,
      sort: ''
    },
    list: {
      data: [],
      last_page: 1,
      current_page: 1
    },
    banner: [],
    service_cate: [],
    service_all_cate: [],
    recommend_list: [],
    recommend_style: 1,
    have_coupon: false
  },
  mutations: {
    updateServiceItem: function updateServiceItem(state, item) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key, val;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = item.key, val = item.val;
                state[key] = val;
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  actions: {
    getServiceIndex: function getServiceIndex(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, d, _d$banner, banner, _d$service_cate, service_cate, _d$recommend_style, recommend_style, _d$coach_apply_show, coach_apply_show, _d$have_coupon, have_coupon, _$store$state$config$, attendant_name, _$store$state$config$2, page, cate, col_num, row_num, banner_height, service_filter, bannerInd, sBannerInd, columnInd, _page$1$bannerInd$dat, style, bannerList, _ref2, _ref2$isShowFilter, isShowFilter, _page$1$columnInd$dat, col, row, columnList, cateLen, num, cateInd;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context2.next = 3;
                return _index.default.service.index(param);
              case 3:
                d = _context2.sent;
                _d$banner = d.banner, banner = _d$banner === void 0 ? [] : _d$banner, _d$service_cate = d.service_cate, service_cate = _d$service_cate === void 0 ? [] : _d$service_cate, _d$recommend_style = d.recommend_style, recommend_style = _d$recommend_style === void 0 ? 1 : _d$recommend_style, _d$coach_apply_show = d.coach_apply_show, coach_apply_show = _d$coach_apply_show === void 0 ? 0 : _d$coach_apply_show, _d$have_coupon = d.have_coupon, have_coupon = _d$have_coupon === void 0 ? false : _d$have_coupon;
                _$store$state$config$ = _index3.default.state.config.configInfo, attendant_name = _$store$state$config$.attendant_name, _$store$state$config$2 = _$store$state$config$.page, page = _$store$state$config$2 === void 0 ? {} : _$store$state$config$2;
                cate = _index2.default.deepCopy(service_cate);
                col_num = 5;
                row_num = 2;
                banner_height = 400;
                service_filter = true;
                if (page && page[1] && page[1].length > 0) {
                  bannerInd = page[1].findIndex(function (item) {
                    return item.type == 'banner';
                  });
                  sBannerInd = page[1].findIndex(function (item) {
                    return item.type == 'service-banner';
                  });
                  columnInd = page[1].findIndex(function (item) {
                    return item.type == 'column';
                  });
                  if (bannerInd != -1) {
                    _page$1$bannerInd$dat = page[1][bannerInd].data, style = _page$1$bannerInd$dat.style, bannerList = _page$1$bannerInd$dat.bannerList;
                    banner_height = style.number;
                    banner = bannerList;
                  }
                  _ref2 = bannerInd == -1 && sBannerInd == -1 ? {
                    isShowFilter: true
                  } : page[1][bannerInd == -1 ? sBannerInd : bannerInd].data, _ref2$isShowFilter = _ref2.isShowFilter, isShowFilter = _ref2$isShowFilter === void 0 ? true : _ref2$isShowFilter;
                  service_filter = isShowFilter;
                  if (columnInd != -1) {
                    _page$1$columnInd$dat = page[1][columnInd].data, col = _page$1$columnInd$dat.col, row = _page$1$columnInd$dat.row, columnList = _page$1$columnInd$dat.columnList;
                    cate = columnList;
                    col_num = col.number;
                    row_num = row.number;
                  }
                } else {
                  cateLen = service_cate.length;
                  if (coach_apply_show) {
                    cate.splice(cateLen > 4 ? 4 : cateLen, 0, {
                      id: -1,
                      title: _index3.default.state.config.configInfo.attendant_name + '入驻',
                      cover: 'https://lbqny.migugu.com/admin/anmo/technician/default_technician.png',
                      url: '/technician/pages/apply?type=1'
                    });
                  }
                  num = coach_apply_show && cateLen > 28 || !coach_apply_show && cateLen > 29 ? 29 : coach_apply_show ? cateLen + 1 : cateLen;
                  cate = cate.slice(0, num);
                  if (cateLen > (coach_apply_show ? 28 : 29)) {
                    cate.push({
                      id: 0,
                      title: '全部分类',
                      cover: '',
                      icon: 'iconfenleiyingyongtongzhi2',
                      url: '/user/pages/service/cate'
                    });
                  }
                  cateInd = service_cate.findIndex(function (item) {
                    return item.id == 0;
                  });
                  if (cateInd !== -1) {
                    service_cate.splice(cateInd, 1);
                  }
                }
                commit('updateServiceItem', {
                  key: 'banner',
                  val: {
                    list: banner,
                    banner_height: banner_height,
                    service_filter: service_filter
                  }
                });
                commit('updateServiceItem', {
                  key: 'service_cate',
                  val: {
                    list: cate,
                    col_num: col_num,
                    row_num: row_num
                  }
                });
                commit('updateServiceItem', {
                  key: 'service_all_cate',
                  val: service_cate
                });
                commit('updateServiceItem', {
                  key: 'recommend_style',
                  val: recommend_style
                });
                commit('updateServiceItem', {
                  key: 'have_coupon',
                  val: have_coupon
                });
              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getRecommendList: function getRecommendList(_ref3, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, d;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit, state = _ref3.state;
                _context3.next = 3;
                return _index.default.service.recommendList(param);
              case 3:
                d = _context3.sent;
                commit('updateServiceItem', {
                  key: 'recommend_list',
                  val: d
                });
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getServiceList: function getServiceList(_ref4, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var commit, state, _$store$state$config$3, realtime_location, methodModel, d, oldList, newList, list;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref4.commit, state = _ref4.state;
                _$store$state$config$3 = _index3.default.state.config.configInfo.realtime_location, realtime_location = _$store$state$config$3 === void 0 ? 0 : _$store$state$config$3;
                if (!realtime_location) {
                  delete param.lat;
                  delete param.lng;
                }
                methodModel = realtime_location ? 'getCoachService' : 'serviceList';
                _context4.next = 6;
                return _index.default.service[methodModel](param);
              case 6:
                d = _context4.sent;
                oldList = state.list;
                newList = d;
                list = {};
                if (param.page == 1) {
                  list = newList;
                } else {
                  newList.data = oldList.data.concat(newList.data);
                  list = newList;
                }
                commit('updateServiceItem', {
                  key: 'list',
                  val: list
                });
              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 47:
/*!******************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/shopstore.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/utils/index.js */ 38));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _default = {
  state: {
    pageActive: false,
    haveOperItem: false,
    param: {
      page: 1,
      coach_name: ''
    },
    list: {
      data: [],
      last_page: 1,
      current_page: 1
    },
    cateList: []
  },
  mutations: {
    updateShopstoreItem: function updateShopstoreItem(state, item) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key, val;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = item.key, val = item.val;
                state[key] = val;
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  actions: {
    getShopstoreIndex: function getShopstoreIndex(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, d;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context2.next = 3;
                return _index2.default.shopstore.storeCateList(param);
              case 3:
                d = _context2.sent;
                commit('updateShopstoreItem', {
                  key: 'cateList',
                  val: d
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getShopstoreList: function getShopstoreList(_ref2, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, d, oldList, newList, list;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                _context3.next = 3;
                return _index2.default.shopstore.storeList(param);
              case 3:
                d = _context3.sent;
                oldList = state.list;
                newList = d;
                list = {};
                if (param.page == 1) {
                  list = newList;
                } else {
                  newList.data = oldList.data.concat(newList.data);
                  list = newList;
                }
                commit('updateShopstoreItem', {
                  key: 'param',
                  val: param
                });
                commit('updateShopstoreItem', {
                  key: 'list',
                  val: list
                });
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 48:
/*!*******************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/technician.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 40));
var _default = {
  state: {
    pageActive: false,
    haveOperItem: false,
    activeIndex: 0,
    tabList: [{
      title: '全部',
      id: 0
    }, {
      title: '可服务',
      id: 1
    }, {
      title: '服务中',
      id: 2
    }, {
      title: '可预约',
      id: 3
    }],
    sexList: [{
      id: -1,
      title: '不限'
    }, {
      id: 0,
      title: '男'
    }, {
      id: 1,
      title: '女'
    }],
    serviceTypeList: [{
      id: 0,
      title: '不限'
    }, {
      id: 2,
      title: '上门'
    }, {
      id: 1,
      title: '到店'
    }],
    cityId: 0,
    cityIndex: -1,
    cityList: [],
    serviceCateList: [],
    check: {
      sex: -1,
      cate_id: 0,
      recommend: 0,
      free_fare: 0,
      service_type: 0,
      // 1到店，2上门
      store_name: ''
    },
    param: {
      page: 1,
      ser_id: 0,
      coach_name: ''
    },
    list: {
      data: [],
      last_page: 1,
      current_page: 1
    }
  },
  mutations: {
    updateTechnicianItem: function updateTechnicianItem(state, item) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key, val;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = item.key, val = item.val;
                state[key] = val;
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  actions: {
    getServiceCate: function getServiceCate(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, d;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context2.next = 3;
                return _index.default.service.serviceCateList();
              case 3:
                d = _context2.sent;
                commit('updateTechnicianItem', {
                  key: 'serviceCateList',
                  val: d
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCityList: function getCityList(_ref2, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, lat, lng, _param$change, change, d, _state$cityId, cityId, ind, cityIndex;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                lat = param.lat, lng = param.lng, _param$change = param.change, change = _param$change === void 0 ? 0 : _param$change;
                _context3.next = 4;
                return _index.default.base.getCity({
                  lat: lat,
                  lng: lng
                });
              case 4:
                d = _context3.sent;
                _state$cityId = state.cityId, cityId = _state$cityId === void 0 ? 0 : _state$cityId;
                ind = d.findIndex(function (v) {
                  return change || !cityId ? v.is_select : v.id == cityId;
                });
                commit('updateTechnicianItem', {
                  key: 'cityList',
                  val: d
                });
                cityIndex = ind;
                commit('updateTechnicianItem', {
                  key: 'cityIndex',
                  val: cityIndex
                });
                commit('updateTechnicianItem', {
                  key: 'cityId',
                  val: d && d.length > 0 && cityIndex !== -1 ? d[cityIndex].id : 0
                });
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getServiceCoachList: function getServiceCoachList(_ref3, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var commit, state, _$store$state$config$, coach_format, methodModel, d, oldList, newList, list;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref3.commit, state = _ref3.state;
                _$store$state$config$ = _index2.default.state.config.configInfo.coach_format, coach_format = _$store$state$config$ === void 0 ? 1 : _$store$state$config$;
                methodModel = coach_format == 1 ? 'serviceCoachList' : 'typeServiceCoachList';
                _context4.next = 5;
                return _index.default.service[methodModel](param);
              case 5:
                d = _context4.sent;
                oldList = state.list;
                newList = d;
                list = {};
                if (param.page == 1) {
                  list = newList;
                } else {
                  newList.data = oldList.data.concat(newList.data);
                  list = newList;
                }
                commit('updateTechnicianItem', {
                  key: 'list',
                  val: list
                });
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 49:
/*!*************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/store/modules/user.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _index = _interopRequireDefault(__webpack_require__(/*! @/utils/index.js */ 38));
var _index2 = _interopRequireDefault(__webpack_require__(/*! @/api/index.js */ 34));
var _index3 = _interopRequireDefault(__webpack_require__(/*! @/store/index.js */ 40));
var _req = __webpack_require__(/*! @/utils/req.js */ 37);
var _default = {
  state: {
    autograph: '',
    userInfo: {},
    appLogin: '',
    loginType: '',
    loginPage: '',
    isGzhLogin: false,
    isShowLogin: false,
    locationChange: false,
    commonOptions: {
      id: 0,
      pid: 0,
      admin_id: 0,
      coach_id: 0,
      channel_id: 0
    },
    location: {
      lat: '',
      lng: '',
      address: '',
      is_util_loca: 0
    },
    locaRefuse: false,
    changeAddr: false,
    isShowAuth: true,
    mineInfo: {},
    // 用户个人中心
    userPageType: 2,
    // 1用户，2技-师
    coachInfo: {},
    userCoachStatus: {},
    useChooseLocation: false,
    changeOnAddr: {},
    noChangeLoca: {
      noloca: false
    },
    haveShieldOper: 0,
    personVerifyUrl: '',
    fddExtsign: '',
    oldMovable: {
      x: 0,
      y: 0
    },
    userPrivacySetting: {},
    resolvePrivacy: {},
    wecom_staff: '',
    scanRecordId: 0
  },
  mutations: {
    //更新内容
    updateUserItem: function updateUserItem(state, item) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key, val, _val$phone, phone, create_time, _val$alipay_number, alipay_number, _val$bank_card_id, bank_card_id, len, storeArr;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = item.key, val = item.val;
                if (key == 'userInfo' && val && val.id) {
                  _val$phone = val.phone, phone = _val$phone === void 0 ? '' : _val$phone, create_time = val.create_time, _val$alipay_number = val.alipay_number, alipay_number = _val$alipay_number === void 0 ? '' : _val$alipay_number, _val$bank_card_id = val.bank_card_id, bank_card_id = _val$bank_card_id === void 0 ? '' : _val$bank_card_id;
                  if (phone) {
                    val.split_phone = phone.substring(0, 3) + '****' + phone.substring(7, 11);
                  }
                  val.create_date = _index.default.formatTime(create_time * 1000, 'YY-M-D');
                  if (alipay_number) {
                    len = alipay_number.length;
                    val.split_alipay_number = alipay_number.substring(0, len > 3 ? 3 : 1) + '***';
                    if (len > 6) {
                      val.split_alipay_number += alipay_number.substring(len == 6 ? len - 2 : len - 3, len);
                    }
                  }
                  if (bank_card_id) {
                    val.split_card_id = bank_card_id.substring(0, 4) + '***' + bank_card_id.substring(bank_card_id.length - 4, bank_card_id.length);
                  }
                }
                if (key == 'mineInfo' && val && val.id == -1) {
                  storeArr = ['userInfo', 'appLogin', 'loginType', 'loginPage', 'isShowLogin', 'isGzhLogin'];
                  storeArr.map(function (key) {
                    var syncVal = key == 'isShowLogin' ? true : '';
                    state[key] = syncVal;
                    uni.setStorageSync(key, syncVal);
                  });
                }
                if (['autograph', 'userInfo', 'location', 'appLogin', 'loginType', 'loginPage', 'isShowLogin', 'isGzhLogin'].includes(key)) {
                  uni.setStorageSync(key, val);
                }
                state[key] = val;
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  actions: {
    //获取个人信息
    getUserInfo: function getUserInfo(_ref, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, data, _data, id;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                _context2.next = 3;
                return _index2.default.user.userInfo();
              case 3:
                data = _context2.sent;
                _data = data, id = _data.id;
                if (!id) {
                  data = {
                    avatarUrl: "https://lbqny.migugu.com/admin/farm/default-user.png"
                  };
                }
                commit('updateUserItem', {
                  key: 'userInfo',
                  val: data
                });
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //获取用户个人中心数据
    getMineInfo: function getMineInfo(_ref2, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, data, _data2, _data2$id, id, fx_status, _$store$state$config$, fx_check;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                _context3.next = 3;
                return _index2.default.mine.index();
              case 3:
                data = _context3.sent;
                _data2 = data, _data2$id = _data2.id, id = _data2$id === void 0 ? 0 : _data2$id, fx_status = _data2.fx_status;
                if (!id) {
                  data = {
                    id: -1
                  };
                }
                _$store$state$config$ = _index3.default.state.config.configInfo.fx_check, fx_check = _$store$state$config$ === void 0 ? 0 : _$store$state$config$;
                data.is_fx = !fx_check || fx_check && fx_status == 2;
                commit('updateUserItem', {
                  key: 'mineInfo',
                  val: data
                });
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    //获取技-师信息
    getCoachInfo: function getCoachInfo(_ref3, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var commit, state, data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref3.commit, state = _ref3.state;
                _context4.next = 3;
                return _index2.default.technician.coachIndex();
              case 3:
                data = _context4.sent;
                commit('updateUserItem', {
                  key: 'coachInfo',
                  val: data
                });
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    //获取技-师信息
    getUserCoachStatus: function getUserCoachStatus(_ref4) {
      var _arguments = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var commit, state, param, _param$delay, delay, data, _data$status, status, _data$coach_position, coach_position;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref4.commit, state = _ref4.state;
                param = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {
                  delay: 0
                };
                _param$delay = param.delay, delay = _param$delay === void 0 ? 0 : _param$delay;
                _context5.next = 5;
                return _index2.default.mine.getUserCoachStatus();
              case 5:
                data = _context5.sent;
                _data$status = data.status, status = _data$status === void 0 ? -1 : _data$status, _data$coach_position = data.coach_position, coach_position = _data$coach_position === void 0 ? 0 : _data$coach_position;
                data.auto_coach_position = coach_position;
                commit('updateUserItem', {
                  key: 'userCoachStatus',
                  val: data
                });
              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    //获取客服
    getWecomStaff: function getWecomStaff(_ref5, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var commit, state, data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref5.commit, state = _ref5.state;
                _context6.next = 3;
                return _index2.default.mine.getWecomStaff();
              case 3:
                data = _context6.sent;
                commit('updateUserItem', {
                  key: 'wecom_staff',
                  val: data
                });
              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    //添加扫码记录
    addScanRecord: function addScanRecord(_ref6, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var commit, state, data;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref6.commit, state = _ref6.state;
                _context7.next = 3;
                return _index2.default.mine.addScanRecord(param);
              case 3:
                data = _context7.sent;
                if (data) {
                  commit('updateUserItem', {
                    key: 'scanRecordId',
                    val: data
                  });
                }
              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    //更新扫码记录
    updateScanRecord: function updateScanRecord(_ref7, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var commit, state, id, data;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                commit = _ref7.commit, state = _ref7.state;
                id = state.scanRecordId;
                _context8.next = 4;
                return _index2.default.mine.updateScanRecord({
                  id: id
                });
              case 4:
                data = _context8.sent;
                commit('updateUserItem', {
                  key: 'scanRecordId',
                  val: 0
                });
              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    // 获取用户信息
    getAuthUserProfile: function getAuthUserProfile(_ref8, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var commit, state, nickName, avatarUrl, data;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                commit = _ref8.commit, state = _ref8.state;
                nickName = param.nickName, avatarUrl = param.avatarUrl;
                _context9.next = 4;
                return _index2.default.user.userUpdate(param);
              case 4:
                data = Object.assign({}, state.userInfo, {
                  nickName: nickName,
                  avatarUrl: avatarUrl
                });
                commit('updateUserItem', {
                  key: 'userInfo',
                  val: data
                });
              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    // 获取手机号
    getAuthPhone: function getAuthPhone(_ref9) {
      var _arguments2 = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var commit, state, _ref10, _ref10$e, e, _ref10$must, must, _e$detail, _e$detail$encryptedDa, encryptedData, _e$detail$iv, iv, phone, _phone, data;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                commit = _ref9.commit, state = _ref9.state;
                _ref10 = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : {}, _ref10$e = _ref10.e, e = _ref10$e === void 0 ? {
                  detail: {}
                } : _ref10$e, _ref10$must = _ref10.must, must = _ref10$must === void 0 ? false : _ref10$must;
                _e$detail = e.detail, _e$detail$encryptedDa = _e$detail.encryptedData, encryptedData = _e$detail$encryptedDa === void 0 ? '' : _e$detail$encryptedDa, _e$detail$iv = _e$detail.iv, iv = _e$detail$iv === void 0 ? '' : _e$detail$iv;
                phone = '';
                if (!(encryptedData && iv)) {
                  _context10.next = 11;
                  break;
                }
                _context10.next = 7;
                return _index2.default.user.reportPhone({
                  encryptedData: encryptedData,
                  iv: iv
                });
              case 7:
                _phone = _context10.sent;
                data = Object.assign({}, state.userInfo, {
                  phone: _phone
                });
                commit('updateUserItem', {
                  key: 'userInfo',
                  val: data
                });
                return _context10.abrupt("return", _phone);
              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getPrivacySetting: function getPrivacySetting(_ref11, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var commit, state;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                commit = _ref11.commit, state = _ref11.state;
                wx.getPrivacySetting({
                  success: function success(res) {
                    // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
                    commit('updateUserItem', {
                      key: 'userPrivacySetting',
                      val: res
                    });
                  },
                  fail: function fail() {},
                  complete: function complete() {}
                });
              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    // 更新公共参数
    updateCommonOptions: function updateCommonOptions(_ref12, param) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var commit, state, target, res, data;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                commit = _ref12.commit, state = _ref12.state;
                target = {};
                if (!param.scene) {
                  _context12.next = 9;
                  break;
                }
                _context12.next = 5;
                return _index2.default.base.getWxCodeData({
                  code_id: param.scene
                });
              case 5:
                res = _context12.sent;
                target = Object.assign({}, state.commonOptions, res.data);
                _context12.next = 10;
                break;
              case 9:
                target = Object.assign({}, state.commonOptions, param);
              case 10:
                data = _index.default.pick(target, ['id', 'pid', 'admin_id', 'channel_id', 'coach_id']);
                commit('updateUserItem', {
                  key: 'commonOptions',
                  val: data
                });
                return _context12.abrupt("return", target);
              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!***************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/siteinfo.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // 预约按摩 多城市
  "uniacid": "666",
  "multiid": "0",
  "version": "3.0",
  "gzh_appid": "wx547c00288a3433eb",
  "siteroot": "https://chuanpu.akina.com.cn/index.php"
};

/***/ }),

/***/ 51:
/*!******************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/utils/error.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverError = exports.networkError = exports.msgError = void 0;
//网络错误
var networkError = function networkError() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$code = _ref.code,
    code = _ref$code === void 0 ? 0 : _ref$code,
    _ref$msg = _ref.msg,
    msg = _ref$msg === void 0 ? '网络异常' : _ref$msg;
  if (code !== 0) return;
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 4000
  });
};
//服务器错误处理
exports.networkError = networkError;
var serverError = function serverError() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$code = _ref2.code,
    code = _ref2$code === void 0 ? -1 : _ref2$code,
    _ref2$msg = _ref2.msg,
    msg = _ref2$msg === void 0 ? '服务器错误' : _ref2$msg;
  uni.showModal({
    title: '提示',
    content: msg,
    showCancel: false
  });
};
//错误信息
exports.serverError = serverError;
var msgError = function msgError() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$msg = _ref3.msg,
    msg = _ref3$msg === void 0 ? '错误' : _ref3$msg;
  if (msg.length > 20) {
    uni.showModal({
      title: '',
      content: msg,
      showCancel: false
    });
  } else {
    uni.showToast({
      title: msg,
      icon: 'none',
      duration: 4000
    });
  }
};
exports.msgError = msgError;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 52:
/*!***************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/utils/wx.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/
      __webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ? /******/function getDefault() {
          return module['default'];
        } : /******/function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 11);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
      module.exports = {
        type: function type(ob) {
          return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
        },
        isObject: function isObject(ob, real) {
          if (real) {
            return this.type(ob) === "object";
          } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
          }
        },
        isFormData: function isFormData(val) {
          return typeof FormData !== 'undefined' && val instanceof FormData;
        },
        trim: function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        encode: function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        },
        formatParams: function formatParams(data) {
          var str = "";
          var first = true;
          var that = this;
          function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);
            if (type == "array") {
              sub.forEach(function (e, i) {
                _encode(e, path + "%5B%5D");
              });
            } else if (type == "object") {
              for (var key in sub) {
                if (path) {
                  _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                } else {
                  _encode(sub[key], encode(key));
                }
              }
            } else {
              if (!first) {
                str += "&";
              }
              first = false;
              str += path + "=" + encode(sub);
            }
          }
          _encode(data, "");
          return str;
        },
        // Do not overwrite existing attributes
        merge: function merge(a, b) {
          for (var key in b) {
            if (!a.hasOwnProperty(key)) {
              a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
              this.merge(a[key], b[key]);
            }
          }
          return a;
        }
      };

      /***/
    }, /* 1 */
    /***/function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }
      "use strict";
      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /*
       * author: wendu
       * email: 824783146@qq.com
       **/

      var util = __webpack_require__(0);
      var isBrowser = typeof document !== "undefined";

      //EngineWrapper can help  generating  a  http engine quickly through a adapter
      function EngineWrapper(adapter) {
        var AjaxEngine = function () {
          function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);
            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout
            this.responseURL = "";
            this.responseHeaders = {};
          }
          _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
              this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
          }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
              this.readyState = state;
              this._call("onreadystatechange");
            }
          }, {
            key: "open",
            value: function open(method, url) {
              this.method = method;
              if (!url) {
                url = location.href;
              } else {
                url = util.trim(url);
                if (url.indexOf("http") !== 0) {
                  // Normalize the request url
                  if (isBrowser) {
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }
              }
              this.responseURL = url;
              this._changeReadyState(1);
            }
          }, {
            key: "send",
            value: function send(arg) {
              var _this = this;
              arg = arg || null;
              // if (isBrowser) {
              //   var cookie = document.cookie;
              //   if (cookie) {
              //     this.requestHeaders.cookie = cookie;
              //   }
              // }
              var self = this;
              if (adapter) {
                var request = {
                  method: self.method,
                  url: self.responseURL,
                  headers: self.requestHeaders || {},
                  body: arg
                };
                util.merge(request, self._options || {});
                if (request.method === "GET") {
                  request.body = null;
                }
                self._changeReadyState(3);
                var timer;
                self.timeout = self.timeout || 0;
                if (self.timeout > 0) {
                  timer = setTimeout(function () {
                    if (self.readyState === 3) {
                      _this._call("onloadend");
                      self._changeReadyState(0);
                      self._call("ontimeout");
                    }
                  }, self.timeout);
                }
                request.timeout = self.timeout;
                adapter(request, function (response) {
                  function getAndDelete(key) {
                    var t = response[key];
                    delete response[key];
                    return t;
                  }

                  // If the request has already timeout, return
                  if (self.readyState !== 3) return;
                  clearTimeout(timer);

                  // Make sure the type of status is integer
                  self.status = getAndDelete("statusCode") - 0;
                  var responseText = getAndDelete("responseText");
                  var statusMessage = getAndDelete("statusMessage");

                  // Network error, set the status code 0
                  if (!self.status) {
                    self.statusText = responseText;
                    self._call("onerror", {
                      msg: statusMessage
                    });
                  } else {
                    // Parsing the response headers to array in a object,  because
                    // there may be multiple values with the same header name
                    var responseHeaders = getAndDelete("headers");
                    var headers = {};
                    for (var field in responseHeaders) {
                      var value = responseHeaders[field];
                      var key = field.toLowerCase();
                      // Is array
                      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        headers[key] = value;
                      } else {
                        headers[key] = headers[key] || [];
                        headers[key].push(value);
                      }
                    }
                    var cookies = headers["set-cookie"];
                    if (isBrowser && cookies) {
                      cookies.forEach(function (e) {
                        // Remove the http-Only property of the  cookie
                        // so that JavaScript can operate it.
                        document.cookie = e.replace(/;\s*httpOnly/ig, "");
                      });
                    }
                    self.responseHeaders = headers;
                    // Set the fields of engine from response
                    self.statusText = statusMessage || "";
                    self.response = self.responseText = responseText;
                    self._response = response;
                    self._changeReadyState(4);
                    self._call("onload");
                  }
                  self._call("onloadend");
                });
              } else {
                console.error("Ajax require adapter");
              }
            }
          }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
              this.requestHeaders[util.trim(key)] = value;
            }
          }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
              return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
          }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
              var str = "";
              for (var key in this.responseHeaders) {
                str += key + ":" + this.getResponseHeader(key) + "\r\n";
              }
              return str || null;
            }
          }, {
            key: "abort",
            value: function abort(msg) {
              this._changeReadyState(0);
              this._call("onerror", {
                msg: msg
              });
              this._call("onloadend");
            }
          }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
              adapter = requestAdapter;
            }
          }]);
          return AjaxEngine;
        }();
        return AjaxEngine;
      }

      // learn more about keep-loader: https://github.com/wendux/keep-loader
      ;
      module.exports = EngineWrapper;

      /***/
    }, /* 2 */
    /***/function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }
      "use strict";
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var utils = __webpack_require__(0);
      var isBrowser = typeof document !== "undefined";
      var Fly = function () {
        function Fly(engine) {
          _classCallCheck(this, Fly);
          this.engine = engine || XMLHttpRequest;
          this.default = this; //For typeScript

          /**
           * Add  lock/unlock API for interceptor.
           *
           * Once an request/response interceptor is locked, the incoming request/response
           * will be added to a queue before they enter the interceptor, they will not be
           * continued  until the interceptor is unlocked.
           *
           * @param [interceptor] either is interceptors.request or interceptors.response
           */
          function wrap(interceptor) {
            var completer;
            utils.merge(interceptor, {
              lock: function lock() {
                if (!completer) {
                  interceptor.p = new Promise(function (resolve) {
                    completer = resolve;
                  });
                }
              },
              unlock: function unlock() {
                if (completer) {
                  completer();
                  interceptor.p = completer = null;
                }
              }
            });
          }
          var interceptors = this.interceptors = {
            response: {
              use: function use(handler, onerror) {
                this.handler = handler;
                this.onerror = onerror;
              }
            },
            request: {
              use: function use(handler) {
                this.handler = handler;
              }
            }
          };
          var irq = interceptors.request;
          var irp = interceptors.response;
          wrap(irp);
          wrap(irq);
          this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            parseJson: true,
            // Convert response data to JSON object automatically.
            withCredentials: false
          };
        }
        _createClass(Fly, [{
          key: "request",
          value: function request(url, data, options) {
            var _this = this;
            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
              if (utils.isObject(url)) {
                options = url;
                url = options.url;
              }
              options = options || {};
              options.headers = options.headers || {};
              function isPromise(p) {
                // some  polyfill implementation of Promise may be not standard,
                // so, we test by duck-typing
                return p && p.then && p.catch;
              }

              /**
               * If the request/response interceptor has been locked，
               * the new request/response will enter a queue. otherwise, it will be performed directly.
               * @param [promise] if the promise exist, means the interceptor is  locked.
               * @param [callback]
               */
              function enqueueIfLocked(promise, callback) {
                if (promise) {
                  promise.then(function () {
                    callback();
                  });
                } else {
                  callback();
                }
              }

              // make the http request
              function makeRequest(options) {
                data = options.body;
                // Normalize the request url
                url = utils.trim(options.url);
                var baseUrl = utils.trim(options.baseURL || "");
                if (!url && isBrowser && !baseUrl) url = location.href;
                if (url.indexOf("http") !== 0) {
                  var isAbsolute = url[0] === "/";
                  if (!baseUrl && isBrowser) {
                    var arr = location.pathname.split("/");
                    arr.pop();
                    baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                  }
                  if (baseUrl[baseUrl.length - 1] !== "/") {
                    baseUrl += "/";
                  }
                  url = baseUrl + (isAbsolute ? url.substr(1) : url);
                  if (isBrowser) {
                    // Normalize the url which contains the ".." or ".", such as
                    // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }
                var responseType = utils.trim(options.responseType || "");
                engine.withCredentials = !!options.withCredentials;
                var isGet = options.method === "GET";
                if (isGet) {
                  if (data) {
                    if (utils.type(data) !== "string") {
                      data = utils.formatParams(data);
                    }
                    url += (url.indexOf("?") === -1 ? "?" : "&") + data;
                  }
                }
                engine.open(options.method, url);

                // try catch for ie >=9
                try {
                  engine.timeout = options.timeout || 0;
                  if (responseType !== "stream") {
                    engine.responseType = responseType;
                  }
                } catch (e) {}
                if (!isGet) {
                  // If the request data is json object, transforming it  to json string,
                  // and set request content-type to "json". In browser,  the data will
                  // be sent as RequestBody instead of FormData
                  if (options.headers[contentType].toLowerCase() === "application/x-www-form-urlencoded") {
                    data = utils.formatParams(data);
                  } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                    options.headers[contentType] = 'application/json;charset=utf-8';
                    data = JSON.stringify(data);
                  }
                }
                for (var k in options.headers) {
                  if (k === contentType && (utils.isFormData(data) || !data || isGet)) {
                    // Delete the content-type, Let the browser set it
                    delete options.headers[k];
                  } else {
                    try {
                      // In browser environment, some header fields are readonly,
                      // write will cause the exception .
                      engine.setRequestHeader(k, options.headers[k]);
                    } catch (e) {}
                  }
                }
                function onresult(handler, data, type) {
                  enqueueIfLocked(responseInterceptor.p, function () {
                    if (handler) {
                      //如果失败，添加请求信息
                      if (type) {
                        data.request = options;
                      }
                      var ret = handler.call(responseInterceptor, data, Promise);
                      data = ret === undefined ? data : ret;
                    }
                    if (!isPromise(data)) {
                      data = Promise[type === 0 ? "resolve" : "reject"](data);
                    }
                    data.then(function (d) {
                      resolve(d);
                    }).catch(function (e) {
                      reject(e);
                    });
                  });
                }
                function onerror(e) {
                  e.engine = engine;
                  onresult(responseInterceptor.onerror, e, -1);
                }
                function Err(msg, status) {
                  this.message = msg;
                  this.status = status;
                }
                engine.onload = function () {
                  // The xhr of IE9 has not response filed
                  var response = engine.response || engine.responseText;
                  if (options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                  // Some third engine implementation may transform the response text to json object automatically,
                  // so we should test the type of response before transforming it
                  && !utils.isObject(response)) {
                    response = JSON.parse(response);
                  }
                  var headers = {};
                  var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                  items.pop();
                  items.forEach(function (e) {
                    var key = e.split(":")[0];
                    headers[key] = engine.getResponseHeader(key);
                  });
                  var status = engine.status;
                  var statusText = engine.statusText;
                  var data = {
                    data: response,
                    headers: headers,
                    status: status,
                    statusText: statusText
                  };
                  // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                  utils.merge(data, engine._response);
                  if (status >= 200 && status < 300 || status === 304) {
                    data.engine = engine;
                    data.request = options;
                    onresult(responseInterceptor.handler, data, 0);
                  } else {
                    var e = new Err(statusText, status);
                    e.response = data;
                    onerror(e);
                  }
                };
                engine.onerror = function (e) {
                  onerror(new Err(e.msg || "Network Error", 0));
                };
                engine.ontimeout = function () {
                  onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                };
                engine._options = options;
                setTimeout(function () {
                  engine.send(isGet ? null : data);
                }, 0);
              }
              enqueueIfLocked(requestInterceptor.p, function () {
                utils.merge(options, _this.config);
                var headers = options.headers;
                headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                delete headers[contentTypeLowerCase];
                options.body = data || options.body;
                url = utils.trim(url || "");
                options.method = options.method.toUpperCase();
                options.url = url;
                var ret = options;
                if (requestInterceptorHandler) {
                  ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                }
                if (!isPromise(ret)) {
                  ret = Promise.resolve(ret);
                }
                ret.then(function (d) {
                  //if options continue
                  if (d === options) {
                    makeRequest(d);
                  } else {
                    resolve(d);
                  }
                }, function (err) {
                  reject(err);
                });
              });
            });
            promise.engine = engine;
            return promise;
          }
        }, {
          key: "all",
          value: function all(promises) {
            return Promise.all(promises);
          }
        }, {
          key: "spread",
          value: function spread(callback) {
            return function (arr) {
              return callback.apply(null, arr);
            };
          }
        }, {
          key: "lock",
          value: function lock() {
            this.interceptors.request.lock();
          }
        }, {
          key: "unlock",
          value: function unlock() {
            this.interceptors.request.unlock();
          }
        }]);
        return Fly;
      }();

      //For typeScript

      Fly.default = Fly;
      ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
        Fly.prototype[e] = function (url, data, option) {
          return this.request(url, data, utils.merge({
            method: e
          }, option));
        };
      });
      // Learn more about keep-loader: https://github.com/wendux/keep-loader
      ;
      module.exports = Fly;

      /***/
    },

      /* 3 */
      /* 4 */
      /* 5 */

      /* 7 */
      /* 8 */
      /* 9 */
      /* 10 */
    ,,, /* 6 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      //微信小程序适配器
      module.exports = function (request, responseCallback) {
        var con = {
          method: request.method,
          url: request.url,
          dataType: request.dataType || undefined,
          header: request.headers,
          data: request.body || {},
          success: function success(res) {
            responseCallback({
              statusCode: res.statusCode,
              responseText: res.data,
              headers: res.header,
              statusMessage: res.errMsg
            });
          },
          fail: function fail(res) {
            responseCallback({
              statusCode: res.statusCode || 0,
              statusMessage: res.errMsg
            });
          }
        };
        uni.request(con);
      };

      /***/
    },,,,, /* 11 */
    /***/function (module, exports, __webpack_require__) {
      "use strict";

      //微信小程序入口
      var Fly = __webpack_require__(2);
      var EngineWrapper = __webpack_require__(1);
      var adapter = __webpack_require__(6);
      var wxEngine = EngineWrapper(adapter);
      module.exports = function (engine) {
        return new Fly(engine || wxEngine);
      };

      /***/
    }
    /******/])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! (webpack)/buildin/module.js */ 53)(module)))

/***/ }),

/***/ 53:
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 54:
/*!************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/agent.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _agentApply$agentInfo;
var _default = (_agentApply$agentInfo = {
  // 合作加盟
  agentApply: function agentApply(param) {
    return _req.req.post("massage/app/IndexUser/agentApply", param);
  },
  //代理商详情
  agentInfo: function agentInfo(param) {
    return _req.req.get("massage/app/Index/agentInfo", param);
  },
  // 首页
  index: function index(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/index", param);
  },
  // 绑定技-师
  adminCoachQr: function adminCoachQr(param) {
    return _req.req.get("massage/app/IndexUser/adminCoachQr", param);
  },
  // 邀请 1渠道商 2业务员
  agentInviteQr: function agentInviteQr(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/agentInviteQr", param);
  },
  // 邀请分销员
  agentInvresellerQr: function agentInvresellerQr(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/agentInvresellerQr", param);
  },
  //申请提现
  applyWallet: function applyWallet(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/applyWallet", param);
  },
  //提现记录
  walletList: function walletList(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/walletList", param);
  },
  //账号设置
  adminInfoData: function adminInfoData(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/adminInfoData", param);
  },
  // 门店下拉列表
  storeSelect: function storeSelect(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/storeSelect", param);
  },
  //技-师列表
  coachList: function coachList(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/coachList", param);
  },
  //技-师详情
  coachInfo: function coachInfo(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/coachInfo", param);
  },
  //新增技-师
  coachApply: function coachApply(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/coachApply", param);
  },
  //编辑技-师
  coachUpdateAdmin: function coachUpdateAdmin(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/coachUpdateAdmin", param);
  },
  //技-师关联用户
  coachUserList: function coachUserList(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/coachUserList", param);
  },
  //佣金列表
  commList: function commList(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/commList", param);
  },
  // 拨打客户电话
  getVirtualPhone: function getVirtualPhone(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/getVirtualPhone", param);
  },
  // 编辑通知状态
  noticeUpdate: function noticeUpdate(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/noticeUpdate", param);
  },
  // 订单列表
  orderList: function orderList(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/orderList", param);
  },
  // 订单详情
  orderInfo: function orderInfo(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/orderInfo", param);
  },
  // 异常订单详情
  abnOrderInfo: function abnOrderInfo(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/abnOrderInfo", param);
  },
  // 可退款服务详情
  canRefundOrderInfo: function canRefundOrderInfo(param) {
    return _req.req.get("mobilenode/app/IndexAgentOrder/canRefundOrderInfo", param);
  },
  // 管理员操作退款
  applyOrderRefund: function applyOrderRefund(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/applyOrderRefund", param);
  },
  // 退款
  passRefundV2: function passRefundV2(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/passRefundV2", param);
  },
  // 修改订单状态
  adminUpdateOrder: function adminUpdateOrder(param) {
    return _req.req.post("mobilenode/app/IndexAgentOrder/adminUpdateOrder", param);
  }
}, (0, _defineProperty2.default)(_agentApply$agentInfo, "adminUpdateOrder", function adminUpdateOrder(param) {
  return _req.req.post("mobilenode/app/IndexAgentOrder/adminUpdateOrder", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "refundOrderList", function refundOrderList(param) {
  return _req.req.get("mobilenode/app/IndexAgentOrder/refundOrderList", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "refundOrderInfo", function refundOrderInfo(param) {
  return _req.req.get("mobilenode/app/IndexAgentOrder/refundOrderInfo", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "passRefund", function passRefund(param) {
  return _req.req.post("mobilenode/app/IndexAgentOrder/passRefund", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "noPassRefund", function noPassRefund(param) {
  return _req.req.post("mobilenode/app/IndexAgentOrder/noPassRefund", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "adminSelect", function adminSelect(param) {
  return _req.req.get("mobilenode/app/IndexAgentOrder/adminSelect", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "orderChangeCoach", function orderChangeCoach(param) {
  return _req.req.post("mobilenode/app/IndexAgentOrder/orderChangeCoach", param);
}), (0, _defineProperty2.default)(_agentApply$agentInfo, "orderChangeCoachList", function orderChangeCoachList(param) {
  return _req.req.get("mobilenode/app/IndexAgentOrder/orderChangeCoachList", param);
}), _agentApply$agentInfo);
exports.default = _default;

/***/ }),

/***/ 55:
/*!***********************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/base.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 小程序登录
  login: function login(param) {
    return _req.req.post("index/login", param);
  },
  // 公众号登录
  webLogin: function webLogin(param) {
    return _req.req.post("index/webLogin", param);
  },
  // app微信登录
  appLogin: function appLogin(param) {
    return _req.req.post("index/appLogin", param);
  },
  // app苹果登录
  iosLogin: function iosLogin(param) {
    return _req.req.post("index/iosLogin", param);
  },
  // app登录配置
  getConfig: function getConfig(param) {
    return _req.req.get("index/getConfig", param);
  },
  // 获取配置
  getWebConfig: function getWebConfig(param) {
    return _req.req.get("index/getWebConfig", param);
  },
  // 系统配置
  configInfo: function configInfo(param) {
    return _req.req.get("massage/app/Index/configInfo", param);
  },
  // 获取地图定位
  getMapInfo: function getMapInfo(param) {
    return _req.req.get("massage/app/Index/getMapInfo", param);
  },
  // 解析二维码
  getWxCodeData: function getWxCodeData(param) {
    return _req.req.get("card/app/getWxCodeData", param);
  },
  // base64ToImg
  base64ToImg: function base64ToImg(param) {
    return _req.req.get("massage/app/IndexUser/base64ToImg", param);
  },
  // 上传文件
  uploadFile: function uploadFile(param) {
    return (0, _req.uploadFile)("admin/app/wx/uploadFile", param);
  },
  uploadFiles: function uploadFiles(querys, fn) {
    return _req.req.post('admin/admin/file/uploadFiles', querys, fn);
  },
  // 上传视频
  uploadVideo: function uploadVideo(param) {
    return (0, _req.uploadFile)("admin/app/wx/uploadVideo", param);
  },
  // 获取城市
  getCity: function getCity(param) {
    return _req.req.get("massage/app/Index/getCity", param);
  },
  // 获取插件授权
  plugAuth: function plugAuth(param) {
    return _req.req.get("massage/app/Index/plugAuth", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 56:
/*!**************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/channel.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 渠道-商下拉
  channelCateSelect: function channelCateSelect(param) {
    return _req.req.get("massage/app/IndexUser/channelCateSelect", param);
  },
  // 申请渠道-商
  applyChannel: function applyChannel(param) {
    return _req.req.post("massage/app/IndexUser/applyChannel", param);
  },
  // 渠道-商信息
  channelInfo: function channelInfo(param) {
    return _req.req.get("massage/app/IndexUser/channelInfo", param);
  },
  // 渠道-商首页
  index: function index(param) {
    return _req.req.get("massage/app/IndexChannel/index", param);
  },
  // 渠道-商二维码
  channelQr: function channelQr(param) {
    return _req.req.get("massage/app/IndexChannel/channelQr", param);
  },
  // 渠道-商二维码下拉列表
  channelQrSelect: function channelQrSelect(param) {
    return _req.req.get("massage/app/IndexChannel/channelQrSelect", param);
  },
  // 渠道-商二维码
  channelQrList: function channelQrList(param) {
    return _req.req.get("massage/app/IndexChannel/channelQrList", param);
  },
  // 二维码详情
  channelQrInfo: function channelQrInfo(param) {
    return _req.req.get("massage/app/IndexChannel/channelQrInfo", param);
  },
  // 订单列表
  orderList: function orderList(param) {
    return _req.req.get("massage/app/IndexChannel/orderList", param);
  },
  //申请提现
  applyWallet: function applyWallet(param) {
    return _req.req.post("massage/app/IndexChannel/applyWallet", param);
  },
  //提现记录
  walletList: function walletList(param) {
    return _req.req.get("massage/app/IndexChannel/walletList", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 57:
/*!******************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/coachbroker.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  //申请经纪人
  applyBroker: function applyBroker(param) {
    return _req.req.post("massage/app/IndexUser/applyBroker", param);
  },
  //经纪人详情
  brokerInfo: function brokerInfo(param) {
    return _req.req.get("massage/app/IndexUser/brokerInfo", param);
  },
  //我的收益
  brokerCashList: function brokerCashList(param) {
    return _req.req.get("coachbroker/app/IndexBroker/brokerCashList", param);
  },
  //申请提现
  applyWallet: function applyWallet(param) {
    return _req.req.post("coachbroker/app/IndexBroker/applyWallet", param);
  },
  //提现记录
  walletList: function walletList(param) {
    return _req.req.get("coachbroker/app/IndexBroker/walletList", param);
  },
  //经纪人首页
  brokerIndex: function brokerIndex(param) {
    return _req.req.get("coachbroker/app/IndexBroker/brokerIndex", param);
  },
  //邀请的技-师
  brokerCoachList: function brokerCoachList(param) {
    return _req.req.get("coachbroker/app/IndexBroker/brokerCoachList", param);
  },
  //邀请技-师
  resellerInvCoachQr: function resellerInvCoachQr(param) {
    return _req.req.get("coachbroker/app/IndexBroker/resellerInvCoachQr", param);
  },
  //选择代理商
  adminList: function adminList(param) {
    return _req.req.get("coachbroker/app/IndexBroker/adminList", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 58:
/*!**************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/dynamic.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 动态列表
  dynamicList: function dynamicList(param) {
    return _req.req.get("dynamic/app/IndexDynamicList/dynamicList", param);
  },
  // 获取关注技-师的最新动态数量
  getFollowData: function getFollowData(param) {
    return _req.req.get("dynamic/app/IndexDynamicList/getFollowData", param);
  },
  // 关注技-师动态列表
  followDynamicList: function followDynamicList(param) {
    return _req.req.get("dynamic/app/IndexDynamicList/followDynamicList", param);
  },
  // 动态详情
  dynamicInfo: function dynamicInfo(param) {
    return _req.req.get("dynamic/app/IndexDynamicList/dynamicInfo", param);
  },
  // 点赞或者取消点赞
  thumbsAddOrCancek: function thumbsAddOrCancek(param) {
    return _req.req.post("dynamic/app/IndexDynamicList/thumbsAddOrCancek", param);
  },
  // 我的关注
  followCoachList: function followCoachList(param) {
    return _req.req.get("dynamic/app/IndexDynamicList/followCoachList", param);
  },
  // 关注或者取消关注
  followAddOrCancek: function followAddOrCancek(param) {
    return _req.req.post("dynamic/app/IndexDynamicList/followAddOrCancek", param);
  },
  // 评论列表
  commentList: function commentList(param) {
    return _req.req.get("dynamic/app/IndexDynamicList/commentList", param);
  },
  // 新增评论
  commentAdd: function commentAdd(param) {
    return _req.req.post("dynamic/app/IndexDynamicList/commentAdd", param);
  },
  // 删除评论
  commentDel: function commentDel(param) {
    return _req.req.post("dynamic/app/IndexDynamicList/commentDel", param);
  },
  // --------- 技-师端
  // 动态列表
  coachDynamicList: function coachDynamicList(param) {
    return _req.req.get("dynamic/app/IndexDynamicCoach/dynamicList", param);
  },
  // 动态详情
  coachDynamicInfo: function coachDynamicInfo(param) {
    return _req.req.get("dynamic/app/IndexDynamicCoach/dynamicInfo", param);
  },
  // 关注点赞消息详情
  dynamicData: function dynamicData(param) {
    return _req.req.get("dynamic/app/IndexDynamicCoach/dynamicData", param);
  },
  // 发布动态
  dynamicAdd: function dynamicAdd(param) {
    return _req.req.post("dynamic/app/IndexDynamicCoach/dynamicAdd", param);
  },
  // 编辑动态
  dynamicUpdate: function dynamicUpdate(param) {
    return _req.req.post("dynamic/app/IndexDynamicCoach/dynamicUpdate", param);
  },
  // 删除动态
  dynamicDel: function dynamicDel(param) {
    return _req.req.post("dynamic/app/IndexDynamicCoach/dynamicDel", param);
  },
  // 收获的赞
  thumbsList: function thumbsList(param) {
    return _req.req.get("dynamic/app/IndexDynamicCoach/thumbsList", param);
  },
  // 新增关注
  followList: function followList(param) {
    return _req.req.get("dynamic/app/IndexDynamicCoach/followList", param);
  },
  // 收获的评论
  coachCommentList: function coachCommentList(param) {
    return _req.req.get("dynamic/app/IndexDynamicCoach/commentList", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 586:
/*!*********************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/utils/adapay.json ***!
  \*********************************************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"value\":\"0011\",\"title\":\"北京市\",\"cities\":[{\"value\":\"1100\",\"title\":\"北京市\"}]},{\"value\":\"0012\",\"title\":\"天津市\",\"cities\":[{\"value\":\"1200\",\"title\":\"天津市\"}]},{\"value\":\"0013\",\"title\":\"河北省\",\"cities\":[{\"value\":\"1301\",\"title\":\"石家庄\"},{\"value\":\"1302\",\"title\":\"保定\"},{\"value\":\"1303\",\"title\":\"沧州\"},{\"value\":\"1304\",\"title\":\"承德\"},{\"value\":\"1305\",\"title\":\"邯郸\"},{\"value\":\"1306\",\"title\":\"衡水\"},{\"value\":\"1307\",\"title\":\"廊坊\"},{\"value\":\"1308\",\"title\":\"秦皇岛\"},{\"value\":\"1309\",\"title\":\"唐山\"},{\"value\":\"1310\",\"title\":\"邢台\"},{\"value\":\"1311\",\"title\":\"张家口\"}]},{\"value\":\"0014\",\"title\":\"山西省\",\"cities\":[{\"value\":\"1401\",\"title\":\"太原\"},{\"value\":\"1402\",\"title\":\"长治\"},{\"value\":\"1403\",\"title\":\"大同\"},{\"value\":\"1404\",\"title\":\"晋城\"},{\"value\":\"1405\",\"title\":\"离石\"},{\"value\":\"1406\",\"title\":\"临汾\"},{\"value\":\"1407\",\"title\":\"朔州\"},{\"value\":\"1408\",\"title\":\"忻州\"},{\"value\":\"1409\",\"title\":\"阳泉\"},{\"value\":\"1410\",\"title\":\"榆次\"},{\"value\":\"1411\",\"title\":\"运城\"},{\"value\":\"1412\",\"title\":\"晋中\"},{\"value\":\"1413\",\"title\":\"吕梁\"}]},{\"value\":\"0015\",\"title\":\"内蒙古自治区\",\"cities\":[{\"value\":\"1501\",\"title\":\"呼和浩特\"},{\"value\":\"1502\",\"title\":\"包头\"},{\"value\":\"1503\",\"title\":\"阿拉善\"},{\"value\":\"1504\",\"title\":\"巴彦淖尔\"},{\"value\":\"1505\",\"title\":\"赤峰\"},{\"value\":\"1506\",\"title\":\"呼伦贝尔\"},{\"value\":\"1507\",\"title\":\"乌海\"},{\"value\":\"1508\",\"title\":\"乌兰察布\"},{\"value\":\"1509\",\"title\":\"锡林郭勒\"},{\"value\":\"1510\",\"title\":\"兴安\"},{\"value\":\"1511\",\"title\":\"鄂尔多斯\"},{\"value\":\"1512\",\"title\":\"通辽\"},{\"value\":\"1513\",\"title\":\"满洲里\"}]},{\"value\":\"0021\",\"title\":\"辽宁省\",\"cities\":[{\"value\":\"2101\",\"title\":\"沈阳\"},{\"value\":\"2102\",\"title\":\"大连\"},{\"value\":\"2103\",\"title\":\"鞍山\"},{\"value\":\"2104\",\"title\":\"本溪\"},{\"value\":\"2105\",\"title\":\"朝阳\"},{\"value\":\"2106\",\"title\":\"丹东\"},{\"value\":\"2107\",\"title\":\"抚顺\"},{\"value\":\"2108\",\"title\":\"阜新\"},{\"value\":\"2109\",\"title\":\"葫芦岛\"},{\"value\":\"2110\",\"title\":\"锦州\"},{\"value\":\"2111\",\"title\":\"辽阳\"},{\"value\":\"2112\",\"title\":\"盘锦\"},{\"value\":\"2113\",\"title\":\"铁岭\"},{\"value\":\"2114\",\"title\":\"营口\"}]},{\"value\":\"0022\",\"title\":\"吉林省\",\"cities\":[{\"value\":\"2201\",\"title\":\"长春\"},{\"value\":\"2202\",\"title\":\"白城\"},{\"value\":\"2203\",\"title\":\"白山\"},{\"value\":\"2204\",\"title\":\"吉林\"},{\"value\":\"2205\",\"title\":\"辽源\"},{\"value\":\"2206\",\"title\":\"四平\"},{\"value\":\"2207\",\"title\":\"松原\"},{\"value\":\"2208\",\"title\":\"通化\"},{\"value\":\"2209\",\"title\":\"延边\"}]},{\"value\":\"0023\",\"title\":\"黑龙江省\",\"cities\":[{\"value\":\"2301\",\"title\":\"哈尔滨\"},{\"value\":\"2302\",\"title\":\"大庆\"},{\"value\":\"2303\",\"title\":\"大兴安岭\"},{\"value\":\"2304\",\"title\":\"鹤岗\"},{\"value\":\"2305\",\"title\":\"黑河\"},{\"value\":\"2306\",\"title\":\"鸡西\"},{\"value\":\"2307\",\"title\":\"佳木斯\"},{\"value\":\"2308\",\"title\":\"牡丹江\"},{\"value\":\"2309\",\"title\":\"七台河\"},{\"value\":\"2310\",\"title\":\"齐齐哈尔\"},{\"value\":\"2311\",\"title\":\"双鸭山\"},{\"value\":\"2312\",\"title\":\"绥化\"},{\"value\":\"2313\",\"title\":\"伊春\"}]},{\"value\":\"0031\",\"title\":\"上海市\",\"cities\":[{\"value\":\"3100\",\"title\":\"上海市\"}]},{\"value\":\"0032\",\"title\":\"江苏省\",\"cities\":[{\"value\":\"3201\",\"title\":\"南京\"},{\"value\":\"3202\",\"title\":\"常州\"},{\"value\":\"3203\",\"title\":\"淮安\"},{\"value\":\"3204\",\"title\":\"连云港\"},{\"value\":\"3205\",\"title\":\"南通\"},{\"value\":\"3206\",\"title\":\"苏州\"},{\"value\":\"3207\",\"title\":\"宿迁\"},{\"value\":\"3208\",\"title\":\"泰州\"},{\"value\":\"3209\",\"title\":\"无锡\"},{\"value\":\"3210\",\"title\":\"徐州\"},{\"value\":\"3211\",\"title\":\"盐城\"},{\"value\":\"3212\",\"title\":\"扬州\"},{\"value\":\"3213\",\"title\":\"镇江\"},{\"value\":\"3214\",\"title\":\"胥浦\"},{\"value\":\"3215\",\"title\":\"昆山\"}]},{\"value\":\"0033\",\"title\":\"浙江省\",\"cities\":[{\"value\":\"3301\",\"title\":\"杭州\"},{\"value\":\"3302\",\"title\":\"宁波\"},{\"value\":\"3303\",\"title\":\"湖州\"},{\"value\":\"3304\",\"title\":\"嘉兴\"},{\"value\":\"3305\",\"title\":\"金华\"},{\"value\":\"3306\",\"title\":\"绍兴\"},{\"value\":\"3307\",\"title\":\"台州\"},{\"value\":\"3308\",\"title\":\"温州\"},{\"value\":\"3309\",\"title\":\"舟山\"},{\"value\":\"3310\",\"title\":\"衢州\"},{\"value\":\"3311\",\"title\":\"丽水\"}]},{\"value\":\"0034\",\"title\":\"安徽省\",\"cities\":[{\"value\":\"3401\",\"title\":\"合肥\"},{\"value\":\"3402\",\"title\":\"安庆\"},{\"value\":\"3403\",\"title\":\"蚌埠\"},{\"value\":\"3404\",\"title\":\"巢湖\"},{\"value\":\"3405\",\"title\":\"池州\"},{\"value\":\"3406\",\"title\":\"滁州\"},{\"value\":\"3407\",\"title\":\"阜阳\"},{\"value\":\"3408\",\"title\":\"淮北\"},{\"value\":\"3409\",\"title\":\"淮南\"},{\"value\":\"3410\",\"title\":\"黄山\"},{\"value\":\"3411\",\"title\":\"六安\"},{\"value\":\"3412\",\"title\":\"马鞍山\"},{\"value\":\"3414\",\"title\":\"铜陵\"},{\"value\":\"3415\",\"title\":\"芜湖\"},{\"value\":\"3416\",\"title\":\"宣城\"},{\"value\":\"3417\",\"title\":\"亳州\"},{\"value\":\"3418\",\"title\":\"宿州\"}]},{\"value\":\"0035\",\"title\":\"福建省\",\"cities\":[{\"value\":\"3501\",\"title\":\"福州\"},{\"value\":\"3502\",\"title\":\"厦门\"},{\"value\":\"3503\",\"title\":\"龙岩\"},{\"value\":\"3504\",\"title\":\"南平\"},{\"value\":\"3505\",\"title\":\"宁德\"},{\"value\":\"3506\",\"title\":\"莆田\"},{\"value\":\"3507\",\"title\":\"泉州\"},{\"value\":\"3508\",\"title\":\"三明\"},{\"value\":\"3509\",\"title\":\"漳州\"}]},{\"value\":\"0036\",\"title\":\"江西省\",\"cities\":[{\"value\":\"3601\",\"title\":\"南昌\"},{\"value\":\"3602\",\"title\":\"抚州\"},{\"value\":\"3603\",\"title\":\"赣州\"},{\"value\":\"3604\",\"title\":\"吉安\"},{\"value\":\"3605\",\"title\":\"景德镇\"},{\"value\":\"3606\",\"title\":\"九江\"},{\"value\":\"3607\",\"title\":\"萍乡\"},{\"value\":\"3608\",\"title\":\"上饶\"},{\"value\":\"3609\",\"title\":\"新余\"},{\"value\":\"3610\",\"title\":\"宜春\"},{\"value\":\"3611\",\"title\":\"鹰潭\"}]},{\"value\":\"0037\",\"title\":\"山东省\",\"cities\":[{\"value\":\"3701\",\"title\":\"济南\"},{\"value\":\"3702\",\"title\":\"青岛\"},{\"value\":\"3703\",\"title\":\"滨州\"},{\"value\":\"3704\",\"title\":\"德州\"},{\"value\":\"3705\",\"title\":\"东营\"},{\"value\":\"3706\",\"title\":\"菏泽\"},{\"value\":\"3707\",\"title\":\"济宁\"},{\"value\":\"3708\",\"title\":\"莱芜\"},{\"value\":\"3709\",\"title\":\"聊城\"},{\"value\":\"3710\",\"title\":\"临沂\"},{\"value\":\"3711\",\"title\":\"日照\"},{\"value\":\"3712\",\"title\":\"泰安\"},{\"value\":\"3713\",\"title\":\"威海\"},{\"value\":\"3714\",\"title\":\"潍坊\"},{\"value\":\"3715\",\"title\":\"烟台\"},{\"value\":\"3716\",\"title\":\"枣庄\"},{\"value\":\"3717\",\"title\":\"淄博\"}]},{\"value\":\"0041\",\"title\":\"河南省\",\"cities\":[{\"value\":\"4101\",\"title\":\"郑州\"},{\"value\":\"4102\",\"title\":\"安阳\"},{\"value\":\"4103\",\"title\":\"焦作\"},{\"value\":\"4104\",\"title\":\"鹤壁\"},{\"value\":\"4105\",\"title\":\"开封\"},{\"value\":\"4106\",\"title\":\"洛阳\"},{\"value\":\"4107\",\"title\":\"南阳\"},{\"value\":\"4108\",\"title\":\"平顶山\"},{\"value\":\"4109\",\"title\":\"三门峡\"},{\"value\":\"4110\",\"title\":\"商丘\"},{\"value\":\"4111\",\"title\":\"新乡\"},{\"value\":\"4112\",\"title\":\"信阳\"},{\"value\":\"4113\",\"title\":\"许昌\"},{\"value\":\"4114\",\"title\":\"周口\"},{\"value\":\"4115\",\"title\":\"驻马店\"},{\"value\":\"4116\",\"title\":\"漯河\"},{\"value\":\"4117\",\"title\":\"濮阳\"},{\"value\":\"4118\",\"title\":\"济源\"}]},{\"value\":\"0042\",\"title\":\"湖北省\",\"cities\":[{\"value\":\"4201\",\"title\":\"武汉\"},{\"value\":\"4202\",\"title\":\"鄂州\"},{\"value\":\"4203\",\"title\":\"恩施\"},{\"value\":\"4204\",\"title\":\"黄冈\"},{\"value\":\"4205\",\"title\":\"黄石\"},{\"value\":\"4206\",\"title\":\"荆门\"},{\"value\":\"4207\",\"title\":\"荆州\"},{\"value\":\"4208\",\"title\":\"十堰\"},{\"value\":\"4209\",\"title\":\"随州\"},{\"value\":\"4210\",\"title\":\"咸宁\"},{\"value\":\"4211\",\"title\":\"襄樊\"},{\"value\":\"4212\",\"title\":\"孝感\"},{\"value\":\"4213\",\"title\":\"神农架\"},{\"value\":\"4214\",\"title\":\"天门\"},{\"value\":\"4215\",\"title\":\"宜昌\"},{\"value\":\"4216\",\"title\":\"三峡\"},{\"value\":\"4217\",\"title\":\"潜江\"},{\"value\":\"4218\",\"title\":\"仙桃\"}]},{\"value\":\"0043\",\"title\":\"湖南省\",\"cities\":[{\"value\":\"4301\",\"title\":\"长沙\"},{\"value\":\"4302\",\"title\":\"常德\"},{\"value\":\"4303\",\"title\":\"郴州\"},{\"value\":\"4304\",\"title\":\"衡阳\"},{\"value\":\"4305\",\"title\":\"怀化\"},{\"value\":\"4306\",\"title\":\"娄底\"},{\"value\":\"4307\",\"title\":\"邵阳\"},{\"value\":\"4308\",\"title\":\"湘潭\"},{\"value\":\"4309\",\"title\":\"湘西\"},{\"value\":\"4310\",\"title\":\"益阳\"},{\"value\":\"4311\",\"title\":\"永州\"},{\"value\":\"4312\",\"title\":\"岳阳\"},{\"value\":\"4313\",\"title\":\"张家界\"},{\"value\":\"4314\",\"title\":\"株洲\"},{\"value\":\"4331\",\"title\":\"吉首\"}]},{\"value\":\"0044\",\"title\":\"广东省\",\"cities\":[{\"value\":\"4401\",\"title\":\"广州\"},{\"value\":\"4402\",\"title\":\"深圳\"},{\"value\":\"4403\",\"title\":\"潮州\"},{\"value\":\"4404\",\"title\":\"东莞\"},{\"value\":\"4405\",\"title\":\"佛山\"},{\"value\":\"4406\",\"title\":\"惠州\"},{\"value\":\"4407\",\"title\":\"江门\"},{\"value\":\"4408\",\"title\":\"揭阳\"},{\"value\":\"4409\",\"title\":\"茂名\"},{\"value\":\"4410\",\"title\":\"梅州\"},{\"value\":\"4411\",\"title\":\"清远\"},{\"value\":\"4412\",\"title\":\"汕头\"},{\"value\":\"4413\",\"title\":\"汕尾\"},{\"value\":\"4414\",\"title\":\"韶关\"},{\"value\":\"4415\",\"title\":\"阳江\"},{\"value\":\"4416\",\"title\":\"云浮\"},{\"value\":\"4417\",\"title\":\"湛江\"},{\"value\":\"4418\",\"title\":\"肇庆\"},{\"value\":\"4419\",\"title\":\"中山\"},{\"value\":\"4420\",\"title\":\"河源\"},{\"value\":\"4421\",\"title\":\"珠海\"}]},{\"value\":\"0045\",\"title\":\"广西壮族自治区\",\"cities\":[{\"value\":\"4501\",\"title\":\"南宁\"},{\"value\":\"4502\",\"title\":\"百色\"},{\"value\":\"4503\",\"title\":\"北海\"},{\"value\":\"4504\",\"title\":\"桂林\"},{\"value\":\"4505\",\"title\":\"河池\"},{\"value\":\"4506\",\"title\":\"柳州\"},{\"value\":\"4507\",\"title\":\"梧州\"},{\"value\":\"4508\",\"title\":\"玉林\"},{\"value\":\"4509\",\"title\":\"崇左\"},{\"value\":\"4510\",\"title\":\"防城港\"},{\"value\":\"4511\",\"title\":\"贵港\"},{\"value\":\"4512\",\"title\":\"贺州\"},{\"value\":\"4513\",\"title\":\"来宾\"},{\"value\":\"4514\",\"title\":\"钦州\"}]},{\"value\":\"0046\",\"title\":\"海南省\",\"cities\":[{\"value\":\"4601\",\"title\":\"海口\"},{\"value\":\"4602\",\"title\":\"三亚\"},{\"value\":\"4603\",\"title\":\"白沙\"},{\"value\":\"4604\",\"title\":\"保亭\"},{\"value\":\"4605\",\"title\":\"昌江\"},{\"value\":\"4606\",\"title\":\"澄迈\"},{\"value\":\"4607\",\"title\":\"儋州\"},{\"value\":\"4608\",\"title\":\"定安\"},{\"value\":\"4609\",\"title\":\"东方\"},{\"value\":\"4610\",\"title\":\"乐东\"},{\"value\":\"4611\",\"title\":\"临高\"},{\"value\":\"4612\",\"title\":\"陵水\"},{\"value\":\"4613\",\"title\":\"琼海\"},{\"value\":\"4614\",\"title\":\"琼中\"},{\"value\":\"4615\",\"title\":\"屯昌\"},{\"value\":\"4616\",\"title\":\"万宁\"},{\"value\":\"4617\",\"title\":\"文昌\"},{\"value\":\"4618\",\"title\":\"五指山\"},{\"value\":\"4619\",\"title\":\"洋浦\"}]},{\"value\":\"0050\",\"title\":\"重庆市\",\"cities\":[{\"value\":\"5000\",\"title\":\"重庆市\"}]},{\"value\":\"0051\",\"title\":\"四川省\",\"cities\":[{\"value\":\"5101\",\"title\":\"成都\"},{\"value\":\"5102\",\"title\":\"巴中\"},{\"value\":\"5103\",\"title\":\"达州\"},{\"value\":\"5104\",\"title\":\"德阳\"},{\"value\":\"5105\",\"title\":\"广安\"},{\"value\":\"5106\",\"title\":\"广元\"},{\"value\":\"5107\",\"title\":\"乐山\"},{\"value\":\"5108\",\"title\":\"凉山\"},{\"value\":\"5109\",\"title\":\"眉山\"},{\"value\":\"5110\",\"title\":\"绵阳\"},{\"value\":\"5111\",\"title\":\"南充\"},{\"value\":\"5112\",\"title\":\"内江\"},{\"value\":\"5113\",\"title\":\"攀枝花\"},{\"value\":\"5114\",\"title\":\"遂宁\"},{\"value\":\"5115\",\"title\":\"雅安\"},{\"value\":\"5116\",\"title\":\"宜宾\"},{\"value\":\"5117\",\"title\":\"自贡\"},{\"value\":\"5118\",\"title\":\"泸州\"},{\"value\":\"5119\",\"title\":\"阿坝\"},{\"value\":\"5120\",\"title\":\"甘孜\"},{\"value\":\"5121\",\"title\":\"资阳\"}]},{\"value\":\"0052\",\"title\":\"贵州省\",\"cities\":[{\"value\":\"5201\",\"title\":\"贵阳\"},{\"value\":\"5202\",\"title\":\"安顺\"},{\"value\":\"5203\",\"title\":\"毕节\"},{\"value\":\"5204\",\"title\":\"六盘水\"},{\"value\":\"5205\",\"title\":\"铜仁\"},{\"value\":\"5206\",\"title\":\"遵义\"},{\"value\":\"5207\",\"title\":\"黔东南\"},{\"value\":\"5208\",\"title\":\"黔南\"},{\"value\":\"5209\",\"title\":\"黔西南\"}]},{\"value\":\"0053\",\"title\":\"云南省\",\"cities\":[{\"value\":\"5301\",\"title\":\"昆明\"},{\"value\":\"5302\",\"title\":\"西双版纳\"},{\"value\":\"5303\",\"title\":\"保山\"},{\"value\":\"5304\",\"title\":\"楚雄\"},{\"value\":\"5305\",\"title\":\"大理\"},{\"value\":\"5306\",\"title\":\"德宏\"},{\"value\":\"5307\",\"title\":\"红河\"},{\"value\":\"5308\",\"title\":\"丽江\"},{\"value\":\"5309\",\"title\":\"临沧\"},{\"value\":\"5310\",\"title\":\"怒江\"},{\"value\":\"5311\",\"title\":\"曲靖\"},{\"value\":\"5312\",\"title\":\"思茅\"},{\"value\":\"5313\",\"title\":\"文山\"},{\"value\":\"5314\",\"title\":\"玉溪\"},{\"value\":\"5315\",\"title\":\"昭通\"},{\"value\":\"5316\",\"title\":\"中甸\"},{\"value\":\"5317\",\"title\":\"迪庆州\"}]},{\"value\":\"0054\",\"title\":\"西藏自治区\",\"cities\":[{\"value\":\"5401\",\"title\":\"拉萨\"},{\"value\":\"5402\",\"title\":\"阿里\"},{\"value\":\"5403\",\"title\":\"昌都\"},{\"value\":\"5404\",\"title\":\"林芝\"},{\"value\":\"5405\",\"title\":\"那曲\"},{\"value\":\"5406\",\"title\":\"日喀则\"},{\"value\":\"5407\",\"title\":\"山南\"},{\"value\":\"5424\",\"title\":\"樟木口岸\"}]},{\"value\":\"0061\",\"title\":\"陕西省\",\"cities\":[{\"value\":\"6101\",\"title\":\"西安\"},{\"value\":\"6102\",\"title\":\"安康\"},{\"value\":\"6103\",\"title\":\"宝鸡\"},{\"value\":\"6104\",\"title\":\"汉中\"},{\"value\":\"6105\",\"title\":\"商洛\"},{\"value\":\"6106\",\"title\":\"铜川\"},{\"value\":\"6107\",\"title\":\"渭南\"},{\"value\":\"6108\",\"title\":\"咸阳\"},{\"value\":\"6109\",\"title\":\"延安\"},{\"value\":\"6110\",\"title\":\"榆林\"}]},{\"value\":\"0062\",\"title\":\"甘肃省\",\"cities\":[{\"value\":\"6201\",\"title\":\"兰州\"},{\"value\":\"6202\",\"title\":\"白银\"},{\"value\":\"6203\",\"title\":\"定西\"},{\"value\":\"6204\",\"title\":\"东风\"},{\"value\":\"6205\",\"title\":\"合作\"},{\"value\":\"6206\",\"title\":\"嘉峪关\"},{\"value\":\"6207\",\"title\":\"金昌\"},{\"value\":\"6208\",\"title\":\"酒泉\"},{\"value\":\"6209\",\"title\":\"矿区\"},{\"value\":\"6210\",\"title\":\"临夏\"},{\"value\":\"6211\",\"title\":\"陇南\"},{\"value\":\"6212\",\"title\":\"平凉\"},{\"value\":\"6213\",\"title\":\"庆阳\"},{\"value\":\"6214\",\"title\":\"天水\"},{\"value\":\"6215\",\"title\":\"武威\"},{\"value\":\"6216\",\"title\":\"张掖\"},{\"value\":\"6217\",\"title\":\"甘南州\"}]},{\"value\":\"0063\",\"title\":\"青海省\",\"cities\":[{\"value\":\"6301\",\"title\":\"西宁\"},{\"value\":\"6302\",\"title\":\"海东\"},{\"value\":\"6322\",\"title\":\"海北\"},{\"value\":\"6323\",\"title\":\"黄南\"},{\"value\":\"6325\",\"title\":\"海南\"},{\"value\":\"6326\",\"title\":\"果洛\"},{\"value\":\"6327\",\"title\":\"玉树\"},{\"value\":\"6328\",\"title\":\"海西\"}]},{\"value\":\"0064\",\"title\":\"宁夏回族自治区\",\"cities\":[{\"value\":\"6401\",\"title\":\"银川\"},{\"value\":\"6402\",\"title\":\"中卫\"},{\"value\":\"6403\",\"title\":\"固原\"},{\"value\":\"6404\",\"title\":\"石嘴山\"},{\"value\":\"6405\",\"title\":\"吴忠\"}]},{\"value\":\"0065\",\"title\":\"新疆维吾尔自治区\",\"cities\":[{\"value\":\"6501\",\"title\":\"乌鲁木齐\"},{\"value\":\"6502\",\"title\":\"阿克苏\"},{\"value\":\"6503\",\"title\":\"阿勒泰\"},{\"value\":\"6504\",\"title\":\"巴州\"},{\"value\":\"6505\",\"title\":\"博州\"},{\"value\":\"6506\",\"title\":\"昌吉\"},{\"value\":\"6507\",\"title\":\"哈密\"},{\"value\":\"6508\",\"title\":\"和田\"},{\"value\":\"6509\",\"title\":\"喀什\"},{\"value\":\"6510\",\"title\":\"克拉玛依\"},{\"value\":\"6511\",\"title\":\"马兰\"},{\"value\":\"6512\",\"title\":\"石河子\"},{\"value\":\"6513\",\"title\":\"塔城\"},{\"value\":\"6514\",\"title\":\"吐鲁番\"},{\"value\":\"6515\",\"title\":\"伊犁\"},{\"value\":\"6516\",\"title\":\"克州\"},{\"value\":\"6517\",\"title\":\"阿拉尔\"},{\"value\":\"6518\",\"title\":\"五家渠\"}]},{\"value\":\"2003\",\"title\":\"台湾省\",\"cities\":[{\"value\":\"9903\",\"title\":\"台湾省\"}]},{\"value\":\"2001\",\"title\":\"香港特别行政区\",\"cities\":[{\"value\":\"9901\",\"title\":\"香港特别行政区\"}]},{\"value\":\"2002\",\"title\":\"澳门特别行政区\",\"cities\":[{\"value\":\"9902\",\"title\":\"澳门特别行政区\"}]}]");

/***/ }),

/***/ 59:
/*!*************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/member.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 会员首页
  index: function index(param) {
    return _req.req.get("member/app/IndexMember/index", param);
  },
  // 会员设置
  configInfo: function configInfo(param) {
    return _req.req.get("member/app/IndexMember/configInfo", param);
  },
  // 权益详情
  rightsInfo: function rightsInfo(param) {
    return _req.req.get("member/app/IndexMember/rightsInfo", param);
  },
  // 成长值明细
  growthList: function growthList(param) {
    return _req.req.get("member/app/IndexMember/growthList", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!***********************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/mine.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 个人中心页面
  index: function index(param) {
    return _req.req.get("massage/app/IndexUser/index", param);
  },
  // 添加扫码记录 type 1渠道码 2分销码 3经纪人邀请技-师码 4代理商邀请技-师 5代理商邀请业务员 6代理商邀请渠道商 7技-师邀请充值 8业务员邀请渠道商 9分销员邀请分销员 10代理商邀请分销员
  addScanRecord: function addScanRecord(param) {
    return _req.req.post("massage/app/IndexUser/addScanRecord", param);
  },
  // 更新扫码记录
  updateScanRecord: function updateScanRecord(param) {
    return _req.req.post("massage/app/IndexUser/updateScanRecord", param);
  },
  // 获取客服
  getWecomStaff: function getWecomStaff(param) {
    return _req.req.get("massage/app/IndexUser/getWecomStaff", param);
  },
  // 获取技-师状态
  getUserCoachStatus: function getUserCoachStatus(param) {
    return _req.req.get("massage/app/IndexUser/getUserCoachStatus", param);
  },
  // 认证技-师
  attestationCoach: function attestationCoach(param) {
    return _req.req.post("massage/app/IndexUser/attestationCoach", param);
  },
  // 我的收益
  capCashInfo: function capCashInfo(param) {
    return _req.req.get("massage/app/IndexUser/userCashInfo", param);
  },
  // 申请提现
  applyWallet: function applyWallet(param) {
    return _req.req.post("massage/app/IndexUser/applyWallet", param);
  },
  // 提现记录
  walletList: function walletList(param) {
    return _req.req.get("massage/app/IndexUser/walletList", param);
  },
  // 获取分销员等级
  getPayResellerData: function getPayResellerData(param) {
    return _req.req.get("massage/app/IndexUser/getPayResellerData", param);
  },
  // 申请分销员
  applyReseller: function applyReseller(param) {
    return _req.req.post("massage/app/IndexUser/applyReseller", param);
  },
  // 分销员重新支付
  reApplyResellerOrder: function reApplyResellerOrder(param) {
    return _req.req.post("massage/app/IndexUser/reApplyResellerOrder", param);
  },
  // 分销员详情
  resellerInfo: function resellerInfo(param) {
    return _req.req.get("massage/app/IndexUser/resellerInfo", param);
  },
  // 分销员首页
  partnerIndex: function partnerIndex(param) {
    return _req.req.get("massage/app/IndexReseller/partnerIndex", param);
  },
  // 升级分销员
  resellerLevelUp: function resellerLevelUp(param) {
    return _req.req.post("massage/app/IndexReseller/resellerLevelUp", param);
  },
  // 推荐费收益
  invCashList: function invCashList(param) {
    return _req.req.get("massage/app/IndexReseller/invCashList", param);
  },
  // 邀请的技-师
  partnerCoachList: function partnerCoachList(param) {
    return _req.req.get("massage/app/IndexReseller/partnerCoachList", param);
  },
  // 我的团队
  myTeam: function myTeam(param) {
    return _req.req.get("massage/app/IndexUser/myTeam", param);
  },
  // 邀请用户
  userCommQr: function userCommQr(param) {
    return _req.req.get("massage/app/IndexUser/userCommQr", param);
  },
  // 邀请技-师
  resellerInvCoachQr: function resellerInvCoachQr(param) {
    return _req.req.get("massage/app/IndexReseller/resellerInvCoachQr", param);
  },
  // 选择代理商
  adminList: function adminList(param) {
    return _req.req.get("massage/app/IndexReseller/adminList", param);
  },
  // 获取默认地址
  getDefultAddress: function getDefultAddress(param) {
    return _req.req.get("massage/app/IndexUser/getDefultAddress", param);
  },
  // 地址列表
  addressList: function addressList(param) {
    return _req.req.get("massage/app/IndexUser/addressList", param);
  },
  // 地址详情
  addressInfo: function addressInfo(param) {
    return _req.req.get("massage/app/IndexUser/addressInfo", param);
  },
  // 新增地址
  addressAdd: function addressAdd(param) {
    return _req.req.post("massage/app/IndexUser/addressAdd", param);
  },
  // 修改地址
  addressUpdate: function addressUpdate(param) {
    return _req.req.post("massage/app/IndexUser/addressUpdate", param);
  },
  // 删除地址
  addressDel: function addressDel(param) {
    return _req.req.post("massage/app/IndexUser/addressDel", param);
  },
  // 收藏技-师
  coachCollectList: function coachCollectList(param) {
    return _req.req.get("massage/app/IndexUser/coachCollectList", param);
  },
  // 新增收藏
  addCollect: function addCollect(param) {
    return _req.req.post("massage/app/IndexUser/addCollect", param);
  },
  // 删除收藏
  delCollect: function delCollect(param) {
    return _req.req.post("massage/app/IndexUser/delCollect", param);
  },
  // 卡券列表
  userCouponList: function userCouponList(param) {
    return _req.req.get("massage/app/IndexUser/userCouponList", param);
  },
  // 删除卡券
  couponDel: function couponDel(param) {
    return _req.req.post("massage/app/IndexUser/couponDel", param);
  },
  // 卡券活动
  couponAtvInfo: function couponAtvInfo(param) {
    return _req.req.post("massage/app/IndexUser/couponAtvInfo", param);
  },
  // 卡券二维码
  atvQr: function atvQr(param) {
    return _req.req.post("massage/app/IndexUser/atvQr", param);
  },
  // 技-师分享储值套餐
  coachBalanceQr: function coachBalanceQr(param) {
    return _req.req.get("massage/app/IndexCoach/coachBalanceQr", param);
  },
  // 选择技-师
  coachList: function coachList(param) {
    return _req.req.get("massage/app/IndexBalance/coachList", param);
  },
  // 储值充值卡列表
  cardList: function cardList(param) {
    return _req.req.get("massage/app/IndexBalance/cardList", param);
  },
  // 充值余额(card_id)
  payBalanceOrder: function payBalanceOrder(param) {
    return _req.req.post("massage/app/IndexBalance/payBalanceOrder", param);
  },
  // 充值订单列表(时间筛选 start_time,end_time)
  balaceOrder: function balaceOrder(param) {
    return _req.req.get("massage/app/IndexBalance/balaceOrder", param);
  },
  // 消费明细
  payWater: function payWater(param) {
    return _req.req.get("massage/app/IndexBalance/payWater", param);
  },
  // 我的收益 废弃
  commList: function commList(param) {
    return _req.req.get("massage/app/IndexUser/commList", param);
  },
  // 我的收益
  resellerCashList: function resellerCashList(param) {
    return _req.req.get("massage/app/IndexReseller/resellerCashList", param);
  },
  // 邀请分销员
  resellerInvresellerQr: function resellerInvresellerQr(param) {
    return _req.req.get("massage/app/IndexReseller/resellerInvresellerQr", param);
  },
  // 下级分销员
  subReseller: function subReseller(param) {
    return _req.req.get("massage/app/IndexReseller/subReseller", param);
  },
  // 提交反馈
  addFeedback: function addFeedback(param) {
    return _req.req.post("massage/app/IndexCoach/addFeedback", param);
  },
  // 反馈记录
  listFeedback: function listFeedback(param) {
    return _req.req.get("massage/app/IndexCoach/listFeedback", param);
  },
  // 反馈详情 
  feedbackInfo: function feedbackInfo(param) {
    return _req.req.get("massage/app/IndexCoach/feedbackInfo", param);
  },
  // 屏蔽列表
  shieldCoachList: function shieldCoachList(param) {
    return _req.req.get("massage/app/IndexUser/shieldCoachList", param);
  },
  // 新增屏蔽
  shieldCoachAdd: function shieldCoachAdd(param) {
    return _req.req.post("massage/app/IndexUser/shieldCoachAdd", param);
  },
  // 删除屏蔽
  shieldCoachDel: function shieldCoachDel(param) {
    return _req.req.post("massage/app/IndexUser/shieldCoachDel", param);
  },
  // 获取门店数据
  getStoreSelect: function getStoreSelect(param) {
    return _req.req.get("massage/app/IndexUser/getStoreSelect", param);
  },
  // 绑定支付宝账号
  bindAlipayNumber: function bindAlipayNumber(param) {
    return _req.req.post("massage/app/IndexUser/bindAlipayNumber", param);
  },
  // 银行卡账户
  memberInfo: function memberInfo(param) {
    return _req.req.get("adapay/app/IndexMember/memberInfo", param);
  },
  // 绑定银行卡
  memberAdd: function memberAdd(param) {
    return _req.req.post("adapay/app/IndexMember/memberAdd", param);
  },
  // 编辑银行卡
  memberUpdate: function memberUpdate(param) {
    return _req.req.post("adapay/app/IndexMember/memberUpdate", param);
  },
  // 删除银行卡
  memberStatusUpdate: function memberStatusUpdate(param) {
    return _req.req.post("adapay/app/IndexMember/memberStatusUpdate", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 61:
/*!************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/order.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 购物车
  carInfo: function carInfo(param) {
    return _req.req.get("massage/app/Index/carInfo", param);
  },
  // 加入购物车
  addCar: function addCar(param) {
    return _req.req.post("massage/app/Index/addCar", param);
  },
  // 删除购物车数量
  delCar: function delCar(param) {
    return _req.req.post("massage/app/Index/delCar", param);
  },
  //清空购物车
  delSomeCar: function delSomeCar(param) {
    return _req.req.post("massage/app/IndexGoods/delSomeCar", param);
  },
  //选择购物车商品
  carUpdate: function carUpdate(param) {
    return _req.req.post("massage/app/IndexGoods/carUpdate", param);
  },
  //获取是否能选择 公交/地铁
  getIsBus: function getIsBus(param) {
    return _req.req.get("massage/app/IndexOrder/getIsBus", param);
  },
  //下单选择时间
  dayText: function dayText(param) {
    return _req.req.get("massage/app/IndexOrder/dayText", param);
  },
  //下单选择时间(coach_id,day)
  timeText: function timeText(param) {
    return _req.req.get("massage/app/IndexOrder/timeText", param);
  },
  //获取服务方式
  getServiceType: function getServiceType(param) {
    return _req.req.get("massage/app/IndexOrder/getServiceType", param);
  },
  //获取升级订单信息
  upOrderInfo: function upOrderInfo(param) {
    return _req.req.post("massage/app/IndexOrder/upOrderInfo", param);
  },
  //升级服务下单
  upOrderGoods: function upOrderGoods(param) {
    return _req.req.post("massage/app/IndexOrder/upOrderGoods", param);
  },
  //升级服务下单重新支付
  rePayUpOrder: function rePayUpOrder(param) {
    return _req.req.post("massage/app/IndexOrder/rePayUpOrder", param);
  },
  //校验加钟订单是否可下单
  checkAddOrder: function checkAddOrder(param) {
    return _req.req.post("massage/app/IndexOrder/checkAddOrder", param);
  },
  //获取下单信息(coach_id，有卡券就传 coupon_id)
  payOrderInfo: function payOrderInfo(param) {
    return _req.req.get("massage/app/IndexOrder/payOrderInfo", param);
  },
  //下单
  payOrder: function payOrder(param) {
    return _req.req.post("massage/app/IndexOrder/payOrder", param);
  },
  //可用卡券
  couponList: function couponList(param) {
    return _req.req.get("massage/app/IndexOrder/couponList", param);
  },
  //订单列表
  orderList: function orderList(param) {
    return _req.req.get("massage/app/IndexOrder/orderList", param);
  },
  //根据主订单查询加钟订单列表
  getAddClockOrder: function getAddClockOrder(param) {
    return _req.req.get("massage/app/IndexOrder/getAddClockOrder", param);
  },
  //订单详情
  adapayOrderInfo: function adapayOrderInfo(param) {
    return _req.req.get("massage/app/IndexOrder/adapayOrderInfo", param);
  },
  //订单详情
  orderInfo: function orderInfo(param) {
    return _req.req.get("massage/app/IndexOrder/orderInfo", param);
  },
  // 升级订单记录
  orderUpRecord: function orderUpRecord(param) {
    return _req.req.get("massage/app/IndexOrder/orderUpRecord", param);
  },
  // 拨打技-师电话
  getVirtualPhone: function getVirtualPhone(param) {
    return _req.req.get("massage/app/IndexUser/getVirtualPhone", param);
  },
  //刷新二维码
  refreshQr: function refreshQr(param) {
    return _req.req.post("massage/app/IndexOrder/refreshQr", param);
  },
  //取消订单
  cancelOrder: function cancelOrder(param) {
    return _req.req.post("massage/app/IndexOrder/cancelOrder", param);
  },
  //删除订单
  delOrder: function delOrder(param) {
    return _req.req.post("massage/app/IndexOrder/delOrder", param);
  },
  //完成服务
  endOrder: function endOrder(param) {
    return _req.req.post("massage/app/IndexOrder/endOrder", param);
  },
  //确认完成订单
  userSignOrder: function userSignOrder(param) {
    return _req.req.post("massage/app/IndexOrder/userSignOrder", param);
  },
  //重新支付
  rePayOrder: function rePayOrder(param) {
    return _req.req.post("massage/app/IndexOrder/rePayOrder", param);
  },
  //申请退款
  applyOrder: function applyOrder(param) {
    return _req.req.post("massage/app/IndexOrder/applyOrder", param);
  },
  //再来一单
  onceMoreOrder: function onceMoreOrder(param) {
    return _req.req.post("massage/app/Index/onceMoreOrder", param);
  },
  //添加评价(order_id,text，star)
  addComment: function addComment(param) {
    return _req.req.post("massage/app/IndexOrder/addComment", param);
  },
  //标签列表
  lableList: function lableList(param) {
    return _req.req.get("massage/app/IndexOrder/lableList", param);
  },
  //我的售后
  refundOrderList: function refundOrderList(param) {
    return _req.req.get("massage/app/IndexOrder/refundOrderList", param);
  },
  //售后详情
  refundOrderInfo: function refundOrderInfo(param) {
    return _req.req.get("massage/app/IndexOrder/refundOrderInfo", param);
  },
  //取消退款
  cancelRefundOrder: function cancelRefundOrder(param) {
    return _req.req.post("massage/app/IndexOrder/cancelRefundOrder", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 62:
/*!***************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/salesman.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 申请业务员
  applySalesman: function applySalesman(param) {
    return _req.req.post("massage/app/IndexUser/applySalesman", param);
  },
  // 业务员信息
  salesmanInfo: function salesmanInfo(param) {
    return _req.req.get("massage/app/IndexUser/salesmanInfo", param);
  },
  // 业务员首页
  index: function index(param) {
    return _req.req.get("massage/app/IndexSalesman/index", param);
  },
  // 业务员二维码
  salesmanQr: function salesmanQr(param) {
    return _req.req.get("massage/app/IndexSalesman/salesmanQr", param);
  },
  // 申请提现
  applyWallet: function applyWallet(param) {
    return _req.req.post("massage/app/IndexSalesman/applyWallet", param);
  },
  // 提现记录
  walletList: function walletList(param) {
    return _req.req.get("massage/app/IndexSalesman/walletList", param);
  },
  // 渠道明细
  salesmanChannelCash: function salesmanChannelCash(param) {
    return _req.req.get("massage/app/IndexSalesman/salesmanChannelCash", param);
  },
  // 业务员渠道-商明细详情
  salesmanChannelOrderList: function salesmanChannelOrderList(param) {
    return _req.req.get("massage/app/IndexSalesman/salesmanChannelOrderList", param);
  },
  // 佣金明细
  salesmanChannelOrderListV2: function salesmanChannelOrderListV2(param) {
    return _req.req.get("massage/app/IndexSalesman/salesmanChannelOrderListV2", param);
  },
  // 解除绑定
  unfriendChannel: function unfriendChannel(param) {
    return _req.req.post("massage/app/IndexSalesman/unfriendChannel", param);
  },
  // 设置提成比例
  setSalesmanBalance: function setSalesmanBalance(param) {
    return _req.req.post("massage/app/IndexSalesman/setSalesmanBalance", param);
  },
  // 设置提成比例
  setInvChannelBalance: function setInvChannelBalance(param) {
    return _req.req.post("massage/app/IndexSalesman/setInvChannelBalance", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 63:
/*!**************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/service.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 首页轮播图
  index: function index(param) {
    return _req.req.get("massage/app/Index/index", param);
  },
  //推荐技-师
  recommendList: function recommendList(param) {
    return _req.req.get("massage/app/Index/recommendList", param);
  },
  //文章详情
  articleInfo: function articleInfo(param) {
    return _req.req.get("massage/app/IndexArticle/articleInfo", param);
  },
  //文章详情-提交表单
  subArticleForm: function subArticleForm(param) {
    return _req.req.post("massage/app/IndexArticle/subArticleForm", param);
  },
  // 服务分类列表
  serviceCateList: function serviceCateList(param) {
    return _req.req.get("massage/app/Index/serviceCateList", param);
  },
  // 服务列表 查询对应城市的代理商添加的服务
  getCoachService: function getCoachService(param) {
    return _req.req.get("massage/app/Index/getCoachService", param);
  },
  // 服务列表
  serviceList: function serviceList(param) {
    return _req.req.get("massage/app/Index/serviceList", param);
  },
  // 服务详情
  serviceInfo: function serviceInfo(param) {
    return _req.req.get("massage/app/Index/serviceInfo", param);
  },
  // 地图找人
  mapCoachList: function mapCoachList(param) {
    return _req.req.get("map/app/Index/coachList", param);
  },
  // 服务技-师列表无筛选项(ser_id，服务id,lat,lng)
  typeServiceCoachList: function typeServiceCoachList(param) {
    return _req.req.get("massage/app/Index/typeServiceCoachList", param);
  },
  // 服务技-师列表(ser_id，服务id,lat,lng,type)
  serviceCoachList: function serviceCoachList(param) {
    return _req.req.get("massage/app/Index/serviceCoachList", param);
  },
  // 技-师服务列表(coach_id)
  coachServiceList: function coachServiceList(param) {
    return _req.req.get("massage/app/Index/coachServiceList", param);
  },
  // 技-师评价
  commentList: function commentList(param) {
    return _req.req.get("massage/app/Index/commentList", param);
  },
  // 技-师信息
  coachInfo: function coachInfo(param) {
    return _req.req.get("massage/app/Index/coachInfo", param);
  },
  //优惠券列表
  couponList: function couponList(param) {
    return _req.req.get("massage/app/Index/couponListV2", param);
  },
  //领取优惠券
  userGetCoupon: function userGetCoupon(param) {
    return _req.req.post("massage/app/Index/userGetCoupon", param);
  },
  //获取可升级的服务
  getUpOrderGoods: function getUpOrderGoods(param) {
    return _req.req.get("massage/app/IndexOrder/getUpOrderGoods", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 64:
/*!****************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/shopstore.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 分类列表
  storeCateList: function storeCateList(param) {
    return _req.req.get("store/app/IndexStore/storeCateList", param);
  },
  // 门店列表
  storeList: function storeList(param) {
    return _req.req.get("store/app/IndexStore/storeList", param);
  },
  // 门店详情
  storeInfo: function storeInfo(param) {
    return _req.req.get("store/app/IndexStore/storeInfo", param);
  },
  // 门店服务列表
  storeServiceList: function storeServiceList(param) {
    return _req.req.get("store/app/IndexStore/storeServiceList", param);
  },
  // 门店评价列表
  commentList: function commentList(param) {
    return _req.req.get("store/app/IndexStore/commentList", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 65:
/*!*****************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/technician.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 开通城市
  expectationCityCheck: function expectationCityCheck(param) {
    return _req.req.get("massage/app/Index/expectationCityCheck", param);
  },
  expectationCity: function expectationCity(param) {
    return _req.req.post("massage/app/Index/expectationCity", param);
  },
  // 申请技-师
  coachApply: function coachApply(param) {
    return _req.req.post("massage/app/IndexUser/coachApply", param);
  },
  // 获取是否开启合同
  getFddStatus: function getFddStatus(param) {
    return _req.req.get("massage/app/IndexCoach/getFddStatus", param);
  },
  // 获取是否已签合同
  getFddRecord: function getFddRecord(param) {
    return _req.req.get("massage/app/IndexCoach/getFddRecord", param);
  },
  // 获取发大大实名认证地址
  getPersonVerifyUrl: function getPersonVerifyUrl(param) {
    return _req.req.get("massage/app/IndexCoach/getPersonVerifyUrl", param);
  },
  // 获取用户实名注册信息
  getAttestationInfo: function getAttestationInfo(param) {
    return _req.req.get("massage/app/IndexCoach/getAttestationInfo", param);
  },
  // 签署合同
  Extsign: function Extsign(param) {
    return _req.req.post("massage/app/IndexCoach/Extsign", param);
  },
  // 技-师信息
  coachInfo: function coachInfo(param) {
    return _req.req.get("massage/app/IndexUser/coachInfo", param);
  },
  // 编辑技-师
  coachUpdate: function coachUpdate(param) {
    return _req.req.post("massage/app/IndexCoach/coachUpdate", param);
  },
  // 编辑技-师
  coachUpdateV2: function coachUpdateV2(param) {
    return _req.req.post("massage/app/IndexCoach/coachUpdateV2", param);
  },
  // 技-师等级
  coachLevel: function coachLevel(param) {
    return _req.req.get("massage/app/IndexCoach/coachLevel", param);
  },
  // 技-师首页
  coachIndex: function coachIndex(param) {
    return _req.req.get("massage/app/IndexCoach/coachIndex", param);
  },
  // 技-师报警
  police: function police(param) {
    return _req.req.post("massage/app/IndexCoach/police", param);
  },
  // 订单列表
  orderList: function orderList(param) {
    return _req.req.get("massage/app/IndexCoach/orderList", param);
  },
  // 订单详情
  orderInfo: function orderInfo(param) {
    return _req.req.get("massage/app/IndexCoach/orderInfo", param);
  },
  // 修改订单状态(type,order_id)
  updateOrder: function updateOrder(param) {
    return _req.req.post("massage/app/IndexCoach/updateOrder", param);
  },
  // 异常订单详情
  abnOrderInfo: function abnOrderInfo(param) {
    return _req.req.get("massage/app/IndexCoach/abnOrderInfo", param);
  },
  // 记录技-师轨迹
  coachTrajectoryAdd: function coachTrajectoryAdd(param) {
    return _req.req.post("massage/app/IndexCoach/coachTrajectoryAdd", param);
  },
  // 拨打客户电话
  getVirtualPhone: function getVirtualPhone(param) {
    return _req.req.post("massage/app/IndexCoach/getVirtualPhone", param);
  },
  // 评价管理
  commentList: function commentList(param) {
    return _req.req.get("massage/app/IndexCoach/commentList", param);
  },
  // 设为/取消优质评价
  updateCommentGood: function updateCommentGood(param) {
    return _req.req.post("massage/app/IndexCoach/updateCommentGood", param);
  },
  //佣金信息
  capCashInfo: function capCashInfo(param) {
    return _req.req.get("massage/app/IndexCoach/capCashInfo", param);
  },
  //佣金信息（车费）
  capCashInfoCar: function capCashInfoCar(param) {
    return _req.req.get("massage/app/IndexCoach/capCashInfoCar", param);
  },
  //申请提现 (apply_price,text,type：1服务费提现，2车费提现)
  applyWallet: function applyWallet(param) {
    return _req.req.post("massage/app/IndexCoach/applyWallet", param);
  },
  //提现记录
  capCashList: function capCashList(param) {
    return _req.req.get("massage/app/IndexCoach/capCashList", param);
  },
  //时间管理回显
  timeConfig: function timeConfig(param) {
    return _req.req.get("massage/app/IndexCoach/timeConfig", param);
  },
  //时间管理设置
  setTimeConfig: function setTimeConfig(param) {
    return _req.req.post("massage/app/IndexCoach/timeConfig", param);
  },
  //根据接单时间获取时间节点
  getTime: function getTime(param) {
    return _req.req.get("massage/app/IndexCoach/getTime", param);
  },
  //根据接单时间获取时间节点
  getOrderNum: function getOrderNum(param) {
    return _req.req.get("massage/app/IndexCoach/getOrderNum", param);
  },
  //物料商城-商品列表
  goodsList: function goodsList(param) {
    return _req.req.get("massage/app/IndexCoach/goodsList", param);
  },
  //物料商城-分类列表
  carteList: function carteList(param) {
    return _req.req.get("massage/app/IndexCoach/carteList", param);
  },
  //物料商城-商品详情
  goodsInfo: function goodsInfo(param) {
    return _req.req.get("massage/app/IndexCoach/goodsInfo", param);
  },
  //车费明细列表
  carMoneyList: function carMoneyList(param) {
    return _req.req.get("massage/app/IndexCoach/carMoneyList", param);
  },
  //差评申诉 订单列表
  appealOrder: function appealOrder(param) {
    return _req.req.get("massage/app/IndexCoach/appealOrder", param);
  },
  //差评申诉 提交申诉
  addAppeal: function addAppeal(param) {
    return _req.req.post("massage/app/IndexCoach/addAppeal", param);
  },
  //差评申诉 申诉记录列表
  appealList: function appealList(param) {
    return _req.req.get("massage/app/IndexCoach/appealList", param);
  },
  //标签列表
  labelList: function labelList(param) {
    return _req.req.get("massage/app/IndexCoach/labelList", param);
  },
  //添加用户评价
  userLabelAdd: function userLabelAdd(param) {
    return _req.req.post("massage/app/IndexCoach/userLabelAdd", param);
  },
  //获取用户当前标签
  userLabelList: function userLabelList(param) {
    return _req.req.get("massage/app/IndexCoach/userLabelList", param);
  },
  //获取用户当前评价
  coachCommentUserData: function coachCommentUserData(param) {
    return _req.req.get("massage/app/IndexCoach/coachCommentUserData", param);
  },
  //储值返佣列表
  balanceCommissionList: function balanceCommissionList(param) {
    return _req.req.get("massage/app/IndexCoach/balanceCommissionList", param);
  },
  //储值返佣金额统计
  balanceCommissionData: function balanceCommissionData(param) {
    return _req.req.get("massage/app/IndexCoach/balanceCommissionData", param);
  },
  //分成明细
  coachCommissionList: function coachCommissionList(param) {
    return _req.req.get("massage/app/IndexCoach/coachCommissionList", param);
  },
  //分成明细金额统计
  coachCommissionData: function coachCommissionData(param) {
    return _req.req.get("massage/app/IndexCoach/coachCommissionData", param);
  },
  //收益详情
  coachCommissionInfo: function coachCommissionInfo(param) {
    return _req.req.get("massage/app/IndexCoach/coachCommissionInfo", param);
  },
  //拉黑用户
  shieldUserAdd: function shieldUserAdd(param) {
    return _req.req.post("massage/app/IndexCoach/shieldUserAdd", param);
  },
  //移除拉黑用户
  shieldUserDel: function shieldUserDel(param) {
    return _req.req.post("massage/app/IndexCoach/shieldUserDel", param);
  },
  //拉黑用户列表
  shieldCoachList: function shieldCoachList(param) {
    return _req.req.get("massage/app/IndexCoach/shieldCoachList", param);
  },
  // 订单服务录音
  recordingAdd: function recordingAdd(param) {
    return _req.req.post("recording/app/Recording/recordingAdd", param);
  },
  // 信用分
  getCreditValueData: function getCreditValueData(param) {
    return _req.req.get("massage/app/IndexCoach/getCreditValueData", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 66:
/*!***********************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/api/modules/user.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _req = __webpack_require__(/*! ../../utils/req.js */ 37);
var _default = {
  // 用户信息
  userInfo: function userInfo(param) {
    return _req.req.get("massage/app/IndexUser/userInfo", param);
  },
  // 更新用户信息
  userUpdate: function userUpdate(param) {
    return _req.req.post("massage/app/IndexUser/userUpdate", param);
  },
  // 绑定渠道-商
  bindChannel: function bindChannel(param) {
    return _req.req.post("massage/app/IndexUser/bindChannel", param);
  },
  // 注销用户
  delUserInfo: function delUserInfo(param) {
    return _req.req.post("/massage/app/IndexUser/delUserInfo", param);
  },
  // 获取手机号
  reportPhone: function reportPhone(param) {
    return _req.req.post("massage/app/IndexUser/reportPhone", param);
  },
  // 验证码
  sendShortMsg: function sendShortMsg(param) {
    return _req.req.post("massage/app/IndexUser/sendShortMsg", param);
  },
  // 绑定手机号
  bindUserPhone: function bindUserPhone(param) {
    return _req.req.post("massage/app/IndexUser/bindUserPhone", param);
  }
};
exports.default = _default;

/***/ }),

/***/ 69:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 70:
/*!*******************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/locale/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _zhCN = _interopRequireDefault(__webpack_require__(/*! ./lang/zh-CN */ 71));
var _enUS = _interopRequireDefault(__webpack_require__(/*! ./lang/en-US */ 72));
var _vueI18n = _interopRequireDefault(__webpack_require__(/*! vue-i18n */ 73));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
_vue.default.use(_vueI18n.default);
var i18n = new _vueI18n.default({
  locale: 'zh',
  messages: {
    'en': _enUS.default,
    'zh': _zhCN.default
  }
});
var _default = i18n;
exports.default = _default;

/***/ }),

/***/ 71:
/*!************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/locale/lang/zh-CN.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  action: {
    attendantName: '技师',
    agreeRefund: '立即退款',
    transferOrder: '转单',
    orderTaking: '技师接单',
    setOut: '技师出发',
    arrive: '技师到达',
    startService: '开始服务',
    serviceCompletion: '服务完成',
    channelName: '渠道商'
  }
};
exports.default = _default;

/***/ }),

/***/ 72:
/*!************************************************************************************************************!*\
  !*** D:/重要文件/艾美娜资料/产品演示/志愿者/家政图/yf14239/2024最新防东郊同城上门家政按摩H5小程序源码/前端未编译/uniapp/wechat/locale/lang/en-US.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  action: {
    attendantName: 'technician'
  }
};
exports.default = _default;

/***/ }),

/***/ 73:
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-i18n v8.28.2 
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'compactDisplay',
  'currency',
  'currencyDisplay',
  'currencySign',
  'localeMatcher',
  'notation',
  'numberingSystem',
  'signDisplay',
  'style',
  'unit',
  'unitDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits'
];

var dateTimeFormatKeys = [
  'dateStyle',
  'timeStyle',
  'calendar',
  'localeMatcher',
  "hour12",
  "hourCycle",
  "timeZone",
  "formatMatcher",
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName' ];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

var isArray = Array.isArray;

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isString (val) {
  return typeof val === 'string'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function isFunction (val) {
  return typeof val === 'function'
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.delete(item)) {
    return arr
  }
}

function arrayFrom (arr) {
  var ret = [];
  arr.forEach(function (a) { return ret.push(a); });
  return ret
}

function includes (arr, item) {
  return !!~arr.indexOf(item)
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a);
      var isArrayB = isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Sanitizes html special characters from input strings. For mitigating risk of XSS attacks.
 * @param rawText The raw input from the user that should be escaped.
 */
function escapeHtml(rawText) {
  return rawText
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Escapes html tags and special symbols from all provided params which were returned from parseArgs().params.
 * This method performs an in-place operation on the params object.
 *
 * @param {any} params Parameters as provided from `parseArgs().params`.
 *                     May be either an array of strings or a string->any map.
 *
 * @returns The manipulated `params` object.
 */
function escapeParams(params) {
  if(params != null) {
    Object.keys(params).forEach(function (key) {
      if(typeof(params[key]) == 'string') {
        params[key] = escapeHtml(params[key]);
      }
    });
  }
  return params
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

/**
 * Mixin
 * 
 * If `bridge` mode, empty mixin is returned,
 * else regulary mixin implementation is returned.
 */
function defineMixin (bridge) {
  if ( bridge === void 0 ) bridge = false;

  function mounted () {
    if (this !== this.$root && this.$options.__INTLIFY_META__ && this.$el) {
      this.$el.setAttribute('data-intlify', this.$options.__INTLIFY_META__);
    }
  }

  return bridge
    ? { mounted: mounted } // delegate `vue-i18n-bridge` mixin implementation
    : { // regulary 
    beforeCreate: function beforeCreate () {
      var options = this.$options;
      options.i18n = options.i18n || ((options.__i18nBridge || options.__i18n) ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          if ((options.__i18nBridge || options.__i18n)) {
            try {
              var localeMessages = options.i18n && options.i18n.messages ? options.i18n.messages : {};
              var _i18n = options.__i18nBridge || options.__i18n;
              _i18n.forEach(function (resource) {
                localeMessages = merge(localeMessages, JSON.parse(resource));
              });
              Object.keys(localeMessages).forEach(function (locale) {
                options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
              });
            } catch (e) {
              if (true) {
                error("Cannot parse locale messages via custom blocks.", e);
              }
            }
          }
          this._i18n = options.i18n;
          this._i18nWatcher = this._i18n.watchI18nData();
        } else if (isPlainObject(options.i18n)) {
          var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n
            ? this.$root.$i18n
            : null;
          // component local i18n
          if (rootI18n) {
            options.i18n.root = this.$root;
            options.i18n.formatter = rootI18n.formatter;
            options.i18n.fallbackLocale = rootI18n.fallbackLocale;
            options.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
            options.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
            options.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
            options.i18n.pluralizationRules = rootI18n.pluralizationRules;
            options.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
          }

          // init locale messages via custom blocks
          if ((options.__i18nBridge || options.__i18n)) {
            try {
              var localeMessages$1 = options.i18n && options.i18n.messages ? options.i18n.messages : {};
              var _i18n$1 = options.__i18nBridge || options.__i18n;
              _i18n$1.forEach(function (resource) {
                localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
              });
              options.i18n.messages = localeMessages$1;
            } catch (e) {
              if (true) {
                warn("Cannot parse locale messages via custom blocks.", e);
              }
            }
          }

          var ref = options.i18n;
          var sharedMessages = ref.sharedMessages;
          if (sharedMessages && isPlainObject(sharedMessages)) {
            options.i18n.messages = merge(options.i18n.messages, sharedMessages);
          }

          this._i18n = new VueI18n(options.i18n);
          this._i18nWatcher = this._i18n.watchI18nData();

          if (options.i18n.sync === undefined || !!options.i18n.sync) {
            this._localeWatcher = this.$i18n.watchLocale();
          }

          if (rootI18n) {
            rootI18n.onComponentInstanceCreated(this._i18n);
          }
        } else {
          if (true) {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        // root i18n
        this._i18n = this.$root.$i18n;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        // parent i18n
        this._i18n = options.parent.$i18n;
      }
    },

    beforeMount: function beforeMount () {
      var options = this.$options;
      options.i18n = options.i18n || ((options.__i18nBridge || options.__i18n) ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else if (isPlainObject(options.i18n)) {
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else {
          if (true) {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      }
    },

    mounted: mounted,

    beforeDestroy: function beforeDestroy () {
      if (!this._i18n) { return }

      var self = this;
      this.$nextTick(function () {
        if (self._subscribing) {
          self._i18n.unsubscribeDataChanging(self);
          delete self._subscribing;
        }

        if (self._i18nWatcher) {
          self._i18nWatcher();
          self._i18n.destroyVM();
          delete self._i18nWatcher;
        }

        if (self._localeWatcher) {
          self._localeWatcher();
          delete self._localeWatcher;
        }
      });
    }
  }
}

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null
    }

    var key = null;
    var options = null;

    if (isString(props.format)) {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag
      ? h(tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass
      }, values)
      : values
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue, options) {
  if ( options === void 0 ) options = { bridge: false };

  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return
  }
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  extend(Vue);
  Vue.mixin(defineMixin(options.bridge));
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined || value === null) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-zA-Z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); },
  'capitalize': function (str) { return ("" + (str.charAt(0).toLocaleUpperCase()) + (str.substr(1))); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale === false
    ? false
    : options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || options.datetimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._fallbackRootWithEmptyString = options.fallbackRootWithEmptyString === undefined
    ? true
    : !!options.fallbackRootWithEmptyString;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = new Set();
  this._componentInstanceCreatedListener = options.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;
  this._escapeParameterHtml = options.escapeParameterHtml || false;

  if ('__VUE_I18N_BRIDGE__' in options) {
    this.__VUE_I18N_BRIDGE__ = options.__VUE_I18N_BRIDGE__;
  }

  /**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index
  */
  this.getChoiceIndex = function (choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = (thisPrototype.getChoiceIndex);
      return (prototypeGetChoiceIndex).call(this$1, choice, choicesLength)
    }

    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function (_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice
          ? _choice > 1
            ? 1
            : 0
          : 1
      }

      return _choice ? Math.min(_choice, 2) : 0
    };

    if (this$1.locale in this$1.pluralizationRules) {
      return this$1.pluralizationRules[this$1.locale].apply(this$1, [choice, choicesLength])
    } else {
      return defaultImpl(choice, choicesLength)
    }
  };


  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true },postTranslation: { configurable: true },sync: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (isString(message)) {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data, __VUE18N__INSTANCE__: true });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.add(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
    var this$1 = this;
  return this._vm.$watch('$data', function () {
    var listeners = arrayFrom(this$1._dataListeners);
    var i = listeners.length;
    while(i--) {
      Vue.nextTick(function () {
        listeners[i] && listeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale (composer) {
  if (!composer) {
    /* istanbul ignore if */
    if (!this._sync || !this._root) { return null }
    var target = this._vm;
    return this._root.$i18n.vm.$watch('locale', function (val) {
      target.$set(target, 'locale', val);
      target.$forceUpdate();
    }, { immediate: true })
  } else {
    // deal with vue-i18n-bridge
    if (!this.__VUE_I18N_BRIDGE__) { return null }
    var self = this;
    var target$1 = this._vm;
    return this.vm.$watch('locale', function (val) {
      target$1.$set(target$1, 'locale', val);
      if (self.__VUE_I18N_BRIDGE__ && composer) {
        composer.locale.value = val;
      }
      target$1.$forceUpdate();
    }, { immediate: true })
  }
};

VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated (newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () { return this._postTranslation };
prototypeAccessors.postTranslation.set = function (handler) { this._postTranslation = handler; };

prototypeAccessors.sync.get = function () { return this._sync };
prototypeAccessors.sync.set = function (val) { this._sync = val; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return (this._fallbackRootWithEmptyString? !val : isNull(val)) && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (!(isString(ret) || isFunction(ret))) {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn(("Value of key '" + key + "' is not a string or function !"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (isString(pathRet) || isFunction(pathRet)) {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn(("Value of key '" + key + "' is not a string or function!"));
      }
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (isString(ret) && (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0)) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);

  // eslint-disable-next-line no-autofix/prefer-const
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (includes(visitedLinkStack, linkPlaceholder)) {
      if (true) {
        warn(("Circular reference found. \"" + link + "\" is already visited in the chain of " + (visitedLinkStack.reverse().join(' <- '))));
      }
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._createMessageContext = function _createMessageContext (values, formatter, path, interpolateMode) {
    var this$1 = this;

  var _list = isArray(values) ? values : [];
  var _named = isObject(values) ? values : {};
  var list = function (index) { return _list[index]; };
  var named = function (key) { return _named[key]; };
  var messages = this._getMessages();
  var locale = this.locale;

  return {
    list: list,
    named: named,
    values: values,
    formatter: formatter,
    path: path,
    messages: messages,
    locale: locale,
    linked: function (linkedKey) { return this$1._interpolate(locale, messages[locale] || {}, linkedKey, null, interpolateMode, undefined, [linkedKey]); }
  }
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  if (isFunction(message)) {
    return message(
      this._createMessageContext(values, this._formatter || defaultFormatter, path, interpolateMode)
    )
  }

  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' && !isString(ret) ? ret.join('') : ret
};

VueI18n.prototype._appendItemToChain = function _appendItemToChain (chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== '!';
      item = item.replace(/!/g, '');
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow
};

VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain (chain, locale, blocks) {
  var follow;
  var tokens = locale.split('-');
  do {
    var item = tokens.join('-');
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && (follow === true))
  return follow
};

VueI18n.prototype._appendBlockToChain = function _appendBlockToChain (chain, block, blocks) {
  var follow = true;
  for (var i = 0; (i < block.length) && (isBoolean(follow)); i++) {
    var locale = block[i];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow
};

VueI18n.prototype._getLocaleChain = function _getLocaleChain (start, fallbackLocale) {
  if (start === '') { return [] }

  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }

  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];

    // first block defined by start
    var block = [start];

    // while any intervening block found
    while (isArray(block)) {
      block = this._appendBlockToChain(
        chain,
        block,
        fallbackLocale
      );
    }

    // last block defined by default
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (isObject(fallbackLocale)) {
      /* $FlowFixMe */
      if (fallbackLocale['default']) {
        defaults = fallbackLocale['default'];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }

    // convert defaults to array
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(
        chain,
        block,
        null
      );
    }
    this._localeChainCache[start] = chain;
  }
  return chain
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i = 0; i < chain.length; i++) {
    var step = chain[i];
    res =
      this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to translate the keypath '" + key + "' with '" + step + "' locale."));
      }
      return res
    }
  }
  return null
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  if(this._escapeParameterHtml) {
    parsedArgs.params = escapeParams(parsedArgs.params);
  }

  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');
    if (this._postTranslation && ret !== null && ret !== undefined) {
      ret = this._postTranslation(ret, key);
    }
    return ret
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (!isString(locale)) {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message || !isString(message)) { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge(
    typeof this._vm.messages[locale] !== 'undefined' && Object.keys(this._vm.messages[locale]).length
      ? Object.assign({}, this._vm.messages[locale])
      : {},
    message
  ));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat (locale, format) {
  // eslint-disable-next-line no-autofix/prefer-const
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._dateTimeFormatters[id];
  }
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = dateTimeFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      formatter = new Intl.DateTimeFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._dateTimeFormatters[id];
      if (!formatter) {
        formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
      }
    }

    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key, options) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    var dtf = !options ? new Intl.DateTimeFormat(locale) : new Intl.DateTimeFormat(locale, options);
    return dtf.format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key, options);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to datetime localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }

    options = Object.keys(args[0]).reduce(function (acc, key) {
        var obj;

      if (includes(dateTimeFormatKeys, key)) {
        return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
      }
      return acc
    }, null);

  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._d(value, locale, key, options)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat (locale, format) {
  // eslint-disable-next-line no-autofix/prefer-const
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = numberFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' number formats from '" + current + "' number formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to number localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (includes(numberFormatKeys, key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to format number to parts of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.28.2';

/* harmony default export */ __webpack_exports__["default"] = (VueI18n);


/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map