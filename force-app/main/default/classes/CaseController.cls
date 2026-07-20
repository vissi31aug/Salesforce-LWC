public with sharing class CaseController {

    @AuraEnabled(cacheable=true)
    public static List<Case> fetchCaseRecord(){
        return [Select Id,Subject,CaseNumber ,Origin, Priority,Status,Type from Case Order By CreatedDate Limit 20];
    } 
    
}