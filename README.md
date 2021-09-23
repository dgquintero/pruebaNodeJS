# retoNodeJs

En el siguiente repositorio encontraras algunos ejercicios lógicos de programación realizados en NodeJs y expuestos en un ENDPOINT para su uso

Primero que todo se responderan algunos temas teóricos para terminar de entender el lenguaje en el que se abordará el desarrollo.

1. Con sus propias palabras explique que es una inyección de dependencias y para qué sirve

Para disminuir el grado de dependencia y las consecuencias que puede tener la complejidad de estas se utiliza la inyección de dependencias, que es crear un objeto y asignárselo directamente a una clase, así evitamos que esa clase tenga la tarea de crear el objeto dependiente de otros parámetros. 

2. Explique con sus propias palabras las diferencias entre asincrono y sincrono
Una operación sincrona esperará un resultado mientras que la asincrona sucede a futuro, o sea que no espera el resultado.

Sincrono cada operación se realiza de una vez, bloqueando el flujo de la ejecución.

Asincrono cada operación se ejecuta y devuelve el control al hilo, esto evita que se bloquee.

3. Cual es la importancia del uso de promesas en un proyecto 

Nos permiten poder continuar sin la necesidad de esperar un resultado de una operación, trabajando de manera asíncrona.

4. Cual es la importancia de usar ORM dentro de un proyecto, ventaja y desventaja
Acelera el proceso de desarrollo ya que no es necesario aprende un lenguaje como SQL y no se requiere repetir tanto codigo para realizar consultas a la base de datos

Tiende a tener una respuesta más lenta que usar codigo nativo SQL

5. Que diferencia hay entre una base de datos SQL, NOSQL
las bases de datos SQL es relacionada mientras que las noSQL no. Lo que hace gran diferencia ya que las relacionales nos permiten combinar de forma eficiente diferentes tablas para extraer información. 

Las no relacionales    nos permiten almacenar grandes volumnees de información.

6. Si hablo de colección y documentos me refiero a?

7. Si una aplicación está sacando error de CORS a que se está refiriendo?
Se refiere a que se está produciendo un error de origen cruzado. el CORS Permite a los servidores indicar a los navegadores si deben permitir la carga de recursos para un origen distinto al suyo.

## Tech

Dependencias y Frameworks usados en el proyecto:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [nodemon] - 

## Instalación

Se requiere [Node.js](https://nodejs.org/).

Instalar las dependencias e iniciar el servidor.

```sh
cd pruebaNodeJS
npm i
npm start
```

## ENDPOINTS

- challenge/docs
- challenge/average/:numero1/:numero2
Para el uso de este enpoint se deben pasar los valores en la url de dos numeros a los cuales se le requiera calcular el promedio.
- challenge/string-manipulation/:texto
Para el uso de este enpoint se debe pasar el dato por la url de la string la cual se dese adepurar ejemplo: request: hi!!! response: hi!! 
Se elimina el ultimo signo de exclamación
- challenge/sum-array/:arr

- challenge/transform-array/:arr/:ord
Se pasa un array por la url y el orden en el que se se desea ser retornado asc o desc  

- challenge/my-cows/:arr/:numero1

## RUTAS REALIZADAS DESPUES DEL TIEMPO LIMITE 2.5 DÍAS
- /challenge/tracking/:apiRoute
Busca la guía o checkpoint pasados por URL
Eje: /challenge/tracking//challenge/tracking/
