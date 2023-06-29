var _dfsSDF = "benkei"
var firstCamelCase = "asd"
var second_var = "asd"

var first_number = 37824653.4344697
var second_number = 2

var first_string = "sad"
var second_string = "2"
var third = second_number + second_string
//console.log(third)

//BOOL



var first_boolean = true
var number = 1


//console.log(first_boolean == number)

var null_value = null
var undefined_value

//console.log(null_value === undefined_value)
//console.log(second_number === second_string)
//console.log(10 % 2)

//if + else
if(true) {
    //console.log("hello")
}

var hamis = false
//console.log(!hamis)
if(!number) {
    //console.log("hello")
}else if(number){
    //console.log("baszki")
}else{
    //console.log("anyád")
}

if(1) {
    //console.log("hello")
}if(number){
    //console.log("baszki")
}else{
    //console.log("anyád")
}

//array

var my_first_array = ["asd", 32, false]
////console.log(my_first_array[1] + my_first_array[2])

var nem_random_numb1 = 0

for (let i = 0; i < 11; i++) {
    //nem_random_numb1 += 1
    //console.log(nem_random_numb1)
}

var my_second_array = [1,1,1,1,1,1,1,1,1,1]

for (let i = 0; i < my_second_array.length; i++) {
    nem_random_numb1 += my_second_array[i]
    //var new_number = nem_random_numb1
    my_second_array[i] = nem_random_numb1
}   

console.log(my_second_array)

for (const num of my_second_array) {
    console.log(num)
}