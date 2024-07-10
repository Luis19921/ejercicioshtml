import java.util.Scanner;
class Arrays{
public static void main(String[] args) {
Scanner Scanner = new Scanner(System.in);
int []array = new int[5];
array[0] = 15;
array[1] = 30;
array[2] = 45;
array[3] = 55;
array[4] = 65;

for (int i = 0; i < array.length; i++) {
    System.out.println("Elemento en la posición " + i + ": " + array[i]);
}
}
}