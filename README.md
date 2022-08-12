# Proyecto inicial - Reforzamiento de JavaScript

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```

Para que eso funcione, recuerdo que debemos de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto para este proyecto es el ```8081```, pero si necesitamos cambiarlo porque es posible que ese puerto lo use su ordenador, podemos cambiarlo abriendo el ```package.json``` >> scripts. Ahí veremos la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambiamos el puerto por el que necesitemos y listo. (lógicamente guardamos los cambios antes de ejecutar el ```npm start``` nuevamente)


