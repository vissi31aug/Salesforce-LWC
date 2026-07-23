import { LightningElement, api, track } from 'lwc';
import fetchRecord from '@salesforce/apex/ChildRecordController.fetchRecord';

export default class DynamicRelatedRecord extends LightningElement {


    @api recordId;
    error = '';
    @track data = [];

    @api childObjectApiName= 'Opportunity';
    @api fieldList= 'Id, Name, StageName, CloseDate';
    @api lookupFieldApiName= 'AccountId';
    @api limitSize = 5;

    connectedCallback() {
        this.loadChildRecord();
    }

    async loadChildRecord() {
        try {
            const result = await fetchRecord({
                recordId: this.recordId,
                childObjectApiName: this.childObjectApiName,
                fieldList: this.fieldList,
                lookupFieldApiName: this.lookupFieldApiName,
                limitSize: this.limitSize
            });

            console.log('reached here' + JSON.stringify(result));
            this.data = result;

        }
        catch (e) {
            console.log('reached here with error');
            this.error = e.body.message;

        }
    }

    get columns(){

        const fields=this.fieldList.split(',').map(f=>f.trim()).filter(Boolean);
        return fields.map(field => ({label:field, fieldName:field}));
    }

}