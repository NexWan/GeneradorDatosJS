$(() =>{
    $('#mainContent').html(() =>{
        return `
            <label><input type="checkbox" id="cbox1" value="nombre" /> Nombre </label>
            <label><input type="checkbox" id="cbox2" value="lastNameF" /> Apellido Paterno </label>
            <label><input type="checkbox" id="cbox1" value="lastNameM" /> Apellido Materno </label>

        `
    });


    //This part of the code should execute the resulting script or result, at first im just going to display it as a sql query, then as a json i guess.
    $('#okButton').click(()=>{
        $('#resultContainer').append("<p> ola </p>")
    })
})