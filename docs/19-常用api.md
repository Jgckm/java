---
title:常用api
---

最常用 Api，不是是所有的 Api

## Math

| 方法             | 描述                              |
| ---------------- | --------------------------------- |
| `Math.abs(x)`    | 返回参数的`绝对值`                |
| `Math.ceil(x)`   | 返回`向上舍入`到最接近整数的 x 值 |
| `Math.floor(x)`  | 返回`向下舍入`到最接近整数的 x 值 |
| `Math.round(x)`  | 返回`四舍五入`为最接近整数的 x 值 |
| `Math.max(x, y)` | 返回具有`最高值`的数字            |
| `Math.min(x,y)`  | 返回具有`最小值`的数字            |
| `Math.pow(x, y)` | 将 x 的值返回为`y的幂`            |
| `Math.cbrt(x)`   | 返回 x 的`立方根`                 |
| `Math.sqrt(x)`   | 返回 x 的`平方根`                 |
| `Math.random()`  | 返回一个`介于0和1之间的随机数`    |

## System

| 方法                                | 描述                                                                                                                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `System.exit(0)`                    | 表示当前虚拟机是`正常停止`，参数非 0 表示非正常停止                                                                                                                                      |
| `System.arraycopy(arr1,0,arr2,0,5)` | 参数一 ：数据值，要从哪个数组中拷贝 <br />参数二：从数据源数组中的第几个索引开始拷贝<br />参数三：目的地，我要把数据拷贝到哪个数组中<br />参数四：目的地参数索引<br />参数五：拷贝的个数 |

## Runtime

| 方法                                         | 描述                    |
| -------------------------------------------- | ----------------------- |
| `Runtime r1 = Runtime.getRuntime();`         | 获取 `Runtime` 对象     |
| `Runtime.getRuntime().exit(0)`               | 停止`虚拟机`            |
| `Runtime.getRuntime().availableProcessors()` | 获取电脑`线程数`        |
| `Runtime.getRuntime().maxMemory()`           | 获取内存大小（byte）    |
| `Runtime.getRuntime().totalMemory()`         | 获取总内存大小 （byte） |
| `Runtime.getRuntime().freeMemory()`          | 获取剩余内存 （byte）   |
| `Runtime.getRuntime().exec("notepad")`       | 运行 CMD 命令           |

## Object
| 方法| 描述|
|---------------|------|
| `public String toString()` | 返回对象的字符串表达形式 |
| `public boolean eqals(Object obj)` | 比较两个对象是否相等 |
| `protected Object clone(int a)` | 对象克隆 |

## Objects

一个工具类，提供一些方法来完成一些功能
