class Nodo {
    constructor(id) {
        this.id = id;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolBinarioBusqueda {

    constructor() {
        this.raiz = null;
    }

    insertar(id) {
        const nuevoNodo = new Nodo(id);
        // si el arbol esta vacio
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            console.log(`${id}`);
            return;
        }

        let actual = this.raiz;

        while (true) {

            // ID duplicado
            if (id === actual.id) {
                console.log(`${id}`);
                return;
            }

            // ID menor: ir a la izquierda
            if (id < actual.id) {

                if (actual.izquierda === null) {
                    actual.izquierda = nuevoNodo;
                    console.log(`${id}`);
                    return;
                }

                actual = actual.izquierda;
            }

            // ID mayor: ir a la derecha
            else {

                if (actual.derecha === null) {
                    actual.derecha = nuevoNodo;
                    console.log(`${id}`);
                    return;
                }

                actual = actual.derecha;
            }
        }
    }


    // ======================================
    // LISTAR TODOS LOS IDS
    // RECORRIDO INORDEN
    // ======================================

    listarIDs() {

        const ids = [];

        this.recorridoInorden(this.raiz, ids);

        console.log("\n===== IDS DE EMPLEADOS =====");

        if (ids.length === 0) {
            console.log("El árbol está vacío.");
        } else {
            console.log(ids.join(" - "));
        }

        console.log("============================\n");
    }


    // Recorrido izquierda - raíz - derecha
    recorridoInorden(nodo, ids) {

        if (nodo !== null) {

            // Primero izquierda
            this.recorridoInorden(nodo.izquierda, ids);

            // Después raíz
            ids.push(nodo.id);

            // Finalmente derecha
            this.recorridoInorden(nodo.derecha, ids);
        }
    }
}


// ==========================================
// PROGRAMA PRINCIPAL
// ==========================================

const arbol = new ArbolBinarioBusqueda();


// Registrar IDs
arbol.insertar(50);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(20);
arbol.insertar(40);
arbol.insertar(60);
arbol.insertar(80);


// Intentar registrar un ID repetido
arbol.insertar(30);


// Listar todos los IDs
arbol.listarIDs();