package io.github.jgckm.a04objectdemo;

public class ObjectDemo4 {
    public static void main(String[] args) throws CloneNotSupportedException {

//        1.先创建一个对象
        int[] data = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0};
        User u1 = new User(1,"zhangsan","123qwe","girl11",data);

//        2.克隆对象
        User u2 = (User) u1.clone();

        System.out.println(u1);
        System.out.println(u2);

    }
}
