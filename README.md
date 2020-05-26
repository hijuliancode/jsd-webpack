## Webpack
Es un bundler (paquete) de modulos javascript para aplicaciones javascript modernas.
Webpack procesa la aplicación y mapea todas las dependencias de un módulo, esto crea uno o varios paquetes o bundlers.

### 4 Conceptos básicos en Webpack
#### Entry (la entrada):
Un punto de entrada que especifica que módulo debe utilizar Webpack para comenzar a crear la gráfica de dependencias, Webpack se encargará de saber que dependencias tiene ese módulo. Por lo normal el punto de entrada y la configuración se guardan en un archivo, pero en la versión 4 ya no es necesario hacerlo. Normalmente la entrada se almacena en una carpeta src/ .

#### Output (la salida):
La salida le dirá a Webpack, en que parte se debe almacenar el bundle que se ha creado. La salida siempre se almacena en una carpeta llamada dist/ .

#### Loaders (cargadores):
(De las partes más importantes) Webpack solo entiende archivos JavaScript, pero con los loaders puede cargar otros formatos como sass, less, imágenes, html.
Importar archivos css es algo que gulp o grunt no pueden hacer y que le dara mucho mayor poder a Eebpack sobre estas herramientas.
  > Loaders tiene 2 palabras clave, Test y Use:
  - test: Le dice al archivo Webpack que archivos deben ser transformados.
  - use: Le dice al archivo Webpack que loader estamos utilizando el archivo que hemos definido en el test.

#### Plugins (complementos):
Los loaders nos permiten usar distintos tipos de módulos y otros formatos. Pero los Plugins realizan otro tipo de tareas tales como optimizar el bundle, administración avanzada de los assets. Un plugin se instala via NPM y se importa al archivo Webpack con la palabra require().

Para trabajar con Webpack necesitamos tener instalado NodeJS y NPM.
Webpack no soporta IE8 o navegadores anteriores (puede añadirse soporte por medio de un polyfill).
