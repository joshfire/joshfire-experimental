(function(J, Ext) {

  J.UI.PanelSencha = J.Class(J.UI.PanelBase, /** @lends J.UI.PanelSencha.prototype */ {
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
      var opts = {};

      // It's the parent element
      if (this.path == '') {
        opts.fullscreen = true;
      }

      opts.cls = 'joshfire-id-' + this.id;

      if (this.options.itemInnerTemplate) {
        opts.tpl = '<div>' + this.options.itemInnerTemplate.replace(/<\%\=/g, '{').replace(/\%\>/g, '}') + '</div>';
      //    opts.data = self.data;
      } else {
        if (this.options.html) {
          opts.html = this.options.html;
        }
      }


      opts = Ext.apply(opts, this.options.senchaOptions || {});



      //opts.renderTo=parentEl;
      this.senchaElement = new Ext.Panel(opts);

      this.registerInParent(parentEl);

      this.insertChildren(true);



    },
    /**
    * @function
    * @param {var}
    */
    setData: function(data) {
      this.__super(data);
      this.senchaData = data;
      //             this.senchaElement.refresh();
      this.senchaElement.update(data);
    }
  });

  J.UI.Panel = J.UI.PanelSencha;

})(Joshlib, Ext);
