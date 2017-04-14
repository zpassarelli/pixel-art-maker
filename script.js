
var grid = document.getElementById('grid');
var palette = document.getElementById('palette');

function create(name){
  return document.createElement(name);
}

// create pixel grid
for(var i = 0; i < 625; i++){
  var pixel = create('div');
  pixel.className = "pixel";
  pixel.style.width = '20px';
  pixel.style.height = '20px';
  pixel.style.boxSizing = 'border-box';
  pixel.style.border = '1px dotted black';
  pixel.style.marginBottom = '-4px';
  pixel.style.display = 'inline-block';
  grid.appendChild(pixel);
}

var colors = [
  'red',
  'firebrick',
  'orange',
  'orangered',
  'skyblue',
  'royalblue',
  'lime',
  'green',
  'yellow',
  'yellowgreen',
  'pink',
  'hotpink',
  'lightcyan',
  'cyan',
  'violet',
  'purple',
  'sandybrown',
  'saddlebrown',
  'silver',
  'slategray',
  'white',
  'black'
];
// create pallette grid
for(var i = 0; i < colors.length; i++){
  var option = create('div');
  option.style.width = '40px';
  option.style.height = '40px';
  option.style.boxSizing = 'border-box';
  option.style.border = '1px solid black';
  option.style.marginBottom = "-4px"
  option.style.display = 'inline-block';

  option.className = colors[i];
  option.style.backgroundColor = colors[i];
  palette.appendChild(option);
}

function resetPalette(){
  for(var i = 0; i < palette.children.length; i++){
    palette.children[i].style.border = '1px solid black';
  }
}

var select = 'red';
var mouseState = false;
palette.children[0].style.border = '5px double black';
// add listeners
document.addEventListener("DOMContentLoaded",function (){
  for(var i = 0; i < palette.children.length; i++){
    palette.children[i].addEventListener("click",function (){
      select = this.className;
      resetPalette();
      if(this.className === 'black'){
        this.style.border = '5px double white';
      } else {
        this.style.border = '5px double black';
      }
    });
  }

  for(var j = 0; j < grid.children.length; j++){
    grid.children[j].addEventListener("click",function (){
      this.style.backgroundColor = select;
    });
    grid.children[j].addEventListener("mouseover",function (){
      if(mouseState){
        this.style.backgroundColor = select;
      }
    });

  }
  grid.addEventListener("mousedown",function (){
    mouseState = true;
  });
  grid.addEventListener("mouseup",function (){
    mouseState = false;
  });
  grid.addEventListener('mouseleave',function (){
    mouseState = false;
  });
});
