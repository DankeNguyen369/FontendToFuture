const staffs = {
    name: "Danke",
    age: 22,
    salary: "orange",
    position: "MTA",
}

function staff(name, age, positon, salary) {
    this.name=name;
    this.age= age;
    this.positon=positon;
    this.salary=salary;
}

var plus = new staff("Khoa", 19, "protector", 1000)






let arr = [];
while(true){
    let inputUser = prompt("Hi there, welcome to company admin panel, what do you want( C, R, U, D)").toLowerCase();
    if(inputUser === 'c'){
       let newItem = prompt("Enter your name of the new person")
       arr.push(newItem)
       alert("Done")
    
    }else if(inputUser === 'r'){
       print()
    }else if(inputUser === 'u'){
        let indexUpdate= Number(prompt("Enter the position you want to update"))
        arr[indexUpdate - 1] = prompt("Enter the new name")
        alert("Done")
    }else if(inputUser === 'd'){
        let indexDelte = Number(prompt("Enter the position you want to delete"))
        arr.splice(indexDelte - 1,1)
    }else{
        alert("This command is not supported")
    }
}
function print(){
    console.log("The current items are");
    for(let i= 0; i< arr.length ;i++){
        console.log(`${i+1}. ${arr[i]}`)
    }
}