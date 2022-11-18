// Cragando las variables de entorno
import configKeys from '../../config/configKeys';
// Creando los Actions Methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {
    title: 'Express',
    author: 'Garcia Tellez Maria Luisa',
  };

  // 2. Mandamos a generar la vista con el Template Engine
  res.render('home/home', viewModel);
};
// GET "/about"
const about = (req, res) => {
  const viewModel = {
    appVersion: configKeys.appVersion,
  };
  res.render('home/about', viewModel);
};

// Exportando el Controlador
export default { home, about };
