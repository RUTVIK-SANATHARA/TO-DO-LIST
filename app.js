console.log("this is to-do list");

let screen = document.getElementById('screen');


let btn=document.getElementById('btn');

btn.addEventListener('click',function(){



    let print=document.getElementById('print');
  if(screen.value==''){

  }
  else{
  console.log('sjj')
  var para=document.createElement('p');
  var hr=document.createElement('hr');
  para.innerText=screen.value;
  para.appendChild(hr);
  print.appendChild(para);
  }


para.addEventListener('click',function(){

    para.style.textDecoration="line-through";
})
para.addEventListener('dblclick',function(){

    print.removeChild(para);

})

});
