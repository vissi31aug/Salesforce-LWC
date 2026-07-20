
import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CASE_OBJ from '@salesforce/schema/Case';
import CASE_SUBJECT from '@salesforce/schema/Case.Subject';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import CASE_DISCRIPTION from '@salesforce/schema/Case.Description';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import CASE_RECORD_TYPE from '@salesforce/schema/Case.RecordTypeId';


export default class CustomCaseCreator extends LightningElement {

subject='';
priority='';
discription='';
recordTypeId='';

@wire(getObjectInfo,{objectApiName:CASE_OBJ}) caseRecord({data,error}){

    if(data){
        let recordTypeDetails=data.recordTypeInfos;
        Object.keys(recordTypeDetails).forEach((element => {
           const recordTypeInfo=recordTypeDetails[element];
            if(recordTypeInfo.name=='Case Info Team'){
               this.recordTypeId=recordTypeInfo.recordTypeId;
            }
            
        }))
    }
}

get options() {
        return [
            { label: 'New', value: 'Low' },
            { label: 'In Progress', value: 'Medium' },
            { label: 'Finished', value: 'High' },
        ];
    }

handleSubject(event){
console.log(event.detail.value);
this.subject=event.detail.value;

}

handlePriority(event){
    console.log(event.detail.value);
this.priority=event.detail.value;
}

handleDiscription(event){
    console.log(event.detail.value)
this.discription=event.detail.value;
}

async handleButton(){

    const fields={};
    fields[CASE_SUBJECT.fieldApiName]=this.subject;
    fields[CASE_PRIORITY.fieldApiName]=this.priority;
    fields[CASE_DISCRIPTION.fieldApiName]=this.discription;
    fields[CASE_RECORD_TYPE.fieldApiName]=this.recordTypeId;
    
    let recordInput={apiName:CASE_OBJ.objectApiName, fields};
    await createRecord(recordInput)
    .then((record) => {
     alert('Case created Successfully '+ record.id);
    })
    .catch((error) =>{
    alert('Error Occured '+ error.body.message);

    });

}

}