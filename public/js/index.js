const active = (node) => {
    const activeNode = document.querySelector('.active');
    if (activeNode) {
        activeNode.classList.remove('active');
    }
    node.classList.add('active');
};

const toggleTheme = () => {
    let theme = localStorage.getItem("theme");
    if (theme == "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

const detectColorScheme = () => {
    let theme = "dark";
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "light";
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

detectColorScheme();
