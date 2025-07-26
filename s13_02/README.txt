
npx sequelize model:generate --name User --attributes nombre:string,email:string

npx sequelize model:generate --name Libro --attributes titulo:string,autor:string,anhoPublicacion:integer,genero:string,userId:integer


Editar el modelo "Libro.js" y agregar la asociacion:
    this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'usuario'
      });

Modificar la columna userId (la FK) con:
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }


Editamos el modelo "user" y agregamos la relacion:
       this.hasMany(models.Libro, {
        foreignKey: 'userId',
        as: 'libros'
      });


  Editar la migracion de libros.
  Reemplazar el userid:

           userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },

Crear la BD
Ejecutar la migracion

Cargar algunos datos ( seeders )

PROBAR:
/*
Agregado S13 : relacion 1:N
EAGER
*/
const { User, Libro }  = require('./models');
app.get("/api/getOne/:id", async(req,res) => {
  const id = req.params.id
  console.log(`Buscando la data del usuario ${id}`)
  const resultado = await db.User.findOne({
    where: { id: id } ,
    include: [{ model: Libro, as: 'libros' }]
  });
  res.json( resultado) ;

})