(function(J, Ext) {



  J.UI.ButtonSencha = J.Class(J.UI.ButtonBase, {
    /**
    * @function init
    *
    */
    init: function() {

    },
    insert: function(parentEl) {
      var opts = {
        xtype: 'button',
        ui: 'normal'
      },
          self = this;
      // It's the parent element
      if (self.path == '') {
        opts.fullscreen = true;
      }
      opts = Ext.apply(opts, this.options.senchaOptions || {});


      opts.text = self.options.label || 'label ?';
      opts.cls = 'joshfire-id-' + self.id;
      opts.id = self.options.htmlId || 'btn-' + Math.random();

      self.senchaReverseUI = {
        'normal': 'action',
        'action': 'normal'
      };

      self.senchaElement = new Ext.Button(opts);
      self.senchaElement.on('tap', function(elt, tab, card) {
        self.publish('select', null);
        if (self.senchaReverseUI[self.senchaElement.ui] && self.senchaReverseUI[self.senchaElement.ui] !== self.senchaElement.ui) {
          self.senchaElement.el.removeCls('x-button-' + self.senchaElement.ui);
          self.senchaElement.el.addCls('x-button-' + self.senchaReverseUI[self.senchaElement.ui]);
          self.senchaElement.ui = self.senchaReverseUI[self.senchaElement.ui];
        }
      });


      self.__super(parentEl);
      self.registerInParent(parentEl);

      self.insertChildren(false);



    }
  });

  J.UI.Button = J.UI.ButtonSencha;



  J.UI.SegmentedButtonSencha = J.Class(J.UI.ButtonBase, /** @lends J.UI.UIElement.prototype */ {
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
      var self = this,
          opts = {
            xtype: 'segmentedbutton',
            ui: 'action'
          };

      opts.cls = 'joshfire-id-' + self.id;
      opts = Ext.apply(opts, self.options.senchaOptions || {});
      self.senchaElement = new Ext.SegmentedButton(opts);

      self.senchaElement.on('toggle', function(container, button, pressed) {
        if (pressed) {
          self.publish('select', button.id);
        }
      });
      self.__super(parentEl);
      self.registerInParent(parentEl);
      self.insertChildren(false);



    }
  });

})(Joshlib, Ext);
