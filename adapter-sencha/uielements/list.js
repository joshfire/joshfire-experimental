(function(J, Ext, _) {


  Ext.regModel('JoslibListBase', {
    fields: ['id', 'item', 'i']
  });


  J.UI.ListSencha = J.Class(J.UI.ListBase, /** @lends J.UI.ListSencha.prototype */ {

    senchaData: [],

    /**
    * @function init
    *
    */
    init: function() {

      var self = this;

      //TODO extend Ext.data.Store
      self.senchaStore = new Ext.data.Store({
        model: 'JoslibListBase',
        sorters: 'id',
        data: this.senchaData
      });

    },

    /**
    * @function
    * @param {var}
    */
    insert: function(parentEl) {
      var self = this;

      //console.log("data",this.senchaStore);
      self.senchaElement = new Ext.List({

        itemTpl: '<div>' + self.options.itemInnerTemplate.replace(/<\%\=/g, '{').replace(/\%\>/g, '}') + '</div>',

        //renderTo:parentEl,
        singleSelect: !self.options.multiselect,
        cls: 'joshfire-id-' + self.id,

        //fullscreen:true,
        //floating: true,
        //width: 350,
        //height: 370,
        hideOnMaskTap: false,

        disclosure: {
          scope: 'test',
          /**
          * @function
          * @param {Object}
          * @param {Object}
          * @param {Object}
          */
          handler: function(record, btn, index) {
            alert('Navigate to ' + record.get('id'));
          }
        },

        store: self.senchaStore
      });

      self.senchaElement.on('selectionchange', function(selectionModel, records) {
        if (records.length === 0) return;

        //self.focusedIndex=self.id2index[records[0].data.id];
        self.selectById(records[0].data.id);
      });

      self.__super(parentEl);

      this.registerInParent(parentEl);

    },

    /**
    * @function
    * @param {var}
    */
    setData: function(data) {
      this.__super(data);
      this.senchaData = _.map(data, function(item, i) {
        return {
          i: i,
          item: item,
          id: item.id
        };
      });
      this.senchaStore.loadData(this.senchaData);
    }

  });





  J.UI.ListSenchaBottom = J.Class(J.UI.ListBase, /** @lends J.UI.ListSenchaBottom.prototype */ {

    // Sencha touch bug? : there must be at least one element in the initial items
    // for the element to be rendered correctly.
    senchaData: [{
      text: 'Empty',
      iconCls: 'info',
      cls: 'card card1'
    }],

    /**
    * init
    * @function
    */
    init: function() {

    },

    /**
    * @function
    * @param {var}
    */
    insert: function(parentEl) {

      this.senchaElement = new Ext.TabBar({
        dock: 'bottom',

        cls: 'joshfire-id-' + this.id,
        ui: 'dark',
        layout: {
          pack: 'center'
        },
        items: this.senchaData
      });


      var self = this;
      this.senchaElement.on('change', function(elt, tab, card) {
        self.selectById(tab.id);
      });

      this.__super(parentEl);

      this.registerInParent(parentEl);
    },

    /**
    * @function refresh
    *
    */
    refresh: function() {

      if (!this.senchaElement) return;

      //TODO perfs
      this.senchaElement.removeAll();
      for (var i = 0; i < this.senchaData.length; i++) {
        this.senchaElement.add(this.senchaData[i]);
      }
      this.senchaElement.doLayout();
    },

    /**
    * @function
    * @param {var}
    */
    setData: function(data) {
      this.__super(data);
      this.senchaData = _.map(data, function(item, i) {
        return {
          id: item.id,
          text: item.label,
          iconCls: 'info' //TODO
        };
      });
    }
  });



  J.UI.ListSenchaSegmentedButton = J.Class(J.UI.ListBase, /** @lends J.UI.ListSenchaBottom.prototype */ {

    /**
    * @function init
    *
    */
    init: function() {

      var self = this;

      this.isLoading = true;
      this.focusedIndex = null;
      this.data = [];
      this.id2index = {};
      this.grid = new J.Utils.Grid({}); //todo remove
      // Sencha touch bug? : there must be at least one element in the initial items
      // for the element to be rendered correctly.
      this.senchaData = [{
        text: 'Empty',
        iconCls: 'info',
        cls: 'card card1'
      }];

      this.senchaList = new Ext.SegmentedButton({
        items: this.senchaData,
        'ui': 'dark'
      });

      this.senchaElement = new Ext.Toolbar({
        dock: 'bottom',
        cls: 'joshfire-id-' + this.id,
        title: '',
        layout: {
          pack: 'center'
        },
        ui: 'dark',
        items: [this.senchaList]
      });


      this.senchaList.on('toggle', function(elt, tab, card) {

        self.selectById(tab.id);

      });

    },

    /**
    * @function refresh
    *
    */
    refresh: function() {

      //TODO perfs
      this.senchaList.removeAll();
      for (var i = 0; i < this.senchaData.length; i++) {
        this.senchaList.add(this.senchaData[i]);
      }
      this.senchaList.doLayout();
    },

    /**
    * @function
    * @param {var}
    */
    setData: function(data) {

      this.data = data;
      this.isLoading = false;

      //todo: do this in tree
      for (var i = 0; i < data.length; i++) {
        this.id2index[data[i].id] = i;
      }

      var items = [];

      for (i = 0; i < this.data.length; i++) {
        items[i] = {
          id: this.data[i].id,
          text: this.data[i].label
          //iconCls: 'info'
          //cls
          //badgeText: '4'
        };
      }
      this.senchaData = items;
    }
  });



})(Joshlib, Ext, _);
