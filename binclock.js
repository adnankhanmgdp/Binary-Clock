function startTime() {
	var today = new Date();
	var h = today.getHours();
        console.log(h);
// 	h = h.toString();
// 	h= parseInt(h);
	var m = today.getMinutes();
	var s = today.getSeconds();
	if(h>=12)
	{
		h = checkhr(h);
		ap = "pm";
		change(ap);
	}
	else
	{
	if (h == 0) {
		h = 12;
	}
        else if(h>0 && h< 10)
	{
		h= "0" + h;
	}
		ap = "am";
		change(ap);
	}
	
	m = checkTime(m);
	s = checkTime(s);
	change_dom_hr(h);
	change_dom_min(m);
	change_dom_sec(s);
	// document.getElementsByTagName("span").setAttribute("onchange","reset()");
	reset();
	// console.log()
	document.getElementById('txt').innerHTML =
		h + ":" + m + ":" + s + " " + ap + ".";
	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}  // add zero in front of numbers < 10
	// i = parseInt(i);
	return i;
}
function checkhr(i) {
// 	i = i.toString();
	if (i > 12) {
		i = i - 12;
		if (i < 10) {
			i = "0" + i;
		}
	}
	
//         if (i<10 && i[0] !== 0) 
//         {
// 	   i = "0" + i;
//         }
	return i;
}
function change_dom_sec(s)
{
	// m = m.toString();
	s = s.toString();
	ar = divide(s[1])
	if(ar[0]==8)
	{
		idd = "s8";
		change(idd);
		if(ar[1]==1)
		{
			idd = "s1";
			change(idd);
		}

	}
	else if(ar[0]==4)
	{
		idd = "s4";
		change(idd);
		if(ar[1]==2)
		{
			idd = "s2";
			change(idd);
			if(ar[2]==1)
			{
				idd = "s1";
			change(idd);
			}
		}
		else if(ar[1]==1)
		{
			idd = "s1";
			change(idd);
		}
	}
	else if(ar[0]==2)
		{
			idd = "s2";
			change(idd);
			if(ar[1]==1)
			{
				idd = "s1";
				change(idd);
			}
		}
	else if(ar[0]==1)
	{
		idd = "s1";
		change(idd);
	}
	ar = divide(s[0])
	if(ar[0]==4)
	{
		idd = "se4";
		change(idd);
		if(ar[1]==2)
		{
			idd = "se2";
			change(idd);
			if(ar[2]==1)
			{
				idd = "se1";
			change(idd);
			}
		}
		else if(ar[1]==1)
		{
			idd = "se1";
			change(idd);
		}
	}
	else if(ar[0]==2)
		{
			idd = "se2";
			change(idd);
			if(ar[1]==1)
			{
				idd = "se1";
				change(idd);
			}
		}
	else if(ar[0]==1)
	{
		idd = "se1";
		change(idd);
	}
}
function change_dom_min(m)
{
	m = m.toString();
	// s = s.toString();
	ar = divide(m[1])
	if(ar[0]==8)
	{
		idd = "m8";
		change(idd);
		if(ar[1]==1)
		{
			idd = "m1";
			change(idd);
		}

	}
	else if(ar[0]==4)
	{
		idd = "m4";
		change(idd);
		if(ar[1]==2)
		{
			idd = "m2";
			change(idd);
			if(ar[2]==1)
			{
				idd = "m1";
			change(idd);
			}
		}
		else if(ar[1]==1)
		{
			idd = "m1";
			change(idd);
		}
	}
	else if(ar[0]==2)
		{
			idd = "m2";
			change(idd);
			if(ar[1]==1)
			{
				idd = "m1";
				change(idd);
			}
		}
	else if(ar[0]==1)
	{
		idd = "m1";
		change(idd);
	}
	ar = divide(m[0])
	if(ar[0]==4)
	{
		idd = "mi4";
		change(idd);
		if(ar[1]==2)
		{
			idd = "mi2";
			change(idd);
			if(ar[2]==1)
			{
				idd = "mi1";
			change(idd);
			}
		}
		else if(ar[1]==1)
		{
			idd = "mi1";
			change(idd);
		}
	}
	else if(ar[0]==2)
		{
			idd = "mi2";
			change(idd);
			if(ar[1]==1)
			{
				idd = "mi1";
				change(idd);
			}
		}
	else if(ar[0]==1)
	{
		idd = "mi1";
		change(idd);
	}
}
function change_dom_hr(h) {
	h = h.toString();
	// var ar = [];
	ar = divide(h[1])
	if(ar[0]==8)
	{
		idd = "h8";
		change("h8");
		if(ar[1]==1)
		{
			idd = "h1";
			change("h1");
		}

	}
	else if(ar[0]==4)
	{
		idd = "h4";
		change("h4");
		if(ar[1]==2)
		{
			idd = "h2";
			change("h2");
			if(ar[2]==1)
			{
				idd = "h1";
			change("h1");
			}
		}
		else if(ar[1]==1)
		{
			idd = "h1";
			change("h1");
		}
	}
	else if(ar[0]==2)
		{
			idd = "h2";
			change("h2");
			if(ar[1]==1)
			{
				idd = "h1";
				change("h1");
			}
		}
	else if(ar[0]==1)
	{
		idd = "h1";
		change("h1");
	}
	if(h[0]==1)
	{
		idd = "hr1";
		change("hr1");
	}
	// console.log(ar)
	// console.log(h+"-"+m+"-"+s)
}
function reset()
{	var a  = document.getElementsByClassName("real");
setTimeout(() => { 
for(var i=0; i< a.length; i++)
{
	a[i].style.backgroundColor="#330000";
	a[i].style.borderColor="#C5C5C5";
}}, 500);
// console.log(a)
}
function change(idd)
{
	document.getElementById(idd).style.backgroundColor="Red";
	document.getElementById(idd).style.borderColor="White";
}

function divide(val) {
	val = parseInt(val);
	var arr = [];
	while (val > 0) {
		if (val >= 8) {
			arr.push(8);
			val = val - 8;
			if (val >= 1) {
				arr.push(1);
			}
		}
		else if (val >= 4) {
			arr.push(4);
			val = val - 4;
			if (val >= 2) {
				arr.push(2);
				val = val - 2;
				if (val >= 1) {
					arr.push(1);
					val = val - 1;
				}
			}
			if (val >= 1) {
				arr.push(1);
				val = val - 1;
			}
		}
		else if (val >= 2) {
			arr.push(2);
			val = val - 2;
			if (val >= 1) {
				arr.push(1);
				val = val - 1;
			}
		}
		else if (val >= 1) {
			arr.push(1);
			val = val - 1;
		}
	}
	return arr;
}
// time();
