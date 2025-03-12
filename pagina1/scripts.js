// Ejercicio 1: Tabla de números, cuadrados y cubos
function ejercicio1() {
    let numero = prompt("Introduce un número:");
    
    if (numero && !isNaN(numero)) {
        numero = parseInt(numero);
        
        document.write("<h2>Tabla de números, cuadrados y cubos</h2>");
        document.write("<table border='1'>");
        document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
        
        for (let i = 1; i <= numero; i++) {
            document.write("<tr>");
            document.write("<td>" + i + "</td>");
            document.write("<td>" + (i * i) + "</td>");
            document.write("<td>" + (i * i * i) + "</td>");
            document.write("</tr>");
        }
        
        document.write("</table>");
    }
}

// Ejercicio 2: Suma de números aleatorios con tiempo
function ejercicio2() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let inicio = new Date().getTime();
    
    let respuesta = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");
    let fin = new Date().getTime();
    let tiempo = (fin - inicio) / 1000;
    
    if (respuesta && !isNaN(respuesta)) {
        respuesta = parseInt(respuesta);
        let resultadoCorrecto = num1 + num2;
        
        if (respuesta === resultadoCorrecto) {
            document.getElementById("resultadoEj2").innerHTML = 
                "<p>¡Correcto! " + num1 + " + " + num2 + " = " + resultadoCorrecto + "</p>" +
                "<p>Tiempo: " + tiempo.toFixed(2) + " segundos</p>";
        } else {
            document.getElementById("resultadoEj2").innerHTML = 
                "<p>Incorrecto. La respuesta correcta era: " + resultadoCorrecto + "</p>" +
                "<p>Tiempo: " + tiempo.toFixed(2) + " segundos</p>";
        }
    }
}

// Ejercicio 3: Contador de negativos, ceros y positivos
function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    
    return [negativos, ceros, positivos];
}

function probarContador() {
    let arreglos = [
        [-1, 0, 5, -2, 0, 3],
        [1, 2, 3, 4, 5],
        [-5, -4, -3, -2, -1],
        [0, 0, 0, 0]
    ];
    
    let resultados = "<h3>Pruebas de función contador:</h3>";
    
    for (let i = 0; i < arreglos.length; i++) {
        let resultado = contador(arreglos[i]);
        resultados += "<p>Arreglo [" + arreglos[i] + "]:</p>";
        resultados += "<p>Negativos: " + resultado[0] + ", Ceros: " + resultado[1] + ", Positivos: " + resultado[2] + "</p>";
        
        // Pruebas con console.assert
        console.assert(resultado[0] === arreglos[i].filter(n => n < 0).length, "Error en conteo de negativos");
        console.assert(resultado[1] === arreglos[i].filter(n => n === 0).length, "Error en conteo de ceros");
        console.assert(resultado[2] === arreglos[i].filter(n => n > 0).length, "Error en conteo de positivos");
    }
    
    resultados += "<h3>Prueba tu propio arreglo:</h3>";
    resultados += "<p>Introduce números separados por comas:</p>";
    resultados += "<input type='text' id='arregloUsuario' placeholder='-1,0,3,5,-2'>";
    resultados += "<button onclick='contarArregloUsuario()'>Contar</button>";
    resultados += "<div id='resultadoUsuarioEj3'></div>";
    
    document.getElementById("resultadoEj3").innerHTML = resultados;
}

function contarArregloUsuario() {
    let arregloTexto = document.getElementById("arregloUsuario").value;
    let arreglo = arregloTexto.split(",").map(function(item) {
        return parseInt(item.trim());
    });
    
    // Filtrar valores que no son números
    arreglo = arreglo.filter(function(item) {
        return !isNaN(item);
    });
    
    let resultado = contador(arreglo);
    
    document.getElementById("resultadoUsuarioEj3").innerHTML = 
        "<p>Tu arreglo: [" + arreglo + "]</p>" +
        "<p>Negativos: " + resultado[0] + ", Ceros: " + resultado[1] + ", Positivos: " + resultado[2] + "</p>";
}

// Ejercicio 4: Promedios de arreglos
function promedios(matriz) {
    let resultado = [];
    
    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        
        let promedio = matriz[i].length > 0 ? suma / matriz[i].length : 0;
        resultado.push(promedio);
    }
    
    return resultado;
}

function probarPromedios() {
    let matrices = [
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        [[10, 20], [30, 40, 50]]
    ];
    
    let resultados = "<h3>Pruebas de función promedios:</h3>";
    
    for (let i = 0; i < matrices.length; i++) {
        let resultado = promedios(matrices[i]);
        
        resultados += "<p>Matriz:</p>";
        resultados += "<pre>";
        for (let j = 0; j < matrices[i].length; j++) {
            resultados += "[" + matrices[i][j] + "]<br>";
        }
        resultados += "</pre>";
        
        resultados += "<p>Promedios: [" + resultado.map(n => n.toFixed(2)).join(", ") + "]</p>";
        
        // Pruebas con console.assert
        for (let j = 0; j < matrices[i].length; j++) {
            let sum = matrices[i][j].reduce((a, b) => a + b, 0);
            let avg = matrices[i][j].length > 0 ? sum / matrices[i][j].length : 0;
            console.assert(Math.abs(resultado[j] - avg) < 0.001, "Error en el cálculo del promedio");
        }
    }
    
    resultados += "<h3>Crea tu propia matriz:</h3>";
    resultados += "<p>Introduce valores para cada fila separados por comas, y filas separadas por punto y coma</p>";
    resultados += "<p>Ejemplo: 1,2,3;4,5,6;7,8,9</p>";
    resultados += "<input type='text' id='matrizUsuario' placeholder='1,2,3;4,5,6;7,8,9'>";
    resultados += "<button onclick='calcularPromediosUsuario()'>Calcular promedios</button>";
    resultados += "<div id='resultadoUsuarioEj4'></div>";
    
    document.getElementById("resultadoEj4").innerHTML = resultados;
}

function calcularPromediosUsuario() {
    let matrizTexto = document.getElementById("matrizUsuario").value;
    let filas = matrizTexto.split(";");
    let matriz = [];
    
    for (let i = 0; i < filas.length; i++) {
        let fila = filas[i].split(",").map(function(item) {
            return parseInt(item.trim());
        });
        
        // Filtrar valores que no son números
        fila = fila.filter(function(item) {
            return !isNaN(item);
        });
        
        if (fila.length > 0) {
            matriz.push(fila);
        }
    }
    
    if (matriz.length > 0) {
        let resultado = promedios(matriz);
        
        let matrizHTML = "<p>Tu matriz:</p><pre>";
        for (let i = 0; i < matriz.length; i++) {
            matrizHTML += "[" + matriz[i] + "]<br>";
        }
        matrizHTML += "</pre>";
        
        document.getElementById("resultadoUsuarioEj4").innerHTML = 
            matrizHTML +
            "<p>Promedios: [" + resultado.map(n => n.toFixed(2)).join(", ") + "]</p>";
    } else {
        document.getElementById("resultadoUsuarioEj4").innerHTML = 
            "<p>La matriz no es válida. Intenta de nuevo.</p>";
    }
}

// Ejercicio 5: Número inverso
function inverso(numero) {
    let numStr = numero.toString();
    let numInverso = "";
    
    for (let i = numStr.length - 1; i >= 0; i--) {
        numInverso += numStr[i];
    }
    
    return parseInt(numInverso);
}

function probarInverso() {
    let numeros = [123, 456789, 1000, 7];
    
    let resultados = "<h3>Pruebas de función inverso:</h3>";
    
    for (let i = 0; i < numeros.length; i++) {
        let resultado = inverso(numeros[i]);
        resultados += "<p>Número: " + numeros[i] + " → Inverso: " + resultado + "</p>";
        
        // Pruebas con console.assert
        let expected = parseInt(numeros[i].toString().split("").reverse().join(""));
        console.assert(resultado === expected, "Error en inversión de número");
    }
    
    resultados += "<h3>Invierte tu propio número:</h3>";
    resultados += "<input type='number' id='numeroUsuario' placeholder='12345'>";
    resultados += "<button onclick='invertirNumeroUsuario()'>Invertir</button>";
    resultados += "<div id='resultadoUsuarioEj5'></div>";
    
    document.getElementById("resultadoEj5").innerHTML = resultados;
}

function invertirNumeroUsuario() {
    let numero = document.getElementById("numeroUsuario").value;
    
    if (numero && !isNaN(numero)) {
        numero = parseInt(numero);
        let resultado = inverso(numero);
        
        document.getElementById("resultadoUsuarioEj5").innerHTML = 
            "<p>Número: " + numero + " → Inverso: " + resultado + "</p>";
    } else {
        document.getElementById("resultadoUsuarioEj5").innerHTML = 
            "<p>Por favor, introduce un número válido.</p>";
    }
}

// Ejercicio 6: Galería de Arte
function ObraArte(titulo, artista, anio, tecnica) {
    this.titulo = titulo;
    this.artista = artista;
    this.anio = anio;
    this.tecnica = tecnica;
    this.descripcion = "";
    
    this.setDescripcion = function(descripcion) {
        this.descripcion = descripcion;
    };
    
    this.getInfo = function() {
        let info = this.titulo + " - " + this.artista + " (" + this.anio + ") - " + this.tecnica;
        if (this.descripcion) {
            info += " - " + this.descripcion;
        }
        return info;
    };
}

function GaleriaVirtual() {
    this.obras = [];
    
    this.agregarObra = function(obra) {
        this.obras.push(obra);
    };
    
    this.buscarPorArtista = function(artista) {
        return this.obras.filter(obra => obra.artista.toLowerCase().includes(artista.toLowerCase()));
    };
    
    this.buscarPorAnio = function(anioInicio, anioFin) {
        return this.obras.filter(obra => obra.anio >= anioInicio && obra.anio <= anioFin);
    };
}

// Variable global para la galería
let galeriaGlobal;

function iniciarGaleria() {
    // Crear instancia de galería
    galeriaGlobal = new GaleriaVirtual();
    
    // Algunas obras predefinidas
    let obra1 = new ObraArte("Noche estrellada", "Vincent van Gogh", 1889, "Óleo sobre lienzo");
    obra1.setDescripcion("Cielo nocturno turbulento sobre paisaje");
    
    let obra2 = new ObraArte("La persistencia de la memoria", "Salvador Dalí", 1931, "Óleo sobre lienzo");
    obra2.setDescripcion("Relojes derretidos en un paisaje onírico");
    
    let obra3 = new ObraArte("El grito", "Edvard Munch", 1893, "Óleo, temple y pastel sobre cartón");
    
    galeriaGlobal.agregarObra(obra1);
    galeriaGlobal.agregarObra(obra2);
    galeriaGlobal.agregarObra(obra3);
    
    // Crear interfaz
    let html = `
        <div>
            <h3>Obras en la Galería</h3>
            <div id="listaObras"></div>
            
            <h3>Agregar Nueva Obra</h3>
            <form id="formObra">
                <div>
                    <label for="titulo">Título:</label>
                    <input type="text" id="titulo" required>
                </div>
                <div>
                    <label for="artista">Artista:</label>
                    <input type="text" id="artista" required>
                </div>
                <div>
                    <label for="anio">Año:</label>
                    <input type="number" id="anio" required>
                </div>
                <div>
                    <label for="tecnica">Técnica:</label>
                    <input type="text" id="tecnica" required>
                </div>
                <div>
                    <label for="descripcion">Descripción (opcional):</label>
                    <textarea id="descripcion"></textarea>
                </div>
                <button type="button" onclick="agregarObraUsuario()">Agregar Obra</button>
            </form>
            
            <h3>Buscar Obras</h3>
            <div>
                <label for="buscarArtista">Por artista:</label>
                <input type="text" id="buscarArtista">
                <button type="button" onclick="buscarPorArtistaUsuario()">Buscar</button>
            </div>
            <div>
                <label for="buscarAnioInicio">Por período:</label>
                <input type="number" id="buscarAnioInicio" placeholder="Año inicio">
                <input type="number" id="buscarAnioFin" placeholder="Año fin">
                <button type="button" onclick="buscarPorAnioUsuario()">Buscar</button>
            </div>
            
            <div id="resultadosBusqueda"></div>
        </div>
    `;
    
    document.getElementById("resultadoEj6").innerHTML = html;
    
    // Mostrar obras iniciales
    actualizarListaObras();
}

function actualizarListaObras() {
    let html = "<ul>";
    for (let i = 0; i < galeriaGlobal.obras.length; i++) {
        html += "<li>" + galeriaGlobal.obras[i].getInfo() + "</li>";
    }
    html += "</ul>";
    
    document.getElementById("listaObras").innerHTML = html;
}

function agregarObraUsuario() {
    let titulo = document.getElementById("titulo").value;
    let artista = document.getElementById("artista").value;
    let anio = parseInt(document.getElementById("anio").value);
    let tecnica = document.getElementById("tecnica").value;
    let descripcion = document.getElementById("descripcion").value;
    
    if (titulo && artista && !isNaN(anio) && tecnica) {
        let nuevaObra = new ObraArte(titulo, artista, anio, tecnica);
        if (descripcion) {
            nuevaObra.setDescripcion(descripcion);
        }
        
        galeriaGlobal.agregarObra(nuevaObra);
        
        // Limpiar formulario
        document.getElementById("formObra").reset();
        
        // Actualizar lista
        actualizarListaObras();
        
        // Mensaje de éxito
        alert("¡Obra agregada con éxito!");
    } else {
        alert("Por favor, completa todos los campos obligatorios.");
    }
}

function buscarPorArtistaUsuario() {
    let artista = document.getElementById("buscarArtista").value;
    
    if (artista) {
        let resultados = galeriaGlobal.buscarPorArtista(artista);
        mostrarResultadosBusqueda(resultados, "artista '" + artista + "'");
    } else {
        alert("Por favor, introduce un nombre de artista para buscar.");
    }
}

function buscarPorAnioUsuario() {
    let anioInicio = parseInt(document.getElementById("buscarAnioInicio").value);
    let anioFin = parseInt(document.getElementById("buscarAnioFin").value);
    
    if (!isNaN(anioInicio) && !isNaN(anioFin)) {
        let resultados = galeriaGlobal.buscarPorAnio(anioInicio, anioFin);
        mostrarResultadosBusqueda(resultados, "período " + anioInicio + " - " + anioFin);
    } else {
        alert("Por favor, introduce años válidos para buscar.");
    }
}

function mostrarResultadosBusqueda(obras, criterio) {
    let html = "<h4>Resultados de búsqueda por " + criterio + ":</h4>";
    
    if (obras.length > 0) {
        html += "<ul>";
        for (let i = 0; i < obras.length; i++) {
            html += "<li>" + obras[i].getInfo() + "</li>";
        }
        html += "</ul>";
    } else {
        html += "<p>No se encontraron obras con este criterio.</p>";
    }
    
    document.getElementById("resultadosBusqueda").innerHTML = html;
}