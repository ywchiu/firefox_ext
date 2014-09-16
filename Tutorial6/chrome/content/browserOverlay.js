Components.utils.import("resource://tutorialhello/common.js");
Components.utils.import("resource://tutorialhello/messageCount.js");

/**
 * Tutorial namespace.
 */
if ("undefined" == typeof(Tutorial)) {
  var Tutorial = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
Tutorial.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("tutorialhello-string-bundle");
    let messageCount;
    let message;

    TutorialJSM.MessageCount.increment();
    messageCount = TutorialJSM.MessageCount.count;
    message =
      stringBundle.getFormattedString(
        "tutorialhello.greeting.label", [ messageCount ]);

    window.alert(message);
  }
};
