let sortArr = [1,2,3,4,5,6,7,8,9];
let shuffledArr = [1,2,3,4,5,6,7,8,9];

function assignValues(){
    if(window.innerWidth<600){
        // mobile
        for(var i=0;i<9;i++){
            document.getElementById('block-'+(i+1)).getElementsByClassName('mob-number')[0].innerHTML = shuffledArr[i];
            if(shuffledArr[i]==1){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==2){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#2b8ead";
            } else if(shuffledArr[i]==3){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==4){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#2a8dac";
            } else if(shuffledArr[i]==5){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==6){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==7){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==8){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==9){
                document.getElementById('block-'+(i+1)).getElementsByClassName('mob-color')[0].style.backgroundColor="#2f454e";
            } 
        }
    } else {
        // web
        for(var i=0;i<9;i++){
            document.getElementById('block-'+(i+1)).innerHTML = shuffledArr[i];
            if(shuffledArr[i]==1){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==2){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#2b8ead";
            } else if(shuffledArr[i]==3){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==4){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#2a8dac";
            } else if(shuffledArr[i]==5){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#2f454e";
            } else if(shuffledArr[i]==6){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==7){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#bfbfbf";
            } else if(shuffledArr[i]==8){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#6f98a8";
            } else if(shuffledArr[i]==9){
                document.getElementById('block-'+(i+1)).style.backgroundColor="#2f454e";
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