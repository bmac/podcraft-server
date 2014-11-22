/**
* Episode.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string',
      defaultsTo: ''
    },

    author: {
      type: 'string',
      defaultsTo: ''
    },

    explicit: {
      type: 'boolean',
      defaultsTo: ''
    },

    image: {
      type: 'string',
      defaultsTo: ''
    },

    summary: {
      type: 'string',
      defaultsTo: ''
    },

    mediaUrl: {
      type: 'string',
      defaultsTo: ''
    },

    pubDate: {
      type: 'datetime',
      defaultsTo: ''
    },

    // Associations
    podcast: {
      model: 'podcast',
      required: true
    }
  }
};

