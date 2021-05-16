const doc = document,
      wiw = window;

var jsonFromFile = doc.querySelector("#fileInput");
var fetchReady = doc.querySelector("#fetchReady");
// проверяем изменение на fileInpu
// берем загруженный json файл и преобразуем его в объект
// далее выводим в консоль
jsonFromFile.addEventListener("change",(event)=>{
  let file = event.target.files[0];
  file = file.parse;
  console.log(file);
  console.log(file.a);
});
// проверяем клик на кнопку
//запускаем функцию слушателя
//берем ссылку из поля input и делаем fetch запрос на сервер при усолвии что ссылка
// не пустая
//проверяем статусы если статус 200 или ok == true тогда,
// заносим объект в аргумент и выводим его в консоль

// +- так же идет работа с FireBase ВИ

fetchReady.addEventListener("click",FetchOpen);
function FetchOpen() {
  let jsonFetch = doc.querySelector("#fetchInput").value;
  if (jsonFetch.length != 0) {
    let fetch = Fetch(jsonFetch);
    // options браузер установит сам
    fetch.then(snapshot=>{
      if (fetch.ok || fetch.status == 200) {
        console.log(snapshot.json());
        console.log(snapshot.json().a);
      }
    })
  }
}
