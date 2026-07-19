
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CreateRecordWithCustomLayout extends LightningElement {


handleSubmit(event){
 const caseId = event.detail.id;

        // 4. Navigate to the case record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: caseId,
                objectApiName: 'Case',
                actionName: 'view'
            }
        });

}

handleSuccess(){
 alert('Case has been created successfully');
}

}