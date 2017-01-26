$(document).ready(function(){

    $('.input').keyup(function(){

        inputValue1 = $('#input1').val();
        inputValue2 = $('#input2').val();

        if(inputValue1 > 0 && inputValue2 > 0){
            $('#btn').addClass('ready');
        }else{
            $('#btn').removeClass('ready');
        }

    })

    //checa se há dados nos campos de peso e altura


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

            var decimalHeight = height * 100;

            if(decimalHeight % 2 != 0){
                height = decimalHeight -1;
            }else{
                height = decimalHeight - 0;
            }

            console.log(height)
            //os valores da tabela de peso minino e máximo só tem valores pares, esta condição converte os valores,quando necessário.

        var a = 150;
        var b = 202;
        var heights = [];

        for (var i = a; i < b; i+= 2) {
            heights.push(i);
        };

        console.log( $.inArray( height , heights ));

        var inArray = $.inArray( height , heights );

        var c = 42;
        var d = 76;
        minWeight = [];

        for (var i = c; i < d; i++) {
            minWeight.push(i);
        };

        minWeight.splice(3, 1);minWeight.splice(9, 1);minWeight.splice(12, 1);minWeight.splice(16, 1);minWeight.splice(18, 1);minWeight.splice(21, 1);minWeight.splice(23, 1);minWeight.splice(25, 1);
        //remove determinados valores que não existem na tabela

        var minWeight = minWeight[inArray]

        var e = 56;
        var f = 101;
        var maxWeight = [];
        
        for(var i = e; i < f; i++){
            maxWeight.push(i);
        }

        maxWeight.splice(2, 1);maxWeight.splice(4, 1);maxWeight.splice(5, 1);maxWeight.splice(7, 1);maxWeight.splice(9, 1);maxWeight.splice(10, 1);maxWeight.splice(12, 1);maxWeight.splice(13, 1);maxWeight.splice(14, 1);maxWeight.splice(15, 1);maxWeight.splice(17, 1);maxWeight.splice(18, 1);maxWeight.splice(19, 1);maxWeight.splice(20, 1);maxWeight.splice(21, 1);maxWeight.splice(22, 1);maxWeight.splice(23, 1);maxWeight.splice(24, 1);maxWeight.splice(25, 1);
        
        var maxWeight = maxWeight[inArray];

        console.log(maxWeight)

        var trans = imc.toString();
        var simc = trans.slice(0,4);
        //transforma número em string e edita para apenas os 4 primeiros elementos, resultado do imc
        var down = 'Abaixo do peso';
        var ideal = 'Peso ideal';
        var high = 'Acima do peso';

        console.log(simc + " imc");

        var result = create;
                    $('.imc').text(simc);
                    $('#minWeight').text(minWeight + " kg");
                    $('#maxWeight').text(maxWeight + " kg");


        $(".remove").remove()
        //não ultilizado na primeira abordagem, mas remove o resultado antigo numa segunda checagem do imc

            if(imc <= 18.599){
                result;
                $('#indice').text(down);
            }
            else if(imc > 18.6 && imc <= 24.999){
                result;
                $('#indice').text(ideal);;
            }
            else if(imc >= 25.0 && imc <= 29.99){
                result;
                $('#indice').text(ideal);;
            }
            else if(imc >= 30.0 && imc < 34.99){
                result;
                $('#indice').text(high);;
            }
            else if(imc >= 35.0 && imc < 39.99){
                result;
                $('#indice').text(high);;
            }
            else if(imc >= 40.0){
                result;
                $('#indice').text(high);;
            }
            else {
                $('.error').fadeIn('fast').addClass('remove');
            }
       
            
            var create = $('#clone').clone().removeClass('hidden').addClass('remove').appendTo('#append');

        $('input[name=weight]').val('');
        $('input[name=height]').val('');
        //limpa os campos de peso e altura após a checagem.
        };
    });
});
