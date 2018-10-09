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
@ControlledObject(name="AnotherSecurity")
public class AnotherCookies {
    
     @StartObject
     public void createAnotherCookie(){
       System.out.println("createAnotherCookie");
     }
     @StopObject
     public void stopAnotherCookie(){
       System.out.println("stopAnotherCookie");
     }
}
