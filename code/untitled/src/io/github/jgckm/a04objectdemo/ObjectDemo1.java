package io.github.jgckm.a04objectdemo;

public class ObjectDemo1 {
    public static void main(String[] args) {

        /*
        *| `public String toString()`         | 返回对象的字符串表达形式 |
         | ---------------------------------- | ------------------------ |
        | `public boolean eqals(Object obj)` | 比较两个对象是否相等     |
        | `protected Object clone(int a)`    | 对象克隆                 |
        *
        *
        * */

//        1. toString()     返回对象的字符串表达形式

        Object obj = new Object();
        String str1 = obj.toString();
        System.out.println(str1); //java.lang.Object@4eec7777


        Student stu1 = new Student("zhangsan",23);
        String str2  = stu1.toString();
        System.out.println(str2); //io.github.jgckm.a04objectdemo.Student@41629346


//        细节：
//        核心逻辑
//        当我们打印一个对象的时候，底层会调用对象的 toString 方法，把对象变成字符串
//        然后在打印到控制台上，打印完毕换行处理。
//        如果想要查看方法里面的属性值
//        处理方法：重写父类 Object 类中的 toString 方法
        System.out.println(stu1); //io.github.jgckm.a04objectdemo.Student@41629346



    }
}
