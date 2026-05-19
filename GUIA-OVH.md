# Guia sencilla: editar Excel y generar ZIP para OVH

Esta guia esta pensada para usar la web sin ser desarrolladora.

## Lo que haras normalmente

Cada vez que quieras actualizar obras:

1. Mete las imagenes nuevas en:

```text
public/artworks/
```

2. Edita el Excel:

```text
content/obras.xlsx
```

3. Abre una terminal en la carpeta del proyecto.

4. Ejecuta:

```bash
npm run ovh:zip
```

5. Cuando termine, se creara este archivo:

```text
dist/acuarelle-ovh.zip
```

Ese ZIP es la web lista para subir a OVH.

## Primera vez solamente

La primera vez, antes de ejecutar el comando anterior, instala las dependencias:

```bash
npm install
```

Despues ya puedes usar:

```bash
npm run ovh:zip
```

## Como subirlo a OVH

1. Entra en OVH o abre FileZilla.
2. Conectate por FTP.
3. Abre la carpeta:

```text
www/
```

4. Borra o aparta la web antigua.
5. Descomprime `dist/acuarelle-ovh.zip`.
6. Sube todo el contenido descomprimido dentro de `www/`.

Dentro de `www/` deberias ver archivos y carpetas como:

```text
index.html
portfolio/
obra/
categoria/
_next/
artworks/
artist/
brand/
sitemap.xml
robots.txt
```

Importante: no subas una carpeta llamada `out`. Sube el contenido que hay dentro del ZIP.

## Si cambias el Excel

Cada cambio en el Excel necesita regenerar la web:

```bash
npm run ovh:zip
```

Luego subes el ZIP nuevo a OVH.

## Si anades imagenes

Pon los archivos en:

```text
public/artworks/
```

Y en el Excel escribe solo el nombre:

```text
mi-obra.jpg
mi-obra-detalle.jpg
```

Si una obra tiene varias imagenes:

```text
mi-obra.jpg,mi-obra-detalle.jpg,mi-obra-marco.jpg
```

## Si algo falla

Revisa:

- Que el Excel se llame `obras.xlsx`.
- Que este en la carpeta `content/`.
- Que las columnas del Excel no hayan cambiado de nombre.
- Que las imagenes mencionadas en el Excel existan en `public/artworks/`.
