var doc=document,
    wiw=window;
// Хорошо в случае если озображени одно
// function load (img) {
//   var img = $(img);
//   setTimeout(()=>{img.removeClass("beforeLoad");},1000)
// }
//var xhr= new XMLHttpRequest();

var images=doc.getElementsByTagName("img");
var image=Array.from(images);



var i=-1;
async function load() {
  if(image.length!=0) {// проверяем есть ли img на странице
  await Promise.resolve("result");//выдаем положительный результат
      for (;i<image.length;i++) {//подсчитываем и выполняем операции
        let link=$(image[i]).attr("data-src")//берем значение data-src
            try {var result =  await fetch(link)//скачиваем это значение
            if (!result.ok || !result.status) {//проверяем на ошибку
              throw "error download image";//выдаем возможную ошибку

            }
          } catch (e) {continue;};//если есть какая-то ошибка в итерации, то пропускаем итерацию
            if (result.status) {//если картинка скачалась с успехом то...
                                //берем картинку по индексу, удаляем у нее class
                                //который делает ее прозрачной, затем вставляем src
                                //и под конец удаляем тег который уже не нуже
            $(image[i]).removeClass("beforeLoad").attr("src",link).removeAttr("data-src")
          };
      }
  } else {

  }
}
async function load1 () {
  if (image.length!=0) {
    Promise.resolve("result");
    var link;
    var result;
  async function download() {
      i++;
      link=$(image[i]).attr("data-src")
      try {result =  fetch(link)
          if (!result.ok || !result.status) {
            throw "error download image";
          }

      } catch(e){}
      $(image[i]).removeClass("beforeLoad").attr("src",link).removeAttr("data-src")
      if (i>=image.length) {
        return;
      }
      download()
    }
    download()
  }

}
load1();




// function checkLoad(url) {
//   xhr.onprogress=(url)=>{
//     console.log("Скачано "+event.loaded+"из "+event.total);
//     if (event.loadend!=event.total) {
//       console.log("Скачано "+event.loaded+"из "+event.total)
//     } else {
//       console.log("Загрузка завершена")
//     }
//   }
//   xhr.addEventListener("error",()=>{
//     alert("Ошибка")
//   })
// }
