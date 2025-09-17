const tabsList = [
    {
        id: 1,
        name: 'First Tab',
        content: 'First Tab content to be displayed here.'
    },
    {
        id: 2,
        name: 'Second Tab',
        content: 'Second Tab content to be displayed here.',
    },
    {
        id: 3,
        name: 'Third Tab',
        content: 'Third Tab content to be displayed here.'
    },
    {
        id: 4,
        name: 'Fourth Tab',
        content: 'Fourth Tab content to be displayed here.'
    }
]





function createTabs(tabsData) {

    const handleClick = (event) => {
        const tabContent = tabsList.find((elem) => elem.id === Number(event.target.dataset.id)).content
        contentHolder.textContent = tabContent
        event.target.classList.add('active');
        activeTab.classList.remove('active');
        activeTab = event.target
    }

    const tabs = tabsData.map((elem) => {
        const tab = document.createElement('button');
        tab.textContent = elem.name;
        tab.dataset.id = elem.id
        tab.addEventListener('click', handleClick);
        return tab
    })
    return tabs
}

function renderTabs(tabs) {
    const dummyData = document.createElement('p');

    // Default view
    tabs[0].classList.add('active');
    contentHolder.textContent = tabsList[0].content

    tabs.forEach((tab) => {
        header.appendChild(tab);
    })
    dummyData.textContent = 'Clicking each tab should hide the content of the other tab and show the content of clicked tab. By default, enable the first tab'
    header.appendChild(dummyData)
}



const tabs = createTabs(tabsList);
const contentHolder = document.querySelector('.content-holder')
const header = document.querySelector('header');

let activeTab = tabs[0]
renderTabs(tabs)