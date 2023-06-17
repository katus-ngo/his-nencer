const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".menu-left .nav-item a");
const tabContents = $$(".tab-content");
const navbar = $(".nav-bar");

navbar.onclick = () => {
  $(".menu-left .nav").classList.toggle("jump");
};

let activeTab = null; 

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    const tabnum = tab.dataset.tab;
    const listItemsDiagnose = $$(`#tab-${tabnum} .register-diagnose li`);

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((contentItem) =>
      contentItem.classList.remove("active")
    );

    listItemsDiagnose.forEach((item) => {
      item.classList.remove("active");
      item.addEventListener("click", () => {
        const activeItem = $(`#tab-${tabnum} .register-diagnose li.active`);
        activeItem.classList.remove("active");
        item.classList.add("active");
      });
    });

    tab.classList.add("active");
    if (!tabnum) {
      return;
    }
    $("#tab-" + tabnum).classList.add("active");

    listItemsDiagnose[0].classList.add("active");

    activeTab = index;
  });
});


