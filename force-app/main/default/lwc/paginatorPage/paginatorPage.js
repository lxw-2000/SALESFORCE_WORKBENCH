/*
 * @Author: lxw2000 1780870263@qq.com
 * @Date: 2022-09-22 15:35:31
 * @LastEditors: lxw2000
 * @LastEditTime: 2022-09-22 16:23:58
 * @FilePath: \SALESFORCE_WORKBENCH\force-app\main\default\lwc\paginatorPage\paginatorPage.js
 * @Description:
 *
 * Copyright (c) 2022 by lxw2000 1780870263@qq.com, All Rights Reserved.
 */
import { LightningElement } from "lwc";

export default class PaginatorPage extends LightningElement {
  page = 1;
  previousHandler() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }
  nextHandler() {
    this.page = this.page + 1;
  }
}
