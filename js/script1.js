var container=document.querySelector(".container");
var img=document.querySelectorAll(".img");
var p1=document.querySelectorAll(".p1");
var p2=document.querySelectorAll(".p2");
var p3=document.querySelectorAll(".p3");
var item=document.querySelectorAll(".item")
var arr=["img1.png","img2.jpg","img3.jpg","img1.png","img2.jpg","img3.jpg"]
var product2=[80,90,67,98,78,66]
var category=["fashion","category accessories","dimond","fashion","dimond","category accessories"]
//item.forEach(function(item1){
/*img.foreach(function(img1){
    for(var i=0;i<arr.length;i++)
    {
        img1.src="images/"+arr[i];

    }
}
)*/
item.forEach(function(item1){
    item1.style.float="left";
    item1.style.margin="12px";
    img.forEach(function(img1){
        for(var i=0;i<arr.length;i++)
        {
            img1.src="images/"+arr[i];
            img1.style.width="400px";
            img1.style.height ="200px";

        }
    })

    p1.forEach(function(p11){
        for(var i=0;i<product2.length;i++)
        {
            p11.innerHTML="Product :"+product2[i];
        }
    })
    p3.forEach(function(p33){
        for(var j=0;j<category.length;j++)
        {
            p33.innerHTML="Category:"+category[j];
        }
       
    })
})

