const MyVisitor = {
    FunctionDeclaration(path) {
        console.log(path)
    },
};