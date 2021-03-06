	var data = new Array();
	var points = new Array();
	var point_count = 0;
	var triangles = new Array();
	var triangle_count = 0;
	var squares = new Array();
	var zone = 1;
	var zone_max = 1;
	var canvas;
	var second_canvas;
	var finished_forming = true;
	var min_point_distance = 10;
	var min_square_size = 1;
	var max_square_size = 50;
	var pscroll_lopp_pointer = false;
	lmmk2_debug_on = 1;
	function lmmk2_debug(string_value, a){
		if(lmmk2_debug_on == 1){
			var debug_box = $('#lmmk2debug_box');
			if(debug_box.length > 0){
				var temp_string = string_value.toString();
				if(a != "a"){$('#lmmk2debug_box').empty();}else{$('#lmmk2debug_box').append("<br/>");}$('#lmmk2debug_box').append(temp_string);}
			else{
				$("body").append("<div id = 'lmmk2debug_box' style = 'background-color:rgba(255, 255, 255, 0.9); position:absolute; padding-right:3px; padding-left:3px; top:5px; left: 5px; border:1px solid #dddddd; font-family:arial; font-size:12px; color:#444444; '></div>");var temp_string = string_value.toString();if(a != "a"){$('#lmmk2debug_box').empty();}else{$('#lmmk2debug_box').append("<br/>");}$('#lmmk2debug_box').append(temp_string);			}
		}
	}
	
	function point_distance(x1, y1, x2, y2){
		return Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) );
	}
	
	function check_constructor_params(target_name, square_size, canvas_name, output_name, make_btn_name, zone_num_name, addzone_btn_name, reset_btn_name, img_src_name, img_W_name, img_H_name, img_load_name, sqsize_input_name, sqsize_btn_name, linecolor_input_name, linecolor_btn_name){
		var res = false;
		var target_found = false;
		if (typeof target_name !== 'undefined')
		{
			if (typeof window[target_name] !== 'undefined')
			{
				target_found = true;
			}
			else
			{
				alert("target_name does not point to object");
			}
		}
		else
		{
			alert("target_name is empty");
		}
		
		var canvas_found = false;
		if (typeof canvas_name !== 'undefined')
		{
			if (typeof window[canvas_name] !== 'undefined')
			{
				canvas_found = true;
			}
			else
			{
				alert("canvas_name does not point to object");
			}
		}
		else
		{
			alert("canvas_name is empty");
		}
		
		var output_found = false;
		if (typeof output_name !== 'undefined')
		{
			if (typeof window[output_name] !== 'undefined')
			{
				output_found = true;
			}
			else
			{
				alert("output_name does not point to object");
			}
		}
		else
		{
			alert("output_name is empty");
		}
		
		var make_btn_found = false;
		if (typeof make_btn_name !== 'undefined')
		{
			if (typeof window[make_btn_name] !== 'undefined')
			{
				make_btn_found = true;
			}
			else
			{
				alert("make_btn_name does not point to object");
			}
		}
		else
		{
			alert("make_btn_name is empty");
		}
		
		var zone_num_found = false;
		if (typeof zone_num_name !== 'undefined')
		{
			if (typeof window[zone_num_name] !== 'undefined')
			{
				zone_num_found = true;
			}
			else
			{
				alert("zone_num_name does not point to object");
			}
		}
		else
		{
			alert("zone_num_name is empty");
		}
		
		var addzone_btn_found = false;
		if (typeof addzone_btn_name !== 'undefined')
		{
			if (typeof window[addzone_btn_name] !== 'undefined')
			{
				addzone_btn_found = true;
			}
			else
			{
				alert("addzone_btn_name does not point to object");
			}
		}
		else
		{
			alert("addzone_btn_name is empty");
		}
		
		var reset_btn_found = false;
		if (typeof reset_btn_name !== 'undefined')
		{
			if (typeof window[reset_btn_name] !== 'undefined')
			{
				reset_btn_found = true;
			}
			else
			{
				alert("reset_btn_name does not point to object");
			}
		}
		else
		{
			alert("reset_btn_name is empty");
		}
		
		var img_src_found = false;
		if (typeof img_src_name !== 'undefined')
		{
			if (typeof window[img_src_name] !== 'undefined')
			{
				img_src_found = true;
			}
			else
			{
				alert("img_src_name does not point to object");
			}
		}
		else
		{
			alert("img_src_name is empty");
		}
		
		var img_W_found = false;
		if (typeof img_W_name !== 'undefined')
		{
			if (typeof window[img_W_name] !== 'undefined')
			{
				img_W_found = true;
			}
			else
			{
				alert("img_W_name does not point to object");
			}
		}
		else
		{
			alert("img_W_name is empty");
		}
		
		var img_H_found = false;
		if (typeof img_H_name !== 'undefined')
		{
			if (typeof window[img_H_name] !== 'undefined')
			{
				img_H_found = true;
			}
			else
			{
				alert("img_H_name does not point to object");
			}
		}
		else
		{
			alert("img_H_name is empty");
		}
		
		var img_load_found = false;
		if (typeof img_load_name !== 'undefined')
		{
			if (typeof window[img_load_name] !== 'undefined')
			{
				img_load_found = true;
			}
			else
			{
				alert("img_load_name does not point to object");
			}
		}
		else
		{
			alert("img_load_name is empty");
		}
		
		var sqsize_input_found = false;
		if (typeof sqsize_input_name !== 'undefined')
		{
			if (typeof window[sqsize_input_name] !== 'undefined')
			{
				sqsize_input_found = true;
			}
			else
			{
				alert("sqsize_input_name does not point to object");
			}
		}
		else
		{
			alert("sqsize_input_name is empty");
		}
		
		var sqsize_btn_found = false;
		if (typeof sqsize_btn_name !== 'undefined')
		{
			if (typeof window[sqsize_btn_name] !== 'undefined')
			{
				sqsize_btn_found = true;
			}
			else
			{
				alert("sqsize_btn_name does not point to object");
			}
		}
		else
		{
			alert("sqsize_btn_name is empty");
		}
		
		var linecolor_input_found = false;
		if (typeof linecolor_input_name !== 'undefined')
		{
			if (typeof window[linecolor_input_name] !== 'undefined')
			{
				linecolor_input_found = true;
			}
			else
			{
				alert("linecolor_input_name does not point to object");
			}
		}
		else
		{
			alert("linecolor_input_name is empty");
		}
		
		var linecolor_btn_found = false;
		if (typeof linecolor_btn_name !== 'undefined')
		{
			if (typeof window[linecolor_btn_name] !== 'undefined')
			{
				linecolor_btn_found = true;
			}
			else
			{
				alert("linecolor_btn_name does not point to object");
			}
		}
		else
		{
			alert("linecolor_btn_name is empty");
		}
		
		if(target_found && canvas_found && output_found && make_btn_found && zone_num_found && addzone_btn_found && reset_btn_found && img_src_found && img_W_found && img_H_found && img_load_found && sqsize_input_found && sqsize_btn_found && linecolor_input_found && linecolor_btn_found)
		{
			res = true;
		}
		return res;
	}
	
	function constructor(target_name, square_size, canvas_name, output_name, make_btn_name, zone_num_name, addzone_btn_name, reset_btn_name, img_src_name, img_W_name, img_H_name, img_load_name, sqsize_input_name, sqsize_btn_name, linecolor_input_name, linecolor_btn_name){
		const is_checked = check_constructor_params(target_name, square_size, canvas_name, output_name, make_btn_name, zone_num_name, addzone_btn_name, reset_btn_name, img_src_name, img_W_name, img_H_name, img_load_name, sqsize_input_name, sqsize_btn_name, linecolor_input_name, linecolor_btn_name);
		if(is_checked){
			$('#'+make_btn_name)[0].disabled = true;
			$('#'+addzone_btn_name)[0].disabled = false;
			$('#'+zone_num_name)[0].disabled = true;
			var target_W = $("#"+target_name).width();
			var target_H = $("#"+target_name).height();
			var target_offset_W = $("#"+target_name).offset().left;
			var target_offset_H = $("#"+target_name).offset().top;
			console.log("target_offset_W=",target_offset_W)
			console.log("target_offset_H=",target_offset_H)
			//var maindiv = document.getElementById("main_div")
			//var box = $("#"+target_name).getBoundingClientRect();
			//console.log("box=", box)
			data['make_btn'] = make_btn_name;
			data['zone_num'] = zone_num_name;
			data['addzone_btn'] = addzone_btn_name;
			data['reset_btn'] = reset_btn_name;
			data['output'] = output_name;
			data['img_src'] = img_src_name;
			data['img_W'] = img_W_name;
			data['img_H'] = img_H_name;
			data['img_load'] = img_load_name;
			data['sqsize_input'] = sqsize_input_name;
			data['sqsize_btn'] = sqsize_btn_name;
			data['linecolor_input'] = linecolor_input_name;
			data['linecolor_btn'] = linecolor_btn_name;
			data['target'] = target_name;
			data['width'] = target_W;
			data['height'] = target_H;
			data['square_size'] = square_size;
			data['squares_W'] = Math.floor(target_W/square_size)+1;
			data['squares_H'] = Math.floor(target_H/square_size)+1;
			data['line_color'] = "black";
			data['canvas'] = canvas_name;
			data['image'] = "";
			//squares array
			for (j = 0; j < data['squares_H']; j++){
				for (i = 0; i < data['squares_W']; i++){
					if (j == 0){
						squares[i] = new Array();
					}
					squares[i][j] = 0;
				}
			}
			//canvas binding
			$('#'+target_name).bind("click", function(event){
				console.log("pageX=",event.pageX)
				console.log("pageY=",event.pageY)
				//@???????? ?????????????????? ???????????????????????? ???????????? ?? ?????? ???? ???????????? ???????????? "add zone", ???? ???????? ???? ?????????????? ???? ???????? ???????????????? ??????????????
				if (finished_forming == false){
					if (point_count > 1){
						var distance_ok = true;
						var point_data;
						for (i in points){
							point_data = points[i].split("-");
							if ( point_distance( (event.pageX - target_offset_W), (event.pageY - target_offset_H), point_data[0], point_data[1] ) < min_point_distance ){
								distance_ok = false;
							}
						}
						if (distance_ok == true){
							point_count++;
							points[point_count] = (event.pageX - target_offset_W) + "-" + (event.pageY - target_offset_H);
							draw_lines();
						}
					}
					else{
						point_count++;
						points[point_count] = (event.pageX - target_offset_W) + "-" + (event.pageY - target_offset_H);
						draw_lines();
					}
				}
			});
			$('#'+target_name).bind("contextmenu", function(event){
				end_drawing();
				return false;
			});
			function ClickInElemCoords($elem){

			}
			//make button binding
			$('#'+make_btn_name).bind("click", function(event)
			{
				var a = "";
				
				a += "var data_sructure = new Array();</br>";
				a += "data_sructure['header'] = new Array();</br>";
				
				if (data['image'] !== "")
				{
					a += "data_sructure['header']['image_src'] = '"+(data['image'])+"';</br>";
					a += "data_sructure['header']['image_width'] = "+(data['width'])+";</br>";
					a += "data_sructure['header']['image_height'] = "+(data['height'])+";</br>";
				}
				
				a += "data_sructure['header']['sq_size'] = "+data['square_size']+";</br>";
				a += "data_sructure['structure'] = new Array();</br>";
				a += "data_sructure['structure'] = </br>";
				a += "[</br>";
				
				for (j = 0; j < data['squares_H']; j++)
				{
					a += "    [";
					
					for (i = 0; i < data['squares_W']; i++)
					{
						if (i == data['squares_W']-1)
						{
							if (j == data['squares_H']-1)
							{
								a += squares[i][j]+"]</br>";
							}
							else
							{
								a += squares[i][j]+"],</br>";
							}
						}
						else
						{
							a += squares[i][j]+", ";
						}
					}
				}
				
				a += "];</br>";
				
				$('#'+data['output']).empty();
				$('#'+data['output']).append(a);
			});
			
			$('#undo_btn').bind("click", function(event){
				finished_forming = true;
				$('#'+data['addzone_btn'])[0].disabled = false;
			});
			//add zone button biding
			$('#'+addzone_btn_name).bind("click", function(event){
				var zone_num = $('#'+data['zone_num'])[0].value;
				if (isNaN(zone_num)){
					alert("Zone number must be, actually, a number");
					$('#'+data['zone_num'])[0].value = zone;
				}else{
					zone_num = Math.floor(zone_num);
					if (zone_num > zone_max){
						zone = zone_max;
						$('#'+data['zone_num'])[0].value = zone;
					}else{
						zone = zone_num;
						$('#'+data['zone_num'])[0].value = zone;
					}
					points = new Array();
					point_count = 0;
					triangles = new Array();
					triangle_count = 0;
					finished_forming = false;
					$('#'+data['addzone_btn'])[0].disabled = true;
					$('#'+data['zone_num'])[0].disabled = true;
				}
			});
			
			//reset button biding
			$('#'+reset_btn_name).bind("click", function(event)
			{	
				points = new Array();
				point_count = 0;
				
				triangles = new Array();
				triangle_count = 0;
				
				squares = new Array();
				
				for (j = 0; j < data['squares_H']; j++)
				{
					for (i = 0; i < data['squares_W']; i++)
					{
						if (j == 0)
						{
							squares[i] = new Array();
						}
						squares[i][j] = 0;
					}
				}
				
				zone = 1;
				zone_max = 1;
				$('#'+data['zone_num'])[0].value = zone;
				
				finished_forming = false;
				
				$('#'+data['addzone_btn'])[0].disabled = true;
				$('#'+data['make_btn'])[0].disabled = true;
				
				canvas.clearRect(0, 0, data['width'], data['height']);
				
				$('#'+data['output']).empty();
				
				$('#'+data['target']).css("background-image", "");
				$('#'+data['img_src'])[0].value = "Image link";
				
				$('#'+data['target']).css("width", 3840);
				$('#'+data['target']).css("height", 2160);
				$('#'+data['canvas'])[0].width = 3840;
				$('#'+data['canvas'])[0].height = 2160;
				
				data['image'] = "";
				
				$('#'+data['img_W'])[0].value = 3840;
				$('#'+data['img_H'])[0].value = 2160;
			});
			
			//img load button biding
			$('#'+img_load_name).bind("click", function(event)
			{
				var img_src = $('#'+data['img_src'])[0].value;
				var img_W = $('#'+data['img_W'])[0].value;
				var img_H = $('#'+data['img_H'])[0].value;
				
				if (isNaN(img_W) || isNaN(img_H))
				{
					alert("Image width and height must be a number, at least");
					$('#'+data['img_W'])[0].value = data['width'];
					$('#'+data['img_H'])[0].value = data['height'];
				}
				else
				{
					img_W = Math.floor(img_W);
					img_H = Math.floor(img_H);
					
					$('#'+data['img_W'])[0].value = img_W;
					$('#'+data['img_H'])[0].value = img_H;
					
					$('#'+data['target']).css("background-image", "url('"+img_src+"')");
					$('#'+data['target']).css("background-repeat", "no-repeat");
					
					$('#'+data['target']).css("width", img_W);
					$('#'+data['target']).css("height", img_H);
					$('#'+data['canvas'])[0].width = img_W;
					$('#'+data['canvas'])[0].height = img_H;
					$('#second_canvas')[0].width = img_W;
					$('#second_canvas')[0].height = img_H;
					$('#'+data['canvas']).css('z-index', 2);
					$('#second_canvas').css('z-index', 1)
					console.log("second_canvas=", $('#second_canvas'));
					//	createCanvas( w, h, $("#main_div")[0])
					
					data['width'] = img_W;
					data['height'] = img_H;
					data['squares_W'] = Math.floor(data['width']/data['square_size'])+1;
					data['squares_H'] = Math.floor(data['height']/data['square_size'])+1;
					
					for (j = 0; j < data['squares_H']; j++)
					{
						for (i = 0; i < data['squares_W']; i++)
						{
							if (j == 0)
							{
								squares[i] = new Array();
							}
							squares[i][j] = 0;
						}
					}
					
					data['image'] = img_src;
				}
				//alert($('#'+data['img_src'])[0].value);
			});
		
		function put_image_on_canvas(img_src){
				console.log("putting image on canvas")
				// const canvas = document.getElementById("main_canvas");
				// const context = canvas.getContext("2d");
				var img = new Image();
				// img.setAttribute('crossorigin', 'anonymous');
				// img.setAttribute('origin', 'anonymous');
				img.addEventListener("load", function() {
					canvas.drawImage(img, 0, 0);
			 }, false);
				// ?????????????????? ???????? ??????????????????????
				img.src = img_src;
				console.log("image src =", img.src);
			}
			function create_element_image_and_put_on_canvas(){
				var oImg = document.createElement("img");
				oImg.setAttribute('height', '50px');
				oImg.setAttribute('width', '50px');
				oImg.setAttribute('id', 'myimg');
				oImg.setAttribute('src', data['image']);
				document.body.appendChild(oImg);
				var got_img = document.getElementById("myimg");
				canvas.drawImage(got_img, data['width'], data['height']);
			}								 
			//square size button biding
			$('#'+sqsize_btn_name).bind("click", function(event)
			{
				var input = $('#'+data['sqsize_input'])[0].value;
				if (isNaN(input) || input > max_square_size || input < min_square_size)
				{
					alert("Square size must be between "+min_square_size+" and "+max_square_size+" and, actually, be a number");
					$('#'+data['sqsize_input'])[0].value = data['square_size'];
				}
				else
				{
					data['square_size'] = Math.floor(input);
					$('#'+data['sqsize_input'])[0].value = data['square_size'];
					data['squares_W'] = Math.floor(data['width']/data['square_size'])+1;
					data['squares_H'] = Math.floor(data['height']/data['square_size'])+1;
					
					for (j = 0; j < data['squares_H']; j++)
					{
						for (i = 0; i < data['squares_W']; i++)
						{
							if (j == 0)
							{
								squares[i] = new Array();
							}
							squares[i][j] = 0;
						}
					}
				}
			});
		
			//line color set button biding
			$('#'+linecolor_btn_name).bind("click", function(event){
				data['line_color'] = $('#'+data['linecolor_input'])[0].value;
			});
			$('#grid_btn').bind("click", function(event)
			{				
				draw_grid();
			});
			$('#nogrid_btn').bind("click", function(event){
				erase_grid();
			});
			$('#linecolor_purple').bind("click", function(event){
				data['line_color'] = "#c0f"
			});
			$('#linecolor_green').bind("click", function(event){
				data['line_color'] = "#289937"
			});
			$('#linecolor_blue').bind("click", function(event){
				data['line_color'] = "#02f"
			});
			$('#linecolor_black').bind("click", function(event){
				data['line_color'] = "#000"
			});
			$('#save_canvas_btn').bind("click", function(event){
				DownloadCanvasAsImage();
			})
			canvas = $('#'+canvas_name)[0].getContext('2d');
			second_canvas = $('#second_canvas')[0].getContext('2d');
			
			//canvas_object.fillRect(0, 0, target_W, target_H);
			/*
			canvas_object.beginPath();
			canvas_object.moveTo(10, 10);
			canvas_object.lineTo(20, 20);
			canvas_object.lineTo(20, 30);
			canvas_object.lineTo(10, 30);
			canvas_object.stroke();
			*/
			
			
			
			if(pscroll_lopp_pointer == false)
			{
				pscroll_lopp_pointer = setInterval(function(){pscroll_lopp()},30);
			}
		}
	}
	
	function draw_lines()
	{
		//canvas.clearRect(0, 0, data['width'], data['height']);
		if (point_count > 1)
		{
			canvas.strokeStyle = "black";
			canvas.beginPath();
			var point_data = points[1].split("-");
			canvas.moveTo(point_data[0], point_data[1]);
			//canvas.fillText(point_data[0] + ", " + point_data[1], point_data[0], point_data[1]);
			for (var i = 2; i <= point_count; i++)
			{
				point_data = points[i].split("-");
				canvas.lineTo(point_data[0], point_data[1]);
				//canvas.fillText(point_data[0] + ", " + point_data[1], point_data[0], point_data[1]);
			}
			canvas.strokeStyle = data['line_color'];
			canvas.stroke();
		}
	}
	
	
	function vector_mult(x1, y1, x2, y2, x3, y3)
	{
		return (x2 - x1)*(y3 - y1) - (y2 - y1)*(x3 - x1);
	}
	
	function point_in_triangle(x0, y0, x1, y1, x2, y2, x3, y3)
	{
		vector1 = vector_mult(x0, y0, x1, y1, x2, y2);
		vector2 = vector_mult(x0, y0, x2, y2, x3, y3);
		vector3 = vector_mult(x0, y0, x3, y3, x1, y1);
		
		if ((vector1 > 0 && vector2 > 0 && vector3 > 0) || (vector1 < 0 && vector2 < 0 && vector3 < 0))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	function end_drawing()
	{	
		if (finished_forming == false)
		{
			//canvas.clearRect(0, 0, data['width'], data['height']);
			if (point_count > 2)
			{
				finished_forming = true;
				
				canvas.beginPath();
				var point_data = points[1].split("-");
				canvas.moveTo(point_data[0], point_data[1]);
				//canvas.fillText(point_data[0] + ", " + point_data[1], point_data[0], point_data[1]);
				for (var i = 2; i <= point_count; i++)
				{
					point_data = points[i].split("-");
					canvas.lineTo(point_data[0], point_data[1]);
					//canvas.fillText(point_data[0] + ", " + point_data[1], point_data[0], point_data[1]);
				}
				canvas.closePath();
				canvas.strokeStyle = data['line_color'];
				canvas.stroke();
				
				//canvas.fillText("Finished polygon forming", 10, 10);
				
				
				
				//calculate average vector mult
				var points_temp = points.slice(); //just to fast copy an array
				var current_triangle = new Array();
				
				var point1 = 1;
				var point2 = 2;
				var point3 = 3;
				var point_not_in_triangle;
				
				var above_zero = true;
				
				var average = 0;
				
				while (points_temp.length > 4)
				{
					point_data = points_temp[point1].split("-");
					current_triangle[1] = point_data[0];
					current_triangle[2] = point_data[1];
					
					point_data = points_temp[point2].split("-");
					current_triangle[3] = point_data[0];
					current_triangle[4] = point_data[1];
					
					point_data = points_temp[point3].split("-");
					current_triangle[5] = point_data[0];
					current_triangle[6] = point_data[1];
					
					average += vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]);
					
					points_temp.splice(point2, 1);
					
					if (point1 > points_temp.length-1)
					{
						point1 -= points_temp.length-1;
					}
					
					if (point2 > points_temp.length-1)
					{
						point2 -= points_temp.length-1;
					}
					
					if (point3 > points_temp.length-1)
					{
						point3 -= points_temp.length-1;
					}
				}
				
				point_data = points_temp[1].split("-");
				current_triangle[1] = point_data[0];
				current_triangle[2] = point_data[1];
				
				point_data = points_temp[2].split("-");
				current_triangle[3] = point_data[0];
				current_triangle[4] = point_data[1];
				
				point_data = points_temp[3].split("-");
				current_triangle[5] = point_data[0];
				current_triangle[6] = point_data[1];
				
				average += vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]);
				
				if (average < 0)
				{
					above_zero = false;
				}
				
				
				
				//start triangulation
				points_temp = points.slice(); //just to fast copy an array
				current_triangle = new Array();
				
				point1 = 1;
				point2 = 2;
				point3 = 3;
				
				while (points_temp.length > 4)
				{
					point_not_in_triangle = true;
					
					point_data = points_temp[point1].split("-");
					current_triangle[1] = point_data[0];
					current_triangle[2] = point_data[1];
					
					point_data = points_temp[point2].split("-");
					current_triangle[3] = point_data[0];
					current_triangle[4] = point_data[1];
					
					point_data = points_temp[point3].split("-");
					current_triangle[5] = point_data[0];
					current_triangle[6] = point_data[1];
					
					for (var i in points)
					{
						if (i !== point1 && i !== point2 && i !== point3)
						{
							point_data = points[i].split("-");
							if ( point_in_triangle(point_data[0], point_data[1], current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]) == true )
							{
								point_not_in_triangle = false;
							}
						}
					}
					
					//debug
					
					//lmmk2_debug(vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6])+" - "+point_not_in_triangle, "a");
					/*
					canvas.strokeStyle = "rgb("+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+")";						
					canvas.beginPath();
					canvas.moveTo(current_triangle[1], current_triangle[2]);
					canvas.lineTo(current_triangle[3], current_triangle[4]);
					canvas.lineTo(current_triangle[5], current_triangle[6]);
					canvas.closePath();
					canvas.stroke();
					*/
					//end debug
					
					//vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]) !== 0
					
					if (((vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]) < 0 && above_zero == false)  ||
						 (vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]) > 0 && above_zero == true )) && 
						 point_not_in_triangle == true)
					{
						triangle_count++;
						triangles[triangle_count] = new Array();
						
						triangles[triangle_count] = current_triangle.slice();
						/*
						triangles[triangle_count][1] = current_triangle[1];
						triangles[triangle_count][2] = current_triangle[2];
						triangles[triangle_count][3] = current_triangle[3];
						triangles[triangle_count][4] = current_triangle[4];
						triangles[triangle_count][5] = current_triangle[5];
						triangles[triangle_count][6] = current_triangle[6];
						*/
						
						//average += vector_mult(current_triangle[1], current_triangle[2], current_triangle[3], current_triangle[4], current_triangle[5], current_triangle[6]);
						
						points_temp.splice(point2, 1);
						
						//point2 = point3;
						//point3++;
						if (point1 > points_temp.length-1)
						{
							point1 -= points_temp.length-1;
						}
						
						if (point2 > points_temp.length-1)
						{
							point2 -= points_temp.length-1;
						}
						
						if (point3 > points_temp.length-1)
						{
							point3 -= points_temp.length-1;
						}
					}
					else
					{
						point1 = point2;
						point2 = point3;
						point3++;
						if (point3 > points_temp.length-1)
						{
							point3 -= points_temp.length-1;
						}
					}
					//lmmk2_debug(point1+" - "+point2+" - "+point3, "a");
					
					//debug
					/*
					for (i in triangles)
					{
						canvas.strokeStyle = "rgb("+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+")";
						
						canvas.beginPath();
						canvas.moveTo(triangles[i][1], triangles[i][2]);
						canvas.fillText(triangles[i][1] + ", " + triangles[i][2], triangles[i][1], triangles[i][2]);
						canvas.lineTo(triangles[i][3], triangles[i][4]);
						canvas.fillText(triangles[i][3] + ", " + triangles[i][4], triangles[i][3], triangles[i][4]);
						canvas.lineTo(triangles[i][5], triangles[i][6]);
						canvas.fillText(triangles[i][5] + ", " + triangles[i][6], triangles[i][5], triangles[i][6]);
						canvas.closePath();
						canvas.stroke();
					}
					*/
					//end debug
					
					//points_temp.splice(pos, 1);
				}
				
				triangle_count++;
				triangles[triangle_count] = new Array();
				
				point_data = points_temp[1].split("-");
				triangles[triangle_count][1] = point_data[0];
				triangles[triangle_count][2] = point_data[1];
				
				point_data = points_temp[2].split("-");
				triangles[triangle_count][3] = point_data[0];
				triangles[triangle_count][4] = point_data[1];
				
				point_data = points_temp[3].split("-");
				triangles[triangle_count][5] = point_data[0];
				triangles[triangle_count][6] = point_data[1];
				
				//canvas.fillText("Finished triangulating", 10, 20);
				
				//debug
				
				//lmmk2_debug(vector_mult(triangles[triangle_count][1], triangles[triangle_count][2], triangles[triangle_count][3], triangles[triangle_count][4], triangles[triangle_count][5], triangles[triangle_count][6])+" - "+point_not_in_triangle, "a");
				
				//average += vector_mult(triangles[triangle_count][1], triangles[triangle_count][2], triangles[triangle_count][3], triangles[triangle_count][4], triangles[triangle_count][5], triangles[triangle_count][6]);
				//average = average/triangle_count;
				
				//lmmk2_debug(average, "a");
				/*
				for (i in triangles)
				{
					canvas.strokeStyle = "rgb("+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+")";
					
					canvas.beginPath();
					canvas.moveTo(triangles[i][1], triangles[i][2]);
					canvas.fillText(triangles[i][1] + ", " + triangles[i][2], triangles[i][1], triangles[i][2]);
					canvas.lineTo(triangles[i][3], triangles[i][4]);
					canvas.fillText(triangles[i][3] + ", " + triangles[i][4], triangles[i][3], triangles[i][4]);
					canvas.lineTo(triangles[i][5], triangles[i][6]);
					canvas.fillText(triangles[i][5] + ", " + triangles[i][6], triangles[i][5], triangles[i][6]);
					canvas.closePath();
					canvas.stroke();
				}
				*/
				//end debug
				
	
				//end triangulation
				$('#'+data['make_btn'])[0].disabled = false;
				$('#'+data['addzone_btn'])[0].disabled = false;
				$('#'+data['zone_num'])[0].disabled = false;
				
				//calculate and draw squares
				for (var j = 0; j < data['squares_H']; j++)
				{
					for (var i = 0; i < data['squares_W']; i++)
					{
						for (k in triangles)
						{
							//squares[i][j] = 0;
							//data['square_size']
							if ( point_in_triangle(i*data['square_size']+data['square_size']/2, j*data['square_size']+data['square_size']/2, triangles[k][1], triangles[k][2], triangles[k][3], triangles[k][4], triangles[k][5], triangles[k][6]) == true)
							{
								squares[i][j] = zone;
								canvas.strokeStyle = data['line_color'];
								canvas.strokeRect(i*data['square_size'], j*data['square_size'], data['square_size'], data['square_size']);
							}
							
							if (k == 1)
							{
								var center_X = Math.floor((triangles[k][1]*1 + triangles[k][3]*1 + triangles[k][5]*1) / 3);
								var center_Y = Math.floor((triangles[k][2]*1 + triangles[k][4]*1 + triangles[k][6]*1) / 3);
								canvas.shadowBlur = 1;
								canvas.shadowColor = "black";
								canvas.fillStyle = "red";
								canvas.font = "24px sans-serif";
								canvas.fillText(zone, center_X-8, center_Y+8);
								canvas.shadowBlur = 0;
							}
						}
					}
				}
				
				//zone increment if maxed
				if (zone == zone_max)
				{
					zone++;
					zone_max = zone;
				}
				$('#'+data['zone_num'])[0].value = zone;
				
				
				//draw triangles
				/*
				for (i in triangles)
				{
					canvas.strokeStyle = "rgb("+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+")";
					//canvas.fillStyle = "rgb("+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+", "+(Math.floor(Math.random()*255)+1)+")";
					
					canvas.beginPath();
					canvas.moveTo(triangles[i][1], triangles[i][2]);
					//canvas.fillText(triangles[i][1] + ", " + triangles[i][2], triangles[i][1], triangles[i][2]);
					canvas.lineTo(triangles[i][3], triangles[i][4]);
					//canvas.fillText(triangles[i][3] + ", " + triangles[i][4], triangles[i][3], triangles[i][4]);
					canvas.lineTo(triangles[i][5], triangles[i][6]);
					//canvas.fillText(triangles[i][5] + ", " + triangles[i][6], triangles[i][5], triangles[i][6]);
					canvas.closePath();
					//canvas.fill();
					canvas.stroke();
				}
				*/
			}
			else
			{
				canvas.fillText("Can't finish polygon (points < 3)", 10, 10);
			}
		}
	}
	
	var pscroll_lopp_index = 0;
	
	function pscroll_lopp()
	{
		if (points.length == 0 && zone == 1)
		{
			$('#'+data['sqsize_btn'])[0].disabled = false;
			$('#'+data['sqsize_input'])[0].disabled = false;
			$('#'+data['img_load'])[0].disabled = false;
			$('#'+data['img_src'])[0].disabled = false;
		}
		else
		{
			$('#'+data['sqsize_btn'])[0].disabled = true;
			$('#'+data['sqsize_input'])[0].disabled = true;
			$('#'+data['img_load'])[0].disabled = true;
			//$('#'+data['img_src'])[0].disabled = true;
		}
	}
	function erase_grid(){
		second_canvas.clearRect(0, 0, 5000, 5000);
	}
	function draw_grid(_transparensy){
		const transparensy = (typeof _transparensy == 'undefined') ? 0.2 : _transparensy;
		for (var j = 0; j < data['squares_H']; j++){
			for (var i = 0; i < data['squares_W']; i++){
				//second_canvas.strokeStyle = '#eee';
				second_canvas.strokeStyle = "rgba(150,150,230,0.5)";
				//second_canvas.strokeStyle = "rgba(200,200,200,"+transparensy+")";
				second_canvas.strokeRect(i*data['square_size'], j*data['square_size'], data['square_size'], data['square_size']);
			}
		}
	}
	function createCanvas( w, h, el) {
		var canvas = document.createElement('canvas');
		canvas.width = w;
		canvas.height = h;
		el = el || document.body;
		el.appendChild(canvas);
		return canvas;
	  }
	  // ?????????????????????????????? canvas ?? ??????????????????????
	function convertCanvasToImage(canvas, callback) {
	var image = canvas.toDataURL("image/jpg");
	image = image.replace("image/jpg","image/octet-stream");
	callback(image)
  	}
	function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
	function DownloadCanvasAsImage(){
		let downloadLink = document.createElement('a');
		downloadLink.setAttribute('download', 'markuped__' + data['image']);
		let canvas = document.getElementById('main_canvas');
		let dataURL = canvas.toDataURL('image/jpg');
		let url = dataURL.replace(/^data:image\/jpg/,'data:application/octet-stream');
		downloadLink.setAttribute('href', url);
		downloadLink.click();
	}

