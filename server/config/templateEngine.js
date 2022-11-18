import exphbs from 'express-handlebars';
import path from 'path';

// app: Es una instancia de exprress
export default (app) => {
  // Configurar el motor de plantillas de express
  // usando express-handlebars
  // 1. Registrar el motor de plantillas
  app.engine(
    'hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );

  // 2. Seleccionar el motor de plantillas
  app.set('view engine', 'hbs');

  // 3. Establecer la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  // 4. Retornar el motor de plantillas
  return app;
};
