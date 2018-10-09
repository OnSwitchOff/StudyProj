/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.customannotations.container;

import java.lang.reflect.Method;
import org.tyaa.customannotations.annotations.ControlledObject;
import org.tyaa.customannotations.annotations.StartObject;
import org.tyaa.customannotations.annotations.StopObject;

/**
 *
 * @author yurii
 */
public class Tester {
    
    public void test(Class cl){
    
        if(!cl.isAnnotationPresent(ControlledObject.class)){
            System.err.println("no annotation");
        } else {
            System.out.println("class annotated ; name  -  " + cl.getAnnotation(ControlledObject.class));
        }        
        boolean hasStart=false;
        boolean hasStop=false;        
        Method[] method = cl.getMethods();
        for(Method md: method){
            if(md.isAnnotationPresent(StartObject.class)) {hasStart=true;}
            if(md.isAnnotationPresent(StopObject.class)) {hasStop=true;}
            if(hasStart && hasStop){break;}
        }
        System.out.println("Start annotaton  - " + hasStart + ";  Stop annotation  - " + hasStop );
    }
}
