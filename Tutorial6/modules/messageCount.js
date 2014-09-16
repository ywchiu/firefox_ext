var EXPORTED_SYMBOLS = [];

const Cc = Components.classes;
const Ci = Components.interfaces;

Components.utils.import("resource://tutorialhello/common.js");

/**
 * A counter.
 */
TutorialJSM.MessageCount = {
  _count : 0,

  get count() { return this._count; },

  increment : function() {
    this._count++;
  }
};
