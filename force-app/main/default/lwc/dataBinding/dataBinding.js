import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

  

    memberStatus;

    getStatus(event) {

        this.memberStatus=event.target.value;
    }

    totalEpWatched=10;

    _epWatched= this.totalEpWatched*10;

    get epWatched(){
         return this._epWatched;
    }

    set epWatched(value){
        this._epWatched=value;
    }

    calValue(event){
       this.epWatched=parseInt(event.target.value); 

    }



}