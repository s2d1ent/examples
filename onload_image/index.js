var doc=document,
    wiw=window;
// Good if u have only one img
// function load (img) {
//   var img = $(img);
//   setTimeout(()=>{img.removeClass("beforeLoad");},1000)
// }


var images=doc.getElementsByTagName("img");
var image=Array.from(images);



var i=-1;
  if (image.length!=0) {
    Promise.resolve("result");
    var link;
    var result;
  async function download() {
      i++;
      link=$(image[i]).attr("data-src")
      result = fetch(link);
      $(image[i]).removeClass("beforeLoad").attr("src",fetch(link)).removeAttr("data-src")
      if (i>=image.length) {return}
      download()
    }
    download();
  }
