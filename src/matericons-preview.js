Defer(function () {
    const url = "https://cdn.jsdelivr.net/gh/elhakimyasya/Matericons@latest/dist/matericons.json";
    const postBody = document.querySelector('#post_body');

    window.easyToggleState();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        // Parse the JSON data
        const data = JSON.parse(xhr.responseText);

        let itemData = '';
        // Loop through each data element and display it using innerHTML
        data.forEach((item) => {
            const itemID = item.id;
            const itemIDAlt1 = itemID.toLowerCase().replace(/[-_]/g, "_");
            const itemName = item.name;
            const itemNameAlt1 = itemName.replace(/[-_]/g, " ");
            const itemTags = item.tags;
            const itemTagsAlt = itemTags.join(" ").replace(/[-_]/g, " ");
            const itemPath = item.data;

            itemData += `<button class="btn_icon_pack elcreative_button_icon" type="button" data-toggle-class-on-target="active" data-toggle-target="#dialog_icons" aria-controls="dialog_icons" aria-expanded="false" aria-haspopup="listbox" data-toggle-outside id="button_icon_${itemIDAlt1}" title='${itemName}' data-title='${itemNameAlt1}' data-tags="icon_${itemName} ${itemNameAlt1} ${itemIDAlt1} ${itemTagsAlt}"><svg width='30' height='30' viewBox='0 0 24 24' fill='currentColor'><path d='${itemPath}'></path></svg></button>`;

        });

        postBody.querySelector('.grid').innerHTML = itemData;
        postBody.querySelector('.loader_icons_pack').remove();
        snackbar(`Loading ${data.length} Icons...`, 4000)

        window.easyToggleState();

        const buttonIconPack = postBody.querySelectorAll('.btn_icon_pack');
        buttonIconPack.forEach((element) => {
            element.addEventListener('click', function (event) {
                event.preventDefault();

                const title = this.getAttribute('data-title');
                const path = this.querySelector('path').getAttribute('d');

                postBody.querySelector('#dialog_icons .dialog_header span').innerHTML = title;
                postBody.querySelector('#dialog_icons .dialog_content #icons path').setAttribute('d', path);
                postBody.querySelector('#dialog_icons .dialog_content #icon_path').innerText = path;
                postBody.querySelector('#dialog_icons .dialog_content #icon_path_svg').innerText = `<svg width="24" height="24" viewBox="0 0 24 24"><path d="${path}"></path></svg>`
            });

            element.addEventListener("toggleAfter", (event) => {
                if (window.easyToggleState.isActive(event.target)) {
                    document.documentElement.classList.add('overflow-hidden')
                } else {
                    document.documentElement.classList.remove('overflow-hidden')
                }
            });
        });

        const inputSearch = postBody.querySelector('#icon_search');
        inputSearch.addEventListener('keyup', () => {
            const inputValue = inputSearch.value.toLowerCase();
            const inputValueRegex = new RegExp(inputValue, "i");

            let inputIconAttrTitle = '';
            buttonIconPack.forEach((element) => {
                inputIconAttrTitle = element.getAttribute('data-tags').toLowerCase();

                // console.log(inputValue)
                if (inputIconAttrTitle.match(inputValueRegex)) {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
        })
    })

    // Open the XMLHttpRequest and send the request
    xhr.open('GET', url, true);
    xhr.send();
}, 1500);