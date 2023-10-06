function showOrganelle(){
    var selectedOrganelle = document.getElementById("organelleSelect").value;

    var organelleModels = {
        "Nucleolus": "assets/Nucleolus.glb",
        "Chromatin": "assets/Chromatin.glb",
        "Nuclear Membrane": "assets/NuclearMembrane.glb",
        "RER": "assets/RER.glb",
        "SER": "assests/SER.glb",
        "Ribosome": "assests/Ribosome.glb",
        "Lysosome": "assests/Lysosome.glb",
        "Golgi Apparatus": "assests/GolgiApparatus.glb",
        "Vacuole": "assests/Vacuole.glb",
        "Centrioles": "assests/Centrioles.glb",
        "Mitochondrion": "assests/Mitochondrion.glb",
        "Cytoplasm": "assests/Cytoplasm.glb",
        "Cell Membrane": "assests/CellMembrane.glb"
    }
    var modelURL = organelleModels[selectedOrganelle];

    var organelleModelDiv = document.getElementById("organelleModel");
    organelleModelDiv.innerHTML = `<model-viewer src="${modelURL}" 
    ar ar-modes="webxr scene-viewer quick-look" 
    camera-controls poster="poster.webp" shadow-intensity="1">`;

}

function showText(){
    var selectedOrganelle = document.getElementById("organelleSelect").value;

    var organelleModels = {
        "Nucleolus": "The nucleolus is a prominent substructure found within the nucleus of eukaryotic cells, particularly in animal and plant cells. It is primarily responsible for the assembly of ribosomes, the cellular machinery essential for protein synthesis. The nucleolus contains three main components: fibrillar centers, dense fibrillar components, and granular components, each with specific roles in ribosome production. Ribosomal RNA (rRNA) genes are transcribed and processed in the nucleolus, where ribosomal subunits are also assembled before being transported to the cytoplasm for protein synthesis. The nucleolus plays a crucial role in cellular function by ensuring the efficient production of ribosomes, making it vital for protein synthesis and overall cell growth.",
        "Chromatin": "Chromatin is a complex structure found within the nucleus of eukaryotic cells that packages and organizes DNA. It consists of DNA molecules wrapped around histone proteins, forming nucleosomes, which are the fundamental repeating units of chromatin. Chromatin serves two essential functions: compacting the long DNA strands to fit within the nucleus and regulating gene expression. It can exist in two states: euchromatin, which is loosely packed and allows for active gene transcription, and heterochromatin, which is tightly packed and represses gene activity. Chromatin remodeling and modifications to histone proteins play a crucial role in controlling access to specific genes, influencing cellular processes such as development, differentiation, and response to environmental cues. Overall, chromatin structure and dynamics are central to the regulation of gene expression and essential for cellular function.",
        "Nuclear Membrane": "The nuclear membrane, also known as the nuclear envelope, is a double-layered membrane structure that surrounds the nucleus of eukaryotic cells. It separates the nucleus from the cytoplasm and serves as a protective barrier for the genetic material inside the nucleus. The nuclear membrane consists of an inner nuclear membrane and an outer nuclear membrane, which are continuous at certain points called nuclear pores. These nuclear pores allow for the controlled passage of molecules such as RNA and proteins between the nucleus and the cytoplasm, facilitating essential cellular processes like transcription and translation. The nuclear envelope is dynamically regulated, and during cell division, it breaks down to allow for the proper segregation of genetic material and reforms in daughter cells. In summary, the nuclear membrane is a crucial cellular structure that maintains the integrity of the nucleus while facilitating the exchange of molecules necessary for cellular functions.",
        "RER": "The rough endoplasmic reticulum (RER) is a membrane-bound organelle found in eukaryotic cells, primarily involved in protein synthesis and processing. It appears rough due to the presence of ribosomes attached to its outer surface, which are responsible for protein production. As ribosomes translate mRNA into proteins, the RER aids in the synthesis of secretory proteins, membrane proteins, and proteins destined for the cell's organelles or export. After synthesis, these proteins undergo various post-translational modifications, such as glycosylation and folding, within the RER's lumen. Once processed, proteins are transported to their target destinations, including the Golgi apparatus, where they are further modified and sorted for secretion or use within the cell. In summary, the rough endoplasmic reticulum plays a critical role in protein synthesis, processing, and trafficking within eukaryotic cells.",
        "SER": "The smooth endoplasmic reticulum (SER) is a membrane-bound organelle found in eukaryotic cells that lacks ribosomes on its surface, giving it a smooth appearance. The primary function of the SER is the synthesis of lipids, including phospholipids and steroids, and the detoxification of drugs and toxins in the cell. It plays a crucial role in lipid metabolism, producing components for cell membranes and lipid-based molecules like hormones. The SER also stores and releases calcium ions, which are vital for various cellular processes, including muscle contraction and signaling pathways. Additionally, it participates in the metabolism of carbohydrates and the synthesis of steroid hormones in specialized cells. In summary, the smooth endoplasmic reticulum is a multifunctional organelle involved in lipid synthesis, detoxification, calcium regulation, and other key cellular processes.",
        "Ribosome": "Ribosomes are essential cellular structures found in all living cells, responsible for protein synthesis. Composed of two subunits, the small and large ribosomal subunits, they work together to read the genetic code stored in messenger RNA (mRNA) and facilitate the assembly of amino acids into polypeptide chains during translation. Ribosomes can be found in the cytoplasm (free ribosomes) or attached to the rough endoplasmic reticulum (membrane-bound ribosomes). They coordinate the precise binding of transfer RNA (tRNA) molecules to mRNA, ensuring that the correct amino acids are added to the growing protein chain. Ribosomes are highly conserved across species and are crucial for the synthesis of proteins that perform virtually all cellular functions, making them one of the most fundamental cellular structures. In summary, ribosomes are molecular machines responsible for translating genetic information into functional proteins in cells.",
        "Lysosome": "Lysosomes are membrane-bound organelles found in eukaryotic cells that function as the cell's digestive system. They contain a variety of enzymes, known as hydrolases, which break down cellular waste, damaged organelles, and foreign substances, including bacteria and viruses. Lysosomes play a critical role in maintaining cellular health by removing and recycling cellular debris and ensuring proper waste disposal. They are involved in processes such as autophagy, where they engulf and degrade old or malfunctioning organelles, and phagocytosis, where they digest materials taken in from the external environment. Lysosomal malfunction can lead to various diseases, such as lysosomal storage disorders, highlighting the essential role of lysosomes in cellular homeostasis and overall health. In summary, lysosomes are vital cellular organelles responsible for waste disposal and maintaining cellular integrity.",
        "Golgi Apparatus": "The Golgi apparatus, often referred to as the Golgi complex or Golgi body, is a membrane-bound organelle found in eukaryotic cells. It plays a central role in processing, modifying, and sorting proteins and lipids synthesized in the endoplasmic reticulum (ER) for distribution to their final destinations. The Golgi apparatus consists of a series of flattened, stacked membrane sacs called cisternae, organized into a cis face (receiving end) and a trans face (shipping end). As proteins and lipids move through the Golgi, they undergo post-translational modifications such as glycosylation and receive specific molecular tags for targeting. The Golgi apparatus acts as a distribution center, sending these modified molecules to various cellular locations, including lysosomes, the plasma membrane, or for secretion outside the cell. In summary, the Golgi apparatus is a crucial organelle involved in processing and sorting molecules, ensuring their proper function and delivery within the cell and to the external environment.",
        "Vacuole": "The vacuole is a membrane-bound organelle found in plant cells, fungal cells, and some protists. It is a versatile and dynamic structure with multiple functions. One of its primary roles is to store water, helping to maintain turgor pressure and support the cell's structural integrity in plant cells. Vacuoles can also store various molecules, including sugars, ions, pigments, and toxins, acting as a reservoir for essential nutrients and waste products. Additionally, they play a role in regulating cell growth and expansion by controlling the flow of water and nutrients. In some plant cells, vacuoles may contain pigments that give flowers and fruits their vibrant colors, serving both aesthetic and protective functions. In summary, the vacuole is a multifunctional organelle involved in storage, structural support, waste management, and pigment distribution in plant and certain other cell types.",
        "Centrioles": "Centrioles are small, cylindrical structures found in animal cells, typically occurring in pairs near the nucleus within a region called the centrosome. They play a crucial role in cell division, particularly during the process of cell replication known as mitosis and in the formation of cilia and flagella. During cell division, centrioles organize and anchor the microtubules of the mitotic spindle, ensuring accurate separation of chromosomes into the daughter cells. Centrioles consist of nine sets of microtubule triplets arranged in a cylindrical structure called a 9+0 pattern. While centrioles are essential for cell division, they are not present in all types of cells and are absent in plant cells. The centrosome, which contains the centrioles, acts as the cell's microtubule organizing center and plays a vital role in maintaining cell shape and polarity. In summary, centrioles are specialized organelles involved in organizing microtubules and ensuring proper chromosome segregation during cell division in animal cells.",
        "Mitochondrion": "Mitochondria are double-membraned organelles found in eukaryotic cells, often referred to as the powerhouses of the cell due to their central role in energy production. They generate adenosine triphosphate (ATP), the cell's primary energy currency, through a process called oxidative phosphorylation. Mitochondria have their own DNA and can replicate independently, leading to the theory of their evolutionary origin as symbiotic bacteria. These organelles play a critical role in cellular respiration, where they convert glucose and oxygen into ATP, releasing carbon dioxide and water as byproducts. Mitochondria are highly dynamic and can change shape, fuse, or divide to meet the cell's energy demands, making them essential for various cellular functions beyond energy production. In summary, mitochondria are essential organelles responsible for ATP production, cellular respiration, and maintaining cellular energy balance in eukaryotic cells.",
        "Cytoplasm": "Cytoplasm is the jelly-like substance that fills the interior of a cell, surrounding all of its organelles. It is a semi-fluid matrix composed of water, salts, and various molecules, and it provides a medium for chemical reactions to occur within the cell. Cytoplasm plays a critical role in supporting and suspending cellular structures, allowing them to move and interact as needed. It also serves as a site for essential metabolic processes, including glycolysis, which is the initial step of glucose metabolism. Overall, cytoplasm is a vital component of the cell, enabling various cellular functions and serving as the environment where many biochemical reactions take place.",
        "Cell Membrane": "The cell membrane, also known as the plasma membrane, is a thin, semi-permeable barrier that surrounds the outer boundary of all cells. It consists of a lipid bilayer composed of phospholipids, proteins, and other molecules. The primary function of the cell membrane is to regulate the passage of substances in and out of the cell, controlling the cell's internal environment. It selectively allows essential molecules like nutrients and ions to enter the cell while keeping harmful substances out. Additionally, the cell membrane contains receptors and proteins that facilitate communication between the cell and its external environment, enabling cell recognition and signaling processes. In summary, the cell membrane is a crucial component of cells, serving as a protective boundary and a dynamic interface for the exchange of materials and information."
    }
    var modelText = organelleModels[selectedOrganelle];

    var organelleModelDiv = document.getElementById("organelleText");
    organelleModelDiv.innerHTML = modelText;

}