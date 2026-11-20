anime.timeline({
  autoplay: true,
  loop: true
})
.add({
  targets: '#line_lhs',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#line_rhs',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#line_rhs',
  translateX: 0,
  duration: 1200,
})

tl = anime.timeline({
  autoplay: false,
  loop: true
})

tl
.add({
  targets: '#exptrie2sym',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#realsym2asm',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#realsym2asm-arrow',
  opacity: [0,1],
  easing: 'easeInOutSine',
})
.add({
  targets: '#interpretation',
  duration: 1200,
  opacity: [0,1],
  easing: 'easeInOutSine',
})
.add({
  targets: '#lc_symtab2olrd_addr',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#symtab2exp',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#sym2asm',
  duration: 1200,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
})
.add({
  targets: '#sym2asmarrow',
  opacity: [0,1],
  easing: 'easeInOutSine',
})
.add({
  targets: '#sym2asmarrow',
  duration: 1200,
  translateX: 0,
})

var waypoint = new Waypoint({
  element: document.getElementById('modified'),
  handler: function(direction) {
    tl.play();
  }
})

