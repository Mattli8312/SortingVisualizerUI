async function Partition(l, h){
    let pivot = array[h];
    let i = l - 1;
    for(var a = l; a <= h -1; a++){
        if(array[a] < pivot){
            i++;
            await Swap(i, a);
        }
    }
    await Swap(i + 1, a);
    return i + 1;
}

async function Quick_Sort(l, h){
    if(l < h){
        let pi = await Partition(l, h);
        await Quick_Sort(l, pi - 1);
        await Quick_Sort(pi + 1, h);
    }
}