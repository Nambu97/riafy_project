function get_all_company()
{	
	$.post('http://localhost:3306/company/get_company',
			{
				
			},
			function(data)
			{
				console.log(data);
				 var $select = $("#category");
				 var j;
				  for (j=0;j<data.length;j++) 
				  {
					$select.append($('<option></option>').val(data[j].ID).html(data[j].company_name));
				  }
				
			}
		)
		
	   
	.fail(function (xhr)
		{
			switch (xhr.status)
			{
				case 500:
					alert('Error.');
					break;
				default:
					alert('Please Check Your Internet Connection');
					break;
			}
		   
		}
	)
}

function get_company_details()
{
	var company_id = document.getElementById("category").value;
	$.post('http://localhost:3306/company/get_company_details',  
			{
				company_id:company_id
			},
			function(data)
			{
				console.log(data);
				if(data.length>0)
				{
					document.getElementById("for_guide").style.display ="block";
				}
				else
				{
					document.getElementById("for_guide").style.display ="none";
				}
				document.getElementById("market_cap").innerHTML ="Rs."+data[0].market_cap;
				document.getElementById("current_price").innerHTML ="Rs."+data[0].current_market_price;
				document.getElementById("stock_p").innerHTML =data[0].stock_p_e+"%";
				document.getElementById("debt").innerHTML ="Rs."+data[0].debt;
				document.getElementById("div_yield").innerHTML =data[0].div_yield+"%";
				document.getElementById("roce").innerHTML =data[0].roce+"%";
				document.getElementById("roe").innerHTML =data[0].roe+"%";
				document.getElementById("debt_equ").innerHTML =data[0].deb_to_equality+"%";
				document.getElementById("eps").innerHTML ="Rs."+data[0].eps;
				document.getElementById("reserves").innerHTML ="Rs."+data[0].reserves;
				
			}
		)
		
	   .fail(function (xhr)
		{
			switch (xhr.status)
			{
				case 500:
					alert('Error.');
					break;
				default:
					alert('Please Check Your Internet Connection');
					break;
			}
		   
		}
	)
	
}