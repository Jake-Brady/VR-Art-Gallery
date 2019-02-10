const AFRAME = require('aframe')

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

// AFRAME.registerComponent('shooting-star', {
//   schema:{
//     color: {type: 'color', default:'#fff'},
//     width: {type: 'number', default: 1},
//     height: {type: 'number', default: 1},
//     depth: {type: 'number', default: 1},
//     lightColor: {type: 'color', default: '#E6B304'},
//     emissiveIntensity: {type: 'number', default: 1}
//   },
//   init: function() {
//     this.starEl = document.createElement('a-sphere');
//     this.el.append(this.starEl)

//     this.starEl.setAttribute('color', this.data.color);
//     this.starEl.setAttribute('width', this.data.width);
//     this.starEl.setAttribute('height', this.data.height);
//     this.starEl.setAttribute('depth', this.data.depth);
//     this.starEl.setAttribute('lightColor', this.data.lightColor);
//   }
// })


