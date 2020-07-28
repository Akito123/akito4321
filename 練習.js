var pics_src = new Array("images/71LPnKT7G2L._SX425_.jpg","images/God-of-War-378794-Detail.jpg","images/81goYYa6e9L._SL1500_.jpg","images/91Bk7P0rI-L._SX342_.jpg","images/81g89uQsZJL._SX425_.jpg");
  var num = -1;
  var img;
   // slideshow_timer();
 
    function start(){
        if (num == 4){
            num = 0
        }else {
            num ++;
        }
        document.getElementById("myImg").src=pics_src[num];
       img = setTimeout("start()",1500);
        }

	function stop(){
		clearInterval(img);
	}
	