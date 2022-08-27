let url=`http://localhost:3000/gift&candles`
let categoryName=document.getElementById('categoryName')
let categoryQty=document.getElementById('categoryQty')
async function showData(){
    try {
        let res=await fetch(url)
        let data=await res.json()
        append(data)
        categoryName.innerText=`Gift Ideas`
        categoryQty.innerText=`${data.length} products`
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


// category.innerText=`Gifts `
function append(data){
    let container=document.getElementById('rightDown')
    container.innerHTML=null
    data.forEach((el)=>{
        let div = document.createElement('div')
        div.addEventListener('click',()=>{
            addData(el)
        })
        div.setAttribute('class','div')
        let img=document.createElement('img')
        img.src=el.images.image[0]
        img.setAttribute('class','img')
        let title=document.createElement('h5')
        title.innerText=el.title
        let price=document.createElement('p')
        price.innerText=`$ ${el.price}`
        let Color=document.createElement('p')
        Color.innerText=el.color

        div.append(img,title,price,Color)
        container.append(div)
    })
}
let addData=(data)=>{
    localStorage.setItem('ProductData',JSON.stringify(data))
    // console.log(JSON.parse(localStorage.getItem('ProductData')))
}
showData()