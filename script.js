import Masonry from 'masonry-layout'

window.onload = () => {
	var grid = document.querySelector(".grid")
	var masonry = new Masonry(grid, {
		itemSelector: ".grid-item"
	})
}