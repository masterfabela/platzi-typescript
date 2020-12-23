# Estrategia de resolucion de modulos

## Configuraciones tipo de modulo

En `tsconfig.json` el parametro `module: "<valor>"`

### Modulos CommonJS o UMD

-   Mas Configurable

`tsc -- moduleResolution node`

### Modulos AMD, System, ES2015

-   Poco configurable

`tsc -- moduleResolution classic`
