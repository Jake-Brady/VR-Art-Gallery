const AFRAME = require('aframe')
const THREE = require('three')

AFRAME.registerComponent('clock', {
  schema: {
    color: {type: 'color', default: '#0f0'},
    font: {type: 'string', default: 'monoid'}
  },
  init: function () {
    this.clockEl = document.createElement('a-text');
    this.el.appendChild(this.clockEl); 
    this.clockEl.setAttribute('color', this.data.color);
    this.clockEl.setAttribute('font', this.data.font);
  },
  tick: function(){
    this.clockEl.setAttribute('value', this.getTime());
  }, 
  getTime: function() {
          var d = new Date();
          return d.toLocaleTimeString();
  }  
});



