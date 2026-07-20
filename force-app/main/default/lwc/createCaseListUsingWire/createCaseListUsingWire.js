import { LightningElement,wire } from 'lwc';
import getCaseInfo from '@salesforce/apex/CaseController.fetchCaseRecord';

export default class CreateCaseListUsingWire extends LightningElement {


    caseList;
    errorMsg;

    @wire(getCaseInfo)
    wiredCase({data,error}){
      try{
      if(data){
          this.caseList=data;
          this.errorMsg='';
       }
       if(error){
          this.errorMsg=error.body.message;
          this.caseList='';
       }
      }

         catch(Exception){
           console.log('Received and error');
         }
    }

}