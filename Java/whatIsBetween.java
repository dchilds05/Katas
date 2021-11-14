/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

public class Kata {

  public static int[] between(int a, int b) {
    int size = b-a+1;
    int[] arr = new int[size];
    for(int i = 0; i < arr.length; i++){
      arr[i] = a+i;
    }
    return arr;
  }
}