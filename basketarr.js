

let data_basket=JSON.parse(localStorage.getItem("basket-product")) || []

console.log(data_basket)
data_basket.forEach(el=> {
     let con=document.getElementById("append_basket")
    let con_child=document.createElement("div")
    con_child.setAttribute("id","con_child")


    let child=document.createElement("div")
    child.setAttribute("id","child")
    let img=document.createElement("img")
    img.src=el.images.image[0]
    img.setAttribute("id","data_img")
    child.append(img)


     let child1=document.createElement("div")
     child1.setAttribute("id","child1")
     let title=document.createElement("p")
     title.innerText=el.title
    
     let color=document.createElement("p")
     color.innerText="Color"+" "+":"+" "+el.color
     color.setAttribute("id","clr")

     let size=document.createElement("button")
     size.innerText="One Size"
     size.setAttribute("id","sz")

     child1.append(title,color,size)


     let child2=document.createElement("div")
     child2.setAttribute("id","child2")
     let price=document.createElement("p")
     price.innerText=el.price

     child2.append(price)

     let child3=document.createElement("div")
     child3.setAttribute("id","child3")
     let qty=document.createElement("select")
     qty.addEventListener("change",function(){
        let a=Number(el.price)
        let x=Number(qty.value)
        var s=a*x
        total.innerText=s
     })
     let op1=document.createElement("option")
     op1.innerText="1"
     qty.add(op1)
     let op2=document.createElement("option")
     op2.innerText="2"
     qty.add(op2)
     let op3=document.createElement("option")
     op3.innerText="3"
     qty.add(op3)
     let op4=document.createElement("option")
     op4.innerText="4"
     qty.add(op4)
     let op5=document.createElement("option")
     op5.innerText="5"
     qty.add(op5)
     let op6=document.createElement("option")
     op6.innerText="6"
     qty.add(op6)
     let op7=document.createElement("option")
     op7.innerText="7"
     qty.add(op7)
     let op8=document.createElement("option")
     op8.innerText="8"
     qty.add(op8)
     let op9=document.createElement("option")
     op9.innerText="9"
     qty.add(op9)
     let op10=document.createElement("option")
     op10.innerText="10"
     qty.add(op10)
     let op11=document.createElement("option")
     op11.innerText="11"
     qty.add(op11)
     let op12=document.createElement("option")
     op12.innerText="12"
     qty.add(op12)
     let op13=document.createElement("option")
     op13.innerText="13"
     qty.add(op13)
     let op14=document.createElement("option")
     op14.innerText="14"
     qty.add(op14)
     let op15=document.createElement("option")
     op15.innerText="15"
     qty.add(op15)
    
     child3.append(qty)

     let child4=document.createElement("div")
     child4.setAttribute("id","child4")

     let total=document.createElement("p")
     total.innerText=el.price

     let remove=document.createElement("a")
     remove.href="#"
     remove.innerText="Remove"
     remove.setAttribute("id","remove")
     remove.addEventListener("click",function(){
        data_basket.splice(index,1)
        localStorage.setItem("basket-product",JSON.stringify(data_basket))
        window.location.reload()
     })
     child4.append(total,remove)
    let x=  document.createElement("div")
    x.setAttribute("id","x")
  con_child.append(child,child1,child2,child3,child4,x)
  con.append(con_child)
});