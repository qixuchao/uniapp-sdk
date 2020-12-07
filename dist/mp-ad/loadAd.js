/* loadAd.js v1.0.0 */
function _defineProperty(obj, key, value) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * @param {
	 style: Object, 广告的样式
	 onClose: Function, 关闭广告时的回调(开屏，插屏)
	 onComplete: Function, 广告渲染完成的回调，成功/失败
	 duration: Number, 广告持续的时间（开屏）
 }
 */
var loadAd = function loadAd(params) {
  var _this = this;

  var style = Object.assign({
    plusrequire: "none",
    'uni-app': 'none'
  });
  var mv = plus.webview.create("", +new Date(), style);
  var duration = params.duration;
  var currentWebview = getCurrentPages()[0].$getAppWebview();
  mv.loadURL('http://me34.cn?slotId=' + params.id);
  mv.addEventListener('titleUpdate', function (e) {
    var adContainer = null;

    try {
      adContainer = JSON.parse(e.title);

      if (adContainer.hasOwnProperty('status')) {
        params.onComplete && _this.$emit("onComplete", adContainer.status);

        if (!adContainer.status) {
          params.onFallback && _this.$emit("onFallback", adContainer.status);
          return;
        }
      }

      if (adContainer.type === 'resize') {
        mv.setStyle(_objectSpread2({
          width: adContainer.w,
          height: adContainer.h
        }, params.style));
      } else if (adContainer.type === 'adClick' && adContainer.clickUrl) {
        uni.navigateTo({
          url: '../../components/mp-ad/displayAd?url=' + adContainer.clickUrl
        });
      } else if (adContainer.type === 'adClose') {
        params.onClose && _this.$emit("onClose");
        mv.close();
      }
    } catch (e) {}
  });
  currentWebview.append(mv);
  duration && setTimeout(function () {
    console.log(params);
    uni.redirectTo({
      url: "pages/index/index"
    });
    params.onClose && _this.$emit("onClose");
    mv.close();
  }, duration);
};

export { loadAd };
