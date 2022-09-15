const active = (node) => {
    const activeNode = document.querySelector('.active');
    if (activeNode) {
        activeNode.classList.remove('active');
    }
    node.classList.add('active');
};

const toggleTheme = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}
