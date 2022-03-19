function taskinsertion(){
  if(document.getElementById("toDo").value.length == 0)
  alert("Hey!! Enter  a task");
  else{
    var innerBox = document.createElement("div");
    innerBox.className="divclass";
    document.getElementById("outerBox").appendChild(innerBox);
    //display text
    var textDisplay = document.createElement("p");
    textDisplay.innerHTML = document.getElementById("toDo").value;
    textDisplay.className = "textdInput";
    innerBox.appendChild(textDisplay);
    var lineThrough = document.getElementsByClassName("textInput");
    for(var i=0;i<lineThrough.length;i++){
      lineThrough[i].onclick=function(){
        var strikeCssBefore= this.parentElement;
        var strikeCss = strikeCssBefore.children[0];
        strikeCss.style.textDecoration="line-through";
      }
    }
    //deleting button
    var deleteTaskItems = document.createElement ("button");
    deleteTaskItems.innerHTML="x";
    deleteTaskItems.className="deleteBtn";
    innerBox.appendChild(deleteTaskItems);
    var close= document.getElementsByClassName("deleteBtn");
    for(var i=0;i<close.length;i++){
      close[i].onclick=function(){
        var closeCss=this.parentElement;
        closeCss.style.display="none";
            }
    }
    document.getElementById("toDo").value="";

    }

  }
