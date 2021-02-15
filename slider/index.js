var doc=document,
    wiw=window;
var arr=[];
class Project {
   constructor (name,description,color){
    this.name=name;
    this.description=description;
  }
   Data (color,background,name,description) {
    name=this.name;
    description=this.description;
    doc.querySelector(".project__left-title").innerHTML=name;
    doc.querySelector(".project__left-subtitle").innerHTML=description;
    $(".project").css("background",background + color);
  }
}
var LazyCote= new Project();
arr.push(LazyCote);
LazyCote.name="LazyCote";
LazyCote.description="Description about project";
var Nyan= new Project();
arr.push(Nyan);
Nyan.name="s2d1ent";
Nyan.description="Description about project";
var btn=0;
change()
  $(".container-btn").bind("click",(event)=>{
    if (Array.from($(".container-btn")).indexOf(event.target)==0) {
      btn--;
      if (btn<0) {
        btn=0;
      }
    } else {
      btn++;
      if (btn>arr.length-1) {
        btn--;
      }
    }
    change();
  })
function change (){
  switch (btn){
    case 0:
     LazyCote.Data("#8110c7"," no-repeat url('src/LazyCote_code.png')");
    break;
    case 1:
     Nyan.Data("#00ff2a"," no-repeat url('src/LazyCote_code.png')");
    break;
    default:
  }
}
