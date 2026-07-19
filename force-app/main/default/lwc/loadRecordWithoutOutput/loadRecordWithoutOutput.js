
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { LightningElement, api, wire} from 'lwc';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import CASE_STATUS from '@salesforce/schema/Case.Status';


export default class LoadRecordWithoutOutput extends LightningElement {

@api recordId;   
fields=[CASE_NUMBER, CASE_PRIORITY, CASE_STATUS];


@wire(getRecord,{recordId:'$recordId', fields:'$fields'}) caseVar;

get casenumber(){
    return getFieldValue(this.caseVar.data, CASE_NUMBER);
}

get priority(){
    return getFieldValue(this.caseVar.data, CASE_PRIORITY);
}

get status(){
    return getFieldValue(this.caseVar.data, CASE_STATUS);
}



}