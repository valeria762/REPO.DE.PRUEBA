$(document).ready(function(){
    $('#btnBuscar').click(function(e){
        e.preventDefault();
        let nombrePokemon = $('#campoBuscar').val().toLowerCase();
        if(nombrePokemon){
            buscarPokemon(nombrePokemon);
        }
    });
    $('#btnLimpiar').click(function(e){
        e.preventDefault();
        $('#pokemon-container').empty();
        $('#campoBuscar').val('');
    });
    function buscarPokemon(pokemon){
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
            dataType: "json",
            succes: function(data){
                renderPokeData(data)
            }
        });    
    }
})