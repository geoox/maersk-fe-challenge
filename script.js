let sortArr = [1,2,3,4,5,6,7,8,9];
let shuffledArr = [1,2,3,4,5,6,7,8,9];

function assignValues(){
    if(window.innerWidth<600){
        // mobile
        for(var i=0;i<9;i++){
            document.getElementById('block-'+(i+1)).getElementsByClassName('mob-number')[0].innerHTML = shuffledArr[i];
            let targetElementColor = document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0];
            if(shuffledArr[i]==1){
                targetElementColor.style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==2){
                targetElementColor.style.backgroundColor="#2b8ead";
            } else if(shuffledArr[i]==3){
                targetElementColor.style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==4){
                targetElementColor.style.backgroundColor="#2a8dac";
            } else if(shuffledArr[i]==5){
                targetElementColor.style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==6){
                targetElementColor.style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==7){
                targetElementColor.style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==8){
                targetElementColor.style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==9){
                targetElementColor.style.backgroundColor="#2f454e";
            } 
        }
    } else {
        // web
        for(var i=0;i<9;i++){
            let targetElement =  document.getElementById('block-'+(i+1));
            targetElement.innerHTML = shuffledArr[i];
            if(shuffledArr[i]==1){
                targetElement.style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==2){
                targetElement.style.backgroundColor="#2b8ead";
            } else if(shuffledArr[i]==3){
                targetElement.style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==4){
                targetElement.style.backgroundColor="#2a8dac";
            } else if(shuffledArr[i]==5){
                targetElement.style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==6){
                targetElement.style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==7){
                targetElement.style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==8){
                targetElement.style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==9){
                targetElement.style.backgroundColor="#2f454e";
            } 
        }
    }
}

function shuffle(){
    shuffledArr = sortArr.sort(() => Math.random() - 0.5);
    assignValues();
}

function sort(){
    shuffledArr = [1,2,3,4,5,6,7,8,9];
    assignValues();
}

assignValues();