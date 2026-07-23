import { LightningElement } from 'lwc';

export default class GenericErrorUtility extends LightningElement {
    email;
    name;
    phone;
    age;
    error=[];

    [
        {fieldsName:'', errorMsg:''}
    ]

    handleChange(event){
     const field=event.target.dataset.field;
     this[field]=event.target.value;
    }

    validate(){

        const errMsg=[];
        if(!this.name ){
        errMsg.push({fieldsName:'name',errorMsg:'Name is required'});
        
        }
        if(this.name){
            const trimName = this.name.trim().length;
            if(trimName<3){
                errMsg.push({fieldsName:'name',errorMsg:'Enter Full Name'});
            }
        }
        if(!this.email){
         errMsg.push({fieldsName:'email',errorMsg:'Email is required'});
        }

        if(this.age > 100 || this.age<15){
           errMsg.push({fieldsName:'age',errorMsg:'Age must be between 15 and 100 years'}); 
        }
        return errMsg;
    }

    handleClick(){

        this.error=this.validate();

        if(this.error.length){

        }
        else
        {
          this.resetFields();
        }

    }

}