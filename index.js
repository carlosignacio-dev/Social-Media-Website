// SideBar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector ('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-1');
const bg3 = document.querySelector('.bg-1');






//  ============================== SideBar ==========================
//  Remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


//  Add active class to menu items when clicked and remove notifications popup 

menuItems.forEach(item => {    
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
          document.querySelector('.notification-popup').
          style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
            style.display = 'block';
            item.querySelector('.notification-count')
            .style.display = 'none';
        }
        
    })
})

//  ============================== Messages ==========================
// Searches chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
      let name = chat.querySelectorAll('h5').textContent.toLowerCase();
      if (name.indexOf(val) != -1) {
        chat.style.display = 'flex';
      } else {
       chat.style.display = 'none';
      }
  })
}

// Search chat
messageSearch.addEventListener('.keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count')
    .style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);    
})

//  ============================== Theme/Display Customization ==========================

// open Modal
const openThemeModal = () => {
     themeModal.style.display = 'grid';
  }

//  theme.addEventListener('click', openThemeModal);

// close Modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// close Modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


//  ============================== Font Size ==========================
// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    

    size.addEventListener('click', () => {
        removeSizeSelector ();
        let fontSize;
        size.classList.toggle('active');
        
    if (size.classList.contains('font-size-1')) {
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left', '-12rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
    }
    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
})

// remove active class from colors
 const changeColorSelector = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // Change primary colors
        changeColorSelector();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
                 primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
                 primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
                 primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
                 primaryHue = 202;
        }
        color.classList.add('active');
        
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// Theme Background Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// Change background color
bg1.addEventListener('click', () => {
    //add active class
    bg1.classList.add('active');    
    //remove active class from other elements
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    //remove customized changes from local storage
    windows.location.reload();
});

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    bg2.classList.add('active');    
    //remove active class from other elements
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    bg3.classList.add('active');    
    //remove active class from other elements
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});

