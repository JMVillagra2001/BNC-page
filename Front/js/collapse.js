var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))


var collapse1 = document.getElementById('collapse1')

collapse1.addEventListener('show.bs.collapse', function () {
  document.getElementById('collapse1Header').classList.add('open')
})

collapse1.addEventListener('hidden.bs.collapse', function () {
  document.getElementById('collapse1Header').classList.remove('open')
})


var collapse2 = document.getElementById('collapse2')

collapse2.addEventListener('show.bs.collapse', function () {
  document.getElementById('collapse2Header').classList.add('open')
})

collapse2.addEventListener('hidden.bs.collapse', function () {
  document.getElementById('collapse2Header').classList.remove('open')
})


var collapse3 = document.getElementById('collapse3')

collapse3.addEventListener('show.bs.collapse', function () {
  document.getElementById('collapse3Header').classList.add('open')
})

collapse3.addEventListener('hidden.bs.collapse', function () {
  document.getElementById('collapse3Header').classList.remove('open')
})
