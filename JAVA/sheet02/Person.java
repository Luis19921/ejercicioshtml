package JAVA.sheet02;
public class Person {
  String nombre;
  int edad;
  
  public Person(String name, int age) {
    nombre = name;
    edad = age;
  }
  
  public void mostrarDetalles(){
    System.out.println("Nombre: " + nombre);
    System.out.println("Edad: " + edad);
  }

  public static void main(String[] args) {
    Person persona = new Person("Juan", 25);
    persona.mostrarDetalles();
    Person persona2 = new Person("Paco", 46);
    persona2.mostrarDetalles();
  }
  }

