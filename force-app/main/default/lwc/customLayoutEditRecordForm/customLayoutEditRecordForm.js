import {  LightningElement, api ,wire} from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';

export default class CustomLayoutEditRecordForm extends LightningElement {


@api recordId;

   @wire(MessageContext)
    messageContext;

    // --- TO PUBLISH A MESSAGE ---
    publishMessage() {
        const payload = { messageText: 'Error Occurred' };
        publish(this.messageContext, SAMPLE_MC, payload);
    }


    handleSuccesss(){
        const success=this.template.querySelector('lightning-record-edit-form');
        success.reset();
    }

}