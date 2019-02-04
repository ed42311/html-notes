function onLoadContent() {
  console.log('loaded')
}
function onClickYay() {
  console.log('clicked')
}
document.addEventListener('DOMContentLoaded', onLoadContent)
document
  .getElementById('btn-yay')
  .addEventListener('click', onClickYay)
let arr = ["thing", 2, 5.0, [1,2]]
for (var i = 0; i < arr.length; i++) {
  arr[i]
}
