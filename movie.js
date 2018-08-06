$(document).ready(function(){
	
      $('.card').css('display','none');

	$('#searchBtn').click(function(){
		

		let input = $('.first').val(); 
			if(input == '' || input == null || input == undefined ){
				$('.first').popover('show')

			}
			else{
               
				imdbData()
				
				

			}
                  
			 $('input').keyup(function(){
			 	$('.first').popover('hide')
			 	
			 })

            
           

	});


});


let imdbData = ()=>{
	var value = [];
         $('input').each(function(){
         value.push($(this).val())
             });


	let title = value[1].toString();
	let year = value[2].toString();
	let id =   value[3].toString();
	
	$.ajax({
		type: 'GET',
		datatype: 'JSON',
		url: `https://www.omdbapi.com/?t=' + ${title} +'&y=' + ${year}+ '&id=' + ${id} + '&apikey=326c8d84`,
		async: true ,
		success : (data) =>{

                                 // console.log(data)
		                             
		                                     /*let curr = value[1].toString()||value[2].toString() ;                                
	                                         let current = curr.toLowerCase().replace(/\b[a-z]/g, (name1)=>{
	                                              return name1.toUpperCase();
	                                          });*/
                                              
	                                          if(undefined != data.Title || null != data.Title){
	                                          	$('.card').css('display','flex');
	                                          	$('.poster').append(()=>{if("N/A" == data.Poster){
	                                          		$('.poster').html('<img src="image.jpg" class="image" style="width:20vw">')
	                                          	}else{
	                                          		$('.poster').html('<img src=" ' + data.Poster + ' " class="images" style = " height:200px">')

	                                          	}})
	                                          	$('.title').text(data.Title);
	                                          	$('.year').text(data.Year);
	                                          	$('.plot').text(data.Plot);
	                                          	$('.id').text(data.imdbID);
	                                          	$('.rated').text(data.imdbRating);
	                                          	$('.date').text(data.Released);
	                                          	$('.duration').text(data.Runtime);
	                                          	$('.lang').text(data.Language);
	                                          	$('.genres').text(data.Genre);
	                                          	$('.actor').text(data.Actors);
	                                          	$('.director').text(data.Director);
	                                          	$('.writer').text(data.Writer);
	                                            $('.voting').text(data.imdbVotes);
	                                          	$('.collections').text(data.BoxOffice);
	                                          	$('.production').text(data.Production);
	                                          	$('.meta').text(data.Metascore);
	                                          	$('.country').text(data.Country);
	                                          	$('.award').text(data.Awards);
	                                          	$('.website').text(data.Website);



	                                          }
	                                          else if(data.Response=="False"){
	                                          	alert('Movie not found');
	                                          	$('.card').css('display','none');

	                                          }



		},timeout : 5000,
		error : (err) =>{
                   	alert(err.dataJSON.error.message)
                             	
                   },
                    beforeSend: ()=>{
                    	              alert('Welcome to moviePedia');
                    	            }
                    

                       
                    


	});

}