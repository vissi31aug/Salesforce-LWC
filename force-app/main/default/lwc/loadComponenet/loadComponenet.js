import { LightningElement, api } from 'lwc';

export default class LoadComponenet extends LightningElement {

   @api recordId;
    objectApiName='Case';
    fields=['CaseNumber','Priority','Status'];



}