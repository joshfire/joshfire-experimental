(function(J, Ext, _) {


  J.UI.ToolbarSencha = J.Class(J.UI.ToolbarBase, /** @lends J.UI.PanelSencha.prototype */ {
    /**
    * @function init
    *
    */
    __constructor: function(app, path, options) {
      this.__super(app, path, _.extend(options, {
        autoInsert: true
      }));
    },
    init: function() {

    },

    /**
    * @function
    * @param {var}
    */
    insert: function(parentEl) {
      var opts = {
        xtype: 'toolbar',
        dock: 'top',
        title: 'toolbar title'
      };


      opts.cls = 'joshfire-id-' + this.id;

      opts = Ext.apply(opts, this.options.senchaOptions || {});

      //opts.renderTo=parentEl;
      this.senchaElement = new Ext.Toolbar(opts);

      this.__super(parentEl);
      this.registerInParent(parentEl);
      this.insertChildren(false);



    }
  });

  J.UI.Toolbar = J.UI.ToolbarSencha;

})(Joshlib, Ext, _);
