$(document).ready(function(){

    $('#btn').click(function(){
        var weight = $('input[name=weight]').val(),
            height = $('input[name=height]').val();

            var height = parseFloat(height.replace(',','.'));
            var weight = parseFloat(weight.replace(',','.'));
            //variaveis atualizadas com a casa decimal correta, previne o javascript de não reconhecer virgulas

            if (height > 2.5){
                height = height / 100;
            }
            //condição caso o user entre com um valor não decimal, altura minima de 2 metros e 50 cm ou 2.5

    if(weight != 0 && height != 0 && height >= 1.50){

        var imc = weight / (height * height);

            var heightInMetro = height * 100;

            if(heightInMetro % 2 != 0){
                newHeight = heightInMetro -1;
            }else{
                newHeight = heightInMetro - 0;
            }

            console.log(newHeight)
            //os valores da tabela de peso minino e máximo só tem valores pares, esta condição converte os valores,quando necessário.

        var s = 150;
        var e = 202;
        var heights = [];

        for (var i = s; i < e; i+= 2) {
            heights.push(i);
        };

        console.log( $.inArray( newHeight , heights ));

        var v = $.inArray( newHeight , heights );

        var a = 42;
        var b = 76;
        minWeight = [];

        for (var i = a; i < b; i++) {
            minWeight.push(i);
        };

        minWeight.splice(3, 1);minWeight.splice(9, 1);minWeight.splice(12, 1);minWeight.splice(16, 1);minWeight.splice(18, 1);minWeight.splice(21, 1);minWeight.splice(23, 1);minWeight.splice(25, 1);
        //remove determinados valores que não existem na tabela

        var minWeight = minWeight[v]

        var ps = 56;
        var pe = 101;
        var maxWeight = [];
        
        for(var i = ps; i < pe; i++){
            maxWeight.push(i);
        }

        maxWeight.splice(2, 1);maxWeight.splice(4, 1);maxWeight.splice(5, 1);maxWeight.splice(7, 1);maxWeight.splice(9, 1);maxWeight.splice(10, 1);maxWeight.splice(12, 1);maxWeight.splice(13, 1);maxWeight.splice(14, 1);maxWeight.splice(15, 1);maxWeight.splice(17, 1);maxWeight.splice(18, 1);maxWeight.splice(19, 1);maxWeight.splice(20, 1);maxWeight.splice(21, 1);maxWeight.splice(22, 1);maxWeight.splice(23, 1);maxWeight.splice(24, 1);maxWeight.splice(25, 1);
        
        var maxWeight = maxWeight[v];

        console.log(maxWeight)

        var trans = imc.toString();
        var simc = trans.slice(0,4);
        //transforma número em string e edita para apenas os 4 primeiros elementos, resultado do imc
        var down = 'Abaixo do peso';
        var ideal = 'Peso ideal';
        var high = 'Acima do peso';

        console.log(simc + " imc");

        $(".remove").remove()
        //não ultilizado na primeira abordagem, mas remove o resultado antigo numa segunda checagem do imc

            if(imc <= 18.599){
                create;
                $('.imc').text(simc);
                $('#indice').text(down);
                $('#minWeight').text(minWeight + " kg");
                $('#maxWeight').text(maxWeight + " kg");

            }
            else if(imc > 18.6 && imc <= 24.99){
                create;
                $('.imc').text(simc);
                $('#indice').text(ideal);
                $('#minWeight').text(minWeight + " kg");
                $('#maxWeight').text(maxWeight + " kg");

            }
            else if(imc >= 25.0 && imc <= 29.99){
                create;
                $('.imc').text(simc);
                $('#indice').text(high);
                $('#minWeight').text(minWeight + " kg");
                $('#maxWeight').text(maxWeight + " kg");

            }
            else if(imc >= 30.0 && imc < 34.99){
                create;
                $('.imc').text(simc);
                $('#indice').text(high);
                $('#minWeight').text(minWeight + " kg");
                $('#maxWeight').text(maxWeight + " kg");

            }
            else if(imc >= 35.0 && imc < 39.99){
                create;
                $('.imc').text(simc);
                $('#indice').text(high);
                $('#minWeight').text(minWeight + " kg");
                $('#maxWeight').text(maxWeight + " kg");

            }
            else if(imc >= 40.0){
                create;
                $('.imc').text(simc);
                $('#indice').text(high);
                $('#minWeight').text(minWeight + " kg");
                $('#maxWeight').text(maxWeight + " kg");

            }
            else {
                $('.imc').text("!");
                $('#indice').text("!");
                $('#minWeight').text("?");
                $('#maxWeight').text("?");
            }
       
            
            var create = $('#clone').clone().removeClass('hidden').addClass('remove').appendTo('#append');

        $('input[name=weight]').val('');
        $('input[name=height]').val('');
        //limpa os campos de peso e altura após a checagem.
        };
    });
});
