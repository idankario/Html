
$(document).ready(function () {
	var userlogin = false;
	var tempNav;
	if(userlogin == false){
		 tempNav =	"<a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>"+
						"<img src= &quot; {% static 'game/images/user.png'%} &quot;  alt='Img Profile' title='Img Profile' class='rounded-circle'>"+
						"</a>";
	}else{
		tempNav = 	"<a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>"+
					"<img src = &quot;{% static 'game/images/profile.jpg'%}&quot; alt='Img Profile' title='Img Profile' class='rounded-circle'>"+
					"</a>";
	}


	tempNav +="<div class='dropdown-menu'>"+
				"<a href='myGame' class='dropdown-item'>My games</a>"+
			"</div>"+
			"<button class='navbar-toggler navbar-light border' type='button' data-toggle='collapse' data-target='#navbargame' aria-controls='navbargame' aria-expanded='false' aria-label='Toggle navigation'>"+
				"<span class='navbar-toggler-icon'></span>"+
			"</button>"+
			"<div class='collapse navbar-collapse' id='navbargame'>"+
				"<ul class='navbar-nav'>"+
					"<li class='nav-item'><a class='nav-link ' href=''><i class='fas fa-home'></i>Home</a></li>"+
					"<li class='nav-item dropdown'>"+
						"<a href='creatGame' data-toggle='dropdown' class='nav-link dropdown-toggle'>"+
							'<i class="fas fa-cart-plus"></i>Book a field'+
						"</a>"+
						"<div class='dropdown-menu'>"+
							"<a href='home' class='dropdown-item '>Join an existing game</a>"+
							"<a href='createGame' class='dropdown-item'>Creat new game</a>"+
						"</div>"+
					"</li>"+
					"<li class='nav-item'>"+
						"<a class='nav-link ' href='#'><i class='far fa-calendar-check '></i>events</a>"+
					"</li>"+
					"<li class='nav-item'>"+
						"<a class='nav-link ' href='#'><i class='fas fa-users'></i>Group</a>"+
					"</li>"+
					"<li class='nav-item'>"+
						"<a class='nav-link' href='contacts'><i class='far fa-address-book'></i>Contect</a>"+
					"</li>"+
				"</ul>"+
			"</div>"	
			$("nav").append(tempNav)		
});




/*function createGame() {
     location.href = "http://shenkar.html5-book.co.il/2019-2020/web1/dev_209/createGame.html";
};*/
$(function() {
	if (window.location.href.split('/').pop() =='createGame.html') {
		var today = new Date();
		//mm + '/' + dd + '/' + yyyy;
		today = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0') + '/' + today.getFullYear();
		$('.date').datepicker ({
			startDate: today,
			daysOfWeekDisabled: "5,6",
			startView: 1,
			clearBtn: true,
			autoclose: true,
			todayHighlight: true
		});
	}

	var fields = ["Bloomfield, Tel aviv", "The diamond, Netanya", "Teddy, Jerusalem","Sami Ofer, Haifa"];
	
	 for(field in fields){
		 console.log(fields[field]);
		 $('#fields').append("	<option>"+fields[field]+"</option>");
	 }
	 
});


function clickFunction() {
	var x = document.getElementById("filtererea");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }



 /*content page */ 


 $(document).ready(function(){
    $("file.json",function(data){
        $.each(data,function(){
			console.log(this)
            $('#myTable').append("<tr> <td>"+this.fieldName+"</td> <td>"+this.openingHours+"</td> <td>"+this.phoneNumber+
            "</td> <td>"+this.address+"</td> </tr>");
        });
    });
});


  function tableFunction() {
	//filter
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
	}
}
}


$(function() {
	//if (window.location.href.split('/')[3]=='loginRegisterPage')
	//{
		const sign_in_btn = document.querySelector("#sign-in-btn");
		const sign_up_btn = document.querySelector("#sign-up-btn");
		const containerLog = document.querySelector(".containerLog");
		sign_up_btn.addEventListener("click", () => {
		containerLog.classList.add("sign-up-state");
		});

		sign_in_btn.addEventListener("click", () => {
		containerLog.classList.remove("sign-up-state");
		});
	//}
});
