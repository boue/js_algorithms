//search is very quick on a binary tree, also need to take into account that there are only 2 child nodes (restriction)
//you can also quickly insert and delete as opposed to array 
//node without child nodes is called a leaf node 
//depth of a tree is number of layers in a tree
//binary search tree has lesser value on left node with right node having bigger value

//class for Node
function Node(data, left, right){
  this.data = data;
  //left and right are links to other nodes
  this.left = left;
  this.right = right;
}

Node.prototype.show = function(){
  this.data;
}

//class for Binary Search Tree
function BST(){
  this.root = null;
}

BST.prototype.insert(data) = function(){
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true){
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null){
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        } 
      }
    }
  }
}