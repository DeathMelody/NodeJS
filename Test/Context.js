var pet = {
    words:'...',
    sperk:function(sperk){
        console.log(sperk+''+this.words);
        console.log(this === pet)
    }
}
var dog = {
    words:'wang'
}
// pet.sperk.call(dog,'sperk')
pet.sperk('xi');