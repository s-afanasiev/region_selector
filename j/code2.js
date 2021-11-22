function app(){
	//const arr2d = get_arr2d();
	//const canvas = new Canvas("second_canvas").run();
	//canvas.draw_grid_by_arr(arr2d);
	new App(
		new Iface([
			new LoadImgAction()
		]),
		new Field(
			new ImageCanvas(
				new LoadedImage()
			),
			new Layers(
				new Layer(
					new Canvas()
				),
				new SavedMatrix("./arr.json").testmode()
			),
			new SelectedLayer()
		)
	).run("main_div");
	//canvas.draw_layers(oLayers);
}

function App(iface, field, selectedLayer){
	this.run=(main_div_id)=>{
		iface.place(main_div_id).run(field.place(main_div_id).run())
	}
}

function Iface(actions){
	this.inited=false;
	this.dom;
	const ID = "iface";
	this.init=()=>{
		
		if(!this.inited){
			this.inited = true;
			this.dom = document.createElement("div");
			this.dom.id = ID;
			//this.dom.innerHTML = "<h3>Iface</h3>";
			this.dom.style.height = '50px';
			//this.dom.style.width = '200px';
			this.dom.style.border = '1px solid green';
			this.dom.style.background = '#fee';
		}
	}
	this.place=(main_div_id)=>{
		this.init();
		//@attach Interface on parent div
		var parentDiv = document.getElementById(main_div_id);
		parentDiv.appendChild(this.dom);
		return this;
	}
	this.run=(field)=>{
		actions.forEach(act=>{
			//@ element of interface place himself on Iface panel
			act.place(this.dom).run(field);
		})
	}
}

function LoadImgAction(){
	this.inited=false;
	this.dom;
	this.init=()=>{
		if(!this.inited){
			this.inited = true;
			this.dom = document.createElement("div");
			//this.dom.innerHTML = "<h3>Iface</h3>";
			this.dom.style.height = '40px';
			this.dom.style.width = '400px';
			this.dom.style.border = '1px solid red';
			this.dom.style.background = '#eee';
			//@------------
			const imglinkInput = document.createElement("input");
			imglinkInput.type="text";
			imglinkInput.size="20";
			imglinkInput.value="Image link";
			this.dom.append(imglinkInput);
			//@------------
			const spanSize = document.createElement("span");
			spanSize.textContent = "Size:"
			this.dom.append(spanSize);
			//@------------
			const wInput = document.createElement("input");
			wInput.type="text";
			wInput.size="2";
			wInput.value=3840;
			this.dom.append(wInput);
			//@------------
			const spanX = document.createElement("span");
			spanX.textContent = "X"
			this.dom.append(spanX);
			//@------------
			const hInput = document.createElement("input");
			hInput.type="text";
			hInput.size="2";
			hInput.value=2160;
			this.dom.append(hInput);
			//@---------------
			//<input id = "loadimg_btn" type = "button" value = "Load image"/>
		}
	}
	this.place=(parentDiv)=>{
		this.init()
		//document.getElementById(parent_div_id).appendChild(this.dom)
		parentDiv.appendChild(this.dom);
		return this;
	}
	this.run=(field)=>{}
}

function SelectedLayer(){
	this.run=()=>{}
}

function Field(imageCanvas, layers, selectedLayer){
	this.inited = false;
	this.init=()=>{
		if(!this.inited){
			this.inited = true;
			this.dom = document.createElement("div");
			this.dom.innerHTML = "<h4>Field</h4>";
			this.dom.setAttribute('height', '50px');
			this.dom.setAttribute('width', '50px');
			this.dom.setAttribute('background', '#300');
		}
	}
	this.place=(main_div_id)=>{
		//@attach Interface on parent div
		this.init();
		var parentDiv = document.getElementById(main_div_id);
		parentDiv.appendChild(this.dom);
		return this;
	}
	this.run=(field)=>{}
}

function ImageCanvas(loadedImage){
	this.run=()=>{}
}

function LoadedImage(){
	this.run=()=>{}
}

function draw_button_visibility_layer1(oCanvas){
	const input = document.createElement("input");
	input.value = "visibility";
	input.type = "button";
	const selected = document.createElement("select");
	for (var i = 1; i <= 3; i++) {
		var opt = document.createElement("option");
		opt.value = i;
		opt.innerHTML = "layer " + i;
		selected.appendChild(opt);
	}
	//selected.onchange='alert("hi")'
	selected.addEventListener('change', function(evt){
		Object.keys(selected.options).forEach(key=>{
			if(selected.options[key].selected == true){
				console.log("layer selected:", Number(key)+1)
			}
		})
	})
	input.addEventListener('click', function(){
		oCanvas.change_visibility();
	}, false);
	const div = document.createElement("div");
	div.id="visibility_btn";
	div.width=200;
	div.height=50;
	div.style.border="1px solid";
	div.style.position="relative";
	div.append(input);
	div.append(selected);
	document.body.append(div)
}

function SavedMatrix(path){
	this.path = path;
	this.arr;
	this.matrix=()=>{return JSON.parse(JSON.stringify(this.arr))};
	this.max_number=0;
	this.pointer=0;
	this.is_test_mode=false;
	this.instance=(path)=>{return new SavedMatrix(path)}
	this.number=()=>{return this.pointer}
	this.next=()=>{
		console.log("SavedMatrix.next():", this.pointer, this.max_number);
		if(this.pointer<this.max_number){
			this.pointer++;
			return true;
		}
	}
	this.testmode=()=>{
		this.is_test_mode = true;
		this.arr=[
			[1,1,1,0,0, 0,0,0,2,2],
			[1,0,0,1,0, 0,0,2,0,0],
			[1,0,0,0,1, 1,0,2,0,0],
			[1,0,1,0,0, 0,0,2,0,0],
			[1,1,1,0,3, 3,0,2,2,2]
		]
		return this;
	}
	this.run=()=>{
		if(!this.is_test_mode){
			const fs = require('fs');
			try{
				this.arr = JSON.parse(fs.readFileSync(this.path, "utf8"));
			}catch(err){console.error("savedMatrix Error: wrong path:", this.path)}
		}
		if(this.arr){
			this.max_number = this.max_layers_by_arr2d(this.arr);
			console.log("SavedMatrix.run(): max_number=", this.max_number);
		}
	}
	this.max_layers_by_arr2d=(arr2d)=>{
		let max = 0;
		arr2d.forEach(line=>{
			line.forEach(el=>{
				if(el>max){max = el;}
			})
		})
		return max;
	}
}

function Layers(oLayer, savedMatrix){
	this.oLayer = oLayer;
	this.layers = [];
	//this.layer_pointer=0;
	this.layer_counter=1;
	this.max_layers;//run
	this.curLayer;
	this.mainDiv;//run
	this.run=(main_div_id)=>{
		savedMatrix.run();
		this.max_layers = savedMatrix.max_number;
		this.mainDiv = document.getElementById(main_div_id);
		while(savedMatrix.next()){
			this.add(savedMatrix.number(), savedMatrix.matrix())
		}
		return this;
	}
	this.currentLayer=()=>{return this.curLayer}
	this.layers=()=>{return this.layers}
	this.add=(ord_number, matrix)=>{
		this.layers[ord_number] = this.oLayer.instance(ord_number, matrix, this.mainDiv).run();
	}
	this.next=()=>{
		console.log("Layers.next():", this.layer_counter, this.max_layers);
		if(this.layer_counter<=this.max_layers){
			this.curLayer = this.layers[this.layer_counter++];
			return true;
		}
	}	
	this.prepare_all_layers=()=>{}
	this.max_layers_by_arr2d=(arr2d)=>{
		const max = 0;
		arr2d.forEach(line=>{
			line.forEach(el=>{
				if(el>max){max = el;}
			})
		})
		return max;
	}
}

function Layer(oCanvas, ord_number, matrix, mainDiv){
	this.oCanvas = oCanvas;
	this._matrix = matrix;
	this._ord_number = ord_number;
	this.data=(what)=>{
		if(what=="matrix"){ return this._matrix;}
		else if(what=="ord_number"){ return this._ord_number;}
		else{console.error("Layer.data() Error: unknown data:". what)}
	}
	this.instance=(ord_number, matrix, mainDiv)=>{
		console.log("Layer.instance()", ord_number)
		return new Layer(this.oCanvas.instance(ord_number), ord_number, matrix, mainDiv);
	}
	this.run=()=>{
		console.log("Layer.run()", this._ord_number)
		this.oCanvas.create().append(mainDiv).draw(matrix);
		return this;
	}
}

function Canvas(ord_number){
	this.ord_number = ord_number;
	this.matrix;//draw
	this._canvas;
	this.dx=0;
	this.dy=0;
	this.square_size=20;
	this.ctx;//create
	this.instance=(ord_number)=>{return new Canvas(ord_number)}
	this.change_visibility=()=>{
		if(this._canvas.style.visibility=='visible'){
			this._canvas.style.visibility='hidden';
		}else{
			this._canvas.style.visibility='visible';
		}
		//this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); 
		//this.draw_grid_by_arr(this.matrix, this.ord_number)
	}
	this.draw=(matrix)=>{
		this.matrix = matrix;
		console.log("Canvas"+ord_number+": draw(): ctx=", this.ctx)
		//this.ctx.fillStyle="rgba(255,50,50,0.2)";
		if(ord_number==1){
			this.ctx.strokeStyle='blue';
			this.ctx.fillStyle="rgba(0,0,255,0.2)";
			draw_button_visibility_layer1(this);
		}
		if(ord_number==2){
			this.ctx.strokeStyle='red';
			this.ctx.fillStyle="rgba(255,0,0,0.2)";
		}
		//this.ctx.fillStyle="rgb(255,0,0)";
		//const random = Math.floor(Math.random() * 100) + 100
		//this.ctx.fillRect(random,random,random+200,random+200);
		this.draw_grid_by_arr(matrix, ord_number)
	}
	this.append=(mainDiv)=>{
		mainDiv.append(this._canvas);
		return this;
	}
	this.create=()=>{
		console.log("Canvas"+ord_number+": create()")
		this._canvas = document.createElement("canvas");
		this._canvas.id = "layer"+ord_number;
		this._canvas.width = 800;
		this._canvas.height = 800;
		this._canvas.style.zIndex = ord_number;
		this._canvas.style.position = "absolute";
		this._canvas.style.border = "1px solid blue";
		this._canvas.style.visibility='visible';
		this.ctx = this._canvas.getContext("2d");
		return this;
	}
	this.run=()=>{
		console.log("Canvas"+ord_number+": run()")
		this._canvas = $('#'+ord_number)[0].getContext('2d');
		return this;
	}
	this.draw_grid_by_arr=(arr2d, ord_number)=>{
		console.log("Canvas.draw_grid_by_arr(): arr2d=", arr2d)
		//this._canvas.clearRect(0, 0, 5000, 5000); 
		//this._canvas.strokeStyle = "rgba(100,100,200,0.5)";
		for(let i=0; i<arr2d.length; i++){
			//console.log("i=", i)
			if(i>0){this.dy+=this.square_size}
			for(let j=0; j<arr2d[i].length; j++){
				if(j==0){this.dx = 0}
				else if(j>0){this.dx+=this.square_size}
				if(arr2d[i][j] === ord_number){
					console.log("!")
					this.ctx.strokeRect(this.dx,this.dy,this.square_size,this.square_size)
					this.ctx.fillRect(this.dx,this.dy,this.square_size,this.square_size)
				}
			}
		}
	}
	this.draw_layers=(oLayers)=>{
		console.log("Canvas.draw_layers()...")
		
		while(oLayers.next()){
			const curLayer = oLayers.currentLayer();
			this.draw_grid_by_arr(curLayer.data("matrix"), curLayer.data("ord_number"))
		}
		
	}
}
