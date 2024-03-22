//write a function takes a rest parameter
function myHobby() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("My favourite hobby is ".concat(hobby, "."));
    });
}
//call the function with multiple hobbies
myHobby("watch historical dramas", "coding", "baking");
