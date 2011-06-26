(function(J, Ext, _) {


  J.UI.MapSencha = J.Class(J.UI.MapBase, /** @lends J.UI.PanelSencha.prototype */ {
    /**
    * @function init
    *
    */
    init: function() {
      var opts = {
        //useCurrentLocation:true,
        mapOptions: {
          zoom: 12
        }
      };

      opts.cls = 'joshfire-id-' + this.id;

      opts = _.extend(opts, this.options.senchaOptions || {});
      this.senchaElement = new Ext.Map(opts);

    },
    insert: function(parentElement) {
      this.registerInParent(parentElement);
    },
    /**
    * @function get map (sencha)
    *
    */
    getMap: function() {
      return this.senchaElement.map;
    }
  });

  J.UI.Map = J.UI.MapSencha;

})(Joshlib, Ext, _);
