const doc = document,
      wiw = window;
var obj = {
  a : 15,
  name : "John",
  surname : "Alen",
  birthday: "15.06.1999",
  ip: "192.168.1.2"
}
var json = JSON.stringify(obj);
doc.querySelector(".out").innerHTML += json;
json = JSON.parse(json);
doc.querySelector(".out").innerHTML += json.name;
