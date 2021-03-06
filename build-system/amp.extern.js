/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @externs */

/**
 * Special case for fetchJson.
 * Externed for use in the amp-form component when reconstructing
 * the request for SSR and then passed to runtime.
 * @typedef {{
 *   body: (!JsonObject|!FormData|undefined),
 *   credentials: (string|undefined),
 *   headers: (!JsonObject|undefined),
 *   method: (string|undefined),
 *   requireAmpResponseSourceOrigin: (boolean|undefined),
 *   ampCors: (boolean|undefined)
 * }}
 */
var FetchInitJsonDef;

/**
 * Externed as this is constructed in the amp-form component and
 * then passed to runtime.
 * @typedef {{
 *  xhrUrl: string,
 *  fetchOpt: !FetchInitJsonDef
 * }}
 */
var FetchRequestDef;

/**
 * A type for Objects that can be JSON serialized or that come from
 * JSON serialization. Requires the objects fields to be accessed with
 * bracket notation object['name'] to make sure the fields do not get
 * obfuscated.
 * @constructor
 * @dict
 */
function JsonObject() {}

/**
 * Force the dataset property to be handled as a JsonObject.
 * @type {!JsonObject}
 */
Element.prototype.dataset;

/**
 * - n is the name.
 * - f is the function body of the extension.
 * - p is the priority. Only supported value is "high".
 *   high means, that the extension is not subject to chunking.
 *   This should be used for work, that should always happen
 *   as early as possible. Currently this is primarily used
 *   for viewer communication setup.
 * - v is the release version
 * @constructor @struct
 */
function ExtensionPayload() {}

/** @type {string} */
ExtensionPayload.prototype.n;

/** @type {function(!Object,!Object)} */
ExtensionPayload.prototype.f;

/** @type {string|undefined} */
ExtensionPayload.prototype.p;

/** @type {string} */
ExtensionPayload.prototype.v;

/** @type {!Array<string>|string|undefined} */
ExtensionPayload.prototype.i;


/**
 * @typedef {?JsonObject|undefined|string|number|!Array<JsonValue>}
 */
var JsonValue;

// Node.js global
var process = {};
process.env;
process.env.NODE_ENV;
process.env.SERVE_MODE;

// Exposed to ads.
window.context = {};
window.context.sentinel;
window.context.clientId;
window.context.initialLayoutRect;
window.context.initialIntersection;
window.context.sourceUrl;
window.context.experimentToggles;
window.context.master;
window.context.isMaster;

// Service Holder
window.services;

// Safeframe
// TODO(bradfrizzell) Move to its own extern. Not relevant to all AMP.
/* @type {?Object} */
window.sf_ = {};
/* @type {?Object} */
window.sf_.cfg;

// Exposed to custom ad iframes.
/* @type {!Function} */
window.draw3p;

// AMP's globals
window.AMP_TEST;
window.AMP_TEST_IFRAME;
window.AMP_TAG;
window.AMP = {};
window.AMP._ = {};
window.AMP.push;
window.AMP.title;
window.AMP.canonicalUrl;
window.AMP.extension;
window.AMP.ampdoc;
window.AMP.config;
window.AMP.config.urls;
window.AMP.BaseElement;
window.AMP.BaseTemplate;
window.AMP.registerElement;
window.AMP.registerTemplate;
window.AMP.registerServiceForDoc;
window.AMP.isExperimentOn;
window.AMP.toggleExperiment;
window.AMP.setLogLevel;
window.AMP.setTickFunction;
window.AMP.viewer;
window.AMP.viewport = {};
window.AMP.viewport.getScrollLeft;
window.AMP.viewport.getScrollWidth;
window.AMP.viewport.getWidth;
window.AMP.attachShadowDoc;
window.AMP.attachShadowDocAsStream


/** @constructor */
function AmpConfigType() {}

/* @public {string} */
AmpConfigType.prototype.thirdPartyUrl;
/* @public {string} */
AmpConfigType.prototype.thirdParty;
/* @public {string} */
AmpConfigType.prototype.thirdPartyFrameHost;
/* @public {string} */
AmpConfigType.prototype.thirdPartyFrameRegex;
/* @public {string} */
AmpConfigType.prototype.errorReporting;
/* @public {string} */
AmpConfigType.prototype.cdn;
/* @public {string} */
AmpConfigType.prototype.cdnUrl;
/* @public {string} */
AmpConfigType.prototype.errorReportingUrl;
/* @public {string} */
AmpConfigType.prototype.localDev;
/* @public {string} */
AmpConfigType.prototype.v;
/* @public {boolean} */
AmpConfigType.prototype.canary;
/* @public {string} */
AmpConfigType.prototype.runtime;

/** @type {!AmpConfigType}  */
window.AMP_CONFIG;

window.AMP_CONTEXT_DATA;

/** @constructor @struct */
function AmpViewerMessage() {}

/** @public {string}  */
AmpViewerMessage.prototype.app;
/** @public {string}  */
AmpViewerMessage.prototype.type;
/** @public {number}  */
AmpViewerMessage.prototype.requestid;
/** @public {string}  */
AmpViewerMessage.prototype.name;
/** @public {*}  */
AmpViewerMessage.prototype.data;
/** @public {boolean|undefined}  */
AmpViewerMessage.prototype.rsvp;
/** @public {string|undefined}  */
AmpViewerMessage.prototype.error;

// AMP-Analytics Cross-domain iframes
let IframeTransportEvent;

/** @constructor @struct */
function IframeTransportContext() {}
IframeTransportContext.onAnalyticsEvent;
IframeTransportContext.sendResponseToCreative;

// amp-viz-vega related externs.
/**
 * @typedef {{spec: function(!JsonObject, function())}}
 */
let VegaParser;
/**
 * @typedef {{parse: VegaParser}}
 */
let VegaObject;
/* @type {VegaObject} */
window.vg;

// amp-date-picker externs
/**
 * @type {function(*)}
 */
let ReactRender = function() {};

/**
 * @struct
 */
let PropTypes = {};

/**
 * @struct
 */
let ReactDates = {};

/** @constructor */
ReactDates.DayPickerSingleDateController;

/** @struct */
ReactDates.DayPickerRangeController;

/** @type {function(*):boolean} */
ReactDates.isInclusivelyAfterDay;

/** @type {function(*):boolean} */
ReactDates.isInclusivelyBeforeDay;

/** @type {function(*,*):boolean} */
ReactDates.isSameDay;

/**
 * @struct
 */
let ReactDatesConstants = {};

/** @const {string} */
ReactDatesConstants.ANCHOR_LEFT;

/** @const {string} */
ReactDatesConstants.HORIZONTAL_ORIENTATION;

// Should have been defined in the closure compiler's extern file for
// IntersectionObserverEntry, but appears to have been omitted.
IntersectionObserverEntry.prototype.rootBounds;

// TODO (remove after we update closure compiler externs)
window.PerformancePaintTiming;
window.PerformanceObserver;
Object.prototype.entryTypes

// Externed explicitly because this private property is read across
// binaries.
Element.prototype.implementation_ = {};
Element.prototype.signals;
window.whenSignal;

/** @typedef {number}  */
var time;

/**
 * This type signifies a callback that can be called to remove the listener.
 * @typedef {function()}
 */
var UnlistenDef;


/**
 * Just an element, but used with AMP custom elements..
 * @typedef {!Element}
 */
var AmpElement;

// Temp until we figure out forward declarations
/** @constructor */
var AccessService = function() {};
/** @constructor @struct */
var UserNotificationManager = function() {};
UserNotificationManager.prototype.get;
/** @constructor @struct */
var Cid = function() {};
/** @constructor @struct */
var Activity = function() {};
/** @constructor */
var AmpStoryVariableService = function() {};

// data
var data;
data.tweetid;
data.requestedHeight;
data.requestedWidth;
data.pageHidden;
data.changes;
data._context;
data.inViewport;
data.numposts;
data.orderBy;
data.colorscheme;
data.tabs;
data.hideCover;
data.hideCta;
data.smallHeader;
data.showFacepile;
data.showText;
data.productId;
data.imageUrl;
data.yotpoElementId;
data.backgroudColor;
data.reviewIds;
data.showBottomLine;
data.autoplayEnabled;
data.autoplaySpeed;
data.showNavigation;
data.layoutScroll;
data.spacing;
data.hoverColor;
data.hoverOpacity;
data.hoverIcon;
data.ctaText;
data.ctaColor;
data.appKey;
data.widgetType;
data.layoutRows;
data.demo;
data.uploadButton;
data.reviews;
data.headerText;
data.headerBackgroundColor;
data.bodyBackgroundColor;
data.data.fontColor;
data.width;

// 3p code
var twttr;
twttr.events;
twttr.events.bind;
twttr.widgets;
twttr.widgets.createTweet;
twttr.widgets.createMoment;
twttr.widgets.createTimeline;

var FB;
FB.init;

var gist;
gist.gistid;

var bodymovin;
bodymovin.loadAnimation;
var animationHandler;
animationHandler.play;
animationHandler.pause;
animationHandler.stop;
animationHandler.goToAndStop;
animationHandler.totalFrames;

// Validator
var amp;
amp.validator;
amp.validator.validateUrlAndLog = function(string, doc, filter) {}

// Temporary Access types (delete when amp-access is compiled
// for type checking).
Activity.prototype.getTotalEngagedTime = function() {};
Activity.prototype.getIncrementalEngagedTime = function(name, reset) {};
AccessService.prototype.getAccessReaderId = function() {};
AccessService.prototype.getAuthdataField = function(field) {};
// Same for amp-analytics
/**
 * The "get CID" parameters.
 * - createCookieIfNotPresent: Whether CID is allowed to create a cookie when.
 *   Default value is `false`.
 * @typedef {{
 *   scope: string,
 *   createCookieIfNotPresent: (boolean|undefined),
 * }}
 */
var GetCidDef;
/**
 * @param {string|!GetCidDef} externalCidScope Name of the fallback cookie
 *     for the case where this doc is not served by an AMP proxy. GetCidDef
 *     structure can also instruct CID to create a cookie if one doesn't yet
 *     exist in a non-proxy case.
 * @param {!Promise} consent Promise for when the user has given consent
 *     (if deemed necessary by the publisher) for use of the client
 *     identifier.
 * @param {!Promise=} opt_persistenceConsent Dedicated promise for when
 *     it is OK to persist a new tracking identifier. This could be
 *     supplied ONLY by the code that supplies the actual consent
 *     cookie.
 *     If this is given, the consent param should be a resolved promise
 *     because this call should be only made in order to get consent.
 *     The consent promise passed to other calls should then itself
 *     depend on the opt_persistenceConsent promise (and the actual
 *     consent, of course).
 * @return {!Promise<?string>} A client identifier that should be used
 *      within the current source origin and externalCidScope. Might be
 *      null if no identifier was found or could be made.
 *      This promise may take a long time to resolve if consent isn't
 *      given.
 */
Cid.prototype.get = function(
    externalCidScope, consent, opt_persistenceConsent) {}

AmpStoryVariableService.prototype.onStateChange = function(event) {};
AmpStoryVariableService.pageIndex;
AmpStoryVariableService.pageId;

var AMP = {};
window.AMP;
// Externed explicitly because we do not export Class shaped names
// by default.
/**
 * This uses the internal name of the type, because there appears to be no
 * other way to reference an ES6 type from an extern that is defined in
 * the app.
 * @constructor @struct
 * @extends {BaseElement$$module$src$base_element}
 */
AMP.BaseElement = class {
  /** @param {!AmpElement} element */
  constructor(element) {}
};

/**
 * This uses the internal name of the type, because there appears to be no
 * other way to reference an ES6 type from an extern that is defined in
 * the app.
 * @constructor @struct
 * @extends {AmpAdXOriginIframeHandler$$module$extensions$amp_ad$0_1$amp_ad_xorigin_iframe_handler}
 */
AMP.AmpAdXOriginIframeHandler = class {
  /**
   * @param {!AmpAd3PImpl$$module$extensions$amp_ad$0_1$amp_ad_3p_impl|!AmpA4A$$module$extensions$amp_a4a$0_1$amp_a4a} baseInstance
   */
  constructor(baseInstance) {}
};

/**
 * This uses the internal name of the type, because there appears to be no
 * other way to reference an ES6 type from an extern that is defined in
 * the app.
 * @constructor @struct
 * @extends {AmpAdUIHandler$$module$extensions$amp_ad$0_1$amp_ad_ui}
 */
AMP.AmpAdUIHandler = class {
  /**
   * @param {!AMP.BaseElement} baseInstance
   */
  constructor(baseInstance) {}
};

/*
     \   \  /  \  /   / /   \     |   _  \     |  \ |  | |  | |  \ |  |  /  _____|
 \   \/    \/   / /  ^  \    |  |_)  |    |   \|  | |  | |   \|  | |  |  __
  \            / /  /_\  \   |      /     |  . `  | |  | |  . `  | |  | |_ |
   \    /\    / /  _____  \  |  |\  \----.|  |\   | |  | |  |\   | |  |__| |
    \__/  \__/ /__/     \__\ | _| `._____||__| \__| |__| |__| \__|  \______|

  Any private property for BaseElement should be declared in
  build-system/amp.extern.js, this is so closure compiler doesn't rename
  the private properties of BaseElement since if it did there is a
  possibility that the private property's new symbol in the core compilation
  unit would collide with a renamed private property in the inheriting class
  in extensions.
 */
var SomeBaseElementLikeClass;
SomeBaseElementLikeClass.prototype.layout_;

/** @type {number} */
SomeBaseElementLikeClass.prototype.layoutWidth_;

/** @type {boolean} */
SomeBaseElementLikeClass.prototype.inViewport_;

SomeBaseElementLikeClass.prototype.actionMap_;

AMP.BaseTemplate;

AMP.RealTimeConfigManager;

/**
 * Actual filled values for this exists in
 * extensions/amp-a4a/0.1/real-time-config-manager.js
 * @enum {string}
 */
const RTC_ERROR_ENUM = {};

/** @typedef {{
      response: (Object|undefined),
      rtcTime: number,
      callout: string,
      error: (RTC_ERROR_ENUM|undefined)}} */
var rtcResponseDef;

/**
 * This symbol is exposed by browserify bundles transformed by
 * `scoped-require.js` to avoid polluting the global namespace with `require`.
 * It allows AMP extensions to consume code injected into their binaries that
 * cannot be run through Closure Compiler, e.g. React code with JSX.
 * @type {!function(string):?}
 */
AMP.require;

/**
 * TransitionDef function that accepts normtime, typically between 0 and 1 and
 * performs an arbitrary animation action. Notice that sometimes normtime can
 * dip above 1 or below 0. This is an acceptable case for some curves. The
 * second argument is a boolean value that equals "true" for the completed
 * transition and "false" for ongoing.
 * @typedef {function(number, boolean):?|function(number):?}
 */
var TransitionDef;

///////////////////
// amp-bind externs
///////////////////

/**
 * @typedef {{method: string, args: !Array, scope: number, id: number}}
 */
let ToWorkerMessageDef;

/**
 * @typedef {{method: string, returnValue: *, id: number}}
 */
let FromWorkerMessageDef;

/**
 * Structured cloneable representation of an <amp-bind-macro> element.
 * @typedef {{id: string, argumentNames: Array<string>, expressionString: string}}
 */
let BindMacroDef;

/**
 * Structured cloneable representation of a binding e.g. <p [text]="foo>.
 * @typedef {{tagName: string, property: string, expressionString: string}}
 */
let BindBindingDef;

/**
 * Structured cloneable representation of a JS error.
 * @typedef {{message: string, stack: string}}
 */
let BindEvaluatorErrorDef;

/**
 * Possible types of an amp-bind expression result.
 * @typedef {(null|boolean|string|number|Array|Object)}
 */
let BindExpressionResultDef;

/**
 * Structured cloneable return value for 'bind.evaluateBindings' API.
 * @typedef {{results: !Object<string, BindExpressionResultDef>, errors: !Object<string, !BindEvaluatorErrorDef>}}
 */
let BindEvaluateBindingsResultDef;

/**
 * Structured cloneable return value for 'bind.evaluateExpression' API.
 * @typedef {{result: BindExpressionResultDef, error: ?BindEvaluatorErrorDef}}
 */
let BindEvaluateExpressionResultDef;

/////////////////////////////
////// Web Anmomation externs
/////////////////////////////
/**
 * @typedef {
 *   !WebMultiAnimationDef|
 *   !WebSwitchAnimationDef|
 *   !WebCompAnimationDef|
 *   !WebKeyframeAnimationDef
 * }
 */
var WebAnimationDef;


/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   animations: !Array<!WebAnimationDef>,
 * }}
 */
var WebMultiAnimationDef;


/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   switch: !Array<!WebAnimationDef>,
 * }}
 */
var WebSwitchAnimationDef;


/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   animation: string,
 * }}
 */
var WebCompAnimationDef;


/**
 * @mixes WebAnimationSelectorDef
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @mixes WebAnimationConditionalDef
 * @typedef {{
 *   keyframes: (string|!WebKeyframesDef),
 * }}
 */
var WebKeyframeAnimationDef;


/**
 * @typedef {!Object<string, *>|!Array<!Object<string, *>>}
 */
var WebKeyframesDef;


/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties
 *
 * @mixin
 * @typedef {{
 *   duration: (time|undefined),
 *   delay: (time|undefined),
 *   endDelay: (time|undefined),
 *   iterations: (number|string|undefined),
 *   iterationStart: (number|undefined),
 *   easing: (string|undefined),
 *   direction: (?|undefined),
 *   fill: (?|undefined),
 * }}
 */
var WebAnimationTimingDef;


/**
 * Indicates an extension to a type that allows specifying vars. Vars are
 * specified as properties with the name in the format of `--varName`.
 *
 * @mixin
 * @typedef {Object}
 */
var WebAnimationVarsDef;


/**
 * Defines media parameters for an animation.
 *
 * @mixin
 * @typedef {{
 *   media: (string|undefined),
 *   supports: (string|undefined),
 * }}
 */
var WebAnimationConditionalDef;


/**
 * @typedef {{
 *   target: (!Element|undefined),
 *   selector: (string|undefined),
 *   subtargets: (!Array<!WebAnimationSubtargetDef>|undefined),
 * }}
 */
var WebAnimationSelectorDef;


/**
 * @mixes WebAnimationTimingDef
 * @mixes WebAnimationVarsDef
 * @typedef {{
 *   matcher: (function(!Element, number):boolean|undefined),
 *   index: (number|undefined),
 *   selector: (string|undefined),
 * }}
 */
var WebAnimationSubtargetDef;
