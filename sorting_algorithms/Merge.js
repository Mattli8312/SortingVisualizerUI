async function Merge(l, m, r){
    let n1 = m - l + 1;//
    let n2 = r - m; //
    let L = [], R = []; //
    for(var a = 0; a < n1; a++){
        L.push(array[l + a]);
    }
    for(var a = 0; a < n2; a++){
        R.push(array[m + a + 1]);
    }
    let i = 0, j = 0;
    let k = l;
    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            array[k] = L[i];
            await Copy(i + l, k);
            i++;
        }
        else{
            array[k] = R[j];
            await Copy(j + m + 1, k);
            j++;
        }
        k++;
    }
    while(i < n1){
        array[k] = L[i];
        await Copy(i + l, k);
        k++;
        i++;
    }
    while(j < n2){
        array[k] = R[j];
        await Copy(j + m + 1, k);
        j++;
        k++;
    }
}

async function Merge_sort(l, r){
    await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 210-speed)
      );
    if(l < r){
        let m = Math.floor(l + (r-l)/2);
        await Merge_sort(l, m);
        await Merge_sort(m+1, r);
        await Merge(l, m, r);
    }
    return; //Returns recursively
}