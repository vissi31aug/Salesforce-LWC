import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;


    displayAll=true;
    displayFirst=false;
    displaySecond=false;
    displayThird=false;

    handleClick1(event){
    console.log("Success1");
    this.displayFirst=true;
    this.displaySecond=false;
    this.displayThird=false;
    }

    handleClick2(event){
        console.log("Success2");
    this.displayFirst=false;
    this.displaySecond=true;
    this.displayThird=false;

    }

    handleClick3(event){
        console.log("Success3");
    this.displayFirst=false;
    this.displaySecond=false;
    this.displayThird=true;

    }



    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] = !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }

}