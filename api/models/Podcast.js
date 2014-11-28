/**
* Podcast.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    feedXML: {
      type: 'text',
      defaultsTo: ''
    },

    feedUrl: {
      type: 'string',
      unique: true,
      url: true
    },
    
    title: {
      type: 'string',
      required: true,
      notEmpty: true
    },

    link: {
      type: 'string',
      required: true,
      url: true
    },

    language: {
      type: 'string',
      required: true
    },

    copyright: {
      type: 'string',
      required: true
    },

    subtitle: {
      type: 'string',
      required: true
    },

    author: {
      type: 'string',
      required: true
    },

    explicit: {
      type: 'boolean',
      boolean: true
    },

    summary: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    image: {
      type: 'string',
      required: true,
      notEmpty: true,
      url: true
    },

    // Associations
    episodes:{
      collection: 'episode',
      via: 'podcast'
    }
  }
};

