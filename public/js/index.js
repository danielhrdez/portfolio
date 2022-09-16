const active = (node) => {
    const activeNode = document.querySelector('.active');
    if (activeNode) {
        activeNode.classList.remove('active');
    }
    node.classList.add('active');
};

const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme && theme == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    console.log(theme);
}

const detectColorScheme = () => {
    let theme = "light";
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme");
    } else if (!window.matchMedia) {
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    }
    console.log(theme);
    localStorage.setItem("theme", theme);
}
detectColorScheme();
