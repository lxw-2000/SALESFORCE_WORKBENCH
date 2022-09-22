/*
 * @Author: lxw2000 1780870263@qq.com
 * @Date: 2022-09-21 17:30:08
 * @LastEditors: lxw2000
 * @LastEditTime: 2022-09-21 17:52:08
 * @FilePath: \SALESFORCE_WORKBENCH\force-app\main\default\lwc\bearList\bearList.js
 * @Description:
 *
 * Copyright (c) 2022 by lxw2000 1780870263@qq.com, All Rights Reserved.
 */
import { publish, MessageContext } from "lightning/messageService";
import BEAR_LIST_UPDATE_MESSAGE from "@salesforce/messageChannel/BearListUpdate__c";
import { NavigationMixin } from "lightning/navigation";
import { LightningElement, wire } from "lwc";
/** BearController.searchBears(searchTerm) Apex method */
import searchBears from "@salesforce/apex/BearController.searchBears";
export default class BearList extends NavigationMixin(LightningElement) {
  searchTerm = "";
  bears;
  @wire(MessageContext) messageContext;
  @wire(searchBears, { searchTerm: "$searchTerm" })
  loadBears(result) {
    this.bears = result;
    if (result.data) {
      const message = {
        bears: result.data
      };
      publish(this.messageContext, BEAR_LIST_UPDATE_MESSAGE, message);
    }
  }
  handleSearchTermChange(event) {
    // Debouncing this method: do not update the reactive property as
    // long as this function is being called within a delay of 300 ms.
    // This is to avoid a very large number of Apex method calls.
    window.clearTimeout(this.delayTimeout);
    const searchTerm = event.target.value;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      this.searchTerm = searchTerm;
    }, 300);
  }
  get hasResults() {
    return this.bears.data.length > 0;
  }
  handleBearView(event) {
    // Get bear record id from bearView event
    const bearId = event.detail;
    // Navigate to bear record page
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: bearId,
        objectApiName: "Bear__c",
        actionName: "view"
      }
    });
  }
}
