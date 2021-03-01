async function Selection_Sort(){
    for(var a = 0; a < array_size; a++){
        let min = a;
        for(var b = a + 1; b < array_size; b++){
            if(array[b] < array[min]){
                min = b;
            }
        }
        await Swap(a, min);
    }
}