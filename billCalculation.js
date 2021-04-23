function bill()
        {
            event.preventDefault();
            alert("Your cab is booked");
            window.location.href="final.html";  //call the next page to display
        }
        function calculate()
        {
          //Get the values from HTML and store 
            let distance=document.querySelector("#noofkm").value;
            let cabtype=document.querySelector("#cabtype").value;
            let journeyDateStr=document.querySelector("#journeydate").value;
            let journeyTimeStr=document.querySelector("#journeytime").value;
            let ageStr=document.querySelector("#age").value;
            let billAmount,gst,amountWithGst;
            let peakHourRate;
            let km=parseInt(distance);
            switch(cabtype)   //calculte bill amount based on cabtypes which travellers selected
            {
                case"MICRO" : billAmount=10*km; break;
                case"MINI" : billAmount=15*km; break;
                default : billAmount=20*km; break;
            }
            document.getElementById("amount").innerHTML="Bill Amount is : Rs."+billAmount+"/-";
            gst=(billAmount*7)/100 ;     //7% gst
            amountWithGst=billAmount+gst;
            document.getElementById("withgst").innerHTML="Bill Amount after addition of gst : Rs."+amountWithGst+"/-";   //gst amount displayed in HTML
            let hour=parseInt(journeyTimeStr.substr(0,2));
            if(hour>=17 && hour<=19)
            {
                peakHourRate=amountWithGst+((amountWithGst*1.25)/100);             //if travellers travel in peak hours extra charges are applied
                document.getElementById("hour").innerHTML="    ****YOUR JOURNEY TIME IS IN PEAK HOUR****    ";
                document.getElementById("hours").innerHTML="Bill Amount after addition of peak Hour Rate : Rs."+peakHourRate+"/-";
            }
            else
            {
                peakHourRate=amountWithGst;
                alert("Your journey time is not in peak hour");
               //no extra charges for non peak hour travellers
            }
            let age=parseInt(ageStr);
            if(age>=60)             //check the person is senior or not
            {
                let seniorCitizenRate=peakHourRate/2; //50% discount for senior Citizen
                document.getElementById("sc").innerHTML="    ****YOU ARE A SENIOR CITIZEN****    " ;
                document.getElementById("sc1").innerHTML="Your final amount is : Rs."+seniorCitizenRate+"/-";
            }
            else
            {
                alert("You are not a Senior Citizen");
                document.getElementById("sc2").innerHTML="Your final amount is : Rs."+peakHourRate+"/-";  //if not a senior no discount
            }
        //document.querySelector("#journeydate").setAttribute("value",todayDateStr);
        }
