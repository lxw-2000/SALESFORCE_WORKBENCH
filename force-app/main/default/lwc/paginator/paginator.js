/*
 * @Author: lxw2000 1780870263@qq.com
 * @Date: 2022-09-22 15:10:40
 * @LastEditors: lxw2000
 * @LastEditTime: 2022-09-22 15:33:56
 * @FilePath: \SALESFORCE_WORKBENCH\force-app\main\default\lwc\paginator\paginator.js
 * @Description:
 *
 * Copyright (c) 2022 by lxw2000 1780870263@qq.com, All Rights Reserved.
 */
import { LightningElement } from "lwc";

export default class Paginator extends LightningElement {
  handlePrevious() {
    this.dispatchEvent(new CustomEvent("previous"));
  }
  handleNext() {
    this.dispatchEvent(new CustomEvent("next"));
  }
}
