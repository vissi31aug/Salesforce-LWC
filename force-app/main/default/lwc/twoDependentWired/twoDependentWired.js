import { LightningElement,api,wire } from 'lwc';
import {getAccount} from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import getAccountNam from "@salesforce/apex/DependentWiredController.getAccountName";

export default class TwoDependentWired extends LightningElement {

@api recordId;
taskList;
accountNm;
fields=[ACCOUNT_NAME];
flage=false;

@wire(getAccount,{recordId: '$recordId',fields: '$fields'})
wiredGetAccount({data,error}){
    if(data){
       this.accountNm=data.fields.Name.value;
    }
    else if(error){

    }
}

@wire(getAccountNam,{accountName: '$accountNm'})
wiredGetTaskDetails({data,error}){
    if(data){
      this.taskList=data;
      this.flage=true;
    }
    else if(error){

    }
}



}