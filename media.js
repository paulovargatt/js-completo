(function(){
    function media() {

        var total = 0;
        var qtd = arguments.length;
        var x = 0;
        while(typeof arguments[x] === 'number' ){
            total += arguments[x];
            x++
        }

        return total / qtd;
    }
    var media1 = media(2,3)
    var media2 = media(2,0,10,6)

    console.log(media1)
    console.log(media2)

})()
