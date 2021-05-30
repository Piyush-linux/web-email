let toggle=document.querySelector('.toggle')
let cross=document.querySelector('.cross')
let ul=document.querySelector('nav ul')

toggle.onclick=()=>{
	ul.style.display = 'inline-block'
}
cross.onclick=()=>{
	ul.style.display = 'none'
}