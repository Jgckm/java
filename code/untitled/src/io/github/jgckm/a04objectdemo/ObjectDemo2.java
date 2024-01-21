package io.github.jgckm.a04objectdemo;

public class ObjectDemo2 {
    public static void main(String[] args) {
        /*
        * public boolean equals(Object obj) 比较两个对象是否相等
        * */

        Student s1 = new Student();
        Student s2 = new Student();


        boolean result1 = s1.equals(s2);
        System.out.println(result1);//false

    }
}
