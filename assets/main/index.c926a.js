window.__require=function t(e,o,n){function c(r,a){if(!o[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var u=o[r]={exports:{}};e[r][0].call(u.exports,function(t){return c(e[r][1][t]||t)},u,u.exports,t,e,o,n)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)c(n[r]);return c}({AudioManager:[function(t,e,o){"use strict";cc._RF.push(e,"abacdO2TSZErazN0g3ATwQl","AudioManager");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0}),o.BGM=o.audioNames=void 0;var r=cc._decorator,a=r.ccclass,s=r.property,p=r.menu,u=function(){function t(){this.name="",this.audioClip=null}return i([s()],t.prototype,"name",void 0),i([s({type:cc.AudioClip})],t.prototype,"audioClip",void 0),i([a("Audio")],t)}();(function(t){t.distribute="distribute",t.button="button",t.bigWin="bigwin",t.gameDraw="gamedraw"})(o.audioNames||(o.audioNames={})),o.BGM={hall:"http://39.129.23.143:20081/wq/files/2023/09/21/650bcdfe592ba.mp3",slot:"http://39.129.23.143:20081/wq/files/2023/09/21/650bcd53f1cf6.mp3",whot:"http://39.129.23.143:20081/wq/files/2023/09/21/650bcdc9a3540.mp3"};var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nowBgm=null,e.bgmPlaying=!1,e.bgm=null,e.bgmVolume=.2,e.audioClips=[],e}var o;return c(e,t),o=e,e.prototype.loadBgm=function(t){return new Promise(function(e){cc.loader.load(t,function(t,n){o.instance.nowBgm=n,e(n)})})},e.prototype.onLoad=function(){o.instance=this},e.prototype.playBgm=function(){o.instance.nowBgm&&o._playBgm(o.instance.nowBgm,.2)},e.getAudioClipByName=function(t){var e;return null===(e=o.instance.audioClips.find(function(e){return e.name===t}))||void 0===e?void 0:e.audioClip},e.prototype.stopBgm=function(){o._stopAudio(o.instance.nowBgm)},e.prototype.resumeBgm=function(){o._resumeAudio(o.instance.nowBgm)},e.prototype.pauseBgm=function(){o._pauseAudio(o.instance.nowBgm)},e.prototype.stop=function(t){o._stopAudio(o.getAudioClipByName(t))},e.prototype.play=function(t,e){void 0===e&&(e=.5),o._playAudio(o.getAudioClipByName(t),e)},e._playAudio=function(t,e){void 0===e&&(e=1),t&&(t in o.audioIdsTimeouts&&o.audioIdsTimeouts[t]+33>Date.now()||(o.audioIdsTimeouts[t]=Date.now(),o.audioIds[t]=cc.audioEngine.play(t,!1,e)))},e._playBgm=function(t,e){void 0===e&&(e=1),t&&(t in o.audioIds?cc.audioEngine.getState(o.audioIds[t])!==cc.audioEngine.AudioState.PLAYING&&cc.audioEngine.resume(o.audioIds[t]):o.audioIds[t]=cc.audioEngine.play(t,!0,e))},e._resumeAudio=function(t){t&&t in o.audioIds&&cc.audioEngine.resume(o.audioIds[t])},e._pauseAudio=function(t){t&&t in o.audioIds&&cc.audioEngine.pause(o.audioIds[t])},e._stopAudio=function(t){t&&t in o.audioIds&&(cc.audioEngine.stop(o.audioIds[t]),delete o.audioIds[t])},e.instance=null,e.audioIds={},e.audioIdsTimeouts={},i([s({type:cc.AudioClip})],e.prototype,"bgm",void 0),i([s()],e.prototype,"bgmVolume",void 0),i([s({type:[u]})],e.prototype,"audioClips",void 0),o=i([a,p("\u901a\u7528\u7ec4\u4ef6/\u97f3\u9891\u7ba1\u7406\u5668")],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],BaseButton:[function(t,e,o){"use strict";cc._RF.push(e,"c8db5qxZ8lGOY7TNO6jc4VA","BaseButton");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../AudioManager"),a=t("../Global"),s=cc._decorator,p=s.ccclass,u=s.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.withAudio=!0,e.withAnimation=!0,e.scale=1.1,e.nodeScale=1,e.clickEvents=[],e}return c(e,t),e.prototype.onLoad=function(){var t=this;this.node.addComponent(cc.Button).clickEvents=this.clickEvents,this.nodeScale=this.node.scale,this.node.on(cc.Node.EventType.TOUCH_END,function(){a.default.AudioCtr.play(r.audioNames.button),t.node.scale===t.nodeScale&&t.withAnimation&&cc.tween(t.node).to(.1,{scale:t.node.scale*t.scale}).to(.1,{scale:1*t.node.scale}).start()},this)},i([u({tooltip:"\u662f\u5426\u6709\u6309\u94ae\u58f0"})],e.prototype,"withAudio",void 0),i([u({tooltip:"\u662f\u5426\u6709\u6309\u94ae\u52a8\u6548"})],e.prototype,"withAnimation",void 0),i([u({tooltip:"\u7f29\u653e\u6bd4\u4f8b"})],e.prototype,"scale",void 0),i([u()],e.prototype,"clickEvents",void 0),i([p],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../AudioManager":"AudioManager","../Global":"Global"}],BasePopup:[function(t,e,o){"use strict";cc._RF.push(e,"88f46T9NE5JPYWz5+ibP9fg","BasePopup");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.closeOnBlur=!1,e.isFade=!0,e.hideToDir="",e.originPosition=null,e}return c(e,t),e.prototype.onLoad=function(){var t,e,o,n=this;this.originPosition=null===(t=this.node.getChildByName("content"))||void 0===t?void 0:t.position,this.closeOnBlur&&(null===(e=this.node.getChildByName("content"))||void 0===e||e.on(cc.Node.EventType.TOUCH_END,function(){},this),null===(o=this.node.getChildByName("mask"))||void 0===o||o.on(cc.Node.EventType.TOUCH_END,function(){n.hideToDir?n.hideTo(null,n.hideToDir):n.scaleHide()},this))},e.prototype.scaleShow=function(){this.node.active||(this.node.active=!0,this.node.scale=.5,this.node.opacity=0,cc.tween(this.node).to(.2,{scale:1.08,opacity:255},{easing:"smooth"}).to(.05,{scale:1,opacity:255},{easing:"smooth"}).start())},e.prototype.scaleHide=function(){var t=this;cc.tween(this.node).to(.05,{scale:1.08,opacity:255},{easing:"smooth"}).to(.2,{scale:.8,opacity:0},{easing:"smooth"}).call(function(){t.node.active=!1,t.node.scale=1,t.afterHide()}).start()},e.prototype.zoomHide=function(){var t=this;cc.tween(this.node).to(.05,{scale:.92,opacity:255},{easing:"smooth"}).to(.2,{scale:1.8,opacity:0},{easing:"smooth"}).call(function(){t.node.active=!1,t.node.scale=1,t.afterHide()}).start()},e.prototype.showFrom=function(t,e){var o=null,n=this.node.getChildByName("content"),c=n.width,i=n.height;"left"===e&&(o=cc.v3(-c,0,0)),"right"===e&&(o=cc.v3(c,0,0)),"top"===e&&(o=cc.v3(0,i,0)),"bottom"===e&&(o=cc.v3(0,-i,0)),this.node.active=!0,this.node.getChildByName("content").position=o,this.isFade&&(this.node.opacity=0,cc.tween(this.node).to(.3,{opacity:255},{easing:"smooth"}).start()),cc.tween(this.node.getChildByName("content")).to(.3,{position:this.originPosition},{easing:"smooth"}).start()},e.prototype.hideTo=function(t,e){var o=this;this.hideToDir=e;var n=null,c=this.node.getChildByName("content"),i=c.width,r=c.height;"left"===e&&(n=cc.v3(-i,0,0)),"right"===e&&(n=cc.v3(i,0,0)),"top"===e&&(n=cc.v3(0,r,0)),"bottom"===e&&(n=cc.v3(0,-r,0)),this.isFade&&cc.tween(this.node).to(.3,{opacity:0},{easing:"smooth"}).start(),cc.tween(this.node.getChildByName("content")).to(.3,{position:n},{easing:"smooth"}).call(function(){o.node.active=!1,o.node.position=cc.v3(0,0,0),o.afterHide()}).start()},e.prototype.afterHide=function(){},e.prototype.fadeShow=function(){this.node.active||(this.node.active=!0,this.node.opacity=0,cc.tween(this.node).to(.3,{opacity:255},{easing:"smooth"}).start())},e.prototype.fadeHide=function(){var t=this;cc.tween(this.node).to(.3,{opacity:0},{easing:"smooth"}).call(function(){t.node.active=!1,t.node.opacity=1,t.afterHide()}).start()},e.prototype.show=function(){this.node.active=!0},e.prototype.hide=function(){this.node.active=!1},i([s({tooltip:"\u662f\u5426\u70b9\u51fb\u8499\u5c42\u5173\u95ed"})],e.prototype,"closeOnBlur",void 0),i([s({tooltip:"\u662f\u5426\u6709\u6de1\u5165\u6de1\u51fa\u6548\u679c"})],e.prototype,"isFade",void 0),i([s({tooltip:"\u5173\u95edpopup\u7684\u65b9\u5411  left | right | top | bottom"})],e.prototype,"hideToDir",void 0),i([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],ContactCtr:[function(t,e,o){"use strict";cc._RF.push(e,"b9525u84NZMlb9Tm03QzMFd","ContactCtr");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,p=t("./GameRun"),u=t("./components/BasePopup"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameRun=null,e}return c(e,t),e.prototype.onBeginContact=function(t,e){console.log(e.node.name),"ground"===e.node.name&&(this.gameRun.isFloor=!0),"tree"===e.node.name&&(this.gameRun.isGaming=!1,this.gameRun.gameOver.getComponent(u.default).scaleShow())},i([s(p.default)],e.prototype,"gameRun",void 0),i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./GameRun":"GameRun","./components/BasePopup":"BasePopup"}],EventManager:[function(t,e,o){"use strict";cc._RF.push(e,"d86d6QeGzRBhJ+RWVdK3y2f","EventManager"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){}return t.on=function(t,e,o){var n=this.events;n.has(t)?n.get(t).push({callback:e,target:o}):n.set(t,[{callback:e,target:o}])},t.once=function(t,e,o){var n=this.onceEvents;n.has(t)?n.get(t).push({callback:e,target:o}):n.set(t,[{callback:e,target:o}])},t.off=function(t,e,o){var n=this.events.get(t);if(n)for(var c=0,i=n.length;c<i;c++)if(this.compare(n[c],e,o)){n.splice(c,1),0===n.length&&this.events.delete(t);break}var r=this.onceEvents.get(t);if(r)for(c=0,i=r.length;c<i;c++)if(this.compare(r[c],e,o)){r.splice(c,1),0===r.length&&this.onceEvents.delete(t);break}},t.emit=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var n=this.events.get(t);if(n)for(var c=0;c<n.length;c++){var i=n[c],r=i.callback,a=i.target;r.apply(a,e)}var s=this.onceEvents.get(t);if(s){for(c=0;c<s.length;c++){var p=s[c];r=p.callback,a=p.target,r.apply(a,e)}this.onceEvents.delete(t)}},t.remove=function(t){this.events.has(t)&&this.events.delete(t),this.onceEvents.has(t)&&this.onceEvents.delete(t)},t.removeAll=function(){this.events.clear(),this.onceEvents.clear()},t.compare=function(t,e,o){var n=t.callback;return t.target===o&&(n===e||n.toString()===e.toString())},t.events=new Map,t.onceEvents=new Map,t}();o.default=n,cc._RF.pop()},{}],GameRun:[function(t,e,o){"use strict";cc._RF.push(e,"9ce48YAxdtL24Cpw4Anxhru","GameRun");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./components/BasePopup"),a=cc._decorator,s=a.ccclass,p=a.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pet=null,e.gameOver=null,e.pointer=null,e.trees=[],e.roads=[],e.groundSpeed=200,e.distanceLabel=null,e.distanceNum=0,e.vSpeed=700,e.isFloor=!1,e.isGaming=!0,e.petOriginPostion=null,e}return c(e,t),e.prototype.onLoad=function(){var t=this;this.pointer.active=!0,this.petOriginPostion=this.pet.position,cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,this.node.on(cc.Node.EventType.TOUCH_START,this.onClick,this),cc.tween(this.pointer).to(.5,{scale:1.2}).to(.5,{scale:1}).to(.5,{scale:1.2}).to(.5,{scale:1}).call(function(){t.pointer.getComponent(r.default).scaleHide()}).start()},e.prototype.onClick=function(){this.isFloor&&this.isGaming&&(this.pet.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,this.vSpeed),this.isFloor=!1)},e.prototype.update=function(t){var e=this;this.isGaming&&(this.groundSpeed=60*Math.floor(this.distanceNum/100)+200,this.vSpeed=700-100*Math.floor(this.distanceNum/100),this.vSpeed<=500&&(this.vSpeed=500),this.distanceNum+=t*this.groundSpeed/50,this.distanceLabel.string=Math.floor(this.distanceNum)+" M",this.roads.forEach(function(o,n){var c,i;o.position=cc.v3((null===(c=o.position)||void 0===c?void 0:c.x)-t*e.groundSpeed,o.position.y,0),(null===(i=o.position)||void 0===i?void 0:i.x)<=-650&&(o.position=cc.v3(205,o.position.y,0),e.trees[n].position=cc.v3(Math.floor(200*Math.random()+300),e.trees[n].position.y,0))}),this.trees.forEach(function(o){var n;o.position=cc.v3((null===(n=o.position)||void 0===n?void 0:n.x)-t*e.groundSpeed,o.position.y,0)}))},e.prototype.reset=function(){this.pet.position=this.petOriginPostion,this.isFloor=!1,this.isGaming=!0,this.gameOver.getComponent(r.default).hide(),this.distanceNum=0,this.distanceLabel.string="0 M",this.groundSpeed=200,this.vSpeed=700,this.roads[0].position=cc.v3(-225,this.roads[0].position.y,0),this.roads[1].position=cc.v3(205,this.roads[0].position.y,0),this.trees[0].position=cc.v3(120,this.trees[0].position.y,0),this.trees[1].position=cc.v3(615,this.trees[0].position.y,0),this.pet.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,0)},i([p(cc.Node)],e.prototype,"pet",void 0),i([p(cc.Node)],e.prototype,"gameOver",void 0),i([p(cc.Node)],e.prototype,"pointer",void 0),i([p(cc.Node)],e.prototype,"trees",void 0),i([p(cc.Node)],e.prototype,"roads",void 0),i([p(cc.Label)],e.prototype,"distanceLabel",void 0),i([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./components/BasePopup":"BasePopup"}],Global:[function(t,e,o){"use strict";cc._RF.push(e,"e1a66iTRjpIQY3Pag1N1biy","Global"),Object.defineProperty(o,"__esModule",{value:!0});var n=new(function(){function t(){this.configs={bgmStatus:1,soundStatus:1},this.AudioCtr=null,this.BGMInit=function(){},this.BGMSwitch=function(){},this.SoundSwitch=function(){}}return t.prototype.showMsg=function(){},t}());o.default=n,cc._RF.pop()},{}],HallCtr:[function(t,e,o){"use strict";cc._RF.push(e,"6ce2cIFDtlHG4htQNsLrk/u","HallCtr");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,p=t("./AudioManager"),u=t("./Global"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audioManager=null,e.petNode=null,e}return c(e,t),e.prototype.onLoad=function(){u.default.AudioCtr=this.audioManager.getComponent(p.default),this.petWalk()},e.prototype.petWalk=function(){var t=this.petNode.position,e=t.x,o=t.y;cc.tween(this.petNode).to(3,{position:cc.v3(e-80,o,0)}).to(0,{scaleX:-1}).to(6,{position:cc.v3(e+80,o,0)}).to(0,{scaleX:1}).to(3,{position:cc.v3(0,o,0)}).union().repeatForever().start(),cc.moveTo(3,cc.v2(-80,o)),cc.moveTo(3,cc.v2(80,o)),cc.moveTo(3,cc.v2(0,o))},e.prototype.goHall=function(){cc.director.loadScene("Hall")},i([s(cc.Node)],e.prototype,"audioManager",void 0),i([s(cc.Node)],e.prototype,"petNode",void 0),i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./AudioManager":"AudioManager","./Global":"Global"}],LocalizationBase:[function(t,e,o){"use strict";cc._RF.push(e,"6288fk8qDVNJJMaLE0eZRwW","LocalizationBase");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0}),o.DefaultLang=o.Lang=o.LANG_CHANGED=void 0;var r,a,s=t("../../core/EventManager");o.LANG_CHANGED="lang-change",function(t){t.Cn="cn",t.Eng="eng"}(r=o.Lang||(o.Lang={})),function(t){t[t.cn=1]="cn",t[t.eng=2]="eng"}(a=o.DefaultLang||(o.DefaultLang={}));var p=cc._decorator,u=p.ccclass,l=p.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultLang=a.cn,e.curLang=r.Cn,e.langChanged=function(t){t=e.curLang===r.Cn?r.Eng:r.Cn,e.curLang=t,e.onLangChanged(t)},e}return c(e,t),e.prototype.onLoad=function(){s.default.on(o.LANG_CHANGED,this.langChanged,this)},e.prototype.onDestroy=function(){s.default.off(o.LANG_CHANGED,this.langChanged,this)},e.prototype.onLangChanged=function(){},e.prototype.get=function(){return this[this.curLang]?Array.isArray(this[this.curLang])&&0===this[this.curLang].length?this[a[this.defaultLang]]:this[this.curLang]:this[a[this.defaultLang]]},i([l({type:cc.Enum(a),tooltip:!1})],e.prototype,"defaultLang",void 0),i([u],e)}(cc.Component);o.default=d,cc._RF.pop()},{"../../core/EventManager":"EventManager"}],LocalizationLabelString:[function(t,e,o){"use strict";cc._RF.push(e,"bc90dBTz7xBw7tnsCZTsrnR","LocalizationLabelString");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./LocalizationBase"),a=cc._decorator,s=a.ccclass,p=a.property,u=a.requireComponent,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cn="",e.eng="",e.label=null,e}return c(e,t),e.prototype.onLoad=function(){t.prototype.onLoad.call(this),this.label=this.node.getComponent(cc.Label),this.label&&(this.label.string=this.get())},e.prototype.onLangChanged=function(){this.label&&(this.label.string=this.get())},i([p()],e.prototype,"cn",void 0),i([p()],e.prototype,"eng",void 0),i([s,u(cc.Label)],e)}(r.default);o.default=l,cc._RF.pop()},{"./LocalizationBase":"LocalizationBase"}],LocalizationSpriteFrame:[function(t,e,o){"use strict";cc._RF.push(e,"ff0df30ghZCqYu3kQKqn2X5","LocalizationSpriteFrame");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./LocalizationBase"),a=cc._decorator,s=a.ccclass,p=a.property,u=a.requireComponent,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cn=null,e.eng=null,e.sprite=null,e}return c(e,t),e.prototype.onLoad=function(){t.prototype.onLoad.call(this),this.sprite=this.node.getComponent(cc.Sprite),this.sprite&&(this.sprite.spriteFrame=this.get())},e.prototype.onLangChanged=function(){this.sprite&&(this.sprite.spriteFrame=this.get())},i([p(cc.SpriteFrame)],e.prototype,"cn",void 0),i([p(cc.SpriteFrame)],e.prototype,"eng",void 0),i([s,u(cc.Sprite)],e)}(r.default);o.default=l,cc._RF.pop()},{"./LocalizationBase":"LocalizationBase"}],StartCtr:[function(t,e,o){"use strict";cc._RF.push(e,"4767dNIUeNAfZLJ+N9mHkrq","StartCtr");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,p=t("./AudioManager"),u=t("./Global"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audioManager=null,e}return c(e,t),e.prototype.onLoad=function(){u.default.AudioCtr=this.audioManager.getComponent(p.default)},e.prototype.goHall=function(){cc.director.loadScene("Hall")},i([s(cc.Node)],e.prototype,"audioManager",void 0),i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./AudioManager":"AudioManager","./Global":"Global"}],Switch:[function(t,e,o){"use strict";cc._RF.push(e,"73ee5lzOoJK8IcmK95YzRQS","Switch");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=(r.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.status=0,e}var o;return c(e,t),o=e,e.prototype.onLoad=function(){o.instance=this,this.status?(this.node.children[1].position=cc.v3(0,0,0),this.node.children[1].children[1].getComponent(cc.Label).string="ON",this.node.children[1].children[0].children[0].color=new cc.Color(0,175,237,255)):(this.node.children[1].position=cc.v3(-32,0,0),this.node.children[1].children[1].getComponent(cc.Label).string="OFF",this.node.children[1].children[0].children[0].color=new cc.Color(222,50,50,255))},e.prototype.onSwitch=function(t){this.status?(cc.tween(this.node.children[1]).to(.2,{position:cc.v3(-32,0,0)}).start(),this.node.children[1].children[1].getComponent(cc.Label).string="OFF",this.node.children[1].children[0].children[0].color=new cc.Color(222,50,50,255),this.status=0):(cc.tween(this.node.children[1]).to(.2,{position:cc.v3(0,0,0)}).start(),this.node.children[1].children[1].getComponent(cc.Label).string="ON",this.node.children[1].children[0].children[0].color=new cc.Color(0,175,237,255),this.status=1),t(this.status)},e.instance=null,o=i([a],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],antiAlias:[function(t,e){"use strict";cc._RF.push(e,"298d3N4C2BE/a8B12SS+RB7","antiAlias"),cc.macro.ENABLE_WEBGL_ANTIALIAS=!0,cc._RF.pop()},{}],dateUtils:[function(t,e,o){"use strict";cc._RF.push(e,"ddc944IFXVEpa9V2DqlqOHq","dateUtils"),Object.defineProperty(o,"__esModule",{value:!0}),o.default={dateFormat:function(t,e){void 0===e&&(e="YYYY-MM-DD hh:mm:ss");var o="",n={"Y+":t.getFullYear().toString(),"M+":(t.getMonth()+1).toString(),"D+":t.getDate().toString(),"h+":t.getHours().toString(),"m+":t.getMinutes().toString(),"s+":t.getSeconds().toString()};for(var c in n)(o=new RegExp("("+c+")").exec(e))&&(e=e.replace(o[1],1==o[1].length?n[c]:n[c].padStart(o[1].length,"0")));return e},countDown:function(t,e,o){var n=function(t,e){var o={DD:Math.floor(t/864e5).toString(),hh:Math.floor(t%864e5/36e5).toString(),mm:Math.floor(t%36e5/6e4).toString(),ss:Math.floor(t%6e4/1e3).toString()};for(var n in o)e=e.replace(n,2===o[n].length?o[n]:"0"+o[n]);return e},c="00:00:00",i=null,r=0,a=+new Date;return"number"==typeof t&&t>0&&(r=t-a),"number"==typeof t&&t<0&&(r=-t),"object"==typeof t&&(r=t.getTime()-a),"string"==typeof t&&(r=+new Date(t)-a),r<=0&&(c="00:00:00"),c=n(r,e),i=setInterval(function(){(r-=1e3)<=0&&(o(),clearInterval(i)),c=n(r,e)},1e3),c}},cc._RF.pop()},{}],getQuery:[function(t,e,o){"use strict";cc._RF.push(e,"e07b0qVjapMO4Y8o7AUyQIc","getQuery"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){return{}},cc._RF.pop()},{}],menuPopup:[function(t,e,o){"use strict";cc._RF.push(e,"260e1Hk9ypKg7GhXD6uEEnP","menuPopup");var n,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../components/Switch"),a=cc._decorator,s=a.ccclass,p=a.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.huntingSwitch=null,e}return c(e,t),e.prototype.onLoad=function(){this.huntingSwitch.getComponent(r.default).status=1},e.prototype.onHuntingSwitch=function(){this.huntingSwitch.getComponent(r.default).onSwitch(function(t){console.log(t)})},i([p(cc.Node)],e.prototype,"huntingSwitch",void 0),i([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"../components/Switch":"Switch"}],nanoid:[function(t,e,o){"use strict";cc._RF.push(e,"b043e4P8v5NUp+hy0cmzIRK","nanoid"),o.__esModule=!0,o.default=void 0;var n={nanoid:function(t){void 0===t&&(t=21);for(var e="",o=t;o--;)e+="ModuleSymbhasOwnPr0123456789ABCDEFGHNRVfgctiUvzKqYTJkLxpZXIjQW"[64*Math.random()|0];return e}};o.default=n,e.exports=o.default,cc._RF.pop()},{}],numberFormat:[function(t,e,o){"use strict";cc._RF.push(e,"02fdadcG5NGFJUSIBVTmJu4","numberFormat"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){void 0===t&&(t=0);for(var e=[],o=0,n=t.toString().split(""),c=n.length-1;c>=0;c--)o++,e.unshift(n[c]),o%3||0==c||e.unshift(",");return e.join("")},cc._RF.pop()},{}],ppPlatformMgr:[function(t,e,o){"use strict";cc._RF.push(e,"1d0d4JuUwlFk74ldeoZWX2a","ppPlatformMgr");var n=this&&this.__decorate||function(t,e,o,n){var c,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(c=t[a])&&(r=(i<3?c(r):i>3?c(e,o,r):c(e,o))||r);return i>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0}),o.NetWorkType=void 0;var c,i=cc._decorator,r=i.ccclass;i.property,function(t){t[t.NetWorkType_None=0]="NetWorkType_None",t[t.NetWorkType_2g=1]="NetWorkType_2g",t[t.NetWorkType_3g=2]="NetWorkType_3g",t[t.NetWorkType_4g=3]="NetWorkType_4g",t[t.NetWorkType_5g=4]="NetWorkType_5g",t[t.NetWorkType_Wife=5]="NetWorkType_Wife",t[t.NetWorkType_WWAN=6]="NetWorkType_WWAN",t[t.NetWorkType_Unknow=7]="NetWorkType_Unknow"}(c=o.NetWorkType||(o.NetWorkType={}));var a=function(){function t(){}return t.removeLaunch=function(){cc.sys.isNative&&cc.PlatformUtils.getInstance().removeLaunch()},t.getMacAddress=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getMacAddress():""},t.getAppVersion=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getAppVersion():""},t.getAppCode=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getAppCode():""},t.getIMEI=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getIMEI():""},t.getIMSI=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getIMSI():""},t.getSimSerialNumber=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getSimSerialNumber():""},t.getSystemId=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getSystemId():""},t.getPhoneModel=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getPhoneModel():cc.sys.platform==cc.sys.WECHAT_GAME?wx.getSystemInfoSync().model:cc.sys.platform==cc.sys.BYTEDANCE_GAME?tt.getSystemInfoSync().model:""},t.getPhoneBrand=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getPhoneBrand():cc.sys.platform==cc.sys.WECHAT_GAME?wx.getSystemInfoSync().brand:cc.sys.platform==cc.sys.BYTEDANCE_GAME?tt.getSystemInfoSync().brand:""},t.getPhoneNum=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getPhoneNum():""},t.getSystemVersion=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getSystemVersion():""},t.openBrowser=function(t){cc.sys.isNative&&cc.PlatformUtils.getInstance().openBrowser(t)},t.openApp=function(t){cc.sys.isNative&&cc.PlatformUtils.getInstance().openApp(t)},t.isAppInstalled=function(t){return!!cc.sys.isNative&&cc.PlatformUtils.getInstance().isAppInstalled(t)},t.setClipboardData=function(t){return cc.sys.isNative?cc.PlatformUtils.getInstance().setClipboardData(t):(cc.sys.platform==cc.sys.WECHAT_GAME?wx.setClipboardData({data:t}):cc.sys.platform==cc.sys.BYTEDANCE_GAME&&tt.setClipboardData({data:t}),!1)},t.getClipboardData=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getClipboardData():""},t.openSetting=function(){cc.sys.isNative&&cc.PlatformUtils.getInstance().openSetting()},t.shake=function(){cc.sys.isNative?cc.PlatformUtils.getInstance().shake():cc.sys.platform==cc.sys.WECHAT_GAME?wx.vibrateShort({type:"medium"}):cc.sys.platform==cc.sys.BYTEDANCE_GAME&&tt.vibrateShort({type:"medium"})},t.getBattery=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getBattery():100},t.getNetworkType=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getNetworkType():c.NetWorkType_Unknow},t.setScreenBright=function(t){cc.sys.isNative?cc.PlatformUtils.getInstance().setScreenBright(t):cc.sys.platform==cc.sys.WECHAT_GAME?wx.setScreenBrightness({value:t/100}):cc.sys.platform==cc.sys.BYTEDANCE_GAME&&tt.setScreenBrightness({value:t/100})},t.getScreenBright=function(){return cc.sys.isNative?cc.PlatformUtils.getInstance().getScreenBright():100},t.setKeepScreenOn=function(t){cc.sys.isNative?cc.PlatformUtils.getInstance().setKeepScreenOn(t):cc.sys.platform==cc.sys.WECHAT_GAME?wx.setKeepScreenOn({keepScreenOn:t}):cc.sys.platform==cc.sys.BYTEDANCE_GAME&&tt.setKeepScreenOn({keepScreenOn:t})},n([r],t)}();o.default=a,cc._RF.pop()},{}],router:[function(t,e){"use strict";cc._RF.push(e,"f465czSL1BMyafIwfEXIQ94","router"),cc._RF.pop()},{}],shuffle:[function(t,e,o){"use strict";cc._RF.push(e,"16b78RjwzZCAJ8StnzdwaB1","shuffle"),Object.defineProperty(o,"__esModule",{value:!0});var n=Math.floor,c=Math.random;o.default=function(t,e){void 0===e&&(e=void 0);var o,i,r=-1,a=t.length,s=a-1;for(e=void 0===e?a:e;++r<e;){var p=(i=s,(o=r)+n(c()*(i-o+1))),u=t[p];t[p]=t[r],t[r]=u}return t.length=e,t},cc._RF.pop()},{}]},{},["AudioManager","ContactCtr","GameRun","Global","HallCtr","StartCtr","BaseButton","BasePopup","LocalizationBase","LocalizationLabelString","LocalizationSpriteFrame","Switch","antiAlias","EventManager","menuPopup","dateUtils","getQuery","nanoid","numberFormat","router","shuffle","ppPlatformMgr"]);
//# sourceMappingURL=index.js.map
