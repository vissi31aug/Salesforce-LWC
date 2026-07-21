public with sharing class TaskController {
   
  @AuraEnabled(cacheable=true)
  public static List<Task> fetchTaskRecord(String subjectDis){
         return [Select Id,Priority, Subject, Status from Task where Subject =:subjectDis];
    }

}