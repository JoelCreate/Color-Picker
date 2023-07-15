const colorScheme = document.getElementById("color-scheme")
const colorSelected = document.getElementById("color-selected")

fetch("https://www.thecolorapi.com/scheme?hex=245657&mode=monochrome&count=6") 
 .then(res => res.json())
 .then(data => {

    const colorArr = data.colors
    console.log(colorArr)

    let html =""

    for (let colorInfo of colorArr) {
        html += `
        <div class="color-list" id="colors-displayed" style="background:${colorInfo.hex.value}"></div>
        <div id="color-hex-values">${colorInfo.hex.value}</div>
        `
    }
    
    colorScheme.innerHTML = html

 })