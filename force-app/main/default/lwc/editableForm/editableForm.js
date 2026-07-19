import { LightningElement, api } from 'lwc';
const FIELDS=['CaseNumber','Priority','Status'];

export default class EditableForm extends LightningElement {

@api recordId;
fields=FIELDS;


}