import { LightningElement, api } from "lwc";

export default class ContactListItem extends LightningElement {
  @api contact;

  handleClick(event) {
    // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
    event.preventDefault();

    this.dispatchEvent(new CustomEvent("select", { detail: this.contact.Id }));
  }
}
