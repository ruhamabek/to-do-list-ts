import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement;
    clear(): void;
    render(fullList: FullList): void;
}

export default class TemplateList implements DOMList {
    
     static instance:TemplateList = new TemplateList();
         ul: HTMLUListElement;
   
     private constructor(){
      this.ul = document.getElementById("listItem") as HTMLUListElement;
     }
    clear(): void {
       this.ul.innerHTML = '';
    }

    render(fullList: FullList): void {

      fullList.list.forEach((item) => {
          const li = document.createElement("li") as HTMLLIElement;
          li.className = "input";

          const check = document.createElement("input") as HTMLInputElement;
          check.type = "checkbox";
          check.id = item.id;
          check.checked = item.checked;
          li.append(check);
          check.addEventListener('change' , ()=>{
               item.checked = !item.checked;
               fullList.save();
            });

          const label = document.createElement("label") as HTMLLabelElement;
          label.htmlFor = item.id;
          label.textContent = item.item;
          li.append(label);

          const button = document.createElement("button") as HTMLButtonElement;
          button.className = 'button';
          button.innerText = 'X';
          li.append(button);
          button.addEventListener('click' , ()=> {
                 fullList.clearList();
                 this.render(fullList);
          });

          this.ul.append(li);
      }) 
      
  }  
}