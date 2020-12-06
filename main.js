var main_array_name= ["Margherita Pizza", "Farm Fresh", "Pepporoni Pizza", "Cheese Pizza"];
 function getmenu(){
     main_array_name.sort();
    var htmldata = "<ol class='ol12'>";
    for( i=0; i<main_array_name.length; i++){
        htmldata=htmldata+"<li>"+main_array_name[i]+"</li>";
        
    }
    
 htmldata=htmldata+"</ol>";
 console.log(htmldata);
 document.getElementById("display_menu").innerHTML=htmldata;
 }
 
 
 function add_item(){
    
    var item=document.getElementById("add_item_").value;
    console.log(item)
    main_array_name.push(item);
    main_array_name.sort();
    var htmldata1="<secttion>";
    for(var i=0;i<main_array_name.length;i++){
        htmldata1=htmldata1+'<div class="block2">'+' <img src="images/pizi.png" class="img-responsive" style="height: 50px; width: 50px;">' + main_array_name[i] + '</div>';
    }
    htmldata1=htmldata1+'</div>'
    console.log(htmldata1);
      document.getElementById("blockinit").innerHTML = htmldata1;
}