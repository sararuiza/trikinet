//selectores

const trikibody = document.querySelector(".trikibody")


const card=document.createElement("div")
const photo=document.createElement("div")
const name=document.createElement("h3")
const powers=document.createElement("div")

card.classList.add("trikibody__card")
photo.classList.add("card__photo")
name.classList.add("card__name")
powers.classList.add("card__powers")


card.appendChild(photo)
card.appendChild(name)


for( let i=0; i==2; i++ ){
    const power = document.createElement("div")
    power.classList.add("card__powers--i")
    powers.appendChild(power)
}

card.appendChild(powers)
trikibody.appendChild(card)