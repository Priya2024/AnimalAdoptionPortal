public with sharing class AnimalStatusController {
    @AuraEnabled(cacheable=true)
    public static List<Animal__c> getAnimalList() {
        return [SELECT Name, Adoption_Status__c FROM Animal__c];
    }
}
