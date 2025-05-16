
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AdoptionForm extends LightningElement {
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Success!",
            message: "Adoption record has been created.",
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}
