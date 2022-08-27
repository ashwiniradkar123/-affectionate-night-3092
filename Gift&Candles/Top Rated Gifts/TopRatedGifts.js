let url=`http://localhost:3000/gift&candles`
let categoryName=document.getElementById('categoryName')
let categoryQty=document.getElementById('categoryQty')

let sort=(abc)=>{
    let x=JSON.parse(localStorage.getItem('sandy'))
    // let y=x
    // console.log(x)
    // console.log(abc)
    let select=document.getElementById('sorting').value;
    // console.log(select)
    if(select=="ALL"){
        append(x)
        // console.log(abc)
    }
    if(select=="LTH"){
        // showData()
        x.sort(function(a,b){
        //     // console.log(x)
            return a.price-b.price
            
        //     // console.log('b.price = ',b.price)
        })
        // console.log(abc)
        append(x)
    }else if(select=="HTL"){
      x.sort((a,b)=>{
        return b.price-a.price
      })
      append(x)
    }
}

let day=[
    {
        "title": "Alexandra Candle",
        "brand": "Anthropologie",
        "price": "44.00",
        "color": "HONEYCRISP OAKWOOD (FRESH APPLE)",
        "productDetails": "Night Gardenia (Floral Fruity): A delicate breeze of fragrant gardenia, salted guava, and soft tonka nestle within an unexpected warm musk base.",
        "rating": "https://th.bing.com/th/id/R.a95aa26275b225b025050f2466ad9782?rik=uXoBZWckX56OJg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-59mw3rA-WN8%2fUaIxFvUgW9I%2fAAAAAAAAO7c%2fi-YXmurngqE%2fs1600%2f.5%2bstars.jpg&ehk=HxxPmaNhjxEZhfjUXyD8nJL043R3iw%2fY5%2b1Lz7SXgVU%3d&risl=&pid=ImgRaw&r=0",
        "type": "Candle Gifts & Sets",
        "images": {
          "image": [
            "https://images.urbndata.com/is/image/Anthropologie/67587972_004_b10?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/67587972_004_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/67587972_004_b2?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/67587972_004_a10?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500"
          ]
        },
        "id": 1
      },
      {
        "title": "Capri Blue Capiz Jar Candle",
        "brand": "Capri Blue",
        "price": "36.00",
        "color": " VOLCANO (FRESH FRUITY)",
        "productDetails": "Featuring a shimmering pink capiz vessel, this candle infuses any space with Capri Blue's beloved Volcano scent.",
        "rating": "https://th.bing.com/th/id/R.d99e2923c09d2dcf2a1c3a6d57828f38?rik=qGDfkHyadrl6ow&riu=http%3a%2f%2f1.bp.blogspot.com%2f-165Wvt735Z0%2fUU1Ogbdb7pI%2fAAAAAAAADZs%2fdlycb0HsMUs%2fs320%2f4%2bout%2bof%2b5%2bstars.jpg&ehk=K6Q5eVz2EmpEC06NYd14et55aa07wQ4Ivio9mD9QB1M%3d&risl=&pid=ImgRaw&r=0",
        "type": "Candle Gifts & Sets",
        "images": {
          "image": [
            "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b14?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b2?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500"
          ]
        },
        "id": 2
      },
      {
        "title": "Casual Draped Knit Set",
        "brand": "Anthropologie",
        "price": "180.00",
        "color": "NEUTRAL",
        "productDetails": "Style No. 67123141; Color Code: 014",
        "rating": "https://th.bing.com/th/id/R.a95aa26275b225b025050f2466ad9782?rik=uXoBZWckX56OJg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-59mw3rA-WN8%2fUaIxFvUgW9I%2fAAAAAAAAO7c%2fi-YXmurngqE%2fs1600%2f.5%2bstars.jpg&ehk=HxxPmaNhjxEZhfjUXyD8nJL043R3iw%2fY5%2b1Lz7SXgVU%3d&risl=&pid=ImgRaw&r=0",
        "type": "Candle Gifts & Sets",
        "images": {
          "image": [
            "https://images.urbndata.com/is/image/Anthropologie/67123141_014_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/67123141_014_b2?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/67123141_014_b3?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/67123141_014_b4?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500"
          ]
        },
        "id": 3
      },
      {
        "title": "Monogram Pendant Necklace",
        "brand": "Anthropologie",
        "price": "38.00",
        "color": "Golden",
        "productDetails": "Style No. 37659125; Color Code: 901",
        "rating": "https://th.bing.com/th/id/R.d99e2923c09d2dcf2a1c3a6d57828f38?rik=qGDfkHyadrl6ow&riu=http%3a%2f%2f1.bp.blogspot.com%2f-165Wvt735Z0%2fUU1Ogbdb7pI%2fAAAAAAAADZs%2fdlycb0HsMUs%2fs320%2f4%2bout%2bof%2b5%2bstars.jpg&ehk=K6Q5eVz2EmpEC06NYd14et55aa07wQ4Ivio9mD9QB1M%3d&risl=&pid=ImgRaw&r=0",
        "type": "Candle Gifts & Sets",
        "images": {
          "image": [
            "https://images.urbndata.com/is/image/Anthropologie/37659125_901_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/37659125_901_b2?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/37659125_901_b14?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500",
            "https://images.urbndata.com/is/image/Anthropologie/37659125_901_b15?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=500"
          ]
        },
        "id": 4
      }
]

// day.sort(function(a,b){
//     return 
// })

// console.log(day)

// let a=[
//     {b:"20"},
//     {b:"30"},
//     {b:10}
// ]

// a.sort(function(a,b){
//     return a.b-b.b
// })

// console.log(a)

async function showData(){
    try {
        let res=await fetch(url)
        let data=await res.json()
        // append(data)
        categoryName.innerText=`Top Rated Gifts`
        categoryQty.innerText=`${data.length} products`
        sort(data)
        // let abc=data[1].price
        // console.log(abc)
        
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}


// category.innerText=`Gifts `
function append(data){
    localStorage.setItem("sandy",JSON.stringify(data))
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
// console.log(JSON.parse(localStorage.getItem('sandy')))
// document.querySelector("#sorting").addEventListener("change",handlefilter)
// function handlefilter(data){
//   let selected=document.querySelector("#sorting").value
//   if(selected=="ALL"){
//     append(data)
//     console.log(data)
//   }
//   else if(selected=="HTL"){
//     data.sort(function(a,b){
//         let s=+(a.price)
//         let y=+(b.price)
//        if(s>y){
//         return -1
//        }
//        if(s<y){
//         return 1
//        }
//        return 0
//     })
//     // append(x)
//     append(data)
//     console.log(data)
//   }
//   if(selected=="LTH"){
//      data.sort(function(a,b){
//          let s=+a.price
//          let y=+b.price
//         if(s<y){
//          return -1
//         }
//         if(s>y){
//          return 1
//         }
//         return 0
//      })
//      append(data)
//   } 
//   if(selected=="az"){
//      data.sort(function(a,b){
//          let s=a.title
//          let y=b.title
//         if(s<y){
//          return -1
//         }
//         if(s>y){
//          return 1
//         }
//         return 0
//      })
//      append(data)
//   } 
//   if(selected=="za"){
//      data.sort(function(a,b){
//          let s=a.title
//          let y=b.title
//         if(s>y){
//          return -1
//         }
//         if(s<y){
//          return 1
//         }
//         return 0
//      })
//      append(data)
//   } 
// }

// let sortingfun=()=>{
    
//     // let res =await fetch(`https://anthologie123.herokuapp.com/accessories`)
//     // let  data=await res.json();
//     let x=JSON.parse(localStorage.getItem("sandy"))
//     var select=document.getElementById("sorting").value;
//     // console.log(select)
//     if(select=="HTL"){
//     x.sort(function(a,b){
//         let s=+a.price
//         let y=+b.price
//        if(s>y){
//         return -1
//        }
//        if(s<y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
//  if(select=="LTH"){
//     x.sort(function(a,b){
//         let s=+a.price
//         let y=+b.price
//        if(s<y){
//         return -1
//        }
//        if(s>y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
//  if(select=="az"){
//     x.sort(function(a,b){
//         let s=a.title
//         let y=b.title
//        if(s<y){
//         return -1
//        }
//        if(s>y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
//  if(select=="za"){
//     x.sort(function(a,b){
//         let s=a.title
//         let y=b.title
//        if(s>y){
//         return -1
//        }
//        if(s<y){
//         return 1
//        }
//        return 0
//     })
//     append(x)
//  } 
// }