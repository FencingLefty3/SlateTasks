console.log("CSS SCRIPT LOADED")

export function timeTheme() {
    const currentHour = 19 //new Date().getHours();

    document.body.classList.remove(
        "night-mode",
        "rise-mode",
        "set-mode"
    );

    if (currentHour >= 18 || currentHour < 5) {
        document.body.classList.add("night-mode");
    } else if (currentHour >= 5 && currentHour < 7) {
        document.body.classList.add("rise-mode");
    } else if (currentHour >= 17 && currentHour < 18) {
        document.body.classList.add("set-mode");
    } else if (currentHour >= 7 && currentHour < 17) {
    document.body.classList.add("afternoon-mode");
    } else {
        document.body.classList.add(":root");
    }
}

export function startThemeSystem() {
    timeTheme();
    setInterval(timeTheme, 60000);
}
