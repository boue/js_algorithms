//code.stephenmorley.org
function Queue(){var a=[],b=0;this.getLength=function(){return a.length-b};this.isEmpty=function(){return 0==a.length};this.enqueue=function(b){a.push(b)};this.dequeue=function(){if(0!=a.length){var c=a[b];2*++b>=a.length&&(a=a.slice(b),b=0);return c}};this.peek=function(){return 0<a.length?a[b]:void 0}};

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

Tree.prototype.traverseBF = function(callback){
  var queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while(currentTree){
    for(var i = 0, length = currentTree.children.length; i < length; i++){
      queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function(callback, traversal){
  //binds to tree that called it and callback function is invoked on every node in tree
  traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal){
  //toData is to compare against every node in tree
  var child = new Node(data), 
      parent = null,
      //callback to reassign parent
      callback = function(node){
        if (node.data === toData){
          parent = node;
        }
      };
  //comparison happens here
  this.contains(callback, traversal);

  if(parent){
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add node to a non-existent parent. ');
  }
};

function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].data === data) {
          index = i;
      }
    }
    return index;
};

Tree.prototype.remove = function(data, fromData, traversal){
  var tree = this,
      parent = null,
      childToRemove = null,
      index;
  var callback = function(node){
    if(node.data === fromData){
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent){
    index = findIndex(parent.children, data);

    if (index === undefined){
      throw new Error('Node to remove does not exist. ');
    } else{
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('Parent does not exist. ');
  }
  return childToRemove;
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

//log to console all nodes contain data with an odd number and traverse every node in tree BFS
tree.contains(function(node){
  if(node.data === 'two'){
    console.log(node);
  }
}, tree.traverseBF);