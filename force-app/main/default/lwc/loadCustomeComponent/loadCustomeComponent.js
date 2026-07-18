import { LightningElement, api } from 'lwc';

export default class LoadCustomeComponent extends LightningElement {
@api recordId;
    objectApiName='Case';
    fields=['CaseNumber','Priority','Status','Reason'];
}