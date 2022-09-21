/*
 * @Author: lxw2000 1780870263@qq.com
 * @Date: 2022-09-20 17:37:42
 * @LastEditors: lxw2000
 * @LastEditTime: 2022-09-20 17:41:40
 * @FilePath: \SALESFORCE_WORKBENCH\force-app\main\default\classes\RemoteActionDemoCls.cls
 * @Description: 
 * 
 * Copyright (c) 2022 by lxw2000 1780870263@qq.com, All Rights Reserved. 
 */
public with sharing class RemoteActionDemoCls{
    // Get Account by Id
    @RemoteAction
    public static SObject getAccount(String sfdcId) {
        return [SELECT Id, Name, OwnerId, Owner.Name FROM Account WHERE Id = :sfdcId LIMIT 1];
    }
}