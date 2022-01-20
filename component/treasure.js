AFRAME.registerComponent('treasure', {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      var id = `treasure${i}`
      var posX = (Math.random() * 3000 + (-1000))
      var posY = (Math.random() * 2 + (-1))
      var posZ = (Math.random() * 3000 + -1000)
      var position = {
        x: posX,
        y: posY,
        z: posZ
      }
      this.createTreasure(id, position)
    }
  },
  createTreasure: function(id, position) {
    var seabed_1 = document.querySelector('#seabed')
    var treasure_1 = document.createElement('a-entity')
    treasure_1.setAttribute('gltf-model', 'assets/treasure/scene.gltf')
    treasure_1.setAttribute('animation-mixer', {})
    treasure_1.setAtrribute('id', id)
    treasure_1.setAtrribute('position', position)
    seabed_1.appendChild(treasure_1)
  }
})