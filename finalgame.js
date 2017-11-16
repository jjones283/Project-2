<html>
<head> 
<title>
canvas demo
</title>
<head>
<body>
<canvas width = '200' height = '200' id= 'canvas'> this won't show! </canvas>
this will show



</body>

<script>
var canvas = document.getElementById('canvas')
var context = canvas.getContext ('2d')

//rectangle stuff

context.rect(100,100,50,75)
context.fillStyle = '#0000ff';
context.fill();

context.strokeStyle = '#ff00ff';
context.lineWidth =5;
context.stroke();


// line stuff
context.beginPath();
context.moveTo(25,15);
context.lineTo(100,100);
context.strokeStyle ='#00fff';
context.stroke();

//text stuff
context.font = '40px, helvetica':
context.lineWidth= 2;
context.strokeStyle= '#000000';
context.fillstyle= '33AA00'
context.fill();

</script>
</html>
