
function changeImage()
{
  document.getElementById('imgP1').src = "takingphoto4.jpg";
  
}

function randomImg(id){
	const arrImg =["image/hobbies/takingphoto1.jpeg","image/hobbies/takingphoto3.jpeg","image/hobbies/takingphoto2.jpg","image/hobbies/takingphoto4.jpg"];

	random = arrImg[Math.floor(Math.random()* arrImg.length)];

	document.getElementById("id").src = random;
}
