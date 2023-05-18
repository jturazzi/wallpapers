const fs = require('fs');

const generateGallery = (imagesDir) => {
  // Crée le contenu HTML de la galerie
  let html = 
  `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Galerie</title>
    <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.min.css">
  </head>
  <body>
    <div class="container">
      <br>
      <h1>Galerie</h1>
      <br>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  `;

  // Parcourt le dossier d'images et ajoute une carte Bootstrap pour chaque image
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    if (file.match(/\.(png|jpg)$/)) {
      const name = file.replace(/\.[^/.]+$/, "");
      html += 
      `       
        <div class="col">
          <div class="card">
            <a href="${imagesDir}/${file}">
              <img src="${imagesDir}/${file}" class="card-img-top" alt="${name}">
            </a>
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
            </div>
          </div>
        </div>
        `;
    }
  }

  html +=`   
      </div>  
    </div>
  </body>
</html>`;

  // Écrit le contenu HTML dans le fichier presentation.html
  fs.writeFileSync('index.html', html);
};

generateGallery('images');