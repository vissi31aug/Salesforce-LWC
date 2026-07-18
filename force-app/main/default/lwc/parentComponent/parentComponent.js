import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

res;
getDataFromChild(event){

    this.res=event.detail;
    console.log(this.res);
    

}

}