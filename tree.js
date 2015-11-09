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

Tree.prototype.traverseDF = function(callback) {
  (function recurse(currentNode){
    //self-terminating
    for(var i = 0, length = currentNode.children.length; i < length; i++){
      //self-invoking
      recurse(currentNode.children[i]);
    }
    callback(currentNode);
  })(this._root);
};

var tree = new Tree('one');

//push new node to children then set it's pointer to _root -> var tree
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];