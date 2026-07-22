import { LightningElement } from 'lwc';
import fetchTaskRecord from '@salesforce/apex/TaskController.fetchTaskRecord';

export default class SearchTaskByImperativeMethod extends LightningElement {

    subject;
    taskList;
    errorMsg;
    flag=false;

    onSubjectChange(event){
     
        this.subject=event.target.value;
    }

    searchTask(){

    fetchTaskRecord({subjectDis:this.subject}).
    then( result => {
        console.log(result);
        this.taskList=result;
        this.flag=true;
    })
    .catch(error => {
        this.errorMsg=error.body.message;
    });

    }
}