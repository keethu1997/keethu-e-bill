function calculating(){

	let unit=document.getElementById('unit1').value;
	
	let amount;

	 
	
	
	

	if(unit >= 1 && unit <=30)
	{
		amount=unit * 7.85 + 480.00 ;
		

	}
	 else if(unit >=31 && unit <= 60)
	 {
	 	amount=235.50 + ((unit -30) * 7.85)+480.00;
	 	

	 }

	 else if(unit >=61 && unit <= 90)
	 {
	 	amount= 235.50+ 235.50  +((unit-60) * 10.00)+480.00;
	 	

	 }

	 else if(unit >=91 && unit <= 120)
	 {
	 	amount=235.50 +235.50+300.00 + ((unit-90) * 27.75)+480.00;
	 	

	 }
	  else if(unit >=121 && unit <= 180)
	 {
	 	amount=235.50 +235.50+300.00+832.50 + ((unit-120) * 32.00) + 480.00;
	 	

	 }
	 
     
	let TotalAmount=document.getElementById('bill');
	TotalAmount.innerHTML="bill amount is:" + amount ;
	

	

}