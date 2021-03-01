async function Bubble_sort(){
    for(let i = 0; i < array_size -1 ; i++){
        for(let j = 0; j < array_size - i - 1; j++){
            if(parseInt(document.getElementById(j).getAttribute("value")) > parseInt(document.getElementById(j+1).getAttribute("value")))
                await Swap(j, j+1);
        }
    }
}