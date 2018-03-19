var lang="fr"; // Langue par défaut : EN ou FR

$(document).ready(function(){	
	chargerLabelsFR();
	drawLevels(ctx,levels,lang);
	$.datepicker.setDefaults($.datepicker.regional[lang]);
	$("#datepicker").datepicker();
});

$( "#selectFR" ).click(function() {
	lang="fr";
	chargerLabelsFR();
	risks(levels);
	$.datepicker.setDefaults($.datepicker.regional[lang]);
	drawLevels(ctx,levels,lang);
});

$( "#selectEN" ).click(function() {
	lang="en";
	chargerLabelsEN();
	risks(levels);
	$.datepicker.setDefaults($.datepicker.regional[lang]);
	drawLevels(ctx,levels,lang);
});

function chargerLabelsFR(){
		//~ TITRE
	$("#titlePage").text("\311valuation des risques de péri-implantite : outil diagnostique"); 
	$("#titreHeader").text("\311valuation des risques de péri-implantite"); 
	$("#sousTitreHeader").text("Outil diagnostique"); 
	$("#labelOutilDiag").text("Outil diagnostique"); 
	//~ MENU
	$("#labelSystCodage").text("Système de codage"); 
	$("#labelAPropos").text("\300 propos"); 
	$("#labelLanguage").text("Langues "); 
	//~ IDENTITE DU PATIENT
	$("#headerIdentity").text("Identité du patient"); 
	$("#labelNameClient").text("Nom du patient"); 
	$("#labelSurnameClient").text("Prénom du patient"); 
	$("#labelSexe").text("Sexe du patient"); 
	$("#textDropdownMenuHF").text("Sexe "); 
	$("#homme").text("Homme"); 
	$("#femme").text("Femme"); 
	$("#ageClient").text("\302ge du patient"); 
	$("#labelDateConsultation").text("Date de la consultation"); 
	$("#identityEraseButton").val("Effacer"); 
	// DIAGRAMME D'EVAUATION
	$("#headerDiagram").text("Diagramme d'évaluation"); 
	$("#labelFaces").text("Nombre de faces avec saignement et/ou suppuration au sondage"); 
	$("#labelProfondeur").text("Profondeur de poche au sondage sur au moins 2 faces de l'implant (mm)");
	$("#labelPerte").text("Perte osseuse rapportée à la longueur de l'implant (%)");
	
	$("#labelAssemblage").text("Type d'assemblage prothétique et enfouissement de la limite cervicale");
	$("#protheseTrans0").text("Prothèse transvissée");
	$("#prothesesCelSup1").text("Prothèse scellée avec limite cervicale supra-gingivale");
	$("#protheseCelJux2").text("Prothèse scellée avec limite cervicale juxta-gingivale");
	$("#protheseEnf13").text("Prothèse scellée avec enfouissement < 1 mm");
	$("#protheseEnf124").text("Prothèse scellée avec enfouissement de 1 à 2 mm");
	$("#protheseEnf25").text("Prothèse scellée avec enfouissement > 2 mm");
	
	$("#labelFacesPlaque").text("Nombre de faces avec présence de plaque");
	$("#sanitaryNoAccess5").text("Pas d'accessibilité à l'hygiène");
	
	$("#labelEtatParodontal").text("\311tat parodonal");
	$("#parondonteSain0").text("Parondonte sain");
	$("#parondonteTraité1").text("Parodontite traitée");
	$("#parondonteChroDeb2").text("Parodontite chronique débutante");
	$("#parondonteChroMod3").text("Parodontite chronique modérée");
	$("#parondonteChroSev4").text("Parodontite chronique sévère");
	$("#parondonteAggre5").text("Parodontite aggressive");
	
	$("#labelTabac").text("Tabacomanie (cigarettes/jours)");
	$("#smoker0").text("Non-fumeur");
	$("#formerSmoker1").text("Ancien fumeur");
	
	$("#labelDiabete").text("Taux d'HbA1c (%)");
	$("#risquePeri").text("Risque de péri-implantite :");
	$("#printBtn").val("Sauvegarder/Imprimer");
	
	
	// METHODE DE CALCUL
	$("#headerCalcul").text("Méthode de calcul");
	$("#saignSupp").text("Saignement et/ou suppuration au sondage ");
	$("#sondClin").text("Sondage clinique léger réalisé sur les 6 faces de l’implant : mésio-vestibulaire, vestibulaire, disto-vestibulaire, mésio-lingual/mésio-palatin, lingual/palatin, disto-lingual/disto-palatin, mesuré après 15 secondes et exprimé en nombre de faces implantaires atteintes (0 à 6). ");
	$("#sondClinSondeParo").text("Sondage clinique léger (0.25 N) à l’aide d’une sonde parodontale graduée réalisé sur au moins deux faces de l’implant et exprimé en millimètres.");
	$("#profPoche").text("Profondeur de poche");
	$("#perteOss").text("Perte osseuse");
	$("#radioIntra").text("\311valuée à partir de la radiographie intra-orale rétro-alvéolaire (évaluation de la cratérisation mésiale et distale). Exprimée en pourcentage de résorption osseuse rapporté à la longueur de l’implant.");
	$("#exCiment").text("Excès de ciment");
	$("#correlationEnfouissementLimiteCerv").text("La quantité exacte de ciment résiduel s’avère impossible à mesurer de manière précise, c’est donc la corrélation entre l’enfouissement de la limite cervicale d’une couronne scellée et la quantité de ciment résiduel qui a été exploitée. Les paramètres retenus sont donc : la détermination du moyen d’assemblage pilier implantaire/prothèse (prothèse transvissée ou prothèse scellée) ; dans le cas d’une prothèse scellée, la mesure de la position relative de la limite cervicale par rapport à la gencive marginale en millimètres.");
	$("#hygieneOrale").text("Hygiène orale");
	$("#presenceAbsencePlaque").text("Présence ou absence de plaque sur les 4 faces de l’implant : mésiale, distale, vestibulaire et palatine ou linguale et exprimée en nombre de faces implantaires atteintes (0 à 4). Pour certains types de prothèses implanto-portées (prothèses complètes sur pilotis de type Brånemark, bridges implanto-portés), une évaluation complémentaire de l’accessibilité à l’hygiène est proposée (oui/non) : oui si le patient peut se brosser au niveau de la région implantée à l’aide d’une brosse à dent, d’une brossette ou de fil dentaire, non en cas d’accès limité (lié au profil d’émergence notamment) et/ou d’incapacité du patient.");
	$("#etatParo").text("\311tat parodontal");
	$("#scoreEtatParo").text("Score calculé en fonction du statut parodontal (sain/traité/pathologique) et du type ou stade de la maladie parodontale.");
	$("#tabaccoMethodeCalul").text("Tabacomanie");
	$("#scoreCig").text("Score mesuré en cigarettes par jour.");
	$("#statutGlyc").text("Statut glycémique ");
	$("#scoreHemo").text("Score mesuré en pourcentage d’hémoglobine glyquée A1c (HbA1c). ");
	
	// SYSTEME DE CODAGE
	$("#titreTabSystmCodage").text("Système de codage pour le saignement/suppuration au sondage, la profondeur de poche, la perte osseuse et l'hygiène");
	$("#tabScore1").text("Score");
	$("#tabFacesSaign").text("Faces avec saignement et/ou suppuration au sondage");
	$("#tabProfPoche").text("Profondeur de poche au sondage sur au moins 2 faces de l'implant (mm)");
	$("#tabPertOss").text("Perte osseuse rapportée à la longueur de l'implant (%) ");
	
	$("#titreTab2").text("Système de codage pour les parodontopathies, le statut glycémique, la tabacomanie et l'hygiène orale");
	$("#tabScore2").text("Score");
	$("#etatParoTab2").text("\311tat parodontal");
	$("#tauxDiabeteTab2").text("Taux d'HbA1c (%)");
	$("#tabacoTab2").text("Tabacomanie (cigarettes/jour)");
	$("#facesPlaqueTab2").text("Nombre de faces avec présence de plaque");
	$("#parodonteSainTab2").text("Parodonte sain");
	$("#nonFumeurTab2").text("Non-fumeur");
	$("#parodonteTraiteTab2").text("Parodontite traitée");
	$("#ancienFumeurTab2").text("Ancien fumeur");
	$("#parodontiteChrDebTab2").text("Parodontite chronique débutante");
	$("#parodontiteChrModTab2").text("Parodontite chronique modérée");
	$("#parodontiteChrSevTab2").text("Parodontite chronique sévère");
	$("#parodontiteAgrTab2").text("Parodontite agressive");
	$("#pasAccHygieneTab2").text("Pas d'accessibilité à l'hygiène");
	
	$("#titreTab3").text("Système de codage pour les excès de ciment en fonction du type d'assemblage et de l'enfouissement de la limite cervicale ");
	$("#tabScore3").text("Score");
	$("#etatParoTab3").text("État parodontal");
	$("#protheseTransvisseeTab3").text("Prothèse transvissée");
	$("#protheseScelleeSupraTab3").text("Prothèse scellée avec limite cervicale supra-gingivale");
	$("#protheseScelleeJuxtaTab3").text("Prothèse scellée avec limite cervicale juxta-gingivale");
	$("#protheseScelleeEnfouiss1Tab3").text("Prothèse scellée avec enfouissement < 1 mm");
	$("#protheseScelleeEnfouiss12Tab3").text("Prothèse scellée avec enfouissement de 1 à 2 mm");
	$("#protheseScelleeEnfouiss2Tab3").text("Prothèse scellée avec enfouissement > 2 mm");
	
	//~ A PROPOS
	$("#aProposObj").text("Objectifs");
	$("#aproposObjContent").text("Cette étude a été menée dans le but de créer un outil diagnostic permettant une évaluation du risque d’évolution des péri-implantites en fonction de leur sévérité, et de valider cet outil en tant que nouveau modèle d’évaluation des risques de péri-implantite. ");
	$("#aProposMat").text("Matériels et méthodes");
	$("#aProposMatContent").text("Vingt-huit patients diagnostiqués avec une péri-implantite sur au moins un implant ont été inclus dans l’étude de façon aléatoire dans le service d’odontologie de l’hôpital de la Timone à Marseille (France). Les participants ont rempli un questionnaire et subi un examen clinique approfondi, une radiographie intra-orale rétro-alvéolaire systématique du (des) implant(s) incriminé(s) ainsi qu’une radiographie 3D. Les critères suivants ont été enregistrés : le nombre de faces implantaires présentant un saignement et/ou une suppuration au sondage, la profondeur de poche au sondage sur au moins deux faces de l’implant, la perte osseuse rapportée à la longueur de l’implant évaluée sur les radiographies, le nombre de faces implantaires présentant de la plaque, les paramètres requis pour la détermination des excès de ciment (prothèse vissée ou scellée, enfouissement des prothèses scellées), les statuts parodontal, glycémique et la tabacomanie. Par l’intermédiaire de Microsoft Excel®, chacun de ces paramètres a été reporté sur un diagramme en radar.");
	$("#aProposRes").text("Résultats");
	$("#aProposResContent").text("Dans le modèle d’évaluation proposé, 57,1% des cas ont été identifiés à haut risque péri-implantaire contre seulement 7,2% des cas, à faible risque. Les 35,7% restants correspondent aux patients à risque péri-implantaire modéré.");
	$("#aProposCcl").text("Conclusion");
	$("#aProposCclContent").text("Les résultats observés appliqués au modèle d’évaluation proposé constituent un outil diagnostic valide dans l’évaluation du risque péri-implantaire. L’utilisation systématique de cet outil permet un dépistage et une prise en charge précoce de la péri-implantite pour l’amélioration du traitement.");	
	$("#eraseButtonDiagram").val("Effacer");
}
function chargerLabelsEN(){
		//~ TITRE
	$("#titlePage").text("Peri-implantitis risk assessment  : diagnostic tool");
	$("#titreHeader").text("Peri-implantitis risk assessment"); 
	$("#sousTitreHeader").text("Diagnostic tool"); 
	$("#labelOutilDiag").text("Diagnostic tool"); 
	//~ MENU
	$("#labelSystCodage").text("Coding system"); 
	$("#labelAPropos").text("About"); 
	$("#labelLanguage").text("Language"); 
	//~ IDENTITE DU PATIENT
	$("#headerIdentity").text("Patient’s identity"); 
	$("#labelNameClient").text("Patient last name"); 
	$("#labelSurnameClient").text("Patient first name"); 
	$("#labelSexe").text("Sex of the patient"); 
	$("#textDropdownMenuHF").text("Gender"); 
	$("#homme").text("Male"); 
	$("#femme").text("Female"); 
	$("#ageClient").text("Age"); 
	$("#labelDateConsultation").text("Consultation date"); 
	$("#identityEraseButton").val("Reset"); 
	// DIAGRAMME D'EVAUATION
	$("#headerDiagram").text("Evaluation diagram"); 
	$("#labelFaces").text("Number of implant faces with bleeding and/or suppuration on probing"); 
	$("#labelProfondeur").text("Pocket depth on at least two implant faces (mm)");
	$("#labelPerte").text("Bone loss related to the implant length (%)");
	
	$("#labelAssemblage").text("Assembly means and cervical margin position");
	$("#protheseTrans0").text("Screw-retained prosthesis");
	$("#prothesesCelSup1").text("Cemented prosthesis with supragingival cervical margin");
	$("#protheseCelJux2").text("Cemented prosthesis with juxtagingival cervical margin");
	$("#protheseEnf13").text("Cemented prothesis with intra-sulcus margin < 1 mm");
	$("#protheseEnf124").text("Cemented prothesis with intra-sulcus margin of 1 to 2 mm");
	$("#protheseEnf25").text("Cemented prosthesis with intra-sulcus margin > 2 mm");
	
	$("#labelFacesPlaque").text("Number of implant faces with presence of plaque");
	$("#sanitaryNoAccess5").text("No accessibility to oral hygiene");
	
	$("#labelEtatParodontal").text("Periodontal status");
	$("#parondonteSain0").text("Healthy periodontium");
	$("#parondonteTraité1").text("Treated periodontitis");
	$("#parondonteChroDeb2").text("Slight chronic periodontitis");
	$("#parondonteChroMod3").text("Moderate chronic periodontitis");
	$("#parondonteChroSev4").text("Severe chronic periodontitis");
	$("#parondonteAggre5").text("Agressive periodontitis");
	
	$("#labelTabac").text("Smoking (cigarettes/day)");
	$("#smoker0").text("Non-smoker");
	$("#formerSmoker1").text("Former-smoker");
	
	$("#labelDiabete").text("HbA1c level (%)");
	$("#risquePeri").text("Peri-implantitis risk:");
	$("#printBtn").val("Save/Print");
	
	// METHODE DE CALCUL
	$("#headerCalcul").text("Calculation method");
	$("#saignSupp").text("Bleeding and/or pus on probing");
	$("#sondClin").text("Light probing realized on the six sides of the implant: mesio-vestibular, vestibular, disto-vestibular, mesio-lingual/mesio-palatal, lingual/palatal, disto-lingual/disto-palatal, measured after 15 seconds and expressed in number of affected implant faces (0 to 6).");
	$("#sondClinSondeParo").text("Light probing (0.25 N) applied using a graduated periodontal probe on at least two faces of the implant and expressed in millimeters.");
	$("#profPoche").text("Pocket depth");
	$("#perteOss").text("Bone loss");
	$("#radioIntra").text("Evaluated from retro alveolar intraoral radiography (assessment of the mesial and distal crater). Expressed as a percentage of bone resorption relative to the length of the implant.");
	$("#exCiment").text("Excessive cement");
	$("#correlationEnfouissementLimiteCerv").text("The exact amount of residual cement is impossible to measure accurately, therefore the correlation between burying the cervical boundary of a sealed crown and the amount of residual cement is used. The following parameters have been chosen: the determination of the implant abutment / prosthesis assembly means (screwed prosthesis or a sealed prosthesis); in the case of a sealed prosthesis, the measurement of the relative position of the cervical limit with respect to the marginal gingiva (mm).");
	$("#hygieneOrale").text("Oral hygiene");
	$("#presenceAbsencePlaque").text("Presence or absence of subgingival plaque on the 4 faces of the implant: mesial, distal, vestibular and palatal or lingual. Expressed in number of implant surfaces affected (0 to 4); for implant-supported prostheses (Brånemark prostheses, implant-supported bridges), a further assessment of the accessibility to hygiene is proposed (yes/no): “yes” if the patient can brush in the implanted region using a toothbrush, little brush or dental floss, “no” in case of limited access (linked to the emergence profile in particular) and / or disability of the patient.");
	$("#etatParo").text("Periodontal status");
	$("#scoreEtatParo").text("Score calculated according to the periodontal status (healthy/treated/pathological) and the type or stage of the periodontal disease.");
	$("#tabaccoMethodeCalul").text("Tobacco smoking");
	$("#scoreCig").text("Score measured in cigarettes per day.");
	$("#statutGlyc").text("Glycemic status");
	$("#scoreHemo").text("Score measured in percentage of glycated hemoglobin A1c (HbA1c).");
	
	// SYSTEME DE CODAGE
	$("#titreTabSystmCodage").text("Coding system for bleeding on probing/presence of pus, probing depth and bone loss");
	$("#tabScore1").text("Axis score");
	$("#tabFacesSaign").text("Faces with bleeding on probing/presence of pus");
	$("#tabProfPoche").text("Probing depth on at least 2 implant faces (mm)");
	$("#tabPertOss").text("Bone loss related to the implant length (%)");
	
	$("#titreTab2").text("Coding system for periodontal diseases, glycemic status, smoking and oral hygiene");
	$("#tabScore2").text("Axis score");
	$("#etatParoTab2").text("Periodontal status");
	$("#tauxDiabeteTab2").text("HbA1c level (%)");
	$("#tabacoTab2").text("Smoking (cigarettes/day)");
	$("#facesPlaqueTab2").text("No. of implant faces with presence of plaque");
	$("#parodonteSainTab2").text("Healthy periodontium");
	$("#nonFumeurTab2").text("Non-smoker");
	$("#parodonteTraiteTab2").text("Treated periodontitis");
	$("#ancienFumeurTab2").text("Former-smoker");
	$("#parodontiteChrDebTab2").text("Slight chronic periodontitis");
	$("#parodontiteChrModTab2").text("Moderate chronic periodontitis");
	$("#parodontiteChrSevTab2").text("Severe chronic periodontitis");
	$("#parodontiteAgrTab2").text("Aggressive periodontitis");
	$("#pasAccHygieneTab2").text("No accessibility to oral hygiene");
	
	$("#titreTab3").text("Coding system for excessive cement according to assembly means and cervical margins position");
	$("#tabScore3").text("Axis score");
	$("#etatParoTab3").text("Periodontal status");
	$("#protheseTransvisseeTab3").text("Screw-retained prosthesis");
	$("#protheseScelleeSupraTab3").text("Cemented prosthesis with supragingival cervical margin");
	$("#protheseScelleeJuxtaTab3").text("Cemented prosthesis with juxtagingival cervical margin");
	$("#protheseScelleeEnfouiss1Tab3").text("Cemented prosthesis with intra-sulcus margin < 1 mm");
	$("#protheseScelleeEnfouiss12Tab3").text("Cemented prosthesis with intra-sulcus margin of 1 to 2 mm");
	$("#protheseScelleeEnfouiss2Tab3").text("Cemented prosthesis with intra-sulcus margin > 2 mm");
	
	//~ A PROPOS
	$("#aProposObj").text("Purpose");
	$("#aproposObjContent").text("This study was carried out with the aim to create a score allowing an evaluation of the risk of peri-implantitis evolution according to its severity and to validate this tool as a new model for peri-implantitis.");
	$("#aProposMat").text("Materials et methods");
	$("#aProposMatContent").text("Forty-three patients, 28 of whom were diagnosed with peri-implantitis on at least one implant and 15 patients with implant therapy, were included prospectively in the study in the odontology department of “La Timone” Hospital at Marseille (France). Participants filled in a questionnaire and underwent a thorough clinical examination, a systematic retro-alveolar intra-oral radiography of the implant(s) and a 3D radiography. The following criteria were recorded: the number of implant faces showing bleeding and / or borehole suppuration, the pocket depth on at least two faces of the implant, bone loss as a function of the length of the implant evaluated on X-rays, the number of implant faces with plaque, the parameters required for the determination of excess cement (screwed or sealed prosthesis, burial of sealed prostheses), periodontal status, glycaemia and annual consumption of tobacco. Through Microsoft Excel®, each of these parameters was plotted on a radar chart. Results: In the proposed evaluation model, 16/28 (57.1%) of cases were identified with high peri-implantitis risk compared to only 2/28 (7.2%) of cases with low risk. The remaining 10/28 (35.7%) correspond to patients with moderate peri-implantitis risk. All patients without peri-implantitis 15/15 (100%) were considered at low risk.");
	$("#aProposRes").text("Results");
	$("#aProposResContent").text("In the proposed evaluation model, 16/28 (57.1%) of cases were identified with high peri-implantitis risk compared to only 2/28 (7.2%) of cases with low risk. The remaining 10/28 (35.7%) correspond to patients with moderate peri-implantitis risk. All patients without peri-implantitis 15/15 (100%) were considered at low risk.");
	$("#aProposCcl").text("Conclusions");
	$("#aProposCclContent").text("The observed results applied to the proposed evaluation model, constitute an effective diagnostic tool in the peri-implantitis risk assessment. The systematic use of this tool allows an early detection and management of peri-implantitis to improve treatment.");
	$("#eraseButtonDiagram").val("Reset");
}



