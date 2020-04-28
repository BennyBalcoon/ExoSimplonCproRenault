/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./exercice-02.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./exercice-02.js":
/*!************************!*\
  !*** ./exercice-02.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



class Robot {
    constructor(id) {
        this.id = id;
    }
    equipeBleue(){
        return "Equipe Bleue !"
    } 
    equipeRouge(){
        return "Equipe Rouge !"
    }   
}

let protoRobot = new Robot(Math.floor(Math.random() * 10));
console.log(protoRobot);

const obs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
    Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["iif"])(() => (protoRobot.id % 2 === 0), 
    observer.next(protoRobot.equipeBleue()),
    observer.next(protoRobot.equipeRouge())
    )
})

obs.subscribe((value) => {
    console.log(value)
});



/***/ }),

/***/ "./node_modules/rxjs/_esm5/index.js":
/*!******************************************!*\
  !*** ./node_modules/rxjs/_esm5/index.js ***!
  \******************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asapScheduler, asyncScheduler, queueScheduler, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/_esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/_esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/_esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/_esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/_esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/_esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/_esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/partition */ "./node_modules/rxjs/_esm5/internal/observable/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__["partition"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/_esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/_esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/_esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/_esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__["zip"]; });

/* harmony import */ var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./internal/scheduled/scheduled */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__["scheduled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_52__["config"]; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */























































//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/AsyncSubject.js ***!
  \**********************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */



var AsyncSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js ***!
  \*************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js ***!
  \*************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=InnerSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Notification.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Notification.js ***!
  \**********************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var NotificationKind;
/*@__PURE__*/ (function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case 'E':
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case 'C':
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

//# sourceMappingURL=Notification.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js ***!
  \*************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=OuterSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/ReplaySubject.js ***!
  \***********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */







var ReplaySubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__["queue"]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Scheduler.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Scheduler.js ***!
  \*******************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*****************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]));

var Subject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__["rxSubscriber"]] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*****************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=SubjectSubscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__["rxSubscriber"]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js ***!
  \******************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/_esm5/internal/operators/refCount.js");
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_5__["refCount"])()(this);
    };
    return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

var connectableObservableDescriptor = /*@__PURE__*/ (function () {
    var connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["SubjectSubscriber"]));
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));
//# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindCallback.js ***!
  \*********************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js ***!
  \*************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/combineLatest.js ***!
  \**********************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());

var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/concat.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/concat.js ***!
  \***************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js");
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */


function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(_of__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/defer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/defer.js ***!
  \**************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/empty.js ***!
  \**************************************************************/
/*! exports provided: EMPTY, empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/forkJoin.js ***!
  \*****************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */





function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(first_1)) {
            return forkJoinInternal(first_1, null);
        }
        if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function (key) { return first_1[key]; }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return resultSelector_1.apply(void 0, args); }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function (i) {
            var source = Object(_from__WEBPACK_IMPORTED_MODULE_4__["from"])(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function (value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function (err) { return subscriber.error(err); },
                complete: function () {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce(function (result, key, i) { return (result[key] = values[i], result); }, {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    });
}
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/from.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/from.js ***!
  \*************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
    }
    else {
        return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \******************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
    }
    else {
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEvent.js ***!
  \******************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var toString = /*@__PURE__*/ (function () { return Object.prototype.toString; })();
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js ***!
  \*************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/generate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/generate.js ***!
  \*****************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/iif.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/iif.js ***!
  \************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    if (falseResult === void 0) {
        falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/interval.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/interval.js ***!
  \*****************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/merge.js ***!
  \**************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/never.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/never.js ***!
  \**************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/of.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \***********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
    }
    else {
        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
    }
}
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js ***!
  \**************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/pairs.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/pairs.js ***!
  \**************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/partition.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/partition.js ***!
  \******************************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony import */ var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/not */ "./node_modules/rxjs/_esm5/internal/util/not.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/filter */ "./node_modules/rxjs/_esm5/internal/operators/filter.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */




function partition(source, predicate, thisArg) {
    return [
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(predicate, thisArg)(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source))),
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source)))
    ];
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/race.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/race.js ***!
  \*************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());

var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/range.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/range.js ***!
  \**************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/throwError.js ***!
  \*******************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/timer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/timer.js ***!
  \**************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/using.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/using.js ***!
  \**************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/zip.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/zip.js ***!
  \************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */







function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());

var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));

var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__["subscribeToResult"])(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__["OuterSubscriber"]));
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/concatAll.js ***!
  \*****************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/filter.js ***!
  \**************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=filter.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/groupBy.js ***!
  \***************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]));

var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]));
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/map.js ***!
  \***********************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js ***!
  \****************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js ***!
  \****************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return Object(_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__["InnerSubscriber"](this, value, index);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, ish, undefined, undefined, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]));

//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/observeOn.js ***!
  \*****************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());

var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/refCount.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/refCount.js ***!
  \****************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=refCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js ***!
  \*********************************************************************/
/*! exports provided: scheduleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleArray", function() { return scheduleArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js ***!
  \************************************************************************/
/*! exports provided: scheduleIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleIterable", function() { return scheduleIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js ***!
  \**************************************************************************/
/*! exports provided: scheduleObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleObservable", function() { return scheduleObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */



function scheduleObservable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
            var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js ***!
  \***********************************************************************/
/*! exports provided: schedulePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedulePromise", function() { return schedulePromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function schedulePromise(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduled/scheduled.js ***!
  \*****************************************************************/
/*! exports provided: scheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return scheduled; });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/_esm5/internal/util/isIterable.js");
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */








function scheduled(input, scheduler) {
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
            return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
            return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
            return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
            return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/Action.js ***!
  \**************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=Action.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js ***!
  \****************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js ***!
  \******************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/_esm5/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__["AsyncAction"]));

//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js ***!
  \*********************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js ***!
  \*******************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js");
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));

//# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js ***!
  \**********************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]));

//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js ***!
  \*******************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js ***!
  \**********************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js ***!
  \****************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */



var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__["AsyncScheduler"]));

var VirtualAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js ***!
  \**********************************************************************/
/*! exports provided: animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrame = /*@__PURE__*/ new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/asap.js ***!
  \************************************************************/
/*! exports provided: asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asap = /*@__PURE__*/ new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/async.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/async.js ***!
  \*************************************************************/
/*! exports provided: async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async = /*@__PURE__*/ new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
//# sourceMappingURL=async.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/queue.js ***!
  \*************************************************************/
/*! exports provided: queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queue = /*@__PURE__*/ new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
//# sourceMappingURL=queue.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/iterator.js ***!
  \*************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js ***!
  \**************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/EmptyError.js ***!
  \*************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var EmptyErrorImpl = /*@__PURE__*/ (function () {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/Immediate.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/Immediate.js ***!
  \************************************************************/
/*! exports provided: Immediate, TestTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTools", function() { return TestTools; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var RESOLVED = /*@__PURE__*/ (function () { return /*@__PURE__*/ Promise.resolve(); })();
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
var TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/TimeoutError.js ***!
  \***************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var TimeoutErrorImpl = /*@__PURE__*/ (function () {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
var TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js ***!
  \**************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js ***!
  \**********************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isIterable.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isIterable.js ***!
  \*************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isNumeric.js ***!
  \************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObservable.js ***!
  \***************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isPromise.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isPromise.js ***!
  \************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/noop.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/noop.js ***!
  \*******************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/not.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/not.js ***!
  \******************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js ***!
  \**************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
    }
    else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \*******************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js ***!
  \**********************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
        do {
            var item = iterator.next();
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js ***!
  \************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js ***!
  \*********************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js ***!
  \********************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
        innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhlcmNpY2UtMDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvQXN5bmNTdWJqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL0JlaGF2aW9yU3ViamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9Jbm5lclN1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvT3V0ZXJTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL1JlcGxheVN1YmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL1N1YmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvU3ViamVjdFN1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kTm9kZUNhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvY29tYmluZUxhdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2RlZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mb3JrSm9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tRXZlbnRQYXR0ZXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9paWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvbmV2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL29uRXJyb3JSZXN1bWVOZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvcGFpcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYXJ0aXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29ic2VydmFibGUvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS91c2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL3ppcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvY29uY2F0QWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL2dyb3VwQnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL29wZXJhdG9ycy9vYnNlcnZlT24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL3JlZkNvdW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZU9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FuaW1hdGlvbkZyYW1lQWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZVNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvQXNhcEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvQXNhcFNjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9RdWV1ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvUXVldWVTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL1ZpcnR1YWxUaW1lU2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3NjaGVkdWxlci9hbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvYXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL3F1ZXVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9FbXB0eUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvSW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9UaW1lb3V0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9ob3N0UmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzTnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaXNPYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvbm90LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvcGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yeGpzL19lc201L2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvSXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTUvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtNS9pbnRlcm5hbC91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIl0sIm5hbWVzIjpbXSwi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O0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsMkNBQTJDLHdDQUF3QyxFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQ0FBMkMsRUFBRTtBQUNoRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxzQ0FBc0MsRUFBRTtBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQzJDO0FBQ3BDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxzREFBVTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQ087QUFDUCw0QkFBNEIsV0FBVyxFQUFFO0FBQ3pDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNPLDBDQUEwQyx3Q0FBd0MsMENBQTBDLEVBQUUsRUFBRSxFQUFFO0FBQ3pJOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ08saUNBQWlDLHFFQUFxRSxFQUFFO0FBQy9HOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUN1RTtBQUNoRTtBQUNQLGlDQUFpQyw2REFBaUI7QUFDbEQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQ2lFO0FBQzFEO0FBQ1AsaUNBQWlDLHlEQUFlO0FBQ2hEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUNvQztBQUM3QjtBQUNQLFlBQVksd0RBQU87QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFDMkM7QUFDcEM7QUFDUCxvQ0FBb0Msc0RBQVU7QUFDOUM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDTyxpQkFBaUI7QUFDeEI7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NDO0FBQy9CO0FBQ1A7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsa0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUIsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NEO0FBQ0k7QUFDRTtBQUNJO0FBQ3BCO0FBQ0o7QUFDRjtBQUMyQjtBQUNNO0FBQ2hFO0FBQ1Asa0NBQWtDLDZEQUFpQjtBQUNuRCxlQUFlLG9GQUFxQjtBQUNwQztBQUNBLGFBQWEsZ0VBQVc7QUFDeEIsZUFBZSwwRUFBZ0I7QUFDL0I7QUFDQSxhQUFhLDREQUFTO0FBQ3RCLGVBQWUsOEVBQWtCO0FBQ2pDO0FBQ0EsdUNBQXVDLHlEQUFlO0FBQ3RELGVBQWUsZ0ZBQW1CO0FBQ2xDO0FBQ0E7QUFDQSxvQkFBb0IsMERBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQSwyQ0FBMkMsK0JBQStCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQ2lFO0FBQzFEO0FBQ1A7QUFDQSxnQ0FBZ0MseURBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ3VFO0FBQ2hFO0FBQ1A7QUFDQSxzQkFBc0IsNkRBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQ29EO0FBQzdDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrQkFBa0IsOEJBQThCLEVBQUU7QUFDM0Qsd0JBQXdCLGdFQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3FEO0FBQ1Q7QUFDRDtBQUNwQztBQUNQO0FBQ0EsOEJBQThCLGdFQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFVO0FBQ3BDO0FBQ0E7QUFDQSxXQUFXLGdFQUFXO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzJDO0FBQ2lDO0FBQ3ZCO0FBQzlDO0FBQ1A7QUFDQSxzQ0FBc0Msc0RBQVU7QUFDaEQ7QUFDQTtBQUNBLDJCQUEyQixpRUFBa0I7QUFDN0Msa0NBQWtDLGlFQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVUsQ0FBQywrQ0FBYTtBQUMzQztBQUNBLGVBQWUsc0RBQVU7QUFDekI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVPO0FBQ1A7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7O0FBRU87QUFDUCxtQ0FBbUMsb0NBQW9DO0FBQ3ZFOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7O0FBRU87QUFDUCw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLHNGQUFzRixhQUFhLEVBQUU7QUFDdEgsc0JBQXNCLGdDQUFnQyxxQ0FBcUMsMENBQTBDLEVBQUUsRUFBRSxHQUFHO0FBQzVJLDJCQUEyQixNQUFNLGVBQWUsRUFBRSxZQUFZLG9CQUFvQixFQUFFO0FBQ3BGLHNCQUFzQixvR0FBb0c7QUFDMUgsNkJBQTZCLHVCQUF1QjtBQUNwRCw0QkFBNEIsd0JBQXdCO0FBQ3BELDJCQUEyQix5REFBeUQ7QUFDcEY7O0FBRU87QUFDUDtBQUNBLGlCQUFpQiw0Q0FBNEMsU0FBUyxFQUFFLHFEQUFxRCxhQUFhLEVBQUU7QUFDNUkseUJBQXlCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGdCQUFnQixFQUFFLEtBQUs7QUFDako7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHNGQUFzRixhQUFhLEVBQUU7QUFDaE4sc0JBQXNCLDhCQUE4QixnREFBZ0QsdURBQXVELEVBQUUsRUFBRSxHQUFHO0FBQ2xLLDRDQUE0QyxzQ0FBc0MsVUFBVSxvQkFBb0IsRUFBRSxFQUFFLFVBQVU7QUFDOUg7O0FBRU87QUFDUCxnQ0FBZ0MsdUNBQXVDLGFBQWEsRUFBRSxFQUFFLE9BQU8sa0JBQWtCO0FBQ2pIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw0Q0FBNEM7QUFDNUM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhlcmNpY2UtMDIuanNcIik7XG4iLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtpaWYsIG9mLCByYW5nZX0gZnJvbSAncnhqcyc7XG5cbmNsYXNzIFJvYm90IHtcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuICAgIGVxdWlwZUJsZXVlKCl7XG4gICAgICAgIHJldHVybiBcIkVxdWlwZSBCbGV1ZSAhXCJcbiAgICB9IFxuICAgIGVxdWlwZVJvdWdlKCl7XG4gICAgICAgIHJldHVybiBcIkVxdWlwZSBSb3VnZSAhXCJcbiAgICB9ICAgXG59XG5cbmxldCBwcm90b1JvYm90ID0gbmV3IFJvYm90KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG5jb25zb2xlLmxvZyhwcm90b1JvYm90KTtcblxuY29uc3Qgb2JzID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgIGlpZigoKSA9PiAocHJvdG9Sb2JvdC5pZCAlIDIgPT09IDApLCBcbiAgICBvYnNlcnZlci5uZXh0KHByb3RvUm9ib3QuZXF1aXBlQmxldWUoKSksXG4gICAgb2JzZXJ2ZXIubmV4dChwcm90b1JvYm90LmVxdWlwZVJvdWdlKCkpXG4gICAgKVxufSlcblxub2JzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbn0pO1xuXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9pbnRlcm5hbC9PYnNlcnZhYmxlJztcbmV4cG9ydCB7IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUnO1xuZXhwb3J0IHsgR3JvdXBlZE9ic2VydmFibGUgfSBmcm9tICcuL2ludGVybmFsL29wZXJhdG9ycy9ncm91cEJ5JztcbmV4cG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICcuL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlJztcbmV4cG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL2ludGVybmFsL1N1YmplY3QnO1xuZXhwb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAnLi9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3QnO1xuZXhwb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJy4vaW50ZXJuYWwvUmVwbGF5U3ViamVjdCc7XG5leHBvcnQgeyBBc3luY1N1YmplY3QgfSBmcm9tICcuL2ludGVybmFsL0FzeW5jU3ViamVjdCc7XG5leHBvcnQgeyBhc2FwIGFzIGFzYXBTY2hlZHVsZXIgfSBmcm9tICcuL2ludGVybmFsL3NjaGVkdWxlci9hc2FwJztcbmV4cG9ydCB7IGFzeW5jIGFzIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9zY2hlZHVsZXIvYXN5bmMnO1xuZXhwb3J0IHsgcXVldWUgYXMgcXVldWVTY2hlZHVsZXIgfSBmcm9tICcuL2ludGVybmFsL3NjaGVkdWxlci9xdWV1ZSc7XG5leHBvcnQgeyBhbmltYXRpb25GcmFtZSBhcyBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVyL2FuaW1hdGlvbkZyYW1lJztcbmV4cG9ydCB7IFZpcnR1YWxUaW1lU2NoZWR1bGVyLCBWaXJ0dWFsQWN0aW9uIH0gZnJvbSAnLi9pbnRlcm5hbC9zY2hlZHVsZXIvVmlydHVhbFRpbWVTY2hlZHVsZXInO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9TY2hlZHVsZXInO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9pbnRlcm5hbC9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vaW50ZXJuYWwvU3Vic2NyaWJlcic7XG5leHBvcnQgeyBOb3RpZmljYXRpb24sIE5vdGlmaWNhdGlvbktpbmQgfSBmcm9tICcuL2ludGVybmFsL05vdGlmaWNhdGlvbic7XG5leHBvcnQgeyBwaXBlIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL3BpcGUnO1xuZXhwb3J0IHsgbm9vcCB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9ub29wJztcbmV4cG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL2lkZW50aXR5JztcbmV4cG9ydCB7IGlzT2JzZXJ2YWJsZSB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9pc09ic2VydmFibGUnO1xuZXhwb3J0IHsgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuZXhwb3J0IHsgRW1wdHlFcnJvciB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9FbXB0eUVycm9yJztcbmV4cG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmV4cG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5leHBvcnQgeyBUaW1lb3V0RXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvVGltZW91dEVycm9yJztcbmV4cG9ydCB7IGJpbmRDYWxsYmFjayB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kQ2FsbGJhY2snO1xuZXhwb3J0IHsgYmluZE5vZGVDYWxsYmFjayB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kTm9kZUNhbGxiYWNrJztcbmV4cG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvY29tYmluZUxhdGVzdCc7XG5leHBvcnQgeyBjb25jYXQgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvY29uY2F0JztcbmV4cG9ydCB7IGRlZmVyIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2RlZmVyJztcbmV4cG9ydCB7IGVtcHR5IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5JztcbmV4cG9ydCB7IGZvcmtKb2luIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2ZvcmtKb2luJztcbmV4cG9ydCB7IGZyb20gfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZnJvbSc7XG5leHBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmV4cG9ydCB7IGZyb21FdmVudFBhdHRlcm4gfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50UGF0dGVybic7XG5leHBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9nZW5lcmF0ZSc7XG5leHBvcnQgeyBpaWYgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvaWlmJztcbmV4cG9ydCB7IGludGVydmFsIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2ludGVydmFsJztcbmV4cG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlJztcbmV4cG9ydCB7IG5ldmVyIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL25ldmVyJztcbmV4cG9ydCB7IG9mIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL29mJztcbmV4cG9ydCB7IG9uRXJyb3JSZXN1bWVOZXh0IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL29uRXJyb3JSZXN1bWVOZXh0JztcbmV4cG9ydCB7IHBhaXJzIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3BhaXJzJztcbmV4cG9ydCB7IHBhcnRpdGlvbiB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYXJ0aXRpb24nO1xuZXhwb3J0IHsgcmFjZSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYWNlJztcbmV4cG9ydCB7IHJhbmdlIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhbmdlJztcbmV4cG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvdGhyb3dFcnJvcic7XG5leHBvcnQgeyB0aW1lciB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lcic7XG5leHBvcnQgeyB1c2luZyB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS91c2luZyc7XG5leHBvcnQgeyB6aXAgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvemlwJztcbmV4cG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlZCc7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eSc7XG5leHBvcnQgeyBORVZFUiB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9uZXZlcic7XG5leHBvcnQgeyBjb25maWcgfSBmcm9tICcuL2ludGVybmFsL2NvbmZpZyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YmplY3QsX1N1YnNjcmlwdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG52YXIgQXN5bmNTdWJqZWN0ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFzeW5jU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY1N1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLmhhc05leHQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGFzQ29tcGxldGVkICYmIHRoaXMuaGFzTmV4dCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fc3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBBc3luY1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5oYXNOZXh0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmVycm9yLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmhhc05leHQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuY29tcGxldGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY1N1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydCB7IEFzeW5jU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfdXRpbF9PYmplY3RVbnN1YnNjcmliZWRFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJy4vU3ViamVjdCc7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG52YXIgQmVoYXZpb3JTdWJqZWN0ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEJlaGF2aW9yU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCZWhhdmlvclN1YmplY3QoX3ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl92YWx1ZSA9IF92YWx1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IF9zdXBlci5wcm90b3R5cGUuX3N1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uICYmICFzdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5fdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy50aHJvd25FcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB0aGlzLl92YWx1ZSA9IHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBCZWhhdmlvclN1YmplY3Q7XG59KFN1YmplY3QpKTtcbmV4cG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmVoYXZpb3JTdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaWJlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG52YXIgSW5uZXJTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKElubmVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbm5lclN1YnNjcmliZXIocGFyZW50LCBvdXRlclZhbHVlLCBvdXRlckluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgX3RoaXMub3V0ZXJWYWx1ZSA9IG91dGVyVmFsdWU7XG4gICAgICAgIF90aGlzLm91dGVySW5kZXggPSBvdXRlckluZGV4O1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlOZXh0KHRoaXMub3V0ZXJWYWx1ZSwgdmFsdWUsIHRoaXMub3V0ZXJJbmRleCwgdGhpcy5pbmRleCsrLCB0aGlzKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUVycm9yKGVycm9yLCB0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgSW5uZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Lm5vdGlmeUNvbXBsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW5uZXJTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBJbm5lclN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlubmVyU3Vic2NyaWJlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX29ic2VydmFibGVfZW1wdHksX29ic2VydmFibGVfb2YsX29ic2VydmFibGVfdGhyb3dFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBlbXB0eSB9IGZyb20gJy4vb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJy4vb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAnLi9vYnNlcnZhYmxlL3Rocm93RXJyb3InO1xuZXhwb3J0IHZhciBOb3RpZmljYXRpb25LaW5kO1xuLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKE5vdGlmaWNhdGlvbktpbmQpIHtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiTkVYVFwiXSA9IFwiTlwiO1xuICAgIE5vdGlmaWNhdGlvbktpbmRbXCJFUlJPUlwiXSA9IFwiRVwiO1xuICAgIE5vdGlmaWNhdGlvbktpbmRbXCJDT01QTEVURVwiXSA9IFwiQ1wiO1xufSkoTm90aWZpY2F0aW9uS2luZCB8fCAoTm90aWZpY2F0aW9uS2luZCA9IHt9KSk7XG52YXIgTm90aWZpY2F0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbihraW5kLCB2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuaGFzVmFsdWUgPSBraW5kID09PSAnTic7XG4gICAgfVxuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBzd2l0Y2ggKHRoaXMua2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQgJiYgb2JzZXJ2ZXIubmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvciAmJiBvYnNlcnZlci5lcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSAmJiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIga2luZCA9IHRoaXMua2luZDtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dCAmJiBuZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24gKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyICYmIHR5cGVvZiBuZXh0T3JPYnNlcnZlci5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKG5leHRPck9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgbm90aWZpY2F0aW9uIGtpbmQgdmFsdWUnKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignTicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uLnVuZGVmaW5lZFZhbHVlTm90aWZpY2F0aW9uO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbjtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jb21wbGV0ZU5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oJ0MnKTtcbiAgICBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdOJywgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE5vdGlmaWNhdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZpY2F0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfdXRpbF9jYW5SZXBvcnRFcnJvcixfdXRpbF90b1N1YnNjcmliZXIsX3N5bWJvbF9vYnNlcnZhYmxlLF91dGlsX3BpcGUsX2NvbmZpZyBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBjYW5SZXBvcnRFcnJvciB9IGZyb20gJy4vdXRpbC9jYW5SZXBvcnRFcnJvcic7XG5pbXBvcnQgeyB0b1N1YnNjcmliZXIgfSBmcm9tICcuL3V0aWwvdG9TdWJzY3JpYmVyJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG52YXIgT2JzZXJ2YWJsZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IGZhbHNlO1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcy5zb3VyY2UpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKHRoaXMuc291cmNlIHx8IChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiAhc2luay5zeW5jRXJyb3JUaHJvd2FibGUpID9cbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc2luaykgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzaW5rKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2luaztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtTeW1ib2xfb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gdmFsdWUgPSB4OyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICBwcm9taXNlQ3RvciA9IGNvbmZpZy5Qcm9taXNlIHx8IFByb21pc2U7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2VDdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2NvbmZpZyxfdXRpbF9ob3N0UmVwb3J0RXJyb3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaG9zdFJlcG9ydEVycm9yIH0gZnJvbSAnLi91dGlsL2hvc3RSZXBvcnRFcnJvcic7XG5leHBvcnQgdmFyIGVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbnZhciBPdXRlclN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE91dGVyU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3V0ZXJTdWJzY3JpYmVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfc2NoZWR1bGVyX3F1ZXVlLF9TdWJzY3JpcHRpb24sX29wZXJhdG9yc19vYnNlcnZlT24sX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IsX1N1YmplY3RTdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgcXVldWUgfSBmcm9tICcuL3NjaGVkdWxlci9xdWV1ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlT25TdWJzY3JpYmVyIH0gZnJvbSAnLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YmplY3RTdWJzY3JpcHRpb24nO1xudmFyIFJlcGxheVN1YmplY3QgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVwbGF5U3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1RpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICBpZiAoYnVmZmVyU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBidWZmZXJTaXplID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHdpbmRvd1RpbWUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX2J1ZmZlclNpemUgPSBidWZmZXJTaXplIDwgMSA/IDEgOiBidWZmZXJTaXplO1xuICAgICAgICBfdGhpcy5fd2luZG93VGltZSA9IHdpbmRvd1RpbWUgPCAxID8gMSA6IHdpbmRvd1RpbWU7XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHRJbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0ID0gX3RoaXMubmV4dFRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5uZXh0SW5maW5pdGVUaW1lV2luZG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgICBfZXZlbnRzLnB1c2godmFsdWUpO1xuICAgICAgICBpZiAoX2V2ZW50cy5sZW5ndGggPiB0aGlzLl9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICBfZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUubmV4dFRpbWVXaW5kb3cgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2gobmV3IFJlcGxheUV2ZW50KHRoaXMuX2dldE5vdygpLCB2YWx1ZSkpO1xuICAgICAgICB0aGlzLl90cmltQnVmZmVyVGhlbkdldEV2ZW50cygpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIHZhciBfZXZlbnRzID0gX2luZmluaXRlVGltZVdpbmRvdyA/IHRoaXMuX2V2ZW50cyA6IHRoaXMuX3RyaW1CdWZmZXJUaGVuR2V0RXZlbnRzKCk7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGxlbiA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkIHx8IHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzdWJzY3JpYmVyID0gbmV3IE9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgc2NoZWR1bGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbmZpbml0ZVRpbWVXaW5kb3cpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KF9ldmVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoX2V2ZW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUuX2dldE5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjaGVkdWxlciB8fCBxdWV1ZSkubm93KCk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLl9nZXROb3coKTtcbiAgICAgICAgdmFyIF9idWZmZXJTaXplID0gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgICAgICAgdmFyIF93aW5kb3dUaW1lID0gdGhpcy5fd2luZG93VGltZTtcbiAgICAgICAgdmFyIF9ldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgIHZhciBldmVudHNDb3VudCA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3BsaWNlQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoc3BsaWNlQ291bnQgPCBldmVudHNDb3VudCkge1xuICAgICAgICAgICAgaWYgKChub3cgLSBfZXZlbnRzW3NwbGljZUNvdW50XS50aW1lKSA8IF93aW5kb3dUaW1lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpY2VDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudHNDb3VudCA+IF9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICBzcGxpY2VDb3VudCA9IE1hdGgubWF4KHNwbGljZUNvdW50LCBldmVudHNDb3VudCAtIF9idWZmZXJTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BsaWNlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBfZXZlbnRzLnNwbGljZSgwLCBzcGxpY2VDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ldmVudHM7XG4gICAgfTtcbiAgICByZXR1cm4gUmVwbGF5U3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgUmVwbGF5U3ViamVjdCB9O1xudmFyIFJlcGxheUV2ZW50ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcGxheUV2ZW50KHRpbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlcGxheUV2ZW50O1xufSgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlcGxheVN1YmplY3QuanMubWFwXG4iLCJ2YXIgU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG5vdyA9IFNjaGVkdWxlci5ub3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5TY2hlZHVsZXJBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5ub3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBEYXRlLm5vdygpOyB9O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9PYnNlcnZhYmxlLF9TdWJzY3JpYmVyLF9TdWJzY3JpcHRpb24sX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IsX1N1YmplY3RTdWJzY3JpcHRpb24sX2ludGVybmFsX3N5bWJvbF9yeFN1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBTdWJqZWN0U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJqZWN0U3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbnZhciBTdWJqZWN0U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU3ViamVjdFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFN1YmplY3RTdWJzY3JpYmVyIH07XG52YXIgU3ViamVjdCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpYmVyKHRoaXMpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5W2ldLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3RyeVN1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRoaXMudGhyb3duRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgU3ViamVjdCB9O1xudmFyIEFub255bW91c1N1YmplY3QgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQW5vbnltb3VzU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgX3RoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLm5leHQpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBbm9ueW1vdXNTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnQgeyBBbm9ueW1vdXNTdWJqZWN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaXB0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gc3ViamVjdC5vYnNlcnZlcnM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDAgfHwgc3ViamVjdC5pc1N0b3BwZWQgfHwgc3ViamVjdC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgU3ViamVjdFN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdFN1YnNjcmlwdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX3V0aWxfaXNGdW5jdGlvbixfT2JzZXJ2ZXIsX1N1YnNjcmlwdGlvbixfaW50ZXJuYWxfc3ltYm9sX3J4U3Vic2NyaWJlcixfY29uZmlnLF91dGlsX2hvc3RSZXBvcnRFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVtcHR5IGFzIGVtcHR5T2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGhvc3RSZXBvcnRFcnJvciB9IGZyb20gJy4vdXRpbC9ob3N0UmVwb3J0RXJyb3InO1xudmFyIFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGVtcHR5T2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGVtcHR5T2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBkZXN0aW5hdGlvbk9yTmV4dC5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uT3JOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Pck5leHQuYWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSB0aGlzLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBTdWJzY3JpYmVyIH07XG52YXIgU2FmZVN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudFN1YnNjcmliZXIsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBfcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3RoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBlbXB0eU9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQudW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZChjb250ZXh0LnVuc3Vic2NyaWJlLmJpbmQoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gX3RoaXMudW5zdWJzY3JpYmUuYmluZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG5leHQ7XG4gICAgICAgIF90aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9uZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fbmV4dCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICB2YXIgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyA9IGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jb21wbGV0ZS5jYWxsKF90aGlzLl9jb250ZXh0KTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIod3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JTZXRFcnJvciA9IGZ1bmN0aW9uIChwYXJlbnQsIGZuLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBjYWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgX3BhcmVudFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2FmZVN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF91dGlsX2lzQXJyYXksX3V0aWxfaXNPYmplY3QsX3V0aWxfaXNGdW5jdGlvbixfdXRpbF9VbnN1YnNjcmlwdGlvbkVycm9yIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vdXRpbC9pc09iamVjdCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbnZhciBTdWJzY3JpcHRpb24gPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudE9yUGFyZW50cyA9IF9hLl9wYXJlbnRPclBhcmVudHMsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnRPclBhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIF9wYXJlbnRPclBhcmVudHMucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRPclBhcmVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBfcGFyZW50T3JQYXJlbnRzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRPclBhcmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbihfdW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykgOiBbZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHN1YikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRlYXJkb3duO1xuICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRlYXJkb3duKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0ZWFyZG93bik7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IHRoaXMgfHwgc3Vic2NyaXB0aW9uLmNsb3NlZCB8fCB0eXBlb2Ygc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghKHN1YnNjcmlwdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24uX3N1YnNjcmlwdGlvbnMgPSBbdG1wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgdGVhcmRvd24gJyArIHRlYXJkb3duICsgJyBhZGRlZCB0byBTdWJzY3JpcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fcGFyZW50T3JQYXJlbnRzID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IFtfcGFyZW50T3JQYXJlbnRzLCB0aGlzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfcGFyZW50T3JQYXJlbnRzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICAgICAgICBfcGFyZW50T3JQYXJlbnRzLnB1c2godGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbkluZGV4ID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5zcGxpY2Uoc3Vic2NyaXB0aW9uSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKGVtcHR5KSB7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KG5ldyBTdWJzY3JpcHRpb24oKSkpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH07XG5mdW5jdGlvbiBmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5yZWR1Y2UoZnVuY3Rpb24gKGVycnMsIGVycikgeyByZXR1cm4gZXJycy5jb25jYXQoKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpID8gZXJyLmVycm9ycyA6IGVycik7IH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSBmYWxzZTtcbmV4cG9ydCB2YXIgY29uZmlnID0ge1xuICAgIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgICBzZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IC8qQF9fUFVSRV9fKi8gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAvKkBfX1BVUkVfXyovIGNvbnNvbGUud2FybignREVQUkVDQVRFRCEgUnhKUyB3YXMgc2V0IHRvIHVzZSBkZXByZWNhdGVkIHN5bmNocm9ub3VzIGVycm9yIGhhbmRsaW5nIGJlaGF2aW9yIGJ5IGNvZGUgYXQ6IFxcbicgKyBlcnJvci5zdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzKSB7XG4gICAgICAgICAgICAvKkBfX1BVUkVfXyovIGNvbnNvbGUubG9nKCdSeEpTOiBCYWNrIHRvIGEgYmV0dGVyIGVycm9yIGJlaGF2aW9yLiBUaGFuayB5b3UuIDwzJyk7XG4gICAgICAgIH1cbiAgICAgICAgX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZygpIHtcbiAgICAgICAgcmV0dXJuIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncztcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YmplY3QsX09ic2VydmFibGUsX1N1YnNjcmliZXIsX1N1YnNjcmlwdGlvbixfb3BlcmF0b3JzX3JlZkNvdW50IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJqZWN0U3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YmplY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJlZkNvdW50IGFzIGhpZ2hlck9yZGVyUmVmQ291bnQgfSBmcm9tICcuLi9vcGVyYXRvcnMvcmVmQ291bnQnO1xudmFyIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb25uZWN0YWJsZU9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGFibGVPYnNlcnZhYmxlKHNvdXJjZSwgc3ViamVjdEZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICBfdGhpcy5zdWJqZWN0RmFjdG9yeSA9IHN1YmplY3RGYWN0b3J5O1xuICAgICAgICBfdGhpcy5fcmVmQ291bnQgPSAwO1xuICAgICAgICBfdGhpcy5faXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YmplY3QoKS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLmdldFN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5fc3ViamVjdDtcbiAgICAgICAgaWYgKCFzdWJqZWN0IHx8IHN1YmplY3QuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJqZWN0ID0gdGhpcy5zdWJqZWN0RmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJqZWN0O1xuICAgIH07XG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuX2Nvbm5lY3Rpb247XG4gICAgICAgIGlmICghY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29ubmVjdGlvbiA9IHRoaXMuX2Nvbm5lY3Rpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmFkZCh0aGlzLnNvdXJjZVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobmV3IENvbm5lY3RhYmxlU3Vic2NyaWJlcih0aGlzLmdldFN1YmplY3QoKSwgdGhpcykpKTtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLnJlZkNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGlnaGVyT3JkZXJSZWZDb3VudCgpKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgQ29ubmVjdGFibGVPYnNlcnZhYmxlIH07XG5leHBvcnQgdmFyIGNvbm5lY3RhYmxlT2JzZXJ2YWJsZURlc2NyaXB0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbm5lY3RhYmxlUHJvdG8gPSBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wZXJhdG9yOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgIF9yZWZDb3VudDogeyB2YWx1ZTogMCwgd3JpdGFibGU6IHRydWUgfSxcbiAgICAgICAgX3N1YmplY3Q6IHsgdmFsdWU6IG51bGwsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgIF9jb25uZWN0aW9uOiB7IHZhbHVlOiBudWxsLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICBfc3Vic2NyaWJlOiB7IHZhbHVlOiBjb25uZWN0YWJsZVByb3RvLl9zdWJzY3JpYmUgfSxcbiAgICAgICAgX2lzQ29tcGxldGU6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uX2lzQ29tcGxldGUsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgIGdldFN1YmplY3Q6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uZ2V0U3ViamVjdCB9LFxuICAgICAgICBjb25uZWN0OiB7IHZhbHVlOiBjb25uZWN0YWJsZVByb3RvLmNvbm5lY3QgfSxcbiAgICAgICAgcmVmQ291bnQ6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8ucmVmQ291bnQgfVxuICAgIH07XG59KSgpO1xudmFyIENvbm5lY3RhYmxlU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb25uZWN0YWJsZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGFibGVTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBjb25uZWN0YWJsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25uZWN0YWJsZVN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5fZXJyb3IuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH07XG4gICAgQ29ubmVjdGFibGVTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUuX2lzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgQ29ubmVjdGFibGVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmIChjb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gMDtcbiAgICAgICAgICAgIGNvbm5lY3RhYmxlLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGFibGVTdWJzY3JpYmVyO1xufShTdWJqZWN0U3Vic2NyaWJlcikpO1xudmFyIFJlZkNvdW50T3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVmQ291bnRPcGVyYXRvcihjb25uZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgfVxuICAgIFJlZkNvdW50T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCsrO1xuICAgICAgICB2YXIgcmVmQ291bnRlciA9IG5ldyBSZWZDb3VudFN1YnNjcmliZXIoc3Vic2NyaWJlciwgY29ubmVjdGFibGUpO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc291cmNlLnN1YnNjcmliZShyZWZDb3VudGVyKTtcbiAgICAgICAgaWYgKCFyZWZDb3VudGVyLmNsb3NlZCkge1xuICAgICAgICAgICAgcmVmQ291bnRlci5jb25uZWN0aW9uID0gY29ubmVjdGFibGUuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gUmVmQ291bnRPcGVyYXRvcjtcbn0oKSk7XG52YXIgUmVmQ291bnRTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFJlZkNvdW50U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZWZDb3VudFN1YnNjcmliZXIoZGVzdGluYXRpb24sIGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlZkNvdW50U3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgICAgICBpZiAoIWNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBudWxsO1xuICAgICAgICB2YXIgcmVmQ291bnQgPSBjb25uZWN0YWJsZS5fcmVmQ291bnQ7XG4gICAgICAgIGlmIChyZWZDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RhYmxlLl9yZWZDb3VudCA9IHJlZkNvdW50IC0gMTtcbiAgICAgICAgaWYgKHJlZkNvdW50ID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgdmFyIHNoYXJlZENvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5fY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKHNoYXJlZENvbm5lY3Rpb24gJiYgKCFjb25uZWN0aW9uIHx8IHNoYXJlZENvbm5lY3Rpb24gPT09IGNvbm5lY3Rpb24pKSB7XG4gICAgICAgICAgICBzaGFyZWRDb25uZWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbm5lY3RhYmxlT2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX0FzeW5jU3ViamVjdCxfb3BlcmF0b3JzX21hcCxfdXRpbF9jYW5SZXBvcnRFcnJvcixfdXRpbF9pc0FycmF5LF91dGlsX2lzU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFzeW5jU3ViamVjdCB9IGZyb20gJy4uL0FzeW5jU3ViamVjdCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuLi9vcGVyYXRvcnMvbWFwJztcbmltcG9ydCB7IGNhblJlcG9ydEVycm9yIH0gZnJvbSAnLi4vdXRpbC9jYW5SZXBvcnRFcnJvcic7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5leHBvcnQgZnVuY3Rpb24gYmluZENhbGxiYWNrKGNhbGxiYWNrRnVuYywgcmVzdWx0U2VsZWN0b3IsIHNjaGVkdWxlcikge1xuICAgIGlmIChyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICBpZiAoaXNTY2hlZHVsZXIocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kQ2FsbGJhY2soY2FsbGJhY2tGdW5jLCBzY2hlZHVsZXIpLmFwcGx5KHZvaWQgMCwgYXJncykucGlwZShtYXAoZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIGlzQXJyYXkoYXJncykgPyByZXN1bHRTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpIDogcmVzdWx0U2VsZWN0b3IoYXJncyk7IH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJqZWN0O1xuICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmM6IGNhbGxiYWNrRnVuYyxcbiAgICAgICAgICAgIHNjaGVkdWxlcjogc2NoZWR1bGVyLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlubmVyQXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dChpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KFtoYW5kbGVyXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcihzdWJqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJncywgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gc3RhdGUuYXJncywgc3Vic2NyaWJlciA9IHN0YXRlLnN1YnNjcmliZXIsIHBhcmFtcyA9IHN0YXRlLnBhcmFtcztcbiAgICB2YXIgY2FsbGJhY2tGdW5jID0gcGFyYW1zLmNhbGxiYWNrRnVuYywgY29udGV4dCA9IHBhcmFtcy5jb250ZXh0LCBzY2hlZHVsZXIgPSBwYXJhbXMuc2NoZWR1bGVyO1xuICAgIHZhciBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3Q7XG4gICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5uZXJBcmdzLmxlbmd0aCA8PSAxID8gaW5uZXJBcmdzWzBdIDogaW5uZXJBcmdzO1xuICAgICAgICAgICAgX3RoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIDAsIHsgdmFsdWU6IHZhbHVlLCBzdWJqZWN0OiBzdWJqZWN0IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChbaGFuZGxlcl0pKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGQoc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0KHN0YXRlKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWUsIHN1YmplY3QgPSBzdGF0ZS5zdWJqZWN0O1xuICAgIHN1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgc3ViamVjdC5jb21wbGV0ZSgpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hFcnJvcihzdGF0ZSkge1xuICAgIHZhciBlcnIgPSBzdGF0ZS5lcnIsIHN1YmplY3QgPSBzdGF0ZS5zdWJqZWN0O1xuICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmRDYWxsYmFjay5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX0FzeW5jU3ViamVjdCxfb3BlcmF0b3JzX21hcCxfdXRpbF9jYW5SZXBvcnRFcnJvcixfdXRpbF9pc1NjaGVkdWxlcixfdXRpbF9pc0FycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFzeW5jU3ViamVjdCB9IGZyb20gJy4uL0FzeW5jU3ViamVjdCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuLi9vcGVyYXRvcnMvbWFwJztcbmltcG9ydCB7IGNhblJlcG9ydEVycm9yIH0gZnJvbSAnLi4vdXRpbC9jYW5SZXBvcnRFcnJvcic7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gYmluZE5vZGVDYWxsYmFjayhjYWxsYmFja0Z1bmMsIHJlc3VsdFNlbGVjdG9yLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKGlzU2NoZWR1bGVyKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgc2NoZWR1bGVyID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZE5vZGVDYWxsYmFjayhjYWxsYmFja0Z1bmMsIHNjaGVkdWxlcikuYXBwbHkodm9pZCAwLCBhcmdzKS5waXBlKG1hcChmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gaXNBcnJheShhcmdzKSA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKTsgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jOiBjYWxsYmFja0Z1bmMsXG4gICAgICAgICAgICBzY2hlZHVsZXI6IHNjaGVkdWxlcixcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBwYXJhbXMuY29udGV4dDtcbiAgICAgICAgICAgIHZhciBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3Q7XG4gICAgICAgICAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICAgICAgICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlubmVyQXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBpbm5lckFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KGlubmVyQXJncy5sZW5ndGggPD0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoW2hhbmRsZXJdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhblJlcG9ydEVycm9yKHN1YmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBwYXJhbXM6IHBhcmFtcywgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgY29udGV4dDogY29udGV4dCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3RhdGUucGFyYW1zLCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlciwgY29udGV4dCA9IHN0YXRlLmNvbnRleHQ7XG4gICAgdmFyIGNhbGxiYWNrRnVuYyA9IHBhcmFtcy5jYWxsYmFja0Z1bmMsIGFyZ3MgPSBwYXJhbXMuYXJncywgc2NoZWR1bGVyID0gcGFyYW1zLnNjaGVkdWxlcjtcbiAgICB2YXIgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0O1xuICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlubmVyQXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBpbm5lckFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlcnIgPSBpbm5lckFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoRXJyb3IsIDAsIHsgZXJyOiBlcnIsIHN1YmplY3Q6IHN1YmplY3QgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5uZXJBcmdzLmxlbmd0aCA8PSAxID8gaW5uZXJBcmdzWzBdIDogaW5uZXJBcmdzO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCAwLCB7IHZhbHVlOiB2YWx1ZSwgc3ViamVjdDogc3ViamVjdCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFja0Z1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoW2hhbmRsZXJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoRXJyb3IsIDAsIHsgZXJyOiBlcnIsIHN1YmplY3Q6IHN1YmplY3QgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkKHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChhcmcpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmcudmFsdWUsIHN1YmplY3QgPSBhcmcuc3ViamVjdDtcbiAgICBzdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIHN1YmplY3QuY29tcGxldGUoKTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoRXJyb3IoYXJnKSB7XG4gICAgdmFyIGVyciA9IGFyZy5lcnIsIHN1YmplY3QgPSBhcmcuc3ViamVjdDtcbiAgICBzdWJqZWN0LmVycm9yKGVycik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5kTm9kZUNhbGxiYWNrLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfdXRpbF9pc1NjaGVkdWxlcixfdXRpbF9pc0FycmF5LF9PdXRlclN1YnNjcmliZXIsX3V0aWxfc3Vic2NyaWJlVG9SZXN1bHQsX2Zyb21BcnJheSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgT3V0ZXJTdWJzY3JpYmVyIH0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7IHN1YnNjcmliZVRvUmVzdWx0IH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2Zyb21BcnJheSc7XG52YXIgTk9ORSA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3QoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yID0gbnVsbDtcbiAgICB2YXIgc2NoZWR1bGVyID0gbnVsbDtcbiAgICBpZiAoaXNTY2hlZHVsZXIob2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdFNlbGVjdG9yID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShvYnNlcnZhYmxlc1swXSkpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheShvYnNlcnZhYmxlcywgc2NoZWR1bGVyKS5saWZ0KG5ldyBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbnZhciBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tYmluZUxhdGVzdE9wZXJhdG9yKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgQ29tYmluZUxhdGVzdE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5yZXN1bHRTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBDb21iaW5lTGF0ZXN0T3BlcmF0b3IgfTtcbnZhciBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb21iaW5lTGF0ZXN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IDA7XG4gICAgICAgIF90aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2goTk9ORSk7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlcyA9IHRoaXMub2JzZXJ2YWJsZXM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZhYmxlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICAgICAgdGhpcy50b1Jlc3BvbmQgPSBsZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBvYnNlcnZhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBvYnNlcnZhYmxlLCBvYnNlcnZhYmxlLCBpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uICh1bnVzZWQpIHtcbiAgICAgICAgaWYgKCh0aGlzLmFjdGl2ZSAtPSAxKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbGRWYWwgPSB2YWx1ZXNbb3V0ZXJJbmRleF07XG4gICAgICAgIHZhciB0b1Jlc3BvbmQgPSAhdGhpcy50b1Jlc3BvbmRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBvbGRWYWwgPT09IE5PTkUgPyAtLXRoaXMudG9SZXNwb25kIDogdGhpcy50b1Jlc3BvbmQ7XG4gICAgICAgIHZhbHVlc1tvdXRlckluZGV4XSA9IGlubmVyVmFsdWU7XG4gICAgICAgIGlmICh0b1Jlc3BvbmQgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5UmVzdWx0U2VsZWN0b3IodmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZXMuc2xpY2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5UmVzdWx0U2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnJlc3VsdFNlbGVjdG9yLmFwcGx5KHRoaXMsIHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21iaW5lTGF0ZXN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfb2YsX29wZXJhdG9yc19jb25jYXRBbGwgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgb2YgfSBmcm9tICcuL29mJztcbmltcG9ydCB7IGNvbmNhdEFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9jb25jYXRBbGwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gY29uY2F0QWxsKCkob2YuYXBwbHkodm9pZCAwLCBvYnNlcnZhYmxlcykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uY2F0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfZnJvbSxfZW1wdHkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4vZnJvbSc7XG5pbXBvcnQgeyBlbXB0eSB9IGZyb20gJy4vZW1wdHknO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyKG9ic2VydmFibGVGYWN0b3J5KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbnB1dDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlucHV0ID0gb2JzZXJ2YWJsZUZhY3RvcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzb3VyY2UgPSBpbnB1dCA/IGZyb20oaW5wdXQpIDogZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IHZhciBFTVBUWSA9IC8qQF9fUFVSRV9fKi8gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7XG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNjaGVkdWxlciA/IGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikgOiBFTVBUWTtcbn1cbmZ1bmN0aW9uIGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF91dGlsX2lzQXJyYXksX29wZXJhdG9yc19tYXAsX3V0aWxfaXNPYmplY3QsX2Zyb20gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuLi9vcGVyYXRvcnMvbWFwJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vdXRpbC9pc09iamVjdCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmV4cG9ydCBmdW5jdGlvbiBmb3JrSm9pbigpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBmaXJzdF8xID0gc291cmNlc1swXTtcbiAgICAgICAgaWYgKGlzQXJyYXkoZmlyc3RfMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbkludGVybmFsKGZpcnN0XzEsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09iamVjdChmaXJzdF8xKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZmlyc3RfMSkgPT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZmlyc3RfMSk7XG4gICAgICAgICAgICByZXR1cm4gZm9ya0pvaW5JbnRlcm5hbChrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmaXJzdF8xW2tleV07IH0pLCBrZXlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHNvdXJjZXNbc291cmNlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcmVzdWx0U2VsZWN0b3JfMSA9IHNvdXJjZXMucG9wKCk7XG4gICAgICAgIHNvdXJjZXMgPSAoc291cmNlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShzb3VyY2VzWzBdKSkgPyBzb3VyY2VzWzBdIDogc291cmNlcztcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luSW50ZXJuYWwoc291cmNlcywgbnVsbCkucGlwZShtYXAoZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIHJlc3VsdFNlbGVjdG9yXzEuYXBwbHkodm9pZCAwLCBhcmdzKTsgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ya0pvaW5JbnRlcm5hbChzb3VyY2VzLCBudWxsKTtcbn1cbmZ1bmN0aW9uIGZvcmtKb2luSW50ZXJuYWwoc291cmNlcywga2V5cykge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgbGVuID0gc291cmNlcy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICAgIHZhciBjb21wbGV0ZWQgPSAwO1xuICAgICAgICB2YXIgZW1pdHRlZCA9IDA7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBmcm9tKHNvdXJjZXNbaV0pO1xuICAgICAgICAgICAgdmFyIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzb3VyY2Uuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHRlZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gbGVuIHx8ICFoYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVtaXR0ZWQgPT09IGxlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChrZXlzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5LCBpKSB7IHJldHVybiAocmVzdWx0W2tleV0gPSB2YWx1ZXNbaV0sIHJlc3VsdCk7IH0sIHt9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcmtKb2luLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9zdWJzY3JpYmVUbyxfc2NoZWR1bGVkX3NjaGVkdWxlZCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUbyB9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG8nO1xuaW1wb3J0IHsgc2NoZWR1bGVkIH0gZnJvbSAnLi4vc2NoZWR1bGVkL3NjaGVkdWxlZCc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUbyhpbnB1dCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9zdWJzY3JpYmVUb0FycmF5LF9zY2hlZHVsZWRfc2NoZWR1bGVBcnJheSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb0FycmF5IH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb0FycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlQXJyYXkgfSBmcm9tICcuLi9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlVG9BcnJheShpbnB1dCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUFycmF5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pc0FycmF5LF91dGlsX2lzRnVuY3Rpb24sX29wZXJhdG9yc19tYXAgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xudmFyIHRvU3RyaW5nID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzsgfSkoKTtcbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykucGlwZShtYXAoZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIGlzQXJyYXkoYXJncykgPyByZXN1bHRTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpIDogcmVzdWx0U2VsZWN0b3IoYXJncyk7IH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldHVwU3Vic2NyaXB0aW9uKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyLCBvcHRpb25zKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldHVwU3Vic2NyaXB0aW9uKHNvdXJjZU9iaiwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHVuc3Vic2NyaWJlO1xuICAgIGlmIChpc0V2ZW50VGFyZ2V0KHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8xID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmouYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvdXJjZV8xLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopKSB7XG4gICAgICAgIHZhciBzb3VyY2VfMiA9IHNvdXJjZU9iajtcbiAgICAgICAgc291cmNlT2JqLm9uKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlXzIub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8zID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmouYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpOyB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChzb3VyY2VPYmogJiYgc291cmNlT2JqLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlT2JqLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzZXR1cFN1YnNjcmlwdGlvbihzb3VyY2VPYmpbaV0sIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZXZlbnQgdGFyZ2V0Jyk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuYWRkKHVuc3Vic2NyaWJlKTtcbn1cbmZ1bmN0aW9uIGlzTm9kZVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc291cmNlT2JqLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopIHtcbiAgICByZXR1cm4gc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmoub24gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5vZmYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc0V2ZW50VGFyZ2V0KHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21FdmVudC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3V0aWxfaXNBcnJheSxfdXRpbF9pc0Z1bmN0aW9uLF9vcGVyYXRvcnNfbWFwIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuLi9vcGVyYXRvcnMvbWFwJztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXZlbnRQYXR0ZXJuKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnRQYXR0ZXJuKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIpLnBpcGUobWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBpc0FycmF5KGFyZ3MpID8gcmVzdWx0U2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKSA6IHJlc3VsdFNlbGVjdG9yKGFyZ3MpOyB9KSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGVbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyLm5leHQoZS5sZW5ndGggPT09IDEgPyBlWzBdIDogZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXRWYWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldFZhbHVlID0gYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihyZW1vdmVIYW5kbGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlSGFuZGxlcihoYW5kbGVyLCByZXRWYWx1ZSk7IH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tRXZlbnRQYXR0ZXJuLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pZGVudGl0eSxfdXRpbF9pc1NjaGVkdWxlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZShpbml0aWFsU3RhdGVPck9wdGlvbnMsIGNvbmRpdGlvbiwgaXRlcmF0ZSwgcmVzdWx0U2VsZWN0b3JPck9ic2VydmFibGUsIHNjaGVkdWxlcikge1xuICAgIHZhciByZXN1bHRTZWxlY3RvcjtcbiAgICB2YXIgaW5pdGlhbFN0YXRlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBpbml0aWFsU3RhdGVPck9wdGlvbnM7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IG9wdGlvbnMuaW5pdGlhbFN0YXRlO1xuICAgICAgICBjb25kaXRpb24gPSBvcHRpb25zLmNvbmRpdGlvbjtcbiAgICAgICAgaXRlcmF0ZSA9IG9wdGlvbnMuaXRlcmF0ZTtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvcHRpb25zLnJlc3VsdFNlbGVjdG9yIHx8IGlkZW50aXR5O1xuICAgICAgICBzY2hlZHVsZXIgPSBvcHRpb25zLnNjaGVkdWxlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVzdWx0U2VsZWN0b3JPck9ic2VydmFibGUgPT09IHVuZGVmaW5lZCB8fCBpc1NjaGVkdWxlcihyZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlT3JPcHRpb25zO1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IGlkZW50aXR5O1xuICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZU9yT3B0aW9ucztcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsXG4gICAgICAgICAgICAgICAgaXRlcmF0ZTogaXRlcmF0ZSxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICByZXN1bHRTZWxlY3RvcjogcmVzdWx0U2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmRpdGlvblJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25SZXN1bHQgPSBjb25kaXRpb24oc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb25kaXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0U2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGl0ZXJhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBjb25kaXRpb24gPSBzdGF0ZS5jb25kaXRpb247XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5uZWVkSXRlcmF0ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhdGUuc3RhdGUgPSBzdGF0ZS5pdGVyYXRlKHN0YXRlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5uZWVkSXRlcmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIGNvbmRpdGlvblJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IGNvbmRpdGlvbihzdGF0ZS5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbmRpdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gc3RhdGUucmVzdWx0U2VsZWN0b3Ioc3RhdGUuc3RhdGUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlbmVyYXRlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfZGVmZXIsX2VtcHR5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGRlZmVyIH0gZnJvbSAnLi9kZWZlcic7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4vZW1wdHknO1xuZXhwb3J0IGZ1bmN0aW9uIGlpZihjb25kaXRpb24sIHRydWVSZXN1bHQsIGZhbHNlUmVzdWx0KSB7XG4gICAgaWYgKHRydWVSZXN1bHQgPT09IHZvaWQgMCkge1xuICAgICAgICB0cnVlUmVzdWx0ID0gRU1QVFk7XG4gICAgfVxuICAgIGlmIChmYWxzZVJlc3VsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZhbHNlUmVzdWx0ID0gRU1QVFk7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBjb25kaXRpb24oKSA/IHRydWVSZXN1bHQgOiBmYWxzZVJlc3VsdDsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1paWYuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9zY2hlZHVsZXJfYXN5bmMsX3V0aWxfaXNOdW1lcmljIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWwvaXNOdW1lcmljJztcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbChwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkge1xuICAgICAgICBwZXJpb2QgPSAwO1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmM7XG4gICAgfVxuICAgIGlmICghaXNOdW1lcmljKHBlcmlvZCkgfHwgcGVyaW9kIDwgMCkge1xuICAgICAgICBwZXJpb2QgPSAwO1xuICAgIH1cbiAgICBpZiAoIXNjaGVkdWxlciB8fCB0eXBlb2Ygc2NoZWR1bGVyLnNjaGVkdWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IGFzeW5jO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCBwZXJpb2QsIHsgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgY291bnRlcjogMCwgcGVyaW9kOiBwZXJpb2QgfSkpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBjb3VudGVyID0gc3RhdGUuY291bnRlciwgcGVyaW9kID0gc3RhdGUucGVyaW9kO1xuICAgIHN1YnNjcmliZXIubmV4dChjb3VudGVyKTtcbiAgICB0aGlzLnNjaGVkdWxlKHsgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgY291bnRlcjogY291bnRlciArIDEsIHBlcmlvZDogcGVyaW9kIH0sIHBlcmlvZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3V0aWxfaXNTY2hlZHVsZXIsX29wZXJhdG9yc19tZXJnZUFsbCxfZnJvbUFycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9tZXJnZUFsbCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2Zyb21BcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgdmFyIHNjaGVkdWxlciA9IG51bGw7XG4gICAgdmFyIGxhc3QgPSBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoaXNTY2hlZHVsZXIobGFzdCkpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPiAxICYmIHR5cGVvZiBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbnQgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbGFzdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uY3VycmVudCA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVyID09PSBudWxsICYmIG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBvYnNlcnZhYmxlc1swXSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VBbGwoY29uY3VycmVudCkoZnJvbUFycmF5KG9ic2VydmFibGVzLCBzY2hlZHVsZXIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9ub29wIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlsL25vb3AnO1xuZXhwb3J0IHZhciBORVZFUiA9IC8qQF9fUFVSRV9fKi8gbmV3IE9ic2VydmFibGUobm9vcCk7XG5leHBvcnQgZnVuY3Rpb24gbmV2ZXIoKSB7XG4gICAgcmV0dXJuIE5FVkVSO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV2ZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF91dGlsX2lzU2NoZWR1bGVyLF9mcm9tQXJyYXksX3NjaGVkdWxlZF9zY2hlZHVsZUFycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2Zyb21BcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi4vc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXknO1xuZXhwb3J0IGZ1bmN0aW9uIG9mKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgc2NoZWR1bGVyID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChpc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZUFycmF5KGFyZ3MsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZnJvbUFycmF5KGFyZ3MpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9mLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfZnJvbSxfdXRpbF9pc0FycmF5LF9lbXB0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICcuL2VtcHR5JztcbmV4cG9ydCBmdW5jdGlvbiBvbkVycm9yUmVzdW1lTmV4dCgpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG4gICAgdmFyIGZpcnN0ID0gc291cmNlc1swXSwgcmVtYWluZGVyID0gc291cmNlcy5zbGljZSgxKTtcbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShmaXJzdCkpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyb3JSZXN1bWVOZXh0LmFwcGx5KHZvaWQgMCwgZmlyc3QpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1Yk5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmFkZChvbkVycm9yUmVzdW1lTmV4dC5hcHBseSh2b2lkIDAsIHJlbWFpbmRlcikuc3Vic2NyaWJlKHN1YnNjcmliZXIpKTsgfTtcbiAgICAgICAgcmV0dXJuIGZyb20oZmlyc3QpLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSxcbiAgICAgICAgICAgIGVycm9yOiBzdWJOZXh0LFxuICAgICAgICAgICAgY29tcGxldGU6IHN1Yk5leHQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b25FcnJvclJlc3VtZU5leHQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9TdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBwYWlycyhvYmosIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHsga2V5czoga2V5cywgaW5kZXg6IDAsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvYmo6IG9iaiB9KSk7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIga2V5cyA9IHN0YXRlLmtleXMsIGluZGV4ID0gc3RhdGUuaW5kZXgsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBzdWJzY3JpcHRpb24gPSBzdGF0ZS5zdWJzY3JpcHRpb24sIG9iaiA9IHN0YXRlLm9iajtcbiAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIGlmIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZSh7IGtleXM6IGtleXMsIGluZGV4OiBpbmRleCArIDEsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvYmo6IG9iaiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWlycy5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3V0aWxfbm90LF91dGlsX3N1YnNjcmliZVRvLF9vcGVyYXRvcnNfZmlsdGVyLF9PYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IG5vdCB9IGZyb20gJy4uL3V0aWwvbm90JztcbmltcG9ydCB7IHN1YnNjcmliZVRvIH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUbyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICcuLi9vcGVyYXRvcnMvZmlsdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb24oc291cmNlLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBmaWx0ZXIocHJlZGljYXRlLCB0aGlzQXJnKShuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUbyhzb3VyY2UpKSksXG4gICAgICAgIGZpbHRlcihub3QocHJlZGljYXRlLCB0aGlzQXJnKSkobmV3IE9ic2VydmFibGUoc3Vic2NyaWJlVG8oc291cmNlKSkpXG4gICAgXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnRpdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX3V0aWxfaXNBcnJheSxfZnJvbUFycmF5LF9PdXRlclN1YnNjcmliZXIsX3V0aWxfc3Vic2NyaWJlVG9SZXN1bHQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xuaW1wb3J0IHsgT3V0ZXJTdWJzY3JpYmVyIH0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7IHN1YnNjcmliZVRvUmVzdWx0IH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5leHBvcnQgZnVuY3Rpb24gcmFjZSgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChpc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlc1swXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5KG9ic2VydmFibGVzLCB1bmRlZmluZWQpLmxpZnQobmV3IFJhY2VPcGVyYXRvcigpKTtcbn1cbnZhciBSYWNlT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmFjZU9wZXJhdG9yKCkge1xuICAgIH1cbiAgICBSYWNlT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBSYWNlU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmFjZU9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydCB7IFJhY2VPcGVyYXRvciB9O1xudmFyIFJhY2VTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFJhY2VTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJhY2VTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5oYXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKG9ic2VydmFibGUpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmFibGUpO1xuICAgIH07XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGVzID0gdGhpcy5vYnNlcnZhYmxlcztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmFibGVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXRoaXMuaGFzRmlyc3Q7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSYWNlU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzRmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gb3V0ZXJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBSYWNlU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBSYWNlU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFjZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKGNvdW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gc3RhcnQ7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBzdGFydDtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCwgY291bnQ6IGNvdW50LCBzdGFydDogc3RhcnQsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCsrID49IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChjdXJyZW50KyspO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIHN0YXJ0ID0gc3RhdGUuc3RhcnQsIGluZGV4ID0gc3RhdGUuaW5kZXgsIGNvdW50ID0gc3RhdGUuY291bnQsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyO1xuICAgIGlmIChpbmRleCA+PSBjb3VudCkge1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5uZXh0KHN0YXJ0KTtcbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICBzdGF0ZS5zdGFydCA9IHN0YXJ0ICsgMTtcbiAgICB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihlcnJvciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIgfSk7IH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKF9hKSB7XG4gICAgdmFyIGVycm9yID0gX2EuZXJyb3IsIHN1YnNjcmliZXIgPSBfYS5zdWJzY3JpYmVyO1xuICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dFcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3NjaGVkdWxlcl9hc3luYyxfdXRpbF9pc051bWVyaWMsX3V0aWxfaXNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vdXRpbC9pc051bWVyaWMnO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWVUaW1lLCBwZXJpb2RPclNjaGVkdWxlciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGR1ZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICBkdWVUaW1lID0gMDtcbiAgICB9XG4gICAgdmFyIHBlcmlvZCA9IC0xO1xuICAgIGlmIChpc051bWVyaWMocGVyaW9kT3JTY2hlZHVsZXIpKSB7XG4gICAgICAgIHBlcmlvZCA9IE51bWJlcihwZXJpb2RPclNjaGVkdWxlcikgPCAxICYmIDEgfHwgTnVtYmVyKHBlcmlvZE9yU2NoZWR1bGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTY2hlZHVsZXIocGVyaW9kT3JTY2hlZHVsZXIpKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IHBlcmlvZE9yU2NoZWR1bGVyO1xuICAgIH1cbiAgICBpZiAoIWlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZHVlID0gaXNOdW1lcmljKGR1ZVRpbWUpXG4gICAgICAgICAgICA/IGR1ZVRpbWVcbiAgICAgICAgICAgIDogKCtkdWVUaW1lIC0gc2NoZWR1bGVyLm5vdygpKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgZHVlLCB7XG4gICAgICAgICAgICBpbmRleDogMCwgcGVyaW9kOiBwZXJpb2QsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBpbmRleCA9IHN0YXRlLmluZGV4LCBwZXJpb2QgPSBzdGF0ZS5wZXJpb2QsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyO1xuICAgIHN1YnNjcmliZXIubmV4dChpbmRleCk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICB0aGlzLnNjaGVkdWxlKHN0YXRlLCBwZXJpb2QpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9mcm9tLF9lbXB0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi9lbXB0eSc7XG5leHBvcnQgZnVuY3Rpb24gdXNpbmcocmVzb3VyY2VGYWN0b3J5LCBvYnNlcnZhYmxlRmFjdG9yeSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgcmVzb3VyY2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG9ic2VydmFibGVGYWN0b3J5KHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQgPyBmcm9tKHJlc3VsdCkgOiBFTVBUWTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2luZy5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX2Zyb21BcnJheSxfdXRpbF9pc0FycmF5LF9TdWJzY3JpYmVyLF9PdXRlclN1YnNjcmliZXIsX3V0aWxfc3Vic2NyaWJlVG9SZXN1bHQsXy4uX2ludGVybmFsX3N5bWJvbF9pdGVyYXRvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPdXRlclN1YnNjcmliZXIgfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9SZXN1bHQgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uLy4uL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvcic7XG5leHBvcnQgZnVuY3Rpb24gemlwKCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHVuZGVmaW5lZCkubGlmdChuZXcgWmlwT3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbnZhciBaaXBPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBaaXBPcGVyYXRvcihyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIFppcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgWmlwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gWmlwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgWmlwT3BlcmF0b3IgfTtcbnZhciBaaXBTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFppcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gWmlwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IsIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy5yZXN1bHRTZWxlY3RvciA9ICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpID8gcmVzdWx0U2VsZWN0b3IgOiBudWxsO1xuICAgICAgICBfdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9ycyA9IHRoaXMuaXRlcmF0b3JzO1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBTdGF0aWNBcnJheUl0ZXJhdG9yKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlW1N5bWJvbF9pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBTdGF0aWNJdGVyYXRvcih2YWx1ZVtTeW1ib2xfaXRlcmF0b3JdKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBaaXBCdWZmZXJJdGVyYXRvcih0aGlzLmRlc3RpbmF0aW9uLCB0aGlzLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhdG9ycy5sZW5ndGg7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3Iuc3RpbGxVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChpdGVyYXRvci5zdWJzY3JpYmUoaXRlcmF0b3IsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFppcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUluYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZS0tO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuY2hlY2tJdGVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhdG9ycy5sZW5ndGg7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3IuaGFzVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIWl0ZXJhdG9yLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZENvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IuaGFzQ29tcGxldGVkKCkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MucHVzaChyZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl90cnlyZXN1bHRTZWxlY3RvcihhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5cmVzdWx0U2VsZWN0b3IgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5yZXN1bHRTZWxlY3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gWmlwU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgWmlwU3Vic2NyaWJlciB9O1xudmFyIFN0YXRpY0l0ZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRpY0l0ZXJhdG9yKGl0ZXJhdG9yKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgICAgICAgdGhpcy5uZXh0UmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgIH1cbiAgICBTdGF0aWNJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgU3RhdGljSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm5leHRSZXN1bHQ7XG4gICAgICAgIHRoaXMubmV4dFJlc3VsdCA9IHRoaXMuaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgU3RhdGljSXRlcmF0b3IucHJvdG90eXBlLmhhc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRSZXN1bHQgPSB0aGlzLm5leHRSZXN1bHQ7XG4gICAgICAgIHJldHVybiBuZXh0UmVzdWx0ICYmIG5leHRSZXN1bHQuZG9uZTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNJdGVyYXRvcjtcbn0oKSk7XG52YXIgU3RhdGljQXJyYXlJdGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0aWNBcnJheUl0ZXJhdG9yKGFycmF5KSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuICAgIFN0YXRpY0FycmF5SXRlcmF0b3IucHJvdG90eXBlW1N5bWJvbF9pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICAgICAgcmV0dXJuIGkgPCB0aGlzLmxlbmd0aCA/IHsgdmFsdWU6IGFycmF5W2ldLCBkb25lOiBmYWxzZSB9IDogeyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSB9O1xuICAgIH07XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA+IHRoaXMuaW5kZXg7XG4gICAgfTtcbiAgICBTdGF0aWNBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5oYXNDb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gdGhpcy5pbmRleDtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNBcnJheUl0ZXJhdG9yO1xufSgpKTtcbnZhciBaaXBCdWZmZXJJdGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhaaXBCdWZmZXJJdGVyYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBaaXBCdWZmZXJJdGVyYXRvcihkZXN0aW5hdGlvbiwgcGFyZW50LCBvYnNlcnZhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgICAgICBfdGhpcy5zdGlsbFVuc3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICBfdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlW1N5bWJvbF9pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDAgJiYgdGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGJ1ZmZlci5zaGlmdCgpLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLmhhc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5SW5hY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5idWZmZXIucHVzaChpbm5lclZhbHVlKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuY2hlY2tJdGVyYXRvcnMoKTtcbiAgICB9O1xuICAgIFppcEJ1ZmZlckl0ZXJhdG9yLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCB0aGlzLm9ic2VydmFibGUsIHRoaXMsIGluZGV4KTtcbiAgICB9O1xuICAgIHJldHVybiBaaXBCdWZmZXJJdGVyYXRvcjtcbn0oT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16aXAuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9tZXJnZUFsbCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4vbWVyZ2VBbGwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEFsbCgpIHtcbiAgICByZXR1cm4gbWVyZ2VBbGwoMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25jYXRBbGwuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBmaWx0ZXJPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykpO1xuICAgIH07XG59XG52YXIgRmlsdGVyT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBGaWx0ZXJPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEZpbHRlclN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlck9wZXJhdG9yO1xufSgpKTtcbnZhciBGaWx0ZXJTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZpbHRlclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsdGVyU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICAgIF90aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgICAgICBfdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmlsdGVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJlZGljYXRlLmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIsX1N1YnNjcmlwdGlvbixfT2JzZXJ2YWJsZSxfU3ViamVjdCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuLi9TdWJqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5KGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IsIGR1cmF0aW9uU2VsZWN0b3IsIHN1YmplY3RTZWxlY3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgR3JvdXBCeU9wZXJhdG9yKGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IsIGR1cmF0aW9uU2VsZWN0b3IsIHN1YmplY3RTZWxlY3RvcikpO1xuICAgIH07XG59XG52YXIgR3JvdXBCeU9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdyb3VwQnlPcGVyYXRvcihrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yLCBkdXJhdGlvblNlbGVjdG9yLCBzdWJqZWN0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgICAgICB0aGlzLmVsZW1lbnRTZWxlY3RvciA9IGVsZW1lbnRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5kdXJhdGlvblNlbGVjdG9yID0gZHVyYXRpb25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5zdWJqZWN0U2VsZWN0b3IgPSBzdWJqZWN0U2VsZWN0b3I7XG4gICAgfVxuICAgIEdyb3VwQnlPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEdyb3VwQnlTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMua2V5U2VsZWN0b3IsIHRoaXMuZWxlbWVudFNlbGVjdG9yLCB0aGlzLmR1cmF0aW9uU2VsZWN0b3IsIHRoaXMuc3ViamVjdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBCeU9wZXJhdG9yO1xufSgpKTtcbnZhciBHcm91cEJ5U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHcm91cEJ5U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cEJ5U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwga2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXlTZWxlY3RvciA9IGtleVNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5lbGVtZW50U2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmR1cmF0aW9uU2VsZWN0b3IgPSBkdXJhdGlvblNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5zdWJqZWN0U2VsZWN0b3IgPSBzdWJqZWN0U2VsZWN0b3I7XG4gICAgICAgIF90aGlzLmdyb3VwcyA9IG51bGw7XG4gICAgICAgIF90aGlzLmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5rZXlTZWxlY3Rvcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dyb3VwKHZhbHVlLCBrZXkpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLl9ncm91cCA9IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBncm91cHMgPSB0aGlzLmdyb3VwcztcbiAgICAgICAgaWYgKCFncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3VwcyA9IHRoaXMuZ3JvdXBzID0gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50U2VsZWN0b3IodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgICAgICBncm91cCA9ICh0aGlzLnN1YmplY3RTZWxlY3RvciA/IHRoaXMuc3ViamVjdFNlbGVjdG9yKCkgOiBuZXcgU3ViamVjdCgpKTtcbiAgICAgICAgICAgIGdyb3Vwcy5zZXQoa2V5LCBncm91cCk7XG4gICAgICAgICAgICB2YXIgZ3JvdXBlZE9ic2VydmFibGUgPSBuZXcgR3JvdXBlZE9ic2VydmFibGUoa2V5LCBncm91cCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoZ3JvdXBlZE9ic2VydmFibGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHVyYXRpb25TZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb25TZWxlY3RvcihuZXcgR3JvdXBlZE9ic2VydmFibGUoa2V5LCBncm91cCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZChkdXJhdGlvbi5zdWJzY3JpYmUobmV3IEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyKGtleSwgZ3JvdXAsIHRoaXMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFncm91cC5jbG9zZWQpIHtcbiAgICAgICAgICAgIGdyb3VwLm5leHQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBncm91cHMgPSB0aGlzLmdyb3VwcztcbiAgICAgICAgaWYgKGdyb3Vwcykge1xuICAgICAgICAgICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBncm91cC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBncm91cHMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfTtcbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHM7XG4gICAgICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCwga2V5KSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ3JvdXBzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLnJlbW92ZUdyb3VwID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmdyb3Vwcy5kZWxldGUoa2V5KTtcbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5hdHRlbXB0ZWRUb1Vuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBCeVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbnZhciBHcm91cER1cmF0aW9uU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHcm91cER1cmF0aW9uU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cER1cmF0aW9uU3Vic2NyaWJlcihrZXksIGdyb3VwLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZ3JvdXApIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmtleSA9IGtleTtcbiAgICAgICAgX3RoaXMuZ3JvdXAgPSBncm91cDtcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBHcm91cER1cmF0aW9uU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBwYXJlbnQgPSBfYS5wYXJlbnQsIGtleSA9IF9hLmtleTtcbiAgICAgICAgdGhpcy5rZXkgPSB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVHcm91cChrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBEdXJhdGlvblN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbnZhciBHcm91cGVkT2JzZXJ2YWJsZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHcm91cGVkT2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cGVkT2JzZXJ2YWJsZShrZXksIGdyb3VwU3ViamVjdCwgcmVmQ291bnRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMua2V5ID0ga2V5O1xuICAgICAgICBfdGhpcy5ncm91cFN1YmplY3QgPSBncm91cFN1YmplY3Q7XG4gICAgICAgIF90aGlzLnJlZkNvdW50U3Vic2NyaXB0aW9uID0gcmVmQ291bnRTdWJzY3JpcHRpb247XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgR3JvdXBlZE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCByZWZDb3VudFN1YnNjcmlwdGlvbiA9IF9hLnJlZkNvdW50U3Vic2NyaXB0aW9uLCBncm91cFN1YmplY3QgPSBfYS5ncm91cFN1YmplY3Q7XG4gICAgICAgIGlmIChyZWZDb3VudFN1YnNjcmlwdGlvbiAmJiAhcmVmQ291bnRTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uYWRkKG5ldyBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uKHJlZkNvdW50U3Vic2NyaXB0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChncm91cFN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBHcm91cGVkT2JzZXJ2YWJsZTtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgR3JvdXBlZE9ic2VydmFibGUgfTtcbnZhciBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKElubmVyUmVmQ291bnRTdWJzY3JpcHRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbihwYXJlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBwYXJlbnQuY291bnQrKztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICBpZiAoIXBhcmVudC5jbG9zZWQgJiYgIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBwYXJlbnQuY291bnQgLT0gMTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQuY291bnQgPT09IDAgJiYgcGFyZW50LmF0dGVtcHRlZFRvVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIElubmVyUmVmQ291bnRTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXBCeS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG52YXIgTWFwT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBNYXBPcGVyYXRvciB9O1xudmFyIE1hcFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTWFwU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICBfdGhpcy50aGlzQXJnID0gdGhpc0FyZyB8fCBfdGhpcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0LmNhbGwodGhpcy50aGlzQXJnLCB2YWx1ZSwgdGhpcy5jb3VudCsrKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbWVyZ2VNYXAsX3V0aWxfaWRlbnRpdHkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi4vdXRpbC9pZGVudGl0eSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VBbGwoY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlTWFwKGlkZW50aXR5LCBjb25jdXJyZW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlQWxsLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfdXRpbF9zdWJzY3JpYmVUb1Jlc3VsdCxfT3V0ZXJTdWJzY3JpYmVyLF9Jbm5lclN1YnNjcmliZXIsX21hcCxfb2JzZXJ2YWJsZV9mcm9tIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb1Jlc3VsdCB9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuaW1wb3J0IHsgT3V0ZXJTdWJzY3JpYmVyIH0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7IElubmVyU3Vic2NyaWJlciB9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9mcm9tJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3RvciwgY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkgeyByZXR1cm4gc291cmNlLnBpcGUobWVyZ2VNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIGZyb20ocHJvamVjdChhLCBpKSkucGlwZShtYXAoZnVuY3Rpb24gKGIsIGlpKSB7IHJldHVybiByZXN1bHRTZWxlY3RvcihhLCBiLCBpLCBpaSk7IH0pKTsgfSwgY29uY3VycmVudCkpOyB9O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmN1cnJlbnQgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBNZXJnZU1hcE9wZXJhdG9yKHByb2plY3QsIGNvbmN1cnJlbnQpKTsgfTtcbn1cbnZhciBNZXJnZU1hcE9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lcmdlTWFwT3BlcmF0b3IocHJvamVjdCwgY29uY3VycmVudCkge1xuICAgICAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25jdXJyZW50ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY29uY3VycmVudCA9IGNvbmN1cnJlbnQ7XG4gICAgfVxuICAgIE1lcmdlTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgTWVyZ2VNYXBTdWJzY3JpYmVyKG9ic2VydmVyLCB0aGlzLnByb2plY3QsIHRoaXMuY29uY3VycmVudCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1lcmdlTWFwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgTWVyZ2VNYXBPcGVyYXRvciB9O1xudmFyIE1lcmdlTWFwU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNZXJnZU1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWVyZ2VNYXBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcm9qZWN0LCBjb25jdXJyZW50KSB7XG4gICAgICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBfdGhpcy5jb25jdXJyZW50ID0gY29uY3VycmVudDtcbiAgICAgICAgX3RoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPCB0aGlzLmNvbmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeU5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX3RyeU5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcm9qZWN0KHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlKys7XG4gICAgICAgIHRoaXMuX2lubmVyU3ViKHJlc3VsdCwgdmFsdWUsIGluZGV4KTtcbiAgICB9O1xuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2lubmVyU3ViID0gZnVuY3Rpb24gKGlzaCwgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBpbm5lclN1YnNjcmliZXIgPSBuZXcgSW5uZXJTdWJzY3JpYmVyKHRoaXMsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBpc2gsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoaW5uZXJTdWJzY3JpcHRpb24gIT09IGlubmVyU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uYWRkKGlubmVyU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSAwICYmIHRoaXMuYnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy5yZW1vdmUoaW5uZXJTdWIpO1xuICAgICAgICB0aGlzLmFjdGl2ZS0tO1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQoYnVmZmVyLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlID09PSAwICYmIHRoaXMuaGFzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNZXJnZU1hcFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgTWVyZ2VNYXBTdWJzY3JpYmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZU1hcC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIsX05vdGlmaWNhdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlT24oc2NoZWR1bGVyLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9ic2VydmVPbk9wZXJhdG9yRnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgT2JzZXJ2ZU9uT3BlcmF0b3Ioc2NoZWR1bGVyLCBkZWxheSkpO1xuICAgIH07XG59XG52YXIgT2JzZXJ2ZU9uT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2ZU9uT3BlcmF0b3Ioc2NoZWR1bGVyLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuICAgIE9ic2VydmVPbk9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgT2JzZXJ2ZU9uU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnNjaGVkdWxlciwgdGhpcy5kZWxheSkpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmVPbk9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmVPbk9wZXJhdG9yIH07XG52YXIgT2JzZXJ2ZU9uU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhPYnNlcnZlT25TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmVPblN1YnNjcmliZXIoZGVzdGluYXRpb24sIHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9ic2VydmVPblN1YnNjcmliZXIuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHZhciBub3RpZmljYXRpb24gPSBhcmcubm90aWZpY2F0aW9uLCBkZXN0aW5hdGlvbiA9IGFyZy5kZXN0aW5hdGlvbjtcbiAgICAgICAgbm90aWZpY2F0aW9uLm9ic2VydmUoZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLnByb3RvdHlwZS5zY2hlZHVsZU1lc3NhZ2UgPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZCh0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShPYnNlcnZlT25TdWJzY3JpYmVyLmRpc3BhdGNoLCB0aGlzLmRlbGF5LCBuZXcgT2JzZXJ2ZU9uTWVzc2FnZShub3RpZmljYXRpb24sIHRoaXMuZGVzdGluYXRpb24pKSk7XG4gICAgfTtcbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTWVzc2FnZShOb3RpZmljYXRpb24uY3JlYXRlTmV4dCh2YWx1ZSkpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTWVzc2FnZShOb3RpZmljYXRpb24uY3JlYXRlRXJyb3IoZXJyKSk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU1lc3NhZ2UoTm90aWZpY2F0aW9uLmNyZWF0ZUNvbXBsZXRlKCkpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2ZU9uU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgT2JzZXJ2ZU9uU3Vic2NyaWJlciB9O1xudmFyIE9ic2VydmVPbk1lc3NhZ2UgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2ZU9uTWVzc2FnZShub3RpZmljYXRpb24sIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9uO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgfVxuICAgIHJldHVybiBPYnNlcnZlT25NZXNzYWdlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmVPbk1lc3NhZ2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmVPbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiByZWZDb3VudCgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVmQ291bnRPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IFJlZkNvdW50T3BlcmF0b3Ioc291cmNlKSk7XG4gICAgfTtcbn1cbnZhciBSZWZDb3VudE9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50T3BlcmF0b3IoY29ubmVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgIH1cbiAgICBSZWZDb3VudE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgICAgICBjb25uZWN0YWJsZS5fcmVmQ291bnQrKztcbiAgICAgICAgdmFyIHJlZkNvdW50ZXIgPSBuZXcgUmVmQ291bnRTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGNvbm5lY3RhYmxlKTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUocmVmQ291bnRlcik7XG4gICAgICAgIGlmICghcmVmQ291bnRlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJlZkNvdW50ZXIuY29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50T3BlcmF0b3I7XG59KCkpO1xudmFyIFJlZkNvdW50U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhSZWZDb3VudFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVmQ291bnRTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBjb25uZWN0YWJsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZWZDb3VudFN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgaWYgKCFjb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbm5lY3RhYmxlID0gbnVsbDtcbiAgICAgICAgdmFyIHJlZkNvdW50ID0gY29ubmVjdGFibGUuX3JlZkNvdW50O1xuICAgICAgICBpZiAocmVmQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0YWJsZS5fcmVmQ291bnQgPSByZWZDb3VudCAtIDE7XG4gICAgICAgIGlmIChyZWZDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb247XG4gICAgICAgIHZhciBzaGFyZWRDb25uZWN0aW9uID0gY29ubmVjdGFibGUuX2Nvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIGlmIChzaGFyZWRDb25uZWN0aW9uICYmICghY29ubmVjdGlvbiB8fCBzaGFyZWRDb25uZWN0aW9uID09PSBjb25uZWN0aW9uKSkge1xuICAgICAgICAgICAgc2hhcmVkQ29ubmVjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUmVmQ291bnRTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWZDb3VudC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX1N1YnNjcmlwdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgc3ViID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQodGhpcy5zY2hlZHVsZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVBcnJheS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX1N1YnNjcmlwdGlvbixfc3ltYm9sX2l0ZXJhdG9yIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yO1xuICAgICAgICBzdWIuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciAmJiB0eXBlb2YgaXRlcmF0b3IucmV0dXJuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRvciA9IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGRvbmU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSByZXN1bHQuZG9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gc3ViO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVJdGVyYWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX1N1YnNjcmlwdGlvbixfc3ltYm9sX29ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQob2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLm5leHQodmFsdWUpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7IH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlT2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX1N1YnNjcmlwdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUHJvbWlzZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3NjaGVkdWxlT2JzZXJ2YWJsZSxfc2NoZWR1bGVQcm9taXNlLF9zY2hlZHVsZUFycmF5LF9zY2hlZHVsZUl0ZXJhYmxlLF91dGlsX2lzSW50ZXJvcE9ic2VydmFibGUsX3V0aWxfaXNQcm9taXNlLF91dGlsX2lzQXJyYXlMaWtlLF91dGlsX2lzSXRlcmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKGlucHV0KSB8fCB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKChpbnB1dCAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQgfHwgaW5wdXQpICsgJyBpcyBub3Qgb2JzZXJ2YWJsZScpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVkLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaXB0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xudmFyIEFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB9XG4gICAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb247XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BY3Rpb24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9Bc3luY0FjdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbnZhciBBbmltYXRpb25GcmFtZUFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBbmltYXRpb25GcmFtZUFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbmltYXRpb25GcmFtZUFjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFuaW1hdGlvbkZyYW1lQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiBkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkLmNhbGwodGhpcywgc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGVkIHx8IChzY2hlZHVsZXIuc2NoZWR1bGVkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjaGVkdWxlci5mbHVzaChudWxsKTsgfSkpO1xuICAgIH07XG4gICAgQW5pbWF0aW9uRnJhbWVBY3Rpb24ucHJvdG90eXBlLnJlY3ljbGVBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkZWxheSAhPT0gbnVsbCAmJiBkZWxheSA+IDApIHx8IChkZWxheSA9PT0gbnVsbCAmJiB0aGlzLmRlbGF5ID4gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnJlY3ljbGVBc3luY0lkLmNhbGwodGhpcywgc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY2hlZHVsZXIuYWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICAgICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25GcmFtZUFjdGlvbjtcbn0oQXN5bmNBY3Rpb24pKTtcbmV4cG9ydCB7IEFuaW1hdGlvbkZyYW1lQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbmltYXRpb25GcmFtZUFjdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xudmFyIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICAgIHZhciBjb3VudCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBhY3Rpb24gPSBhY3Rpb24gfHwgYWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKytpbmRleCA8IGNvdW50ICYmIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGNvdW50ICYmIChhY3Rpb24gPSBhY3Rpb25zLnNoaWZ0KCkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfdXRpbF9JbW1lZGlhdGUsX0FzeW5jQWN0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBJbW1lZGlhdGUgfSBmcm9tICcuLi91dGlsL0ltbWVkaWF0ZSc7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xudmFyIEFzYXBBY3Rpb24gPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXNhcEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc2FwQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXNhcEFjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZXIuYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlZCB8fCAoc2NoZWR1bGVyLnNjaGVkdWxlZCA9IEltbWVkaWF0ZS5zZXRJbW1lZGlhdGUoc2NoZWR1bGVyLmZsdXNoLmJpbmQoc2NoZWR1bGVyLCBudWxsKSkpO1xuICAgIH07XG4gICAgQXNhcEFjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkgfHwgKGRlbGF5ID09PSBudWxsICYmIHRoaXMuZGVsYXkgPiAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjaGVkdWxlci5hY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgSW1tZWRpYXRlLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICAgICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBBc2FwQWN0aW9uO1xufShBc3luY0FjdGlvbikpO1xuZXhwb3J0IHsgQXNhcEFjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXNhcEFjdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xudmFyIEFzYXBTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXNhcFNjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc2FwU2NoZWR1bGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFzYXBTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGNvdW50ID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbiB8fCBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXNhcFNjaGVkdWxlcjtcbn0oQXN5bmNTY2hlZHVsZXIpKTtcbmV4cG9ydCB7IEFzYXBTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzYXBTY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9BY3Rpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcbnZhciBBc3luY0FjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBc3luY0FjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY0FjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB0aGlzLnJlcXVlc3RBc3luY0lkKHNjaGVkdWxlciwgdGhpcy5pZCwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkgIT09IG51bGwgJiYgdGhpcy5kZWxheSA9PT0gZGVsYXkgJiYgdGhpcy5wZW5kaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZCh0aGlzLnNjaGVkdWxlciwgdGhpcy5pZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIGVycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLndvcmsoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9yVmFsdWUgPSAhIWUgJiYgZSB8fCBuZXcgRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIHZhciBhY3Rpb25zID0gc2NoZWR1bGVyLmFjdGlvbnM7XG4gICAgICAgIHZhciBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgdGhpcy53b3JrID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IG51bGw7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNBY3Rpb247XG59KEFjdGlvbikpO1xuZXhwb3J0IHsgQXN5bmNBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLi9TY2hlZHVsZXInO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFzeW5jU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jU2NoZWR1bGVyKFNjaGVkdWxlckFjdGlvbiwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbm93ID0gU2NoZWR1bGVyLm5vdztcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBTY2hlZHVsZXJBY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAmJiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAhPT0gX3RoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAod29yaywgZGVsYXksIHN0YXRlKSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUuc2NoZWR1bGUod29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgd29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc3luY1NjaGVkdWxlcjtcbn0oU2NoZWR1bGVyKSk7XG5leHBvcnQgeyBBc3luY1NjaGVkdWxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNTY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9Bc3luY0FjdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbnZhciBRdWV1ZUFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhRdWV1ZUFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWV1ZUFjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zY2hlZHVsZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyLmZsdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICByZXR1cm4gKGRlbGF5ID4gMCB8fCB0aGlzLmNsb3NlZCkgP1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5leGVjdXRlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KSA6XG4gICAgICAgICAgICB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBRdWV1ZUFjdGlvbi5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkgfHwgKGRlbGF5ID09PSBudWxsICYmIHRoaXMuZGVsYXkgPiAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5mbHVzaCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZUFjdGlvbjtcbn0oQXN5bmNBY3Rpb24pKTtcbmV4cG9ydCB7IFF1ZXVlQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZUFjdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xudmFyIFF1ZXVlU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFF1ZXVlU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFF1ZXVlU2NoZWR1bGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBRdWV1ZVNjaGVkdWxlcjtcbn0oQXN5bmNTY2hlZHVsZXIpKTtcbmV4cG9ydCB7IFF1ZXVlU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZVNjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jQWN0aW9uLF9Bc3luY1NjaGVkdWxlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgVmlydHVhbFRpbWVTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoVmlydHVhbFRpbWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlydHVhbFRpbWVTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBtYXhGcmFtZXMpIHtcbiAgICAgICAgaWYgKFNjaGVkdWxlckFjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBTY2hlZHVsZXJBY3Rpb24gPSBWaXJ0dWFsQWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhGcmFtZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgbWF4RnJhbWVzID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFNjaGVkdWxlckFjdGlvbiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZnJhbWU7IH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm1heEZyYW1lcyA9IG1heEZyYW1lcztcbiAgICAgICAgX3RoaXMuZnJhbWUgPSAwO1xuICAgICAgICBfdGhpcy5pbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFZpcnR1YWxUaW1lU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgYWN0aW9ucyA9IF9hLmFjdGlvbnMsIG1heEZyYW1lcyA9IF9hLm1heEZyYW1lcztcbiAgICAgICAgdmFyIGVycm9yLCBhY3Rpb247XG4gICAgICAgIHdoaWxlICgoYWN0aW9uID0gYWN0aW9uc1swXSkgJiYgYWN0aW9uLmRlbGF5IDw9IG1heEZyYW1lcykge1xuICAgICAgICAgICAgYWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSA9IGFjdGlvbi5kZWxheTtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpcnR1YWxUaW1lU2NoZWR1bGVyLmZyYW1lVGltZUZhY3RvciA9IDEwO1xuICAgIHJldHVybiBWaXJ0dWFsVGltZVNjaGVkdWxlcjtcbn0oQXN5bmNTY2hlZHVsZXIpKTtcbmV4cG9ydCB7IFZpcnR1YWxUaW1lU2NoZWR1bGVyIH07XG52YXIgVmlydHVhbEFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhWaXJ0dWFsQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpcnR1YWxBY3Rpb24oc2NoZWR1bGVyLCB3b3JrLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBzY2hlZHVsZXIuaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIF90aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIF90aGlzLmluZGV4ID0gc2NoZWR1bGVyLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVmlydHVhbEFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5zY2hlZHVsZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGFjdGlvbiA9IG5ldyBWaXJ0dWFsQWN0aW9uKHRoaXMuc2NoZWR1bGVyLCB0aGlzLndvcmspO1xuICAgICAgICB0aGlzLmFkZChhY3Rpb24pO1xuICAgICAgICByZXR1cm4gYWN0aW9uLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBzY2hlZHVsZXIuZnJhbWUgKyBkZWxheTtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICBhY3Rpb25zLnNvcnQoVmlydHVhbEFjdGlvbi5zb3J0QWN0aW9ucyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVmlydHVhbEFjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVmlydHVhbEFjdGlvbi5wcm90b3R5cGUuX2V4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX2V4ZWN1dGUuY2FsbCh0aGlzLCBzdGF0ZSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnNvcnRBY3Rpb25zID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEuZGVsYXkgPT09IGIuZGVsYXkpIHtcbiAgICAgICAgICAgIGlmIChhLmluZGV4ID09PSBiLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhLmluZGV4ID4gYi5pbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGEuZGVsYXkgPiBiLmRlbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFZpcnR1YWxBY3Rpb247XG59KEFzeW5jQWN0aW9uKSk7XG5leHBvcnQgeyBWaXJ0dWFsQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaXJ0dWFsVGltZVNjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX0FuaW1hdGlvbkZyYW1lQWN0aW9uLF9BbmltYXRpb25GcmFtZVNjaGVkdWxlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBBbmltYXRpb25GcmFtZUFjdGlvbiB9IGZyb20gJy4vQW5pbWF0aW9uRnJhbWVBY3Rpb24nO1xuaW1wb3J0IHsgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICcuL0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVyJztcbmV4cG9ydCB2YXIgYW5pbWF0aW9uRnJhbWUgPSAvKkBfX1BVUkVfXyovIG5ldyBBbmltYXRpb25GcmFtZVNjaGVkdWxlcihBbmltYXRpb25GcmFtZUFjdGlvbik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25GcmFtZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX0FzYXBBY3Rpb24sX0FzYXBTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgQXNhcEFjdGlvbiB9IGZyb20gJy4vQXNhcEFjdGlvbic7XG5pbXBvcnQgeyBBc2FwU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc2FwU2NoZWR1bGVyJztcbmV4cG9ydCB2YXIgYXNhcCA9IC8qQF9fUFVSRV9fKi8gbmV3IEFzYXBTY2hlZHVsZXIoQXNhcEFjdGlvbik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc2FwLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfQXN5bmNBY3Rpb24sX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhc3luYyA9IC8qQF9fUFVSRV9fKi8gbmV3IEFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfUXVldWVBY3Rpb24sX1F1ZXVlU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IFF1ZXVlQWN0aW9uIH0gZnJvbSAnLi9RdWV1ZUFjdGlvbic7XG5pbXBvcnQgeyBRdWV1ZVNjaGVkdWxlciB9IGZyb20gJy4vUXVldWVTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBxdWV1ZSA9IC8qQF9fUFVSRV9fKi8gbmV3IFF1ZXVlU2NoZWR1bGVyKFF1ZXVlQWN0aW9uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXVlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuICdAQGl0ZXJhdG9yJztcbiAgICB9XG4gICAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cbmV4cG9ydCB2YXIgaXRlcmF0b3IgPSAvKkBfX1BVUkVfXyovIGdldFN5bWJvbEl0ZXJhdG9yKCk7XG5leHBvcnQgdmFyICQkaXRlcmF0b3IgPSBpdGVyYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBvYnNlcnZhYmxlID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgdmFyIHJ4U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IC8qQF9fUFVSRV9fKi8gU3ltYm9sKCdyeFN1YnNjcmliZXInKVxuICAgICAgICA6ICdAQHJ4U3Vic2NyaWJlcl8nICsgLypAX19QVVJFX18qLyBNYXRoLnJhbmRvbSgpO1xufSkoKTtcbmV4cG9ydCB2YXIgJCRyeFN1YnNjcmliZXIgPSByeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbCgpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ2FyZ3VtZW50IG91dCBvZiByYW5nZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdBcmd1bWVudE91dE9mUmFuZ2VFcnJvcic7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwucHJvdG90eXBlID0gLypAX19QVVJFX18qLyBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnQgdmFyIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgRW1wdHlFcnJvckltcGwgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW1wdHlFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdubyBlbGVtZW50cyBpbiBzZXF1ZW5jZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdFbXB0eUVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIEVtcHR5RXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBFbXB0eUVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnQgdmFyIEVtcHR5RXJyb3IgPSBFbXB0eUVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVtcHR5RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgbmV4dEhhbmRsZSA9IDE7XG52YXIgUkVTT0xWRUQgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7IHJldHVybiAvKkBfX1BVUkVfXyovIFByb21pc2UucmVzb2x2ZSgpOyB9KSgpO1xudmFyIGFjdGl2ZUhhbmRsZXMgPSB7fTtcbmZ1bmN0aW9uIGZpbmRBbmRDbGVhckhhbmRsZShoYW5kbGUpIHtcbiAgICBpZiAoaGFuZGxlIGluIGFjdGl2ZUhhbmRsZXMpIHtcbiAgICAgICAgZGVsZXRlIGFjdGl2ZUhhbmRsZXNbaGFuZGxlXTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCB2YXIgSW1tZWRpYXRlID0ge1xuICAgIHNldEltbWVkaWF0ZTogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBoYW5kbGUgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIGFjdGl2ZUhhbmRsZXNbaGFuZGxlXSA9IHRydWU7XG4gICAgICAgIFJFU09MVkVELnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZmluZEFuZENsZWFySGFuZGxlKGhhbmRsZSkgJiYgY2IoKTsgfSk7XG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfSxcbiAgICBjbGVhckltbWVkaWF0ZTogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICBmaW5kQW5kQ2xlYXJIYW5kbGUoaGFuZGxlKTtcbiAgICB9LFxufTtcbmV4cG9ydCB2YXIgVGVzdFRvb2xzID0ge1xuICAgIHBlbmRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGFjdGl2ZUhhbmRsZXMpLmxlbmd0aDtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW1tZWRpYXRlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbC5wcm90b3R5cGUgPSAvKkBfX1BVUkVfXyovIE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbnZhciBUaW1lb3V0RXJyb3JJbXBsID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVvdXRFcnJvckltcGwoKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdUaW1lb3V0IGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVGltZW91dEVycm9ySW1wbC5wcm90b3R5cGUgPSAvKkBfX1BVUkVfXyovIE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICByZXR1cm4gVGltZW91dEVycm9ySW1wbDtcbn0pKCk7XG5leHBvcnQgdmFyIFRpbWVvdXRFcnJvciA9IFRpbWVvdXRFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lb3V0RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG52YXIgVW5zdWJzY3JpcHRpb25FcnJvckltcGwgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9ycyA/XG4gICAgICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgVW5zdWJzY3JpcHRpb25FcnJvckltcGwucHJvdG90eXBlID0gLypAX19QVVJFX18qLyBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydCB2YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX1N1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGNhblJlcG9ydEVycm9yKG9ic2VydmVyKSB7XG4gICAgd2hpbGUgKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfYSA9IG9ic2VydmVyLCBjbG9zZWRfMSA9IF9hLmNsb3NlZCwgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbiwgaXNTdG9wcGVkID0gX2EuaXNTdG9wcGVkO1xuICAgICAgICBpZiAoY2xvc2VkXzEgfHwgaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24gaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FuUmVwb3J0RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaG9zdFJlcG9ydEVycm9yKGVycikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0aHJvdyBlcnI7IH0sIDApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9zdFJlcG9ydEVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBpc0FycmF5ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSB8fCAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJzsgfSk7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBpc0FycmF5TGlrZSA9IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlMaWtlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9zeW1ib2xfb2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSW50ZXJvcE9ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9zeW1ib2xfaXRlcmF0b3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ICYmIHR5cGVvZiBpbnB1dFtTeW1ib2xfaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2lzQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4vaXNBcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljKHZhbCkge1xuICAgIHJldHVybiAhaXNBcnJheSh2YWwpICYmICh2YWwgLSBwYXJzZUZsb2F0KHZhbCkgKyAxKSA+PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNOdW1lcmljLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc09iamVjdC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JzZXJ2YWJsZShvYmopIHtcbiAgICByZXR1cm4gISFvYmogJiYgKG9iaiBpbnN0YW5jZW9mIE9ic2VydmFibGUgfHwgKHR5cGVvZiBvYmoubGlmdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNPYnNlcnZhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1Byb21pc2UuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnNjaGVkdWxlID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCBmdW5jdGlvbiBub3QocHJlZCwgdGhpc0FyZykge1xuICAgIGZ1bmN0aW9uIG5vdFByZWQoKSB7XG4gICAgICAgIHJldHVybiAhKG5vdFByZWQucHJlZC5hcHBseShub3RQcmVkLnRoaXNBcmcsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgICBub3RQcmVkLnByZWQgPSBwcmVkO1xuICAgIG5vdFByZWQudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgcmV0dXJuIG5vdFByZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3QuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9pZGVudGl0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfc3Vic2NyaWJlVG9BcnJheSxfc3Vic2NyaWJlVG9Qcm9taXNlLF9zdWJzY3JpYmVUb0l0ZXJhYmxlLF9zdWJzY3JpYmVUb09ic2VydmFibGUsX2lzQXJyYXlMaWtlLF9pc1Byb21pc2UsX2lzT2JqZWN0LF9zeW1ib2xfaXRlcmF0b3IsX3N5bWJvbF9vYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IHN1YnNjcmliZVRvQXJyYXkgfSBmcm9tICcuL3N1YnNjcmliZVRvQXJyYXknO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9Qcm9taXNlIH0gZnJvbSAnLi9zdWJzY3JpYmVUb1Byb21pc2UnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9JdGVyYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJlVG9JdGVyYWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb09ic2VydmFibGUgfSBmcm9tICcuL3N1YnNjcmliZVRvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4vaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2lzT2JqZWN0JztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUbyA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtTeW1ib2xfb2JzZXJ2YWJsZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvT2JzZXJ2YWJsZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5TGlrZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0FycmF5KHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Byb21pc2UocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtTeW1ib2xfaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0l0ZXJhYmxlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc09iamVjdChyZXN1bHQpID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IFwiJ1wiICsgcmVzdWx0ICsgXCInXCI7XG4gICAgICAgIHZhciBtc2cgPSBcIllvdSBwcm92aWRlZCBcIiArIHZhbHVlICsgXCIgd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLlwiXG4gICAgICAgICAgICArICcgWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIEFycmF5LCBvciBJdGVyYWJsZS4nO1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb0FycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9BcnJheS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3N5bWJvbF9pdGVyYXRvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlW1N5bWJvbF9pdGVyYXRvcl0oKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yLnJldHVybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb0l0ZXJhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfc3ltYm9sX29ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmV4cG9ydCB2YXIgc3Vic2NyaWJlVG9PYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgb2JzID0gb2JqW1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgICAgICBpZiAodHlwZW9mIG9icy5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9PYnNlcnZhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfaG9zdFJlcG9ydEVycm9yIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGhvc3RSZXBvcnRFcnJvciB9IGZyb20gJy4vaG9zdFJlcG9ydEVycm9yJztcbmV4cG9ydCB2YXIgc3Vic2NyaWJlVG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCBob3N0UmVwb3J0RXJyb3IpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvUHJvbWlzZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX0lubmVyU3Vic2NyaWJlcixfc3Vic2NyaWJlVG8sX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgSW5uZXJTdWJzY3JpYmVyIH0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7IHN1YnNjcmliZVRvIH0gZnJvbSAnLi9zdWJzY3JpYmVUbyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlVG9SZXN1bHQob3V0ZXJTdWJzY3JpYmVyLCByZXN1bHQsIG91dGVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVyU3Vic2NyaWJlcikge1xuICAgIGlmIChpbm5lclN1YnNjcmliZXIgPT09IHZvaWQgMCkge1xuICAgICAgICBpbm5lclN1YnNjcmliZXIgPSBuZXcgSW5uZXJTdWJzY3JpYmVyKG91dGVyU3Vic2NyaWJlciwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCk7XG4gICAgfVxuICAgIGlmIChpbm5lclN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlKGlubmVyU3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpYmVUbyhyZXN1bHQpKGlubmVyU3Vic2NyaWJlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb1Jlc3VsdC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX1N1YnNjcmliZXIsX3N5bWJvbF9yeFN1YnNjcmliZXIsX09ic2VydmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbmltcG9ydCB7IGVtcHR5IGFzIGVtcHR5T2JzZXJ2ZXIgfSBmcm9tICcuLi9PYnNlcnZlcic7XG5leHBvcnQgZnVuY3Rpb24gdG9TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICBpZiAobmV4dE9yT2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyIGluc3RhbmNlb2YgU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJTeW1ib2xdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyU3ltYm9sXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmliZXIoZW1wdHlPYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvU3Vic2NyaWJlci5qcy5tYXBcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=