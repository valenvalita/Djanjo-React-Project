# Proyecto Django React - Music Controller
Este es un proyecto realizado con Django y React para crear una aplicación de hosting de música. Un usuario puede conectar su cuenta de Spotify a la aplicación e invitar a otros usuarios creando una sala. De esta forma los usuarios que estén en esta habitación podrán pausar o cambiar la canción actual.

## Ejecución del Proyecto

Para ejecutar este proyecto, sigue los pasos a continuación:

1. Abre una terminal en la carpeta del proyecto `Proyecto Django React`.

2. Inicia el ambiente virtual para Python. En la terminal, ejecuta el siguiente comando:

   ```bash
   venv/Scripts/activate
   ```

   Esto activará el ambiente virtual y te permitirá ejecutar el proyecto con las dependencias correctas.

3. Ejecuta el servidor Django. En la misma terminal y dentro del ambiente virtual, navega a la carpeta `music_controller` y ejecuta el siguiente comando:

   ```bash
   cd music_controller
   python manage.py runserver
   ```

   Este comando iniciará el servidor Django en tu máquina local.

4. Abre otra terminal en la carpeta del proyecto `Proyecto Django React`.

5. Ejecuta el proyecto de React en modo de desarrollo. En la nueva terminal, navega a la carpeta `frontend` dentro de `music_controller` y ejecuta el siguiente comando:

   ```bash
   cd music_controller/frontend
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo de React.

6. Abre tu navegador web y visita la siguiente URL para ver el proyecto en acción:

   ```
   http://127.0.0.1:8000/
   ```

   Esta URL te llevará a la página principal del proyecto, donde podrás interactuar con la aplicación.
   
