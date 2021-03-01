async function Insertion_sort(){
    let i, key, j;
    for(i = 1; i < array_size; i++){
        key = array[i];
        curr_hue = document.getElementById(i).style.background;
        j = i;
        while(j > 0 && array[j - 1] > key){
            array[j] = array[j-1];
            await Copy(j-1, j);
            j--;
        }
        array[j] = key;
        let b = document.getElementById(j);
        b.setAttribute("value", array[j]);
        b.style.height = array[j];
        b.style.background = curr_hue;
    }
}