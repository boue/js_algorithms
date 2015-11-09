//constructor for Node
function Node(data){
  this.data = data;
  this.parent = null;
  this.children = [];
}

//constructor for Tree
function Tree(data){
  var node = new Node(data);
  this._root = node;
}