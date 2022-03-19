/*console.log("Prueba de enlace");*/
const fetchPokemon = () =>
{
	const pokeName = document.getElementById("pokeName");
	let pokeInput = pokeName.value.toLowerCase(); //linea anterior y eésta de función imprimir
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; //const url = "https://pokeapi.co/api/v2/pokemon/ditto";
	fetch(url).then((res) =>
	{
		if(res.status != "200")
		{
			//console.log(res);
			pokeImage("./src/mimikkyu.png");
			borrarCampos();
		}
		else
		{
			return res.json();
		}
		//console.log(res);
		
	}).then((data) =>
			{
				console.log(data);
				let pokeImg = data.sprites.front_default;
				console.log(pokeImg);
				pokeImage(pokeImg);

				console.log("Datos Pokemon")
				let pokeDts = data.stats;
				console.log(pokeDts);

				let nombre = data.id + ": " + data.species.name[0].toUpperCase() + data.species.name.substring(1);
				//setNumero
				setNombre(nombre);
				let movimientos = data.moves.map(mov => mov.move.name)
				setMovimientos(movimientos);
				console.log(movimientos);
			})
}
//fetchPokemon();

const setNombre = (nombre) =>
{
    const inputfield = document.getElementById("nombre");
    inputfield.value = nombre;
}

/*const setNumero = (numero) =>
{
	const inputfield = document.getElementById("numero");
	inputfield.value = numero;
}*/

const setMovimientos = (movimientos) =>
{
	const inputfield = document.getElementById("movimientos")
	inputfield.value = movimientos;
}

const pokeImage = (url) =>
{
	const pokeImg = document.getElementById("pokeImg");
	pokeImg.src = url;
	/*const pokeDts = document.getElementById("datos");
	pokeDts.src= url;
	const pokename = document.getElementById("pokeName");
	pokename.src=url;*/
}

const borrarCampos = () =>
{
    //setNumero(1);
    setNombre("");
    setMovimientos("");
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png");//revisión de imagen

/*const imprimir = () =>
{
	const pokeName = document.getElementById("pokeName");
	let pokeInput = pokeName.value;
	console.log("Saludos " + pokeInput); //revision de concatenación
}*/