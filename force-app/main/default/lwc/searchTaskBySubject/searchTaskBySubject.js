import { LightningElement, wire } from 'lwc';
import getTaskInfos from '@salesforce/apex/TaskController.fetchTaskRecord';

export default class SearchTaskBySubject extends LightningElement {

taskList;
errorMsg;
subjectName='Created from apex';

@wire(getTaskInfos,{subjectDis:'$subjectName'})
getTask({data, error}){

    if(data){
        this.taskList=data;
       

    }

    else if(error){
    
    console.log('Got error while fetching task record')
    }
}

}