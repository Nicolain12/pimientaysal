const path = require('path')

const indexController = {
    index: (req, res) =>{
        let comidas = [
            {
                nombre: "Carpaccio fresco",
                descripcion: "Entrada Carpaccio de salmón con cítricos",
                precio: "U$S 65.50" 
            },
            {
                nombre: "Risotto de berenjena",
                descripcion: "Risotto de berenjena y queso de cabra",
                precio: "U$S 47.00" 
            },
            {
                nombre: "Mousse de arroz",
                descripcion: "Mousse de arroz con leche y aroma de azahar",
                precio: "U$S 27.50" 
            },
            {
                nombre: "Espárragos blancos",
                descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
                precio: "U$S 37.50" 
            }
        ]

        res.render('index', {comidas: comidas})
    }
}
        
module.exports = indexController