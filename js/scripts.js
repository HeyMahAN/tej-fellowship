window.onload = function(){
    alert('Hello TEJ!');
}

function hello(){
   alert('Hello there!');
}

function incrementButton(){
    var element = document.getElementById('increment');
    var value = element.innerHTML;
    ++value;
    document.getElementById('increment').innerHTML = value;
}

function decrementButton(){
    var element = document.getElementById('increment');
    var value = element.innerHTML;
    --value;

    if(value >= 0){
        document.getElementById('increment').innerHTML = value;
    }
    else{
        console.error("can't decrement further");
    }
}