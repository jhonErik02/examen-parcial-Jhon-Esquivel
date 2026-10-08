class NodoFoto {
    constructor(nombre) {
        this.nombre = nombre;
        this.anterior = null;
        this.siguiente = null;
    }
}

class Galeria {
    constructor() {
        this.cabeza = null;
        this.actual = null;
        this.total = 0;
    }

    agregarFoto(nombre) {

        const nuevo = new NodoFoto(nombre);
      
        if (this.cabeza === null) {
            this.cabeza = nuevo;
            this.actual = nuevo;
        } 
        else {
         
            let ultimo = this.cabeza;

            while (ultimo.siguiente !== null) {
                ultimo = ultimo.siguiente;
            }

            ultimo.siguiente = nuevo;
            nuevo.anterior = ultimo;
        }

        console.log(`${nombre}`);
    }

    siguienteFoto() {

        if (this.actual !== null && this.actual.siguiente !== null) {
            this.actual = this.actual.siguiente;

            console.log(`${this.actual.nombre}`);
        } 
        else {
            console.log("No hay una foto siguiente.");
        }
    }

    // Retroceder a la foto anterior
    fotoAnterior() {

        if (this.actual !== null && this.actual.anterior !== null) {
            this.actual = this.actual.anterior;

            console.log(`${this.actual.nombre}`);
        } 
        else {
            console.log("No hay una foto anterior.");
        }
    }


}


const galeria = new Galeria();

// Agregamos fotografías
galeria.agregarFoto("foto1.jpg");
galeria.agregarFoto("foto2.jpg");
galeria.agregarFoto("foto3.jpg");
galeria.agregarFoto("foto4.jpg");


// Siguiente
console.log("\nSiguiente:");
galeria.siguienteFoto();

// Siguiente
console.log("\nSiguiente:");
galeria.siguienteFoto();

// Retroceder
console.log("\nAnterior:");
galeria.fotoAnterior();
