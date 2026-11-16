(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __reflectGet = Reflect.get;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };


  (function() {
    var st = document.createElement("style");
    st.id = "zp-style";
    st.textContent = "\n.lb-row.moving { background: #ffb020; color: #2a1800; }\n.lb-row.moving .lb-rnum { background: #2a1800; color: #ffb020; }\n.lb-help { height: 700px; }\n.lb-hint2 { font: 500 26px/1.35 var(--body); color: var(--mist); }\n" + "\nhtml.zp-native, html.zp-native body, html.zp-native #app, html.zp-native .player, html.zp-native .player-stage { background: transparent !important; }\nhtml.zp-native .ambience { display: none !important; }\nhtml.lb-on .ambience { display: none; }\n.lb { background: transparent; }\n.lb-title { position: absolute; left: 70px; top: 38px; font: 700 54px/1 var(--display); }\n.lb-sub { position: absolute; left: 330px; top: 56px; font: 500 28px var(--body); color: var(--dim); max-width: 1100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.lb-panel { position: absolute; top: 130px; height: 900px; box-sizing: border-box; padding: 14px; border-radius: 30px; background: rgba(9,18,16,.97); border: 1px solid var(--glass-line); overflow: hidden; }\n.lb-cats { left: 50px; width: 500px; }\n.lb-chs { left: 570px; width: 780px; }\n.lb-side { position: absolute; left: 1370px; top: 130px; width: 500px; }\n.lb-pv { position: relative; height: 281px; border-radius: 22px; overflow: hidden; background: transparent; box-shadow: inset 0 0 0 2px rgba(255,255,255,.14); }\n.lb-pv video { position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: contain; background: #000; }\n.lb-spin { position: absolute; left: 50%; top: 50%; margin: -30px 0 0 -30px; }\n.lb-info { margin-top: 18px; box-sizing: border-box; height: 600px; border-radius: 30px; padding: 30px; background: rgba(9,18,16,.97); border: 1px solid var(--glass-line); display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }\n.lb-logo { width: 150px; height: 108px; object-fit: contain; border-radius: 16px; background: rgba(255,255,255,.06); }\n.lb-name { font: 700 40px/1.15 var(--display); }\n.lb-cat { font: 500 26px var(--body); color: var(--dim); }\n.lb-res { font: 600 24px var(--body); color: var(--accent); min-height: 30px; }\n.lb-hint { margin-top: auto; font: 500 20px/1.4 var(--body); color: var(--dim); }\n.lb-rows { display: flex; flex-direction: column; gap: 4px; }\n.lb-row { display: flex; align-items: center; gap: 16px; box-sizing: border-box; border-radius: 18px; padding: 0 18px; background: rgba(234,243,239,.05); }\n.lb-crow { height: 90px; }\n.lb-hrow { height: 78px; }\n.lb-row.sel { background: rgba(var(--accent-rgb), .22); }\n.lb-row.focus { background: var(--accent); color: #06130F; }\n.lb-ct { min-width: 0; }\n.lb-cn { font: 700 30px/1.15 var(--display); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 440px; }\n.lb-cc { font: 500 22px var(--body); opacity: .7; }\n.lb-rlogo { width: 84px; height: 56px; object-fit: contain; border-radius: 10px; background: rgba(255,255,255,.06); flex: none; }\n.lb-rname { flex: 1; min-width: 0; font: 600 28px var(--body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.lb-rnum { flex: none; min-width: 74px; text-align: center; padding: 6px 12px; border-radius: 12px; font: 700 24px var(--body); background: rgba(var(--accent-rgb), .9); color: #06130F; }\n.lb-row.focus .lb-rnum { background: #06130F; color: var(--accent); }\n.lb-pos { position: absolute; right: 30px; bottom: 12px; font: 500 20px var(--body); opacity: .6; }\n.lb-empty { padding: 40px; font: 500 28px var(--body); color: var(--dim); }\n" + "\n.menu-home .topbar { position: absolute; left: 0; right: 0; top: 0; }\n.mh-tools { margin-left: auto; display: flex; gap: 18px; }\n.mh-tool { width: 68px; height: 68px; border-radius: 50%; background: rgba(234,243,239,.1); border: 1px solid var(--glass-line); display: flex; align-items: center; justify-content: center; color: var(--mist); cursor: pointer; transition: background .2s, transform .2s; }\n.mh-tool svg { width: 34px; height: 34px; }\n.mh-tool.focus { background: var(--accent); color: #06130F; transform: scale(1.1); }\n.mh-wrap { position: absolute; left: 0; right: 0; top: 230px; display: flex; justify-content: center; align-items: center; gap: 44px; }\n.mh-card { width: 440px; height: 560px; border-radius: 48px; box-sizing: border-box; background: linear-gradient(160deg, rgba(26,48,43,.78), rgba(8,16,15,.7)); border: 1px solid var(--glass-line); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px; cursor: pointer; transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s, background .22s; }\n.mh-card.small { width: 300px; height: 420px; }\n.mh-ic svg { width: 150px; height: 150px; color: var(--accent); display: block; }\n.mh-card.small .mh-ic svg { width: 100px; height: 100px; }\n.mh-t { font: 700 56px/1.1 var(--display); text-align: center; }\n.mh-card.small .mh-t { font-size: 44px; }\n.mh-n { min-height: 32px; font: 500 26px var(--body); color: var(--dim); }\n.mh-card.focus { transform: scale(1.07); background: var(--accent); color: #06130F; box-shadow: 0 26px 80px rgba(var(--accent-rgb), .4); }\n.mh-card.focus .mh-ic svg { color: #06130F; }\n.mh-card.focus .mh-n { color: rgba(6,19,15,.7); }\n/* channel list in the player: ten rows */\n.live-list { top: 28px; max-height: 790px; padding: 22px 24px 16px; }\n.ll-head { padding: 0 6px 12px; }\n.ll-cat { font-size: 36px; }\n.ll-sub { margin-top: 2px; font-size: 18px; }\n.ll-arrow { width: 50px; height: 50px; font-size: 36px; }\n.ll-rows { gap: 3px; }\n.ll-row { height: 54px; padding: 0 18px; border-radius: 14px; gap: 14px; }\n.ll-t { font-size: 24px; }\n.ll-p { font-size: 16px; min-height: 18px; }\n.ll-logo { width: 42px; height: 42px; border-radius: 10px; }\n.ll-n { width: 40px; font-size: 20px; }\n.ll-ct { font-size: 25px; }\n.ll-foot { margin-top: 10px; font-size: 16px; }\n.ll-hint { font-size: 15px; }\n/* playback background: no default play icon, a calm gradient until the first picture */\nvideo.av-object { background: transparent; }\n.player-stage { background: radial-gradient(ellipse at 50% 45%, #10201d 0%, #050909 72%); }\n";
    (document.head || document.documentElement).appendChild(st);
  })();

  (function() {
    var st = document.createElement("style");
    st.id = "zp-style2";
    st.textContent = ".tile-rate{position:absolute;left:8px;top:8px;padding:3px 10px;border-radius:14px;background:rgba(0,0,0,.72);color:#ffd54a;font:700 22px/1.2 Inter,sans-serif;z-index:3;pointer-events:none}";
    (document.head || document.documentElement).appendChild(st);
  })();

  (function() {
    var st = document.createElement("style");
    st.id = "zp-style3";
    st.textContent = ".upd{display:flex;align-items:center;justify-content:center;background:rgba(3,8,7,.92)}.upd-card{width:1100px;box-sizing:border-box;padding:56px 64px;border-radius:40px;background:#0d1a17;border:1px solid var(--glass-line)}.upd-title{font:700 56px/1.1 var(--display);margin-bottom:22px}.upd-body{font:500 32px/1.4 var(--body);color:var(--mist)}.upd-notes{font:500 26px/1.45 var(--body);color:var(--dim);margin-top:16px;white-space:pre-line;max-height:240px;overflow:hidden}.upd-bar{display:none;height:22px;border-radius:12px;background:rgba(234,243,239,.12);margin-top:34px;overflow:hidden}.upd-bar i{display:block;height:100%;width:0;background:var(--accent);transition:width .25s linear}.upd-pct{font:600 26px var(--body);color:var(--dim);margin-top:14px;min-height:34px}.upd-btns{display:flex;gap:28px;margin-top:36px}.upd-btn{min-width:300px;text-align:center;padding:22px 34px;border-radius:22px;background:rgba(234,243,239,.1);font:700 32px var(--body)}.upd-btn.focus{background:var(--accent);color:#06130F}.lb-row{contain:layout paint}";
    (document.head || document.documentElement).appendChild(st);
  })();

  // app/js/polyfills.js
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(n, s) {
      let t = String(this);
      s = s === void 0 ? " " : String(s);
      while (t.length < n && s) t = s.slice(0, n - t.length) + t;
      return t;
    };
  }
  if (!String.prototype.padEnd) {
    String.prototype.padEnd = function(n, s) {
      let t = String(this);
      s = s === void 0 ? " " : String(s);
      while (t.length < n && s) t += s.slice(0, n - t.length);
      return t;
    };
  }
  if (!Object.entries) Object.entries = (o) => Object.keys(o).map((k) => [k, o[k]]);
  if (!Object.values) Object.values = (o) => Object.keys(o).map((k) => o[k]);
  if (!Array.prototype.includes) Array.prototype.includes = function(x) {
    return this.indexOf(x) !== -1;
  };
  if (!Array.prototype.flat) Array.prototype.flat = function() {
    return [].concat.apply([], this);
  };
  if (!Promise.prototype.finally) {
    Promise.prototype.finally = function(f) {
      const P = this.constructor;
      return this.then((v) => P.resolve(f()).then(() => v), (e) => P.resolve(f()).then(() => {
        throw e;
      }));
    };
  }

  // app/js/config.js
  var DEV = false;
  var DEV_HOST = "";
  var DEV_PLEX_URL = "";
  var VERSION = "1.3.2";

  // app/js/router.js
  var router_exports = {};
  __export(router_exports, {
    back: () => back,
    depth: () => depth,
    init: () => init,
    push: () => push,
    replace: () => replace,
    reset: () => reset,
    top: () => top
  });

  // app/js/util/log.js
  var queue = [];
  var timer = 0;
  function stringify(args) {
    return args.map((a) => {
      if (a instanceof Error) return a.stack || a.message;
      if (typeof a === "object") {
        try {
          return JSON.stringify(a);
        } catch (e) {
          return String(a);
        }
      }
      return String(a);
    }).join(" ");
  }
  function flush() {
    timer = 0;
    if (!queue.length) return;
    const body = JSON.stringify(queue.splice(0));
    try {
      fetch("http://" + DEV_HOST + "/log", { method: "POST", body, headers: { "Content-Type": "text/plain" } }).catch(() => {
      });
    } catch (e) {
    }
  }
  function emit(level, args) {
    if (!DEV || !DEV_HOST) return;
    queue.push({ t: Date.now(), level, msg: stringify(args) });
    if (!timer) timer = setTimeout(flush, 400);
  }
  var log = (...a) => {
    console.log(...a);
    emit("log", a);
  };
  var warn = (...a) => {
    console.warn(...a);
    emit("warn", a);
  };
  var error = (...a) => {
    console.error(...a);
    emit("error", a);
  };
  var perf = (...a) => emit("perf", a);
  if (DEV) {
    window.addEventListener("error", (e) => error("uncaught", e.message, (e.filename || "") + ":" + e.lineno, e.error || ""));
    window.addEventListener("unhandledrejection", (e) => error("unhandled rejection", e.reason));
  }

  // app/js/platform/tizen.js
  var isTizen = typeof window.tizen !== "undefined";
  var KEYMAP = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    13: "enter",
    10009: "back",
    8: "back",
    27: "back",
    10252: "playpause",
    32: "playpause",
    415: "play",
    19: "pause",
    413: "stop",
    417: "ff",
    412: "rw",
    427: "pageup",
    428: "pagedown",
    33: "pageup",
    34: "pagedown",
    403: "red",
    404: "green",
    405: "yellow",
    406: "blue",
    457: "info",
    10073: "info",
    10190: "prev",
    // desktop: F = favourite, P = previous channel, B = sleep timer, digits type a channel number
    70: "red",
    80: "prev",
    66: "blue",
    89: "yellow",
    71: "green",
    48: "d0",
    49: "d1",
    50: "d2",
    51: "d3",
    52: "d4",
    53: "d5",
    54: "d6",
    55: "d7",
    56: "d8",
    57: "d9",
    96: "d0",
    97: "d1",
    98: "d2",
    99: "d3",
    100: "d4",
    101: "d5",
    102: "d6",
    103: "d7",
    104: "d8",
    105: "d9",
    183: "red",
    184: "green",
    185: "yellow",
    186: "blue",
    166: "pageup",
    167: "pagedown",
    92: "pageup",
    93: "pagedown"
  };
  function actionFor(e) {
    return KEYMAP[e.keyCode] || null;
  }
  function registerKeys() {
    if (!isTizen) return;
    const keys = [
      "MediaPlayPause",
      "MediaPlay",
      "MediaPause",
      "MediaStop",
      "MediaFastForward",
      "MediaRewind",
      "ChannelUp",
      "ChannelDown",
      "ColorF0Red",
      "ColorF1Green",
      "ColorF2Yellow",
      "ColorF3Blue",
      "Info",
      "PreviousChannel",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ];
    for (const k of keys) {
      try {
        tizen.tvinputdevice.registerKey(k);
      } catch (e) {
        warn("registerKey failed", k);
      }
    }
  }
  function exitApp() {
    try {
      tizen.application.getCurrentApplication().exit();
    } catch (e) {
      window.close();
    }
  }
  function deviceInfo() {
    let model = "Browser";
    let name = "Zen Pro";
    try {
      model = webapis.productinfo.getRealModel() || webapis.productinfo.getModel();
    } catch (e) {
    }
    try {
      name = "Samsung " + (webapis.productinfo.getModel() || "TV");
    } catch (e) {
    }
    return { model, name, platform: isTizen ? "Samsung" : "Web" };
  }
  function supports4K() {
    try {
      return webapis.productinfo.isUdPanelSupported();
    } catch (e) {
      return false;
    }
  }
  function setScreenSaver(on) {
    try {
      webapis.appcommon.setScreenSaver(on ? webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON : webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF);
    } catch (e) {
    }
  }

  // app/js/input.js
  var NAV = { left: 1, right: 1, up: 1, down: 1 };
  var handler = null;
  var pending = null;
  var scheduled = false;
  var fastTimer = 0;
  var lastNavAt = 0;
  var root = document.documentElement;
  var stats = { keyAt: 0, latency: 0 };
  function setHandler(fn) {
    handler = fn;
  }
  function setFast(on) {
    if (root.classList.contains("fast") !== on) root.classList.toggle("fast", on);
  }
  function flush2() {
    if (!scheduled) return;
    scheduled = false;
    const action = pending;
    pending = null;
    if (action && handler) handler(action);
  }
  document.addEventListener("keydown", (e) => {
    const action = actionFor(e);
    if (!action) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" && e.keyCode === 8) return;
    if (tag === "INPUT" && action !== "back" && action !== "down" && action !== "up" && action !== "enter") return;
    e.preventDefault();
    stats.keyAt = performance.now();
    if (NAV[action]) {
      const now = performance.now();
      const held = e.repeat || now - lastNavAt < 140;
      lastNavAt = now;
      if (held) {
        setFast(true);
        clearTimeout(fastTimer);
        fastTimer = setTimeout(() => setFast(false), 220);
      }
      pending = action;
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(flush2);
        setTimeout(flush2, 50);
      }
      return;
    }
    if (handler) handler(action);
  }, true);
  function inject(action) {
    stats.keyAt = performance.now();
    if (NAV[action]) {
      pending = action;
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(flush2);
        setTimeout(flush2, 50);
      }
      return;
    }
    if (handler) handler(action);
  }
  document.addEventListener("keyup", () => {
    clearTimeout(fastTimer);
    fastTimer = setTimeout(() => setFast(false), 60);
  });
  function isFast() {
    return root.classList.contains("fast");
  }

  // app/js/router.js
  var stack = [];
  var root2 = null;
  var globalKey = null;
  function init(container, onGlobalKey) {
    root2 = container;
    globalKey = onGlobalKey;
    setHandler((action) => {
      const top2 = stack[stack.length - 1];
      if (top2 && top2.onKey && top2.onKey(action) === true) return;
      if (globalKey && globalKey(action) === true) return;
      if (action === "back") back();
    });
  }
  function hide(screen) {
    screen.el.classList.add("hidden");
    if (screen.onHide) screen.onHide();
  }
  function reveal(screen) {
    screen.el.classList.remove("hidden");
    if (screen.onShow) screen.onShow();
  }
  function push(screen) {
    const top2 = stack[stack.length - 1];
    if (top2) hide(top2);
    stack.push(screen);
    root2.appendChild(screen.el);
    reveal(screen);
  }
  function replace(screen) {
    const top2 = stack.pop();
    if (top2) destroy(top2);
    push(screen);
  }
  function reset(screen) {
    while (stack.length) destroy(stack.pop());
    push(screen);
  }
  function destroy(screen) {
    if (screen.onHide) screen.onHide();
    if (screen.destroy) screen.destroy();
    if (screen.el.parentNode) screen.el.parentNode.removeChild(screen.el);
  }
  function back() {
    if (stack.length <= 1) {
      exitApp();
      return;
    }
    destroy(stack.pop());
    reveal(stack[stack.length - 1]);
  }
  function depth() {
    return stack.length;
  }
  function top() {
    return stack[stack.length - 1];
  }

  // app/js/util/store.js
  var PREFIX = "ss.";
  function get(key, fallback) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }
  function set(key, value) {
    try {
      if (value === void 0) localStorage.removeItem(PREFIX + key);
      else localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
    }
  }

  // app/js/util/format.js
  function duration(ms2) {
    if (!ms2) return "";
    const min = Math.round(ms2 / 6e4);
    if (min < 60) return min + "m";
    return Math.floor(min / 60) + "h " + min % 60 + "m";
  }
  function clock(ms2) {
    const s = Math.max(0, Math.floor(ms2 / 1e3));
    const hh = Math.floor(s / 3600);
    const mm = Math.floor(s % 3600 / 60);
    const ss = s % 60;
    const pad2 = (n) => (n < 10 ? "0" : "") + n;
    return (hh ? hh + ":" + pad2(mm) : mm) + ":" + pad2(ss);
  }
  function episodeLabel(item) {
    if (item.type !== "episode") return "";
    return "S" + (item.parentIndex || 0) + " \xB7 E" + (item.index || 0);
  }
  function metaLine(item) {
    const parts = [];
    if (item.type === "episode") {
      parts.push(episodeLabel(item));
      if (item.originallyAvailableAt) parts.push(item.originallyAvailableAt.slice(0, 4));
    } else if (item.year) {
      parts.push(item.year);
    }
    if (item.contentRating) parts.push(item.contentRating);
    if (item.type === "show" && item.childCount) parts.push(item.childCount + (item.childCount === 1 ? " season" : " seasons"));
    else if (item.duration) parts.push(duration(item.duration));
    if (item.audienceRating) parts.push("\u2605 " + Number(item.audienceRating).toFixed(1));
    return parts.join("  \xB7  ");
  }
  function progress(item) {
    if (!item.viewOffset || !item.duration) return 0;
    return Math.min(1, item.viewOffset / item.duration);
  }
  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === "x" ? r : r & 3 | 8).toString(16);
    });
  }

  // app/js/plex/client.js
  var PRODUCT = "Zen Pro";
  var clientId = get("clientId");
  if (!clientId) {
    clientId = uuid();
    set("clientId", clientId);
  }
  var device = deviceInfo();
  function identity() {
    return {
      "X-Plex-Product": PRODUCT,
      "X-Plex-Version": VERSION,
      "X-Plex-Client-Identifier": clientId,
      "X-Plex-Platform": device.platform,
      "X-Plex-Platform-Version": "6.5",
      "X-Plex-Device": device.model,
      "X-Plex-Device-Name": device.name,
      "X-Plex-Model": device.model
    };
  }
  function query(params) {
    const parts = [];
    for (const k in params) {
      const v = params[k];
      if (v === void 0 || v === null || v === "") continue;
      parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
    return parts.join("&");
  }
  function withQuery(url, params) {
    const q = query(params);
    if (!q) return url;
    return url + (url.indexOf("?") === -1 ? "?" : "&") + q;
  }
  var HttpError = class extends Error {
    constructor(status, url) {
      super("HTTP " + status + " from " + url.split("?")[0].replace(/^https?:\/\/[^/]+/, ""));
      this.status = status;
    }
  };
  function request(_0) {
    return __async(this, arguments, function* (url, { method = "GET", token, params, timeout = 15e3, body, raw } = {}) {
      const headers = Object.assign({ Accept: "application/json" }, identity());
      if (token) headers["X-Plex-Token"] = token;
      const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer4 = ctrl ? setTimeout(() => ctrl.abort(), timeout) : 0;
      const full = withQuery(url, params);
      try {
        const res = yield fetch(full, { method, headers, body, signal: ctrl ? ctrl.signal : void 0 });
        if (!res.ok) throw new HttpError(res.status, full);
        if (raw) return res;
        const text = yield res.text();
        return text ? JSON.parse(text) : {};
      } finally {
        clearTimeout(timer4);
      }
    });
  }

  // app/js/plex/server.js
  var SUPPORTED_HUB_TYPES = { movie: 1, show: 1, episode: 1, season: 1, mixed: 1, clip: 1 };
  var Server = class {
    constructor({ uri, token, name, id }) {
      this.uri = uri;
      this.token = token;
      this.name = name;
      this.id = id;
      this.cache = /* @__PURE__ */ new Map();
    }
    get(_0, _1) {
      return __async(this, arguments, function* (path, params, { maxAge = 0 } = {}) {
        const key = withQuery(path, params);
        if (maxAge) {
          const hit = this.cache.get(key);
          if (hit && Date.now() - hit.t < maxAge) return hit.data;
        }
        const json = yield request(this.uri + path, { token: this.token, params });
        const data = json.MediaContainer || json;
        if (maxAge) this.cache.set(key, { t: Date.now(), data });
        return data;
      });
    }
    invalidate() {
      this.cache.clear();
    }
    // Posters/backdrops resized (and optionally blurred) by the server, so the TV
    // only ever downloads and decodes pixels it actually shows.
    image(path, width, height, { blur = 0, quality = 85, format = "jpeg" } = {}) {
      if (!path) return "";
      return withQuery(this.uri + "/photo/:/transcode", {
        width,
        height,
        minSize: 1,
        upscale: 1,
        blur: blur || void 0,
        quality,
        format,
        url: path,
        "X-Plex-Token": this.token
      });
    }
    url(path, params) {
      return withQuery(this.uri + path, Object.assign({ "X-Plex-Token": this.token }, params));
    }
    sections() {
      return __async(this, null, function* () {
        const mc = yield this.get("/library/sections", null, { maxAge: 3e5 });
        return (mc.Directory || []).filter((d) => d.type === "movie" || d.type === "show");
      });
    }
    hubs() {
      return __async(this, null, function* () {
        const mc = yield this.get("/hubs", { count: 24, includeExternalMedia: 0 });
        return (mc.Hub || []).filter((h2) => h2.size > 0 && SUPPORTED_HUB_TYPES[h2.type] && h2.Metadata);
      });
    }
    sectionHubs(sectionId) {
      return __async(this, null, function* () {
        const mc = yield this.get("/hubs/sections/" + sectionId, { count: 24 });
        return (mc.Hub || []).filter((h2) => h2.size > 0 && SUPPORTED_HUB_TYPES[h2.type] && h2.Metadata);
      });
    }
    items(_0, _1, _2) {
      return __async(this, arguments, function* (sectionId, start2, size, { sort = "titleSort", type } = {}) {
        const mc = yield this.get("/library/sections/" + sectionId + "/all", {
          sort,
          type,
          "X-Plex-Container-Start": start2,
          "X-Plex-Container-Size": size,
          excludeFields: "summary,tagline"
        });
        return { total: mc.totalSize != null ? mc.totalSize : mc.size, items: mc.Metadata || [] };
      });
    }
    metadata(ratingKey) {
      return __async(this, null, function* () {
        const mc = yield this.get("/library/metadata/" + ratingKey, { includeOnDeck: 1, includeExtras: 0 });
        const item = (mc.Metadata || [])[0];
        if (item && mc.OnDeck && mc.OnDeck.Metadata) item.onDeck = mc.OnDeck.Metadata[0];
        return item;
      });
    }
    children(ratingKey) {
      return __async(this, null, function* () {
        const mc = yield this.get("/library/metadata/" + ratingKey + "/children", { excludeAllLeaves: 1 });
        return mc.Metadata || [];
      });
    }
    search(q) {
      return __async(this, null, function* () {
        const mc = yield this.get("/hubs/search", { query: q, limit: 30, includeCollections: 0 });
        return (mc.Hub || []).filter((h2) => h2.size > 0 && SUPPORTED_HUB_TYPES[h2.type] && h2.Metadata);
      });
    }
    timeline(params) {
      return request(this.uri + "/:/timeline", { token: this.token, params, timeout: 8e3 }).catch(() => {
      });
    }
    scrobble(ratingKey) {
      return request(this.uri + "/:/scrobble", {
        token: this.token,
        params: { identifier: "com.plexapp.plugins.library", key: ratingKey }
      });
    }
    unscrobble(ratingKey) {
      return request(this.uri + "/:/unscrobble", {
        token: this.token,
        params: { identifier: "com.plexapp.plugins.library", key: ratingKey }
      });
    }
    // HLS URL for content the TV can't direct play. Video is passed through when
    // possible; only the audio (e.g. DTS) or container gets converted.
    transcodeUrl(item, { session: session2, offsetMs = 0, mediaIndex = 0, maxBitrate = 4e4, resolution = "3840x2160", audioStreamID, subtitleStreamID } = {}) {
      const extra = [
        "add-transcode-target(type=videoProfile&context=streaming&protocol=hls&container=mpegts&videoCodec=h264,hevc&audioCodec=aac,ac3,eac3)",
        "add-direct-play-profile(type=videoProfile&container=mp4,mkv&videoCodec=h264,hevc&audioCodec=aac,ac3,eac3)"
      ].join("+");
      return withQuery(this.uri + "/video/:/transcode/universal/start.m3u8", Object.assign({}, identity(), {
        path: "/library/metadata/" + item.ratingKey,
        mediaIndex,
        partIndex: 0,
        protocol: "hls",
        fastSeek: 1,
        directPlay: 0,
        directStream: 1,
        directStreamAudio: 1,
        offset: Math.floor(offsetMs / 1e3),
        videoQuality: 100,
        videoResolution: resolution,
        maxVideoBitrate: maxBitrate,
        subtitles: subtitleStreamID ? "burn" : "none",
        subtitleSize: 100,
        audioBoost: 100,
        location: "lan",
        copyts: 1,
        session: session2,
        "X-Plex-Session-Identifier": session2,
        "X-Plex-Client-Profile-Extra": extra,
        "X-Plex-Token": this.token
      }));
    }
    // Selected audio/subtitle streams are stored per part on the server.
    selectStreams(partId, { audioStreamID, subtitleStreamID }) {
      return request(this.uri + "/library/parts/" + partId, {
        method: "PUT",
        token: this.token,
        params: { audioStreamID, subtitleStreamID, allParts: 1 }
      }).catch(() => {
      });
    }
    stopTranscode(session2) {
      return request(this.uri + "/video/:/transcode/universal/stop", {
        token: this.token,
        params: { session: session2 },
        timeout: 5e3
      }).catch(() => {
      });
    }
  };

  // app/js/plex/auth.js
  var TV = "https://plex.tv/api/v2";
  function getServers(token) {
    return __async(this, null, function* () {
      const resources = yield request(TV + "/resources", {
        token,
        params: { includeHttps: 1, includeRelay: 1, includeIPv6: 0 }
      });
      return resources.filter((r) => (r.provides || "").indexOf("server") !== -1);
    });
  }
  function probe(uri, token, timeout) {
    const started = Date.now();
    return request(uri + "/identity", { token, timeout }).then(() => ({ uri, ms: Date.now() - started }));
  }
  function candidateUris(resource) {
    const conns = resource.connections || [];
    const local = conns.filter((c) => c.local && !c.relay);
    const remote = conns.filter((c) => !c.local && !c.relay);
    const relay = conns.filter((c) => c.relay);
    const tiers = [];
    if (resource.httpsRequired !== true) {
      tiers.push(local.map((c) => "http://" + c.address + ":" + c.port));
    }
    tiers.push(local.map((c) => c.uri));
    tiers.push(remote.map((c) => c.uri));
    tiers.push(relay.map((c) => c.uri));
    return tiers.filter((t) => t.length);
  }
  function firstSuccess(promises) {
    return new Promise((resolve, reject) => {
      let pending2 = promises.length;
      if (!pending2) reject(new Error("no candidates"));
      promises.forEach((p) => p.then(resolve, () => {
        if (--pending2 === 0) reject(new Error("all failed"));
      }));
    });
  }
  function connect(resource) {
    return __async(this, null, function* () {
      const token = resource.accessToken;
      for (const tier of candidateUris(resource)) {
        try {
          const hit = yield firstSuccess(tier.map((uri) => probe(uri, token, 4e3)));
          log("connected to", resource.name, "via", hit.uri, hit.ms + "ms");
          return hit.uri;
        } catch (e) {
          warn("connection tier failed", tier.join(", "));
        }
      }
      throw new Error("Could not reach " + resource.name);
    });
  }

  // app/js/util/art.js
  function hash(s) {
    let n = 7;
    for (let i = 0; i < s.length; i++) n = n * 31 + s.charCodeAt(i) >>> 0;
    return n;
  }
  function hex(h2, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n) => {
      const k = (n + h2 / 30) % 12;
      const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * c).toString(16).padStart(2, "0");
    };
    return f(0) + f(8) + f(4);
  }
  function posterSvg(path, w, h2) {
    const parts = path.split(":");
    const hue = Number(parts[1]) || 0;
    const raw = parts.slice(2).join(":");
    const nl = raw.indexOf("\n");
    const title = nl >= 0 ? raw.slice(0, nl) : raw;
    const sub = nl >= 0 ? raw.slice(nl + 1) : "";
    const esc = (s2) => s2.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const words = title.split(" ");
    const lines = [];
    let cur = "";
    words.forEach((wd) => {
      if ((cur + " " + wd).trim().length > 12 && cur) {
        lines.push(cur);
        cur = wd;
      } else cur = (cur + " " + wd).trim();
    });
    if (cur) lines.push(cur);
    const fs = Math.round(Math.min(w / 9, h2 / 7));
    const lh = fs * 1.15;
    const block = lines.length * lh + (sub ? fs * 0.9 : 0);
    const y0 = h2 / 2 - block / 2 + fs * 0.85;
    const text = lines.map((l, i) => '<text x="50%" y="' + (y0 + i * lh) + '" font-size="' + fs + '" font-family="Arial,sans-serif" font-weight="700" fill="#fff" fill-opacity=".95" text-anchor="middle">' + esc(l) + "</text>").join("") + (sub ? '<text x="50%" y="' + (y0 + lines.length * lh + fs * 0.1) + '" font-size="' + Math.round(fs * 0.62) + '" font-family="Arial,sans-serif" font-weight="600" fill="#fff" fill-opacity=".62" text-anchor="middle">' + esc(sub) + "</text>" : "");
    const s = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h2 + '" viewBox="0 0 ' + w + " " + h2 + '"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#' + hex(hue, 52, 34) + '"/><stop offset="1" stop-color="#' + hex(hue + 40, 48, 11) + '"/></linearGradient><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="' + w * 0.88 + '" cy="' + h2 * 0.1 + '" r="' + w * 0.5 + '" fill="#fff" fill-opacity=".06"/><circle cx="' + w * 0.05 + '" cy="' + h2 * 0.98 + '" r="' + w * 0.42 + '" fill="#000" fill-opacity=".14"/><rect width="100%" height="' + h2 * 0.45 + '" fill="url(#s)"/><rect x="' + w * 0.36 + '" y="' + h2 * 0.07 + '" width="' + w * 0.28 + '" height="' + Math.max(3, h2 * 0.012) + '" rx="' + h2 * 6e-3 + '" fill="#fff" fill-opacity=".5"/>' + text + "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
  }

  // app/js/iptv/order.js
  var word = (list) => new RegExp("(^|[^a-z0-9])(" + list + ")([^a-z0-9]|$)", "i");
  var LANGUAGES = [
    // Arabic: script, the AR/ARA tag, Arab countries and well-known Arabic networks
    new RegExp("[\\u0600-\\u06FF]|" + word("ar|ara|arab|arabic|arabe|ksa|uae|mena|maghreb|gulf|khaleej|mbc|rotana|osn|bein\\s?ar\\w*|alger\\w*|algeri\\w*|maroc\\w*|morocc\\w*|tunis\\w*|egypt\\w*|egypte|saudi\\w*|iraq\\w*|syri\\w*|leban\\w*|jordan\\w*|qatar\\w*|emirat\\w*|kuwait\\w*|oman|bahrain|yemen|libya\\w*|sudan|palestin\\w*|dz|ma|tn|eg|sa|ae|iq|sy|lb|jo|qa|kw").source, "i"),
    word("fr|fra|fre|french|france|francais|fran\xE7ais|quebec|rmc|bein\\s?fr\\w*"),
    word("es|esp|spa|spanish|spain|espa\\w*|espa\xF1\\w*|latino\\w*|latam|mexic\\w*|argentin\\w*|colombi\\w*|chile\\w*|peru|castellano|bein\\s?es\\w*")
  ];
  var GENRES = [
    /(^|[^a-z0-9])(kid|kids|child\w*|enfant\w*|junior|cartoon\w*|anim\w*|nino\w*|niño\w*|infantil\w*|toon\w*|disney|nick\w*|baby)([^a-z0-9]|$)|[\u0627\u0623]\u0637\u0641\u0627\u0644|\u0637\u0641\u0644|\u0643\u0631\u062a\u0648\u0646|[\u0627\u0623]\u0648\u0644\u0627\u062f/i,
    /(^|[^a-z0-9])(general\w*|g[ée]n[ée]ral\w*|variet\w*|entertain\w*|divert\w*|national\w*|nacional\w*|public\w*|fta|free)([^a-z0-9]|$)|\u0639\u0627\u0645|\u0645\u0646\u0648\u0639|\u0645\u062a\u0646\u0648\u0639|\u0648\u0637\u0646\u064a|\u062a\u0631\u0641\u064a\u0647/i,
    /(^|[^a-z0-9])(doc|docs|docu\w*|document\w*|nature|discovery|histor\w*|geograph\w*|wild|science)([^a-z0-9]|$)|\u0648\u062b\u0627\u0626\u0642|\u062b\u0642\u0627\u0641/i,
    /(^|[^a-z0-9])(sport\w*|bein|foot\w*|soccer|futbol|f[úu]tbol|deport\w*|nba|nfl|ufc|racing|f1|liga|ligue\s?1)([^a-z0-9]|$)|\u0631\u064a\u0627\u0636|\u0643\u0631\u0629|\u062f\u0648\u0631\u064a/i,
    /(^|[^a-z0-9])(movie\w*|cinema\w*|cin[ée]\w*|cine\w*|film\w*|pel[íi]cul\w*|peli\w*|vod)([^a-z0-9]|$)|[\u0627\u0623]\u0641\u0644\u0627\u0645|\u0633\u064a\u0646\u0645\u0627/i
  ];
  function languageRank(title) {
    const t = String(title || "");
    for (let i = 0; i < LANGUAGES.length; i++) if (LANGUAGES[i].test(t)) return i;
    return LANGUAGES.length;
  }
  function genreRank(title) {
    const t = String(title || "");
    for (let i = 0; i < GENRES.length; i++) if (GENRES[i].test(t)) return i;
    return GENRES.length;
  }
  function compareCategories(a, b) {
    return languageRank(a) - languageRank(b) || genreRank(a) - genreRank(b) || String(a).localeCompare(String(b));
  }

  // app/js/iptv/adult.js
  var ADULT = new RegExp("(^|[^a-z0-9])(xxx|adult\\w*|porn\\w*|erotic\\w*|sexy?|nsfw|\\+18|18\\+)([^a-z0-9]|$)|\\u0644\\u0644\\u0643\\u0628\\u0627\\u0631|\\u0627\\u0628\\u0627\\u062d\\u064a|\\u0625\\u0628\\u0627\\u062d\\u064a|\\u0628\\u0627\\u0644\\u063a", "i");
  var unlocked = false;
  var isAdult = (title) => ADULT.test(String(title || ""));
  var adultMode = () => get("adultMode", "show");
  var adultHidden = () => {
    const m = adultMode();
    return m === "hide" || m === "pin" && !unlocked;
  };
  var unlockAdult = () => {
    unlocked = true;
  };
  var lockAdult = () => {
    unlocked = false;
  };
  var checkPin = (pin) => String(pin) === String(get("pin", ""));

  // app/js/iptv/base.js
  var CONTAINERS = { mkv: "mkv", mp4: "mp4", m4v: "m4v", avi: "avi", ts: "mpegts", mpegts: "mpegts", m3u8: "mpegts", mov: "mov", webm: "webm" };
  function mediaFor(url, ext, durationMs, candidates) {
    const c = CONTAINERS[String(ext || "").toLowerCase()] || "mp4";
    const first = candidates && candidates[0];
    return [{
      id: 1,
      container: c,
      videoCodec: "h264",
      videoResolution: "",
      duration: durationMs || 0,
      Part: [{ id: 1, key: first ? first.key : url, format: first && first.format, label: first && first.label, alt: candidates ? candidates.slice(1) : void 0, container: c, Stream: [{ id: 1, streamType: 2, codec: "aac", selected: true, displayTitle: "Audio", language: "" }] }]
    }];
  }
  function placeholder(title, hue) {
    return "art:" + (hue == null ? hash(String(title)) % 360 : hue) + ":" + title;
  }
  var LANG_HUE = [158, 215, 24, 285];
  function bareArt(title) {
    return "art:" + hash(String(title)) % 360 + ":";
  }
  function yearOf(text) {
    const m = String(text || "").match(/(19|20)\d\d/);
    return m ? Number(m[0]) : void 0;
  }
  var SORTS = {
    titleSort: (a, b) => String(a.title).localeCompare(String(b.title)),
    "addedAt:desc": (a, b) => (b.addedAt || 0) - (a.addedAt || 0),
    "originallyAvailableAt:desc": (a, b) => (b.year || 0) - (a.year || 0),
    "audienceRating:desc": (a, b) => (b.audienceRating || 0) - (a.audienceRating || 0)
  };
  function sortItems(list, sort) {
    const cmp = SORTS[sort];
    return cmp ? list.slice().sort(cmp) : list.slice();
  }
  function hub(id, title, type, list) {
    return { hubIdentifier: id, title, type, size: list.length, Metadata: list };
  }
  var IptvServer = class extends Server {
    constructor(saved2, kind) {
      super({ uri: saved2.uri || "", token: "", name: saved2.name, id: "manual" });
      this.kind = kind;
      this.saved = saved2;
      this.fixed = true;
      this.noTranscode = true;
      this.mem = /* @__PURE__ */ new Map();
      this.lists = {};
    }
    // Memoised async loader; a failed load is not remembered.
    once(key, fn) {
      if (!this.lists[key]) this.lists[key] = fn().catch((e) => {
        delete this.lists[key];
        throw e;
      });
      return this.lists[key];
    }
    get(path) {
      return __async(this, null, function* () {
        if (path === "/identity") return {};
        const m = path.match(/^\/library\/sections\/([^/]+)\/firstCharacter$/);
        if (m) return { Directory: yield this.letters(m[1]) };
        return {};
      });
    }
    // Opening a section lists its categories ("bouquets"); a "kind:id" key lists what is inside one.
    // `raw(kind)` (provided by each server) returns every item of a kind, each with catId/cat.
    // Hide (or lock) adult bouquets' contents while the lock is on.
    visible(list) {
      return adultHidden() ? list.filter((i) => !isAdult(i.cat)) : list;
    }
    scope(sectionId) {
      return __async(this, null, function* () {
        const parts = String(sectionId).split(":");
        const kind = parts[0];
        const cat = parts.slice(1).join(":");
        const all = yield this.raw(kind);
        if (!cat) return this.categoryItems(kind, adultMode() === "hide" ? this.visible(all) : all);
        const list = this.visible(all);
        if (cat === "fav") return list.filter((i) => this.isFav(i.ratingKey));
        if (cat === "all") return list;
        const inCat = list.filter((i) => String(i.catId) === cat);
        return kind === "live" ? applyChannelOrder(this, cat, inCat) : inCat;
      });
    }
    categoryItems(kind, list) {
      const groups = {};
      let seen = 0;
      list.forEach((i) => {
        const k = String(i.catId);
        if (!groups[k]) groups[k] = { id: k, title: i.cat || "Other", count: 0, pos: i.catPos != null ? i.catPos : 1e9, seen: seen++ };
        groups[k].count += 1;
      });
      const items = Object.keys(groups).sort((a, b) => groups[a].pos - groups[b].pos || groups[a].seen - groups[b].seen).map((k) => this.categoryItem(kind, groups[k].id, groups[k].title, groups[k].count));
      return this.finishCategories(kind, items, list);
    }
    finishCategories(kind, items, list) {
      const shown = this.visible(list);
      items.unshift(this.categoryItem(kind, "all", "All", shown.length));
      if (kind === "live") {
        const n = shown.filter((i) => this.isFav(i.ratingKey)).length;
        if (n) items.splice(1, 0, this.categoryItem(kind, "fav", "Favorites", n));
      }
      return items;
    }
    categoryItem(kind, id, title, count) {
      const sec = this.sectionInfo(kind);
      const locked = adultMode() === "pin" && adultHidden() && isAdult(title);
      return {
        ratingKey: "cat:" + kind + ":" + id,
        type: "category",
        title,
        titleSort: title,
        locked,
        thumb: placeholder(title + (locked ? "\nLocked" : count == null ? "" : "\n" + count + " " + (sec.noun === "channels" ? count === 1 ? "channel" : "channels" : count === 1 ? "title" : "titles")), id === "all" ? 190 : id === "fav" ? 44 : LANG_HUE[languageRank(title)] + hash(title) % 16 - 8),
        art: "",
        sectionKey: kind + ":" + id,
        sectionType: sec.type,
        sectionTitle: sec.title,
        noun: sec.noun,
        count
      };
    }
    sectionInfo(kind) {
      return kind === "live" ? { type: "movie", title: "Live TV", noun: "channels" } : kind === "series" ? { type: "show", title: "Series", noun: "series" } : { type: "movie", title: "Movies", noun: "movies" };
    }
    letters(sectionId) {
      return __async(this, null, function* () {
        const counts = {};
        const scoped = yield this.scope(sectionId);
        if (scoped.length && scoped[0].type === "category") return [];
        scoped.forEach((i) => {
          const c = String(i.title || "#").trim()[0];
          const k = c ? c.toUpperCase() : "#";
          counts[k] = (counts[k] || 0) + 1;
        });
        return Object.keys(counts).sort().map((c) => ({ title: c, size: counts[c] }));
      });
    }
    items(_0, _1, _2) {
      return __async(this, arguments, function* (sectionId, start2, size, { sort = "server" } = {}) {
        const scoped = yield this.scope(sectionId);
        const list = scoped.length && scoped[0].type === "category" ? scoped : sortItems(scoped, sort);
        return { total: list.length, items: list.slice(start2, start2 + size).map((i) => this.decorate(i)) };
      });
    }
    remember(list) {
      list.forEach((i) => this.mem.set(i.ratingKey, i));
      return list;
    }
    // --- last channel watched, to come back to it ---------------------------------
    rememberLast(item) {
      if (!item || !item.live) return;
      const slim = { ratingKey: item.ratingKey, type: "movie", live: true, title: item.title, thumb: item.thumb, thumbBare: item.thumbBare, logo: item.logo, cat: item.cat, catId: item.catId };
      set(this.favKey().replace("fav.", "last."), slim);
    }
    lastLive() {
      return get(this.favKey().replace("fav.", "last."), null);
    }
    // --- favourite channels (kept on this device, per provider account) -----------
    favKey() {
      return "fav." + (this.saved.uri || "") + "|" + (this.saved.user || this.saved.mac || "");
    }
    favSet() {
      if (!this._favs) this._favs = new Set(get(this.favKey(), []));
      return this._favs;
    }
    isFav(key) {
      return this.favSet().has(key);
    }
    // Returns true when the channel is a favourite afterwards.
    toggleFav(item) {
      const set2 = this.favSet();
      const on = !set2.has(item.ratingKey);
      if (on) set2.add(item.ratingKey);
      else set2.delete(item.ratingKey);
      set(this.favKey(), Array.from(set2));
      this.favRev = (this.favRev || 0) + 1;
      return on;
    }
    // --- local watch progress (these servers have no "continue watching") -------
    progress() {
      return get("iptvProgress", {});
    }
    decorate(item) {
      if (item && item.live) {
        const f = this.isFav(item.ratingKey);
        return f === !!item.fav ? item : Object.assign({}, item, { fav: f });
      }
      if (!item) return item;
      const p = this.progress()[item.ratingKey];
      if (!p) return item;
      const out = Object.assign({}, item);
      if (p.done) out.viewCount = 1;
      else if (p.t > 1e4) out.viewOffset = p.t;
      return out;
    }
    timeline(params) {
      const key = params && params.ratingKey;
      const item = key && this.mem.get(key);
      if (item && !item.live && params.state !== "buffering") {
        const all = this.progress();
        const near = params.duration && params.time > params.duration - 6e4;
        all[key] = { t: Number(params.time) || 0, d: Number(params.duration) || 0, at: Date.now(), done: !!near, item };
        const keep = Object.keys(all).sort((a, b) => all[b].at - all[a].at).slice(0, 40);
        const trimmed = {};
        keep.forEach((k) => {
          trimmed[k] = all[k];
        });
        set("iptvProgress", trimmed);
      }
      return Promise.resolve();
    }
    scrobble(key) {
      const all = this.progress();
      const p = all[key] || { t: 0, d: 0, at: Date.now(), item: this.mem.get(key) };
      p.done = true;
      p.at = Date.now();
      all[key] = p;
      set("iptvProgress", all);
      return Promise.resolve();
    }
    unscrobble(key) {
      const all = this.progress();
      delete all[key];
      set("iptvProgress", all);
      return Promise.resolve();
    }
    continueRow() {
      const all = this.progress();
      const list = Object.keys(all).filter((k) => !all[k].done && all[k].item && all[k].t > 1e4).sort((a, b) => all[b].at - all[a].at).slice(0, 20).map((k) => this.decorate(all[k].item));
      return list.length ? [hub("home.continue", "Continue Watching", "mixed", list)] : [];
    }
    // Fallback for items opened straight from "Continue Watching".
    stored(key) {
      const p = this.progress()[key];
      return p && p.item;
    }
    image(path, w, h2) {
      if (!path) return "";
      if (path.indexOf("art:") === 0) return posterSvg(path, w, h2);
      if (path.indexOf("//") === 0) path = "http:" + path;
      path = String(path).replace(/ /g, "%20");
      return /^https?:/i.test(path) ? path : "";
    }
    epg() {
      return Promise.resolve(null);
    }
    // now/next programme, where the provider has a guide
    url(path) {
      return path;
    }
    transcodeUrl() {
      return "";
    }
    selectStreams() {
      return Promise.resolve();
    }
    stopTranscode() {
      return Promise.resolve();
    }
  };

  // app/js/iptv/http.js
  var isElectron = typeof navigator !== "undefined" && /Electron[/]/.test(navigator.userAgent);
  var isAndroid = typeof window !== "undefined" && !!window.ZenAndroid;
  function proxyBase() {
    if (isElectron) return "";
    if (isAndroid) {
      try {
        return String(window.ZenAndroid.proxyBase());
      } catch (e) {
        return "";
      }
    }
    const bridge = get("bridge");
    if (bridge) return String(bridge).replace(/\/+$/, "");
    if (!isTizen && /^https?:$/.test(location.protocol) && /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return location.origin;
    return "";
  }
  function qs(params) {
    return Object.keys(params).filter((k) => params[k] !== void 0 && params[k] !== null).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])).join("&");
  }
  function getText(url, timeoutMs) {
    return __async(this, null, function* () {
      const proxy = proxyBase();
      const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer4 = setTimeout(() => ctl && ctl.abort(), timeoutMs || 6e4);
      try {
        const target = proxy ? proxy + "/proxy?url=" + encodeURIComponent(url) : url;
        let res;
        try {
          res = yield fetch(target, { signal: ctl ? ctl.signal : void 0 });
        } catch (e) {
          throw new Error("Can't reach the server.");
        }
        if (!res.ok) throw new Error("HTTP " + res.status);
        return yield res.text();
      } finally {
        clearTimeout(timer4);
      }
    });
  }
  function getJson(_0) {
    return __async(this, arguments, function* (url, { headers = {}, timeout = 2e4 } = {}) {
      const proxy = proxyBase();
      const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer4 = setTimeout(() => ctl && ctl.abort(), timeout);
      try {
        let target = url;
        let hdr = headers;
        if (proxy) {
          target = proxy + "/proxy?url=" + encodeURIComponent(url);
          hdr = {};
          Object.keys(headers).forEach((k) => {
            hdr["X-Fwd-" + k] = headers[k];
          });
        } else if (isElectron) {
          hdr = {};
          Object.keys(headers).forEach((k) => {
            hdr["X-Fwd-" + k] = headers[k];
          });
        }
        let res;
        try {
          res = yield fetch(target, { headers: hdr, signal: ctl ? ctl.signal : void 0 });
        } catch (e) {
          throw new Error("Can't reach the server. Check the address and your network.");
        }
        if (!res.ok) {
          const e = new Error("The server answered HTTP " + res.status);
          e.status = res.status;
          throw e;
        }
        const text = yield res.text();
        try {
          return JSON.parse(text);
        } catch (e) {
          throw new Error("The server did not answer with data. Is the address right?");
        }
      } finally {
        clearTimeout(timer4);
      }
    });
  }

  // app/js/iptv/xtream.js
  function normalizeBase(text) {
    let a = String(text || "").trim().replace(/\s+/g, "");
    if (!a) return "";
    if (!/^https?:\/\//i.test(a)) a = "http://" + a;
    return a.replace(/\/(player_api|get|panel_api)\.php.*$/i, "").replace(/\/+$/, "");
  }
  function checkXtream(_0) {
    return __async(this, arguments, function* ({ uri, user, pass }) {
      let j;
      try {
        j = yield getJson(uri + "/player_api.php?" + qs({ username: user, password: pass }), { timeout: 12e3 });
      } catch (e) {
        if (e && e.status === 404) throw new Error("HTTP 404: the panel was not found at this address. Type only the host and port, like  provider.com:8080  (no path).");
        throw e;
      }
      const info = j && j.user_info;
      if (!info) throw new Error("This does not look like an Xtream server.");
      if (Number(info.auth) === 0) throw new Error("Wrong username or password.");
      if (info.status && info.status !== "Active") throw new Error("The account is " + String(info.status).toLowerCase() + ".");
      const host = uri.replace(/^https?:\/\//i, "");
      const formats = Array.isArray(info.allowed_output_formats) ? info.allowed_output_formats.map((f) => String(f).toLowerCase()) : [];
      return { name: j.server_info && j.server_info.url || host, formats };
    });
  }
  var num = (v) => {
    const n = Number(v);
    return isFinite(n) ? n : 0;
  };
  var ratingOf = (s) => {
    const r = Number(s && s.rating);
    if (r > 0) return Math.round(Math.min(r, 10) * 10) / 10;
    const n = Number(s && s.rating_5based);
    return n > 0 ? Math.round(n * 2 * 10) / 10 : void 0;
  };
  var stars = (v) => {
    const n = num(v);
    return n ? Math.round(n * 2 * 10) / 10 : void 0;
  };
  var XtreamServer = class extends IptvServer {
    constructor(saved2) {
      super(saved2, "xtream");
      this.base = saved2.uri;
      this.user = saved2.user;
      this.pass = saved2.pass;
      this.liveExt = saved2.liveFirst || "ts";
      this.formats = saved2.formats || [];
      this.seriesInfo = {};
    }
    api(action, params) {
      return getJson(this.base + "/player_api.php?" + qs(Object.assign({ username: this.user, password: this.pass, action }, params)), { timeout: 6e4 });
    }
    streamUrl(kind, id, ext) {
      return this.base + "/" + kind + "/" + encodeURIComponent(this.user) + "/" + encodeURIComponent(this.pass) + "/" + id + "." + ext;
    }
    // Providers differ: some only serve .ts, some only .m3u8, some want no extension. Try them in order.
    liveCandidates(id) {
      const u = encodeURIComponent(this.user);
      const p = encodeURIComponent(this.pass);
      const all = [
        { fmt: "ts", need: "ts", key: this.base + "/live/" + u + "/" + p + "/" + id + ".ts", format: "ts", label: "ts" },
        { fmt: "m3u8", need: "m3u8", key: this.base + "/live/" + u + "/" + p + "/" + id + ".m3u8", format: "hls", label: "m3u8" },
        { fmt: "plain", need: "ts", key: this.base + "/" + u + "/" + p + "/" + id, format: "ts", label: "plain" }
      ];
      const rank = (c) => {
        const wanted = c.fmt === (get("liveFormat") || this.liveExt) ? 0 : 1;
        const allowed = !this.formats.length || this.formats.indexOf(c.need) !== -1 ? 0 : 2;
        return allowed + wanted;
      };
      return all.map((c, i) => ({ c, i })).sort((a, b) => rank(a.c) - rank(b.c) || a.i - b.i).map((x) => x.c);
    }
    // A logo address as the provider gives it: absolute, protocol-relative ("//host/x.png") or relative to the panel.
    logoOf(u) {
      const s = String(u || "").trim();
      if (!s || s === "null") return "";
      if (/^https?:\/\//i.test(s)) return s;
      if (/^\/\//.test(s)) return this.base.replace(/^(https?:).*$/i, "$1") + s;
      if (/^data:/i.test(s)) return "";
      return this.base + "/" + s.replace(/^\/+/, "");
    }
    sections() {
      return __async(this, null, function* () {
        return [
          { key: "live", type: "movie", title: "Live TV", noun: "categories" },
          { key: "vod", type: "movie", title: "Movies", noun: "categories" },
          { key: "series", type: "show", title: "Series", noun: "categories" }
        ];
      });
    }
    catMap(cats) {
      const m = {};
      const pos = {};
      (Array.isArray(cats) ? cats : []).forEach((c, i) => {
        m[c.category_id] = c.category_name;
        pos[c.category_id] = i;
      });
      Object.defineProperty(m, "__pos", { value: pos, enumerable: false });
      return m;
    }
    // The panel lists streams in the order its owner chose ("num"); keep that order.
    byNum(streams) {
      const a = Array.isArray(streams) ? streams : [];
      if (!a.length || !a.every((x) => x && x.num !== void 0 && x.num !== null && x.num !== "" && isFinite(Number(x.num)))) return a;
      return a.map((x, i) => ({ x, i })).sort((p, q) => Number(p.x.num) - Number(q.x.num) || p.i - q.i).map((o) => o.x);
    }
    live() {
      return this.once("live", () => __async(this, null, function* () {
        const [cats, streams] = yield Promise.all([this.api("get_live_categories"), this.api("get_live_streams")]);
        const cm = this.catMap(cats);
        return this.remember(this.byNum(streams).map((s) => ({
          ratingKey: "live:" + s.stream_id,
          type: "movie",
          live: true,
          title: s.name,
          titleSort: s.name,
          thumb: placeholder(s.name),
          thumbBare: bareArt(s.name),
          logo: this.logoOf(s.stream_icon),
          art: "",
          addedAt: num(s.added),
          cat: cm[s.category_id] || "Other",
          catId: String(s.category_id),
          catPos: cm.__pos[s.category_id],
          summary: cm[s.category_id] || "",
          duration: 0
        })));
      }));
    }
    vod() {
      return this.once("vod", () => __async(this, null, function* () {
        const [cats, streams] = yield Promise.all([this.api("get_vod_categories"), this.api("get_vod_streams")]);
        const cm = this.catMap(cats);
        return this.remember((Array.isArray(streams) ? streams : []).map((s) => {
          const art = s.stream_icon || s.cover || s.movie_image || placeholder(s.name);
          return {
            ratingKey: "vod:" + s.stream_id,
            type: "movie",
            title: s.name,
            titleSort: s.name,
            year: yearOf(s.year) || yearOf(s.name),
            thumb: art,
            art,
            addedAt: num(s.added),
            audienceRating: ratingOf(s),
            cat: cm[s.category_id] || "Other",
            catId: String(s.category_id),
          catPos: cm.__pos[s.category_id],
            ext: s.container_extension || "mp4"
          };
        }));
      }));
    }
    series() {
      return this.once("series", () => __async(this, null, function* () {
        const [cats, list] = yield Promise.all([this.api("get_series_categories"), this.api("get_series")]);
        const cm = this.catMap(cats);
        return this.remember((Array.isArray(list) ? list : []).map((s) => {
          const cover = s.cover || s.stream_icon || placeholder(s.name);
          const back2 = Array.isArray(s.backdrop_path) && s.backdrop_path[0] ? s.backdrop_path[0] : cover;
          return {
            ratingKey: "ser:" + s.series_id,
            type: "show",
            title: s.name,
            titleSort: s.name,
            year: yearOf(s.releaseDate || s.release_date) || yearOf(s.name),
            thumb: cover,
            art: back2,
            summary: s.plot || "",
            addedAt: num(s.last_modified),
            audienceRating: ratingOf(s),
            cat: cm[s.category_id] || "Other",
            catId: String(s.category_id),
          catPos: cm.__pos[s.category_id],
            Genre: s.genre ? String(s.genre).split(/\s*[,/]\s*/).slice(0, 3).map((tag) => ({ tag })) : void 0
          };
        }));
      }));
    }
    raw(kind) {
      return kind === "live" ? this.live() : kind === "series" ? this.series() : this.vod();
    }
    rows(list, type, id) {
      return __async(this, null, function* () {
        const groups = {};
        const order = [];
        list.forEach((i) => {
          if (!groups[i.cat]) {
            groups[i.cat] = [];
            order.push(i.cat);
          }
          if (groups[i.cat].length < 24) groups[i.cat].push(i);
        });
        return order.slice(0, 8).map((c, n) => hub(id + n, c, type, groups[c]));
      });
    }
    hubs() {
      return __async(this, null, function* () {
        const grab = (p) => p.then((l) => this.visible(l), () => []);
        const [live, vod, series] = yield Promise.all([grab(this.live()), grab(this.vod()), grab(this.series())]);
        const out = this.continueRow();
        if (live.length) out.push(hub("home.live", "Live TV", "movie", live.slice(0, 24)));
        if (vod.length) out.push(hub("home.vod", "Recently Added Movies", "movie", sortItems(vod, "addedAt:desc").slice(0, 24)));
        if (series.length) out.push(hub("home.series", "Recently Updated Series", "show", sortItems(series, "addedAt:desc").slice(0, 24)));
        return out;
      });
    }
    sectionHubs(sectionId) {
      return __async(this, null, function* () {
        const list = yield this.raw(sectionId);
        return this.rows(list, sectionId === "series" ? "show" : "movie", "sec." + sectionId);
      });
    }
    search(q) {
      return __async(this, null, function* () {
        const needle = String(q).toLowerCase();
        const grab = (p) => p.then((l) => this.visible(l).filter((i) => String(i.title).toLowerCase().indexOf(needle) !== -1).slice(0, 30), () => []);
        const [live, vod, series] = yield Promise.all([grab(this.live()), grab(this.vod()), grab(this.series())]);
        const out = [];
        if (vod.length) out.push(hub("search.vod", "Movies", "movie", vod));
        if (series.length) out.push(hub("search.series", "Series", "show", series));
        if (live.length) out.push(hub("search.live", "Live TV", "movie", live));
        return out;
      });
    }
    seriesDetail(id) {
      return __async(this, null, function* () {
        if (!this.seriesInfo[id]) this.seriesInfo[id] = yield this.api("get_series_info", { series_id: id });
        return this.seriesInfo[id];
      });
    }
    // Now/next from the provider's guide (get_short_epg), cached for a minute.
    epg(item) {
      return __async(this, null, function* () {
        const id = String(item.ratingKey).split(":")[1];
        this.epgCache = this.epgCache || {};
        const hit = this.epgCache[id];
        if (hit && Date.now() - hit.at < 6e4) return hit.v;
        let v = null;
        try {
          const j = yield getJson(this.base + "/player_api.php?" + qs({ username: this.user, password: this.pass, action: "get_short_epg", stream_id: id, limit: 4 }), { timeout: 8e3 });
          const decode = (s) => {
            try {
              return decodeURIComponent(escape(atob(s)));
            } catch (e) {
              return String(s || "");
            }
          };
          const list = (j && j.epg_listings || []).map((e) => ({ title: decode(e.title), start: num(e.start_timestamp) * 1e3, end: num(e.stop_timestamp) * 1e3 })).filter((e) => e.end > e.start).sort((a, b) => a.start - b.start);
          const t = Date.now();
          const cur = list.find((e) => e.start <= t && e.end > t) || null;
          const nxt = list.find((e) => e.start >= (cur ? cur.end : t)) || null;
          if (cur || nxt) v = { now: cur, next: nxt };
        } catch (e) {
          v = null;
        }
        this.epgCache[id] = { at: Date.now(), v };
        return v;
      });
    }
    metadata(key) {
      return __async(this, null, function* () {
        const [kind, a] = key.split(":");
        if (kind === "live") {
          const item = this.mem.get(key) || this.stored(key);
          if (!item) return void 0;
          return Object.assign({}, item, { Media: mediaFor(null, "ts", 0, this.liveCandidates(a)) });
        }
        if (kind === "vod") {
          const base = this.mem.get(key) || this.stored(key) || { ratingKey: key, type: "movie", title: "Movie" };
          let d = {};
          try {
            d = yield this.api("get_vod_info", { vod_id: a });
          } catch (e) {
          }
          const info = d.info || {};
          const ext = d.movie_data && d.movie_data.container_extension || base.ext || "mp4";
          const back2 = Array.isArray(info.backdrop_path) && info.backdrop_path[0];
          return this.decorate(Object.assign({}, base, {
            summary: info.plot || info.description || "",
            year: yearOf(info.releasedate) || base.year,
            duration: num(info.duration_secs) * 1e3,
            art: back2 || base.art,
            thumb: base.thumb || info.movie_image,
            Genre: info.genre ? String(info.genre).split(/\s*[,/]\s*/).slice(0, 3).map((tag) => ({ tag })) : void 0,
            Director: info.director ? [{ tag: info.director }] : void 0,
            Role: info.cast ? String(info.cast).split(/\s*,\s*/).slice(0, 6).map((tag) => ({ tag })) : void 0,
            Media: mediaFor(this.streamUrl("movie", a, ext), ext, num(info.duration_secs) * 1e3)
          }));
        }
        if (kind === "ser") {
          const base = this.mem.get(key) || { ratingKey: key, type: "show", title: "Series" };
          const d = yield this.seriesDetail(a);
          const seasons = Object.keys(d.episodes || {});
          const leaves = seasons.reduce((n, s) => n + d.episodes[s].length, 0);
          const item = Object.assign({}, base, { childCount: seasons.length, leafCount: leaves, summary: base.summary || d.info && d.info.plot || "" });
          const eps = yield this.children("sea:" + a + ":" + (seasons.sort((x, y) => x - y)[0] || "1"));
          const prog = this.progress();
          item.onDeck = eps.find((e) => !(prog[e.ratingKey] && prog[e.ratingKey].done)) || eps[0];
          return item;
        }
        if (kind === "epi") {
          return this.mem.get(key) || this.stored(key);
        }
        return void 0;
      });
    }
    children(key) {
      return __async(this, null, function* () {
        const [kind, sid, n] = key.split(":");
        if (kind === "ser") {
          const show2 = this.mem.get(key) || { title: "Series" };
          const d = yield this.seriesDetail(sid);
          const nums = Object.keys(d.episodes || {}).sort((x, y) => x - y);
          return this.remember(nums.map((s) => {
            const meta = (d.seasons || []).find((x) => String(x.season_number) === String(s)) || {};
            return {
              ratingKey: "sea:" + sid + ":" + s,
              type: "season",
              index: Number(s),
              title: meta.name || "Season " + s,
              parentRatingKey: key,
              parentTitle: show2.title,
              thumb: meta.cover_big || meta.cover || show2.thumb,
              art: show2.art,
              leafCount: d.episodes[s].length,
              viewedLeafCount: 0
            };
          }));
        }
        if (kind === "sea") {
          const show2 = this.mem.get("ser:" + sid) || { title: "Series" };
          const d = yield this.seriesDetail(sid);
          return this.remember((d.episodes[n] || []).map((ep) => {
            const info = ep.info || {};
            const ext = ep.container_extension || "mp4";
            const item = {
              ratingKey: "epi:" + sid + ":" + ep.id,
              type: "episode",
              index: num(ep.episode_num),
              parentIndex: Number(n),
              title: ep.title || "Episode " + ep.episode_num,
              summary: info.plot || "",
              duration: num(info.duration_secs) * 1e3,
              grandparentTitle: show2.title,
              grandparentRatingKey: "ser:" + sid,
              parentRatingKey: key,
              grandparentThumb: show2.thumb,
              grandparentArt: show2.art,
              thumb: info.movie_image || show2.thumb,
              art: show2.art,
              Media: mediaFor(this.streamUrl("series", ep.id, ext), ext, num(info.duration_secs) * 1e3)
            };
            return this.decorate(item);
          }));
        }
        return [];
      });
    }
  };

  // app/js/iptv/mac.js
  function androidMacs() {
    try {
      const list = JSON.parse(window.ZenAndroid.macs());
      return list.filter((x) => x && /^[0-9A-F]{2}(:[0-9A-F]{2}){5}$/.test(x.mac) && x.mac !== "00:00:00:00:00:00" && x.mac !== "02:00:00:00:00:00");
    } catch (e) {
      return [];
    }
  }
  function tvMac() {
    if (typeof window !== "undefined" && window.ZenAndroid && window.ZenAndroid.macs) {
      const list = androidMacs();
      const pick = list.find((x) => /^eth/.test(x.name)) || list.find((x) => /^wlan/.test(x.name)) || list[0];
      if (pick) return { mac: pick.mac, real: true, source: /^eth/.test(pick.name) ? "Ethernet" : "Wi-Fi", others: list.filter((x) => x !== pick) };
      const m = virtual();
      return { mac: m, real: false, android: true };
    }
    if (isTizen) {
      try {
        const m = webapis.network.getMac();
        if (m) return { mac: String(m).toUpperCase(), real: true };
      } catch (e) {
      }
    }
    return { mac: virtual(), real: false };
  }
  function virtual() {
    let v = get("virtualMac");
    if (!v) {
      const b = () => ("0" + Math.floor(Math.random() * 256).toString(16)).slice(-2);
      v = ("00:1A:79:" + b() + ":" + b() + ":" + b()).toUpperCase();
      set("virtualMac", v);
    }
    return v;
  }
  function cleanMac(text) {
    const hex2 = String(text || "").replace(/[^0-9a-fA-F]/g, "").toUpperCase();
    return hex2.length === 12 ? hex2.match(/../g).join(":") : "";
  }

  // app/js/iptv/stalker.js
  var UA = "Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG250 stbapp ver: 4 rev: 1812 Safari/533.3";
  function normalizePortal(text) {
    let a = String(text || "").trim().replace(/\s+/g, "");
    if (!a) return "";
    if (!/^https?:\/\//i.test(a)) a = "http://" + a;
    return a.replace(/\/+$/, "");
  }
  function loadUrls(portal) {
    if (/load\.php/i.test(portal)) return [portal.split("?")[0]];
    const base = portal.replace(/\/c$/i, "");
    const origin = base.replace(/^(https?:\/\/[^/]+).*$/i, "$1");
    const out = [base + "/server/load.php", base + "/portal.php", origin + "/stalker_portal/server/load.php", origin + "/server/load.php", origin + "/portal.php"];
    return out.filter((u, i) => out.indexOf(u) === i);
  }
  function stalkerList(js) {
    if (Array.isArray(js)) return js;
    const d = js && js.data;
    if (Array.isArray(d)) return d;
    if (d && typeof d === "object") return Object.keys(d).map((k) => d[k]);
    return [];
  }
  var portalWarnAt = 0;
  function warnPortal(e) {
    const t = Date.now();
    if (t - portalWarnAt < 15e3) return;
    portalWarnAt = t;
    toast(e && e.message || "The portal did not answer.", 9e3);
  }
  var StalkerServer = class _StalkerServer extends IptvServer {
    constructor(saved2) {
      super(saved2, "stalker");
      this.portal = saved2.uri;
      this.mac = cleanMac(saved2.mac);
      this.token = "";
      this.loadUrl = saved2.loadUrl || "";
      this.pageSize = 14;
    }
    ids() {
      if (!this._ids) this._ids = { sn: sha256hex("sn" + this.mac).slice(0, 13).toUpperCase(), did: sha256hex("did" + this.mac).toUpperCase(), did2: sha256hex("did2" + this.mac).toUpperCase() };
      return this._ids;
    }
    headers() {
      const h2 = { Cookie: "mac=" + this.mac + "; stb_lang=en; timezone=GMT", "User-Agent": UA, "X-User-Agent": "Model: MAG250; Link: WiFi", Accept: "*/*" };
      if (this.token) h2.Authorization = "Bearer " + this.token;
      return h2;
    }
    call(params, retried) {
      return __async(this, null, function* () {
        let j;
        try {
          j = yield getJson(this.loadUrl + "?" + qs(Object.assign({}, params, { JsHttpRequest: "1-xml" })), { headers: this.headers(), timeout: 3e4 });
        } catch (e) {
          const authish = e.status === 401 || e.status === 403 || /did not answer with data/.test(e.message);
          if (authish && !retried && this.token && params.action !== "handshake" && params.action !== "get_profile") {
            this.token = "";
            yield this.connect();
            return yield this.call(params, true);
          }
          throw e;
        }
        if (j === null || typeof j !== "object") throw new Error("Unexpected answer from the portal.");
        return j.js;
      });
    }
    profile() {
      const i = this.ids();
      return this.call({
        type: "stb", action: "get_profile", hd: 1,
        ver: "ImageDescription: 0.2.18-r14-pub-250; ImageDate: Fri Jan 15 15:20:44 EET 2016; PORTAL version: 5.6.1; API Version: JS API version: 328; STB API version: 134; Player Engine version: 0x566",
        num_banks: 2, sn: i.sn, stb_type: "MAG250", client_type: "STB", image_version: "218", video_out: "hdmi",
        device_id: i.did, device_id2: i.did2, signature: "", auth_second_step: 1, hw_version: "1.7-BD-00", not_valid_token: 0,
        metrics: JSON.stringify({ mac: this.mac, sn: i.sn, model: "MAG250", type: "STB", uid: "", random: "" }),
        hw_version_2: sha256hex("hw" + this.mac).slice(0, 40), api_signature: "262", prehash: ""
      });
    }
    // Finds the portal's API endpoint, handshakes, and returns the portal's name.
    connect() {
      return __async(this, null, function* () {
        let lastErr = null;
        let rejected = null;
        const urls = this.loadUrl ? [this.loadUrl] : loadUrls(this.portal);
        for (const u of urls) {
          this.loadUrl = u;
          this.token = "";
          try {
            const js = yield this.call({ type: "stb", action: "handshake", token: "", prehash: "" });
            if (js && js.token) {
              this.token = js.token;
              this.saved.loadUrl = u;
              yield this.profile().catch(() => {
              });
              return { name: this.portal.replace(/^https?:\/\//i, "").replace(/\/.*$/, "") };
            }
            rejected = new Error("The portal did not accept this MAC address. Ask your provider to activate it.");
          } catch (e) {
            lastErr = e;
          }
        }
        this.loadUrl = "";
        throw rejected || lastErr || new Error("Could not reach the portal.");
      });
    }
    ready() {
      return __async(this, null, function* () {
        if (!this.token) yield this.connect();
      });
    }
    sections() {
      return __async(this, null, function* () {
        return [
          { key: "live", type: "movie", title: "Live TV", noun: "categories" },
          { key: "vod", type: "movie", title: "Movies", noun: "categories" }
        ];
      });
    }
    // Portals give a file name; the pictures live under the portal's logos folder.
    logoOf(logo) {
      if (!logo) return "";
      if (/^https?:\/\//i.test(logo)) return logo;
      const origin = this.portal.replace(/^(https?:\/\/[^/]+).*$/i, "$1");
      return origin + "/stalker_portal/misc/logos/320/" + String(logo).replace(/^\/+/, "");
    }
    channels() {
      return this.once("live", () => this.loadChannels()).catch((e) => {
        warnPortal(e);
        throw e;
      });
    }
    pagedChannels() {
      return __async(this, null, function* () {
        const seen = {};
        let data = [];
        for (let p = 1; p <= 200; p++) {
          let js;
          try {
            js = yield this.call({ type: "itv", action: "get_ordered_list", genre: "*", force_ch_link_check: "", fav: 0, sortby: "number", hd: 0, p });
          } catch (e) {
            break;
          }
          const page = stalkerList(js).filter((c) => c && c.id !== void 0 && !seen[c.id]);
          if (!page.length) break;
          page.forEach((c) => {
            seen[c.id] = 1;
          });
          data = data.concat(page);
          const total = Number(js && js.total_items || 0);
          if (total && data.length >= total) break;
        }
        return data;
      });
    }
    loadChannels() {
      return __async(this, null, function* () {
        yield this.ready();
        const genres = {};
        try {
          stalkerList(yield this.call({ type: "itv", action: "get_genres" })).forEach((g) => {
            if (g && g.id !== void 0) genres[String(g.id)] = g.title || g.name;
          });
        } catch (e) {
        }
        const gpos = {};
        Object.keys(genres).forEach((k, i) => {
          gpos[k] = i;
        });
        let data = [];
        try {
          data = stalkerList(yield this.call({ type: "itv", action: "get_all_channels" }));
        } catch (e) {
          data = [];
        }
        data = data.filter((c) => c && c.id !== void 0 && c.name);
        if (!data.length) data = (yield this.pagedChannels()).filter((c) => c && c.name);
        if (!data.length) throw new Error("Connected to the portal, but it returned no channels. The MAC " + this.mac + " is probably not activated on this portal yet. Send exactly this MAC to your provider, then try again.");
        return this.remember(data.map((c) => {
          const gid = c.tv_genre_id != null ? String(c.tv_genre_id) : "0";
          return {
            ratingKey: "live:" + c.id, type: "movie", live: true, title: c.name, titleSort: c.name, thumb: placeholder(c.name), thumbBare: bareArt(c.name), logo: this.logoOf(c.logo),
            art: "", cmd: c.cmd, cat: genres[gid] || "Other", catId: gid, catPos: gpos[gid], summary: genres[gid] || "", duration: 0, addedAt: Number(c.number) || 0
          };
        }));
      });
    }
    // Used when adding a portal: live channels or at least movies must come back.
    verify() {
      return __async(this, null, function* () {
        try {
          yield this.once("live", () => this.loadChannels());
          return true;
        } catch (e) {
          try {
            const r = yield this.vodRange(0, 1, "titleSort");
            if (r.total > 0) return true;
          } catch (e2) {
          }
          throw e;
        }
      });
    }
    vodItem(v) {
      const art = v.screenshot_uri || placeholder(v.name);
      return {
        ratingKey: "vod:" + v.id,
        type: "movie",
        title: v.name,
        titleSort: v.name,
        year: yearOf(v.year) || yearOf(v.name),
        thumb: art,
        art,
        summary: v.description || "",
        cmd: v.cmd,
        duration: (Number(v.time) || 0) * 6e4,
        audienceRating: Number(v.rating_imdb) || void 0,
        addedAt: Date.parse(v.added) / 1e3 || 0,
        Genre: v.genres_str ? String(v.genres_str).split(/\s*,\s*/).slice(0, 3).map((tag) => ({ tag })) : void 0,
        Director: v.director ? [{ tag: v.director }] : void 0,
        Role: v.actors ? String(v.actors).split(/\s*,\s*/).slice(0, 6).map((tag) => ({ tag })) : void 0
      };
    }
    // The portal pages its movie list; collect just the pages covering [start, start+size).
    vodRange(start2, size, sort, search2, category) {
      return __async(this, null, function* () {
        yield this.ready();
        const sortby = sort === "addedAt:desc" || sort === "server" ? "added" : sort === "audienceRating:desc" ? "rating" : "name";
        const fetchPage = (p2) => this.call({ type: "vod", action: "get_ordered_list", category: category || "*", sortby, search: search2, p: p2 });
        const first = yield fetchPage(Math.floor(start2 / this.pageSize) + 1);
        if (first && first.max_page_items) this.pageSize = Number(first.max_page_items) || this.pageSize;
        const total = Number(first && first.total_items || 0);
        let p = Math.floor(start2 / this.pageSize) + 1;
        let data = (first && first.data || []).slice();
        while (data.length < size + start2 % this.pageSize && p * this.pageSize < total) {
          p += 1;
          const js = yield fetchPage(p);
          data = data.concat(js && js.data || []);
          if (!js || !js.data || !js.data.length) break;
        }
        const items = this.remember(data.slice(start2 % this.pageSize, start2 % this.pageSize + size).map((v) => this.vodItem(v)));
        return { total, items };
      });
    }
    raw(kind) {
      return this.channels();
    }
    // live channels; movies are paged by the portal instead
    vodCategories() {
      return this.once("vodcats", () => __async(this, null, function* () {
        yield this.ready();
        const js = yield this.call({ type: "vod", action: "get_categories" });
        const list = (Array.isArray(js) ? js : js && js.data || []).filter((c) => String(c.id) !== "*");
        const items = list.map((c) => this.categoryItem("vod", String(c.id), c.title || c.name || "Other"));
        items.unshift(this.categoryItem("vod", "all", "All"));
        return items;
      }));
    }
    items(_0, _1, _2) {
      return __async(this, arguments, function* (sectionId, start2, size, { sort = "titleSort" } = {}) {
        const parts = String(sectionId).split(":");
        if (parts[0] === "live") return __superGet(_StalkerServer.prototype, this, "items").call(this, sectionId, start2, size, { sort });
        if (!parts[1]) {
          const cats = (yield this.vodCategories()).filter((c) => !(adultMode() === "hide" && isAdult(c.title))).map((c) => Object.assign({}, c, { locked: adultMode() === "pin" && adultHidden() && isAdult(c.title) }));
          return { total: cats.length, items: cats.slice(start2, start2 + size) };
        }
        const r = yield this.vodRange(start2, size, sort, void 0, parts[1] === "all" ? "*" : parts[1]);
        return { total: r.total, items: r.items.map((i) => this.decorate(i)) };
      });
    }
    letters(sectionId) {
      return __async(this, null, function* () {
        const parts = String(sectionId).split(":");
        if (parts[0] === "live") return __superGet(_StalkerServer.prototype, this, "letters").call(this, sectionId);
        return [];
      });
    }
    hubs() {
      return __async(this, null, function* () {
        const out = this.continueRow();
        const live = yield this.channels().then((l) => this.visible(l), () => []);
        if (live.length) out.push(hub("home.live", "Live TV", "movie", live.slice(0, 24)));
        const vod = yield this.vodRange(0, 24, "addedAt:desc").then((r) => r.items, () => []);
        if (vod.length) out.push(hub("home.vod", "Recently Added Movies", "movie", vod));
        return out;
      });
    }
    sectionHubs(sectionId) {
      return __async(this, null, function* () {
        if (sectionId === "live") {
          const list = yield this.channels();
          const groups = {};
          const order = [];
          list.forEach((i) => {
            if (!groups[i.cat]) {
              groups[i.cat] = [];
              order.push(i.cat);
            }
            if (groups[i.cat].length < 24) groups[i.cat].push(i);
          });
          return order.slice(0, 8).map((c, n) => hub("sec.live" + n, c, "movie", groups[c]));
        }
        const added = yield this.vodRange(0, 24, "addedAt:desc");
        const rated = yield this.vodRange(0, 24, "audienceRating:desc");
        return [hub("sec.new", "Recently Added", "movie", added.items), hub("sec.top", "Top Rated", "movie", rated.items)];
      });
    }
    search(q) {
      return __async(this, null, function* () {
        const needle = String(q).toLowerCase();
        const out = [];
        const vod = yield this.vodRange(0, 30, "titleSort", q).then((r) => r.items, () => []);
        if (vod.length) out.push(hub("search.vod", "Movies", "movie", vod));
        const live = yield this.channels().then((l) => this.visible(l).filter((i) => String(i.title).toLowerCase().indexOf(needle) !== -1).slice(0, 30), () => []);
        if (live.length) out.push(hub("search.live", "Live TV", "movie", live));
        return out;
      });
    }
    epg(item) {
      return __async(this, null, function* () {
        try {
          const js = yield this.call({ type: "itv", action: "get_short_epg", ch_id: String(item.ratingKey).split(":")[1], size: 3 });
          const list = (Array.isArray(js) ? js : js && js.data || []).map((e) => ({ title: e.name, start: Number(e.start_timestamp) * 1e3, end: Number(e.stop_timestamp) * 1e3 })).filter((e) => e.end > e.start).sort((a, b) => a.start - b.start);
          const t = Date.now();
          const cur = list.find((e) => e.start <= t && e.end > t) || null;
          const nxt = list.find((e) => e.start >= (cur ? cur.end : t)) || null;
          return cur || nxt ? { now: cur, next: nxt } : null;
        } catch (e) {
          return null;
        }
      });
    }
    metadata(key) {
      return __async(this, null, function* () {
        const [kind] = key.split(":");
        const base = this.mem.get(key) || this.stored(key);
        if (!base || !base.cmd) return void 0;
        yield this.ready();
        let js = null;
        try {
          js = yield this.call({ type: kind === "live" ? "itv" : "vod", action: "create_link", cmd: base.cmd, series: "", forced_storage: 0, disable_ad: 0, download: 0, force_ch_link_check: 0 });
        } catch (e) {
          if (!/^\s*\w*\s*https?:\/\/(?!localhost|127\.)/i.test(String(base.cmd))) throw e;
        }
        const raw = String(js && js.cmd || base.cmd);
        const url = raw.replace(/^\s*\w+\s+(?=https?:)/i, "").trim();
        if (!/^https?:/i.test(url)) throw new Error("The portal did not give a playable link. Is this MAC activated for that content?");
        const ext = (url.split("?")[0].match(/\.(\w{2,4})$/) || [])[1] || (kind === "live" ? "ts" : "mp4");
        return this.decorate(Object.assign({}, base, { Media: mediaFor(url, ext, base.duration || 0) }));
      });
    }
    children() {
      return __async(this, null, function* () {
        return [];
      });
    }
  };

  // app/js/session.js
  var session = {
    token: get("token"),
    user: get("user"),
    server: null
  };
  function makeServer(saved2) {
    if (saved2.kind === "xtream") return new XtreamServer(saved2);
    if (saved2.kind === "stalker") return new StalkerServer(saved2);
    const s = new Server(saved2);
    if (saved2.id === "manual") s.fixed = true;
    return s;
  }
  var saved = get("server");
  if (saved) session.server = makeServer(saved);
  function useServer(resource, uri) {
    session.server = new Server({ uri, token: resource.accessToken, name: resource.name, id: resource.clientIdentifier });
    set("server", { uri, token: resource.accessToken, name: resource.name, id: resource.clientIdentifier });
  }
  function useManualServer({ uri, token, name }) {
    const saved2 = { uri, token: token || "", name, id: "manual" };
    session.token = "manual";
    session.user = { title: "Server address" };
    session.server = makeServer(saved2);
    set("token", "manual");
    set("user", session.user);
    set("server", saved2);
    set("homeCache", void 0);
    rememberProfile(saved2, "Plex \xB7 " + (name || uri));
  }
  function useIptv(saved2, label) {
    if (policyLocked() && !saved2.managed) throw new Error(policyMsg());
    session.token = "manual";
    session.user = { title: label };
    session.server = makeServer(saved2);
    set("token", "manual");
    set("user", session.user);
    set("server", saved2);
    set("homeCache", void 0);
    rememberProfile(saved2, label + " \xB7 " + (saved2.name || saved2.uri) + (saved2.user && !saved2.managed ? " (" + saved2.user + ")" : ""));
  }
  function signOut() {
    session.token = null;
    session.user = null;
    session.server = null;
    set("token", void 0);
    set("user", void 0);
    set("server", void 0);
    set("homeCache", void 0);
  }
  function reconnect() {
    return __async(this, null, function* () {
      if (session.server && (session.server.fixed || session.server.id === "manual")) return session.server;
      const servers2 = yield getServers(session.token);
      const current = session.server && servers2.find((s) => s.clientIdentifier === session.server.id);
      const resource = current || servers2[0];
      if (!resource) throw new Error("No Plex servers on this account");
      const uri = yield connect(resource);
      useServer(resource, uri);
      log("reconnected", resource.name, uri);
      return session.server;
    });
  }
  function profiles() {
    return get("profiles", []);
  }
  function rememberProfile(saved2, label) {
    const id = [saved2.kind || "plex", saved2.uri, saved2.user || saved2.mac || ""].join("|");
    const list = profiles().filter((p) => p.id !== id);
    list.unshift({ id, label: label || saved2.name, saved: saved2, at: Date.now() });
    set("profiles", list.slice(0, 40));
  }
  function ensureCurrentProfile() {
    const s = session.server && session.server.saved;
    if (!s || !s.uri) return;
    const label = s.kind === "xtream" ? "Xtream" : s.kind === "stalker" ? "MAC portal" : "Plex";
    const id = [s.kind || "plex", s.uri, s.user || s.mac || ""].join("|");
    if (!profiles().some((p) => p.id === id)) rememberProfile(s, label + " \xB7 " + (s.name || s.uri) + (s.user && !s.managed ? " (" + s.user + ")" : ""));
  }
  function forgetProfile(id) {
    set("profiles", profiles().filter((p) => p.id !== id));
  }
  function activateProfile(p) {
    if (policyLocked() && !p.saved.managed) {
      toast(policyMsg(), 8e3);
      return;
    }
    if (p.saved.kind === "xtream" || p.saved.kind === "stalker") useIptv(p.saved, p.label.split(" \xB7 ")[0]);
    else useManualServer({ uri: p.saved.uri, token: p.saved.token, name: p.saved.name });
  }

  // app/js/util/dom.js
  function h(tag, className, parent) {
    const el3 = document.createElement(tag);
    if (className) el3.className = className;
    if (parent) parent.appendChild(el3);
    return el3;
  }
  function setText(el3, value) {
    value = value == null ? "" : String(value);
    if (el3._text !== value) {
      el3._text = value;
      el3.textContent = value;
    }
  }
  function setTransform(el3, value) {
    if (el3._tf !== value) {
      el3._tf = value;
      el3.style.transform = value;
    }
  }
  function show(el3, visible) {
    const v = visible ? "" : "none";
    if (el3._disp !== v) {
      el3._disp = v;
      el3.style.display = v;
    }
  }
  function toggleClass(el3, name, on) {
    if (el3.classList.contains(name) !== !!on) el3.classList.toggle(name, !!on);
  }

  // app/js/ui/images.js
  var MAX_ACTIVE = 6;
  var LOADED_MAX = 800;
  var queue2 = [];
  var active = 0;
  var loaded = /* @__PURE__ */ new Map();
  var failed = /* @__PURE__ */ new Set();
  function remember(url) {
    loaded.delete(url);
    loaded.set(url, true);
    if (loaded.size > LOADED_MAX) loaded.delete(loaded.keys().next().value);
  }
  var proxiedImg = /* @__PURE__ */ new Map();
  function attach(img, url, instant) {
    img.src = proxiedImg.get(url) || url;
    if (instant) {
      img.classList.add("in", "now");
    } else {
      img.classList.remove("now");
      img.classList.add("in");
    }
  }
  function pump() {
    while (active < MAX_ACTIVE && queue2.length) {
      const job = queue2.pop();
      if (job.img._want !== job.url) continue;
      active++;
      let loader = new Image();
      loader.referrerPolicy = "no-referrer";
      loader.src = job.url;
      let finished = false;
      let viaProxy = false;
      const timer4 = setTimeout(() => done(false), 15e3);
      const done = (ok) => {
        if (finished) return;
        if (!ok && !viaProxy && /^https?:/i.test(job.url)) {
          let pb = "";
          try { pb = proxyBase(); } catch (e) { pb = ""; }
          if (pb) {
            viaProxy = true;
            const alt = pb + "/proxy?url=" + encodeURIComponent(job.url);
            const l2 = new Image();
            l2.referrerPolicy = "no-referrer";
            loader = l2;
            l2.onload = () => { proxiedImg.set(job.url, alt); done(true); };
            l2.onerror = () => done(false);
            l2.src = alt;
            return;
          }
        }
        finished = true;
        clearTimeout(timer4);
        active--;
        if (ok) {
          remember(job.url);
          if (job.img._want === job.url) attach(job.img, job.url, false);
        } else {
          failed.add(job.url);
          if (failed.size <= 12 && job.url.indexOf("data:") !== 0) console.warn("picture failed to load: " + job.url);
          if (job.img._want === job.url && job.onError) job.onError();
        }
        pump();
      };
      loader.onerror = () => done(false);
      loader.onload = () => done(true);
    }
  }
  function load(img, url, onError) {
    if (img._want === url) return;
    img._want = url;
    if (!url) {
      img.classList.remove("in");
      img.removeAttribute("src");
      return;
    }
    if (loaded.has(url)) {
      attach(img, url, true);
      return;
    }
    img.classList.remove("in");
    if (failed.has(url)) {
      if (onError) onError();
      return;
    }
    queue2.push({ img, url, onError });
    if (queue2.length > 200) queue2.splice(0, queue2.length - 200);
    pump();
  }
  function prefetch(url) {
    if (!url || loaded.has(url)) return;
    const sink = { _want: url, classList: { add() {
    }, remove() {
    } } };
    queue2.unshift({ img: sink, url });
    pump();
  }

  // app/js/ui/tile.js
  var KINDS = {
    poster: { w: 220, h: 330 },
    wide: { w: 400, h: 225 },
    grid: { w: 216, h: 324 },
    episode: { w: 384, h: 216 }
  };
  function createTile(kind, { caption = false } = {}) {
    const size = KINDS[kind];
    const el3 = h("div", "tile tile-" + kind);
    const frame = h("div", "tile-frame", el3);
    frame.style.width = size.w + "px";
    frame.style.height = size.h + "px";
    const img = h("img", "tile-img", frame);
    const logo = h("img", "tile-logo", frame);
    const ph = h("div", "tile-ph", frame);
    img.alt = "";
    logo.alt = "";
    logo.referrerPolicy = "no-referrer";
    const badge = h("div", "tile-badge", frame);
    const rate = h("div", "tile-rate", frame);
    const fav = h("div", "tile-fav", frame);
    fav.textContent = "\u2605";
    const bar = h("div", "tile-bar", frame);
    const fill = h("i", "", bar);
    let cap = null;
    let sub = null;
    if (caption) {
      cap = h("div", "tile-cap", el3);
      cap.style.width = size.w + "px";
      sub = h("div", "tile-sub", el3);
      sub.style.width = size.w + "px";
    }
    return { el: el3, img, logo, frame, ph, badge, rate, fav, bar, fill, cap, sub, kind, size, item: null };
  }
  function artFor(item, kind) {
    if (kind === "wide" || kind === "episode") {
      if (item.type === "episode") return item.thumb || item.art;
      return item.art || item.thumb;
    }
    if (item.type === "episode") return item.grandparentThumb || item.parentThumb || item.thumb;
    if (item.type === "season") return item.thumb || item.parentThumb;
    return item.thumb;
  }
  function titleFor(item, kind) {
    if (item.type === "episode" && kind !== "episode") return item.grandparentTitle || item.title;
    return item.title;
  }
  function subFor(item, kind) {
    if (item.type === "episode") {
      return kind === "episode" ? episodeLabel(item).replace(" \xB7 ", "") + "  " + item.title : episodeLabel(item) + "  " + item.title;
    }
    if (item.type === "season") return item.leafCount ? item.leafCount + " episodes" : "";
    return item.year || "";
  }
  function fillTile(tile, item) {
    if (tile.item === item) {
      if (item) toggleClass(tile.fav, "on", !!item.fav);
      return;
    }
    tile.item = item;
    if (!item) {
      load(tile.img, "");
      load(tile.logo, "");
      toggleClass(tile.frame, "has-logo", false);
      toggleClass(tile.fav, "on", false);
      setText(tile.ph, "");
      show(tile.bar, false);
      show(tile.badge, false);
      if (tile.rate) show(tile.rate, false);
      if (tile.cap) {
        setText(tile.cap, "");
        setText(tile.sub, "");
      }
      return;
    }
    const kind = tile.kind;
    const server = session.server;
    const path = artFor(item, kind);
    const logoUrl2 = server && item.logo ? server.image(item.logo, tile.size.w, tile.size.h) : "";
    if (logoUrl2) {
      toggleClass(tile.frame, "has-logo", true);
      load(tile.img, server.image(item.thumbBare || path, tile.size.w, tile.size.h));
      load(tile.logo, logoUrl2, () => {
        if (tile.item !== item) return;
        toggleClass(tile.frame, "has-logo", false);
        load(tile.img, server.image(path, tile.size.w, tile.size.h));
      });
    } else {
      toggleClass(tile.frame, "has-logo", false);
      load(tile.logo, "");
      load(tile.img, server ? server.image(path, tile.size.w, tile.size.h) : "");
    }
    toggleClass(tile.fav, "on", !!item.fav);
    setText(tile.ph, logoUrl2 && tile.cap ? "" : titleFor(item, kind));
    const p = progress(item);
    show(tile.bar, p > 0.01);
    if (p > 0.01) setTransform(tile.fill, "scaleX(" + p.toFixed(3) + ")");
    let badge = "";
    if ((item.type === "show" || item.type === "season") && item.leafCount) {
      const left = item.leafCount - (item.viewedLeafCount || 0);
      badge = left > 0 ? String(left) : "\u2713";
    } else if (item.viewCount && !item.viewOffset && item.type !== "show") {
      badge = "\u2713";
    }
    show(tile.badge, !!badge);
    setText(tile.badge, badge);
    if (tile.rate) {
      const rv = Number(item.audienceRating);
      const showR = rv > 0 && !item.live && item.type !== "episode" && item.type !== "category";
      show(tile.rate, showR);
      if (showR) setText(tile.rate, "\u2605 " + rv.toFixed(1));
    }
    toggleClass(tile.badge, "done", badge === "\u2713");
    if (tile.cap) {
      setText(tile.cap, kind === "episode" ? item.title : titleFor(item, kind));
      setText(tile.sub, kind === "episode" ? episodeLabel(item) + (item.duration ? "  \xB7  " + Math.round(item.duration / 6e4) + "m" : "") : subFor(item, kind));
    }
  }

  // app/js/ui/row.js
  var GAP = 28;
  var LEFT = 96;
  var BEHIND = 2;
  var Row = class {
    constructor({ title, kind = "poster", items = [], caption = false, onFocus, onSelect }) {
      this.kind = kind;
      this.size = KINDS[kind];
      this.step = this.size.w + GAP;
      this.items = items;
      this.index = 0;
      this.active = false;
      this.onFocus = onFocus;
      this.onSelect = onSelect;
      this.el = h("section", "row");
      this.titleEl = h("h2", "row-title", this.el);
      setText(this.titleEl, title || "");
      const clip = h("div", "row-clip", this.el);
      this.track = h("div", "row-track", clip);
      this.track.style.left = LEFT + "px";
      this.ring = h("div", "ring", clip);
      this.ring.style.left = LEFT - 8 + "px";
      this.ring.style.width = this.size.w + 16 + "px";
      this.ring.style.height = this.size.h + 16 + "px";
      this.captionH = caption ? 70 : 0;
      clip.style.height = this.size.h + this.captionH + 24 + "px";
      this.height = (title ? 64 : 0) + this.size.h + this.captionH + 24;
      const visible = Math.ceil((1920 - LEFT) / this.step);
      this.poolSize = visible + BEHIND + 2;
      this.pool = [];
      for (let i = 0; i < this.poolSize; i++) {
        const tile = createTile(kind, { caption });
        tile.index = -1;
        this.track.appendChild(tile.el);
        this.pool.push(tile);
      }
      this.render();
    }
    setItems(items, keepKey) {
      this.items = items;
      if (keepKey) {
        const i = items.findIndex((it) => it.ratingKey === keepKey);
        this.index = i >= 0 ? i : Math.min(this.index, items.length - 1);
      } else {
        this.index = Math.min(this.index, Math.max(0, items.length - 1));
      }
      for (const t of this.pool) {
        t.index = -1;
        t.item = void 0;
      }
      this.render();
    }
    setTitle(title) {
      setText(this.titleEl, title);
    }
    current() {
      return this.items[this.index];
    }
    setActive(on) {
      this.active = on;
      toggleClass(this.el, "active", on);
    }
    focusIndex(i) {
      if (!this.items.length) return;
      this.index = Math.max(0, Math.min(this.items.length - 1, i));
      this.render();
      if (this.onFocus) this.onFocus(this.current(), this);
    }
    // Returns false at the edges so the parent can decide what to do.
    move(dx) {
      const next = this.index + dx;
      if (next < 0 || next >= this.items.length) return false;
      this.index = next;
      this.render();
      if (this.onFocus) this.onFocus(this.current(), this);
      return true;
    }
    select() {
      if (this.onSelect && this.current()) this.onSelect(this.current(), this);
    }
    render() {
      const first = Math.max(0, this.index - BEHIND);
      const last2 = Math.min(this.items.length, first + this.poolSize);
      for (let i = first; i < last2; i++) {
        const tile = this.pool[i % this.poolSize];
        if (tile.index !== i) {
          tile.index = i;
          setTransform(tile.el, "translateX(" + i * this.step + "px)");
          tile.el.style.visibility = "";
        }
        fillTile(tile, this.items[i]);
      }
      for (const tile of this.pool) {
        if (tile.index < first || tile.index >= last2) {
          tile.index = -1;
          tile.el.style.visibility = "hidden";
        }
      }
      setTransform(this.track, "translateX(" + -this.index * this.step + "px)");
    }
  };

  // app/js/ui/backdrop.js
  var FALLBACK = { topLeft: "12302b", topRight: "0a1112", bottomLeft: "101c26", bottomRight: "080d0d" };
  var DIM = 0.78;
  function rgb(hex2) {
    const n = parseInt(hex2 || "0b0d12", 16);
    return [(n >> 16 & 255) * DIM, (n >> 8 & 255) * DIM, (n & 255) * DIM];
  }
  function createLayer(parent, className) {
    const canvas = h("canvas", className, parent);
    canvas.width = 2;
    canvas.height = 2;
    const opts = { preserveDrawingBuffer: true, antialias: false, alpha: false, depth: false, stencil: false };
    canvas._gl = canvas.getContext("webgl", opts) || canvas.getContext("experimental-webgl", opts);
    if (!canvas._gl) canvas._ctx = canvas.getContext("2d");
    return canvas;
  }
  function paint(canvas, colors) {
    const c = colors || FALLBACK;
    const px = [c.topLeft, c.topRight, c.bottomLeft, c.bottomRight].map(rgb);
    const gl = canvas._gl;
    if (gl) {
      gl.enable(gl.SCISSOR_TEST);
      px.forEach(([r, g, b], i) => {
        gl.scissor(i % 2, i < 2 ? 1 : 0, 1, 1);
        gl.clearColor(r / 255, g / 255, b / 255, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
      });
      return;
    }
    const img = canvas._ctx.createImageData(2, 2);
    px.forEach(([r, g, b], i) => {
      img.data.set([r, g, b, 255], i * 4);
    });
    canvas._ctx.putImageData(img, 0, 0);
  }
  var legacy = false;
  function legacyGradient(colors) {
    const c = colors || FALLBACK;
    return ["topLeft 0% 0%", "topRight 100% 0%", "bottomLeft 0% 100%", "bottomRight 100% 100%"].map((s) => {
      const [k, x, y] = s.split(" ");
      return "radial-gradient(ellipse at " + x + " " + y + ", #" + c[k] + " 0%, transparent 70%)";
    }).join(",") + ",#0B0D12";
  }
  var Ambience = class {
    constructor(parent) {
      this.el = h("div", "ambience", parent);
      this.layers = [createLayer(this.el, "amb-layer on"), createLayer(this.el, "amb-layer")];
      paint(this.layers[0], null);
      this.front = 0;
      this.key = "";
    }
    set(colors) {
      const key = colors ? colors.topLeft + colors.topRight + colors.bottomLeft + colors.bottomRight : "";
      if (key === this.key) return;
      this.key = key;
      this.colors = colors;
      if (legacy) {
        this.el.style.background = legacyGradient(colors);
        return;
      }
      const back2 = 1 - this.front;
      paint(this.layers[back2], colors);
      this.layers[back2].classList.add("on");
      this.layers[this.front].classList.remove("on");
      this.front = back2;
    }
  };
  var shared = null;
  function useAmbience(initial) {
    if (!shared) shared = new Ambience(document.body.insertBefore(document.createElement("div"), document.body.firstChild));
    let colors = initial || null;
    return {
      set(c) {
        colors = c || null;
        shared.set(colors);
      },
      restore() {
        shared.set(colors);
      }
    };
  }
  var HeroArt = class {
    constructor(parent, className) {
      this.el = h("div", className || "hero-art", parent);
      this.imgs = [h("img", "hero-img", this.el), h("img", "hero-img", this.el)];
      this.front = 0;
      this.url = "";
      this.token = 0;
      h("div", "hero-fade", this.el);
    }
    set(url) {
      if (url === this.url) return;
      this.url = url;
      const token = ++this.token;
      if (!url) {
        this.imgs.forEach((i) => i.classList.remove("on"));
        return;
      }
      const back2 = this.imgs[1 - this.front];
      const loader = new Image();
      loader.src = url;
      const swap = () => {
        if (token !== this.token) return;
        back2.src = url;
        back2.classList.add("on");
        this.imgs[this.front].classList.remove("on");
        this.front = 1 - this.front;
      };
      if (loader.decode) loader.decode().then(swap, () => {
      });
      else loader.onload = swap;
    }
  };

  // app/js/ui/icons.js
  var play = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>';
  var pause = '<svg viewBox="0 0 24 24"><rect fill="currentColor" x="5" y="4" width="5" height="16" rx="1.2"/><rect fill="currentColor" x="14" y="4" width="5" height="16" rx="1.2"/></svg>';
  var restart = '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/></svg>';
  var check = '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var uncheck = '<svg viewBox="0 0 24 24"><circle fill="none" stroke="currentColor" stroke-width="2.4" cx="12" cy="12" r="8"/></svg>';
  var tv = '<svg viewBox="0 0 24 24"><rect fill="none" stroke="currentColor" stroke-width="2.2" x="3" y="6" width="18" height="13" rx="2.5"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M8.5 2.5L12 6l3.5-3.5"/></svg>';
  var search = '<svg viewBox="0 0 24 24"><circle fill="none" stroke="currentColor" stroke-width="2.6" cx="10.5" cy="10.5" r="6.5"/><path stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M15.5 15.5L20 20"/></svg>';
  var servers = '<svg viewBox="0 0 24 24"><rect fill="none" stroke="currentColor" stroke-width="2.2" x="3.5" y="3.5" width="17" height="7" rx="2"/><rect fill="none" stroke="currentColor" stroke-width="2.2" x="3.5" y="13.5" width="17" height="7" rx="2"/><circle fill="currentColor" cx="7.5" cy="7" r="1.2"/><circle fill="currentColor" cx="7.5" cy="17" r="1.2"/></svg>';
  var gear = '<svg viewBox="0 0 24 24"><circle fill="none" stroke="currentColor" stroke-width="2.4" cx="12" cy="12" r="3.2"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" d="M12 2.8l1.6 2.4 2.8-.7.7 2.8 2.4 1.6-1.2 2.6 1.2 2.6-2.4 1.6-.7 2.8-2.8-.7L12 21.2l-1.6-2.4-2.8.7-.7-2.8-2.4-1.6L5.7 12 4.5 9.4l2.4-1.6.7-2.8 2.8.7z"/></svg>';
  var subtitles = '<svg viewBox="0 0 24 24"><rect fill="none" stroke="currentColor" stroke-width="2.2" x="2.5" y="5" width="19" height="14" rx="2.5"/><path stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M6.5 15h4M13 15h4.5M6.5 11.5h7M15.5 11.5h2"/></svg>';
  var audio = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 9.5h3.5L12 5v14l-4.5-4.5H4z"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>';

  // app/js/nav.js
  var nav_exports = {};
  __export(nav_exports, {
    openItem: () => openItem,
    openLibrary: () => openLibrary,
    openSearch: () => openSearch,
    openServers: () => openServers,
    openSettings: () => openSettings,
    playItem: () => playItem
  });

  // app/js/screens/detail.js
  var SHIFT = 400;
  function DetailScreen(initial, { autoplay = false } = {}) {
    const el3 = h("div", "screen detail");
    const ambience = useAmbience(initial.UltraBlurColors);
    const art = new HeroArt(el3, "hero-art detail-art");
    const body = h("div", "detail-body", el3);
    const logo = h("img", "detail-logo", body);
    const title = h("h1", "detail-title", body);
    const sub = h("div", "detail-sub", body);
    const meta = h("div", "detail-meta", body);
    const tags = h("div", "detail-tags", body);
    const summary = h("p", "detail-summary", body);
    const buttonsEl = h("div", "detail-buttons", body);
    const seasonsEl = h("div", "detail-seasons", body);
    const episodesWrap = h("div", "detail-episodes", body);
    let item = initial;
    let buttons = [];
    let buttonIndex = 0;
    let seasons = [];
    let seasonIndex = 0;
    let episodes = null;
    let zone = "buttons";
    let alive = true;
    let shown = false;
    const isShowLike = () => item.type === "show";
    function renderHeader() {
      const server = session.server;
      const logoPath = clearLogo(item);
      const showTitle = item.type === "episode" ? item.grandparentTitle : item.title;
      if (logoPath) {
        logo.src = server.image(logoPath, 720, 240, { format: "png" });
        logo.style.display = "";
        title.style.display = "none";
      } else {
        logo.style.display = "none";
        title.style.display = "";
        setText(title, showTitle);
      }
      setText(sub, item.type === "episode" ? episodeLabel(item) + "   " + item.title : item.tagline || "");
      setText(meta, metaLine(item));
      const genres = (item.Genre || []).slice(0, 3).map((g) => g.tag);
      const people = (item.Director || []).slice(0, 1).map((d) => "Directed by " + d.tag).concat((item.Role || []).length ? ["Starring " + item.Role.slice(0, 3).map((r) => r.tag).join(", ")] : []);
      setText(tags, genres.concat(people).join("   \xB7   "));
      setText(summary, item.summary || "");
      ambience.set(item.UltraBlurColors);
      const artPath = item.type === "episode" ? item.grandparentArt || item.art : item.art;
      art.set(server.image(artPath, 1920, 1080));
    }
    function target() {
      if (!isShowLike()) return item;
      if (item.onDeck) return item.onDeck;
      if (!episodes) return null;
      const eps = episodes.items;
      return eps.find((e) => e.viewOffset) || eps.find((e) => !e.viewCount) || eps[0] || null;
    }
    function renderButtons() {
      buttonsEl.innerHTML = "";
      buttons = [];
      const t = target();
      const add = (icon, label, run) => {
        const b = h("div", "btn", buttonsEl);
        b.innerHTML = icon;
        h("span", "", b).textContent = label;
        buttons.push({ el: b, run });
      };
      if (t) {
        const prefix = isShowLike() ? episodeLabel(t) + "  " : "";
        if (t.viewOffset) {
          add(play, prefix + "Resume " + clock(t.viewOffset), () => playItem(t, { offset: t.viewOffset }));
          add(restart, "From the start", () => playItem(t, { offset: 0 }));
        } else {
          add(play, isShowLike() ? "Play " + prefix : "Play", () => playItem(t, { offset: 0 }));
        }
      }
      const watched = isShowLike() ? item.viewedLeafCount >= item.leafCount : !!item.viewCount;
      add(watched ? check : uncheck, watched ? "Watched" : "Mark watched", toggleWatched);
      if (item.type === "episode" && item.grandparentRatingKey) {
        add(tv, "Go to show", () => push(DetailScreen({ ratingKey: item.grandparentRatingKey, type: "show", title: item.grandparentTitle })));
      }
      buttonIndex = Math.min(buttonIndex, buttons.length - 1);
      renderFocus();
    }
    function renderSeasons() {
      seasonsEl.innerHTML = "";
      seasons.forEach((s) => {
        s.el = h("div", "pill", seasonsEl);
        s.el.textContent = s.title;
      });
      renderFocus();
    }
    function renderFocus() {
      buttons.forEach((b, i) => toggleClass(b.el, "focus", zone === "buttons" && i === buttonIndex));
      seasons.forEach((s, i) => {
        toggleClass(s.el, "focus", zone === "seasons" && i === seasonIndex);
        toggleClass(s.el, "current", i === seasonIndex);
      });
      if (episodes) episodes.row.setActive(zone === "episodes");
      setTransform(body, zone === "buttons" ? "translateY(0)" : "translateY(" + -SHIFT + "px)");
      toggleClass(el3, "shifted", zone !== "buttons");
    }
    function loadEpisodes(season) {
      return __async(this, null, function* () {
        const kids = yield session.server.children(season.ratingKey);
        if (!alive) return;
        if (!episodes) {
          const row = new Row({
            kind: "episode",
            caption: true,
            items: kids,
            onSelect: (ep) => playItem(ep, { offset: ep.viewOffset || 0 })
          });
          episodesWrap.appendChild(row.el);
          episodes = { row, items: kids };
        } else {
          episodes.items = kids;
          episodes.row.setItems(kids);
        }
        const next = kids.findIndex((k) => !k.viewCount || k.viewOffset);
        episodes.row.focusIndex(next >= 0 ? next : 0);
        renderFocus();
      });
    }
    function load2() {
      return __async(this, null, function* () {
        try {
          let key = item.ratingKey;
          let preferSeason = null;
          if (item.type === "season") {
            preferSeason = item.ratingKey;
            key = item.parentRatingKey;
          }
          const full = yield session.server.metadata(key);
          if (!alive || !full) return;
          item = full;
          renderHeader();
          if (isShowLike()) {
            seasons = (yield session.server.children(item.ratingKey)).filter((s) => s.type === "season");
            if (!alive) return;
            const deckSeason = item.onDeck ? seasons.findIndex((s) => s.ratingKey === item.onDeck.parentRatingKey) : -1;
            const pref = preferSeason ? seasons.findIndex((s) => s.ratingKey === preferSeason) : -1;
            seasonIndex = pref >= 0 ? pref : deckSeason >= 0 ? deckSeason : 0;
            renderSeasons();
            if (seasons[seasonIndex]) yield loadEpisodes(seasons[seasonIndex]);
          }
          renderButtons();
          if (autoplay) {
            autoplay = false;
            const t = target();
            if (t) playItem(t, { offset: t.viewOffset || 0 });
          }
        } catch (e) {
          error("detail load failed", e);
          setText(summary, "Couldn't load details.");
        }
      });
    }
    function toggleWatched() {
      return __async(this, null, function* () {
        const server = session.server;
        const watched = isShowLike() ? item.viewedLeafCount >= item.leafCount : !!item.viewCount;
        try {
          if (watched) yield server.unscrobble(item.ratingKey);
          else yield server.scrobble(item.ratingKey);
          server.invalidate();
          yield load2();
        } catch (e) {
          error("toggle watched failed", e);
        }
      });
    }
    if (item.title) renderHeader();
    renderButtons();
    load2();
    function moveZone(dir) {
      const order = ["buttons"];
      if (seasons.length > 1) order.push("seasons");
      if (episodes) order.push("episodes");
      const i = order.indexOf(zone) + dir;
      if (i < 0 || i >= order.length) return;
      zone = order[i];
      renderFocus();
    }
    return {
      el: el3,
      name: "detail",
      onShow() {
        ambience.restore();
        if (shown) {
          session.server.invalidate();
          load2();
        }
        shown = true;
      },
      onKey(action) {
        if (action === "up") {
          moveZone(-1);
          return true;
        }
        if (action === "down") {
          moveZone(1);
          return true;
        }
        if (action === "play" || action === "playpause") {
          const t = zone === "episodes" ? episodes.row.current() : target();
          if (t) playItem(t, { offset: t.viewOffset || 0 });
          return true;
        }
        if (zone === "buttons") {
          if (action === "left") {
            buttonIndex = Math.max(0, buttonIndex - 1);
            renderFocus();
            return true;
          }
          if (action === "right") {
            buttonIndex = Math.min(buttons.length - 1, buttonIndex + 1);
            renderFocus();
            return true;
          }
          if (action === "enter" && buttons[buttonIndex]) {
            buttons[buttonIndex].run();
            return true;
          }
        } else if (zone === "seasons") {
          if (action === "left" || action === "right") {
            const next = seasonIndex + (action === "right" ? 1 : -1);
            if (next >= 0 && next < seasons.length) {
              seasonIndex = next;
              renderFocus();
              loadEpisodes(seasons[seasonIndex]).catch((e) => error("episodes failed", e));
            }
            return true;
          }
          if (action === "enter") {
            moveZone(1);
            return true;
          }
        } else if (zone === "episodes") {
          if (action === "left") {
            episodes.row.move(-1);
            return true;
          }
          if (action === "right") {
            episodes.row.move(1);
            return true;
          }
          if (action === "enter") {
            episodes.row.select();
            return true;
          }
          if (action === "info") {
            push(DetailScreen(episodes.row.current()));
            return true;
          }
        }
        if (action === "back" && zone !== "buttons") {
          zone = "buttons";
          renderFocus();
          return true;
        }
        return false;
      },
      destroy() {
        alive = false;
      }
    };
  }

  // app/js/ui/grid.js
  var Grid = class {
    constructor({ cols = 7, kind = "grid", gapX = 41, gapY = 28, captionH = 70, top: top2 = 0, height = 1080, getItem, total = 0, onFocus, onSelect, onNeed }) {
      this.cols = cols;
      this.size = KINDS[kind];
      this.stepX = this.size.w + gapX;
      this.stepY = this.size.h + captionH + gapY;
      this.getItem = getItem;
      this.total = total;
      this.onFocus = onFocus;
      this.onSelect = onSelect;
      this.onNeed = onNeed;
      this.index = 0;
      this.scrollRow = 0;
      this.el = h("div", "grid");
      this.el.style.top = top2 + "px";
      this.el.style.height = height + "px";
      this.track = h("div", "grid-track", this.el);
      this.ring = h("div", "ring on", this.track);
      this.ring.style.width = this.size.w + 16 + "px";
      this.ring.style.height = this.size.h + 16 + "px";
      this.visibleRows = Math.ceil(height / this.stepY) + 1;
      this.poolRows = this.visibleRows + 2;
      this.rows = [];
      for (let r = 0; r < this.poolRows; r++) {
        const rowEl = h("div", "grid-row", this.track);
        const tiles = [];
        for (let c = 0; c < cols; c++) {
          const tile = createTile(kind, { caption: true });
          setTransform(tile.el, "translateX(" + c * this.stepX + "px)");
          rowEl.appendChild(tile.el);
          tiles.push(tile);
        }
        this.rows.push({ el: rowEl, tiles, row: -1 });
      }
      this.render();
    }
    get rowCount() {
      return Math.ceil(this.total / this.cols);
    }
    setTotal(total) {
      this.total = total;
      this.refresh();
    }
    current() {
      return this.getItem(this.index);
    }
    // Data for some rows arrived: re-fill whatever is on screen.
    refresh() {
      for (const r of this.rows) r.row = -1;
      this.render();
    }
    move(dx, dy) {
      const col = this.index % this.cols;
      let next = this.index;
      if (dx) {
        if (col + dx < 0 || col + dx >= this.cols) return false;
        next += dx;
      }
      if (dy) next += dy * this.cols;
      if (next < 0) return false;
      if (next >= this.total) {
        if (dy > 0 && Math.floor(next / this.cols) < this.rowCount) next = this.total - 1;
        else return false;
      }
      if (next === this.index) return false;
      this.focusIndex(next);
      return true;
    }
    focusIndex(i) {
      this.index = Math.max(0, Math.min(this.total - 1, i));
      this.render();
      if (this.onFocus) this.onFocus(this.current(), this.index);
    }
    select() {
      const item = this.current();
      if (item && this.onSelect) this.onSelect(item, this.index);
    }
    render() {
      const focusRow = Math.floor(this.index / this.cols);
      this.scrollRow = Math.max(0, focusRow - 1);
      const firstRow = Math.max(0, this.scrollRow - 1);
      const lastRow = Math.min(this.rowCount, firstRow + this.poolRows);
      for (let r = firstRow; r < lastRow; r++) {
        const slot = this.rows[r % this.poolRows];
        if (slot.row === r) continue;
        slot.row = r;
        slot.el.style.visibility = "";
        setTransform(slot.el, "translateY(" + r * this.stepY + "px)");
        for (let c = 0; c < this.cols; c++) {
          const i = r * this.cols + c;
          const tile = slot.tiles[c];
          if (i < this.total) {
            tile.el.style.visibility = "";
            fillTile(tile, this.getItem(i) || null);
          } else {
            tile.el.style.visibility = "hidden";
          }
        }
      }
      for (const slot of this.rows) {
        if (slot.row < firstRow || slot.row >= lastRow) {
          slot.row = -1;
          slot.el.style.visibility = "hidden";
        }
      }
      if (this.onNeed) this.onNeed(firstRow * this.cols, lastRow * this.cols + this.cols * 4);
      setTransform(this.track, "translateY(" + -this.scrollRow * this.stepY + "px)");
      const col = this.index % this.cols;
      setTransform(this.ring, "translate(" + (col * this.stepX - 8) + "px," + (focusRow * this.stepY - 8) + "px)");
    }
  };

  // app/js/ui/toast.js
  var el = null;
  var timer2 = 0;
  function toast(text, ms2) {
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add("on");
    clearTimeout(timer2);
    timer2 = setTimeout(() => el.classList.remove("on"), ms2 || 2600);
  }

  // app/js/screens/library.js
  var PAGE = 140;
  var SORTS2 = [
    { id: "server", label: "Server order" },
    { id: "titleSort", label: "A\u2013Z" },
    { id: "addedAt:desc", label: "Recently added" },
    { id: "originallyAvailableAt:desc", label: "Release date" },
    { id: "audienceRating:desc", label: "Rating" }
  ];
  function LibraryScreen(section) {
    const el3 = h("div", "screen library");
    const ambience = useAmbience();
    const head = h("header", "lib-head", el3);
    h("h1", "lib-title", head).textContent = section.title;
    const count = h("div", "lib-count", head);
    const sortEl = h("div", "lib-sort", head);
    const focusInfo = h("div", "lib-focus", el3);
    const hint = h("div", "lib-hint", el3);
    hint.innerHTML = '<i class="key-yellow"></i> Sort &nbsp;&nbsp; CH \u25B2\u25BC Jump' + (String(section.key).indexOf("live") === 0 ? ' &nbsp;&nbsp; <i class="key-red"></i> Favorite' : "");
    let sortIndex = 0;
    let seenRev = session.server.favRev;
    let pages = /* @__PURE__ */ new Map();
    let items = [];
    let letters = [];
    let generation = 0;
    const type = section.type === "show" ? 2 : 1;
    let grid = null;
    grid = new Grid({
      top: 200,
      height: 880,
      total: 0,
      getItem: (i) => items[i],
      onFocus: (item, index) => {
        if (!grid) return;
        if (!isFast()) {
          const start2 = (Math.floor(index / grid.cols) + grid.poolRows - 1) * grid.cols;
          for (let i = start2; i < start2 + grid.cols; i++) {
            if (items[i]) prefetch(session.server.image(items[i].thumb, 216, 324));
          }
        }
        if (!item) {
          setText(focusInfo, "");
          return;
        }
        setText(focusInfo, item.title + "   " + metaLine(item));
        ambience.set(item.UltraBlurColors);
      },
      onSelect: (item) => openItem(item),
      onNeed: (start2, end) => {
        if (!grid) return;
        for (let p = Math.floor(start2 / PAGE); p <= Math.floor(end / PAGE); p++) loadPage(p);
      }
    });
    el3.appendChild(grid.el);
    function loadPage(p) {
      return __async(this, null, function* () {
        if (pages.has(p)) return;
        if (grid.total && p * PAGE >= grid.total) return;
        pages.set(p, "loading");
        const gen = generation;
        try {
          const res = yield session.server.items(section.key, p * PAGE, PAGE, { sort: SORTS2[sortIndex].id, type });
          if (gen !== generation) return;
          res.items.forEach((it, i) => {
            items[p * PAGE + i] = it;
          });
          pages.set(p, true);
          if (grid.total !== res.total) {
            grid.setTotal(res.total);
            setText(count, res.total + " " + (section.noun || (section.type === "show" ? "shows" : "movies")));
          } else {
            grid.refresh();
          }
          if (p === 0 && res.items[0]) {
            setText(sortEl, res.items[0].type === "category" ? "Server order" : "Sorted by " + SORTS2[sortIndex].label);
            grid.onFocus(grid.current());
          }
        } catch (e) {
          pages.delete(p);
          error("library page failed", section.title, p, e);
        }
      });
    }
    function loadLetters() {
      return __async(this, null, function* () {
        letters = [];
        if (SORTS2[sortIndex].id !== "titleSort") return;
        try {
          const mc = yield session.server.get("/library/sections/" + section.key + "/firstCharacter", { type });
          let start2 = 0;
          letters = (mc.Directory || []).map((d) => {
            const l = { title: d.title, start: start2 };
            start2 += d.size;
            return l;
          });
        } catch (e) {
        }
      });
    }
    function reload() {
      generation++;
      pages = /* @__PURE__ */ new Map();
      items = [];
      setText(sortEl, "Sorted by " + SORTS2[sortIndex].label);
      grid.total = 0;
      grid.index = 0;
      grid.refresh();
      loadPage(0);
      loadLetters();
    }
    reload();
    function jump(dir) {
      if (letters.length) {
        const i = grid.index;
        let li = letters.findIndex((l, k) => i >= l.start && (k === letters.length - 1 || i < letters[k + 1].start));
        li = Math.max(0, Math.min(letters.length - 1, li + dir));
        grid.focusIndex(letters[li].start);
        setText(focusInfo, letters[li].title);
      } else {
        grid.focusIndex(grid.index + dir * grid.cols * 3);
      }
    }
    return {
      el: el3,
      name: "library",
      onShow() {
        ambience.restore();
        if (session.server.favRev !== void 0 && session.server.favRev !== seenRev) {
          seenRev = session.server.favRev;
          reload();
        }
      },
      onKey(action) {
        switch (action) {
          case "left":
            grid.move(-1, 0);
            return true;
          case "right":
            grid.move(1, 0);
            return true;
          case "up":
            grid.move(0, -1);
            return true;
          case "down":
            grid.move(0, 1);
            return true;
          case "pageup":
            jump(-1);
            return true;
          case "pagedown":
            jump(1);
            return true;
          case "enter":
            grid.select();
            return true;
          case "play":
          case "playpause":
            if (grid.current()) playItem(grid.current());
            return true;
          case "red": {
            const it = grid.current();
            const srv = session.server;
            if (it && it.live && srv.toggleFav) {
              const on = srv.toggleFav(it);
              it.fav = on;
              seenRev = srv.favRev;
              toast(on ? "Added to favorites" : "Removed from favorites");
              if (section.key === "live:fav" && !on) reload();
              else grid.refresh();
            }
            return true;
          }
          case "yellow":
            sortIndex = (sortIndex + 1) % SORTS2.length;
            reload();
            return true;
          case "back":
            if (grid.index > grid.cols * 2) {
              grid.focusIndex(0);
              return true;
            }
            return false;
        }
        return false;
      }
    };
  }

  // app/js/platform/player.js
  function avplayBackend(container, listener) {
    const av = webapis.avplay;
    const obj = document.createElement("object");
    obj.type = "application/avplayer";
    obj.className = "av-object";
    container.appendChild(obj);
    let opened = false;
    const api = {
      open(url, { uhd = false } = {}) {
        api.close();
        av.open(url);
        opened = true;
        try {
          const secs = Math.max(1, Number(get("liveBuffer", 6)) || 6);
          av.setBufferingParam("PLAYER_BUFFER_FOR_PLAY", "PLAYER_BUFFER_SIZE_IN_SECOND", secs);
          av.setBufferingParam("PLAYER_BUFFER_FOR_RESUME", "PLAYER_BUFFER_SIZE_IN_SECOND", Math.min(secs, 5));
        } catch (e) {
        }
        av.setDisplayRect(0, 0, 1920, 1080);
        av.setDisplayMethod("PLAYER_DISPLAY_MODE_LETTER_BOX");
        if (uhd) {
          try {
            av.setStreamingProperty("SET_MODE_4K", "TRUE");
          } catch (e) {
          }
        }
        av.setListener({
          onbufferingstart: () => listener.onBuffering(true),
          onbufferingprogress: () => {
          },
          onbufferingcomplete: () => listener.onBuffering(false),
          oncurrentplaytime: (ms2) => listener.onTime(ms2),
          onstreamcompleted: () => listener.onEnd(),
          onerror: (e) => listener.onError(String(e)),
          onevent: () => {
          },
          onsubtitlechange: (duration2, text) => listener.onSubtitle(text, Number(duration2)),
          ondrmevent: () => {
          }
        });
      },
      prepare() {
        return new Promise((resolve, reject) => av.prepareAsync(resolve, (e) => reject(new Error(String(e && e.name || e)))));
      },
      play() {
        av.play();
      },
      pause() {
        av.pause();
      },
      seek(ms2) {
        return new Promise((resolve, reject) => av.seekTo(Math.max(0, Math.floor(ms2)), resolve, (e) => reject(new Error(String(e && e.name || e)))));
      },
      time() {
        try {
          return av.getCurrentTime();
        } catch (e) {
          return 0;
        }
      },
      state() {
        try {
          return av.getState();
        } catch (e) {
          return "NONE";
        }
      },
      info() {
        try {
          const v = (av.getCurrentStreamInfo() || []).find((s) => s.type === "VIDEO");
          const x = v && JSON.parse(v.extra_info);
          return { width: Number(x.Width), height: Number(x.Height) };
        } catch (e) {
          return null;
        }
      },
      tracks() {
        let info = [];
        try {
          info = av.getTotalTrackInfo() || [];
        } catch (e) {
        }
        return {
          audio: info.filter((t) => t.type === "AUDIO").map((t) => t.index),
          text: info.filter((t) => t.type === "TEXT").map((t) => t.index)
        };
      },
      selectAudio(avIndex) {
        try {
          av.setSelectTrack("AUDIO", avIndex);
          return true;
        } catch (e) {
          return false;
        }
      },
      selectText(avIndex) {
        try {
          if (avIndex == null) {
            av.setSilentSubtitle(true);
            return true;
          }
          av.setSelectTrack("TEXT", avIndex);
          av.setSilentSubtitle(false);
          return true;
        } catch (e) {
          return false;
        }
      },
      suspend() {
        try {
          av.suspend();
        } catch (e) {
        }
      },
      restore() {
        try {
          av.restore();
        } catch (e) {
        }
      },
      close() {
        if (!opened) return;
        opened = false;
        try {
          av.stop();
        } catch (e) {
        }
        try {
          av.close();
        } catch (e) {
        }
      },
      destroy() {
        api.close();
        if (obj.parentNode) obj.parentNode.removeChild(obj);
      }
    };
    return api;
  }
  var scripts = {};
  function loadScript(src, global) {
    if (window[global]) return Promise.resolve(window[global]);
    if (!scripts[src]) {
      scripts[src] = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve(window[global]);
        s.onerror = () => reject(new Error("Could not load " + src));
        document.head.appendChild(s);
      });
    }
    return scripts[src];
  }
  function kindOf(url, format) {
    if (format === "hls" || /\.m3u8(\?|$)/i.test(url)) return "hls";
    if (format === "ts" || /\.ts(\?|$)/i.test(url)) return "ts";
    return "native";
  }
  var liveBuffer = () => Math.max(1, Number(get("liveBuffer", 6)) || 6);
  function videoBackend(container, listener) {
    const v = document.createElement("video");
    v.className = "av-object";
    v.poster = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    v.controls = false;
    v.setAttribute("playsinline", "");
    v.setAttribute("disablepictureinpicture", "");
    container.appendChild(v);
    let hls = null;
    let ts = null;
    let source = "";
    let kind = "native";
    v.addEventListener("timeupdate", () => listener.onTime(v.currentTime * 1e3));
    v.addEventListener("waiting", () => {
      listener.onBuffering(true);
      maybeRebuffer();
    });
    v.addEventListener("playing", () => listener.onBuffering(false));
    v.addEventListener("ended", () => listener.onEnd());
    v.addEventListener("error", () => {
      if (kind === "native") listener.onError("video error " + (v.error && v.error.code));
    });
    function stopStreams() {
      if (abandon) {
        abandon();
        abandon = null;
      }
      if (hls) {
        try {
          hls.destroy();
        } catch (e) {
        }
        hls = null;
      }
      if (ts) {
        try {
          ts.pause();
          ts.unload();
          ts.detachMediaElement();
          ts.destroy();
        } catch (e) {
        }
        ts = null;
      }
    }
    const nativeHls = () => !!v.canPlayType("application/vnd.apple.mpegurl");
    let abandon = null;
    function waitFrame(setup) {
      if (abandon) abandon();
      return new Promise((resolve, reject) => {
        let state = "pending";
        const onData = () => {
          if (state !== "pending") return;
          state = "playing";
          v.removeEventListener("loadeddata", onData);
          resolve();
        };
        abandon = () => {
          state = "abandoned";
          v.removeEventListener("loadeddata", onData);
        };
        v.addEventListener("loadeddata", onData);
        setup((e) => {
          if (state === "pending") {
            state = "abandoned";
            v.removeEventListener("loadeddata", onData);
            reject(e);
          } else if (state === "playing") listener.onError(e.message);
        });
      });
    }
    function ahead() {
      const b = v.buffered;
      for (let i = 0; i < b.length; i++) {
        if (v.currentTime >= b.start(i) - 0.5 && v.currentTime <= b.end(i)) return b.end(i) - Math.max(v.currentTime, b.start(i));
      }
      return 0;
    }
    const isLiveKind = () => kind === "ts" || kind === "hls";
    let hold = 0;
    function whenBuffered(seconds, limit, go) {
      clearInterval(hold);
      const t0 = Date.now();
      hold = setInterval(() => {
        if (ahead() >= seconds || Date.now() - t0 > limit) {
          clearInterval(hold);
          hold = 0;
          go();
        }
      }, 200);
    }
    function maybeRebuffer() {
      if (!isLiveKind() || hold || v.seeking || v.currentTime < 0.5 || v.paused) return;
      v.pause();
      whenBuffered(Math.max(2, Math.min(liveBuffer() / 2, 6)), 15e3, () => v.play().catch(() => {
      }));
    }
    return {
      open(url, opts) {
        clearInterval(hold);
        hold = 0;
        stopStreams();
        source = url;
        kind = kindOf(url, opts && opts.format);
        if (kind === "native" || kind === "hls" && nativeHls()) {
          kind = "native";
          v.src = url;
        }
      },
      prepare() {
        return __async(this, null, function* () {
          if (kind === "hls") {
            const Hls = yield loadScript("js/vendor/hls.min.js", "Hls");
            if (!Hls.isSupported()) throw new Error("This browser cannot play HLS");
            return waitFrame((fail) => {
              hls = new Hls({
                manifestLoadingTimeOut: 8e3,
                manifestLoadingMaxRetry: 1,
                levelLoadingTimeOut: 8e3,
                levelLoadingMaxRetry: 1,
                fragLoadingTimeOut: 15e3,
                fragLoadingMaxRetry: 2,
                liveSyncDuration: Math.max(liveBuffer(), 3),
                liveMaxLatencyDuration: liveBuffer() * 3 + 12,
                maxBufferLength: 40,
                backBufferLength: 30,
                lowLatencyMode: false,
                // In a plain browser the local server relays requests; the desktop app needs no relay.
                xhrSetup: (xhr, u) => {
                  const proxy = proxyBase();
                  if (proxy && !isAndroid) xhr.open("GET", proxy + "/proxy?url=" + encodeURIComponent(u), true);
                }
              });
              hls.on(Hls.Events.ERROR, (e, data) => {
                if (data && data.fatal) fail(new Error("stream error: " + data.details + (data.response && data.response.code ? " (HTTP " + data.response.code + ")" : "")));
              });
              hls.attachMedia(v);
              hls.loadSource(source);
            });
          }
          if (kind === "ts") {
            const mpegts = yield loadScript("js/vendor/mpegts.js", "mpegts");
            if (!mpegts.getFeatureList().mseLivePlayback) throw new Error("This browser cannot play live TS streams");
            return waitFrame((fail) => {
              ts = mpegts.createPlayer({ type: "mpegts", isLive: true, url: source }, {
                enableWorker: false,
                enableStashBuffer: true,
                stashInitialSize: 1024 * 1024,
                // read ahead in big gulps
                liveBufferLatencyChasing: false,
                // chasing the live edge is what caused the stutter
                lazyLoad: false,
                autoCleanupSourceBuffer: true,
                autoCleanupMaxBackwardDuration: 60,
                autoCleanupMinBackwardDuration: 30
                // long sessions must not fill memory
              });
              ts.on(mpegts.Events.ERROR, (type, detail) => fail(new Error("stream error: " + type + (detail ? " " + detail : ""))));
              ts.attachMediaElement(v);
              ts.load();
            });
          }
          return new Promise((resolve, reject) => {
            v.addEventListener("loadedmetadata", resolve, { once: true });
            v.addEventListener("error", () => reject(new Error("load failed")), { once: true });
            v.load();
          });
        });
      },
      play() {
        const go = () => {
          const p = v.play();
          if (p && p.catch) p.catch(() => {
          });
        };
        if (!isLiveKind()) {
          go();
          return;
        }
        listener.onBuffering(true);
        whenBuffered(liveBuffer(), 2e4, go);
      },
      pause() {
        clearInterval(hold);
        hold = 0;
        v.pause();
      },
      seek(ms2) {
        v.currentTime = ms2 / 1e3;
        return Promise.resolve();
      },
      time() {
        return v.currentTime * 1e3;
      },
      info() {
        return { width: v.videoWidth, height: v.videoHeight };
      },
      state() {
        return v.paused ? "PAUSED" : "PLAYING";
      },
      tracks() {
        return { audio: [], text: [] };
      },
      selectAudio() {
        return false;
      },
      selectText() {
        return false;
      },
      suspend() {
      },
      restore() {
      },
      close() {
        clearInterval(hold);
        hold = 0;
        stopStreams();
        v.removeAttribute("src");
        v.load();
      },
      destroy() {
        clearInterval(hold);
        stopStreams();
        v.removeAttribute("src");
        if (v.parentNode) v.parentNode.removeChild(v);
      }
    };
  }

  // ===================================================================================
  // Native video (Android). The picture is decoded by Android's own player on a surface behind the page, like a
  // normal player app; the page stays on top and is transparent where the picture shows. If the native player
  // can't start a stream, that stream is opened with the web player instead, so nothing gets worse.
  // ===================================================================================
  var zpOwner = null;
  window.__zenPlayerEvent = function(e) {
    if (zpOwner && zpOwner.onEvent) zpOwner.onEvent(e);
  };
  function nativeOk() {
    return !!(window.ZenPlayer && window.ZenPlayer.version) && get("engine", "native") !== "web" && (get("nativeFails", 0) || 0) < 3;
  }
  function nativeBackend(container, listener) {
    const Z = window.ZenPlayer;
    const root3 = document.documentElement;
    let fb = null, url2 = "", opts2 = {}, readyOk = false, poll = 0, pending = null, seeking = null, dur = 0, lastT = 0, retries = 0, resumeAt = 0;
    function cls(on) {
      if (on) root3.classList.add("zp-native");
      else root3.classList.remove("zp-native");
    }
    function startPoll() {
      clearInterval(poll);
      poll = setInterval(() => {
        try {
          const tt = Number(Z.time());
          if (tt > 0) lastT = tt;
          listener.onTime(tt);
        } catch (e) {
        }
      }, 500);
    }
    function recover() {
      if (fb || !(dur > 0)) return false;
      const t = Math.max(lastT, 0);
      if (t >= dur - 20000) return false;
      if (retries < 3) {
        retries++;
        resumeAt = t;
        readyOk = false;
        try {
          listener.onBuffering(true);
          Z.open(url2, navigator.userAgent || "VLC/3.0.20 LibVLC/3.0.20");
        } catch (e) {
          return false;
        }
        return true;
      }
      retries = 0;
      try {
        Z.stop();
      } catch (e) {
      }
      cls(false);
      clearInterval(poll);
      fb = videoBackend(container, listener);
      fb.open(url2, opts2);
      fb.prepare().then(() => fb.seek(t)).then(() => fb.play()).catch(() => listener.onError("playback stopped"));
      return true;
    }
    const api = {
      onEvent(e) {
        if (fb) return;
        if (e.t === "ready") {
          readyOk = true;
          dur = Number(e.d) > 0 ? Number(e.d) : 0;
          if (resumeAt > 0) {
            const ra = resumeAt;
            resumeAt = 0;
            try {
              Z.seek(Math.floor(ra));
              Z.play();
              listener.onBuffering(false);
            } catch (e2) {
            }
            return;
          }
          if (pending) {
            pending.resolve();
            pending = null;
          }
        } else if (e.t === "error") {
          const msg = "player error " + e.what + (e.extra ? " (" + e.extra + ")" : "");
          if (pending) {
            pending.reject(new Error(msg));
            pending = null;
          } else if (readyOk) {
            if (!recover()) listener.onError(msg);
          } else if (resumeAt > 0) {
            resumeAt = 0;
            if (!recover()) listener.onError(msg);
          }
        } else if (e.t === "buffering") listener.onBuffering(true);
        else if (e.t === "playing" || e.t === "rendering") listener.onBuffering(false);
        else if (e.t === "end") {
          if (!recover()) listener.onEnd();
        }
        else if (e.t === "seeked" && seeking) {
          const f = seeking;
          seeking = null;
          f();
        }
      },
      open(url, opts) {
        if (fb) {
          try {
            fb.destroy();
          } catch (e) {
          }
          fb = null;
        }
        zpOwner = api;
        url2 = url;
        opts2 = opts || {};
        readyOk = false;
        cls(true);
        const r = opts2.rect || [0, 0, 1, 1];
        try {
          Z.rect(r[0], r[1], r[2], r[3]);
        } catch (e) {
        }
        Z.open(url, navigator.userAgent || "VLC/3.0.20 LibVLC/3.0.20");
      },
      prepare() {
        if (fb) return fb.prepare();
        return new Promise((resolve, reject) => {
          const t = setTimeout(() => {
            if (pending) {
              pending = null;
              reject(new Error("native player timed out"));
            }
          }, 25e3);
          pending = { resolve: () => {
            clearTimeout(t);
            resolve();
          }, reject: (e) => {
            clearTimeout(t);
            reject(e);
          } };
        }).then(() => {
          set("nativeFails", 0);
        }, () => {
          try {
            Z.stop();
          } catch (e) {
          }
          cls(false);
          clearInterval(poll);
          fb = videoBackend(container, listener);
          fb.open(url2, opts2);
          return fb.prepare().then(() => {
            set("nativeFails", (get("nativeFails", 0) || 0) + 1);
          });
        });
      },
      setRect(r) {
        if (!fb) try {
          Z.rect(r[0], r[1], r[2], r[3]);
        } catch (e) {
        }
      },
      play() {
        if (fb) return fb.play();
        Z.play();
        startPoll();
      },
      pause() {
        if (fb) return fb.pause();
        Z.pause();
      },
      seek(ms2) {
        if (fb) return fb.seek(ms2);
        return new Promise((resolve) => {
          const f = () => resolve();
          seeking = f;
          Z.seek(Math.floor(ms2));
          setTimeout(() => {
            if (seeking === f) {
              seeking = null;
              resolve();
            }
          }, 4e3);
        });
      },
      time() {
        return fb ? fb.time() : Number(Z.time());
      },
      info() {
        if (fb) return fb.info();
        try {
          return JSON.parse(Z.info());
        } catch (e) {
          return null;
        }
      },
      state() {
        return fb ? fb.state() : Z.playing() ? "PLAYING" : "PAUSED";
      },
      tracks() {
        if (fb) return fb.tracks();
        try {
          return JSON.parse(Z.tracks());
        } catch (e) {
          return { audio: [], text: [] };
        }
      },
      selectAudio(i) {
        return fb ? fb.selectAudio(i) : !!Z.selectAudio(i);
      },
      selectText(i) {
        return fb ? fb.selectText(i) : false;
      },
      suspend() {
        if (fb) return fb.suspend();
        try {
          Z.pause();
        } catch (e) {
        }
      },
      restore() {
        if (fb) fb.restore();
      },
      close() {
        clearInterval(poll);
        pending = null;
        if (fb) fb.close();
        else try {
          Z.stop();
        } catch (e) {
        }
        cls(false);
      },
      destroy() {
        api.close();
        if (fb) {
          fb.destroy();
          fb = null;
        }
        if (zpOwner === api) zpOwner = null;
      }
    };
    return api;
  }

  // ===================================================================================
  // Other video players (Android): VLC, MX Player, an ExoPlayer-based player (Just Player / Next Player), or the
  // system chooser. The stream is handed to that app; when the user comes back, the app returns to where it was.
  // The app's own channel list and info bar belong to the built-in player and are not shown by other players.
  // ===================================================================================
  var EXT_PLAYERS = {
    vlc: { label: "VLC", pkgs: ["org.videolan.vlc"] },
    mx: { label: "MX Player", pkgs: ["com.mxtech.videoplayer.pro", "com.mxtech.videoplayer.ad"] },
    exo: { label: "ExoPlayer (Just Player)", pkgs: ["com.brouken.player", "dev.anilbeesetti.nextplayer"] },
    any: { label: "Ask every time", pkgs: [] }
  };
  function extPkg(id) {
    const Z = window.ZenPlayer;
    if (!Z || !Z.hasPackage) return "";
    const l = id && EXT_PLAYERS[id] ? EXT_PLAYERS[id].pkgs : [];
    for (let i = 0; i < l.length; i++) {
      try {
        if (Z.hasPackage(l[i])) return l[i];
      } catch (e) {
      }
    }
    return "";
  }
  function engineList() {
    const l = ["native", "web"];
    ["vlc", "mx", "exo"].forEach((id) => {
      if (extPkg(id)) l.push(id);
    });
    if (window.ZenPlayer && window.ZenPlayer.external) l.push("any");
    return l;
  }
  function engineLabel(id) {
    if (id === "native") return (get("nativeFails", 0) || 0) >= 3 ? "Web (native failed)" : "Native (smooth)";
    if (id === "web") return "Web";
    return EXT_PLAYERS[id] ? EXT_PLAYERS[id].label : id;
  }
  function externalBackend(container, listener, eng, pkg) {
    const Z = window.ZenPlayer;
    let fb = null, url2 = "", opts2 = {}, pos = 0, launched = false, away = false, done = false, t0 = 0;
    function onAway() {
      if (launched) away = true;
    }
    function onBack() {
      if (!launched || !away || done) return;
      if (document.hidden) return;
      done = true;
      setTimeout(() => {
        try {
          back();
        } catch (e) {
        }
      }, 150);
    }
    function onVis() {
      if (document.hidden) onAway();
      else onBack();
    }
    function listen(on) {
      const f = on ? "addEventListener" : "removeEventListener";
      document[f]("visibilitychange", onVis);
      window[f]("blur", onAway);
      window[f]("focus", onBack);
    }
    const api = {
      open(url, opts) {
        url2 = url;
        opts2 = opts || {};
      },
      prepare() {
        return Promise.resolve();
      },
      play() {
        if (fb) return fb.play();
        if (launched) return;
        let ok = false;
        try {
          ok = !!Z.external(url2, pkg, String(opts2.title || ""), Math.max(0, Math.floor(pos)));
        } catch (e) {
          ok = false;
        }
        if (!ok) {
          toast((EXT_PLAYERS[eng] ? EXT_PLAYERS[eng].label : "The other player") + " could not be started. Using the built-in player.", 6e3);
          fb = nativeOk() ? nativeBackend(container, listener) : videoBackend(container, listener);
          fb.open(url2, opts2);
          fb.prepare().then(() => fb.play(), (e) => listener.onError(e && e.message || "Playback failed"));
          return;
        }
        launched = true;
        t0 = Date.now();
        listen(true);
      },
      pause() {
        if (fb) fb.pause();
      },
      seek(ms2) {
        if (fb) return fb.seek(ms2);
        pos = ms2;
        return Promise.resolve();
      },
      time() {
        if (fb) return fb.time();
        return launched ? pos + (Date.now() - t0) : pos;
      },
      info() {
        return fb ? fb.info() : null;
      },
      state() {
        return fb ? fb.state() : "PLAYING";
      },
      tracks() {
        return fb ? fb.tracks() : { audio: [], text: [] };
      },
      selectAudio(i) {
        return fb ? fb.selectAudio(i) : false;
      },
      selectText(i) {
        return fb ? fb.selectText(i) : false;
      },
      suspend() {
        if (fb) fb.suspend();
      },
      restore() {
        if (fb) fb.restore();
      },
      close() {
        listen(false);
        if (fb) fb.close();
      },
      destroy() {
        api.close();
        if (fb) {
          fb.destroy();
          fb = null;
        }
      }
    };
    return api;
  }
  function createPlayer(container, listener) {
    if (typeof webapis !== "undefined" && webapis.avplay) return avplayBackend(container, listener);
    const engPick = get("engine", "native");
    const isPreview = !!(container && container.classList && container.classList.contains("lb-pv"));
    if (!isPreview && window.ZenPlayer && EXT_PLAYERS[engPick]) {
      const p3 = extPkg(engPick);
      if (engPick === "any" || p3) return externalBackend(container, listener, engPick, p3);
    }
    if (nativeOk()) return nativeBackend(container, listener);
    return videoBackend(container, listener);
  }

  // app/js/screens/live-ui.js
  var ROWS = 10;
  var BAR_MS = 5e3;
  var LIST_MS = 14e3;
  var pad = (n) => (n < 10 ? "0" : "") + n;
  var hm = (ms2) => {
    const d = new Date(ms2);
    return pad(d.getHours()) + ":" + pad(d.getMinutes());
  };
  function LiveUi({ parent, server, onPlay }) {
    const root3 = h("div", "live", parent);
    const bar = h("div", "live-bar glass", root3);
    const art = h("img", "lb-art", bar);
    const body = h("div", "lb-body", bar);
    const row1 = h("div", "lb-row1", body);
    const num2 = h("span", "lb-num", row1);
    const name = h("span", "lb-name", row1);
    const favStar = h("span", "lb-star", row1);
    favStar.textContent = "\u2605";
    const chips = h("span", "lb-chips", row1);
    const chipLive = h("span", "chip chip-live", chips);
    chipLive.textContent = "LIVE";
    const chipCat = h("span", "chip", chips);
    const chipRes = h("span", "chip chip-res", chips);
    const now = h("div", "lb-line", body);
    const nowTag = h("span", "lb-tag", now);
    nowTag.textContent = "NOW";
    const nowTitle = h("span", "lb-title", now);
    const nowTime = h("span", "lb-time", now);
    const prog = h("div", "lb-prog", body);
    const progFill = h("div", "lb-prog-fill", prog);
    const next = h("div", "lb-line lb-next", body);
    const nextTag = h("span", "lb-tag", next);
    nextTag.textContent = "NEXT";
    const nextTitle = h("span", "lb-title", next);
    const nextTime = h("span", "lb-time", next);
    const side = h("div", "lb-side", bar);
    const clock2 = h("div", "lb-clock", side);
    const date = h("div", "lb-date", side);
    const hint = h("div", "lb-hint", side);
    hint.textContent = "OK  channels";
    const list = h("div", "live-list glass", root3);
    const head = h("div", "ll-head", list);
    const arrowL = h("span", "ll-arrow", head);
    arrowL.textContent = "\u2039";
    const headText = h("div", "ll-headtext", head);
    const catName = h("div", "ll-cat", headText);
    const catSub = h("div", "ll-sub", headText);
    const catHint = h("div", "ll-hint", headText);
    catHint.textContent = "\u25BE All bouquets";
    const arrowR = h("span", "ll-arrow", head);
    arrowR.textContent = "\u203A";
    const rowsEl = h("div", "ll-rows", list);
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
      const r = h("div", "ll-row", rowsEl);
      const n = h("span", "ll-n", r);
      const logo = h("img", "ll-logo", r);
      logo.alt = "";
      logo.referrerPolicy = "no-referrer";
      const col = h("span", "ll-col", r);
      const star = h("span", "ll-star", r);
      star.textContent = "\u2605";
      rows.push({ r, n, logo, t: h("span", "ll-t", col), p: h("span", "ll-p", col), s: star, d: h("span", "ll-dot", r) });
    }
    const catsEl = h("div", "ll-rows ll-cats hidden", list);
    const catRows = [];
    for (let i = 0; i < ROWS; i++) {
      const r = h("div", "ll-row ll-catrow", catsEl);
      catRows.push({ r, d: h("span", "ll-cdot", r), t: h("span", "ll-ct", r), c: h("span", "ll-cn", r) });
    }
    const foot = h("div", "ll-foot", list);
    foot.textContent = "\u25C0 \u25B6 Bouquet  \xB7  G / title: all bouquets  \xB7  OK Watch  \xB7  F \u2605 Favorite  \xB7  Back";
    const numEl = h("div", "lb-number", root3);
    let item = null;
    let epg = null;
    let cats = null;
    let catIndex = 0;
    let chans = [];
    let sel = 0;
    let barTimer = 0;
    let listTimer = 0;
    let tick2 = 0;
    let epgFor = null;
    const cache = {};
    const rowEpg = {};
    let numBuf = "";
    let numTimer = 0;
    let epgTimer = 0;
    let picking = false;
    let pickSel = 0;
    let headFocus = false;
    function loadCats() {
      return __async(this, null, function* () {
        if (!cats) cats = yield server.scope("live");
        return cats;
      });
    }
    function loadChans(i) {
      return __async(this, null, function* () {
        const c = (yield loadCats())[i];
        const key2 = c ? c.sectionKey : "live:all";
        if (!cache[key2]) cache[key2] = yield server.scope(key2);
        return cache[key2];
      });
    }
    function catIndexOf(it) {
      if (!cats || !it) return 0;
      const i = cats.findIndex((c) => c.sectionKey === "live:" + it.catId);
      return i < 0 ? 0 : i;
    }
    function renderProgram() {
      const t = Date.now();
      const cur = epg && epg.now && epg.now.end > t ? epg.now : null;
      if (cur) {
        setText(nowTitle, cur.title || "On air");
        setText(nowTime, hm(cur.start) + " \u2013 " + hm(cur.end));
        prog.style.opacity = 1;
        progFill.style.transform = "scaleX(" + Math.max(0, Math.min(1, (t - cur.start) / (cur.end - cur.start))).toFixed(3) + ")";
      } else {
        setText(nowTitle, epg === null ? "" : "No programme information");
        setText(nowTime, "");
        prog.style.opacity = 0.35;
        progFill.style.transform = "scaleX(0)";
      }
      const nx = epg && epg.next;
      setText(nextTitle, nx ? nx.title || "" : "");
      setText(nextTime, nx ? hm(nx.start) + " \u2013 " + hm(nx.end) : "");
      toggleClass(next, "empty", !nx);
    }
    function renderClock() {
      const d = /* @__PURE__ */ new Date();
      setText(clock2, pad(d.getHours()) + ":" + pad(d.getMinutes()));
      setText(date, d.toLocaleDateString(void 0, { weekday: "short", day: "numeric", month: "short" }));
    }
    function startTick() {
      clearInterval(tick2);
      tick2 = setInterval(() => {
        renderClock();
        renderProgram();
      }, 15e3);
    }
    function fetchEpg(it) {
      return __async(this, null, function* () {
        epgFor = it.ratingKey;
        epg = null;
        renderProgram();
        if (!server.epg) {
          epg = {};
          renderProgram();
          return;
        }
        let v = null;
        try {
          v = yield server.epg(it);
        } catch (e) {
          v = null;
        }
        if (epgFor !== it.ratingKey) return;
        epg = v || {};
        renderProgram();
      });
    }
    function setItem(it) {
      item = it;
      const idx = chans.length ? chans.findIndex((c) => c.ratingKey === it.ratingKey) : -1;
      setText(num2, "CH " + (idx >= 0 ? idx + 1 : ""));
      toggleClass(num2, "hidden", idx < 0);
      setText(name, it.title || "");
      toggleClass(favStar, "on", server.isFav ? server.isFav(it.ratingKey) : false);
      setText(chipCat, it.cat || "");
      toggleClass(chipCat, "hidden", !it.cat);
      setText(chipRes, "");
      toggleClass(chipRes, "hidden", true);
      const fallback = server.image(it.thumb, 160, 160) || "";
      art.referrerPolicy = "no-referrer";
      const logoSrc = it.logo ? server.image(it.logo, 160, 160) : "";
      toggleClass(art, "logo", !!logoSrc);
      if (logoSrc) {
        art.onerror = () => {
          art.onerror = null;
          toggleClass(art, "logo", false);
          art.src = fallback;
        };
        art.src = logoSrc;
      } else {
        art.onerror = null;
        art.src = fallback;
      }
      renderClock();
      fetchEpg(it);
      loadCats().then(() => {
        catIndex = catIndexOf(it);
        return loadChans(catIndex);
      }).then((l) => {
        chans = l;
        if (item === it) {
          const i = l.findIndex((c) => c.ratingKey === it.ratingKey);
          if (i >= 0) {
            setText(num2, "CH " + (i + 1));
            toggleClass(num2, "hidden", false);
          }
        }
      }).catch(() => {
      });
    }
    function setRes(info) {
      const ok = info && info.height > 0;
      setText(chipRes, ok ? (info.height >= 2e3 ? "4K" : info.height >= 1e3 ? "FHD" : info.height >= 700 ? "HD" : "SD") + "  " + info.width + "\xD7" + info.height : "");
      toggleClass(chipRes, "hidden", !ok);
    }
    function showBar(sticky) {
      toggleClass(root3, "bar-on", true);
      renderClock();
      renderProgram();
      startTick();
      clearTimeout(barTimer);
      if (!sticky) barTimer = setTimeout(hideBar, BAR_MS);
    }
    function hideBar() {
      clearTimeout(barTimer);
      toggleClass(root3, "bar-on", false);
      if (!isListOpen()) clearInterval(tick2);
    }
    function flash() {
      if (!isListOpen()) showBar(false);
    }
    function setRowLogo(row, ch) {
      const bare = server.image(ch.thumbBare || ch.thumb, 64, 64) || "";
      const url = ch.logo ? server.image(ch.logo, 64, 64) : "";
      toggleClass(row.logo, "has", !!url);
      load(row.logo, url || bare, url ? () => {
        toggleClass(row.logo, "has", false);
        load(row.logo, bare);
      } : void 0);
    }
    function renderList() {
      const c = cats && cats[catIndex];
      setText(catName, c ? c.title : "\u2026");
      setText(catSub, c ? catIndex + 1 + " / " + cats.length + "   \xB7   " + chans.length + " channels" : "");
      toggleClass(head, "focus", headFocus && !picking);
      toggleClass(catHint, "hidden", picking);
      toggleClass(rowsEl, "hidden", picking);
      toggleClass(catsEl, "hidden", !picking);
      if (picking) {
        renderPicker();
        return;
      }
      const start2 = Math.max(0, Math.min(sel - Math.floor(ROWS / 2), chans.length - ROWS));
      rows.forEach((row, i) => {
        const idx = start2 + i;
        const ch = chans[idx];
        toggleClass(row.r, "hidden", !ch);
        if (!ch) return;
        setText(row.n, idx + 1);
        setRowLogo(row, ch);
        setText(row.t, ch.title);
        const e = rowEpg[ch.ratingKey];
        setText(row.p, e && e.now ? e.now.title : "");
        toggleClass(row.s, "on", server.isFav ? server.isFav(ch.ratingKey) : false);
        toggleClass(row.r, "sel", !headFocus && idx === sel);
        toggleClass(row.r, "cur", !!item && ch.ratingKey === item.ratingKey);
      });
    }
    function renderPicker() {
      setText(catName, "Bouquets");
      setText(catSub, cats ? cats.length + " bouquets   \xB7   OK to choose" : "");
      const start2 = Math.max(0, Math.min(pickSel - Math.floor(ROWS / 2), (cats ? cats.length : 0) - ROWS));
      catRows.forEach((row, i) => {
        const idx = start2 + i;
        const c = cats && cats[idx];
        toggleClass(row.r, "hidden", !c);
        if (!c) return;
        setText(row.t, c.title);
        setText(row.c, c.locked ? "locked" : String(c.count));
        toggleClass(row.r, "sel", idx === pickSel);
        toggleClass(row.r, "cur", idx === catIndex);
      });
    }
    function openPicker() {
      return __async(this, null, function* () {
        if (!isListOpen()) yield openList();
        if (!cats) yield loadCats();
        picking = true;
        headFocus = false;
        pickSel = catIndex;
        renderList();
        armListTimer();
      });
    }
    function choosePicked() {
      return __async(this, null, function* () {
        const c = cats && cats[pickSel];
        picking = false;
        if (!c) {
          renderList();
          return;
        }
        if (c.locked) {
          toast("This bouquet is locked: open it from the bouquet list to enter the PIN");
          renderList();
          return;
        }
        catIndex = pickSel;
        chans = [];
        sel = 0;
        renderList();
        const mine = catIndex;
        const l = yield loadChans(mine);
        if (mine !== catIndex) return;
        chans = l;
        const playing = item ? l.findIndex((x) => x.ratingKey === item.ratingKey) : -1;
        sel = playing >= 0 ? playing : 0;
        renderList();
        prefetchGuide();
      });
    }
    function prefetchGuide() {
      clearTimeout(epgTimer);
      if (!server.epg) return;
      epgTimer = setTimeout(() => {
        const start2 = Math.max(0, Math.min(sel - Math.floor(ROWS / 2), chans.length - ROWS));
        const wanted = chans.slice(start2, start2 + ROWS).filter((c) => !(c.ratingKey in rowEpg));
        let i = 0;
        const worker = () => __async(this, null, function* () {
          while (i < wanted.length) {
            const ch = wanted[i++];
            let v = null;
            try {
              v = yield server.epg(ch);
            } catch (e) {
              v = null;
            }
            rowEpg[ch.ratingKey] = v || {};
            if (isListOpen()) renderList();
          }
        });
        worker();
        worker();
      }, 350);
    }
    function isListOpen() {
      return root3.classList.contains("list-on");
    }
    function armListTimer() {
      clearTimeout(listTimer);
      listTimer = setTimeout(closeList, LIST_MS);
    }
    function openList() {
      return __async(this, null, function* () {
        picking = false;
        headFocus = false;
        cats = null;
        Object.keys(cache).forEach((k) => {
          delete cache[k];
        });
        yield loadCats();
        catIndex = catIndexOf(item);
        chans = yield loadChans(catIndex);
        sel = Math.max(0, chans.findIndex((c) => item && c.ratingKey === item.ratingKey));
        renderList();
        prefetchGuide();
        toggleClass(root3, "list-on", true);
        showBar(true);
        armListTimer();
      });
    }
    function closeList() {
      picking = false;
      clearTimeout(listTimer);
      toggleClass(root3, "list-on", false);
      showBar(false);
    }
    function changeCat(dir) {
      return __async(this, null, function* () {
        if (!cats || !cats.length) return;
        for (let n = 0; n < cats.length; n++) {
          catIndex = (catIndex + dir + cats.length) % cats.length;
          if (!cats[catIndex].locked) break;
        }
        chans = [];
        sel = 0;
        renderList();
        const mine = catIndex;
        const l = yield loadChans(mine);
        if (mine !== catIndex) return;
        chans = l;
        const playing = item ? l.findIndex((c) => c.ratingKey === item.ratingKey) : -1;
        sel = playing >= 0 ? playing : 0;
        renderList();
        prefetchGuide();
      });
    }
    function key(action) {
      armListTimer();
      if (picking) {
        switch (action) {
          case "up":
            pickSel = Math.max(0, pickSel - 1);
            break;
          case "down":
            pickSel = Math.min(cats.length - 1, pickSel + 1);
            break;
          case "pageup":
            pickSel = Math.max(0, pickSel - ROWS);
            break;
          case "pagedown":
            pickSel = Math.min(cats.length - 1, pickSel + ROWS);
            break;
          case "enter":
            choosePicked();
            return true;
          case "back":
          case "stop":
          case "green":
            picking = false;
            break;
          default:
            return true;
        }
        renderList();
        return true;
      }
      switch (action) {
        case "green":
          openPicker();
          return true;
        case "up":
          if (headFocus) return true;
          if (sel === 0) {
            headFocus = true;
            break;
          }
          sel = Math.max(0, sel - 1);
          break;
        case "down":
          if (headFocus) {
            headFocus = false;
            break;
          }
          sel = Math.min(chans.length - 1, sel + 1);
          break;
        case "pageup":
          sel = Math.max(0, sel - ROWS);
          break;
        case "pagedown":
          sel = Math.min(chans.length - 1, sel + ROWS);
          break;
        case "left":
          changeCat(-1);
          return true;
        case "right":
          changeCat(1);
          return true;
        case "red":
          toggleFav(chans[sel]);
          return true;
        case "enter": {
          if (headFocus) {
            openPicker();
            return true;
          }
          const ch = chans[sel];
          closeList();
          if (ch) onPlay(ch);
          return true;
        }
        case "back":
        case "stop":
          headFocus = false;
          closeList();
          return true;
        default:
          return true;
      }
      renderList();
      prefetchGuide();
      return true;
    }
    function toggleFav(ch) {
      return __async(this, null, function* () {
        if (!ch || !server.toggleFav) return;
        const keep = cats && cats[catIndex] ? cats[catIndex].sectionKey : "live:all";
        const on = server.toggleFav(ch);
        toast(on ? "Added to favorites" : "Removed from favorites");
        cats = null;
        Object.keys(cache).forEach((k) => {
          delete cache[k];
        });
        yield loadCats();
        const i = cats.findIndex((c) => c.sectionKey === keep);
        catIndex = i < 0 ? 0 : i;
        const l = yield loadChans(catIndex);
        const at = chans[sel] ? chans[sel].ratingKey : null;
        chans = l;
        const j = at ? chans.findIndex((c) => c.ratingKey === at) : -1;
        sel = Math.max(0, j);
        renderList();
        if (item) toggleClass(favStar, "on", server.isFav(item.ratingKey));
      });
    }
    function toggleFavCurrent() {
      if (item) toggleFav(item);
    }
    function digit(d) {
      numBuf = (numBuf + d).slice(0, 4);
      setText(numEl, numBuf);
      toggleClass(numEl, "on", true);
      clearTimeout(numTimer);
      numTimer = setTimeout(commitNumber, numBuf.length >= 4 ? 150 : 1600);
    }
    function commitNumber() {
      return __async(this, null, function* () {
        const n = parseInt(numBuf, 10);
        numBuf = "";
        toggleClass(numEl, "on", false);
        if (!n) return;
        try {
          const l = yield loadChans(catIndexOf(item));
          const ch = l[n - 1];
          if (!ch) {
            toast("No channel " + n + " in this bouquet");
            return;
          }
          onPlay(ch);
        } catch (e) {
        }
      });
    }
    function neighbor(dir) {
      return __async(this, null, function* () {
        yield loadCats();
        const l = yield loadChans(catIndexOf(item));
        if (!l.length) return null;
        const i = l.findIndex((c) => item && c.ratingKey === item.ratingKey);
        return l[(i < 0 ? 0 : i + dir + l.length) % l.length];
      });
    }
    function destroy2() {
      clearTimeout(barTimer);
      clearTimeout(listTimer);
      clearInterval(tick2);
      clearTimeout(numTimer);
      clearTimeout(epgTimer);
    }
    arrowL.addEventListener("click", (e) => {
      e.stopPropagation();
      changeCat(-1);
      armListTimer();
    });
    arrowR.addEventListener("click", (e) => {
      e.stopPropagation();
      changeCat(1);
      armListTimer();
    });
    rows.forEach((row, i) => row.r.addEventListener("click", (e) => {
      e.stopPropagation();
      const start2 = Math.max(0, Math.min(sel - Math.floor(ROWS / 2), chans.length - ROWS));
      const ch = chans[start2 + i];
      if (!ch) return;
      sel = start2 + i;
      closeList();
      onPlay(ch);
    }));
    headText.addEventListener("click", (e) => {
      e.stopPropagation();
      if (picking) {
        picking = false;
        renderList();
      } else openPicker();
      armListTimer();
    });
    catRows.forEach((row, i) => row.r.addEventListener("click", (e) => {
      e.stopPropagation();
      const start2 = Math.max(0, Math.min(pickSel - Math.floor(ROWS / 2), (cats ? cats.length : 0) - ROWS));
      pickSel = start2 + i;
      choosePicked();
    }));
    list.addEventListener("click", (e) => e.stopPropagation());
    return { setItem, setRes, flash, openList, closeList, openPicker, isListOpen, digit, toggleFavCurrent, isBarOn: () => root3.classList.contains("bar-on"), hideBar, key, neighbor, destroy: destroy2 };
  }

  // app/js/sleep.js
  var timer3 = 0;
  var endAt = 0;
  function setSleep(minutes) {
    clearTimeout(timer3);
    endAt = 0;
    if (!minutes) return;
    endAt = Date.now() + minutes * 6e4;
    timer3 = setTimeout(() => {
      endAt = 0;
      window.dispatchEvent(new Event("zenpro:sleep"));
    }, minutes * 6e4);
  }
  function sleepLeft() {
    return endAt ? Math.max(1, Math.round((endAt - Date.now()) / 6e4)) : 0;
  }
  var SLEEP_STEPS = [0, 15, 30, 60, 90, 120];
  function nextSleep() {
    const cur = sleepLeft();
    const i = cur === 0 ? 0 : SLEEP_STEPS.findIndex((s) => s >= cur);
    const next = SLEEP_STEPS[(Math.max(i, 0) + 1) % SLEEP_STEPS.length];
    setSleep(next);
    return next;
  }

  // app/js/player/subtitles.js
  function ms(h2, m, s, frac) {
    return ((+h2 * 60 + +m) * 60 + +s) * 1e3 + Math.round(+("0." + (frac || "0")) * 1e3);
  }
  function clean(text) {
    return text.replace(/\{\\[^}]*\}/g, "").replace(/<[^>]+>/g, "").replace(/\\N/gi, "\n").trim();
  }
  function parseSrtOrVtt(text) {
    const cues = [];
    const re = /(\d+):(\d{2}):(\d{2})[,.](\d{1,3})\s*-->\s*(\d+):(\d{2}):(\d{2})[,.](\d{1,3})[^\n]*\n([\s\S]*?)(?:\n\s*\n|$)/g;
    let m;
    while (m = re.exec(text)) {
      cues.push({ start: ms(m[1], m[2], m[3], m[4]), end: ms(m[5], m[6], m[7], m[8]), text: clean(m[9]) });
    }
    if (!cues.length) {
      const short = /(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2})\.(\d{3})[^\n]*\n([\s\S]*?)(?:\n\s*\n|$)/g;
      while (m = short.exec(text)) {
        cues.push({ start: ms(0, m[1], m[2], m[3]), end: ms(0, m[4], m[5], m[6]), text: clean(m[7]) });
      }
    }
    return cues;
  }
  function parseAss(text) {
    const cues = [];
    const lines = text.split(/\r?\n/);
    let textIndex = 9;
    for (const line of lines) {
      if (/^Format:/i.test(line) && /Text/i.test(line)) {
        const fields = line.slice(7).split(",").map((f) => f.trim().toLowerCase());
        textIndex = fields.indexOf("text");
      }
      if (!/^Dialogue:/i.test(line)) continue;
      const parts = line.slice(9).split(",");
      const t = (s) => s.trim().match(/(\d+):(\d{2}):(\d{2})\.(\d{1,3})/);
      const a = t(parts[1]);
      const b = t(parts[2]);
      if (!a || !b) continue;
      cues.push({ start: ms(a[1], a[2], a[3], a[4]), end: ms(b[1], b[2], b[3], b[4]), text: clean(parts.slice(textIndex).join(",")) });
    }
    return cues.sort((x, y) => x.start - y.start);
  }
  function parseSubtitles(text, codec) {
    text = text.replace(/\r\n/g, "\n").replace(/^﻿/, "");
    if (codec === "ass" || codec === "ssa" || /^\[Script Info\]/m.test(text)) return parseAss(text);
    return parseSrtOrVtt(text);
  }
  var CueTrack = class {
    constructor(cues) {
      this.cues = cues;
      this.i = 0;
    }
    at(t) {
      const cues = this.cues;
      if (!cues.length) return "";
      let i = this.i;
      if (i >= cues.length || cues[i].start > t || i + 1 < cues.length && cues[i + 1].start <= t && t - cues[i].start > 3e4) {
        let lo = 0;
        let hi = cues.length - 1;
        while (lo < hi) {
          const mid = lo + hi + 1 >> 1;
          if (cues[mid].start <= t) lo = mid;
          else hi = mid - 1;
        }
        i = lo;
      }
      while (i + 1 < cues.length && cues[i + 1].start <= t) i++;
      this.i = i;
      const c = cues[i];
      if (c.start <= t && t < c.end) {
        let text = c.text;
        for (let j = i - 1; j >= 0 && j >= i - 3; j--) {
          if (cues[j].end > t && cues[j].text !== text) text = cues[j].text + "\n" + text;
        }
        return text;
      }
      return "";
    }
  };

  // app/js/screens/player.js
  var DIRECT = {
    container: { mp4: 1, m4v: 1, mov: 1, mkv: 1, webm: 1, ts: 1, mpegts: 1, avi: 1 },
    video: { h264: 1, hevc: 1, vp9: 1, av1: 1, mpeg4: 1, mpeg2video: 1, vc1: 1 },
    audio: { aac: 1, ac3: 1, eac3: 1, mp3: 1, mp2: 1, flac: 1, opus: 1, vorbis: 1, pcm: 1 }
  };
  var TEXT_SUBS = { srt: 1, subrip: 1, ass: 1, ssa: 1, mov_text: 1, vtt: 1, webvtt: 1, smi: 1 };
  var OSD_HIDE_MS = 4e3;
  var SEEK_COMMIT_MS = 900;
  var TIMELINE_MS = 1e4;
  function streamsOf(part, type) {
    return (part && part.Stream || []).filter((s) => s.streamType === type);
  }
  function isEmbeddedText(sub) {
    return !!sub && sub.index != null && !sub.key && !!TEXT_SUBS[sub.codec];
  }
  function isSidecarText(sub) {
    return !!sub && !!sub.key && !!TEXT_SUBS[sub.codec];
  }
  function subtitleLabel(s) {
    const title = s.displayTitle && s.displayTitle !== "Unknown" ? s.displayTitle : s.language || "";
    const kind = (s.codec || "").toUpperCase() + (s.key ? " \xB7 external" : "");
    return title ? title + (s.key ? " \xB7 external" : "") : kind || "Subtitle";
  }
  function cleanSubtitle(text) {
    return String(text || "").replace(/\{\\[^}]*\}/g, "").replace(/<[^>]+>/g, "").replace(/\\N/g, "\n");
  }
  function PlayerScreen(initial, { offset = null } = {}) {
    const el3 = h("div", "screen player");
    const stage = h("div", "player-stage", el3);
    const subs = h("div", "subs", el3);
    const spinner = h("div", "spinner", el3);
    const pauseBig = h("div", "pause-big", el3);
    pauseBig.innerHTML = pause;
    const osd = h("div", "osd", el3);
    const osdTop = h("div", "osd-top", osd);
    const osdTitle = h("div", "osd-title", osdTop);
    const osdSub = h("div", "osd-sub", osdTop);
    const osdBottom = h("div", "osd-bottom", osd);
    const bar = h("div", "osd-bar", osdBottom);
    const barFill = h("div", "osd-fill", bar);
    const knob = h("div", "osd-knob", bar);
    const seekLabel = h("div", "osd-seek", knob);
    const times = h("div", "osd-times", osdBottom);
    const tNow = h("span", "osd-now", times);
    const tInfo = h("span", "osd-info", times);
    const tLeft = h("span", "osd-left", times);
    const hintEl = h("div", "osd-hint", osdBottom);
    hintEl.innerHTML = "\u25BC Audio &amp; subtitles";
    const panel = h("div", "tracks hidden", el3);
    const upnext = h("div", "upnext hidden", el3);
    const errorEl = h("div", "player-error hidden", el3);
    let item = initial;
    let startId = 0;
    let liveRetry = 0;
    let prevItem = null;
    const live = initial.live ? LiveUi({ parent: el3, server: session.server, onPlay: (ch) => switchChannel(ch) }) : null;
    if (live) el3.classList.add("is-live");
    let media = null;
    let part = null;
    let mode = "direct";
    let triedFallback = false;
    let altParts = [];
    let tried = [];
    let openId = 0;
    let watchdog = 0;
    let base = 0;
    let position = offset || 0;
    let duration2 = initial.duration || 0;
    let paused = false;
    let started = false;
    let alive = true;
    let audioStream = null;
    let subStream = null;
    let seekTarget = null;
    let seekCount = 0;
    let lastSeekAt = 0;
    let seekTimer = 0;
    let osdTimer = 0;
    let timelineTimer = 0;
    let subTimer = 0;
    let lastText = 0;
    let upnextTimer = 0;
    let nextItem = null;
    let cueTrack = null;
    let cueTimer = 0;
    let cueFor = null;
    const playSession = uuid();
    const player = createPlayer(stage, {
      onTime(ms2) {
        if (!started) return;
        position = base + ms2;
        if (seekTarget == null) renderProgress(position);
      },
      onBuffering(on) {
        toggleClass(spinner, "on", on);
      },
      onEnd() {
        finished();
      },
      onError(msg) {
        failed2(msg);
      },
      onSubtitle(text, ms2) {
        clearTimeout(subTimer);
        setText(subs, cleanSubtitle(text));
        if (ms2 > 0) subTimer = setTimeout(() => setText(subs, ""), ms2);
      }
    });
    function renderProgress(ms2) {
      const p = duration2 ? Math.max(0, Math.min(1, ms2 / duration2)) : 0;
      setTransform(barFill, "scaleX(" + p.toFixed(4) + ")");
      setTransform(knob, "translateX(" + Math.round(p * 1728) + "px)");
      const now = Date.now();
      if (now - lastText > 900 || seekTarget != null) {
        lastText = now;
        setText(tNow, clock(ms2));
        setText(tLeft, "\u2212" + clock(duration2 - ms2));
        const ends = new Date(now + (duration2 - ms2));
        let hh = ends.getHours();
        const ampm = hh >= 12 ? "PM" : "AM";
        hh = hh % 12 || 12;
        const mm = ends.getMinutes();
        setText(tInfo, "Ends at " + hh + ":" + (mm < 10 ? "0" : "") + mm + " " + ampm);
      }
    }
    function showOsd(sticky) {
      if (item.live) {
        if (live) live.flash();
        return;
      }
      toggleClass(el3, "osd-on", true);
      clearTimeout(osdTimer);
      if (!sticky && !paused) osdTimer = setTimeout(() => toggleClass(el3, "osd-on", false), OSD_HIDE_MS);
    }
    function hideOsd() {
      clearTimeout(osdTimer);
      toggleClass(el3, "osd-on", false);
    }
    function renderTitles() {
      if (item.type === "episode") {
        setText(osdTitle, item.grandparentTitle);
        setText(osdSub, episodeLabel(item) + "   " + item.title);
      } else {
        setText(osdTitle, item.title);
        setText(osdSub, item.year || "");
      }
    }
    function report(state) {
      if (!item.ratingKey) return;
      if (DEV && window.__ss && window.__ss.muteTimeline) return;
      session.server.timeline({
        ratingKey: item.ratingKey,
        key: "/library/metadata/" + item.ratingKey,
        state,
        time: Math.floor(position),
        duration: Math.floor(duration2),
        "X-Plex-Session-Identifier": playSession
      });
    }
    function startTimeline() {
      clearInterval(timelineTimer);
      timelineTimer = setInterval(() => report(paused ? "paused" : "playing"), TIMELINE_MS);
    }
    function decideMode() {
      const directOk = DIRECT.container[media.container] && DIRECT.video[media.videoCodec] && (!audioStream || DIRECT.audio[audioStream.codec]);
      const subsOk = !subStream || isEmbeddedText(subStream) || isSidecarText(subStream);
      return directOk && subsOk ? "direct" : "hls";
    }
    function open(atMs) {
      return __async(this, null, function* () {
        const server = session.server;
        const t0 = Date.now();
        const myOpen = ++openId;
        started = false;
        toggleClass(spinner, "on", true);
        clearTimeout(watchdog);
        if (server.noTranscode) {
          watchdog = setTimeout(() => {
            if (alive && !started && myOpen === openId) failed2("no picture after " + (altParts.length ? 12 : 25) + " seconds");
          }, altParts.length ? 12e3 : 25e3);
        }
        let url;
        if (mode === "direct") {
          base = 0;
          url = server.url(part.key);
        } else {
          base = atMs;
          const burn = subStream && !isSidecarText(subStream);
          url = server.transcodeUrl(item, {
            session: playSession,
            offsetMs: atMs,
            audioStreamID: audioStream && audioStream.id,
            subtitleStreamID: burn ? subStream.id : void 0
          });
          const decision = yield request(url.replace("/start.m3u8", "/decision"));
          const mc = decision.MediaContainer || {};
          if (mc.generalDecisionCode && mc.generalDecisionCode >= 2e3) throw new Error(mc.generalDecisionText || "Server refused to convert this file");
        }
        log("play", mode, item.title, media.container + "/" + media.videoCodec + "/" + (audioStream && audioStream.codec), "at", clock(atMs));
        player.open(url, { uhd: media.videoResolution === "4k" && supports4K(), format: part.format });
        try {
          yield player.prepare();
        } catch (e) {
          if (myOpen !== openId) return;
          throw e;
        }
        if (!alive || myOpen !== openId) return;
        clearTimeout(watchdog);
        if (mode === "direct") {
          applyTracks();
          if (atMs > 0) yield player.seek(atMs);
        }
        syncSidecar();
        player.play();
        paused = false;
        started = true;
        position = atMs;
        toggleClass(el3, "paused", false);
        toggleClass(spinner, "on", false);
        log("playing after " + (Date.now() - t0) + "ms (" + mode + ")");
        report("playing");
        startTimeline();
        if (live && player.info) setTimeout(() => {
          if (alive && started) live.setRes(player.info());
        }, 1800);
        if (live) setTimeout(() => {
          if (alive && started) liveRetry = 0;
        }, 6e4);
      });
    }
    function applyTracks() {
      const t = player.tracks();
      if (audioStream && t.audio.length > 1) {
        const pos = streamsOf(part, 2).indexOf(audioStream);
        if (pos >= 0 && t.audio[pos] != null) player.selectAudio(t.audio[pos]);
      }
      if (isEmbeddedText(subStream)) {
        const pos = streamsOf(part, 3).filter(isEmbeddedText).indexOf(subStream);
        if (pos >= 0 && t.text[pos] != null) player.selectText(t.text[pos]);
      } else {
        player.selectText(null);
        setText(subs, "");
      }
    }
    function syncSidecar() {
      if (!isSidecarText(subStream)) {
        cueTrack = null;
        cueFor = null;
        clearInterval(cueTimer);
        if (!isEmbeddedText(subStream)) setText(subs, "");
        return;
      }
      if (cueFor === subStream) return;
      cueFor = subStream;
      const stream = subStream;
      cueTrack = null;
      fetch(session.server.url(stream.key, { encoding: "utf-8" })).then((r) => r.text()).then((text) => {
        if (cueFor !== stream || !alive) return;
        cueTrack = new CueTrack(parseSubtitles(text, stream.codec));
        log("subtitles loaded", stream.displayTitle, cueTrack.cues.length + " cues");
      }).catch((e) => warn("subtitle fetch failed", e.message));
      clearInterval(cueTimer);
      cueTimer = setInterval(() => {
        if (cueTrack && started) setText(subs, cueTrack.at(base + player.time()));
      }, 120);
    }
    function start2() {
      return __async(this, null, function* () {
        try {
          const myStart = ++startId;
          const full = yield session.server.metadata(item.ratingKey);
          if (!alive || myStart !== startId) return;
          item = full;
          if (live) {
            live.setItem(item);
            if (session.server.rememberLast) session.server.rememberLast(item);
          }
          duration2 = item.duration || duration2;
          media = (item.Media || [])[0];
          part = media && media.Part && media.Part[0];
          if (!part) throw new Error("No playable media");
          altParts = (part.alt || []).slice();
          tried = [part.label || "default"];
          const audios = streamsOf(part, 2);
          audioStream = audios.find((s) => s.selected) || audios[0] || null;
          subStream = streamsOf(part, 3).find((s) => s.selected) || null;
          renderTitles();
          mode = decideMode();
          if (offset == null) offset = item.viewOffset || 0;
          position = offset;
          renderProgress(position);
          showOsd();
          yield open(offset);
        } catch (e) {
          failed2(e.message || String(e));
        }
      });
    }
    function failed2(msg) {
      if (!alive) return;
      clearTimeout(watchdog);
      if (started && reconnectLive(msg)) return;
      if (!started && altParts.length && session.server.noTranscode) {
        const next = altParts.shift();
        warn("stream failed (" + msg + "), trying " + next.label);
        tried.push(next.label);
        part = Object.assign({}, part, next);
        player.close();
        open(position).catch((e) => failed2(e.message || String(e)));
        return;
      }
      if (tried.length > 1) msg += " (tried: " + tried.join(", ") + ")";
      if (mode === "direct" && !triedFallback && media && !session.server.noTranscode) {
        warn("direct play failed (" + msg + "), falling back to HLS");
        triedFallback = true;
        mode = "hls";
        open(position).catch((e) => failed2(e.message));
        return;
      }
      error("playback failed", msg);
      toggleClass(spinner, "on", false);
      errorEl.classList.remove("hidden");
      setText(errorEl, "Playback failed: " + msg);
    }
    function togglePause() {
      if (!started) return;
      if (paused) {
        player.play();
        paused = false;
        showOsd();
      } else {
        player.pause();
        paused = true;
        showOsd(true);
      }
      toggleClass(el3, "paused", paused);
      report(paused ? "paused" : "playing");
    }
    function seekBy(dir) {
      if (!started) return;
      const now = Date.now();
      seekCount = now - lastSeekAt < 700 ? seekCount + 1 : 0;
      lastSeekAt = now;
      const step = seekCount < 3 ? 1e4 : seekCount < 8 ? 3e4 : seekCount < 16 ? 6e4 : 18e4;
      const from = seekTarget == null ? position : seekTarget;
      seekTarget = Math.max(0, Math.min(duration2 - 3e3, from + dir * step));
      toggleClass(el3, "seeking", true);
      setText(seekLabel, clock(seekTarget));
      renderProgress(seekTarget);
      showOsd(true);
      clearTimeout(seekTimer);
      seekTimer = setTimeout(commitSeek, SEEK_COMMIT_MS);
    }
    function commitSeek() {
      return __async(this, null, function* () {
        clearTimeout(seekTimer);
        if (seekTarget == null) return;
        const target = seekTarget;
        seekTarget = null;
        toggleClass(el3, "seeking", false);
        showOsd();
        position = target;
        try {
          if (mode === "direct") {
            toggleClass(spinner, "on", true);
            yield player.seek(target);
            toggleClass(spinner, "on", false);
            if (paused) togglePause();
          } else {
            yield open(target);
          }
        } catch (e) {
          warn("seek failed, reopening", e.message);
          open(target).catch((err) => failed2(err.message));
        }
      });
    }
    let panelCol = 0;
    let panelIndex = [0, 0];
    let panelLists = [[], []];
    function openPanel() {
      const audios = streamsOf(part, 2);
      const texts = streamsOf(part, 3);
      panelLists = [
        audios.map((s) => ({ label: s.displayTitle || s.language || "Track", stream: s, on: s === audioStream })),
        [{ label: "Off", stream: null, on: !subStream }].concat(texts.map((s) => ({ label: subtitleLabel(s), stream: s, on: s === subStream })))
      ];
      panelIndex = panelLists.map((l) => Math.max(0, l.findIndex((x) => x.on)));
      panelCol = 0;
      renderPanel();
      panel.classList.remove("hidden");
      hideOsd();
    }
    function renderPanel() {
      panel.innerHTML = "";
      ["Audio", "Subtitles"].forEach((name, c) => {
        const col = h("div", "tracks-col", panel);
        const head = h("div", "tracks-head", col);
        head.innerHTML = c === 0 ? audio : subtitles;
        h("span", "", head).textContent = name;
        panelLists[c].forEach((opt, i) => {
          const row = h("div", "tracks-opt", col);
          row.textContent = opt.label;
          toggleClass(row, "on", opt.on);
          toggleClass(row, "focus", c === panelCol && i === panelIndex[c]);
        });
      });
    }
    function choose(col, opt) {
      return __async(this, null, function* () {
        const server = session.server;
        if (col === 0) audioStream = opt.stream;
        else subStream = opt.stream;
        server.selectStreams(part.id, {
          audioStreamID: audioStream ? audioStream.id : void 0,
          subtitleStreamID: subStream ? subStream.id : 0
        });
        panel.classList.add("hidden");
        const wanted = decideMode();
        if (wanted === "direct" && mode === "direct") {
          applyTracks();
          syncSidecar();
        } else if (mode === "hls" && wanted === "hls" && col === 1 && isSidecarText(subStream)) {
          syncSidecar();
        } else {
          mode = wanted;
          triedFallback = false;
          yield open(position).catch((e) => failed2(e.message));
        }
      });
    }
    function panelKey(action) {
      if (action === "back" || action === "up" && panelIndex[panelCol] === 0) {
        panel.classList.add("hidden");
        return true;
      }
      if (action === "left" || action === "right") panelCol = action === "left" ? 0 : 1;
      if (action === "up") panelIndex[panelCol]--;
      if (action === "down") panelIndex[panelCol] = Math.min(panelLists[panelCol].length - 1, panelIndex[panelCol] + 1);
      if (action === "enter") {
        const opt = panelLists[panelCol][panelIndex[panelCol]];
        if (opt) choose(panelCol, opt);
        return true;
      }
      renderPanel();
      return true;
    }
    function nextEpisode() {
      return __async(this, null, function* () {
        const server = session.server;
        const eps = yield server.children(item.parentRatingKey);
        const i = eps.findIndex((e) => e.ratingKey === item.ratingKey);
        if (i >= 0 && i < eps.length - 1) return eps[i + 1];
        const seasons = (yield server.children(item.grandparentRatingKey)).filter((s) => s.type === "season");
        const si = seasons.findIndex((s) => s.ratingKey === item.parentRatingKey);
        if (si >= 0 && si < seasons.length - 1) return (yield server.children(seasons[si + 1].ratingKey))[0] || null;
        return null;
      });
    }
    function reconnectLive(reason) {
      if (!live || !alive || liveRetry >= 5) return false;
      liveRetry++;
      warn("live stream interrupted (" + reason + "), reconnecting #" + liveRetry);
      clearTimeout(watchdog);
      openId++;
      player.close();
      started = false;
      toggleClass(spinner, "on", true);
      setTimeout(() => {
        if (alive) start2();
      }, 800 * liveRetry);
      return true;
    }
    function finished() {
      return __async(this, null, function* () {
        if (reconnectLive("ended")) return;
        position = duration2;
        report("stopped");
        clearInterval(timelineTimer);
        player.close();
        if (item.type !== "episode") {
          exit();
          return;
        }
        try {
          nextItem = yield nextEpisode();
        } catch (e) {
          nextItem = null;
        }
        if (!alive) return;
        if (!nextItem) {
          exit();
          return;
        }
        let left = 10;
        upnext.classList.remove("hidden");
        const render = () => {
          upnext.innerHTML = "";
          h("div", "upnext-label", upnext).textContent = "Up next in " + left;
          h("div", "upnext-title", upnext).textContent = episodeLabel(nextItem) + "   " + nextItem.title;
          h("div", "upnext-hint", upnext).textContent = "OK to play now \xB7 Back to stop";
        };
        render();
        upnextTimer = setInterval(() => {
          left--;
          if (left <= 0) playNext();
          else render();
        }, 1e3);
      });
    }
    function playNext() {
      clearInterval(upnextTimer);
      replace(PlayerScreen(nextItem, { offset: 0 }));
    }
    function exit() {
      back();
    }
    function switchChannel(ch) {
      return __async(this, null, function* () {
        if (!alive || !ch || ch.ratingKey === item.ratingKey) return;
        prevItem = item;
        clearTimeout(watchdog);
        openId++;
        errorEl.classList.add("hidden");
        player.close();
        item = ch;
        started = false;
        position = 0;
        duration2 = 0;
        triedFallback = false;
        liveRetry = 0;
        toggleClass(spinner, "on", true);
        if (live) {
          live.setItem(item);
          live.flash();
        }
        yield start2();
      });
    }
    function zap(dir) {
      return __async(this, null, function* () {
        try {
          const ch = yield live.neighbor(dir);
          if (ch) switchChannel(ch);
        } catch (e) {
          warn("channel change failed", e.message);
        }
      });
    }
    function liveKey(action) {
      if (live.isListOpen()) return live.key(action);
      if (/^d\d$/.test(action)) {
        live.digit(action[1]);
        return true;
      }
      switch (action) {
        case "enter":
          live.openList();
          return true;
        case "red":
          live.toggleFavCurrent();
          return true;
        case "green":
          live.openPicker();
          return true;
        case "blue": {
          const m = nextSleep();
          toast(m ? "Sleep timer: " + m + " min" : "Sleep timer off");
          return true;
        }
        case "prev":
        case "left":
          if (prevItem) switchChannel(prevItem);
          else live.flash();
          return true;
        case "up":
        case "pageup":
          zap(1);
          return true;
        case "down":
        case "pagedown":
          zap(-1);
          return true;
        case "right":
        case "info":
          live.flash();
          return true;
        case "stop":
        case "back":
          exit();
          return true;
        default:
          return true;
      }
    }
    function teardown() {
      if (!alive) return;
      alive = false;
      if (started && position < duration2) report("stopped");
      [seekTimer, osdTimer, subTimer, watchdog].forEach(clearTimeout);
      clearInterval(timelineTimer);
      clearInterval(upnextTimer);
      clearInterval(cueTimer);
      if (live) live.destroy();
      player.destroy();
      if (mode === "hls") session.server.stopTranscode(playSession);
      document.documentElement.classList.remove("playing");
      setScreenSaver(true);
      document.removeEventListener("visibilitychange", onVisibility);
    }
    function onVisibility() {
      if (document.hidden) {
        if (started && !paused) togglePause();
        player.suspend();
      } else {
        player.restore();
      }
    }
    return {
      el: el3,
      name: "player",
      onShow() {
        document.documentElement.classList.add("playing");
        setScreenSaver(false);
        document.addEventListener("visibilitychange", onVisibility);
        renderTitles();
        if (!started) start2();
      },
      onKey(action) {
        if (!upnext.classList.contains("hidden")) {
          if (action === "enter") {
            playNext();
            return true;
          }
          if (action === "back" || action === "stop") {
            exit();
            return true;
          }
          return true;
        }
        if (!panel.classList.contains("hidden")) return panelKey(action);
        if (live) return liveKey(action);
        switch (action) {
          case "enter":
            if (seekTarget != null) commitSeek();
            else if (el3.classList.contains("osd-on") || paused) togglePause();
            else showOsd();
            return true;
          case "playpause":
            if (seekTarget != null) commitSeek();
            else togglePause();
            return true;
          case "play":
            if (paused) togglePause();
            return true;
          case "pause":
            if (!paused) togglePause();
            return true;
          case "left":
          case "rw":
            seekBy(-1);
            return true;
          case "right":
          case "ff":
            seekBy(1);
            return true;
          case "up":
          case "info":
            showOsd();
            return true;
          case "down":
            if (part) openPanel();
            return true;
          case "stop":
            exit();
            return true;
          case "back":
            if (seekTarget != null) {
              seekTarget = null;
              toggleClass(el3, "seeking", false);
              renderProgress(position);
              showOsd();
              return true;
            }
            if (el3.classList.contains("osd-on") && !paused) {
              hideOsd();
              return true;
            }
            exit();
            return true;
        }
        return true;
      },
      onHide() {
      },
      destroy: teardown
    };
  }

  // app/js/screens/search.js
  var IME_DONE = 65376;
  var IME_CANCEL = 65385;
  function SearchScreen() {
    const el3 = h("div", "screen search");
    const ambience = useAmbience();
    const bar = h("div", "search-bar", el3);
    const icon = h("div", "search-icon", bar);
    icon.innerHTML = search;
    const input = h("input", "search-input", bar);
    input.type = "text";
    input.placeholder = "Search movies and shows";
    input.setAttribute("autocomplete", "off");
    const status = h("div", "search-status", el3);
    const clip = h("div", "search-rows", el3);
    const track = h("div", "rows-track", clip);
    let rows = [];
    let rowIndex = -1;
    let timer4 = 0;
    let query2 = "";
    let generation = 0;
    function run(q) {
      return __async(this, null, function* () {
        query2 = q;
        const gen = ++generation;
        if (q.length < 2) {
          setRows([]);
          setText(status, "");
          return;
        }
        setText(status, "Searching\u2026");
        try {
          const hubs = yield session.server.search(q);
          if (gen !== generation) return;
          setRows(hubs);
          setText(status, hubs.length ? "" : "Nothing found for \u201C" + q + "\u201D");
        } catch (e) {
          error("search failed", e);
          setText(status, "Search failed");
        }
      });
    }
    function setRows(hubs) {
      track.innerHTML = "";
      let y = 0;
      rows = hubs.map((hub2) => {
        const row = new Row({
          title: hub2.title,
          kind: hub2.type === "episode" ? "episode" : "poster",
          caption: true,
          items: hub2.Metadata,
          onSelect: (item) => openItem(item)
        });
        setTransform(row.el, "translateY(" + y + "px)");
        row.y = y;
        y += row.height;
        track.appendChild(row.el);
        return row;
      });
      if (rowIndex >= rows.length) rowIndex = rows.length - 1;
      render();
    }
    function render() {
      rows.forEach((r, i) => r.setActive(i === rowIndex));
      el3.classList.toggle("in-input", rowIndex < 0);
      const y = rowIndex > 0 ? rows[rowIndex].y : 0;
      setTransform(track, "translateY(" + -y + "px)");
    }
    function focusInput() {
      rowIndex = -1;
      render();
      input.focus();
    }
    input.addEventListener("input", () => {
      clearTimeout(timer4);
      timer4 = setTimeout(() => run(input.value.trim()), 350);
    });
    input.addEventListener("keydown", (e) => {
      if (e.keyCode === IME_DONE || e.keyCode === 13) {
        input.blur();
        run(input.value.trim());
        if (rows.length) {
          rowIndex = 0;
          render();
        }
      } else if (e.keyCode === IME_CANCEL) {
        input.blur();
      }
    });
    return {
      el: el3,
      name: "search",
      onShow() {
        ambience.restore();
        if (rowIndex < 0) setTimeout(focusInput, 50);
      },
      onHide() {
        input.blur();
      },
      onKey(action) {
        if (rowIndex < 0) {
          if (action === "down" && rows.length) {
            input.blur();
            rowIndex = 0;
            render();
            return true;
          }
          if (action === "enter") {
            input.focus();
            return true;
          }
          if (action === "back") {
            input.blur();
            return false;
          }
          return true;
        }
        const row = rows[rowIndex];
        switch (action) {
          case "left":
            row.move(-1);
            return true;
          case "right":
            row.move(1);
            return true;
          case "up":
            if (rowIndex === 0) focusInput();
            else {
              rowIndex--;
              render();
            }
            return true;
          case "down":
            if (rowIndex < rows.length - 1) {
              rowIndex++;
              render();
            }
            return true;
          case "enter":
            row.select();
            return true;
          case "play":
          case "playpause":
            if (row.current()) playItem(row.current());
            return true;
          case "back":
            focusInput();
            return true;
        }
        return false;
      },
      destroy() {
        clearTimeout(timer4);
        generation++;
      }
    };
  }

  // app/js/ui/hud.js
  var el2 = null;
  var running = false;
  var frames = 0;
  var worst = 0;
  var last = 0;
  var windowStart = 0;
  var maxLatency = 0;
  var longFrames = 0;
  var screenName = () => "";
  function tick(now) {
    if (!running) return;
    const dt = now - last;
    last = now;
    frames++;
    if (dt > worst) worst = dt;
    if (dt > 50) longFrames++;
    if (stats.keyAt) {
      stats.latency = now - stats.keyAt;
      if (stats.latency > maxLatency) maxLatency = stats.latency;
      stats.keyAt = 0;
    }
    if (now - windowStart >= 1e3) {
      const fps = Math.round(frames * 1e3 / (now - windowStart));
      setText(el2, fps + " fps \xB7 worst " + worst.toFixed(0) + "ms \xB7 key " + stats.latency.toFixed(0) + "ms");
      if (maxLatency || fps < 55) {
        perf("screen=" + screenName() + " fps=" + fps + " worst=" + worst.toFixed(0) + " long=" + longFrames + " keyMax=" + maxLatency.toFixed(0));
      }
      frames = 0;
      worst = 0;
      longFrames = 0;
      maxLatency = 0;
      windowStart = now;
    }
    requestAnimationFrame(tick);
  }
  function setHud(on, remember2 = true) {
    if (remember2) set("hud", on);
    if (on === running) return;
    running = on;
    if (!el2) el2 = h("div", "hud", document.body);
    el2.style.display = on ? "" : "none";
    if (on) {
      last = windowStart = performance.now();
      requestAnimationFrame(tick);
    }
  }
  function hudEnabled() {
    return running;
  }
  function initHud(getScreenName) {
    screenName = getScreenName;
    setHud(get("hud", DEV), false);
  }

  // app/js/vendor/qrcode.js
  var qrcode = function(typeNumber, errorCorrectionLevel) {
    const PAD0 = 236;
    const PAD1 = 17;
    let _typeNumber = typeNumber;
    const _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    let _modules = null;
    let _moduleCount = 0;
    let _dataCache = null;
    const _dataList = [];
    const _this = {};
    const makeImpl = function(test, maskPattern) {
      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        const modules = new Array(moduleCount);
        for (let row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (let col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);
      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);
      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }
      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }
      mapData(_dataCache, maskPattern);
    };
    const setupPositionProbePattern = function(row, col) {
      for (let r = -1; r <= 7; r += 1) {
        if (row + r <= -1 || _moduleCount <= row + r) continue;
        for (let c = -1; c <= 7; c += 1) {
          if (col + c <= -1 || _moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };
    const getBestMaskPattern = function() {
      let minLostPoint = 0;
      let pattern = 0;
      for (let i = 0; i < 8; i += 1) {
        makeImpl(true, i);
        const lostPoint = QRUtil.getLostPoint(_this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }
      return pattern;
    };
    const setupTimingPattern = function() {
      for (let r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = r % 2 == 0;
      }
      for (let c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = c % 2 == 0;
      }
    };
    const setupPositionAdjustPattern = function() {
      const pos = QRUtil.getPatternPosition(_typeNumber);
      for (let i = 0; i < pos.length; i += 1) {
        for (let j = 0; j < pos.length; j += 1) {
          const row = pos[i];
          const col = pos[j];
          if (_modules[row][col] != null) {
            continue;
          }
          for (let r = -2; r <= 2; r += 1) {
            for (let c = -2; c <= 2; c += 1) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };
    const setupTypeNumber = function(test) {
      const bits = QRUtil.getBCHTypeNumber(_typeNumber);
      for (let i = 0; i < 18; i += 1) {
        const mod = !test && (bits >> i & 1) == 1;
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }
      for (let i = 0; i < 18; i += 1) {
        const mod = !test && (bits >> i & 1) == 1;
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };
    const setupTypeInfo = function(test, maskPattern) {
      const data = _errorCorrectionLevel << 3 | maskPattern;
      const bits = QRUtil.getBCHTypeInfo(data);
      for (let i = 0; i < 15; i += 1) {
        const mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }
      for (let i = 0; i < 15; i += 1) {
        const mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }
      _modules[_moduleCount - 8][8] = !test;
    };
    const mapData = function(data, maskPattern) {
      let inc = -1;
      let row = _moduleCount - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      const maskFunc = QRUtil.getMaskFunction(maskPattern);
      for (let col = _moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col -= 1;
        while (true) {
          for (let c = 0; c < 2; c += 1) {
            if (_modules[row][col - c] == null) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              const mask = maskFunc(row, col - c);
              if (mask) {
                dark = !dark;
              }
              _modules[row][col - c] = dark;
              bitIndex -= 1;
              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };
    const createBytes = function(buffer, rsBlocks) {
      let offset = 0;
      let maxDcCount = 0;
      let maxEcCount = 0;
      const dcdata = new Array(rsBlocks.length);
      const ecdata = new Array(rsBlocks.length);
      for (let r = 0; r < rsBlocks.length; r += 1) {
        const dcCount = rsBlocks[r].dataCount;
        const ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (let i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 255 & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;
        const rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        const rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
        const modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (let i = 0; i < ecdata[r].length; i += 1) {
          const modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
        }
      }
      let totalCodeCount = 0;
      for (let i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }
      const data = new Array(totalCodeCount);
      let index = 0;
      for (let i = 0; i < maxDcCount; i += 1) {
        for (let r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }
      for (let i = 0; i < maxEcCount; i += 1) {
        for (let r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }
      return data;
    };
    const createData = function(typeNumber2, errorCorrectionLevel2, dataList) {
      const rsBlocks = QRRSBlock.getRSBlocks(typeNumber2, errorCorrectionLevel2);
      const buffer = qrBitBuffer();
      for (let i = 0; i < dataList.length; i += 1) {
        const data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber2));
        data.write(buffer);
      }
      let totalDataCount = 0;
      for (let i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }
      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw "code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")";
      }
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }
      while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }
      return createBytes(buffer, rsBlocks);
    };
    _this.addData = function(data, mode) {
      mode = mode || "Byte";
      let newData = null;
      switch (mode) {
        case "Numeric":
          newData = qrNumber(data);
          break;
        case "Alphanumeric":
          newData = qrAlphaNum(data);
          break;
        case "Byte":
          newData = qr8BitByte(data);
          break;
        case "Kanji":
          newData = qrKanji(data);
          break;
        default:
          throw "mode:" + mode;
      }
      _dataList.push(newData);
      _dataCache = null;
    };
    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + "," + col;
      }
      return _modules[row][col];
    };
    _this.getModuleCount = function() {
      return _moduleCount;
    };
    _this.make = function() {
      if (_typeNumber < 1) {
        let typeNumber2 = 1;
        for (; typeNumber2 < 40; typeNumber2++) {
          const rsBlocks = QRRSBlock.getRSBlocks(typeNumber2, _errorCorrectionLevel);
          const buffer = qrBitBuffer();
          for (let i = 0; i < _dataList.length; i++) {
            const data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber2));
            data.write(buffer);
          }
          let totalDataCount = 0;
          for (let i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }
          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }
        _typeNumber = typeNumber2;
      }
      makeImpl(false, getBestMaskPattern());
    };
    _this.createTableTag = function(cellSize, margin) {
      cellSize = cellSize || 2;
      margin = typeof margin == "undefined" ? cellSize * 4 : margin;
      let qrHtml = "";
      qrHtml += '<table style="';
      qrHtml += " border-width: 0px; border-style: none;";
      qrHtml += " border-collapse: collapse;";
      qrHtml += " padding: 0px; margin: " + margin + "px;";
      qrHtml += '">';
      qrHtml += "<tbody>";
      for (let r = 0; r < _this.getModuleCount(); r += 1) {
        qrHtml += "<tr>";
        for (let c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += " border-width: 0px; border-style: none;";
          qrHtml += " border-collapse: collapse;";
          qrHtml += " padding: 0px; margin: 0px;";
          qrHtml += " width: " + cellSize + "px;";
          qrHtml += " height: " + cellSize + "px;";
          qrHtml += " background-color: ";
          qrHtml += _this.isDark(r, c) ? "#000000" : "#ffffff";
          qrHtml += ";";
          qrHtml += '"/>';
        }
        qrHtml += "</tr>";
      }
      qrHtml += "</tbody>";
      qrHtml += "</table>";
      return qrHtml;
    };
    _this.createSvgTag = function(cellSize, margin, alt, title) {
      let opts = {};
      if (typeof arguments[0] == "object") {
        opts = arguments[0];
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }
      cellSize = cellSize || 2;
      margin = typeof margin == "undefined" ? cellSize * 4 : margin;
      alt = typeof alt === "string" ? { text: alt } : alt || {};
      alt.text = alt.text || null;
      alt.id = alt.text ? alt.id || "qrcode-description" : null;
      title = typeof title === "string" ? { text: title } : title || {};
      title.text = title.text || null;
      title.id = title.text ? title.id || "qrcode-title" : null;
      const size = _this.getModuleCount() * cellSize + margin * 2;
      let c, mc, r, mr, qrSvg = "", rect;
      rect = "l" + cellSize + ",0 0," + cellSize + " -" + cellSize + ",0 0,-" + cellSize + "z ";
      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : "";
      qrSvg += ' viewBox="0 0 ' + size + " " + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += title.text || alt.text ? ' role="img" aria-labelledby="' + escapeXml([title.id, alt.id].join(" ").trim()) + '"' : "";
      qrSvg += ">";
      qrSvg += title.text ? '<title id="' + escapeXml(title.id) + '">' + escapeXml(title.text) + "</title>" : "";
      qrSvg += alt.text ? '<description id="' + escapeXml(alt.id) + '">' + escapeXml(alt.text) + "</description>" : "";
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';
      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c)) {
            mc = c * cellSize + margin;
            qrSvg += "M" + mc + "," + mr + rect;
          }
        }
      }
      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += "</svg>";
      return qrSvg;
    };
    _this.createDataURL = function(cellSize, margin) {
      cellSize = cellSize || 2;
      margin = typeof margin == "undefined" ? cellSize * 4 : margin;
      const size = _this.getModuleCount() * cellSize + margin * 2;
      const min = margin;
      const max = size - margin;
      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          const c = Math.floor((x - min) / cellSize);
          const r = Math.floor((y - min) / cellSize);
          return _this.isDark(r, c) ? 0 : 1;
        } else {
          return 1;
        }
      });
    };
    _this.createImgTag = function(cellSize, margin, alt) {
      cellSize = cellSize || 2;
      margin = typeof margin == "undefined" ? cellSize * 4 : margin;
      const size = _this.getModuleCount() * cellSize + margin * 2;
      let img = "";
      img += "<img";
      img += ' src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += ' width="';
      img += size;
      img += '"';
      img += ' height="';
      img += size;
      img += '"';
      if (alt) {
        img += ' alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += "/>";
      return img;
    };
    const escapeXml = function(s) {
      let escaped = "";
      for (let i = 0; i < s.length; i += 1) {
        const c = s.charAt(i);
        switch (c) {
          case "<":
            escaped += "&lt;";
            break;
          case ">":
            escaped += "&gt;";
            break;
          case "&":
            escaped += "&amp;";
            break;
          case '"':
            escaped += "&quot;";
            break;
          default:
            escaped += c;
            break;
        }
      }
      return escaped;
    };
    const _createHalfASCII = function(margin) {
      const cellSize = 1;
      margin = typeof margin == "undefined" ? cellSize * 2 : margin;
      const size = _this.getModuleCount() * cellSize + margin * 2;
      const min = margin;
      const max = size - margin;
      let y, x, r1, r2, p;
      const blocks = {
        "\u2588\u2588": "\u2588",
        "\u2588 ": "\u2580",
        " \u2588": "\u2584",
        "  ": " "
      };
      const blocksLastLineNoMargin = {
        "\u2588\u2588": "\u2580",
        "\u2588 ": "\u2580",
        " \u2588": " ",
        "  ": " "
      };
      let ascii = "";
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = "\u2588";
          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = " ";
          }
          if (min <= x && x < max && min <= y + 1 && y + 1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += " ";
          } else {
            p += "\u2588";
          }
          ascii += margin < 1 && y + 1 >= max ? blocksLastLineNoMargin[p] : blocks[p];
        }
        ascii += "\n";
      }
      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size + 1).join("\u2580");
      }
      return ascii.substring(0, ascii.length - 1);
    };
    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;
      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }
      cellSize -= 1;
      margin = typeof margin == "undefined" ? cellSize * 2 : margin;
      const size = _this.getModuleCount() * cellSize + margin * 2;
      const min = margin;
      const max = size - margin;
      let y, x, r, p;
      const white = Array(cellSize + 1).join("\u2588\u2588");
      const black = Array(cellSize + 1).join("  ");
      let ascii = "";
      let line = "";
      for (y = 0; y < size; y += 1) {
        r = Math.floor((y - min) / cellSize);
        line = "";
        for (x = 0; x < size; x += 1) {
          p = 1;
          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }
          line += p ? white : black;
        }
        for (r = 0; r < cellSize; r += 1) {
          ascii += line + "\n";
        }
      }
      return ascii.substring(0, ascii.length - 1);
    };
    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      const length = _this.getModuleCount();
      for (let row = 0; row < length; row++) {
        for (let col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? "black" : "white";
          context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    };
    return _this;
  };
  qrcode.stringToBytes = function(s) {
    const bytes = [];
    for (let i = 0; i < s.length; i += 1) {
      const c = s.charCodeAt(i);
      bytes.push(c & 255);
    }
    return bytes;
  };
  qrcode.createStringToBytes = function(unicodeData, numChars) {
    const unicodeMap = function() {
      const bin = base64DecodeInputStream(unicodeData);
      const read = function() {
        const b = bin.read();
        if (b == -1) throw "eof";
        return b;
      };
      let count = 0;
      const unicodeMap2 = {};
      while (true) {
        const b0 = bin.read();
        if (b0 == -1) break;
        const b1 = read();
        const b2 = read();
        const b3 = read();
        const k = String.fromCharCode(b0 << 8 | b1);
        const v = b2 << 8 | b3;
        unicodeMap2[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + " != " + numChars;
      }
      return unicodeMap2;
    }();
    const unknownChar = "?".charCodeAt(0);
    return function(s) {
      const bytes = [];
      for (let i = 0; i < s.length; i += 1) {
        const c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          const b = unicodeMap[s.charAt(i)];
          if (typeof b == "number") {
            if ((b & 255) == b) {
              bytes.push(b);
            } else {
              bytes.push(b >>> 8);
              bytes.push(b & 255);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };
  var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
  };
  var QRErrorCorrectionLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  };
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var QRUtil = function() {
    const PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    const _this = {};
    const getBCHDigit = function(data) {
      let digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };
    _this.getBCHTypeInfo = function(data) {
      let d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
      }
      return (data << 10 | d) ^ G15_MASK;
    };
    _this.getBCHTypeNumber = function(data) {
      let d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
      }
      return data << 12 | d;
    };
    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };
    _this.getMaskFunction = function(maskPattern) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return function(i, j) {
            return (i + j) % 2 == 0;
          };
        case QRMaskPattern.PATTERN001:
          return function(i, j) {
            return i % 2 == 0;
          };
        case QRMaskPattern.PATTERN010:
          return function(i, j) {
            return j % 3 == 0;
          };
        case QRMaskPattern.PATTERN011:
          return function(i, j) {
            return (i + j) % 3 == 0;
          };
        case QRMaskPattern.PATTERN100:
          return function(i, j) {
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
          };
        case QRMaskPattern.PATTERN101:
          return function(i, j) {
            return i * j % 2 + i * j % 3 == 0;
          };
        case QRMaskPattern.PATTERN110:
          return function(i, j) {
            return (i * j % 2 + i * j % 3) % 2 == 0;
          };
        case QRMaskPattern.PATTERN111:
          return function(i, j) {
            return (i * j % 3 + (i + j) % 2) % 2 == 0;
          };
        default:
          throw "bad maskPattern:" + maskPattern;
      }
    };
    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      let a = qrPolynomial([1], 0);
      for (let i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    };
    _this.getLengthInBits = function(mode, type) {
      if (1 <= type && type < 10) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;
          case QRMode.MODE_ALPHA_NUM:
            return 9;
          case QRMode.MODE_8BIT_BYTE:
            return 8;
          case QRMode.MODE_KANJI:
            return 8;
          default:
            throw "mode:" + mode;
        }
      } else if (type < 27) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;
          case QRMode.MODE_ALPHA_NUM:
            return 11;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 10;
          default:
            throw "mode:" + mode;
        }
      } else if (type < 41) {
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw "mode:" + mode;
        }
      } else {
        throw "type:" + type;
      }
    };
    _this.getLostPoint = function(qrcode2) {
      const moduleCount = qrcode2.getModuleCount();
      let lostPoint = 0;
      for (let row = 0; row < moduleCount; row += 1) {
        for (let col = 0; col < moduleCount; col += 1) {
          let sameCount = 0;
          const dark = qrcode2.isDark(row, col);
          for (let r = -1; r <= 1; r += 1) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }
            for (let c = -1; c <= 1; c += 1) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }
              if (r == 0 && c == 0) {
                continue;
              }
              if (dark == qrcode2.isDark(row + r, col + c)) {
                sameCount += 1;
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }
      ;
      for (let row = 0; row < moduleCount - 1; row += 1) {
        for (let col = 0; col < moduleCount - 1; col += 1) {
          let count = 0;
          if (qrcode2.isDark(row, col)) count += 1;
          if (qrcode2.isDark(row + 1, col)) count += 1;
          if (qrcode2.isDark(row, col + 1)) count += 1;
          if (qrcode2.isDark(row + 1, col + 1)) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }
      for (let row = 0; row < moduleCount; row += 1) {
        for (let col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode2.isDark(row, col) && !qrcode2.isDark(row, col + 1) && qrcode2.isDark(row, col + 2) && qrcode2.isDark(row, col + 3) && qrcode2.isDark(row, col + 4) && !qrcode2.isDark(row, col + 5) && qrcode2.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }
      for (let col = 0; col < moduleCount; col += 1) {
        for (let row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode2.isDark(row, col) && !qrcode2.isDark(row + 1, col) && qrcode2.isDark(row + 2, col) && qrcode2.isDark(row + 3, col) && qrcode2.isDark(row + 4, col) && !qrcode2.isDark(row + 5, col) && qrcode2.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      }
      let darkCount = 0;
      for (let col = 0; col < moduleCount; col += 1) {
        for (let row = 0; row < moduleCount; row += 1) {
          if (qrcode2.isDark(row, col)) {
            darkCount += 1;
          }
        }
      }
      const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    };
    return _this;
  }();
  var QRMath = function() {
    const EXP_TABLE = new Array(256);
    const LOG_TABLE = new Array(256);
    for (let i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (let i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8];
    }
    for (let i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i]] = i;
    }
    const _this = {};
    _this.glog = function(n) {
      if (n < 1) {
        throw "glog(" + n + ")";
      }
      return LOG_TABLE[n];
    };
    _this.gexp = function(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return EXP_TABLE[n];
    };
    return _this;
  }();
  var qrPolynomial = function(num2, shift) {
    if (typeof num2.length == "undefined") {
      throw num2.length + "/" + shift;
    }
    const _num = function() {
      let offset = 0;
      while (offset < num2.length && num2[offset] == 0) {
        offset += 1;
      }
      const _num2 = new Array(num2.length - offset + shift);
      for (let i = 0; i < num2.length - offset; i += 1) {
        _num2[i] = num2[i + offset];
      }
      return _num2;
    }();
    const _this = {};
    _this.getAt = function(index) {
      return _num[index];
    };
    _this.getLength = function() {
      return _num.length;
    };
    _this.multiply = function(e) {
      const num3 = new Array(_this.getLength() + e.getLength() - 1);
      for (let i = 0; i < _this.getLength(); i += 1) {
        for (let j = 0; j < e.getLength(); j += 1) {
          num3[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));
        }
      }
      return qrPolynomial(num3, 0);
    };
    _this.mod = function(e) {
      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }
      const ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));
      const num3 = new Array(_this.getLength());
      for (let i = 0; i < _this.getLength(); i += 1) {
        num3[i] = _this.getAt(i);
      }
      for (let i = 0; i < e.getLength(); i += 1) {
        num3[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
      }
      return qrPolynomial(num3, 0).mod(e);
    };
    return _this;
  };
  var QRRSBlock = function() {
    const RS_BLOCK_TABLE = [
      // L
      // M
      // Q
      // H
      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],
      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];
    const qrRSBlock = function(totalCount, dataCount) {
      const _this2 = {};
      _this2.totalCount = totalCount;
      _this2.dataCount = dataCount;
      return _this2;
    };
    const _this = {};
    const getRsBlockTable = function(typeNumber, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case QRErrorCorrectionLevel.L:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectionLevel.M:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectionLevel.Q:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectionLevel.H:
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {
      const rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);
      if (typeof rsBlock == "undefined") {
        throw "bad rs block @ typeNumber:" + typeNumber + "/errorCorrectionLevel:" + errorCorrectionLevel;
      }
      const length = rsBlock.length / 3;
      const list = [];
      for (let i = 0; i < length; i += 1) {
        const count = rsBlock[i * 3 + 0];
        const totalCount = rsBlock[i * 3 + 1];
        const dataCount = rsBlock[i * 3 + 2];
        for (let j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount));
        }
      }
      return list;
    };
    return _this;
  }();
  var qrBitBuffer = function() {
    const _buffer = [];
    let _length = 0;
    const _this = {};
    _this.getBuffer = function() {
      return _buffer;
    };
    _this.getAt = function(index) {
      const bufIndex = Math.floor(index / 8);
      return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    };
    _this.put = function(num2, length) {
      for (let i = 0; i < length; i += 1) {
        _this.putBit((num2 >>> length - i - 1 & 1) == 1);
      }
    };
    _this.getLengthInBits = function() {
      return _length;
    };
    _this.putBit = function(bit) {
      const bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }
      if (bit) {
        _buffer[bufIndex] |= 128 >>> _length % 8;
      }
      _length += 1;
    };
    return _this;
  };
  var qrNumber = function(data) {
    const _mode = QRMode.MODE_NUMBER;
    const _data = data;
    const _this = {};
    _this.getMode = function() {
      return _mode;
    };
    _this.getLength = function(buffer) {
      return _data.length;
    };
    _this.write = function(buffer) {
      const data2 = _data;
      let i = 0;
      while (i + 2 < data2.length) {
        buffer.put(strToNum(data2.substring(i, i + 3)), 10);
        i += 3;
      }
      if (i < data2.length) {
        if (data2.length - i == 1) {
          buffer.put(strToNum(data2.substring(i, i + 1)), 4);
        } else if (data2.length - i == 2) {
          buffer.put(strToNum(data2.substring(i, i + 2)), 7);
        }
      }
    };
    const strToNum = function(s) {
      let num2 = 0;
      for (let i = 0; i < s.length; i += 1) {
        num2 = num2 * 10 + chatToNum(s.charAt(i));
      }
      return num2;
    };
    const chatToNum = function(c) {
      if ("0" <= c && c <= "9") {
        return c.charCodeAt(0) - "0".charCodeAt(0);
      }
      throw "illegal char :" + c;
    };
    return _this;
  };
  var qrAlphaNum = function(data) {
    const _mode = QRMode.MODE_ALPHA_NUM;
    const _data = data;
    const _this = {};
    _this.getMode = function() {
      return _mode;
    };
    _this.getLength = function(buffer) {
      return _data.length;
    };
    _this.write = function(buffer) {
      const s = _data;
      let i = 0;
      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i)) * 45 + getCode(s.charAt(i + 1)),
          11
        );
        i += 2;
      }
      if (i < s.length) {
        buffer.put(getCode(s.charAt(i)), 6);
      }
    };
    const getCode = function(c) {
      if ("0" <= c && c <= "9") {
        return c.charCodeAt(0) - "0".charCodeAt(0);
      } else if ("A" <= c && c <= "Z") {
        return c.charCodeAt(0) - "A".charCodeAt(0) + 10;
      } else {
        switch (c) {
          case " ":
            return 36;
          case "$":
            return 37;
          case "%":
            return 38;
          case "*":
            return 39;
          case "+":
            return 40;
          case "-":
            return 41;
          case ".":
            return 42;
          case "/":
            return 43;
          case ":":
            return 44;
          default:
            throw "illegal char :" + c;
        }
      }
    };
    return _this;
  };
  var qr8BitByte = function(data) {
    const _mode = QRMode.MODE_8BIT_BYTE;
    const _data = data;
    const _bytes = qrcode.stringToBytes(data);
    const _this = {};
    _this.getMode = function() {
      return _mode;
    };
    _this.getLength = function(buffer) {
      return _bytes.length;
    };
    _this.write = function(buffer) {
      for (let i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };
    return _this;
  };
  var qrKanji = function(data) {
    const _mode = QRMode.MODE_KANJI;
    const _data = data;
    const stringToBytes2 = qrcode.stringToBytes;
    !function(c, code) {
      const test = stringToBytes2(c);
      if (test.length != 2 || (test[0] << 8 | test[1]) != code) {
        throw "sjis not supported.";
      }
    }("\u53CB", 38726);
    const _bytes = stringToBytes2(data);
    const _this = {};
    _this.getMode = function() {
      return _mode;
    };
    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };
    _this.write = function(buffer) {
      const data2 = _bytes;
      let i = 0;
      while (i + 1 < data2.length) {
        let c = (255 & data2[i]) << 8 | 255 & data2[i + 1];
        if (33088 <= c && c <= 40956) {
          c -= 33088;
        } else if (57408 <= c && c <= 60351) {
          c -= 49472;
        } else {
          throw "illegal char at " + (i + 1) + "/" + c;
        }
        c = (c >>> 8 & 255) * 192 + (c & 255);
        buffer.put(c, 13);
        i += 2;
      }
      if (i < data2.length) {
        throw "illegal char at " + (i + 1);
      }
    };
    return _this;
  };
  var byteArrayOutputStream = function() {
    const _bytes = [];
    const _this = {};
    _this.writeByte = function(b) {
      _bytes.push(b & 255);
    };
    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };
    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (let i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };
    _this.writeString = function(s) {
      for (let i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i));
      }
    };
    _this.toByteArray = function() {
      return _bytes;
    };
    _this.toString = function() {
      let s = "";
      s += "[";
      for (let i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ",";
        }
        s += _bytes[i];
      }
      s += "]";
      return s;
    };
    return _this;
  };
  var base64EncodeOutputStream = function() {
    let _buffer = 0;
    let _buflen = 0;
    let _length = 0;
    let _base64 = "";
    const _this = {};
    const writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 63));
    };
    const encode = function(n) {
      if (n < 0) {
        throw "n:" + n;
      } else if (n < 26) {
        return 65 + n;
      } else if (n < 52) {
        return 97 + (n - 26);
      } else if (n < 62) {
        return 48 + (n - 52);
      } else if (n == 62) {
        return 43;
      } else if (n == 63) {
        return 47;
      } else {
        throw "n:" + n;
      }
    };
    _this.writeByte = function(n) {
      _buffer = _buffer << 8 | n & 255;
      _buflen += 8;
      _length += 1;
      while (_buflen >= 6) {
        writeEncoded(_buffer >>> _buflen - 6);
        _buflen -= 6;
      }
    };
    _this.flush = function() {
      if (_buflen > 0) {
        writeEncoded(_buffer << 6 - _buflen);
        _buffer = 0;
        _buflen = 0;
      }
      if (_length % 3 != 0) {
        const padlen = 3 - _length % 3;
        for (let i = 0; i < padlen; i += 1) {
          _base64 += "=";
        }
      }
    };
    _this.toString = function() {
      return _base64;
    };
    return _this;
  };
  var base64DecodeInputStream = function(str) {
    const _str = str;
    let _pos = 0;
    let _buffer = 0;
    let _buflen = 0;
    const _this = {};
    _this.read = function() {
      while (_buflen < 8) {
        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw "unexpected end of file./" + _buflen;
        }
        const c = _str.charAt(_pos);
        _pos += 1;
        if (c == "=") {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/)) {
          continue;
        }
        _buffer = _buffer << 6 | decode(c.charCodeAt(0));
        _buflen += 6;
      }
      const n = _buffer >>> _buflen - 8 & 255;
      _buflen -= 8;
      return n;
    };
    const decode = function(c) {
      if (65 <= c && c <= 90) {
        return c - 65;
      } else if (97 <= c && c <= 122) {
        return c - 97 + 26;
      } else if (48 <= c && c <= 57) {
        return c - 48 + 52;
      } else if (c == 43) {
        return 62;
      } else if (c == 47) {
        return 63;
      } else {
        throw "c:" + c;
      }
    };
    return _this;
  };
  var gifImage = function(width, height) {
    const _width = width;
    const _height = height;
    const _data = new Array(width * height);
    const _this = {};
    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };
    _this.write = function(out) {
      out.writeString("GIF87a");
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(128);
      out.writeByte(0);
      out.writeByte(0);
      out.writeByte(0);
      out.writeByte(0);
      out.writeByte(0);
      out.writeByte(255);
      out.writeByte(255);
      out.writeByte(255);
      out.writeString(",");
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);
      const lzwMinCodeSize = 2;
      const raster = getLZWRaster(lzwMinCodeSize);
      out.writeByte(lzwMinCodeSize);
      let offset = 0;
      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }
      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0);
      out.writeString(";");
    };
    const bitOutputStream = function(out) {
      const _out = out;
      let _bitLength = 0;
      let _bitBuffer = 0;
      const _this2 = {};
      _this2.write = function(data, length) {
        if (data >>> length != 0) {
          throw "length over";
        }
        while (_bitLength + length >= 8) {
          _out.writeByte(255 & (data << _bitLength | _bitBuffer));
          length -= 8 - _bitLength;
          data >>>= 8 - _bitLength;
          _bitBuffer = 0;
          _bitLength = 0;
        }
        _bitBuffer = data << _bitLength | _bitBuffer;
        _bitLength = _bitLength + length;
      };
      _this2.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };
      return _this2;
    };
    const getLZWRaster = function(lzwMinCodeSize) {
      const clearCode = 1 << lzwMinCodeSize;
      const endCode = (1 << lzwMinCodeSize) + 1;
      let bitLength = lzwMinCodeSize + 1;
      const table = lzwTable();
      for (let i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i));
      }
      table.add(String.fromCharCode(clearCode));
      table.add(String.fromCharCode(endCode));
      const byteOut = byteArrayOutputStream();
      const bitOut = bitOutputStream(byteOut);
      bitOut.write(clearCode, bitLength);
      let dataIndex = 0;
      let s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;
      while (dataIndex < _data.length) {
        const c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;
        if (table.contains(s + c)) {
          s = s + c;
        } else {
          bitOut.write(table.indexOf(s), bitLength);
          if (table.size() < 4095) {
            if (table.size() == 1 << bitLength) {
              bitLength += 1;
            }
            table.add(s + c);
          }
          s = c;
        }
      }
      bitOut.write(table.indexOf(s), bitLength);
      bitOut.write(endCode, bitLength);
      bitOut.flush();
      return byteOut.toByteArray();
    };
    const lzwTable = function() {
      const _map = {};
      let _size = 0;
      const _this2 = {};
      _this2.add = function(key) {
        if (_this2.contains(key)) {
          throw "dup key:" + key;
        }
        _map[key] = _size;
        _size += 1;
      };
      _this2.size = function() {
        return _size;
      };
      _this2.indexOf = function(key) {
        return _map[key];
      };
      _this2.contains = function(key) {
        return typeof _map[key] != "undefined";
      };
      return _this2;
    };
    return _this;
  };
  var createDataURL = function(width, height, getPixel) {
    const gif = gifImage(width, height);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y));
      }
    }
    const b = byteArrayOutputStream();
    gif.write(b);
    const base64 = base64EncodeOutputStream();
    const bytes = b.toByteArray();
    for (let i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();
    return "data:image/gif;base64," + base64;
  };
  var stringToBytes = qrcode.stringToBytes;

  // app/js/screens/form.js
  var IME_DONE2 = 65376;
  var IME_CANCEL2 = 65385;
  function FormScreen({ title, lead, fields, action, actionNote, hint, onSubmit, onDone, okText }) {
    const el3 = h("div", "screen picker form");
    const ambience = useAmbience();
    h("h1", "picker-title", el3).textContent = title;
    if (!isTizen) {
      const back2 = h("div", "back-btn", el3);
      back2.textContent = "\u2039 Back";
      back2.addEventListener("click", (e) => {
        e.stopPropagation();
        back();
      });
      h("div", "kbd-hint", el3).textContent = "\u2191 \u2193 move   Enter select   Esc back   or use the mouse";
    }
    const list = h("div", "form-list", el3);
    if (lead) h("div", "form-lead", list).innerHTML = lead;
    const rows = fields.map((f) => {
      const row = h("div", "field", list);
      h("span", "field-label", row).textContent = f.label;
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        edit(fields.indexOf(f));
      });
      const input = h("input", "", row);
      input.type = f.secret ? "password" : "text";
      input.placeholder = f.placeholder || "";
      input.value = f.value || "";
      input.setAttribute("autocomplete", "off");
      input.addEventListener("focus", () => {
        index = fields.indexOf(f);
        render();
      });
      return { f, row, input };
    });
    const n = rows.length;
    const go = h("div", "btn btn-wide", list);
    h("span", "", go).textContent = action || "Connect";
    if (actionNote) h("small", "", go).textContent = actionNote;
    go.addEventListener("click", (e) => {
      e.stopPropagation();
      edit(n);
      submit();
    });
    const status = h("div", "login-status", list);
    if (hint) h("div", "form-hint", list).innerHTML = hint;
    let index = 0;
    let busy = false;
    function render() {
      rows.forEach((r, i) => r.row.classList.toggle("focus", i === index));
      go.classList.toggle("focus", index === n);
    }
    function edit(i) {
      index = Math.max(0, Math.min(n, i));
      render();
      if (index < n) rows[index].input.focus();
      else if (document.activeElement) document.activeElement.blur();
    }
    function submit() {
      return __async(this, null, function* () {
        if (busy) return;
        const values = {};
        rows.forEach((r) => {
          values[r.f.key] = r.input.value.trim();
        });
        busy = true;
        setText(status, "Connecting\u2026");
        try {
          const info = yield onSubmit(values);
          setText(status, okText ? okText(info) : "Connected to " + info.name);
          onDone();
        } catch (e) {
          setText(status, e.message);
        } finally {
          busy = false;
        }
      });
    }
    rows.forEach((r, i) => r.input.addEventListener("keydown", (e) => {
      if (e.keyCode === IME_DONE2 || e.keyCode === 13) {
        r.input.blur();
        edit(i + 1);
      } else if (e.keyCode === IME_CANCEL2) r.input.blur();
    }));
    render();
    return {
      el: el3,
      name: "form",
      onShow() {
        ambience.restore();
        setTimeout(() => edit(0), 50);
      },
      onHide() {
        if (document.activeElement) document.activeElement.blur();
      },
      onKey(a) {
        const editing = document.activeElement && document.activeElement.tagName === "INPUT";
        if (a === "back") {
          if (editing) {
            document.activeElement.blur();
            return true;
          }
          return false;
        }
        if (a === "up") {
          edit(index - 1);
          return true;
        }
        if (a === "down") {
          edit(index + 1);
          return true;
        }
        if (a === "enter") {
          if (editing) return true;
          if (index < n) edit(index);
          else submit();
          return true;
        }
        return editing;
      }
    };
  }

  // app/js/plex/manual.js
  function normalizeAddress(text) {
    let a = String(text || "").trim().replace(/\s+/g, "");
    if (!a) return "";
    if (!/^https?:\/\//i.test(a)) a = "http://" + a;
    a = a.replace(/\/+$/, "");
    const host = a.replace(/^https?:\/\//i, "").split("/")[0];
    if (/^http:\/\//i.test(a) && !/:\d+$/.test(host) && a.replace(/^http:\/\//i, "") === host) a += ":32400";
    return a;
  }
  function checkServer(uri, token) {
    return __async(this, null, function* () {
      try {
        yield request(uri + "/library/sections", { token: token || void 0, timeout: 7e3 });
      } catch (e) {
        if (e.status === 401) throw new Error("The server is there, but it needs a token. Add your Plex token below.");
        if (e.status) throw new Error("The server answered with " + e.message + ". Is this a Plex server?");
        throw new Error("Can't reach " + uri + ". Check the address, the port, and that you are on the same network.");
      }
      let name = uri.replace(/^https?:\/\//i, "");
      try {
        const root3 = yield request(uri + "/", { token: token || void 0, timeout: 4e3 });
        const mc = root3.MediaContainer || root3;
        if (mc.friendlyName) name = mc.friendlyName;
      } catch (e) {
      }
      return { name };
    });
  }

  // app/js/screens/server-form.js
  function ServerForm({ onDone }) {
    const last2 = profiles().length ? {} : get("lastManual") || {};
    return FormScreen({
      title: "Plex server",
      fields: [
        { key: "address", label: "Address", placeholder: "192.168.1.5:32400", value: last2.address },
        { key: "token", label: "Token (optional)", placeholder: "Leave empty if the server allows it", value: last2.token }
      ],
      actionNote: "Works with any Plex Media Server you can reach",
      hint: "The address is your server's IP and port (Plex uses <b>32400</b>), or a full link such as https://plex.example.com. The token is only needed if the server asks for one: in Plex Web open any item, choose Get Info, View XML, and copy the value after <b>X-Plex-Token=</b>.",
      onSubmit(v) {
        return __async(this, null, function* () {
          const uri = normalizeAddress(v.address);
          if (!uri) throw new Error("Type the server address first.");
          const info = yield checkServer(uri, v.token);
          set("lastManual", { address: v.address, token: v.token });
          useManualServer({ uri, token: v.token, name: info.name });
          return info;
        });
      },
      onDone
    });
  }

  // app/js/screens/add-server.js
  var remembered = (key) => profiles().length ? {} : get(key) || {};
  function macLead() {
    const m = tvMac();
    let note;
    if (m.real && m.source) {
      note = m.source + " MAC of this device. Give it to your provider to activate it." + (m.others && m.others.length ? "   Also: " + m.others.map((o) => (/^eth/.test(o.name) ? "Ethernet " : "Wi-Fi ") + o.mac).join(", ") : "");
    } else if (m.real) {
      note = "This TV's MAC. Give it to your provider to activate it.";
    } else if (m.android) {
      note = "This Android version hides the device's real MAC from apps. Find it in the TV's Settings, Network, and type it in the field below, or ask your provider to activate this one.";
    } else {
      note = "A browser has no real MAC, so this is a virtual one. On a Samsung TV the TV's own MAC is shown here.";
    }
    return "MAC address: <b>" + m.mac + '</b><br><span class="form-lead-small">' + note + "</span>";
  }
  function XtreamForm({ onDone }) {
    const last2 = remembered("lastXtream");
    return FormScreen({
      title: "IPTV: Xtream",
      fields: [
        { key: "address", label: "Server address", placeholder: "provider.com:8080   (no http:// needed)", value: last2.address },
        { key: "user", label: "Username", placeholder: "", value: last2.user },
        { key: "pass", label: "Password", placeholder: "", value: last2.pass, secret: true },
        { key: "ext", label: "Live format", placeholder: "ts (or m3u8)", value: last2.ext || "ts" }
      ],
      actionNote: "Live TV, movies and series from your provider",
      hint: "Your provider gives you the server address, username and password. Live channels try <b>ts</b> first, then m3u8 automatically.",
      onSubmit(v) {
        return __async(this, null, function* () {
          let uri = normalizeBase(v.address);
          if (!uri) throw new Error("Type the server address first.");
          if (!v.user || !v.pass) throw new Error("Type the username and password.");
          let info;
          try {
            info = yield checkXtream({ uri, user: v.user, pass: v.pass });
          } catch (e) {
            const typed = /^https?:\/\//i.test(String(v.address).trim());
            if (typed || !/^http:/i.test(uri)) throw e;
            const alt = uri.replace(/^http:/i, "https:");
            try {
              info = yield checkXtream({ uri: alt, user: v.user, pass: v.pass });
              uri = alt;
            } catch (e2) {
              throw e;
            }
          }
          let liveExt = /^m3u8$/i.test(v.ext) ? "m3u8" : "ts";
          if (info.formats && info.formats.length && info.formats.indexOf(liveExt) === -1) liveExt = info.formats[0] === "m3u8" ? "m3u8" : "ts";
          set("lastXtream", { address: v.address, user: v.user, pass: v.pass, ext: liveExt });
          useIptv({ kind: "xtream", uri, user: v.user, pass: v.pass, liveFirst: liveExt, formats: info.formats, name: info.name }, "Xtream");
          return info;
        });
      },
      onDone
    });
  }
  function MacForm({ onDone }) {
    const last2 = remembered("lastPortal");
    return FormScreen({
      title: "IPTV: MAC portal",
      lead: macLead(),
      fields: [
        { key: "portal", label: "Portal address", placeholder: "http://portal.example.com/c/", value: last2.portal },
        { key: "mac", label: "MAC to use", placeholder: tvMac().mac, value: last2.mac || tvMac().mac },
        ...window.ZenAndroid ? [] : [{ key: "bridge", label: "Bridge (optional)", placeholder: "http://192.168.1.10:8080  (a PC running desktop.bat lan)", value: get("bridge") || "" }]
      ],
      actionNote: "Activated by the MAC address above",
      hint: "Send the MAC address to your provider so they activate it, then type the portal address they give you. Leave the MAC field as it is unless your provider activated a different one. Bridge: only if the portal refuses the TV directly; see the README.",
      onSubmit(v) {
        return __async(this, null, function* () {
          const uri = normalizePortal(v.portal);
          if (!uri) throw new Error("Type the portal address first.");
          const mac = cleanMac(v.mac);
          if (!mac) throw new Error("The MAC address must have 12 characters, like 00:1A:79:12:34:56.");
          if (!window.ZenAndroid) set("bridge", v.bridge ? v.bridge.trim() : void 0);
          const server = new StalkerServer({ uri, mac, name: uri });
          const info = yield server.connect();
          yield server.verify();
          set("lastPortal", { portal: v.portal, mac });
          useIptv({ kind: "stalker", uri, mac, loadUrl: server.loadUrl, name: info.name }, "MAC portal");
          return info;
        });
      },
      onDone
    });
  }
  function AddServer({ onDone, welcome }) {
    const el3 = h("div", "screen picker form");
    const ambience = useAmbience();
    h("h1", "picker-title", el3).textContent = welcome ? "Welcome to Zen Pro" : "Add a server";
    if (!isTizen) {
      if (!welcome) {
        const back2 = h("div", "back-btn", el3);
        back2.textContent = "\u2039 Back";
        back2.addEventListener("click", (e) => {
          e.stopPropagation();
          back();
        });
      }
      h("div", "kbd-hint", el3).textContent = "\u2191 \u2193 move   Enter select   Esc back   or click an option";
    }
    const list = h("div", "form-list", el3);
    h("div", "form-lead", list).innerHTML = actLead();
    const choices = addChoices(onDone);
    const btns = choices.map((c) => {
      const b = h("div", "btn btn-wide", list);
      h("span", "", b).textContent = c.label;
      h("small", "", b).textContent = c.note;
      return b;
    });
    let index = 0;
    const render = () => btns.forEach((b, i) => b.classList.toggle("focus", i === index));
    btns.forEach((b, i) => {
      b.addEventListener("mouseenter", () => {
        index = i;
        render();
      });
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        index = i;
        render();
        push(choices[i].open());
      });
    });
    render();
    return {
      el: el3,
      name: "add-server",
      onShow() {
        ambience.restore();
      },
      onKey(a) {
        if (a === "up") {
          index = Math.max(0, index - 1);
          render();
          return true;
        }
        if (a === "down") {
          index = Math.min(choices.length - 1, index + 1);
          render();
          return true;
        }
        if (a === "enter") {
          push(choices[index].open());
          return true;
        }
        return false;
      }
    };
  }


  // ===================================================================================
  // Zen Pro: activation by code. A provider runs the small activation server and gives each customer a
  // code. The app sends the code with this device's ID and a private device key; the server answers with
  // the service (Xtream / MAC portal) to use. Those services are "managed": the customer never sees or
  // edits their address or password, and the provider can change them centrally.
  // ===================================================================================
  var ACTIVATION_URL = "";
  var SHA_K = [];
  var SHA_H = [];
  (function() {
    let p = 2, n = 0;
    while (n < 64) {
      let ok = true;
      for (let d = 2; d * d <= p; d++) if (p % d === 0) {
        ok = false;
        break;
      }
      if (ok) {
        if (n < 8) SHA_H[n] = Math.pow(p, 1 / 2) % 1 * 4294967296 | 0;
        SHA_K[n] = Math.pow(p, 1 / 3) % 1 * 4294967296 | 0;
        n++;
      }
      p++;
    }
  })();
  function sha256hex(str) {
    const m = unescape(encodeURIComponent(String(str)));
    const l = m.length;
    const w = [];
    let i, j;
    for (i = 0; i < l; i++) w[i >> 2] |= m.charCodeAt(i) << 24 - i % 4 * 8;
    w[l >> 2] |= 128 << 24 - l % 4 * 8;
    w[((l + 8 >> 6) + 1) * 16 - 1] = l * 8;
    const h2 = SHA_H.slice(0);
    const t = [];
    for (j = 0; j < w.length; j += 16) {
      let a = h2[0], b = h2[1], c = h2[2], d = h2[3], e = h2[4], f = h2[5], g = h2[6], hh = h2[7];
      for (i = 0; i < 64; i++) {
        if (i < 16) t[i] = w[j + i] | 0;
        else {
          const x = t[i - 15], y = t[i - 2];
          const s0 = (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
          const s1 = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
          t[i] = t[i - 16] + s0 + t[i - 7] + s1 | 0;
        }
        const S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        const t1 = hh + S1 + (e & f ^ ~e & g) + SHA_K[i] + t[i] | 0;
        const S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
        const t2 = S0 + (a & b ^ a & c ^ b & c) | 0;
        hh = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
      h2[0] = h2[0] + a | 0;
      h2[1] = h2[1] + b | 0;
      h2[2] = h2[2] + c | 0;
      h2[3] = h2[3] + d | 0;
      h2[4] = h2[4] + e | 0;
      h2[5] = h2[5] + f | 0;
      h2[6] = h2[6] + g | 0;
      h2[7] = h2[7] + hh | 0;
    }
    let out = "";
    for (i = 0; i < 8; i++) out += ("00000000" + (h2[i] >>> 0).toString(16)).slice(-8);
    return out;
  }
  function randomHex(n) {
    let a = null;
    try {
      a = new Uint8Array(n);
      (window.crypto || window.msCrypto).getRandomValues(a);
    } catch (e) {
      a = null;
    }
    let out = "";
    for (let i = 0; i < n; i++) out += ("0" + (a ? a[i] : Math.floor(Math.random() * 256)).toString(16)).slice(-2);
    return out;
  }
  // What the provider registers: the real MAC when the system lets the app read it, otherwise a stable generated ID.
  function deviceId() {
    const m = tvMac();
    if (m.real) return m.mac;
    let id = get("deviceId");
    if (!id) {
      const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      const r = randomHex(10);
      let s2 = "";
      for (let i = 0; i < 10; i++) s2 += A[parseInt(r.substr(i * 2, 2), 16) % A.length];
      id = "ZP-" + s2.slice(0, 5) + "-" + s2.slice(5);
      set("deviceId", id);
    }
    return id;
  }
  // Private to this installation: after the first activation the code only works with this key.
  function deviceKey() {
    let k = get("deviceKey");
    if (!k) {
      k = randomHex(16);
      set("deviceKey", k);
    }
    return k;
  }
  var ACT_MSG = {
    invalid_code: "That code is not valid. Check it and try again.",
    revoked: "This code has been suspended. Contact your provider.",
    expired: "This subscription has expired. Contact your provider to renew.",
    device_limit: "This code is already used on the maximum number of devices.",
    device_blocked: "This device is blocked. Contact your provider.",
    key_mismatch: "This device was activated before and its link was lost (app data cleared?). Ask your provider to reset this device.",
    not_registered: "This device is not registered with your provider yet. Send them the Device ID.",
    device_removed: "This device was removed from the service. Activate again with your code.",
    rate_limited: "Too many attempts. Wait a minute and try again.",
    bad_request: "The request was not valid."
  };
  function actMsg(code) {
    return ACT_MSG[code] || "Your activation ended. Activate again with your code.";
  }
  function actNormServer(text) {
    let a = String(text || "").trim().replace(/\s+/g, "");
    if (!a) return "";
    if (!/^https?:\/\//i.test(a)) a = (/^\d{1,3}(\.\d{1,3}){3}(:\d+)?$/.test(a) || /^localhost/i.test(a) || /:\d+$/.test(a) ? "http://" : "https://") + a;
    return a.replace(/\/+$/, "");
  }
  // Accepts  CODE  or  provider.com/CODE  (then the provider's address is read from the code itself).
  function actParse(rawCode, rawServer) {
    let code = String(rawCode || "").trim().replace(/\s+/g, "");
    let server = String(rawServer || "").trim();
    const m = code.match(/^(.+)\/([^\/]+)$/);
    if (m) {
      server = m[1];
      code = m[2];
    }
    const act = get("act");
    server = actNormServer(server || act && act.server || get("actServer") || ACTIVATION_URL);
    if (!code) throw new Error("Type the activation code first.");
    if (!server) throw new Error("Type your provider's address too, or write the code like  provider.com/YOURCODE");
    return { server, code: code.toUpperCase() };
  }
  function actParams(code) {
    return { code, device: deviceId(), mac: tvMac().mac, k: deviceKey(), platform: isTizen ? "tizen" : isAndroid ? "android" : isElectron ? "windows" : "web", app: VERSION };
  }
  function actCall(server, path, params) {
    return __async(this, null, function* () {
      const j = yield getJson(server + path + "?" + qs(params), { timeout: 2e4 });
      if (!j || typeof j !== "object") throw new Error("The activation server gave an unexpected answer.");
      return j;
    });
  }
  function actSaved(svc, act) {
    const tag = { managed: true, actId: act.code, svcId: svc.id || svc.name };
    if (svc.type === "xtream") {
      const uri = normalizeBase(svc.uri);
      if (!uri || !svc.user) return null;
      return Object.assign({ kind: "xtream", uri, user: svc.user, pass: svc.pass, liveFirst: /^m3u8$/i.test(svc.ext) ? "m3u8" : "ts", name: svc.name || act.brand }, tag);
    }
    if (svc.type === "mac") {
      const uri = normalizePortal(svc.portal);
      const mac = cleanMac(svc.mac && svc.mac !== "device" ? svc.mac : tvMac().mac);
      if (!uri || !mac) return null;
      return Object.assign({ kind: "stalker", uri, mac, name: svc.name || act.brand }, tag);
    }
    return null;
  }
  var actSig = (x) => [x.kind, x.uri, x.user, x.pass, x.mac, x.liveFirst].join("|");
  // Stores what the server sent: replaces every managed profile, and (when asked) switches to the first one.
  function actApply(act, res, activate) {
    const prevNotice = act.seenNotice || "";
    act.brand = res.brand || "Zen Pro";
    act.notice = res.notice || "";
    act.support = res.support || "";
    act.lockManual = !!res.lockManual;
    act.expires = res.expires || null;
    act.checkAfter = res.checkAfter || 21600;
    act.lastSync = Date.now();
    act.invalid = "";
    const items = (res.services || []).map((x) => actSaved(x, act)).filter(Boolean);
    if (!items.length) throw new Error("Your provider has not assigned a service to this code yet.");
    const old = profiles();
    const cur = session.server && session.server.saved;
    const curManaged = !!(cur && cur.managed);
    items.forEach((it) => {
      const prev = old.find((p) => p.saved.managed && p.saved.svcId === it.svcId && p.saved.uri === it.uri);
      if (prev && prev.saved.loadUrl) it.loadUrl = prev.saved.loadUrl;
    });
    set("profiles", old.filter((p) => !p.saved.managed));
    items.slice().reverse().forEach((it) => rememberProfile(it, act.brand + " \xB7 " + it.name));
    let changed = false;
    if (activate) {
      useIptv(items[0], act.brand);
    } else if (curManaged) {
      const next = items.find((i) => i.svcId === cur.svcId) || items[0];
      if (actSig(next) !== actSig(cur)) {
        session.server = makeServer(next);
        set("server", next);
        set("homeCache", void 0);
        changed = true;
      }
    }
    if (act.notice && act.notice !== prevNotice) {
      act.seenNotice = act.notice;
      setTimeout(() => toast(act.notice, 9e3), 1500);
    }
    set("act", act);
    return { changed, items };
  }
  function actActivate(rawCode, rawServer) {
    return __async(this, null, function* () {
      const { server, code } = actParse(rawCode, rawServer);
      const res = yield actCall(server, "/api/activate", actParams(code));
      if (!res.ok) throw new Error(ACT_MSG[res.error] || res.message || "Activation failed.");
      const act = { server, code };
      set("actServer", server);
      actApply(act, res, true);
      return { name: act.brand };
    });
  }
  // The server said this activation is over (expired, suspended, removed): drop the managed services.
  function actInvalid(act, reason) {
    act.invalid = reason || "revoked";
    set("act", act);
    set("profiles", profiles().filter((p) => !p.saved.managed));
    const cur = session.server && session.server.saved;
    if (cur && cur.managed) {
      signOut();
      toast(actMsg(act.invalid), 9e3);
      window.dispatchEvent(new Event("zenpro:restart"));
    }
  }
  function actSync(force) {
    return __async(this, null, function* () {
      const act = get("act");
      if (!act || !(act.code || act.auto) || !act.server || act.invalid) return null;
      const lapsed = act.expires && act.expires < Date.now();
      if (!force && !lapsed && act.lastSync && Date.now() - act.lastSync < (act.checkAfter || 21600) * 1e3) return null;
      let res;
      try {
        res = yield actCall(act.server, "/api/sync", actParams(act.code));
      } catch (e) {
        if (lapsed) {
          actInvalid(act, "expired");
          return { ok: false, error: "expired" };
        }
        return { offline: true };
      }
      if (res.error === "rate_limited") return { offline: true };
      if (!res.ok) {
        actInvalid(act, res.error);
        return res;
      }
      const r = actApply(act, res, false);
      if (r.changed) {
        toast("Your service was updated");
        window.dispatchEvent(new Event("zenpro:restart"));
      }
      return res;
    });
  }
  var actTimer = 0;
  function actKick() {
    actSync(false).then(() => {
      const act = get("act");
      if (act && !act.invalid && act.expires) {
        const days = Math.ceil((act.expires - Date.now()) / 864e5);
        if (days > 0 && days <= 7) setTimeout(() => toast("Your subscription ends in " + days + (days === 1 ? " day" : " days"), 7e3), 2500);
      }
    }, () => {
    });
    if (!actTimer) actTimer = setInterval(() => {
      actSync(false).catch(() => {
      });
    }, 6e5);
  }
  function actFootAddr() {
    const sv = session.server;
    if (!sv) return "";
    if (sv.saved && sv.saved.managed) {
      const act = get("act");
      return (act && act.brand || "Provider") + (sv.saved.name ? " \xB7 " + sv.saved.name : "");
    }
    return String(sv.uri || "").replace(/X-Plex-Token=.*/, "");
  }
  function actStatusText() {
    const act = get("act");
    if (!act) return "Not activated";
    if (act.invalid) return "Ended";
    const d = act.expires ? new Date(act.expires) : null;
    return (act.brand || "Active") + (d ? "  \xB7  until " + d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) : "");
  }
  function actLead() {
    const act = get("act");
    let t = "Device ID: <b>" + deviceId() + "</b> &nbsp; PIN: <b>" + actPin() + "</b>";
    if (act && act.invalid) t += '<br><span class="form-lead-small">' + actMsg(act.invalid) + "</span>";
    else if (policyLocked()) t += policyLeadHtml();
    else t += '<br><span class="form-lead-small">Choose Activate with code if your provider gave you a code. Your provider may ask for this ID.</span>';
    return t;
  }
  function addChoices(onDone) {
    const act = get("act");
    const list = [
      { label: "Activate by Device ID", note: "Your provider links this device for you", open: () => AutoForm({ onDone }) },
      { label: "Activate with code", note: "Type the code your provider gave you", open: () => ActivationForm({ onDone }) }
    ];
    if (!(act && act.lockManual) && !policyLocked()) {
      list.push(
        { label: "IPTV: Xtream", note: "Provider address, username and password", open: () => XtreamForm({ onDone }) },
        { label: "IPTV: MAC portal", note: "Activated by the MAC address", open: () => MacForm({ onDone }) }
      );
    }
    return list;
  }


  // ===================================================================================
  // Remote lock. The app reads a tiny policy (JSON) from POLICY_URL: mode "open" lets everyone use manual
  // Xtream / MAC servers; mode "required" makes activation from the control panel mandatory. If the policy
  // can't be reached the last one seen is kept; with none seen yet the app stays open.
  // ===================================================================================
  var POLICY_URL = "https://raw.githubusercontent.com/mi23-cloud/zenpro-policy/main/policy.json";
  function policyUrl() {
    if (POLICY_URL) return POLICY_URL;
    const base = actNormServer(ACTIVATION_URL || get("actServer") || "");
    return base ? base + "/api/policy" : "";
  }
  function polEsc(t) {
    return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function policyEnforced() {
    const p = get("policy");
    if (!p || p.mode !== "required") return false;
    return !(p.enforceAt && Number(p.enforceAt) > Date.now());
  }
  function policyUnlocked() {
    const act = get("act");
    return !!(act && !act.invalid && (!act.expires || act.expires > Date.now()));
  }
  function policyLocked() {
    return policyEnforced() && !policyUnlocked();
  }
  function policyMsg() {
    const p = get("policy") || {};
    return p.message || "Activation is required to use this app. Ask your provider to activate this device.";
  }
  function policyLeadHtml() {
    const p = get("policy") || {};
    let t = '<br><span class="form-lead-small">' + polEsc(policyMsg()) + "</span>";
    if (p.payUrl) t += '<br><span class="form-lead-small">' + polEsc(p.payUrl) + "</span>";
    if (p.support) t += '<br><span class="form-lead-small">' + polEsc(p.support) + "</span>";
    return t;
  }
  function policyRefresh() {
    return __async(this, null, function* () {
      const u = policyUrl();
      if (!u) return null;
      let j;
      try {
        j = yield getJson(u + (u.indexOf("?") < 0 ? "?" : "&") + "t=" + Date.now(), { timeout: 12e3 });
      } catch (e) {
        return null;
      }
      if (!j || typeof j !== "object" || j.ok === false) return null;
      const p = { mode: j.mode === "required" ? "required" : "open", enforceAt: Number(j.enforceAt) || 0, message: String(j.message || ""), payUrl: String(j.payUrl || ""), support: String(j.support || ""), fetchedAt: Date.now() };
      set("policy", p);
      apkNotice(j.update);
      otaCheck(j.update);
      if (j.activationServer && !(get("act") && get("act").server)) set("actServer", actNormServer(j.activationServer));
      return p;
    });
  }
  // Locked and still on a manual server: drop it and go back to the activation screen.
  function policyApply() {
    if (!policyLocked()) return;
    const cur = session.server && session.server.saved;
    if (session.server && !(cur && cur.managed)) {
      signOut();
      toast(policyMsg(), 9e3);
      window.dispatchEvent(new Event("zenpro:restart"));
    }
  }
  var policyTimer = 0;
  function policyBoot() {
    if (!policyUrl()) return;
    const run = () => {
      const was = policyLocked();
      return policyRefresh().then(() => {
        if (session.server) {
          policyApply();
        } else {
          if (was !== policyLocked()) window.dispatchEvent(new Event("zenpro:restart"));
          actAutoBoot();
        }
      }, () => {
      });
    };
    run();
    if (!policyTimer) policyTimer = setInterval(run, 6e5);
  }


  // ===================================================================================
  // Updates. (1) The app's code can be replaced over the air: the policy file names a newer app.bundle.js and
  // its Ed25519 signature; the app downloads it, verifies it against the public key built in below, and runs it
  // from the next start. Unsigned or wrongly signed files are ignored. A new version that fails to start twice
  // is dropped and the built-in code is used again. (2) A newer APK only produces a notice with a download link,
  // because Android asks the user to approve every install.
  // ===================================================================================
  var NATIVE_VERSION = "1.3.0";
  var OTA_PUB = "kmyKYgJgHv6Bi6LSPhsPQJQqcQEpnkCKiDp0J0o62B8=";
  var NACL = (function() {
    var module = { exports: {} }, self = {}, require;
    !function(i){"use strict";var v=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},h=function(){throw new Error("no PRNG")},o=new Uint8Array(16),n=new Uint8Array(32);n[0]=9;var s=v(),u=v([1]),p=v([56129,1]),c=v([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),y=v([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),e=v([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),a=v([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),l=v([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function f(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function w(r,t,n,e,o){var i,h=0;for(i=0;i<o;i++)h|=r[t+i]^n[e+i];return(1&h-1>>>8)-1}function b(r,t,n,e){return w(r,t,n,e,16)}function g(r,t,n,e){return w(r,t,n,e,32)}function A(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,m=u,B=c,S=y,k=l,K=w,Y=v,L=p,T=b,z=g,R=A,P=_,N=0;N<20;N+=2)U^=(o=(T^=(o=(k^=(o=(M^=(o=U+T|0)<<7|o>>>25)+U|0)<<9|o>>>23)+M|0)<<13|o>>>19)+k|0)<<18|o>>>14,m^=(o=(d^=(o=(z^=(o=(K^=(o=m+d|0)<<7|o>>>25)+m|0)<<9|o>>>23)+K|0)<<13|o>>>19)+z|0)<<18|o>>>14,Y^=(o=(B^=(o=(E^=(o=(R^=(o=Y+B|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+R|0)<<13|o>>>19)+E|0)<<18|o>>>14,P^=(o=(L^=(o=(S^=(o=(x^=(o=P+L|0)<<7|o>>>25)+P|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,U^=(o=(x^=(o=(E^=(o=(d^=(o=U+x|0)<<7|o>>>25)+U|0)<<9|o>>>23)+d|0)<<13|o>>>19)+E|0)<<18|o>>>14,m^=(o=(M^=(o=(S^=(o=(B^=(o=m+M|0)<<7|o>>>25)+m|0)<<9|o>>>23)+B|0)<<13|o>>>19)+S|0)<<18|o>>>14,Y^=(o=(K^=(o=(k^=(o=(L^=(o=Y+K|0)<<7|o>>>25)+Y|0)<<9|o>>>23)+L|0)<<13|o>>>19)+k|0)<<18|o>>>14,P^=(o=(R^=(o=(z^=(o=(T^=(o=P+R|0)<<7|o>>>25)+P|0)<<9|o>>>23)+T|0)<<13|o>>>19)+z|0)<<18|o>>>14;U=U+i|0,d=d+h|0,E=E+a|0,x=x+f|0,M=M+s|0,m=m+u|0,B=B+c|0,S=S+y|0,k=k+l|0,K=K+w|0,Y=Y+v|0,L=L+p|0,T=T+b|0,z=z+g|0,R=R+A|0,P=P+_|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=d>>>0&255,r[5]=d>>>8&255,r[6]=d>>>16&255,r[7]=d>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=m>>>0&255,r[21]=m>>>8&255,r[22]=m>>>16&255,r[23]=m>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=S>>>0&255,r[29]=S>>>8&255,r[30]=S>>>16&255,r[31]=S>>>24&255,r[32]=k>>>0&255,r[33]=k>>>8&255,r[34]=k>>>16&255,r[35]=k>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=Y>>>0&255,r[41]=Y>>>8&255,r[42]=Y>>>16&255,r[43]=Y>>>24&255,r[44]=L>>>0&255,r[45]=L>>>8&255,r[46]=L>>>16&255,r[47]=L>>>24&255,r[48]=T>>>0&255,r[49]=T>>>8&255,r[50]=T>>>16&255,r[51]=T>>>24&255,r[52]=z>>>0&255,r[53]=z>>>8&255,r[54]=z>>>16&255,r[55]=z>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=P>>>0&255,r[61]=P>>>8&255,r[62]=P>>>16&255,r[63]=P>>>24&255}(r,t,n,e)}function _(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=0;U<20;U+=2)i^=(o=(b^=(o=(l^=(o=(s^=(o=i+b|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,u^=(o=(h^=(o=(g^=(o=(w^=(o=u+h|0)<<7|o>>>25)+u|0)<<9|o>>>23)+w|0)<<13|o>>>19)+g|0)<<18|o>>>14,v^=(o=(c^=(o=(a^=(o=(A^=(o=v+c|0)<<7|o>>>25)+v|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,_^=(o=(p^=(o=(y^=(o=(f^=(o=_+p|0)<<7|o>>>25)+_|0)<<9|o>>>23)+f|0)<<13|o>>>19)+y|0)<<18|o>>>14,i^=(o=(f^=(o=(a^=(o=(h^=(o=i+f|0)<<7|o>>>25)+i|0)<<9|o>>>23)+h|0)<<13|o>>>19)+a|0)<<18|o>>>14,u^=(o=(s^=(o=(y^=(o=(c^=(o=u+s|0)<<7|o>>>25)+u|0)<<9|o>>>23)+c|0)<<13|o>>>19)+y|0)<<18|o>>>14,v^=(o=(w^=(o=(l^=(o=(p^=(o=v+w|0)<<7|o>>>25)+v|0)<<9|o>>>23)+p|0)<<13|o>>>19)+l|0)<<18|o>>>14,_^=(o=(A^=(o=(g^=(o=(b^=(o=_+A|0)<<7|o>>>25)+_|0)<<9|o>>>23)+b|0)<<13|o>>>19)+g|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=u>>>0&255,r[5]=u>>>8&255,r[6]=u>>>16&255,r[7]=u>>>24&255,r[8]=v>>>0&255,r[9]=v>>>8&255,r[10]=v>>>16&255,r[11]=v>>>24&255,r[12]=_>>>0&255,r[13]=_>>>8&255,r[14]=_>>>16&255,r[15]=_>>>24&255,r[16]=c>>>0&255,r[17]=c>>>8&255,r[18]=c>>>16&255,r[19]=c>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=l>>>0&255,r[25]=l>>>8&255,r[26]=l>>>16&255,r[27]=l>>>24&255,r[28]=w>>>0&255,r[29]=w>>>8&255,r[30]=w>>>16&255,r[31]=w>>>24&255}(r,t,n,e)}var U=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function d(r,t,n,e,o,i,h){var a,f,s=new Uint8Array(16),u=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=i[f];for(;64<=o;){for(A(u,s,h,U),f=0;f<64;f++)r[t+f]=n[e+f]^u[f];for(a=1,f=8;f<16;f++)a=a+(255&s[f])|0,s[f]=255&a,a>>>=8;o-=64,t+=64,e+=64}if(0<o)for(A(u,s,h,U),f=0;f<o;f++)r[t+f]=n[e+f]^u[f];return 0}function E(r,t,n,e,o){var i,h,a=new Uint8Array(16),f=new Uint8Array(64);for(h=0;h<16;h++)a[h]=0;for(h=0;h<8;h++)a[h]=e[h];for(;64<=n;){for(A(f,a,o,U),h=0;h<64;h++)r[t+h]=f[h];for(i=1,h=8;h<16;h++)i=i+(255&a[h])|0,a[h]=255&i,i>>>=8;n-=64,t+=64}if(0<n)for(A(f,a,o,U),h=0;h<n;h++)r[t+h]=f[h];return 0}function x(r,t,n,e,o){var i=new Uint8Array(32);_(i,e,o,U);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=e[a+16];return E(r,t,n,h,i)}function M(r,t,n,e,o,i,h){var a=new Uint8Array(32);_(a,i,h,U);for(var f=new Uint8Array(8),s=0;s<8;s++)f[s]=i[s+16];return d(r,t,n,e,o,f,a)}var m=function(r){var t,n,e,o,i,h,a,f;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,t=255&r[this.fin=0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),o=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|o<<9),i=255&r[8]|(255&r[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,h=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(i>>>14|h<<2),a=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(h>>>11|a<<5),f=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(a>>>8|f<<8),this.r[9]=f>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function B(r,t,n,e,o,i){var h=new m(i);return h.update(n,e,o),h.finish(r,t),0}function S(r,t,n,e,o,i){var h=new Uint8Array(16);return B(h,0,n,e,o,i),b(r,t,h,0)}function k(r,t,n,e,o){var i;if(n<32)return-1;for(M(r,0,t,0,n,e,o),B(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function K(r,t,n,e,o){var i,h=new Uint8Array(32);if(n<32)return-1;if(x(h,0,32,e,o),0!==S(t,16,t,32,n-32,h))return-1;for(M(r,0,t,0,n,e,o),i=0;i<32;i++)r[i]=0;return 0}function Y(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function L(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function T(r,t,n){for(var e,o=~(n-1),i=0;i<16;i++)e=o&(r[i]^t[i]),r[i]^=e,t[i]^=e}function z(r,t){var n,e,o,i=v(),h=v();for(n=0;n<16;n++)h[n]=t[n];for(L(h),L(h),L(h),e=0;e<2;e++){for(i[0]=h[0]-65517,n=1;n<15;n++)i[n]=h[n]-65535-(i[n-1]>>16&1),i[n-1]&=65535;i[15]=h[15]-32767-(i[14]>>16&1),o=i[15]>>16&1,i[14]&=65535,T(h,i,1-o)}for(n=0;n<16;n++)r[2*n]=255&h[n],r[2*n+1]=h[n]>>8}function R(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return z(n,r),z(e,t),g(n,0,e,0)}function P(r){var t=new Uint8Array(32);return z(t,r),1&t[0]}function N(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function O(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function C(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function F(r,t,n){var e,o,i=0,h=0,a=0,f=0,s=0,u=0,c=0,y=0,l=0,w=0,v=0,p=0,b=0,g=0,A=0,_=0,U=0,d=0,E=0,x=0,M=0,m=0,B=0,S=0,k=0,K=0,Y=0,L=0,T=0,z=0,R=0,P=n[0],N=n[1],O=n[2],C=n[3],F=n[4],I=n[5],Z=n[6],G=n[7],q=n[8],D=n[9],V=n[10],X=n[11],j=n[12],H=n[13],J=n[14],Q=n[15];i+=(e=t[0])*P,h+=e*N,a+=e*O,f+=e*C,s+=e*F,u+=e*I,c+=e*Z,y+=e*G,l+=e*q,w+=e*D,v+=e*V,p+=e*X,b+=e*j,g+=e*H,A+=e*J,_+=e*Q,h+=(e=t[1])*P,a+=e*N,f+=e*O,s+=e*C,u+=e*F,c+=e*I,y+=e*Z,l+=e*G,w+=e*q,v+=e*D,p+=e*V,b+=e*X,g+=e*j,A+=e*H,_+=e*J,U+=e*Q,a+=(e=t[2])*P,f+=e*N,s+=e*O,u+=e*C,c+=e*F,y+=e*I,l+=e*Z,w+=e*G,v+=e*q,p+=e*D,b+=e*V,g+=e*X,A+=e*j,_+=e*H,U+=e*J,d+=e*Q,f+=(e=t[3])*P,s+=e*N,u+=e*O,c+=e*C,y+=e*F,l+=e*I,w+=e*Z,v+=e*G,p+=e*q,b+=e*D,g+=e*V,A+=e*X,_+=e*j,U+=e*H,d+=e*J,E+=e*Q,s+=(e=t[4])*P,u+=e*N,c+=e*O,y+=e*C,l+=e*F,w+=e*I,v+=e*Z,p+=e*G,b+=e*q,g+=e*D,A+=e*V,_+=e*X,U+=e*j,d+=e*H,E+=e*J,x+=e*Q,u+=(e=t[5])*P,c+=e*N,y+=e*O,l+=e*C,w+=e*F,v+=e*I,p+=e*Z,b+=e*G,g+=e*q,A+=e*D,_+=e*V,U+=e*X,d+=e*j,E+=e*H,x+=e*J,M+=e*Q,c+=(e=t[6])*P,y+=e*N,l+=e*O,w+=e*C,v+=e*F,p+=e*I,b+=e*Z,g+=e*G,A+=e*q,_+=e*D,U+=e*V,d+=e*X,E+=e*j,x+=e*H,M+=e*J,m+=e*Q,y+=(e=t[7])*P,l+=e*N,w+=e*O,v+=e*C,p+=e*F,b+=e*I,g+=e*Z,A+=e*G,_+=e*q,U+=e*D,d+=e*V,E+=e*X,x+=e*j,M+=e*H,m+=e*J,B+=e*Q,l+=(e=t[8])*P,w+=e*N,v+=e*O,p+=e*C,b+=e*F,g+=e*I,A+=e*Z,_+=e*G,U+=e*q,d+=e*D,E+=e*V,x+=e*X,M+=e*j,m+=e*H,B+=e*J,S+=e*Q,w+=(e=t[9])*P,v+=e*N,p+=e*O,b+=e*C,g+=e*F,A+=e*I,_+=e*Z,U+=e*G,d+=e*q,E+=e*D,x+=e*V,M+=e*X,m+=e*j,B+=e*H,S+=e*J,k+=e*Q,v+=(e=t[10])*P,p+=e*N,b+=e*O,g+=e*C,A+=e*F,_+=e*I,U+=e*Z,d+=e*G,E+=e*q,x+=e*D,M+=e*V,m+=e*X,B+=e*j,S+=e*H,k+=e*J,K+=e*Q,p+=(e=t[11])*P,b+=e*N,g+=e*O,A+=e*C,_+=e*F,U+=e*I,d+=e*Z,E+=e*G,x+=e*q,M+=e*D,m+=e*V,B+=e*X,S+=e*j,k+=e*H,K+=e*J,Y+=e*Q,b+=(e=t[12])*P,g+=e*N,A+=e*O,_+=e*C,U+=e*F,d+=e*I,E+=e*Z,x+=e*G,M+=e*q,m+=e*D,B+=e*V,S+=e*X,k+=e*j,K+=e*H,Y+=e*J,L+=e*Q,g+=(e=t[13])*P,A+=e*N,_+=e*O,U+=e*C,d+=e*F,E+=e*I,x+=e*Z,M+=e*G,m+=e*q,B+=e*D,S+=e*V,k+=e*X,K+=e*j,Y+=e*H,L+=e*J,T+=e*Q,A+=(e=t[14])*P,_+=e*N,U+=e*O,d+=e*C,E+=e*F,x+=e*I,M+=e*Z,m+=e*G,B+=e*q,S+=e*D,k+=e*V,K+=e*X,Y+=e*j,L+=e*H,T+=e*J,z+=e*Q,_+=(e=t[15])*P,h+=38*(d+=e*O),a+=38*(E+=e*C),f+=38*(x+=e*F),s+=38*(M+=e*I),u+=38*(m+=e*Z),c+=38*(B+=e*G),y+=38*(S+=e*q),l+=38*(k+=e*D),w+=38*(K+=e*V),v+=38*(Y+=e*X),p+=38*(L+=e*j),b+=38*(T+=e*H),g+=38*(z+=e*J),A+=38*(R+=e*Q),i=(e=(i+=38*(U+=e*N))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),_=(e=_+o+65535)-65536*(o=Math.floor(e/65536)),i=(e=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),_=(e=_+o+65535)-65536*(o=Math.floor(e/65536)),i+=o-1+37*(o-1),r[0]=i,r[1]=h,r[2]=a,r[3]=f,r[4]=s,r[5]=u,r[6]=c,r[7]=y,r[8]=l,r[9]=w,r[10]=v,r[11]=p,r[12]=b,r[13]=g,r[14]=A,r[15]=_}function I(r,t){F(r,t,t)}function Z(r,t){var n,e=v();for(n=0;n<16;n++)e[n]=t[n];for(n=253;0<=n;n--)I(e,e),2!==n&&4!==n&&F(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function G(r,t){var n,e=v();for(n=0;n<16;n++)e[n]=t[n];for(n=250;0<=n;n--)I(e,e),1!==n&&F(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function q(r,t,n){var e,o,i=new Uint8Array(32),h=new Float64Array(80),a=v(),f=v(),s=v(),u=v(),c=v(),y=v();for(o=0;o<31;o++)i[o]=t[o];for(i[31]=127&t[31]|64,i[0]&=248,N(h,n),o=0;o<16;o++)f[o]=h[o],u[o]=a[o]=s[o]=0;for(a[0]=u[0]=1,o=254;0<=o;--o)T(a,f,e=i[o>>>3]>>>(7&o)&1),T(s,u,e),O(c,a,s),C(a,a,s),O(s,f,u),C(f,f,u),I(u,c),I(y,a),F(a,s,a),F(s,f,c),O(c,a,s),C(a,a,s),I(f,a),C(s,u,y),F(a,s,p),O(a,a,u),F(s,s,a),F(a,u,y),F(u,f,h),I(f,c),T(a,f,e),T(s,u,e);for(o=0;o<16;o++)h[o+16]=a[o],h[o+32]=s[o],h[o+48]=f[o],h[o+64]=u[o];var l=h.subarray(32),w=h.subarray(16);return Z(l,l),F(w,w,l),z(r,w),0}function D(r,t){return q(r,t,n)}function V(r,t){return h(t,32),D(r,t)}function X(r,t,n){var e=new Uint8Array(32);return q(e,n,t),_(r,o,e,U)}m.prototype.blocks=function(r,t,n){for(var e,o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,A,_,U,d=this.fin?0:2048,E=this.h[0],x=this.h[1],M=this.h[2],m=this.h[3],B=this.h[4],S=this.h[5],k=this.h[6],K=this.h[7],Y=this.h[8],L=this.h[9],T=this.r[0],z=this.r[1],R=this.r[2],P=this.r[3],N=this.r[4],O=this.r[5],C=this.r[6],F=this.r[7],I=this.r[8],Z=this.r[9];16<=n;)y=c=0,y+=(E+=8191&(e=255&r[t+0]|(255&r[t+1])<<8))*T,y+=(x+=8191&(e>>>13|(o=255&r[t+2]|(255&r[t+3])<<8)<<3))*(5*Z),y+=(M+=8191&(o>>>10|(i=255&r[t+4]|(255&r[t+5])<<8)<<6))*(5*I),y+=(m+=8191&(i>>>7|(h=255&r[t+6]|(255&r[t+7])<<8)<<9))*(5*F),c=(y+=(B+=8191&(h>>>4|(a=255&r[t+8]|(255&r[t+9])<<8)<<12))*(5*C))>>>13,y&=8191,y+=(S+=a>>>1&8191)*(5*O),y+=(k+=8191&(a>>>14|(f=255&r[t+10]|(255&r[t+11])<<8)<<2))*(5*N),y+=(K+=8191&(f>>>11|(s=255&r[t+12]|(255&r[t+13])<<8)<<5))*(5*P),y+=(Y+=8191&(s>>>8|(u=255&r[t+14]|(255&r[t+15])<<8)<<8))*(5*R),l=c+=(y+=(L+=u>>>5|d)*(5*z))>>>13,l+=E*z,l+=x*T,l+=M*(5*Z),l+=m*(5*I),c=(l+=B*(5*F))>>>13,l&=8191,l+=S*(5*C),l+=k*(5*O),l+=K*(5*N),l+=Y*(5*P),c+=(l+=L*(5*R))>>>13,l&=8191,w=c,w+=E*R,w+=x*z,w+=M*T,w+=m*(5*Z),c=(w+=B*(5*I))>>>13,w&=8191,w+=S*(5*F),w+=k*(5*C),w+=K*(5*O),w+=Y*(5*N),v=c+=(w+=L*(5*P))>>>13,v+=E*P,v+=x*R,v+=M*z,v+=m*T,c=(v+=B*(5*Z))>>>13,v&=8191,v+=S*(5*I),v+=k*(5*F),v+=K*(5*C),v+=Y*(5*O),p=c+=(v+=L*(5*N))>>>13,p+=E*N,p+=x*P,p+=M*R,p+=m*z,c=(p+=B*T)>>>13,p&=8191,p+=S*(5*Z),p+=k*(5*I),p+=K*(5*F),p+=Y*(5*C),b=c+=(p+=L*(5*O))>>>13,b+=E*O,b+=x*N,b+=M*P,b+=m*R,c=(b+=B*z)>>>13,b&=8191,b+=S*T,b+=k*(5*Z),b+=K*(5*I),b+=Y*(5*F),g=c+=(b+=L*(5*C))>>>13,g+=E*C,g+=x*O,g+=M*N,g+=m*P,c=(g+=B*R)>>>13,g&=8191,g+=S*z,g+=k*T,g+=K*(5*Z),g+=Y*(5*I),A=c+=(g+=L*(5*F))>>>13,A+=E*F,A+=x*C,A+=M*O,A+=m*N,c=(A+=B*P)>>>13,A&=8191,A+=S*R,A+=k*z,A+=K*T,A+=Y*(5*Z),_=c+=(A+=L*(5*I))>>>13,_+=E*I,_+=x*F,_+=M*C,_+=m*O,c=(_+=B*N)>>>13,_&=8191,_+=S*P,_+=k*R,_+=K*z,_+=Y*T,U=c+=(_+=L*(5*Z))>>>13,U+=E*Z,U+=x*I,U+=M*F,U+=m*C,c=(U+=B*O)>>>13,U&=8191,U+=S*N,U+=k*P,U+=K*R,U+=Y*z,E=y=8191&(c=(c=((c+=(U+=L*T)>>>13)<<2)+c|0)+(y&=8191)|0),x=l+=c>>>=13,M=w&=8191,m=v&=8191,B=p&=8191,S=b&=8191,k=g&=8191,K=A&=8191,Y=_&=8191,L=U&=8191,t+=16,n-=16;this.h[0]=E,this.h[1]=x,this.h[2]=M,this.h[3]=m,this.h[4]=B,this.h[5]=S,this.h[6]=k,this.h[7]=K,this.h[8]=Y,this.h[9]=L},m.prototype.finish=function(r,t){var n,e,o,i,h=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,h[0]=this.h[0]+5,n=h[0]>>>13,h[0]&=8191,i=1;i<10;i++)h[i]=this.h[i]+n,n=h[i]>>>13,h[i]&=8191;for(h[9]-=8192,e=(1^n)-1,i=0;i<10;i++)h[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|h[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},m.prototype.update=function(r,t,n){var e,o;if(this.leftover){for(n<(o=16-this.leftover)&&(o=n),e=0;e<o;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(16<=n&&(o=n-n%16,this.blocks(r,t,o),t+=o,n-=o),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var j=k,H=K;var J=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Q(r,t,n,e){for(var o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,A,_,U,d,E,x,M,m,B,S=new Int32Array(16),k=new Int32Array(16),K=r[0],Y=r[1],L=r[2],T=r[3],z=r[4],R=r[5],P=r[6],N=r[7],O=t[0],C=t[1],F=t[2],I=t[3],Z=t[4],G=t[5],q=t[6],D=t[7],V=0;128<=e;){for(_=0;_<16;_++)U=8*_+V,S[_]=n[U+0]<<24|n[U+1]<<16|n[U+2]<<8|n[U+3],k[_]=n[U+4]<<24|n[U+5]<<16|n[U+6]<<8|n[U+7];for(_=0;_<80;_++)if(o=Y,i=L,h=T,c=C,y=F,l=I,x=65535&(E=D),M=E>>>16,m=65535&(d=N),B=d>>>16,x+=65535&(E=((w=Z)>>>14|(a=z)<<18)^(Z>>>18|z<<14)^(z>>>9|Z<<23)),M+=E>>>16,m+=65535&(d=(z>>>14|Z<<18)^(z>>>18|Z<<14)^(Z>>>9|z<<23)),B+=d>>>16,x+=65535&(E=Z&(v=G)^~Z&(p=q)),M+=E>>>16,m+=65535&(d=z&(f=R)^~z&(s=P)),B+=d>>>16,d=J[2*_],x+=65535&(E=J[2*_+1]),M+=E>>>16,m+=65535&d,B+=d>>>16,d=S[_%16],M+=(E=k[_%16])>>>16,m+=65535&d,B+=d>>>16,m+=(M+=(x+=65535&E)>>>16)>>>16,x=65535&(E=A=65535&x|M<<16),M=E>>>16,m=65535&(d=g=65535&m|(B+=m>>>16)<<16),B=d>>>16,x+=65535&(E=(O>>>28|K<<4)^(K>>>2|O<<30)^(K>>>7|O<<25)),M+=E>>>16,m+=65535&(d=(K>>>28|O<<4)^(O>>>2|K<<30)^(O>>>7|K<<25)),B+=d>>>16,M+=(E=O&C^O&F^C&F)>>>16,m+=65535&(d=K&Y^K&L^Y&L),B+=d>>>16,u=65535&(m+=(M+=(x+=65535&E)>>>16)>>>16)|(B+=m>>>16)<<16,b=65535&x|M<<16,x=65535&(E=l),M=E>>>16,m=65535&(d=h),B=d>>>16,M+=(E=A)>>>16,m+=65535&(d=g),B+=d>>>16,Y=K,L=o,T=i,z=h=65535&(m+=(M+=(x+=65535&E)>>>16)>>>16)|(B+=m>>>16)<<16,R=a,P=f,N=s,K=u,C=O,F=c,I=y,Z=l=65535&x|M<<16,G=w,q=v,D=p,O=b,_%16==15)for(U=0;U<16;U++)d=S[U],x=65535&(E=k[U]),M=E>>>16,m=65535&d,B=d>>>16,d=S[(U+9)%16],x+=65535&(E=k[(U+9)%16]),M+=E>>>16,m+=65535&d,B+=d>>>16,g=S[(U+1)%16],x+=65535&(E=((A=k[(U+1)%16])>>>1|g<<31)^(A>>>8|g<<24)^(A>>>7|g<<25)),M+=E>>>16,m+=65535&(d=(g>>>1|A<<31)^(g>>>8|A<<24)^g>>>7),B+=d>>>16,g=S[(U+14)%16],M+=(E=((A=k[(U+14)%16])>>>19|g<<13)^(g>>>29|A<<3)^(A>>>6|g<<26))>>>16,m+=65535&(d=(g>>>19|A<<13)^(A>>>29|g<<3)^g>>>6),B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,S[U]=65535&m|B<<16,k[U]=65535&x|M<<16;x=65535&(E=O),M=E>>>16,m=65535&(d=K),B=d>>>16,d=r[0],M+=(E=t[0])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[0]=K=65535&m|B<<16,t[0]=O=65535&x|M<<16,x=65535&(E=C),M=E>>>16,m=65535&(d=Y),B=d>>>16,d=r[1],M+=(E=t[1])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[1]=Y=65535&m|B<<16,t[1]=C=65535&x|M<<16,x=65535&(E=F),M=E>>>16,m=65535&(d=L),B=d>>>16,d=r[2],M+=(E=t[2])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[2]=L=65535&m|B<<16,t[2]=F=65535&x|M<<16,x=65535&(E=I),M=E>>>16,m=65535&(d=T),B=d>>>16,d=r[3],M+=(E=t[3])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[3]=T=65535&m|B<<16,t[3]=I=65535&x|M<<16,x=65535&(E=Z),M=E>>>16,m=65535&(d=z),B=d>>>16,d=r[4],M+=(E=t[4])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[4]=z=65535&m|B<<16,t[4]=Z=65535&x|M<<16,x=65535&(E=G),M=E>>>16,m=65535&(d=R),B=d>>>16,d=r[5],M+=(E=t[5])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[5]=R=65535&m|B<<16,t[5]=G=65535&x|M<<16,x=65535&(E=q),M=E>>>16,m=65535&(d=P),B=d>>>16,d=r[6],M+=(E=t[6])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[6]=P=65535&m|B<<16,t[6]=q=65535&x|M<<16,x=65535&(E=D),M=E>>>16,m=65535&(d=N),B=d>>>16,d=r[7],M+=(E=t[7])>>>16,m+=65535&d,B+=d>>>16,B+=(m+=(M+=(x+=65535&E)>>>16)>>>16)>>>16,r[7]=N=65535&m|B<<16,t[7]=D=65535&x|M<<16,V+=128,e-=128}return e}function W(r,t,n){var e,o=new Int32Array(8),i=new Int32Array(8),h=new Uint8Array(256),a=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,Q(o,i,t,n),n%=128,e=0;e<n;e++)h[e]=t[a-n+e];for(h[n]=128,h[(n=256-128*(n<112?1:0))-9]=0,f(h,n-8,a/536870912|0,a<<3),Q(o,i,h,n),e=0;e<8;e++)f(r,8*e,o[e],i[e]);return 0}function $(r,t){var n=v(),e=v(),o=v(),i=v(),h=v(),a=v(),f=v(),s=v(),u=v();C(n,r[1],r[0]),C(u,t[1],t[0]),F(n,n,u),O(e,r[0],r[1]),O(u,t[0],t[1]),F(e,e,u),F(o,r[3],t[3]),F(o,o,y),F(i,r[2],t[2]),O(i,i,i),C(h,e,n),C(a,i,o),O(f,i,o),O(s,e,n),F(r[0],h,a),F(r[1],s,f),F(r[2],f,a),F(r[3],h,s)}function rr(r,t,n){var e;for(e=0;e<4;e++)T(r[e],t[e],n)}function tr(r,t){var n=v(),e=v(),o=v();Z(o,t[2]),F(n,t[0],o),F(e,t[1],o),z(r,e),r[31]^=P(n)<<7}function nr(r,t,n){var e,o;for(Y(r[0],s),Y(r[1],u),Y(r[2],u),Y(r[3],s),o=255;0<=o;--o)rr(r,t,e=n[o/8|0]>>(7&o)&1),$(t,r),$(r,r),rr(r,t,e)}function er(r,t){var n=[v(),v(),v(),v()];Y(n[0],e),Y(n[1],a),Y(n[2],u),F(n[3],e,a),nr(r,n,t)}function or(r,t,n){var e,o=new Uint8Array(64),i=[v(),v(),v(),v()];for(n||h(t,32),W(o,t,32),o[0]&=248,o[31]&=127,o[31]|=64,er(i,o),tr(r,i),e=0;e<32;e++)t[e+32]=r[e];return 0}var ir=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function hr(r,t){var n,e,o,i;for(e=63;32<=e;--e){for(n=0,o=e-32,i=e-12;o<i;++o)t[o]+=n-16*t[e]*ir[o-(e-32)],n=Math.floor((t[o]+128)/256),t[o]-=256*n;t[o]+=n,t[e]=0}for(o=n=0;o<32;o++)t[o]+=n-(t[31]>>4)*ir[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*ir[o];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function ar(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;hr(r,n)}function fr(r,t,n,e){var o,i,h=new Uint8Array(64),a=new Uint8Array(64),f=new Uint8Array(64),s=new Float64Array(64),u=[v(),v(),v(),v()];W(h,e,32),h[0]&=248,h[31]&=127,h[31]|=64;var c=n+64;for(o=0;o<n;o++)r[64+o]=t[o];for(o=0;o<32;o++)r[32+o]=h[32+o];for(W(f,r.subarray(32),n+32),ar(f),er(u,f),tr(r,u),o=32;o<64;o++)r[o]=e[o];for(W(a,r,n+64),ar(a),o=0;o<64;o++)s[o]=0;for(o=0;o<32;o++)s[o]=f[o];for(o=0;o<32;o++)for(i=0;i<32;i++)s[o+i]+=a[o]*h[i];return hr(r.subarray(32),s),c}function sr(r,t,n,e){var o,i=new Uint8Array(32),h=new Uint8Array(64),a=[v(),v(),v(),v()],f=[v(),v(),v(),v()];if(n<64)return-1;if(function(r,t){var n=v(),e=v(),o=v(),i=v(),h=v(),a=v(),f=v();if(Y(r[2],u),N(r[1],t),I(o,r[1]),F(i,o,c),C(o,o,r[2]),O(i,r[2],i),I(h,i),I(a,h),F(f,a,h),F(n,f,o),F(n,n,i),G(n,n),F(n,n,o),F(n,n,i),F(n,n,i),F(r[0],n,i),I(e,r[0]),F(e,e,i),R(e,o)&&F(r[0],r[0],l),I(e,r[0]),F(e,e,i),R(e,o))return 1;P(r[0])===t[31]>>7&&C(r[0],s,r[0]),F(r[3],r[0],r[1])}(f,e))return-1;for(o=0;o<n;o++)r[o]=t[o];for(o=0;o<32;o++)r[o+32]=e[o];if(W(h,r,n),ar(h),nr(a,f,h),er(f,t.subarray(32)),$(a,f),tr(i,a),n-=64,g(t,0,i,0)){for(o=0;o<n;o++)r[o]=0;return-1}for(o=0;o<n;o++)r[o]=t[o+64];return n}function ur(r,t){if(32!==r.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function cr(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function yr(r){for(var t=0;t<r.length;t++)r[t]=0}i.lowlevel={crypto_core_hsalsa20:_,crypto_stream_xor:M,crypto_stream:x,crypto_stream_salsa20_xor:d,crypto_stream_salsa20:E,crypto_onetimeauth:B,crypto_onetimeauth_verify:S,crypto_verify_16:b,crypto_verify_32:g,crypto_secretbox:k,crypto_secretbox_open:K,crypto_scalarmult:q,crypto_scalarmult_base:D,crypto_box_beforenm:X,crypto_box_afternm:j,crypto_box:function(r,t,n,e,o,i){var h=new Uint8Array(32);return X(h,o,i),j(r,t,n,e,h)},crypto_box_open:function(r,t,n,e,o,i){var h=new Uint8Array(32);return X(h,o,i),H(r,t,n,e,h)},crypto_box_keypair:V,crypto_hash:W,crypto_sign:fr,crypto_sign_keypair:or,crypto_sign_open:sr,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:v,D:c,L:ir,pack25519:z,unpack25519:N,M:F,A:O,S:I,Z:C,pow2523:G,add:$,set25519:Y,modL:hr,scalarmult:nr,scalarbase:er},i.randomBytes=function(r){var t=new Uint8Array(r);return h(t,r),t},i.secretbox=function(r,t,n){cr(r,t,n),ur(n,t);for(var e=new Uint8Array(32+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+32]=r[i];return k(o,e,e.length,t,n),o.subarray(16)},i.secretbox.open=function(r,t,n){cr(r,t,n),ur(n,t);for(var e=new Uint8Array(16+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+16]=r[i];return e.length<32||0!==K(o,e,e.length,t,n)?null:o.subarray(32)},i.secretbox.keyLength=32,i.secretbox.nonceLength=24,i.secretbox.overheadLength=16,i.scalarMult=function(r,t){if(cr(r,t),32!==r.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var n=new Uint8Array(32);return q(n,r,t),n},i.scalarMult.base=function(r){if(cr(r),32!==r.length)throw new Error("bad n size");var t=new Uint8Array(32);return D(t,r),t},i.scalarMult.scalarLength=32,i.scalarMult.groupElementLength=32,i.box=function(r,t,n,e){var o=i.box.before(n,e);return i.secretbox(r,t,o)},i.box.before=function(r,t){cr(r,t),function(r,t){if(32!==r.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(r,t);var n=new Uint8Array(32);return X(n,r,t),n},i.box.after=i.secretbox,i.box.open=function(r,t,n,e){var o=i.box.before(n,e);return i.secretbox.open(r,t,o)},i.box.open.after=i.secretbox.open,i.box.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(32);return V(r,t),{publicKey:r,secretKey:t}},i.box.keyPair.fromSecretKey=function(r){if(cr(r),32!==r.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return D(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},i.box.publicKeyLength=32,i.box.secretKeyLength=32,i.box.sharedKeyLength=32,i.box.nonceLength=24,i.box.overheadLength=i.secretbox.overheadLength,i.sign=function(r,t){if(cr(r,t),64!==t.length)throw new Error("bad secret key size");var n=new Uint8Array(64+r.length);return fr(n,r,r.length,t),n},i.sign.open=function(r,t){if(cr(r,t),32!==t.length)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=sr(n,r,r.length,t);if(e<0)return null;for(var o=new Uint8Array(e),i=0;i<o.length;i++)o[i]=n[i];return o},i.sign.detached=function(r,t){for(var n=i.sign(r,t),e=new Uint8Array(64),o=0;o<e.length;o++)e[o]=n[o];return e},i.sign.detached.verify=function(r,t,n){if(cr(r,t,n),64!==t.length)throw new Error("bad signature size");if(32!==n.length)throw new Error("bad public key size");var e,o=new Uint8Array(64+r.length),i=new Uint8Array(64+r.length);for(e=0;e<64;e++)o[e]=t[e];for(e=0;e<r.length;e++)o[e+64]=r[e];return 0<=sr(i,o,o.length,n)},i.sign.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(64);return or(r,t),{publicKey:r,secretKey:t}},i.sign.keyPair.fromSecretKey=function(r){if(cr(r),64!==r.length)throw new Error("bad secret key size");for(var t=new Uint8Array(32),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},i.sign.keyPair.fromSeed=function(r){if(cr(r),32!==r.length)throw new Error("bad seed size");for(var t=new Uint8Array(32),n=new Uint8Array(64),e=0;e<32;e++)n[e]=r[e];return or(t,n,!0),{publicKey:t,secretKey:n}},i.sign.publicKeyLength=32,i.sign.secretKeyLength=64,i.sign.seedLength=32,i.sign.signatureLength=64,i.hash=function(r){cr(r);var t=new Uint8Array(64);return W(t,r,r.length),t},i.hash.hashLength=64,i.verify=function(r,t){return cr(r,t),0!==r.length&&0!==t.length&&(r.length===t.length&&0===w(r,0,t,0,r.length))},i.setPRNG=function(r){h=r},function(){var o="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(o&&o.getRandomValues){i.setPRNG(function(r,t){var n,e=new Uint8Array(t);for(n=0;n<t;n+=65536)o.getRandomValues(e.subarray(n,n+Math.min(t-n,65536)));for(n=0;n<t;n++)r[n]=e[n];yr(e)})}else"undefined"!=typeof require&&(o=require("crypto"))&&o.randomBytes&&i.setPRNG(function(r,t){var n,e=o.randomBytes(t);for(n=0;n<t;n++)r[n]=e[n];yr(e)})}()}("undefined"!=typeof module&&module.exports?module.exports:self.nacl=self.nacl||{});
    return module.exports;
  })();
  function b64bytes(t) {
    const bin = atob(String(t).replace(/\s+/g, ""));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function utf8bytes(str) {
    const bin = unescape(encodeURIComponent(str));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function verGt(a, b) {
    const x = String(a).split("."), y = String(b).split(".");
    for (let i = 0; i < 4; i++) {
      const p = parseInt(x[i] || "0", 10) || 0, q = parseInt(y[i] || "0", 10) || 0;
      if (p !== q) return p > q;
    }
    return false;
  }
  function otaStored() {
    try {
      return JSON.parse(localStorage.getItem("zp.ota") || "null");
    } catch (e) {
      return null;
    }
  }
  var otaBusy = false;
  var otaPromptOpen = false;
  var otaManual = false;
  var otaAsked = {};
  function otaDownload(upd, onProgress, signal) {
    return __async(this, null, function* () {
      const proxy = proxyBase();
      const u = upd.url + (upd.url.indexOf("?") < 0 ? "?" : "&") + "t=" + Date.now();
      const target = proxy ? proxy + "/proxy?url=" + encodeURIComponent(u) : u;
      const res = yield fetch(target, { signal });
      if (!res.ok) throw new Error("HTTP " + res.status);
      let bytes;
      if (res.body && res.body.getReader && typeof TextDecoder !== "undefined") {
        const total = Number(res.headers.get("content-length")) || Number(upd.size) || 0;
        const rd = res.body.getReader();
        const parts = [];
        let got = 0;
        for (; ; ) {
          const r = yield rd.read();
          if (r.done) break;
          parts.push(r.value);
          got += r.value.length;
          onProgress(got, total);
        }
        bytes = new Uint8Array(got);
        let o = 0;
        parts.forEach((x) => {
          bytes.set(x, o);
          o += x.length;
        });
      } else {
        bytes = new Uint8Array(yield res.arrayBuffer());
        onProgress(bytes.length, bytes.length);
      }
      if (!NACL.sign.detached.verify(bytes, b64bytes(upd.sig), b64bytes(OTA_PUB))) throw new Error("bad signature");
      const code = new TextDecoder("utf-8").decode(bytes);
      const m = code.match(/var VERSION = "([^"]+)"/);
      if (!m || m[1] !== upd.version) throw new Error("wrong version");
      return code;
    });
  }
  function otaPrompt(upd, ready) {
    if (otaPromptOpen) return;
    const t0 = top();
    if (!t0 || /play/i.test(t0.name || "")) {
      setTimeout(() => otaPrompt(upd, ready), 45e3);
      return;
    }
    otaPromptOpen = true;
    const el3 = h("div", "screen upd");
    const card = h("div", "upd-card", el3);
    const title = h("div", "upd-title", card);
    const body = h("div", "upd-body", card);
    const notes = h("div", "upd-notes", card);
    const barWrap = h("div", "upd-bar", card);
    const barFill = h("i", "", barWrap);
    const pct = h("div", "upd-pct", card);
    const btns = h("div", "upd-btns", card);
    const bYes = h("div", "upd-btn", btns);
    const bNo = h("div", "upd-btn", btns);
    let sel = 0;
    let state = ready ? "ready" : "ask";
    let ctl = null;
    function paint() {
      const dl = state === "load";
      if (state === "ask") {
        title.textContent = "Update available";
        body.textContent = "Zen Pro " + upd.version + " is ready to download (you have " + VERSION + ").";
        notes.textContent = upd.notes ? String(upd.notes) : "";
        bYes.textContent = "Update now";
        bNo.textContent = "Later";
      } else if (state === "load") {
        title.textContent = "Downloading update\u2026";
        bYes.textContent = "";
        bNo.textContent = "Cancel";
      } else if (state === "ready") {
        title.textContent = "Update ready";
        body.textContent = "Version " + upd.version + " has been downloaded. Restart Zen Pro to use it.";
        notes.textContent = upd.notes ? String(upd.notes) : "";
        bYes.textContent = "Restart now";
        bNo.textContent = "Later";
        barWrap.style.display = "none";
        pct.textContent = "";
      } else {
        title.textContent = "Update failed";
        body.textContent = "The update could not be downloaded or verified. Your current version keeps working.";
        notes.textContent = "";
        bYes.textContent = "Try again";
        bNo.textContent = "Close";
        barWrap.style.display = "none";
        pct.textContent = "";
      }
      barWrap.style.display = dl ? "block" : "none";
      bYes.style.display = bYes.textContent ? "" : "none";
      if (dl) sel = 1;
      toggleClass(bYes, "focus", sel === 0 && bYes.textContent !== "");
      toggleClass(bNo, "focus", sel === 1 || bYes.textContent === "");
    }
    function close(later) {
      if (later) set("otaDeclined", upd.version);
      otaPromptOpen = false;
      if (top() === scr) back();
    }
    function start() {
      state = "load";
      body.textContent = "Zen Pro " + upd.version;
      notes.textContent = "";
      barFill.style.width = "0%";
      pct.textContent = "0%";
      paint();
      otaBusy = true;
      ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
      otaDownload(upd, (got, total) => {
        if (total > 0) {
          const v = Math.min(99, Math.floor(got * 100 / total));
          barFill.style.width = v + "%";
          pct.textContent = v + "%  \xB7  " + (got / 1048576).toFixed(1) + " / " + (total / 1048576).toFixed(1) + " MB";
        } else {
          barFill.style.width = "60%";
          pct.textContent = (got / 1048576).toFixed(1) + " MB";
        }
      }, ctl ? ctl.signal : void 0).then((code) => {
        localStorage.setItem("zp.ota", JSON.stringify({ version: upd.version, native: NATIVE_VERSION, tries: 0, code }));
        set("otaReady", upd.version);
        set("otaDeclined", void 0);
        otaBusy = false;
        barFill.style.width = "100%";
        state = "ready";
        sel = 0;
        paint();
      }, () => {
        otaBusy = false;
        if (state !== "load") return;
        state = "fail";
        sel = 0;
        paint();
      });
    }
    const scr = {
      el: el3,
      name: "update",
      onKey(action) {
        if (action === "left" || action === "right") {
          if (state !== "load" && bYes.textContent) {
            sel = action === "left" ? 0 : 1;
            paint();
          }
          return true;
        }
        if (action === "enter") {
          if (state === "load" || sel === 1) {
            if (state === "load") {
              state = "fail";
              try {
                if (ctl) ctl.abort();
              } catch (e) {
              }
              otaBusy = false;
              close(false);
            } else close(state === "ask");
          } else if (state === "ask" || state === "fail") start();
          else if (state === "ready") location.reload();
          return true;
        }
        if (action === "back") {
          if (state === "load") {
            state = "fail";
            try {
              if (ctl) ctl.abort();
            } catch (e) {
            }
            otaBusy = false;
          }
          close(state === "ask");
          return true;
        }
        return true;
      },
      destroy() {
        otaPromptOpen = false;
      }
    };
    paint();
    push(scr);
  }
  function otaCheck(upd) {
    return __async(this, null, function* () {
      if (!upd || !upd.version || !upd.url || !upd.sig || otaBusy || otaPromptOpen) return;
      if (!verGt(upd.version, VERSION)) return;
      const cur = otaStored();
      if (cur && cur.native === NATIVE_VERSION && cur.version === upd.version) {
        if (!otaAsked["r" + upd.version]) {
          otaAsked["r" + upd.version] = 1;
          otaPrompt(upd, true);
        }
        return;
      }
      if (cur && cur.native === NATIVE_VERSION && !verGt(upd.version, cur.version)) return;
      set("otaPending", { version: upd.version, url: upd.url, sig: upd.sig, notes: upd.notes || "", size: upd.size || 0 });
      if (!otaManual && get("otaDeclined") === upd.version) return;
      if (!otaManual && otaAsked[upd.version]) return;
      otaAsked[upd.version] = 1;
      otaPrompt(upd, false);
    });
  }
  // The new code started fine: forget the failed-start counter.
  function otaOk() {
    const o = otaStored();
    if (o && o.tries) {
      o.tries = 0;
      try {
        localStorage.setItem("zp.ota", JSON.stringify(o));
      } catch (e) {
      }
    }
  }
  function apkNotice(upd) {
    const a = upd && upd.apk;
    if (!a || !a.version || !verGt(a.version, NATIVE_VERSION)) {
      set("apkUpdate", void 0);
      return;
    }
    const seen = get("apkUpdate");
    set("apkUpdate", { version: String(a.version), url: String(a.url || ""), notes: String(a.notes || "") });
    if (!seen || seen.version !== String(a.version)) setTimeout(() => toast("New version " + a.version + " is available. See Settings > Update.", 9e3), 3e3);
  }
  function updateItems() {
    const pend = get("otaPending");
    const rows = [];
    if (pend && verGt(pend.version, VERSION)) {
      rows.push({ label: "App update", value: "Version " + pend.version + " available", action: "Install", run: () => {
        otaManual = true;
        otaPrompt(pend, false);
        otaManual = false;
      } });
    }
    rows.push({ label: "Check for updates", value: "Zen Pro " + VERSION, action: "Check", run: () => {
      toast("Checking\u2026");
      otaManual = true;
      policyRefresh().then(() => {
        if (!otaPromptOpen) toast("You have the latest version");
        otaManual = false;
      }, () => {
        otaManual = false;
        toast("Can't reach the update server");
      });
    } });
    const u = get("apkUpdate");
    if (!u) return rows;
    return rows.concat([{ label: "New app file (APK)", value: u.version + (u.url ? "  \xB7  " + u.url : ""), run: () => toast((u.notes ? u.notes + "  " : "") + (u.url || "Ask your provider for the new version."), 12e3) }]);
  }

  // PIN: short code derived from the private device key. The provider types it together with the Device ID,
  // which proves they are standing next to the real device.
  function actPin() {
    return sha256hex("pin" + deviceKey()).slice(0, 6).toUpperCase();
  }
  function actAuto(rawServer) {
    return __async(this, null, function* () {
      const act0 = get("act");
      const server = actNormServer(rawServer || get("actServer") || ACTIVATION_URL || act0 && act0.server);
      if (!server) throw new Error("Type your provider's address first.");
      const p = actParams("");
      delete p.code;
      p.pin = actPin();
      const res = yield actCall(server, "/api/auto", p);
      if (res.ok) {
        const act = { server, code: "", auto: true };
        set("actServer", server);
        actApply(act, res, true);
        return { name: act.brand };
      }
      if (res.error === "not_registered") return { pending: true };
      throw new Error(ACT_MSG[res.error] || res.message || "Activation failed.");
    });
  }
  var autoTimer = 0;
  function actAutoBoot() {
    const server = get("actServer") || ACTIVATION_URL;
    if (!server || autoTimer) return;
    const tick = () => {
      if (session.server) {
        clearInterval(autoTimer);
        autoTimer = 0;
        return;
      }
      actAuto(server).then((r) => {
        if (r && r.name) {
          clearInterval(autoTimer);
          autoTimer = 0;
          window.dispatchEvent(new Event("zenpro:restart"));
        }
      }, () => {
      });
    };
    tick();
    autoTimer = setInterval(tick, 2e4);
  }
  function AutoForm({ onDone }) {
    const act = get("act") || {};
    return FormScreen({
      title: "Activate by Device ID",
      lead: "Device ID: <b>" + deviceId() + "</b><br>PIN: <b>" + actPin() + '</b><br><span class="form-lead-small">Give both to your provider, then press Activate.</span>',
      fields: [
        { key: "server", label: "Provider address", placeholder: "provider.com", value: act.server || get("actServer") || ACTIVATION_URL || "" }
      ],
      action: "Activate",
      actionNote: "Checks whether your provider linked this device",
      okText: (info) => "Activated: " + info.name,
      onSubmit(v) {
        return actAuto(v.server).then((r) => {
          if (r.pending) throw new Error("Not linked yet. Give your provider the Device ID and PIN shown above, then press Activate again.");
          return r;
        });
      },
      onDone
    });
  }
  function ActivationForm({ onDone }) {
    const act = get("act") || {};
    return FormScreen({
      title: "Activate with code",
      lead: "Device ID: <b>" + deviceId() + '</b><br><span class="form-lead-small">Your provider may ask for this ID.</span>',
      fields: [
        { key: "code", label: "Activation code", placeholder: "CODE   or   provider.com/CODE", value: "" },
        { key: "server", label: "Provider address (if not in the code)", placeholder: "provider.com", value: act.server || get("actServer") || ACTIVATION_URL || "" }
      ],
      action: "Activate",
      actionNote: "Your provider's service is set up for you",
      hint: "Type the code exactly as your provider sent it. If the code looks like <b>provider.com/ABCD-1234</b>, type all of it in the first field and leave the second one empty.",
      okText: (info) => "Activated: " + info.name,
      onSubmit(v) {
        return actActivate(v.code, v.server);
      },
      onDone
    });
  }

  // app/js/screens/login.js
  function ServerPicker({ servers: servers2, onDone }) {
    const el3 = h("div", "screen picker");
    const ambience = useAmbience();
    h("h1", "picker-title", el3).textContent = "Choose a server";
    const list = h("div", "picker-list", el3);
    const status = h("div", "login-status", el3);
    const buttons = servers2.map((s) => {
      const b = h("div", "btn btn-wide", list);
      h("span", "", b).textContent = s.name;
      h("small", "", b).textContent = s.owned ? "Your server" : "Shared by " + (s.sourceTitle || "a friend");
      return b;
    });
    let index = 0;
    const render = () => buttons.forEach((b, i) => b.classList.toggle("focus", i === index));
    render();
    return {
      el: el3,
      name: "picker",
      onShow() {
        ambience.restore();
      },
      onKey(action) {
        if (action === "up" || action === "down") {
          index = Math.max(0, Math.min(servers2.length - 1, index + (action === "down" ? 1 : -1)));
          render();
          return true;
        }
        if (action === "enter") {
          const s = servers2[index];
          setText(status, "Connecting to " + s.name + "\u2026");
          connect(s).then((uri) => {
            useServer(s, uri);
            onDone();
          }, (e) => setText(status, e.message));
          return true;
        }
        return false;
      }
    };
  }

  // app/js/screens/profiles.js
  var ROW = 112;
  function ServersScreen({ onDone }) {
    const el3 = h("div", "screen picker form");
    const ambience = useAmbience();
    const title = h("h1", "picker-title", el3);
    if (!isTizen) {
      const back2 = h("div", "back-btn", el3);
      back2.textContent = "\u2039 Back";
      back2.addEventListener("click", (e) => {
        e.stopPropagation();
        back();
      });
    }
    const view = h("div", "servers-view", el3);
    const list = h("div", "servers-list", view);
    let rows = [];
    let index = 0;
    function currentId() {
      const s = session.server && session.server.saved;
      return s ? [s.kind || "plex", s.uri, s.user || s.mac || ""].join("|") : "";
    }
    function build() {
      while (list.firstChild) list.removeChild(list.firstChild);
      const items = profiles();
      title.textContent = "Servers" + (items.length ? "  (" + items.length + ")" : "");
      rows = [];
      const add = h("div", "btn btn-wide servers-add", list);
      h("span", "", add).textContent = "+  Add a server";
      h("small", "", add).textContent = "Activation code, Xtream or MAC portal";
      rows.push({ el: add, p: null });
      const now = currentId();
      items.forEach((p) => {
        const b = h("div", "btn btn-wide", list);
        h("span", "", b).textContent = p.label;
        h("small", "", b).textContent = p.id === now ? "\u25CF  In use now" : "OK to switch   \xB7   Y to remove";
        toggleClass(b, "current", p.id === now);
        rows.push({ el: b, p });
      });
      rows.forEach((r, i) => {
        r.el.addEventListener("mouseenter", () => {
          index = i;
          render();
        });
        r.el.addEventListener("click", (e) => {
          e.stopPropagation();
          index = i;
          pick();
        });
      });
      index = Math.min(index, rows.length - 1);
      render();
    }
    function render() {
      rows.forEach((r, i) => toggleClass(r.el, "focus", i === index));
      list.style.transform = "translateY(" + -Math.max(0, index - 5) * ROW + "px)";
    }
    function pick() {
      const r = rows[index];
      if (!r) return;
      if (!r.p) {
        push(AddServer({ onDone, welcome: true }));
        return;
      }
      activateProfile(r.p);
      toast("Switched to " + r.p.label.split(" \xB7 ")[0]);
      onDone();
    }
    build();
    return {
      el: el3,
      name: "servers",
      onShow() {
        ambience.restore();
        build();
      },
      onKey(a) {
        if (a === "up") {
          index = Math.max(0, index - 1);
          render();
          return true;
        }
        if (a === "down") {
          index = Math.min(rows.length - 1, index + 1);
          render();
          return true;
        }
        if (a === "enter") {
          pick();
          return true;
        }
        if (a === "yellow") {
          const r = rows[index];
          if (r && r.p && r.p.saved && r.p.saved.managed) {
            toast("This service is managed by your provider");
            return true;
          }
          if (r && r.p) {
            forgetProfile(r.p.id);
            build();
            toast("Removed");
          }
          return true;
        }
        return false;
      }
    };
  }

  // app/js/screens/pin.js
  function PinForm({ onDone }) {
    return FormScreen({
      title: "Enter PIN",
      fields: [{ key: "pin", label: "PIN", placeholder: "4 digits", secret: true }],
      action: "Unlock",
      actionNote: "This bouquet is locked",
      okText: () => "Unlocked",
      onSubmit(v) {
        return __async(this, null, function* () {
          if (!checkPin(v.pin)) throw new Error("Wrong PIN.");
          unlockAdult();
          return { name: "ok" };
        });
      },
      onDone
    });
  }
  function SetPinForm({ onDone }) {
    return FormScreen({
      title: "Set a PIN",
      fields: [{ key: "pin", label: "New PIN", placeholder: "4 digits", secret: true }],
      action: "Save PIN",
      actionNote: "Adult bouquets will ask for it",
      hint: "Choose 4 digits. Without the PIN, adult bouquets stay locked until you close the app.",
      okText: () => "PIN saved",
      onSubmit(v) {
        return __async(this, null, function* () {
          if (!/^\d{4}$/.test(v.pin)) throw new Error("The PIN must be exactly 4 digits.");
          set("pin", v.pin);
          set("adultMode", "pin");
          lockAdult();
          return { name: "ok" };
        });
      },
      onDone
    });
  }

  // app/js/ui/theme.js
  var THEMES = [
    { id: "jade", label: "Jade", rgb: [95, 211, 176] },
    { id: "ocean", label: "Ocean", rgb: [96, 165, 250] },
    { id: "amber", label: "Amber", rgb: [251, 191, 36] },
    { id: "rose", label: "Rose", rgb: [251, 113, 133] },
    { id: "violet", label: "Violet", rgb: [167, 139, 250] }
  ];
  function currentTheme() {
    return THEMES.find((t) => t.id === get("theme", "jade")) || THEMES[0];
  }
  function applyTheme(theme) {
    const t = theme || currentTheme();
    const root3 = document.documentElement;
    root3.style.setProperty("--accent-rgb", t.rgb.join(", "));
    root3.style.setProperty("--accent", "rgb(" + t.rgb.join(", ") + ")");
  }
  function nextTheme() {
    const i = THEMES.findIndex((t2) => t2.id === currentTheme().id);
    const t = THEMES[(i + 1) % THEMES.length];
    set("theme", t.id);
    applyTheme(t);
    return t;
  }

  // app/js/screens/settings.js
  var BUFFERS = [{ s: 3, label: "Low (3 s)" }, { s: 6, label: "Normal (6 s)" }, { s: 10, label: "High (10 s)" }, { s: 15, label: "Maximum (15 s)" }];
  var ADULT2 = [{ m: "show", label: "Shown" }, { m: "hide", label: "Hidden" }, { m: "pin", label: "Locked with PIN" }];
  var FORMATS = [{ f: "ts", label: "TS first" }, { f: "m3u8", label: "HLS (m3u8) first" }];
  function cycle(list, key, current, fallback) {
    const i = list.findIndex((x) => x[key] === current);
    return list[(i + 1) % list.length][key] === void 0 ? fallback : list[(i + 1) % list.length][key];
  }
  var VPN_PKG = "io.privado.android";
  function vpnInstalled() {
    try {
      return !!(window.ZenPlayer && window.ZenPlayer.hasPackage && window.ZenPlayer.hasPackage(VPN_PKG));
    } catch (e) {
      return false;
    }
  }
  function VpnScreen() {
    const el3 = h("div", "screen settings");
    h("h1", "settings-title", el3).textContent = "VPN";
    const view = h("div", "settings-view", el3);
    const list = h("div", "settings-list", view);
    const canCheck = !!(window.ZenPlayer && window.ZenPlayer.hasPackage);
    const rows = [
      { label: "PrivadoVPN app", value: canCheck ? vpnInstalled() ? "Installed" : "Not installed on this device" : "Install it on your device or computer" },
      { label: "Step 1", value: "Open PrivadoVPN and sign in with your subscription" },
      { label: "Step 2", value: "Choose a country and press Connect" },
      { label: "Step 3", value: "Come back to Zen Pro. Channels and movies now go through the VPN" },
      { label: "Download", value: "privadovpn.com/software" },
      { label: "Why not inside Zen Pro?", value: "A VPN needs its own system permission and engine. Use the provider's app." }
    ];
    let index = 0;
    rows.forEach((it) => {
      it.el = h("div", "setting", list);
      h("span", "setting-label", it.el).textContent = it.label;
      h("span", "setting-value", it.el).textContent = it.value;
    });
    function render() {
      rows.forEach((it, i) => toggleClass(it.el, "focus", i === index));
    }
    render();
    return {
      el: el3,
      name: "vpn",
      onKey(action) {
        if (action === "up") index = Math.max(0, index - 1);
        else if (action === "down") index = Math.min(rows.length - 1, index + 1);
        else if (action === "back") {
          back();
          return true;
        } else if (action === "enter") {
          toast(rows[index].value, 6e3);
          return true;
        } else return false;
        render();
        return true;
      }
    };
  }
  function SettingsScreen() {
    const el3 = h("div", "screen settings");
    const ambience = useAmbience();
    h("h1", "settings-title", el3).textContent = "Settings";
    const view = h("div", "settings-view", el3);
    const list = h("div", "settings-list", view);
    const foot = h("div", "settings-foot", el3);
    foot.textContent = "Zen Pro " + VERSION + (DEV ? " (dev)" : "") + " \xB7 " + actFootAddr();
    let index = 0;
    let items = [];
    function build() {
      list.innerHTML = "";
      items = [
        { label: "Servers", value: (session.server ? session.server.name : "\u2014") + "  \xB7  " + (profiles().length || 0) + " saved", run: () => push(ServersScreen({ onDone: restart2 })) },
        { label: "Signed in as", value: session.user ? session.user.title : "\u2014", run: doSignOut, action: "Sign out" },
        { label: "Device ID", value: deviceId(), run: () => toast("Give this ID to your provider: " + deviceId(), 7e3) },
        { label: "Activation", value: actStatusText(), run: () => {
          if (!get("act")) {
            push(ActivationForm({ onDone: restart2 }));
            return;
          }
          toast("Checking with your provider\u2026");
          actSync(true).then((r) => {
            toast(r && r.ok ? "Up to date" : r && r.offline ? "Can't reach your provider right now" : actMsg(r && r.error));
            build();
          });
        }, action: get("act") ? "Check now" : "Activate" },
        { label: "Channel order", value: "Move channels inside a bouquet", run: () => push(ChannelOrderScreen()), action: "Open" },
        ...window.ZenPlayer && window.ZenPlayer.version ? [{ label: "Player engine", value: engineLabel(get("engine", "native")), run: () => {
          const l = engineList();
          const cur = get("engine", "native");
          const nx = l[(l.indexOf(cur) + 1) % l.length] || "native";
          set("engine", nx);
          set("nativeFails", 0);
          toast("Player: " + engineLabel(nx) + (EXT_PLAYERS[nx] ? ". The stream opens in that app; the built-in channel list is not shown." : ". Applies to the next video."), 6e3);
          build();
        }, action: "Change" }] : [],
        { label: "VPN", value: "Use PrivadoVPN with Zen Pro", run: () => push(VpnScreen()), action: "Open" },
        ...updateItems(),
        ...get("act") && get("act").support ? [{ label: "Support", value: get("act").support, run: () => toast(get("act").support, 6e3) }] : [],
        // More buffer = fewer stutters on a slow or uneven connection, at the cost of a longer start.
        { label: "Live TV buffer", value: (BUFFERS.find((b) => b.s === get("liveBuffer", 6)) || BUFFERS[1]).label, run: () => {
          set("liveBuffer", cycle(BUFFERS, "s", get("liveBuffer", 6), 6));
          build();
        } },
        { label: "Live TV stream format", value: (FORMATS.find((f) => f.f === get("liveFormat", "ts")) || FORMATS[0]).label, run: () => {
          set("liveFormat", cycle(FORMATS, "f", get("liveFormat", "ts"), "ts"));
          build();
        } },
        { label: "Start on last channel", value: get("startLast", false) ? "On" : "Off", run: () => {
          set("startLast", !get("startLast", false));
          build();
        } },
        { label: "Adult bouquets", value: (ADULT2.find((a) => a.m === adultMode()) || ADULT2[0]).label, run: cycleAdult },
        { label: "Sleep timer", value: sleepLeft() ? sleepLeft() + " min left" : "Off", run: () => {
          const m = nextSleep();
          toast(m ? "Sleep timer: " + m + " min" : "Sleep timer off");
          build();
        } },
        { label: "Accent color", value: currentTheme().label, run: () => {
          nextTheme();
          build();
        } },
        { label: "Performance overlay", value: hudEnabled() ? "On" : "Off", run: () => {
          setHud(!hudEnabled());
          build();
        } }
      ];
      items.forEach((it) => {
        it.el = h("div", "setting", list);
        h("span", "setting-label", it.el).textContent = it.label;
        h("span", "setting-value", it.el).textContent = it.value + (it.action ? "  \xB7  " + it.action : "");
      });
      render();
    }
    function render() {
      items.forEach((it, i) => toggleClass(it.el, "focus", i === index));
      const rowH = 84;
      const visible = Math.floor(780 / rowH);
      list.style.transform = "translateY(" + -Math.max(0, index - (visible - 3)) * rowH + "px)";
    }
    function cycleAdult() {
      const next = cycle(ADULT2, "m", adultMode(), "show");
      if (next === "pin" && !get("pin")) {
        push(SetPinForm({ onDone: () => back() }));
        return;
      }
      set("adultMode", next);
      lockAdult();
      build();
    }
    function switchServer() {
      return __async(this, null, function* () {
        if (session.token === "manual") {
          connectByAddress();
          return;
        }
        try {
          const servers2 = yield getServers(session.token);
          if (servers2.length === 1) {
            const uri = yield connect(servers2[0]);
            useServer(servers2[0], uri);
            restart2();
            return;
          }
          push(ServerPicker({ servers: servers2, onDone: restart2 }));
        } catch (e) {
          error("server list failed", e);
        }
      });
    }
    function connectByAddress() {
      push(AddServer({ onDone: restart2, welcome: true }));
    }
    function doSignOut() {
      signOut();
      restart2();
    }
    function restart2() {
      window.dispatchEvent(new Event("zenpro:restart"));
    }
    build();
    return {
      el: el3,
      name: "settings",
      onShow() {
        ambience.restore();
        build();
      },
      onKey(action) {
        if (action === "up") {
          index = Math.max(0, index - 1);
          render();
          return true;
        }
        if (action === "down") {
          index = Math.min(items.length - 1, index + 1);
          render();
          return true;
        }
        if (action === "enter") {
          items[index].run();
          return true;
        }
        return false;
      }
    };
  }

  // app/js/nav.js
  function openItem(item) {
    if (item.live) {
      playItem(item);
      return;
    }
    if (item.type === "category") {
      const go = () => openLibrary({ key: item.sectionKey, type: item.sectionType, title: item.sectionTitle + "  \u203A  " + item.title, noun: item.noun });
      if (item.locked && adultHidden()) {
        push(PinForm({ onDone: () => {
          back();
          go();
        } }));
        return;
      }
      go();
      return;
    }
    if (item.type === "clip") {
      playItem(item);
      return;
    }
    push(DetailScreen(item));
  }
  function playItem(item, opts) {
    if (item.type === "category") {
      openItem(item);
      return;
    }
    if (item.type === "show" || item.type === "season") {
      push(DetailScreen(item, { autoplay: true }));
      return;
    }
    push(PlayerScreen(item, opts || {}));
  }
  function openLibrary(section) {
    if (section && section.key === "live") {
      push(LiveBrowser(section));
      return;
    }
    push(LibraryScreen(section));
  }
  function openSearch() {
    push(SearchScreen());
  }
  function openServers() {
    push(ServersScreen({ onDone: () => window.dispatchEvent(new Event("zenpro:restart")) }));
  }
  function openSettings() {
    push(SettingsScreen());
  }

  // app/js/screens/home.js
  var ROWS_TOP = 600;
  var NAV_PAD = 80;
  function slimHub(hub2) {
    const keep = [
      "ratingKey",
      "key",
      "type",
      "title",
      "grandparentTitle",
      "parentTitle",
      "year",
      "thumb",
      "art",
      "grandparentThumb",
      "grandparentArt",
      "parentThumb",
      "index",
      "parentIndex",
      "duration",
      "viewOffset",
      "viewCount",
      "leafCount",
      "viewedLeafCount",
      "childCount",
      "contentRating",
      "audienceRating",
      "summary",
      "originallyAvailableAt",
      "UltraBlurColors",
      "grandparentRatingKey",
      "parentRatingKey",
      "Image"
    ];
    return {
      hubIdentifier: hub2.hubIdentifier,
      title: hub2.title,
      type: hub2.type,
      Metadata: hub2.Metadata.map((m) => {
        const o = {};
        for (const k of keep) if (m[k] !== void 0) o[k] = m[k];
        return o;
      })
    };
  }
  function heroArtPath(item) {
    if (item.type === "episode" || item.type === "season") return item.grandparentArt || item.art;
    return item.art;
  }
  function clearLogo(item) {
    const img = (item.Image || []).find((i) => i.type === "clearLogo");
    return img ? img.url : "";
  }

  var MH_ICONS = {
    live: '<svg viewBox="0 0 64 64"><rect x="6" y="14" width="52" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="4"/><path d="M22 56h20M32 48v8" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="31" r="5" fill="currentColor"/></svg>',
    vod: '<svg viewBox="0 0 64 64"><rect x="6" y="20" width="52" height="34" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><path d="M6 20l10-12h12L18 20M28 20l10-12h12L40 20" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M27 29l12 8-12 8z" fill="currentColor"/></svg>',
    series: '<svg viewBox="0 0 64 64"><rect x="10" y="22" width="44" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><path d="M18 14h28M24 7h16" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M28 30l10 7-10 7z" fill="currentColor"/></svg>',
    settings: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="4"/><path d="M32 6l4 7 8-2 2 8 8 3-3 8 5 6-6 5 1 8-8 1-5 7-7-4-7 4-5-7-8-1 1-8-6-5 5-6-3-8 8-3 2-8 8 2z" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linejoin="round"/></svg>'
  };
  // Home: three big choices in the middle (Live TV / Movies / Series) and Settings; Search and Servers are small buttons on top.
  function HomeScreen() {
    const el3 = h("div", "screen home menu-home");
    const ambience = useAmbience();
    const top2 = h("header", "topbar", el3);
    const brand = h("div", "brand", top2);
    h("img", "brand-mark", brand).src = "img/mascot.png";
    const brandText = h("div", "brand-text", brand);
    h("img", "brand-wordmark", brandText).src = "img/wordmark.png";
    h("div", "brand-by", brandText).textContent = "Live \\xB7 VOD \\xB7 Series";
    const tools = h("div", "mh-tools", top2);
    const toolItems = [
      { id: "search", icon: search, label: "Search", run: openSearch },
      { id: "servers", icon: servers, label: "Servers", run: openServers }
    ];
    toolItems.forEach((t, ti) => {
      t.el = h("div", "mh-tool", tools);
      t.el.innerHTML = t.icon;
      t.el.addEventListener("mouseenter", () => {
        zone = "tools";
        toolIdx = ti;
        render();
      });
    });
    const wrap = h("div", "mh-wrap", el3);
    let cards = [];
    let zone = "cards";
    let idx = 0;
    let toolIdx = 0;
    function render() {
      cards.forEach((c, i) => toggleClass(c.el, "focus", zone === "cards" && i === idx));
      toolItems.forEach((t, i) => toggleClass(t.el, "focus", zone === "tools" && i === toolIdx));
    }
    function build(sections) {
      wrap.innerHTML = "";
      cards = [];
      const names = { live: "Live TV", vod: "Movies", series: "Series" };
      sections.forEach((sec) => {
        const icon = MH_ICONS[sec.key] || MH_ICONS.vod;
        cards.push({ icon, title: names[sec.key] || sec.title, run: () => openLibrary(sec), count: sec.key });
      });
      cards.push({ icon: MH_ICONS.settings, title: "Settings", run: openSettings, small: true });
      cards.forEach((c, i) => {
        c.el = h("div", "mh-card" + (c.small ? " small" : ""), wrap);
        const ic = h("div", "mh-ic", c.el);
        ic.innerHTML = c.icon;
        h("div", "mh-t", c.el).textContent = c.title;
        c.n = h("div", "mh-n", c.el);
        c.el.addEventListener("mouseenter", () => {
          idx = i;
          zone = "cards";
          render();
        });
      });
      idx = Math.min(idx, cards.length - 1);
      render();
      const server = session.server;
      cards.forEach((c) => {
        if (!c.count || !server) return;
        server.items(c.count + ":all", 0, 1).then((r) => {
          const noun = c.count === "live" ? "channels" : c.count === "series" ? "series" : "movies";
          if (r && r.total) setText(c.n, r.total + " " + noun);
        }, () => {
        });
      });
    }
    const server0 = session.server;
    if (server0) server0.sections().then(build, () => build([]));
    else build([]);
    return {
      el: el3,
      name: "home",
      onShow() {
        ambience.restore();
        render();
      },
      onKey(action) {
        if (zone === "tools") {
          if (action === "left") toolIdx = Math.max(0, toolIdx - 1);
          else if (action === "right") toolIdx = Math.min(toolItems.length - 1, toolIdx + 1);
          else if (action === "down") zone = "cards";
          else if (action === "enter") {
            toolItems[toolIdx].run();
            return true;
          } else if (action === "back") return false;
          render();
          return true;
        }
        if (action === "left") idx = Math.max(0, idx - 1);
        else if (action === "right") idx = Math.min(cards.length - 1, idx + 1);
        else if (action === "up") zone = "tools";
        else if (action === "enter") {
          if (cards[idx]) cards[idx].run();
          return true;
        } else return false;
        render();
        return true;
      }
    };
  }


  // ===================================================================================
  // Live TV browser: categories on the left, channels in the middle, a preview window and details on the right.
  // OK on a channel opens the full-screen player with its info bar and channel list (unchanged).
  // ===================================================================================
  function LiveBrowser(section) {
    const el3 = h("div", "screen lb");
    const server = session.server;
    h("div", "lb-title", el3).textContent = "Live TV";
    const sub = h("div", "lb-sub", el3);
    const catsPanel = h("div", "lb-panel lb-cats", el3);
    const catsBox = h("div", "lb-rows", catsPanel);
    const chsPanel = h("div", "lb-panel lb-chs", el3);
    const chsBox = h("div", "lb-rows", chsPanel);
    const chsPos = h("div", "lb-pos", chsPanel);
    const side = h("div", "lb-side", el3);
    const pvBox = h("div", "lb-pv", side);
    const pvSpin = h("div", "spinner lb-spin", pvBox);
    const info = h("div", "lb-info", side);
    const infoLogo = h("img", "lb-logo", info);
    const infoName = h("div", "lb-name", info);
    const infoCat = h("div", "lb-cat", info);
    const infoRes = h("div", "lb-res", info);
    h("div", "lb-hint", info).textContent = "\u25C4 \u25BA  Categories / Channels   \u00B7   OK  Full screen   \u00B7   Back";
    let cats = [];
    let chans = [];
    let ci = 0;
    let hi = 0;
    let zone = "cats";
    let alive = true;
    let loadId = 0;
    let loadTimer = 0;
    let pv = null;
    let pvTimer = 0;
    let pvId = 0;
    let shown = false;
    const CAT_ROWS = 9;
    const CH_ROWS = 10;
    const canPreview = () => false;
    function fitImg(img, item) {
      img.onerror = () => {
        img.onerror = null;
        img.src = item.thumb || "";
      };
      img.src = item.logo || item.thumb || "";
    }
    const catPool = [];
    const chPool = [];
    function paintCats() {
      const start2 = Math.max(0, Math.min(ci - 4, cats.length - CAT_ROWS));
      for (let k = 0; k < CAT_ROWS; k++) {
        const i = start2 + k;
        let r = catPool[k];
        if (i >= cats.length) {
          if (r) r.row.style.display = "none";
          continue;
        }
        if (!r) {
          const row = h("div", "lb-row lb-crow", catsBox);
          const t = h("div", "lb-ct", row);
          r = { row, cn: h("div", "lb-cn", t), cc: h("div", "lb-cc", t), i: -1, c: null };
          row.addEventListener("mouseenter", () => {
            const j = r.i;
            if (ci === j && zone === "cats") return;
            ci = j;
            zone = "cats";
            stopPreview();
            selectCat();
          });
          catPool[k] = r;
        }
        const c = cats[i];
        if (r.row.style.display) r.row.style.display = "";
        if (r.c !== c || r.i !== i) {
          r.c = c;
          r.i = i;
          r.cn.textContent = c.title;
          r.cc.textContent = c.locked ? "Locked" : c.count != null ? "Total: " + c.count : "";
        }
        const cls2 = "lb-row lb-crow" + (i === ci ? zone === "cats" ? " focus" : " sel" : "");
        if (r.row.className !== cls2) r.row.className = cls2;
      }
      setText(sub, cats[ci] ? cats[ci].title : "");
    }
    function paintChans() {
      if (!chans.length) {
        chsBox.innerHTML = "";
        chPool.length = 0;
        h("div", "lb-empty", chsBox).textContent = loadId ? "Loading\u2026" : "No channels";
        setText(chsPos, "");
        return;
      }
      if (!chPool.length) chsBox.innerHTML = "";
      const start2 = Math.max(0, Math.min(hi - 4, chans.length - CH_ROWS));
      for (let k = 0; k < CH_ROWS; k++) {
        const i = start2 + k;
        let r = chPool[k];
        if (i >= chans.length) {
          if (r) r.row.style.display = "none";
          continue;
        }
        if (!r) {
          const row = h("div", "lb-row lb-hrow", chsBox);
          r = { row, img: h("img", "lb-rlogo", row), nm: h("div", "lb-rname", row), nu: h("div", "lb-rnum", row), i: -1, c: null };
          row.addEventListener("mouseenter", () => {
            const j = r.i;
            if (hi === j && zone === "chs") return;
            hi = j;
            zone = "chs";
            paintChans();
            paintInfo();
            paintCats();
            schedulePreview();
          });
          chPool[k] = r;
        }
        const c = chans[i];
        if (r.row.style.display) r.row.style.display = "";
        if (r.c !== c || r.i !== i) {
          r.c = c;
          r.i = i;
          fitImg(r.img, c);
          r.nm.textContent = c.title;
          r.nu.textContent = String(i + 1);
        }
        const cls2 = "lb-row lb-hrow" + (i === hi ? zone === "chs" ? " focus" : " sel" : "");
        if (r.row.className !== cls2) r.row.className = cls2;
      }
      setText(chsPos, hi + 1 + " / " + chans.length);
    }
    function paintInfo() {
      const c = chans[hi];
      if (!c) {
        setText(infoName, "");
        setText(infoCat, "");
        setText(infoRes, "");
        infoLogo.removeAttribute("src");
        return;
      }
      fitImg(infoLogo, c);
      setText(infoName, c.title);
      setText(infoCat, c.cat || (cats[ci] ? cats[ci].title : ""));
      setText(infoRes, "");
    }
    function paintAll() {
      paintCats();
      paintChans();
      paintInfo();
    }
    function selectCat() {
      clearTimeout(loadTimer);
      const my = ++loadId;
      chans = [];
      hi = 0;
      paintAll();
      loadTimer = setTimeout(() => {
        const c = cats[ci];
        if (!c) return;
        if (c.locked && adultHidden()) {
          loadId = 0;
          paintAll();
          return;
        }
        server.items(c.sectionKey, 0, 1e5).then((r) => {
          if (!alive || my !== loadId) return;
          loadId = 0;
          chans = (r.items || []).filter((x) => x.type !== "category");
          hi = Math.min(hi, Math.max(0, chans.length - 1));
          paintAll();
          schedulePreview();
        }, () => {
          if (my === loadId) {
            loadId = 0;
            paintAll();
          }
        });
      }, 220);
    }
    // ---- preview ----
    function pvRect() {
      const r = pvBox.getBoundingClientRect();
      const W = window.innerWidth || 1920, H = window.innerHeight || 1080;
      if (!(r.width > 0 && r.height > 0)) return [1370 / 1920, 130 / 1080, 1870 / 1920, 411 / 1080];
      return [r.left / W, r.top / H, r.right / W, r.bottom / H];
    }
    function stopPreview() {
      clearTimeout(pvTimer);
      pvId++;
      toggleClass(pvSpin, "on", false);
      if (pv) {
        try {
          pv.destroy();
        } catch (e) {
        }
        pv = null;
      }
    }
    function schedulePreview() {
      clearTimeout(pvTimer);
      if (!canPreview() || !shown) return;
      const c = chans[hi];
      if (!c || zone === "cats") {
        if (zone === "cats") stopPreview();
        return;
      }
      pvTimer = setTimeout(() => runPreview(c), 650);
    }
    function runPreview(c) {
      const my = ++pvId;
      if (pv) {
        try {
          pv.destroy();
        } catch (e) {
        }
        pv = null;
      }
      toggleClass(pvSpin, "on", true);
      server.metadata(c.ratingKey).then((full) => {
        if (!alive || !shown || my !== pvId) return;
        const part = full && full.Media && full.Media[0] && full.Media[0].Part && full.Media[0].Part[0];
        if (!part) throw new Error("no media");
        const p = createPlayer(pvBox, {
          onTime() {
          },
          onBuffering(on) {
            if (my === pvId) toggleClass(pvSpin, "on", on);
          },
          onEnd() {
          },
          onError() {
            if (my === pvId) toggleClass(pvSpin, "on", false);
          }
        });
        pv = p;
        p.open(server.url(part.key), { format: part.format, rect: pvRect() });
        return p.prepare().then(() => {
          if (my !== pvId) return;
          p.play();
          toggleClass(pvSpin, "on", false);
          setTimeout(() => {
            if (my === pvId && p.info) {
              const i = p.info();
              if (i && i.width && i.height) setText(infoRes, i.width + "\u00D7" + i.height);
              else if (i && i.w && i.h) setText(infoRes, i.w + "\u00D7" + i.h);
            }
          }, 2e3);
        });
      }).catch(() => {
        if (my === pvId) toggleClass(pvSpin, "on", false);
      });
    }
    function openFull() {
      const c = chans[hi];
      if (!c) return;
      stopPreview();
      playItem(c);
    }
    server.items("live", 0, 1e5).then((r) => {
      if (!alive) return;
      cats = (r.items || []).filter((x) => x.type === "category");
      if (!cats.length) cats = [{ title: "All", sectionKey: "live", type: "category" }];
      ci = 0;
      selectCat();
    }, () => {
      paintAll();
    });
    return {
      el: el3,
      name: "live-browser",
      onShow() {
        shown = true;
        document.documentElement.classList.add("lb-on");
        paintAll();
        schedulePreview();
      },
      onHide() {
        shown = false;
        document.documentElement.classList.remove("lb-on");
        stopPreview();
      },
      destroy() {
        alive = false;
        shown = false;
        clearTimeout(loadTimer);
        document.documentElement.classList.remove("lb-on");
        stopPreview();
      },
      onKey(action) {
        if (action === "up" || action === "down") {
          const d = action === "up" ? -1 : 1;
          if (zone === "cats") {
            const n = Math.max(0, Math.min(cats.length - 1, ci + d));
            if (n !== ci) {
              ci = n;
              stopPreview();
              selectCat();
            }
          } else if (chans.length) {
            hi = Math.max(0, Math.min(chans.length - 1, hi + d));
            paintChans();
            paintInfo();
            schedulePreview();
          }
          return true;
        }
        if (action === "right" && zone === "cats") {
          if (chans.length) {
            zone = "chs";
            paintAll();
            schedulePreview();
          }
          return true;
        }
        if (action === "left" && zone === "chs") {
          zone = "cats";
          stopPreview();
          paintAll();
          return true;
        }
        if (action === "enter") {
          if (zone === "cats") {
            if (chans.length) {
              zone = "chs";
              paintAll();
              schedulePreview();
            }
          } else openFull();
          return true;
        }
        return false;
      }
    };
  }


  // ===================================================================================
  // Channel order. Settings > Channel order: pick a bouquet, pick a channel, move it to any position. The order is
  // saved per provider account and used everywhere the bouquet's channels are listed.
  // ===================================================================================
  function chOrderKey(server) {
    const sv = server && server.saved || {};
    return "chorder." + (sv.uri || "") + "|" + (sv.user || sv.mac || "");
  }
  function applyChannelOrder(server, cat, list) {
    let store;
    try {
      store = get(chOrderKey(server), null);
    } catch (e) {
      store = null;
    }
    const o = store && store[String(cat)];
    if (!o || !o.length) return list;
    const pos = {};
    o.forEach((k, i) => {
      pos[k] = i;
    });
    const inOrder = list.filter((x) => pos[x.ratingKey] !== void 0).sort((a, b) => pos[a.ratingKey] - pos[b.ratingKey]);
    const rest = list.filter((x) => pos[x.ratingKey] === void 0);
    return inOrder.concat(rest);
  }
  function ChannelOrderScreen() {
    const el3 = h("div", "screen lb");
    const server = session.server;
    h("div", "lb-title", el3).textContent = "Channel order";
    const sub = h("div", "lb-sub", el3);
    const catsPanel = h("div", "lb-panel lb-cats", el3);
    const catsBox = h("div", "lb-rows", catsPanel);
    const chsPanel = h("div", "lb-panel lb-chs", el3);
    const chsBox = h("div", "lb-rows", chsPanel);
    const chsPos = h("div", "lb-pos", chsPanel);
    const side = h("div", "lb-side", el3);
    const help = h("div", "lb-info lb-help", side);
    let cats = [];
    let chans = [];
    let ci = 0;
    let hi = 0;
    let zone = "cats";
    let alive = true;
    let loading = false;
    let moving = false;
    let orig = null;
    let origHi = 0;
    let buf = "";
    const CAT_ROWS = 9;
    const CH_ROWS = 10;
    function catId() {
      const c = cats[ci];
      return c ? String(c.sectionKey).split(":").slice(1).join(":") : "";
    }
    function save() {
      const key = chOrderKey(server);
      const store = Object.assign({}, get(key, null) || {});
      store[catId()] = chans.map((c) => c.ratingKey);
      set(key, store);
    }
    function reset() {
      const key = chOrderKey(server);
      const store = Object.assign({}, get(key, null) || {});
      delete store[catId()];
      set(key, store);
    }
    function paintHelp() {
      help.innerHTML = "";
      const lines = moving ? ["Moving: " + (chans[hi] ? chans[hi].title : ""), "\u25B2 \u25BC   one step    \u25C4 \u25BA   ten steps", "0 - 9   type the new number" + (buf ? "  \u2192  " + buf : ""), "OK   drop here and save", "Back   cancel"] : zone === "cats" ? ["1. Choose a bouquet", "OK or \u25BA   open it"] : ["2. Choose a channel", "OK   pick it up and move it", "Yellow   reset this bouquet to the provider order", "\u25C4   back to bouquets"];
      lines.forEach((t, i) => {
        h("div", i === 0 ? "lb-name" : "lb-hint2", help).textContent = t;
      });
    }
    function paintCats() {
      catsBox.innerHTML = "";
      const start2 = Math.max(0, Math.min(ci - 4, cats.length - CAT_ROWS));
      for (let i = start2; i < Math.min(cats.length, start2 + CAT_ROWS); i++) {
        const c = cats[i];
        const row = h("div", "lb-row lb-crow" + (i === ci ? zone === "cats" ? " focus" : " sel" : ""), catsBox);
        const t = h("div", "lb-ct", row);
        h("div", "lb-cn", t).textContent = c.title;
        h("div", "lb-cc", t).textContent = c.count != null ? "Total: " + c.count : "";
        row.addEventListener("mouseenter", () => {
          if (moving || ci === i && zone === "cats") return;
          ci = i;
          zone = "cats";
          loadChans();
        });
      }
      setText(sub, cats[ci] ? cats[ci].title : "");
    }
    function paintChans() {
      chsBox.innerHTML = "";
      if (!chans.length) {
        h("div", "lb-empty", chsBox).textContent = loading ? "Loading\u2026" : "No channels";
        setText(chsPos, "");
        return;
      }
      const start2 = Math.max(0, Math.min(hi - 4, chans.length - CH_ROWS));
      for (let i = start2; i < Math.min(chans.length, start2 + CH_ROWS); i++) {
        const c = chans[i];
        const row = h("div", "lb-row lb-hrow" + (i === hi ? moving ? " moving" : zone === "chs" ? " focus" : " sel" : ""), chsBox);
        const img = h("img", "lb-rlogo", row);
        img.onerror = () => {
          img.onerror = null;
          img.src = c.thumb || "";
        };
        img.src = c.logo || c.thumb || "";
        h("div", "lb-rname", row).textContent = (i === hi && moving ? "\u2195  " : "") + c.title;
        h("div", "lb-rnum", row).textContent = String(i + 1);
        row.addEventListener("mouseenter", () => {
          if (moving || hi === i && zone === "chs") return;
          hi = i;
          zone = "chs";
          paintAll();
        });
      }
      setText(chsPos, hi + 1 + " / " + chans.length);
    }
    function paintAll() {
      paintCats();
      paintChans();
      paintHelp();
    }
    function loadChans() {
      loading = true;
      chans = [];
      hi = 0;
      moving = false;
      paintAll();
      const c = cats[ci];
      if (!c) return;
      server.items(c.sectionKey, 0, 1e5).then((r) => {
        if (!alive) return;
        loading = false;
        chans = (r.items || []).filter((x) => x.type !== "category");
        paintAll();
      }, () => {
        loading = false;
        paintAll();
      });
    }
    function startMove() {
      if (!chans.length) return;
      moving = true;
      orig = chans.slice();
      origHi = hi;
      buf = "";
    }
    function moveTo(n) {
      n = Math.max(1, Math.min(chans.length, n));
      const it = chans.splice(hi, 1)[0];
      chans.splice(n - 1, 0, it);
      hi = n - 1;
    }
    function confirmMove() {
      moving = false;
      buf = "";
      save();
      toast("Saved. \"" + (chans[hi] ? chans[hi].title : "") + "\" is now number " + (hi + 1), 3e3);
      paintAll();
    }
    function cancelMove() {
      chans = orig || chans;
      hi = origHi;
      moving = false;
      buf = "";
      paintAll();
    }
    server.items("live", 0, 1e5).then((r) => {
      if (!alive) return;
      cats = (r.items || []).filter((x) => x.type === "category" && !/:(all|fav)$/.test(String(x.sectionKey)));
      ci = 0;
      if (cats.length) loadChans();
      else paintAll();
    }, () => paintAll());
    return {
      el: el3,
      name: "channel-order",
      onShow() {
        paintAll();
      },
      destroy() {
        alive = false;
      },
      onKey(action) {
        if (moving) {
          if (action === "up" || action === "down") {
            buf = "";
            const j = hi + (action === "up" ? -1 : 1);
            if (j >= 0 && j < chans.length) {
              const t = chans[hi];
              chans[hi] = chans[j];
              chans[j] = t;
              hi = j;
            }
          } else if (action === "left" || action === "right" || action === "pageup" || action === "pagedown") {
            buf = "";
            const j = Math.max(0, Math.min(chans.length - 1, hi + (action === "left" || action === "pageup" ? -10 : 10)));
            if (j !== hi) {
              const it = chans.splice(hi, 1)[0];
              chans.splice(j, 0, it);
              hi = j;
            }
          } else if (/^d[0-9]$/.test(action)) {
            if (buf.length < 5) buf += action.charAt(1);
            const n = parseInt(buf, 10);
            if (n > 0) {
              chans = orig.slice();
              hi = origHi;
              moveTo(n);
            }
          } else if (action === "enter") {
            confirmMove();
            return true;
          } else if (action === "back") {
            cancelMove();
            return true;
          } else return true;
          paintAll();
          return true;
        }
        if (action === "up" || action === "down") {
          const d = action === "up" ? -1 : 1;
          if (zone === "cats") {
            const n = Math.max(0, Math.min(cats.length - 1, ci + d));
            if (n !== ci) {
              ci = n;
              loadChans();
            }
          } else if (chans.length) {
            hi = Math.max(0, Math.min(chans.length - 1, hi + d));
            paintAll();
          }
          return true;
        }
        if (action === "right" && zone === "cats") {
          if (chans.length) {
            zone = "chs";
            paintAll();
          }
          return true;
        }
        if (action === "left" && zone === "chs") {
          zone = "cats";
          paintAll();
          return true;
        }
        if (action === "enter") {
          if (zone === "cats") {
            if (chans.length) {
              zone = "chs";
              paintAll();
            }
          } else {
            startMove();
            paintAll();
          }
          return true;
        }
        if (action === "yellow" && zone === "chs") {
          reset();
          toast("Provider order restored for this bouquet", 3e3);
          loadChans();
          return true;
        }
        return false;
      }
    };
  }

  function HomeScreenClassic() {
    const el3 = h("div", "screen home");
    const ambience = useAmbience();
    const hero = new HeroArt(el3, "hero-art home-art");
    const top2 = h("header", "topbar", el3);
    const brand = h("div", "brand", top2);
    h("img", "brand-mark", brand).src = "img/mascot.png";
    const brandText = h("div", "brand-text", brand);
    h("img", "brand-wordmark", brandText).src = "img/wordmark.png";
    h("div", "brand-by", brandText).textContent = "Live \xB7 VOD \xB7 Series";
    const navEl = h("nav", "nav", top2);
    const navTrack = h("div", "nav-track", navEl);
    const info = h("div", "hero-info", el3);
    const heroLogo = h("img", "hero-logo", info);
    const heroTitle = h("h1", "hero-title", info);
    const heroMeta = h("div", "hero-meta", info);
    const heroSummary = h("p", "hero-summary", info);
    const rowsClip = h("div", "home-rows", el3);
    rowsClip.style.top = ROWS_TOP + "px";
    const track = h("div", "rows-track", rowsClip);
    const empty = h("div", "home-empty", el3);
    let rows = [];
    let offsets = [];
    let rowIndex = 0;
    let zone = "rows";
    let navItems = [];
    let navIndex = 0;
    let navScroll = 0;
    let loadedAt = 0;
    let heroTimer = 0;
    let artTimer = 0;
    let reportedPaint = false;
    function buildNav(sections) {
      navTrack.innerHTML = "";
      navItems = [{ label: "Home", id: "home" }].concat(sections.map((s) => ({ label: s.title, id: "section", section: s }))).concat([{ label: "Search", id: "search", icon: search }, { label: "Servers", id: "servers", icon: servers }, { label: "Settings", id: "settings", icon: gear }]);
      navIndex = Math.min(navIndex, navItems.length - 1);
      navItems.forEach((n, i) => {
        if (n.icon && !navItems[i - 1].icon) h("i", "nav-sep", navTrack);
        n.el = h("div", "nav-item" + (n.icon ? " nav-icon" : ""), navTrack);
        if (n.icon) n.el.innerHTML = n.icon;
        else h("span", "", n.el).textContent = n.label;
      });
      renderNav();
    }
    function scrollNav() {
      const room = navEl.clientWidth;
      if (!room) return;
      const max = Math.max(0, navTrack.offsetWidth - room);
      const n = navItems[navIndex];
      if (zone === "nav" && n) {
        const left = n.el.offsetLeft;
        const right = left + n.el.offsetWidth;
        if (left - NAV_PAD < navScroll) navScroll = left - NAV_PAD;
        else if (right + NAV_PAD > navScroll + room) navScroll = right + NAV_PAD - room;
      }
      navScroll = Math.round(Math.max(0, Math.min(max, navScroll)));
      setTransform(navTrack, "translateX(" + -navScroll + "px)");
      toggleClass(navEl, "more-left", navScroll > 0);
      toggleClass(navEl, "more-right", navScroll < max - 1);
    }
    function renderNav() {
      scrollNav();
      navItems.forEach((n, i) => {
        toggleClass(n.el, "focus", zone === "nav" && i === navIndex);
        toggleClass(n.el, "current", n.id === "home");
      });
      toggleClass(el3, "in-nav", zone === "nav");
    }
    function showHero(item) {
      if (!item) return;
      const logoPath = clearLogo(item);
      const server = session.server;
      if (logoPath && item.type !== "episode") {
        heroLogo.src = server.image(logoPath, 640, 200, { format: "png" });
        heroLogo.style.display = "";
        heroTitle.style.display = "none";
      } else {
        heroLogo.style.display = "none";
        heroTitle.style.display = "";
        setText(heroTitle, item.type === "episode" ? item.grandparentTitle : item.title);
      }
      setText(heroMeta, (item.type === "episode" ? item.title + "  \xB7  " : "") + metaLine(item));
      setText(heroSummary, item.summary || "");
      ambience.set(item.UltraBlurColors);
      clearTimeout(artTimer);
      artTimer = setTimeout(() => hero.set(server.image(heroArtPath(item), 1344, 756)), isFast() ? 350 : 120);
    }
    function onFocusItem(item) {
      clearTimeout(heroTimer);
      if (isFast()) heroTimer = setTimeout(() => showHero(item), 160);
      else showHero(item);
    }
    function layoutRows() {
      offsets = [];
      let y = 0;
      rows.forEach((r) => {
        offsets.push(y);
        setTransform(r.el, "translateY(" + y + "px)");
        y += r.height;
      });
    }
    function renderRows() {
      rows.forEach((r, i) => {
        r.setActive(zone === "rows" && i === rowIndex);
        toggleClass(r.el, "above", i < rowIndex);
      });
      setTransform(track, "translateY(" + -(offsets[rowIndex] || 0) + "px)");
    }
    function setHubs(hubs) {
      const sameShape = hubs.length === rows.length && hubs.every((hb, i) => rows[i].hubId === hb.hubIdentifier);
      const focusedKey = rows[rowIndex] && rows[rowIndex].current() && rows[rowIndex].current().ratingKey;
      if (sameShape) {
        hubs.forEach((hb, i) => rows[i].setItems(hb.Metadata, i === rowIndex ? focusedKey : null));
      } else {
        track.innerHTML = "";
        rows = hubs.map((hb) => {
          const wide = /continue|ondeck/i.test(hb.hubIdentifier);
          const row = new Row({
            title: hb.title,
            kind: wide ? "wide" : "poster",
            items: hb.Metadata,
            onFocus: onFocusItem,
            onSelect: (item) => openItem(item)
          });
          row.hubId = hb.hubIdentifier;
          track.appendChild(row.el);
          return row;
        });
        rowIndex = Math.min(rowIndex, Math.max(0, rows.length - 1));
        layoutRows();
      }
      renderRows();
      setText(empty, rows.length ? "" : "Nothing here yet. Add some media to your Plex server.");
      const cur = rows[rowIndex] && rows[rowIndex].current();
      if (cur) showHero(cur);
      if (!reportedPaint && rows.length) {
        reportedPaint = true;
        log("home rows ready at " + Math.round(performance.now()) + "ms after page start");
      }
    }
    function load2() {
      return __async(this, null, function* () {
        const server = session.server;
        loadedAt = Date.now();
        try {
          const [sections, hubs] = yield Promise.all([server.sections(), server.hubs()]);
          buildNav(sections);
          setHubs(hubs);
          set("homeCache", { server: server.id, sections, hubs: hubs.map(slimHub) });
        } catch (e) {
          error("home load failed", e);
          if (!rows.length) setText(empty, "Couldn't load from " + server.name + ". Press OK to retry.");
        }
      });
    }
    const cached = get("homeCache");
    if (cached && session.server && cached.server === session.server.id) {
      buildNav(cached.sections || []);
      setHubs(cached.hubs || []);
    } else {
      buildNav([]);
    }
    if (document.fonts) document.fonts.ready.then(renderNav);
    load2();
    function activateNav(n) {
      if (n.id === "section") openLibrary(n.section);
      else if (n.id === "search") openSearch();
      else if (n.id === "servers") openServers();
      else if (n.id === "settings") openSettings();
    }
    return {
      el: el3,
      name: "home",
      onShow() {
        ambience.restore();
        renderNav();
        if (Date.now() - loadedAt > 5e3) load2();
      },
      onKey(action) {
        if (zone === "nav") {
          if (action === "left") {
            navIndex = Math.max(0, navIndex - 1);
            renderNav();
            return true;
          }
          if (action === "right") {
            navIndex = Math.min(navItems.length - 1, navIndex + 1);
            renderNav();
            return true;
          }
          if (action === "down" && rows.length) {
            zone = "rows";
            renderNav();
            renderRows();
            return true;
          }
          if (action === "enter") {
            activateNav(navItems[navIndex]);
            return true;
          }
          if (action === "back") return false;
          return true;
        }
        const row = rows[rowIndex];
        if (!row) {
          if (action === "up") {
            zone = "nav";
            renderNav();
            return true;
          }
          if (action === "enter") {
            load2();
            return true;
          }
          return false;
        }
        switch (action) {
          case "left":
            row.move(-1);
            return true;
          case "right":
            row.move(1);
            return true;
          case "up":
            if (rowIndex === 0) {
              zone = "nav";
              renderNav();
              renderRows();
              return true;
            }
            rowIndex--;
            renderRows();
            onFocusItem(rows[rowIndex].current());
            return true;
          case "down":
            if (rowIndex < rows.length - 1) {
              rowIndex++;
              renderRows();
              onFocusItem(rows[rowIndex].current());
            }
            return true;
          case "enter":
            row.select();
            return true;
          case "play":
          case "playpause":
            if (row.current()) playItem(row.current());
            return true;
          case "back":
            if (rowIndex > 0 || row.index > 0) {
              rowIndex = 0;
              rows.forEach((r) => r.focusIndex(0));
              renderRows();
              onFocusItem(rows[0].current());
              return true;
            }
            return false;
        }
        return false;
      }
    };
  }

  // app/js/app.js
  function goHome() {
    reset(HomeScreen());
  }
  function goLogin() {
    reset(AddServer({ onDone: goHome, welcome: true }));
  }
  function verify() {
    return __async(this, null, function* () {
      try {
        yield session.server.get("/identity");
      } catch (e) {
        if (e.status === 401) {
          signOut();
          goLogin();
          return;
        }
        warn("saved server unreachable, re-resolving", e.message);
        try {
          yield reconnect();
          goHome();
        } catch (err) {
          if (err.status === 401) {
            signOut();
            goLogin();
          }
        }
      }
    });
  }
  function fitWindow() {
    const root3 = document.documentElement;
    if (!innerWidth || !innerHeight) return;
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    root3.style.position = "relative";
    root3.style.zoom = s;
    root3.style.marginLeft = Math.max(0, (innerWidth - 1920 * s) / 2 / s) + "px";
    root3.style.marginTop = Math.max(0, (innerHeight - 1080 * s) / 2 / s) + "px";
  }
  function fitAndroid() {
    let p = document.getElementById("zen-probe");
    if (!p) {
      p = document.createElement("div");
      p.id = "zen-probe";
      p.style.cssText = "position:fixed;left:0;top:0;width:100%;height:100%;visibility:hidden;pointer-events:none";
      document.documentElement.appendChild(p);
    }
    const r = p.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const s = Math.min(r.width / 1920, r.height / 1080);
    const st = document.body.style;
    st.transformOrigin = "0 0";
    st.transform = "translate(" + (r.width - 1920 * s) / 2 + "px," + (r.height - 1080 * s) / 2 + "px) scale(" + s + ")";
    if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
  }
  function start() {
    window.__ZP_VERSION = VERSION;
    otaOk();
    if (!DEV && session.token === "lan-dev") {
      signOut();
      set("hud", void 0);
    }
    if (DEV && DEV_PLEX_URL && !session.token) {
      set("token", "lan-dev");
      set("user", { title: "LAN (dev)" });
      set("server", { uri: DEV_PLEX_URL, token: "", name: "Plex (LAN dev)", id: "lan-dev" });
      location.reload();
      return;
    }
    if (policyLocked() && session.server && !(session.server.saved && session.server.saved.managed)) signOut();
    if (session.token && session.server) {
      ensureCurrentProfile();
      goHome();
      const last2 = get("startLast", false) && session.server.lastLive ? session.server.lastLive() : null;
      if (last2) setTimeout(() => playItem(last2), 60);
      verify();
      actKick();
    } else {
      goLogin();
      actAutoBoot();
    }
    policyBoot();
  }
  function touchAsRemote() {
    let sx = 0;
    let sy = 0;
    document.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      sx = t.clientX;
      sy = t.clientY;
    }, { passive: true });
    document.addEventListener("touchend", (e) => {
      if (document.activeElement && document.activeElement.tagName === "INPUT") return;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 60) return;
      if (Math.abs(dx) > Math.abs(dy)) inject(dx < 0 ? "right" : "left");
      else inject(dy < 0 ? "down" : "up");
    }, { passive: true });
  }
  window.__zenBack = () => {
    if (depth() > 1) {
      inject("back");
      return true;
    }
    return false;
  };
  function mouseAsRemote() {
    let wheelAt = 0;
    const typing = () => document.activeElement && document.activeElement.tagName === "INPUT";
    window.addEventListener("wheel", (e) => {
      const now = performance.now();
      if (now - wheelAt < 110 || typing()) return;
      wheelAt = now;
      const sideways = e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const d = sideways ? e.deltaX || e.deltaY : e.deltaY;
      if (d) inject(sideways ? d > 0 ? "right" : "left" : d > 0 ? "down" : "up");
    }, { passive: true });
    document.addEventListener("click", () => {
      const top2 = top();
      if (top2 && (top2.name === "form" || top2.name === "add-server" || typing())) return;
      inject("enter");
    });
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      inject("back");
    });
    document.addEventListener("mouseup", (e) => {
      if (e.button === 3) inject("back");
    });
  }
  window.addEventListener("zenpro:sleep", () => {
    goHome();
    toast("Sleep timer: playback stopped", 6e3);
  });
  function detectFlexGap() {
    try {
      const d = document.createElement("div");
      d.style.cssText = "display:flex;flex-direction:column;row-gap:1px;position:absolute;visibility:hidden";
      d.appendChild(document.createElement("div"));
      d.appendChild(document.createElement("div"));
      document.body.appendChild(d);
      const ok = d.scrollHeight === 1;
      d.parentNode.removeChild(d);
      if (!ok) document.documentElement.classList.add("no-gap");
    } catch (e) {
    }
  }
  function boot() {
    applyTheme();
    detectFlexGap();
    if (DEV) window.__ss = { router: router_exports, session, nav: nav_exports };
    log("boot", VERSION, navigator.userAgent);
    registerKeys();
    if (isAndroid) {
      document.documentElement.classList.add("android");
      fitAndroid();
      window.addEventListener("resize", fitAndroid);
      window.addEventListener("orientationchange", fitAndroid);
      window.addEventListener("scroll", () => {
        if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
      });
      [150, 600, 1500, 3500].forEach((ms2) => setTimeout(fitAndroid, ms2));
    }
    if (!isTizen) {
      if (!isAndroid) {
        fitWindow();
        window.addEventListener("resize", fitWindow);
      }
      mouseAsRemote();
      if (isAndroid) touchAsRemote();
      else document.documentElement.classList.add("fx");
    }
    init(document.getElementById("app"));
    initHud(() => top() && top().name || "");
    window.addEventListener("zenpro:restart", start);
    if (DEV && DEV_HOST) Promise.resolve().then(() => __toESM(__require("./dev/remote.js"))).then((m) => m.startDevRemote());
    start();
    const bootCard = document.getElementById("zen-boot");
    if (bootCard && bootCard.parentNode) bootCard.parentNode.removeChild(bootCard);
    const splash = document.getElementById("splash");
    setTimeout(() => {
      splash.classList.add("gone");
      setTimeout(() => splash.parentNode && splash.parentNode.removeChild(splash), 400);
    }, 500);
  }

  // app/js/main.js
  boot();
})();
