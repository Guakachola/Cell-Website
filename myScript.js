function showOrganelle(){
    var selectedOrganelle = document.getElementById("organelle").value;

    var organelleModels = {
        "Nucleolus": "assets/Nucleolus.glb",
        "Chromatin": "assets/Chromatin.glb",
        "Nuclear Membrane": "assets/NuclearMembrane.glb"
    }
    var modelURL = organelleModels[selectedOrganelle];

    var organelleModelDiv = document.getElementById("organelleModel");
    organelleModelDiv.innerHTML = `<model-viewer src="${imageURL}" 
    ar ar-modes="webxr scene-viewer quick-look" 
    camera-controls poster="poster.webp" shadow-intensity="1">`;

}