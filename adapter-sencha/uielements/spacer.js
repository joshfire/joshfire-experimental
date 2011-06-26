(function(J, Ext) {
  J.UI.SpacerSencha = J.Class(J.UIElement, /** @lends J.UI.UIElement.prototype */ {
    type: 'Spacer',

    /**
    * @function init
    *
    */
    init: function() {

    },

    /**
    * @function
    * @param {var}
    */
    insert: function(parentEl) {

      var opts = {
        xtype: 'spacer'
      };



      opts.cls = 'joshfire-id-' + this.id;

      opts = Ext.apply(opts, this.options.senchaOptions || {});

      //opts.renderTo=parentEl;
      this.senchaElement = new Ext.Spacer(opts);

      this.__super(parentEl);
      this.registerInParent(parentEl);

      this.insertChildren(false);



    }
  });

})(Joshlib, Ext);
