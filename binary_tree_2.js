//search is very quick on a binary tree, also need to take into account that there are only 2 child nodes (restriction)
//you can also quickly insert and delete as opposed to array 
//node without child nodes is called a leaf node 
//depth of a tree is number of layers in a tree
//binary search tree has lesser value on left node with right node having bigger value
//remove or insert in big 0 (logn)
//it is unbalanced once it always goes to the left or right thats like a linked list and would be big O(n)

//class for Node
function Node(data, left, right){
  this.data = data;
  //left and right are links to other nodes
  this.left = left;
  this.right = right;
}

Node.prototype.show = function(){
  return this.data;
}

Node.prototype.remove = function(data){
  root = removeNode(this.root, data)
}

Node.prototype.removeNode = function(node, data){
  if (node == null){
    return null;
  } else if (data == node.data){
    //node has no children
    if (node.left == null && node.right == null){
      return null;
    } //node has no left child
    if (node.left == null){
      return node.right;
    } //node has no right child
    if (node.right == null){
      return node.left;
    } // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data){
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

//class for Binary Search Tree
function BST(){
  this.root = null;
}

BST.prototype.insert = function(data){
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

//LNR
BST.prototype.inOrder = function(node){
  if (!(node == null)){
    //left
    this.inOrder(node.left);
    //node
    console.log(node.show() + " ");
    //right
    this.inOrder(node.right);
  }
}

//pre - NLR
BST.prototype.preOrder = function(node){
  if (!(node == null)){
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

//post order is LRN
BST.prototype.postOrder = function(node){
  if (!(node == null)){
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.show() + " ");
  }
}



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);








