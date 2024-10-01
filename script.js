let box=document.querySelectorAll("#btn");
let win=document.querySelector("h2");
let main=document.querySelector(".main");
let replay=document.querySelector("#new-game");
let count=0;

function dis(val){
  setTimeout(()=>{
    main.style.display="none";
    win.innerHTML=`winner is ${val}`;
    replay.style.opacity=1;
  },1000)

}
replay.addEventListener("click",()=>{
  location.reload();
})
function draw(){
  setTimeout(()=>{
    main.style.display="none";
    win.innerHTML=`match is draw`;
    replay.style.opacity=1;
  },1000)
}

let arr=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

let flag=true;
for(let boxes of box){
  boxes.addEventListener("click",()=>{
    count++;
    if(flag===true){
      boxes.innerText="x";
      flag=false;
    
    }
    else{
      boxes.innerText="o";
      flag=true;
    }
    boxes.disabled=true;
   let isWinner=winner();

   if(isWinner!= true && count===9){
   draw();
   }
  })
}


function disabled(ne){
  ne.disabled=true;
}

function winner(){
   
  for(let arr2 of arr){

    let val1=box[arr2[0]].innerText;
    let val2=box[arr2[1]].innerText;
    let val3=box[arr2[2]].innerText;
    

    if(val1 != "" && val2 != "" && val3 != ""){
      if(val1===val2 && val2===val3){
        disabled(arr2);
        dis(val1);
      }
    }
  }

}