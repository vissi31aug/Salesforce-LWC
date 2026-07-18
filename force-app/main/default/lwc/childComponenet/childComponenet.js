import { LightningElement } from 'lwc';

export default class ChildComponenet extends LightningElement {

name;
handleClick(){
    this.name='Coll Cool';


const event = new CustomEvent('senddatatoparent',{
   detail:this.name
});
this.dispatchEvent(event);
console.log(this.name);

}

}