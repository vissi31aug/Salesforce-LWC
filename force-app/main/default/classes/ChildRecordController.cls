public with sharing class ChildRecordController {
    

    @AuraEnabled(cacheable=true)
    public static List<sObject> fetchRecord(Id recordId, String childObjectApiName, 
     String fieldList, String lookupFieldApiName, Integer limitSize){
        try {

            String queryString= 'Select '
            + fieldList +
            ' from ' +
            childObjectApiName +
            ' where ' +
            lookupFieldApiName +
            ' =:recordiD' +
            ' limit ' + limitSize;


           return Database.query(queryString);
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}