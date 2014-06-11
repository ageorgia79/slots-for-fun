'use strict';

var Photo = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    url: ''
  },
});
//MODEL ABOVE THIS LINE//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PhotoCollectionOne = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/georgiasphoto'
});

//COLLECTION ONE ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PhotoCollectionTwo = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/georgiasphotos'
});

//COLLECTION TWO ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PhotoCollectionThree = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/moregeorgiasphotos'
});

//COLLECTION THREE ABOVE THIS LINE///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ThumbnailViewOne = Backbone.View.extend({

  classname: 'thumbnail',

  thumbnailTemplate: _.template($('.thumbnail-template').text()),

  events: {

    'click .movebutton1': 'jump1',
    'click .movebutton2': 'jump2',
    'click .deletebutton1': 'destroy',

  },

  initialize: function(){
    $('.modelcage1').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.thumbnailTemplate(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },

  
});

//VIEW ONE ABOVE THIS LINE///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ThumbnailViewTwo = Backbone.View.extend({

  classname: 'thumbnail',

  thumbnailTemplate2: _.template($('.thumbnail-template-two').text()),

  events: {

    'click .movebutton3': 'jump3',
    'click .movebutton4': 'jump4',
    'click .savebutton1': 'save',
  },

  initialize: function(){
    $('.modelcage2').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.thumbnailTemplate2(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },
});

//VIEW TWO ABOVE THIS LINE///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ThumbnailViewThree = Backbone.View.extend({

  classname: 'thumbnail',
  thumbnailTemplate3: _.template($('.thumbnail-template-three').text()),

  events: {

    'click .movebutton5': 'jump5',
    'click .movebutton6': 'jump6',
    'click .savebutton2': 'save2',
  },

  initialize: function(){
    $('.modelcage3').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.thumbnailTemplate3(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },
});

//VIEW THREE ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var AppView = Backbone.View.extend({

  initialize: function(){
    var coolPhotos = new PhotoCollectionOne();
    var coolerPhotos = new PhotoCollectionTwo();
    var coolestPhotos = new PhotoCollectionThree();

    coolPhotos.fetch();
    coolerPhotos.fetch();
    coolestPhotos.fetch();

    this.listenTo(coolPhotos, 'add', function(photo1){
      new ThumbnailViewOne({model: photo1});
    });
    this.listenTo(coolerPhotos, 'add', function(photo2){
      new ThumbnailViewTwo({model: photo2});
    });
    this.listenTo(coolestPhotos, 'add', function(photo3){
      new ThumbnailViewThree({model: photo3})
    });
  },
});

new AppView();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

