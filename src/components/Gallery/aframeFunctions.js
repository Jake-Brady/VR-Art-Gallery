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

/*
 * ~ SCHEMA ~
 *  color       <String>: color of the stars
 *  radius      <Number>: distance from center of sphere to first star sphere
 *  depth       <Number>: distance between star spheres
 *  size        <Number>: size of each individual star
 *  count       <Number>: number of stars per star sphere
 *  texture     <Asset>:  sprite used for individual stars
 * 
 * ^ All credit goes to handyeco - https://github.com/handeyeco (Matthew Curtis)
 */

AFRAME.registerComponent('star-system', {
  schema: {
    color: {
      type: 'string',
      default: "#FFF"
    },
    radius: {
      type: 'number',
      default: 300,
      min: 0,
    },
    depth: {
      type: 'number',
      default: 300,
      min: 0,
    },
    size: {
      type: 'number',
      default: 1,
      min: 0,
    },
    count: {
      type: 'number',
      default: 10000,
      min: 0,
    },
    texture: {
      type: 'asset',
      default: ''
    }
  },

  update: function() {
    // Check for and load star sprite
    let texture = {};
    if (this.data.texture) {
      texture.transparent = true;
      texture.map = new AFRAME.THREE.TextureLoader().load(this.data.texture);
    }

    const stars = new AFRAME.THREE.Geometry();

    // Randomly create the vertices for the stars
    while (stars.vertices.length < this.data.count) {
        stars.vertices.push(this.randomVectorBetweenSpheres(this.data.radius, this.data.depth));
    }

    // Set the star display options
    const starMaterial = new AFRAME.THREE.PointsMaterial(Object.assign(texture, {
      color: this.data.color,
      size: this.data.size
    }));

    // Add the star particles to the element
    this.el.setObject3D('star-system', new AFRAME.THREE.Points(stars, starMaterial));
  },

  remove: function() {
    this.el.removeObject3D('star-system');
  },

  // Returns a random vector between the inner sphere
  // and the outer sphere created with radius + depth
  randomVectorBetweenSpheres: function(radius, depth) {
    const randomRadius = Math.floor(Math.random() * (radius + depth - radius + 1) + radius);
    return this.randomSphereSurfaceVector(randomRadius);
  },

  // Returns a vector on the face of sphere with given radius
  randomSphereSurfaceVector: function(radius) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return new AFRAME.THREE.Vector3(x, y, z);
  }
});

