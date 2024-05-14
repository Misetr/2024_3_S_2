function handleInsert() {
    const key = parseInt(document.getElementById('keyInput').value);
    if (!isNaN(key)) {
        bst.insert(key);
        document.getElementById('output').textContent = 'Node inserted: ' + key;
    } else {
        document.getElementById('output').textContent = 'Please enter a valid number';
    }
}

function handleRemove() {
    const key = parseInt(document.getElementById('keyInput').value);
    if (!isNaN(key)) {
        bst.remove(key);
        document.getElementById('output').textContent = 'Node removed: ' + key;
    } else {
        document.getElementById('output').textContent = 'Please enter a valid number';
    }
}

function handleInorder() {
    const result = bst.inorder();
    document.getElementById('output').textContent = 'Inorder: ' + result.join(', ');
}

function handlePreorder() {
    const result = bst.preorder();
    document.getElementById('output').textContent = 'Preorder: ' + result.join(', ');
}

function handlePostorder() {
    const result = bst.postorder();
    document.getElementById('output').textContent = 'Postorder: ' + result.join(', ');
}
