var entities = [];
var settings = {
	aCode : 97,
	arrangement : 'rect', //grid', //'rect'
	sortLetters : true,
	delay : 250,
	duration : 500,
	layers : 1,
  	showControls : true
	// size : 2
};

$(document).ready(function(){
	generateEntities(settings.layers);
	showEntity(Math.floor(Math.random()*26));
});

$(document).on('click',_.debounce(function(){
	showEntity(Math.floor(Math.random()*26));
},100));

function generateEntities(layers) {
	for (var l=0; l<layers; l++) {
		var pos = {
			x : 0,
			z : 0
		};
		for (var i=0; i<26; i++) {
			var letter = String.fromCharCode(settings.aCode+i);
			var entitySettings = {
				id:letter,
				displayed:false,
				order:i,
				layer:l,
				delay:(i+1)*settings.delay,
				visible: true,
				pos : {
					x : -4 + pos.x, //-10 + pos.x*size,
					y : 20+l,
          			z : -pos.z
					//z : -4 + pos.z //-10 + pos.z*size
				},
				tpos : {
					x : -4 + pos.x,//-10 + pos.x*size,
					y : 0.5 + l,
          			z : -pos.z
					//z : -4 + pos.z//-10 + pos.z*size
				}
			};
			//
			entities.push(entitySettings);
			generateEntity(entitySettings);
			//
			pos.x++;
			if (pos.x > 6) {
				pos.x = 0;
				pos.z++;
			}
		}
	}
};

function generateEntity(es) {
	var faces = [
		{ id : 0, img : '', r : { x : 0, y : 0 }, p : { y : 0, x : 0, z : 0 } }, //front
		{ id : 1, img : '', r : { x : 0, y : 90 }, p : { y : 0, x : 0.5, z : -0.5 } }, //right
		{ id : 2, img : '', r : { x : 0, y : -90 }, p : { y : 0, x : -0.5, z : -0.5 } }, //left
		{ id : 3, img : '', r : { x : 0, y : 180 }, p : { y : 0, x : 0, z : -1 } }, //back
		{ id : 4, img : '', r : { x : 90, y : 0 }, p : { y : -0.5, x : 0, z : -0.5 } }, //bottom
		{ id : 5, img : '', r : { x : -90, y : 0 }, p : { y : 0.5, x : 0, z : -0.5 } } //top
	];
	var entity = '';
	var entityStart = '<a-entity id="be-'+es.id+'-'+es.layer+'" position="'+es.pos.x+' '+es.pos.y+' '+es.pos.z+'">'; // position="0 0 0" rotation="0 0 0"	
	entity += entityStart;
	_.forEach(faces,function (f){
		var img = es.id + f.img;
		entity += '<a-image src=assets/'+img+'.png rotation="'+f.r.x+' '+f.r.y+' 0" position="'+f.p.x+' '+f.p.y+' '+f.p.z+'" width="1" height="1"></a-image>';
	});
	var entityEnd = '</a-entity>';
	entity += entityEnd;
	$('#scene').append(entity);
};

function showEntity() {
	var es = entities[Math.floor(Math.random()*26)];
	es.delay = 0;
	es.displayed = true;
	$('#be-'+es.id+'-'+es.layer+' a-animation').remove();
	$('#be-'+es.id+'-'+es.layer).append('<a-animation attribute="position" from="'+es.pos.x+' '+es.pos.y+' '+es.pos.z+'" to="'+es.tpos.x+' '+es.tpos.y+' '+es.tpos.z+'" begin="'+es.delay+'" dur="'+settings.duration+'"></a-animation>');
};