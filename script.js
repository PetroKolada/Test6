const cities = document.querySelector("#cities").children
let storage = []
for (const x of cities) {
    storage.push(x.textContent)
}
storage = JSON.stringify(storage)
console.log(storage)

let json = '["user1","user2","user3","user4","user5"]';
json = JSON.parse(json)
json.push("user6")
json = JSON.stringify(json)
console.log(json);

let json2 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`

json2 = JSON.parse(json2)
json2.push(	{
    "name": "user4",
    "age": 28,
    "salary": 4000
})
json2 = JSON.stringify(json2)
console.log(json2);

let json3 = '["user1","user2","user3","user4","user5"]';
json3 = JSON.parse(json3)
document.body.innerHTML += "<ul id='second'></ul>"
for (const x of json3) {
    document.querySelector("#second").innerHTML += `<li>${x}</li>`
}

const names = document.querySelector("#names")
items = names.querySelectorAll("td")
let NameList = []
for (let i = 0; i < items.length/3; i++) {
    console.log(items);
    NameList.push(
        {
            "surname": items[0+i*3].textContent,
            "name": items[1+i*3].textContent,
            "patronymic":items[2+i*3].textContent
        }
    )
}

json4 = JSON.stringify(NameList)

console.log(json4);


let button = document.querySelector("#six")
let inputs = button.querySelectorAll("input")
button = button.querySelector("button")


button.addEventListener("click", function () {
    let list6 = []
    for (const x of inputs) {
        console.log(x);
        list6.push(x.value)
    }
    localStorage.setItem("1", String(list6))
})

let counter = 0
for (const x of inputs) {
    x.value = localStorage.getItem("1")[counter*2]
    counter++
}