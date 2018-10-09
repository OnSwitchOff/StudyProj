/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.customannotations.bean;

import org.tyaa.customannotations.annotations.ControlledObject;
import org.tyaa.customannotations.annotations.StartObject;
import org.tyaa.customannotations.annotations.StopObject;

/**
 *
 * @author yurii
 */
@ControlledObject(name="security")
public class Cookies {
    
    @StartObject
     public void createCookie(){
        System.out.println("createCookie");
     }    
     @StopObject
     public void stopCookie(){
       System.out.println("stopCookie");
     }
}
