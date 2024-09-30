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

      
  }
   
}