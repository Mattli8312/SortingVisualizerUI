const bodyElement = document.getElementById('visualizer');

//Grab the body element of the website;

let array_size = 50;
let array = [];
let hue = 100;
let speed = 50;
let running = false;
//Define the size of the array
function Initialize_Visualizer(){
    bodyElement.style.margin = "auto";
    bodyElement.style.width = innerWidth * 0.8;
    bodyElement.style.height = innerHeight * 0.8
    bodyElement.style.flexWrap = "wrap";
    for(let i = 0 ; i < array_size; i ++){
        let bar = document.createElement('div')
        let height = Math.floor(Math.random() * 400) + 20;
        array.push(height);
        bar.style.width = innerWidth * 0.7 / array_size;
        bar.style.height = height;
        bar.setAttribute('value', height);
        bar.setAttribute('id', i);
        bar.style.background = "hsla("+(hue+height*0.2)+", 100%, 50%, 0.7)";
        bodyElement.appendChild(bar);
    }
}

function Reset(){
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
        array.pop();
    }
}

async function Visualize_Sort(sorting_alg){
    if(!running){
        running = true;
        switch(sorting_alg){
            case "Bubble":
                await Bubble_sort();
                break;
            case "Insertion":
                await Insertion_sort();
                break;
            case "Merge":
                await Merge_sort(0,array_size-1);
                break;
            case "Selection":
                await Selection_Sort();
                break;
            case "Quick":
                await Quick_Sort(0,array_size-1);
                break;
        }
        await Complete();
    }
}

async function Complete(){
    await new Promise(resolve =>
        setTimeout(() => {
          resolve();
          running = false;
        }, 210-speed)
      );
}

async function Copy(i, j){  //Copy i in j
    await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 210-speed)
      );
    let b = document.getElementById(j);
    //Copy a into b
    b.setAttribute("value", array[j]);
    b.style.height = array[j];
    b.style.background = "hsla("+(hue+array[j]*0.2)+", 100%, 50%, 0.7)";
}

async function Swap(i, j){
    //Animation delay
    await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 210 - speed)
      );
    //Swap elements at id i and j
    let el1 = document.getElementById(i);
    let el2 = document.getElementById(j);

    //Swap array values
    let temp_arr = array[i];
    array[i] = array[j];
    array[j] = temp_arr; 
    let temp_background = el1.style.background;
    el1.style.height = array[i];
    el2.style.height = array[j];
    el1.style.background = el2.style.background;
    el2.style.background = temp_background;
    el1.setAttribute("value", array[i]);
    el2.setAttribute("value", array[j]);
}
function Update_Set(){
    if(!running){
        Reset();
        array_size = parseInt(document.getElementById("arraysize").getAttribute("value"))
        Initialize_Visualizer();
    }
}

document.getElementById('arraysize').addEventListener('input',function() {
    if(!running){
        this.setAttribute('value',this.value);
        Update_Set();
    }
  });
document.getElementById('speed').addEventListener('input',function() {
        this.setAttribute('value',this.value);
        speed = parseInt(this.getAttribute('value'));
  });
Initialize_Visualizer()