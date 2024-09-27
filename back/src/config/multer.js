const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./src/public");
    },
    filename: function (req, file, cb) {
        let imagem_sem_espaco = file.originalname.trim()
        let imagem_array = imagem_sem_espaco.split(' ')
        let imagem_underline = imagem_array.join('_')

        return cb(null, `${Date.now()}_${imagem_underline}`);
    }
});

var upload = multer({ storage });

module.exports = upload;