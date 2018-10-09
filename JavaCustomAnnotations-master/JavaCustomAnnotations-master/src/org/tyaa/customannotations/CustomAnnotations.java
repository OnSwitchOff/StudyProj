/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.customannotations;

import java.lang.reflect.InvocationTargetException;
import org.tyaa.customannotations.container.Injecter;
import org.tyaa.customannotations.container.Tester;
import org.tyaa.customannotations.controller.SessionController;

/**
 *
 * @author yurii
 */
public class CustomAnnotations {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws ClassNotFoundException, IllegalArgumentException, IllegalAccessException, InstantiationException, InvocationTargetException {
        
        //DONE
        //1. Создать описание аннотации для маркировки точек внедрения
        //2. Создать класс-бин (уже есть - пустышка для работы с куки)
        //3. Создать класс-контейнер, который будет при помощи отражения
        //исследовать код, куда нужно произвести внедрение,
        //читать из него тип проаннотированного поля класса,
        //создавать экземпляр указанного типа и
        //инициализировать им проаннотированное поле
        //4. Создать класс, в который будет произведено внедрение
        
        // TODO:
        //1. создать новый бин Session по образцу Cookies,
        //содержащий аннотации ControlledObject, StartObject, StopObject
        //2. в классе SessionController объявляете внедрение экземпляра
        //будущего типа Session в новое поле типа Session при помощи аннотации Inject
        //3. там же в методе doWork() объявите вызов какого-либо метода из
        //внедренного экземпляра Session
        //4. запустить приложение и проверить его работоспособность (не должно быть исключений)
        
        
        Tester t = new Tester();
        t.test(Class.forName("org.tyaa.customannotations.bean.Cookies"));
        t.test(Class.forName("org.tyaa.customannotations.bean.AnotherCookies"));
        
        /*Injecter injecter = new Injecter();
        SessionController sc = new SessionController();
        injecter.addControlledInstance(sc);
        sc.doWork();*/
    }
    
}
