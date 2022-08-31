// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsutil = require("@andresclua/jsutil");
var _jsutilDefault = parcelHelpers.interopDefault(_jsutil);
var _swipeListener = require("swipe-listener");
var _swipeListenerDefault = parcelHelpers.interopDefault(_swipeListener);
class Sketch {
    constructor(config){
        this.JSUTIL = new (0, _jsutilDefault.default)();
        this.options = config;
        this.slides = document.querySelectorAll(".slide");
        this.slideControl = document.querySelectorAll(".slider__control");
        this.slidesCount = this.slides.length;
        this.sliderSpeed = 1300; // needs to match with SCSS Variable
        this.isSliderPlaying = false;
        this.init();
        this.events();
        this.registerSwipe();
    }
    init() {
        // Create all slides with default configuration
        this.slides.forEach((element, index)=>{
            var i = index + 1;
            this.JSUTIL.addClass(element, "slide-" + i);
            element.dataset.slide = i;
        });
        // if dots where selected create pagination
        if (this.options.dots) this.addDots();
    }
    addDots() {
        // add comment div
        let comment = document.createComment(" add pagination");
        this.options.parent.appendChild(comment);
        this.dotActiveClass = "b--clip-slider-a__pagination__item--is-active";
        // add parent ul
        let ul = document.createElement("ul");
        ul.setAttribute("id", "pagination");
        ul.setAttribute("class", "b--clip-slider-a__pagination");
        this.options.parent.appendChild(ul);
        for(let i = 0; i < this.slidesCount; i++){
            var li = document.createElement("li");
            li.setAttribute("class", "b--clip-slider-a__pagination__item");
            li.setAttribute("data-dot", parseInt(i + 1));
            if (i == 0) this.JSUTIL.addClass(li, this.dotActiveClass);
            ul.appendChild(li);
        }
    }
    events() {
        this.slideControl.forEach((element, index)=>{
            element.addEventListener("click", (event)=>this.handleSlide({
                    event: event,
                    element: element
                }));
        });
        if (this.options.dots) {
            this.dotControl = document.querySelectorAll(".b--clip-slider-a__pagination__item");
            this.dotControl.forEach((element, index)=>{
                element.addEventListener("click", (event)=>this.goToSlide({
                        event: event,
                        element: element,
                        clickedDot: index
                    }));
            });
        }
    }
    goToSlide(payload) {
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
        this.slideActiveClass = "b--clip-slider-a__list-group__list-item--is-active";
        // get right
        var isRight = payload.element.classList.contains("m--right");
        // get current active
        var currentActive = document.querySelector(".slide." + this.slideActiveClass);
        var currentDot = document.querySelector("." + this.dotActiveClass);
        this.JSUTIL.removeClass(currentDot, this.dotActiveClass);
        var index = payload.clickedDot + 1;
        var newActive = document.querySelector(".slide-" + index);
        this.JSUTIL.addClass(payload.element, this.dotActiveClass);
        // currentActive.classList.remove('s--active', 's--active-prev');
        this.JSUTIL.removeClass(currentActive, this.slideActiveClass, "s--active-prev");
        this.JSUTIL.removeClass(document.querySelector(".slide.s--prev"), "s--prev");
        this.JSUTIL.addClass(newActive, "s--active");
        if (!isRight) this.JSUTIL.addClass(newActive, "s--active-prev");
        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;
        this.JSUTIL.addClass(document.querySelector(".slide-" + prevIndex), "s--prev");
        setTimeout(()=>{
            this.isSliderPlaying = false;
        }, this.sliderSpeed * 0.5);
    }
    handleSlide(payload) {
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
        // get right
        console.log(payload.element);
        var isRight = payload.element.classList.contains("b--clip-slider-a__controls__item--next");
        // get current active
        var currentActive = document.querySelector(".slide.s--active");
        var currentDotActive = document.querySelector("." + this.dotActiveClass);
        var index = +currentActive.dataset.slide;
        isRight ? index++ : index--;
        if (index < 1) index = this.slidesCount;
        if (index > this.slidesCount) index = 1;
        var newActive = document.querySelector(".slide-" + index);
        var dotActive = document.querySelector('[data-dot="' + index + '"]');
        this.JSUTIL.removeClass(currentActive, "s--active", "s--active-prev");
        this.JSUTIL.removeClass(document.querySelector(".slide.s--prev"), "s--prev");
        this.JSUTIL.removeClass(currentDotActive, this.dotActiveClass);
        this.JSUTIL.addClass(newActive, "s--active");
        this.JSUTIL.addClass(dotActive, this.dotActiveClass);
        if (!isRight) this.JSUTIL.addClass(newActive, "s--active-prev");
        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;
        this.JSUTIL.addClass(document.querySelector(".slide-" + prevIndex), "s--prev");
        setTimeout(()=>{
            this.isSliderPlaying = false;
        }, this.sliderSpeed * 0.5);
    }
    /**
        * Inits when user is swiping the homepage hero
        * notes: only on mobile
        */ registerSwipe() {
        if (this.JSUTIL.getTypeDevice("touch")) {
            this.container = document.querySelector("#clipSlider");
            this.listener = (0, _swipeListenerDefault.default)(this.container);
            this.container.addEventListener("swipe", (e)=>{
                this.directions = e.detail.directions;
                this.x = e.detail.x;
                this.y = e.detail.y;
                if (this.directions.left) this.handleSlide({
                    element: document.querySelector(".b--clip-slider-a__controls__item--next")
                });
                if (this.directions.right) this.handleSlide({
                    element: document.querySelector(".b--clip-slider-a__controls__item--prev")
                });
            });
        }
    }
}
exports.default = Sketch;
var config = {
    parent: document.getElementById("clipSlider"),
    dots: true,
    controls: true
};
new Sketch(config);

},{"@andresclua/jsutil":"g3iME","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","swipe-listener":"2nCZO"}],"g3iME":[function(require,module,exports) {
module.exports = require("./src/js_helper");

},{"./src/js_helper":"iC7g6"}],"iC7g6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class JSUTIL {
    _getElements(id) {
        if (typeof id == "object") return [
            id
        ];
        else return document.querySelectorAll(id);
    }
    // .hide(selector)
    hide(sel) {
        this._hideElements(this._getElements(sel));
    }
    _hideElements(elements) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._hideElement(elements[i]);
    }
    _hideElement(element) {
        this._styleElement(element, "display", "none");
    }
    //.show(selector)
    show(sel, a) {
        var elements = this._getElements(sel);
        if (a) this._hideElements(elements);
        this._showElements(elements);
    }
    _showElements(elements) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._showElement(elements[i]);
    }
    _showElement(element) {
        this._styleElement(element, "display", "block");
    }
    //addStyle [element, property, value]
    addStyle(sel, prop, val) {
        this._styleElements(this._getElements(sel), prop, val);
    }
    _styleElements(elements, prop, val) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._styleElement(elements[i], prop, val);
    }
    _styleElement(element, prop, val) {
        element.style.setProperty(prop, val);
    }
    //toggleShow(selector)
    toggleShow(sel) {
        var i, x = this._getElements(sel), l = x.length;
        for(i = 0; i < l; i++)if (x[i].style.display == "none") this._styleElement(x[i], "display", "block");
        else this._styleElement(x[i], "display", "none");
    }
    // addClass(selector,'class')
    addClass(sel, name) {
        this._addClassElements(this._getElements(sel), name);
    }
    _addClassElements(elements, name) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._addClassElement(elements[i], name);
    }
    _addClassElement(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++)if (arr1.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
    }
    //removeClass(selector,'class')
    removeClass(sel, name) {
        this._removeClassElements(this._getElements(sel), name);
    }
    _removeClassElements(elements, name) {
        var i, l = elements.length, arr1, arr2, j;
        for(i = 0; i < l; i++)this._removeClassElement(elements[i], name);
    }
    _removeClassElement(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++)while(arr1.indexOf(arr2[i]) > -1)arr1.splice(arr1.indexOf(arr2[i]), 1);
        element.className = arr1.join(" ");
    }
    //ToggleClass('class')
    toggleClass(sel, c1, c2) {
        this._toggleClassElements(this._getElements(sel), c1, c2);
    }
    _toggleClassElements(elements, c1, c2) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._toggleClassElement(elements[i], c1, c2);
    }
    _toggleClassElement(element, c1, c2) {
        var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
        t1 = c1 || "";
        t2 = c2 || "";
        t1Arr = t1.split(" ");
        t2Arr = t2.split(" ");
        arr = element.className.split(" ");
        if (t2Arr.length == 0) {
            allPresent = true;
            for(j = 0; j < t1Arr.length; j++)if (arr.indexOf(t1Arr[j]) == -1) allPresent = false;
            if (allPresent) this._removeClassElement(element, t1);
            else this._addClassElement(element, t1);
        } else {
            allPresent = true;
            for(j = 0; j < t1Arr.length; j++)if (arr.indexOf(t1Arr[j]) == -1) allPresent = false;
            if (allPresent) {
                this._removeClassElement(element, t1);
                this._addClassElement(element, t2);
            } else {
                this._removeClassElement(element, t2);
                this._addClassElement(element, t1);
            }
        }
    }
    // BROWSER DETECTION
    getBrowser(browser) {
        switch(browser){
            // CHROME 1+
            case "chrome":
                return navigator.userAgent.indexOf("Chrome") != -1 && !navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("CriOS") >= 0;
            // SAFARI 3.0+
            case "safari":
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !(navigator.userAgent.indexOf("CriOS") >= 0);
            // FIREFOX 1.0+
            case "firefox":
                return typeof InstallTrigger !== "undefined";
            // INTERNET EXPLORER 6-11
            case "ie":
                return !!document.documentMode;
            // EDGE 20+
            case "edge":
                return navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("Edge/") != -1 ? true : false;
            default:
                return null;
        }
    }
    getTypeDevice(system) {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        switch(system){
            case "touch":
                return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
            case "android":
                return /android/i.test(userAgent);
            case "ios":
                return typeof navigator.standalone === "boolean";
            default:
                return null;
        }
    }
}
exports.default = JSUTIL;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2nCZO":[function(require,module,exports) {
"use strict";
var _extends = Object.assign || function(a) {
    for(var b, c = 1; c < arguments.length; c++)for(var d in b = arguments[c], b)Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
    return a;
}, SwipeListener = function(a, b) {
    if (a) {
        "undefined" != typeof window && function() {
            function a(a, b) {
                b = b || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var c = document.createEvent("CustomEvent");
                return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail), c;
            }
            return "function" != typeof window.CustomEvent && void (a.prototype = window.Event.prototype, window.CustomEvent = a);
        }();
        b || (b = {}), b = _extends({}, {
            minHorizontal: 10,
            minVertical: 10,
            deltaHorizontal: 3,
            deltaVertical: 5,
            preventScroll: !1,
            lockAxis: !0,
            touch: !0,
            mouse: !0
        }, b);
        var c = [], d = !1, e = function() {
            d = !0;
        }, f = function(a) {
            d = !1, h(a);
        }, g = function(a) {
            d && (a.changedTouches = [
                {
                    clientX: a.clientX,
                    clientY: a.clientY
                }
            ], i(a));
        };
        b.mouse && (a.addEventListener("mousedown", e), a.addEventListener("mouseup", f), a.addEventListener("mousemove", g));
        var h = function(d) {
            var e = Math.abs, f = Math.max, g = Math.min;
            if (c.length) {
                for(var h = "function" == typeof TouchEvent && d instanceof TouchEvent, j = [], k = [], l = {
                    top: !1,
                    right: !1,
                    bottom: !1,
                    left: !1
                }, m = 0; m < c.length; m++)j.push(c[m].x), k.push(c[m].y);
                var i = j[0], n = j[j.length - 1], o = k[0], p = k[k.length - 1], q = {
                    x: [
                        i,
                        n
                    ],
                    y: [
                        o,
                        p
                    ]
                };
                if (1 < c.length) {
                    var r = {
                        detail: _extends({
                            touch: h,
                            target: d.target
                        }, q)
                    }, s = new CustomEvent("swiperelease", r);
                    a.dispatchEvent(s);
                }
                var t = j[0] - j[j.length - 1], u = "none";
                u = 0 < t ? "left" : "right";
                var v, w = g.apply(Math, j), x = f.apply(Math, j);
                if (e(t) >= b.minHorizontal && ("left" == u ? (v = e(w - j[j.length - 1]), v <= b.deltaHorizontal && (l.left = !0)) : "right" == u && (v = e(x - j[j.length - 1]), v <= b.deltaHorizontal && (l.right = !0))), t = k[0] - k[k.length - 1], u = "none", u = 0 < t ? "top" : "bottom", w = g.apply(Math, k), x = f.apply(Math, k), e(t) >= b.minVertical && ("top" == u ? (v = e(w - k[k.length - 1]), v <= b.deltaVertical && (l.top = !0)) : "bottom" == u && (v = e(x - k[k.length - 1]), v <= b.deltaVertical && (l.bottom = !0))), c = [], l.top || l.right || l.bottom || l.left) {
                    b.lockAxis && ((l.left || l.right) && e(i - n) > e(o - p) ? l.top = l.bottom = !1 : (l.top || l.bottom) && e(i - n) < e(o - p) && (l.left = l.right = !1));
                    var y = {
                        detail: _extends({
                            directions: l,
                            touch: h,
                            target: d.target
                        }, q)
                    }, z = new CustomEvent("swipe", y);
                    a.dispatchEvent(z);
                } else {
                    var A = new CustomEvent("swipecancel", {
                        detail: _extends({
                            touch: h,
                            target: d.target
                        }, q)
                    });
                    a.dispatchEvent(A);
                }
            }
        }, i = function(d) {
            var e = d.changedTouches[0];
            if (c.push({
                x: e.clientX,
                y: e.clientY
            }), 1 < c.length) {
                var f = c[0].x, g = c[c.length - 1].x, h = c[0].y, i = c[c.length - 1].y, j = {
                    detail: {
                        x: [
                            f,
                            g
                        ],
                        y: [
                            h,
                            i
                        ],
                        touch: "function" == typeof TouchEvent && d instanceof TouchEvent,
                        target: d.target
                    }
                }, k = new CustomEvent("swiping", j), l = !0 === b.preventScroll || "function" == typeof b.preventScroll && b.preventScroll(k);
                l && d.preventDefault(), a.dispatchEvent(k);
            }
        }, j = !1;
        try {
            var k = Object.defineProperty({}, "passive", {
                get: function() {
                    j = {
                        passive: !b.preventScroll
                    };
                }
            });
            window.addEventListener("testPassive", null, k), window.removeEventListener("testPassive", null, k);
        } catch (a1) {}
        return b.touch && (a.addEventListener("touchmove", i, j), a.addEventListener("touchend", h)), {
            off: function() {
                a.removeEventListener("touchmove", i, j), a.removeEventListener("touchend", h), a.removeEventListener("mousedown", e), a.removeEventListener("mouseup", f), a.removeEventListener("mousemove", g);
            }
        };
    }
};
"undefined" != typeof module.exports ? (module.exports = SwipeListener, module.exports.default = SwipeListener) : "function" == typeof define && define.amd ? define([], function() {
    return SwipeListener;
}) : window.SwipeListener = SwipeListener;

},{}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire94c2")

//# sourceMappingURL=index.59a40e7a.js.map
