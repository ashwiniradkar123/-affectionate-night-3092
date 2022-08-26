function codefreeship(){
    var divm=document.createElement("div")
    divm.setAttribute("id","divm")
    var div=document.createElement("div")
    div.setAttribute("id","freeship")
   var close=document.createElement("h1")
   close.setAttribute("id","close")
   close.innerText="X"
   close.addEventListener("click",closefun)
   function closefun(){
    document.querySelector("#divm").remove();
   }

    var h1=document.createElement("h2")
    h1.innerText="Buy Online, Pick Up In Store"
    var p1=document.createElement("p")
    var l=document.createElement("a")
    l.innerText="Learn more"
    l.href="https://www.sephora.com/beauty/pick-up-delivery-options"
    l.setAttribute("id","freeshiplearn")
    var r=document.createElement("i")
    r.setAttribute("class","fa-solid fa-caret-right")
    r.style.color="blue"
    p1.innerText="Purchase your products online and get them in a store near you today - in 2 hours or less! "
    p1.append(l,r)

    var h2=document.createElement("h2")
    h2.innerText="Free standard shipping on orders with code FREESHIP"
    var p2=document.createElement("p")
    p2.innerText="†Free standard shipping offer valid on merchandise purchases made through 11:59pm PT on 8/31/22 on sephora.com and sephora.ca. Offer not applicable to Same Day Shipping orders. Promotion offer has no cash value and may not be altered, sold, or transferred. May be used in conjunction with other offers. Sephora, JCPenney, and Kohl's employees are not eligible for this offer. Offer is subject to change, alteration, or termination by Sephora at its sole discretion at any time."

document.querySelector("#ubody").append(divm)
divm.append(div)
div.append(close,h1,p1,h2,p2)

}
function newm(){
  if (document.querySelector("#newm").innerText!=""){
    document.querySelector("#newm").innerText="";
  }
  
    var data=document.querySelector("#newm")
    var d=document.createElement("div")
    d.setAttribute("id","al_new_m")
    var l=document.createElement("a")}