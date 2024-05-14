    class Node {
        constructor(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(key) {
            const newNode = new Node(key);
            if (!this.root) {
                this.root = newNode;
            } else {
                this._insertNode(this.root, newNode);
            }
        }

        _insertNode(node, newNode) {
            if (newNode.key < node.key) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    this._insertNode(node.left, newNode);
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    this._insertNode(node.right, newNode);
                }
            }
        }

        remove(key) {
            this.root = this._removeNode(this.root, key);
        }

        _removeNode(node, key) {
            if (!node) {
                return null;
            }
            if (key < node.key) {
                node.left = this._removeNode(node.left, key);
                return node;
            } else if (key > node.key) {
                node.right = this._removeNode(node.right, key);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                } else if (!node.right) {
                    return node.left;
                }
                let aux = this._findMinNode(node.right);
                node.key = aux.key;
                node.right = this._removeNode(node.right, aux.key);
                return node;
            }
        }

        _findMinNode(node) {
            while (node && node.left) {
                node = node.left;
            }
            return node;
        }

        inorder() {
            let result = [];
            this._inorder(this.root, result);
            return result;
        }

        _inorder(node, result) {
            if (node) {
                this._inorder(node.left, result);
                result.push(node.key);
                this._inorder(node.right, result);
            }
        }

        preorder() {
            let result = [];
            this._preorder(this.root, result);
            return result;
        }

        _preorder(node, result) {
            if (node) {
                result.push(node.key);
                this._preorder(node.left, result);
                this._preorder(node.right, result);
            }
        }

        postorder() {
            let result = [];
            this._postorder(this.root, result);
            return result;
        }

        _postorder(node, result) {
            if (node) {
                this._postorder(node.left, result);
                this._postorder(node.right, result);
                result.push(node.key);
            }
        }
    }

    const bst = new BinarySearchTree(); // Один раз инициализируем bst
































































