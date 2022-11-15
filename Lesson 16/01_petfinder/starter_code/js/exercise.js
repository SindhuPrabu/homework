function selectPet(petType){

    // Get the specific pet data set

    const thePet = petData[petType];

    console.log(thePet);

    // Set the title
    document.querySelector('.petDisplayName').innerText = thePet['displayName'];


    // Empty the specification data
    let specs = "";


    // Add the space required, size, weight
    specs += "<dt>Weight</dt><dd>"+ thePet['weight'] +"</dd>";
    specs = specs + "<dt>Size</dt><dd>"+ thePet['size'] +"</dd>";
    specs += "<dt>Space Required</dt><dd>"+ thePet['spaceRequired'] +"</dd>";


    // Add logic to add the trainability and lap size images
        // If trainable, show yes check
        if(thePet['trainability'] == true){
            specs += "<dt>Trainable</dt><dd><img src=\"./img/200px-Gnome-emblem-default.svg.png\" alt=\"Yes\" class=\"checkmark\" /></dd>";
        }else{
            // Else show the no check
            specs += "<dt>Trainable</dt><dd><img src=\"./img/200px-Gnome-emblem-unreadable.svg.png\" class=\"checkmark\" alt=\"No\" /></dd>";
        }

        if(thePet['fitsOnLap'] == true){
            specs += "<dt>Fits on Lap</dt><dd><img src=\"./img/200px-Gnome-emblem-default.svg.png\" alt=\"Yes\" class=\"checkmark\" /></dd>";
        }else{
            // Else show the no check
            specs += "<dt>Fits on Lap</dt><dd><img src=\"./img/200px-Gnome-emblem-unreadable.svg.png\" alt=\"No\" class=\"checkmark\" /></dd>";
        }

    // Add the foods (may require loop)
    specs += "<dt>Foods</dt><dd><ul>";

        for(let i=0; i < thePet['foods'].length; i++ ){

            specs += "<li>" + thePet.foods[i] + "</li>" ;

        }

    specs += "</ul></dd>";

    console.log(specs);
    document.querySelector('.petsDataSpecs').innerHTML = specs;


    // Update the images
    // set the big picture to the first picture

        document.querySelector(".photoHaus .photoLarge").setAttribute("src",thePet.images[0].img);
        document.querySelector(".photoHaus .photoLarge").setAttribute("alt",thePet.images[0].alt);

  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        // Empty the thumbnails
        document.querySelector(".thumbHaus").innerHTML = "";
    
        // Add the thumbnails
        let petThumbs = "";
        for(let i=0;i<thePet.images.length;i++){

            petThumbs +=
                "<a href=\""+thePet.images[i].img+"\"><img class=\"photoThumb\" src=\""+thePet.images[i].thumb+"\" alt=\""+thePet.images[i].alt+"\"/></a>";


        }
        document.querySelector(".thumbHaus").innerHTML = petThumbs;


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial value
    selectPet( document.querySelector("#petType").value);

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener('change',function(){
        let selectedPet = this.value;
        selectPet(selectedPet);
    });
});






