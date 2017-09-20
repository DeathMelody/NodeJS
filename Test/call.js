function Pet(words){
    this.words = words;
    this.sperk = function(){
        console.log(this.words)
    }
}
function Dog(words){
    Pet.call(this,words)//继承Pet
}
var dog = new Dog('wang');
dog.sperk();