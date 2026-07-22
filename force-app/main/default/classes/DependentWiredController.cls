public class DependentWiredController {

 @AuraEnabled(cacheable=true)
 public static List<Task> getAccountName(String accountName){
    try {

      return [Select Id,Subject,What.Name,Priority from Task where What.Name= :accountName];
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
 }

    
}