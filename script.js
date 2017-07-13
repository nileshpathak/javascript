var arr = ['Nilesh','Anil','Nilesh','Deepak','Avneet','Anil','Deepak','Avneet','Nilesh'];
var newArr = [];
var lenght = arr.length;
var concatTo = "";
for(var i=0; i<lenght; i++){
    var x = Math.floor(Math.random()*arr.length);
    newArr.push(arr[x]);
    arr.splice(x,1);
    if(i==4){
        concatTo =concatTo+'<br>'
    }
    else{        
        concatTo = concatTo+'<li onclick="getItemValue('+i+')">'+newArr[i] +'</li>';
    }
}
document.getElementById('listItem').innerHTML = concatTo;

function getItemValue(a){
    alert(newArr[a]);
}