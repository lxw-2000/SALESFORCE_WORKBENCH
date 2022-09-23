/*
 * @Author: lxw2000 1780870263@qq.com
 * @Date: 2022-09-22 23:06:56
 * @LastEditTime: 2022-09-23 11:36:16
 * @FilePath: \SALESFORCE_WORKBENCH\force-app\main\default\lwc\contactListWithData\contactListWithData.js
 * @Description:
 */
import { LightningElement, wire } from "lwc";
import getContactList from "@salesforce/apex/ContactController.getContactList";

export default class ContactListWithData extends LightningElement {
  selectedContact;

  @wire(getContactList) contacts;

  contactSelect(event) {
    this.selectedContact = this.contacts.data.find(
      (contact) => contact.Id === event.detail
    );
  }
}
