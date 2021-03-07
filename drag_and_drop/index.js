var doc=document,
    wiw=window;

const dragAndDrop=()=>{
  const card = doc.querySelector(".js-card");
  const cells = doc.querySelectorAll(".js-cell");


  function dragStart () {
    setTimeout(()=>{card.classList.add("hide");},0); // добавляет класс
  }
  function dragEnd() {
    event.target.classList.remove("hide");// очищает класс
  }
  function dragOver(event) {
    event.preventDefault();
  }
  function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add("hovered");
  }
  function dragLeave() {
   event.target.classList.remove("hovered");
  }
  function dragDrop() {
    this.append(card);
    event.target.classList.remove("hovered");
  }
  cells.forEach((cell) => {
    cell.addEventListener("dragover",dragOver);// срабатывает при наведениее
                                              // на ячейку для дропа(много раз)
    cell.addEventListener("dragenter",dragEnter);// срабатывает при наведениее
                                              // на ячейку для дропа(однократно)
    cell.addEventListener("dragleave",dragLeave);// при выведении курсора с ячейки
    cell.addEventListener("drop",dragDrop);// срабатывает при дропе
  });

  card.addEventListener("dragstart",dragStart);// при начале перетаскивания
  card.addEventListener("dragend",dragEnd);   // при окончании перетаскивания
};
dragAndDrop();


/*
При перетаскивании элемента срабатывает dragstart, который копирует элемент в буфер,
затем скрывает элемент из исходной ячейки. Потом при отмене(отпускании ЛКМ), срабатывает
dragend, который берет из буфера исходное положение элемента и возвращает его туда.
При перетаскивании элемента он копируется в буфер, при наведении на другую ячейку
он вставляются, в буфере меняются данные о местомположении ячейки(append) и ячейка переставляется.

event.target или this, без разницы что использовать.
*/
