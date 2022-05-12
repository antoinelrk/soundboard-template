const numberOfSongs = 30
let grid = document.querySelector('.centered-wrapper')

let template = ''

for (let i = 1; i < numberOfSongs; i++) {

  if (i === 5) {
    template += `<button disabled class="run-sound">Son n°${i} is disabled</button>`
  } else {
    template += `<button class="run-sound">Son n°${i}</button>`
  }
}

grid.innerHTML = template