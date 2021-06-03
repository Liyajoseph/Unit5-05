let number = 0

document.getElementById('button').addEventListener('click', square)

function square () {
  number = document.getElementById('text1').value

  number = number * number

  alert(number)
}
