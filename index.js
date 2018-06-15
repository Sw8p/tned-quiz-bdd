require('app-module-path').addPath(__dirname)
var mongoose = require('mongoose');

/* CONNECTION */
async function main() {
    await require('src/mongooseTest').connect()
    console.log("co! ^^");
}

main().catch(console.error)

/* SCHEMA */
var kittySchema = mongoose.Schema({
  name: String
});

/* METHODE */
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

/* MODEL -> construct documents */
var Kitten = mongoose.model('Kitten', kittySchema);

/*  DOCUMENTS */
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
var fluffy = new Kitten({ name: 'fluffy' });
//appel methode */
fluffy.speak(); // "Meow name is fluffy"

/* .save -> MONGODB */
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  /* .find -> MONGODB */
  Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
