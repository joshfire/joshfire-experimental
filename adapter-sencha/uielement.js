(function(J, Ext, _) {


  J.UIElementSencha = J.Class(J.UIElementBase, /** @lends J.UI.UIElementSencha.prototype */ {

    //TODO CLEAN
    /**
    * @function
    */
    getDefaultOptions: function() {
      return _.extend(this.__super(), {
        hideDelay: 0,
        autoInsert: true,
        showOnFocus: true,
        showOnPreFocus: true,
        hideOnBlur: true,
        innerTemplate: '<%=htmlInner%>'
      });
    },

    /**
    * @function
    */
    init: function() {
      this.senchaElement = false;
    },

    /**
    * Puts the element in loading mode
    * @function
    */
    setLoading: function(isLoading) {
      if (this.senchaElement) this.senchaElement.setLoading(isLoading);
    },

    /**
    * Show the element right away
    * @function
    */
    show: function() {
      this.publish('beforeShow');
      this.senchaElement.show();
      this.publish('afterShow');
    },

    /**
    * Hide the element right away
    * @function
    */
    hide: function() {

      this.publish('beforeHide');
      this.senchaElement.hide();
      this.publish('afterHide');
    },

    /**
    * Show the element, possibly with a delay
    * @function
    */
    showDelayed: function() {
      return this.show();
    },

    /**
    * Hide the element, possibly with a delay
    * @function
    */
    hideDelayed: function() {
      return this.hide();
    },

    /**
    * @function
    * @param {Object} string
    */
    insert: function(parentElement) {

    },

    /**
    * @function
    * @param {Object} string
    */
    registerInParent: function(parentElement) {
      if (parentElement.senchaElement) {
        if (this.senchaElement.dock) {
          parentElement.senchaElement.addDocked(this.senchaElement);
        } else {
          parentElement.senchaElement.add(this.senchaElement);
        }

        parentElement.senchaElement.doLayout();
      }
    }

  });

  J.UIElement = J.UIElementSencha;

})(Joshlib, Ext, _);
