//Exercise #1, assuming that we are looking to be case sensitive,
// so different capitlization = Not a match:
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i =0; i < dog_names.length; i++){
        if(dog_string.search(dog_names[i]) != -1){
            console.log(`Matched ${dog_names[i]}`)
        } else if (dog_string.search(dog_names[i]) == -1){
            console.log(`Did not match ${dog_names[i]}`)
        }
    }
}

findWords()

//Second version, in case we wanted to check for any lower/upper case format of names.
function findWords2(){
    for(let i =0; i < dog_names.length; i++){
        if(dog_string.toLowerCase().search((dog_names[i]).toLowerCase()) != -1){
            console.log(`Matched ${dog_names[i]} when converted to lower case.`)
        } else if (dog_string.search(dog_names[i]) == -1){
            console.log(`Did not match ${dog_names[i]} when converted to lower case.`)
        }
    }
}

findWords2()

//Exercise #2:
function replaceEvens(arr){
    for(let i=0; i<arr.length; i++){
        if(i%2==0){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))