/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.tyaa.customannotations.container;

import java.lang.reflect.AnnotatedType;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import org.tyaa.customannotations.annotations.Inject;
import org.tyaa.customannotations.bean.Cookies;
import org.tyaa.customannotations.controller.SessionController;

/**
 *
 * @author student
 * Контейнер, которому через конструктор нужно передать
 * объект, подлежащий управлению
 */
public class Injecter {
    
    public void addControlledInstance(Object _o) throws IllegalArgumentException, IllegalAccessException, InstantiationException, InvocationTargetException{
    
        //Проверка полученного объекта на соответствие
        //определенному типа
        if (_o instanceof SessionController) {
            
            SessionController sc = (SessionController)_o;
            //Получаем описание управляемого объекта
            Class targetClass = sc.getClass();
            //Получаем описание всех полей управляемого объекта
            Field[] fields = targetClass.getFields();
            //Перебираем описания всех полей управляемого объекта
            for(Field field : fields){
                //Работаем только с теми полями, которые помечены
                //нашей аннотацией Inject
                if(field.isAnnotationPresent(Inject.class)) {
                    //Получаем описание помеченного поля
                    Class injectingInstatceClass = field.getType();
                    //Получаем описание первого конструктора из
                    //описания текущего помеченного поля
                    //(должен быть один и без параметров)
                    Constructor constructor =
                            injectingInstatceClass.getDeclaredConstructors()[0];
                    //Открывает доступ к конструктору
                    constructor.setAccessible(true);  
                    //Открывает доступ к полю
                    field.setAccessible(true);
                    //В управляемом объекте по ссылке из переменной sc
                    //находим поле, соответствующее описанию field,
                    //вызываем конструктор внедряемого типа,
                    //приводим полученную ссылку к нужному типу
                    //и инициализируем ею поле
                    field.set(sc, (injectingInstatceClass.cast(constructor.newInstance())));
                }
            }
        }
    }
}
