//write a function takes a rest parameter
function myHobby(...hobbies :string[]){
    hobbies.forEach(hobby =>{
        console.log(`My favourite hobby is ${hobby}.`);
    });
}
//call the function with multiple hobbies
myHobby("watch historical dramas", "coding", "baking");