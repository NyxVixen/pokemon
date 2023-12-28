// https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png
const darkModeBtn = document.querySelector('.dark-mode')
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement('div')
  const label = document.createElement('span')
  label.innerText = `#${i}`
  const newImg = document.createElement('img')
  newImg.src = `${baseURL}${i}.png`
  pokemon.appendChild(newImg)
  pokemon.appendChild(label)
  container.appendChild(pokemon)
}

darkModeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})





