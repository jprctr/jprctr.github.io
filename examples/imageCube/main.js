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

function formatPresets(initData) {
    var formatedData = [];
    _.forEach(initData,function (d,i){
        var newObj = {
            id : d.ID,
            name : d['Display Name'],
            price : d.Price,
            category : d.Category,
            contents : []
        };
        delete d.ID;
        delete d['Display Name'];
        delete d.Package;
        delete d.Price;
        delete d.Category;
        _.forEach(d,function (v,k){
            newObj.contents.push({
                letter: k.toLowerCase(),
                count: v,
                show: !_.isEqual(v,0)
            });
        });
        formatedData.push(newObj);
    });
    return formatedData;
};
/*
a, b, c, e, f, h, o
*/
var initPresets = [{"ID":1,"Display Name":"TBD ","Price":"$750","Category":"","A":1,"B":1,"C":0,"D":0,"E":0,"F":1,"G":0,"H":1,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":1,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":2,"Display Name":"TBD ","Price":"$1,000","Category":"","A":1,"B":1,"C":1,"D":0,"E":1,"F":1,"G":0,"H":1,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":1,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":3,"Display Name":"TBD","Price":"$1,500","Category":"","A":1,"B":1,"C":1,"D":0,"E":1,"F":1,"G":0,"H":1,"I":1,"J":1,"K":1,"L":0,"M":0,"N":0,"O":1,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":4,"Display Name":"Preliminary ","Price":"$2,750","Category":"","A":1,"B":1,"C":1,"D":0,"E":1,"F":1,"G":0,"H":1,"I":1,"J":2,"K":1,"L":1,"M":1,"N":1,"O":1,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":5,"Display Name":"International Level 1 ","Price":"$7,500","Category":"","A":0,"B":2,"C":2,"D":0,"E":1,"F":2,"G":0,"H":2,"I":0,"J":0,"K":0,"L":0,"M":0,"N":1,"O":1,"P":0,"Q":0,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":6,"Display Name":"Level 1 Pre-hire ","Price":"$4,500","Category":"Pre-Hire","A":1,"B":2,"C":2,"D":0,"E":1,"F":2,"G":0,"H":2,"I":1,"J":2,"K":1,"L":1,"M":1,"N":1,"O":1,"P":0,"Q":0,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":7,"Display Name":"Level 1 Pre-deal","Price":"$4,500","Category":"Pre-Deal","A":1,"B":2,"C":2,"D":0,"E":1,"F":2,"G":0,"H":2,"I":1,"J":2,"K":1,"L":1,"M":1,"N":1,"O":1,"P":0,"Q":0,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":8,"Display Name":"Level 2 pre-hire ","Price":"$6,500","Category":"Pre-Hire","A":1,"B":3,"C":3,"D":0,"E":1,"F":3,"G":0,"H":3,"I":1,"J":3,"K":1,"L":1,"M":1,"N":2,"O":1,"P":0,"Q":1,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":9,"Display Name":"Level 2 pre-deal ","Price":"$6,500","Category":"Pre-Deal","A":1,"B":3,"C":3,"D":0,"E":1,"F":3,"G":0,"H":3,"I":1,"J":3,"K":1,"L":1,"M":1,"N":2,"O":1,"P":0,"Q":1,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":10,"Display Name":"IPO","Price":"$5,000","Category":"Pre-Deal","A":1,"B":3,"C":3,"D":0,"E":1,"F":3,"G":0,"H":3,"I":1,"J":3,"K":1,"L":1,"M":1,"N":2,"O":1,"P":0,"Q":1,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":11,"Display Name":"Litigation Background","Price":"$7,500","Category":"Dispute","A":1,"B":4,"C":4,"D":0,"E":1,"F":4,"G":0,"H":4,"I":1,"J":4,"K":1,"L":1,"M":1,"N":3,"O":1,"P":1,"Q":2,"R":1,"S":1,"T":1,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":12,"Display Name":"Asset Searches","Price":"$7,500","Category":"","A":1,"B":4,"C":4,"D":0,"E":1,"F":4,"G":0,"H":4,"I":1,"J":4,"K":1,"L":1,"M":1,"N":3,"O":1,"P":1,"Q":1,"R":1,"S":1,"T":1,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":13,"Display Name":"Level 3 pre-hire ","Price":"$8,500","Category":"Pre-Hire","A":1,"B":4,"C":4,"D":0,"E":1,"F":4,"G":0,"H":4,"I":1,"J":4,"K":1,"L":1,"M":1,"N":3,"O":1,"P":1,"Q":1,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":1,"Y":0,"Z":0},
{"ID":14,"Display Name":"Level 3 pre-deal ","Price":"$8,500","Category":"Pre-Deal","A":1,"B":4,"C":4,"D":0,"E":1,"F":4,"G":0,"H":4,"I":1,"J":4,"K":1,"L":1,"M":1,"N":3,"O":1,"P":1,"Q":1,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":1,"Y":0,"Z":0},
{"ID":15,"Display Name":"Proxy ","Price":"$12,000","Category":"Pre-Deal","A":1,"B":4,"C":4,"D":0,"E":1,"F":4,"G":0,"H":4,"I":1,"J":4,"K":1,"L":1,"M":1,"N":3,"O":1,"P":1,"Q":2,"R":1,"S":1,"T":1,"U":1,"V":0,"W":0,"X":1,"Y":0,"Z":0},
{"ID":16,"Display Name":"International Level 2 ","Price":"$15,000","Category":"Dispute","A":0,"B":4,"C":4,"D":0,"E":1,"F":4,"G":0,"H":4,"I":0,"J":0,"K":0,"L":0,"M":0,"N":3,"O":1,"P":0,"Q":0,"R":1,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":1,"Z":0},
{"ID":18,"Display Name":"Level A ","Price":"$500","Category":"","A":1,"B":1,"C":0,"D":0,"E":0,"F":0,"G":0,"H":1,"I":1,"J":1,"K":0,"L":0,"M":0,"N":1,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":19,"Display Name":"Level B ","Price":"$1,250","Category":"","A":1,"B":2,"C":1,"D":1,"E":0,"F":0,"G":0,"H":2,"I":1,"J":2,"K":1,"L":1,"M":1,"N":2,"O":1,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":20,"Display Name":"Level C ","Price":"$2,500","Category":"","A":1,"B":3,"C":2,"D":2,"E":0,"F":1,"G":0,"H":2,"I":2,"J":3,"K":2,"L":2,"M":2,"N":3,"O":1,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":21,"Display Name":"Education Verification","Price":"$15","Category":"GV","A":0,"B":0,"C":0,"D":0,"E":0,"F":0,"G":0,"H":0,"I":1,"J":0,"K":0,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":22,"Display Name":"License Verification","Price":"$15","Category":"GV","A":0,"B":0,"C":0,"D":0,"E":0,"F":0,"G":0,"H":0,"I":0,"J":0,"K":1,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":23,"Display Name":"Adverse Media Check","Price":"$250","Category":"GV","A":0,"B":0,"C":0,"D":0,"E":0,"F":1,"G":0,"H":0,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":24,"Display Name":"Social Media Check","Price":"$175","Category":"GV","A":0,"B":0,"C":0,"D":0,"E":0,"F":0,"G":0,"H":1,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0},
{"ID":25,"Display Name":"Web Check","Price":"$125","Category":"GV","A":0,"B":0,"C":0,"D":0,"E":0,"F":0,"G":1,"H":0,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0}];

var presets = formatPresets(initPresets);

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

function getHighestLayer(id) {
	var displayedEntities = _.where(entities,{displayed:true});
	if (_.isEmpty(displayedEntities)) {
		return -1;
	} else {
		var matchedDisplayedEntities = _.where(displayedEntities,{id:id});
		if (_.isEmpty(matchedDisplayedEntities)) {
			return -1;
		} else {
			var maxLayer = _.max(_.pluck(matchedDisplayedEntities,'layer'));
			if (maxLayer <= settings.layers) {
				return maxLayer;
			} else {
				return null;
			}
		}
	}
};

// function showEntity(id) {
function showEntity() {
	// var highestLayer = getHighestLayer(id);
	// if (!_.isNull(highestLayer)&&highestLayer<settings.layers-1) {
		// var es = _.first(_.where(_.where(entities,{id:id}),{layer:highestLayer+1}));
		// console.log(entities);
		// var es = _.first(_.where(entities,{id:id}));
		var es = entities[Math.floor(Math.random()*26)];
		es.delay = 0;
		es.displayed = true;
		$('#be-'+es.id+'-'+es.layer+' a-animation').remove();
		// $('#be-'+es.id+'-'+es.layer).append('<a-animation attribute="position" from="'+es.pos.x+' '+es.pos.y+' '+es.pos.z+'" to="'+es.tpos.x+' '+es.tpos.y+' '+es.tpos.z+'" begin="'+es.delay+'" dur="'+settings.duration+'"></a-animation>');
		$('#be-'+es.id+'-'+es.layer).append('<a-animation attribute="position" from="'+es.pos.x+' '+es.pos.y+' '+es.pos.z+'" to="'+es.tpos.x+' '+es.tpos.y+' '+es.tpos.z+'" begin="'+es.delay+'" dur="'+settings.duration+'"></a-animation>');
	// }
};

function hideEntity(id) {
	var highestLayer = getHighestLayer(id);
	if (!_.isNull(highestLayer)&&highestLayer<settings.layers&&!_.isEqual(highestLayer,-1)) {
		var es = _.first(_.where(_.where(entities,{id:id}),{layer:highestLayer}));
		es.delay = 0;
		es.displayed = false;
		$('#be-'+es.id+'-'+es.layer+' a-animation').remove();
		$('#be-'+es.id+'-'+es.layer).append('<a-animation attribute="position" from="'+es.tpos.x+' '+es.tpos.y+' '+es.tpos.z+'" to="'+es.pos.x+' '+es.pos.y+' '+es.pos.z+'" begin="'+es.delay+'" dur="'+settings.duration+'"></a-animation>');
	}
};

function hideAll() {
  var visibleEntities = _.pluck(_.where(entities,{displayed:true}),'id');
  _.forEach(visibleEntities,function (e){
    hideEntity(e);
  });
};

function showAll() {
  hideAll();
  setTimeout(function(){
    var firstLayer = _.pluck(_.where(entities,{layer:0}),'id');
    _.forEach(firstLayer,function (f){
      showEntity(f);
    });
  },50);
};
