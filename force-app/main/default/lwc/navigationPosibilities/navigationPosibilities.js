import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationPosibilities extends NavigationMixin(LightningElement) {


    navigateToRecordPage(){
      this[NavigationMixin.Navigate]({
      type:'standard__recordPage',
      attributes:{
        recordId:'001g800000Jz3sTAAR',
        objectAPIName:'Account',
        actionName:'view'
      }
    })

    }


    navigateWebPage(){
      this[NavigationMixin.Navigate]({
      type:'standard__webPage',
      attributes:{
        url:'www.youtube.com'
      }
    })
    }

  navigateCustomeTab(){
     this[NavigationMixin.Navigate]({
      type:'standard__navItemPage',
      attributes:{
        apiName:'Display_Notification'
      }
    })
  }

  navigateListView(){
    this[NavigationMixin.Navigate]({
      type:'standard__objectPage',
      attributes:{
        objectAPIName:'Account',
        actionName:'list'
      },
      state:{
       filterName:'AllAccounts'
      }
    })
  }

}