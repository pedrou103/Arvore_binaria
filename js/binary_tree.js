class BinaryTree{
    // inicializa a raiz como nula
    constructor(){
        this.root = null; //o root começa nula
    }

    //exibe o menor valor da arvore
    min(){
        let i = this.root;
        while(i.left != null)
            i = i.left;
        return i.content;
    }

    //exibe o maior valor da arvore
    max(){
        let i = this.root;
        while(i.right != null)
            i = i.right;
        return i.content;
    }

    //insere o elemento da arvores
    insert(element) {
        this.root = this.recursiveInsertion(element);
    }

    recursiveInsertion(value, node = this.root){ //se eu ñ passar nd considera q é o root o index
        if(!node) {
            return new Node(value);
        }
        if(value < node.content) {
            //manda inserir na esquerda
            node.left = this.recursiveInsertion(value, node.left);
        } else {
            //manda inserir na direita
            node.right = this.recursiveInsertion(value,node.right);
        }
        return node;
    }

    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback){
        this.recursiveInOrderTraverse(callback, this.root);
    }

    recursiveInOrderTraverse(callback, node) { // E R D
        if (!node) return;
        this.recursiveInOrderTraverse(callback, node.left);
        callback(node.content);
        this.recursiveInOrderTraverse(callback, node.right);
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback){
        this.recursivePreOrderTraverse(callback, this.root);
    }

    recursivePreOrderTraverse(callback, node) {
        if(!node) return;
        callback(node.content);
        this.recursivePreOrderTraverse(callback, node.left);
        this.recursivePreOrderTraverse(callback, node.right);
    }
    
    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback){
        this.recursivePosOrderTraverse(callback, this.root);
    }

    recursivePosOrderTraverse(callback, node){
        if(!node) return;
        this.recursivePosOrderTraverse(callback, node.left);
        this.recursivePosOrderTraverse(callback, node.right);
        callback(node.content);
    }

    //retorna true se o valor já existe na arvore
    search(value){
        return this.recursiveSearch(value, this.root);
    }

    recursiveSearch(value, node) {
        if (!node)
            return false;
        if (value == node.content)
            return true;
        if (value < node.content)
            return this.recursiveSearch(value, node.left);
        return this.recursiveSearch(value, node.right);
    }
    
    //remove um elemento existente na arvore o retorna
    remove(value){
        this.root = this.recursiveRemove(value, this.root);
    }

    recursiveRemove(value, node) {
        if(!node) return null;

        if(value == node.content) {
            //lógica de remoção
            if(node.left == node.right) {
                //(node.left == null && node.right == null)
                node = null;
            } else if (node.left == null) {
                node = node.right;
            } else if (node.right == null) {
                node = node.left;
            } else {
                let i = node.right;
                while(i.left != null)
                    i = i.left;
                i.left = node.left;
                node = node.right;
            }
        } else if(value < node.content) {
            node.left = this.recursiveRemove(value, node.left);
        } else {
            node.right = this.recursiveRemove(value, node.right);
        }
        return node;
    }

    //exibe a altura da arvore
    height(){
        return this.recursiveHeight(this.root);
    }

    recursiveHeight(node) {
        if (!node) return -1;
        
        const sizeOfLeft = this.recursiveHeight(node.left);
        const sizeOfRight = this.recursiveHeight(node.right);
        
        if (sizeOfLeft > sizeOfRight){
            return 1 + sizeOfLeft;
        } else {
            return 1 + sizeOfRight;
        }
    }

    // informa quantos nós existem na arvore
    size(){
        return this.recursiveSize(this.root);
    }

    recursiveSize(node) {
        if (!node) return 0;

        const sizeLeft = this.recursiveSize(node.left);
        const sizeRight = this.recursiveSize(node.right);

        const sum = sizeLeft + sizeRight + 1;
        return sum;
    }
}