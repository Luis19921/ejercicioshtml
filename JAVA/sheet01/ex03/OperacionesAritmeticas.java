import java.util.Scanner; 
class OperacionesAritmeticas {
  public static void main(String[] args) {
    Scanner myScanner = new Scanner(System.in);
    System.out.println("Introduce el num1: ");
    int num1 = myScanner.nextInt();
    System.out.println("Has introducido en número " + num1);
    System.out.println("Introduce el num2: ");
    int num2 = myScanner.nextInt();
    System.out.println("Has introducido en número " + num2);

    System.out.println("Multiplicacion" + (num1 * num2));

    System.out.println("Suma" + (num1 + num2));

    System.out.println("Resta" + (num1 - num2));

    System.out.println("Division" + (num1 / num2));
}
}
