const addBtn = document.querySelector('.addbtn');
var input = document.querySelector('.txt');
const container = document.querySelector('.container');

class  item{
      constructor(itemName){
            this.createDiv(itemName);
      }
      createDiv(itemName){
            let input = document.createElement('input');
            input.value = itemName;
            input.disabled = true;
            input.classList.add('item_input');
            input.type = "text";

            let itemBox = document.createElement('div');
            itemBox.classList.add('item');

            let editBtn = document.createElement('button');
            editBtn.innerHTML = "<i class='bx bx-pencil'></i>";
            editBtn.classList.add('editbtn');
            
            let rmvBtn = document.createElement('button');
            rmvBtn.innerHTML = "<i class='bx bx-trash-alt'></i>";
            rmvBtn.classList.add('rmvbtn');

            container.appendChild(itemBox);

            itemBox.appendChild(input);
            itemBox.appendChild(editBtn);
            itemBox.appendChild(rmvBtn);

            editBtn.addEventListener('click', ( ) => this.edit(input) );
            rmvBtn.addEventListener('click', ( ) => this.remove(itemBox) );
            
      }
      edit(input){
            input.disabled = !input.disabled;
      }
      remove(item){
            container.removeChild(item);
      }
}

function check(){
      if(input.value != ""){
            new item(input.value);
            input.value = "";
      }
}

addBtn.addEventListener('click', check);