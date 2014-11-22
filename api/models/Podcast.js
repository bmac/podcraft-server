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
      defaultsTo: ''
    },
    
    title: {
      type: 'string',
      defaultsTo: ''
    },

    link: {
      type: 'string',
      defaultsTo: ''
    },

    language: {
      type: 'string',
      defaultsTo: ''
    },

    copyright: {
      type: 'string',
      defaultsTo: ''
    },

    subtitle: {
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

    summary: {
      type: 'string',
      defaultsTo: ''
    },

    description: {
      type: 'string',
      defaultsTo: ''
    },

    image: {
      type: 'string',
      defaultsTo: ''
    }
  }
};

