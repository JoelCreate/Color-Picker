const colorScheme = document.getElementById("color-scheme")
const getColorSchemeBtn = document.getElementById("get-color-scheme")
const selectScheme = document.getElementById("select-scheme")


fetch(`https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome`) 
    .then(res => res.json())
    .then(data => {

        const colorArr = data.colors        
        
        let html =""

        for (let colorInfo of colorArr) {
            html += `
            <div class="color-list" id="colors-displayed" style="background:${colorInfo.hex.value}"></div>
            <!--<div id="color-hex-values">${colorInfo.hex.value}</div>-->
            <div id="color-name-values">${colorInfo.name.value}</div>
            `
        }
        
        colorScheme.innerHTML = html

})


getColorSchemeBtn.addEventListener("click", function(){

    let seedColor = document.getElementById("color-selected")
    const selectedColor = seedColor.value
    const queryString = 'hex=' + encodeURIComponent(selectedColor)    
    const selectedColorScheme = selectScheme.value.toLowerCase()    

    fetch(`https://www.thecolorapi.com/scheme?${queryString}&mode=${selectedColorScheme}`) 
        .then(res => res.json())
        .then(data => {

            const colorArr = data.colors
                        
            let html =""

            for (let colorInfo of colorArr) {
                html += `
                <div class="color-list" id="colors-displayed" style="background:${colorInfo.hex.value}"></div>
                <!--<div id="color-hex-values">${colorInfo.hex.value}</div>-->
                <div id="color-name-values">${colorInfo.name.value}</div>
                `
            }
            
            colorScheme.innerHTML = html

    })

})





