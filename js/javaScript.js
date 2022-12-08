let button = document.querySelector('.comprar').addEventListener('click',() => {
        window.alert('202 ok')

        let div = document.querySelector('.kena')
        let product = document.querySelector('.product-list')
        product.appendChild(div)

        let aside = document.querySelector('.aside')
        aside.setAttribute('class','asideOn')
})