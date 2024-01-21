package io.github.jgckm.a04objectdemo;

import java.util.Arrays;

//Cloneable
//如果一个几口里面没有抽象方法
//表示当前的接口是一个标记性的接口
//现在 Cloneable 表示一旦了实现，那么当前类的对象就可以克隆
//如果没有实现，当前类的对象就不能克隆

public class User implements Cloneable{
    private int id ;
    private String username;
    private String password;
    private String path;
    private int[] data;


    public User(){

    }

    public User(int id, String username, String password, String path, int[] data) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.path = path;
        this.data = data;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public void setData(int[] data) {
        this.data = data;
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getPath() {
        return path;
    }

    public int[] getData() {
        return data;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", path='" + path + '\'' +
                ", data=" + Arrays.toString(data) +
                '}';
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
//        调用父类中的 clone 方法
//        相当于让 Java 帮我们克隆一个对象,并把克隆之后的对象返回出去

//        创建深克隆
        int[] data = this.data;
//        创建新的克隆数组
        int[] newData = new int[data.length];
//        拷贝数组中的数据
        for (int i = 0; i < data.length; i++) {
            newData[i]= data[i];
        }
//       调用父类中的数据
        User u = (User) super.clone();
        u.data = newData;

        return u;
    }
}
