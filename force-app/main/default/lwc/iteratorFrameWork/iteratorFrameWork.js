import { LightningElement } from 'lwc';

export default class IteratorFrameWork extends LightningElement {


    taskList=[

          {taskId:1, taskName:'Study', taskPriority:'High',taskStatus:'In Progress'},
          {taskId:2, taskName:'Play', taskPriority:'Medium',taskStatus:'Not Started'},
          {taskId:3, taskName:'Dance', taskPriority:'low',taskStatus:'Not Started'}

    ];

}