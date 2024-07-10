import java.util.Scanner;
class Condicionales {
public static void main(String[] args) {
Scanner Scanner = new Scanner(System.in);

System.out.println("Ingrese un numero entero:");
int numero = Scanner.nextInt();

if (numero > 0) {
  System.out.println("El numero es positivo .");
} else if (numero < 0) {
  System.out.println("El numero es negativo.");
} else {
  System.out.println("El numero es 0.");
}
}
}


