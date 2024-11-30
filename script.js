var arr = [
    {name:"kunal sikarwar", img:"https://images.unsplash.com/photo-1709621036211-3a09f8de2aee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:'stranger'},
    {name:"Shanshank pal", img:"https://images.unsplash.com/photo-1622589902936-65ff575e442d?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:'stranger'},
    {name:" Tinku katkar", img:"https://plus.unsplash.com/premium_photo-1675129256093-a2a7705112e9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:'stranger'},

]

function print(){
    var repeator = "";
arr.forEach(function(val,index){
    repeator += `<div id="card">
            <div id="img">
                <img src="${val.img}" alt="">
            </div>
            <h2>${val.name}</h2>
            <h3 id ="${val.status === "stranger" ? "red" : "green"}">${val.status}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto blanditiis id nam aliquam minus.</p>
            <button class="${val.status}" id="${index}">${val.status === "stranger" ? "Add friend" : "Remove friend"}</button>
        </div>`;
})
document.querySelector("#main").innerHTML =repeator;
}
print();
document.querySelector("#main").addEventListener("click",function(details){
    arr[details.target.id].status = "friend";
    print();
})
