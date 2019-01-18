

$(document).ready(()=>{

	let deferredPrompt;
	const addBtn = document.querySelector('.add-button');
	addBtn.style.display = 'none';

	window.addEventListener('beforeinstallprompt', (e) => {
		// Prevent Chrome 67 and earlier from automatically showing the prompt
		e.preventDefault();
		// Stash the event so it can be triggered later.
		deferredPrompt = e;
		// Update UI to notify the user they can add to home screen
		addBtn.style.display = 'block';
	
		addBtn.addEventListener('click', (e) => {
			// hide our user interface that shows our A2HS button
			addBtn.style.display = 'none';
			// Show the prompt
			deferredPrompt.prompt();
			// Wait for the user to respond to the prompt
			deferredPrompt.userChoice.then((choiceResult) => {
					if (choiceResult.outcome === 'accepted') {
						console.log('User accepted the A2HS prompt');
					} else {
						console.log('User dismissed the A2HS prompt');
					}
					deferredPrompt = null;
				});
		});
	});

    $("#volverF").click(()=>{
		location.reload();
	})
	document.getElementById("files").onchange = function(e) {
		// Creamos el objeto de la clase FileReader
		let reader = new FileReader();
	  
		// Leemos el archivo subido y se lo pasamos a nuestro fileReader
		reader.readAsDataURL(e.target.files[0]);
		
		// Le decimos que cuando este listo ejecute el código interno
		reader.onload = function(){
			let img=document.createElement("img");
			img.src=reader.result;
			img.setAttribute("style","display:block");
			$('#previewImg').prepend(img);
			$('#previewImg').removeClass('ocultar');
			$('#form-datos').removeClass('ocultar');
			$('#pag1').removeClass('mostrar');
			$('#pag1').addClass('ocultar');
			$('.input-file label').removeClass('imgCamera')
            $('#files').removeClass('img-fichero')
            // var myImage=reader.result
            // Tesseract.recognize(myImage)
            // .progress(message => console.log(message))
            // .catch(err => console.error(err))
            // .then(result => console.log(result))
            // .finally(resultOrError => console.log(resultOrError))

		};
	  }
      var slider = document.getElementById("myRange");
	  var output = document.getElementById("valor");
	  output.innerHTML = slider.value;
	  
	  slider.oninput = function() {
		output.innerHTML = this.value;
	  }

	  $('#formulario').submit((e)=>{
		e.preventDefault();
		
		var url = "http://www.rodalco.es/apineumaticos/neudata.php";
		var fd = new FormData(document.getElementById("formulario"));
		
		$.ajax({
		  url: url,
		  type: "POST",
		  data: fd,
		  processData: false,  // tell jQuery not to process the data
		  contentType: false,   // tell jQuery not to set contentType
		  success:(datos)=>{
			$('#myModal').modal()
			  console.log(datos)
		  }
		});
	  })
})

	

