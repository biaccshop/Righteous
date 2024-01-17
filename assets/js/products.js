const sellpassCss = '.sellpass-modal {\n' +
    '    position: fixed;\n' +
    '    top: 0;\n' +
    '    left: 0;\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    z-index: 99999;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe-wrapper {\n' +
    '    position: relative;\n' +
    '    margin: auto;\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    z-index: 1;\n' +
    '    opacity: 0;\n' +
    '\n' +
    '    transition: opacity .2s linear;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe-wrapper.show {\n' +
    '    opacity: 1;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe-backdrop {\n' +
    '    background: #00000075;\n' +
    '    backdrop-filter: blur(3px);\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    position: absolute;\n' +
    '}\n' +
    '\n' +
    '.sellpass-iframe {\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    border: none;\n' +
    '}\n' +
    '\n' +
    '.sellpass-spinner {\n' +
    '    display: inline-block;\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '\n' +
    '    transform: translate(-50%, -50%);\n' +
    '    z-index: 2;\n' +
    '    width: 80px;\n' +
    '    height: 80px;\n' +
    '}\n' +
    '.sellpass-spinner div {\n' +
    '    box-sizing: border-box;\n' +
    '    display: block;\n' +
    '    position: absolute;\n' +
    '    width: 64px;\n' +
    '    height: 64px;\n' +
    '    margin: 8px;\n' +
    '    border: 3px solid #fff;\n' +
    '    border-radius: 50%;\n' +
    '    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n' +
    '    border-color: #fff transparent transparent transparent;\n' +
    '}\n' +
    '.sellpass-spinner div:nth-child(1) {\n' +
    '    animation-delay: -0.45s;\n' +
    '}\n' +
    '.sellpass-spinner div:nth-child(2) {\n' +
    '    animation-delay: -0.3s;\n' +
    '}\n' +
    '.sellpass-spinner div:nth-child(3) {\n' +
    '    animation-delay: -0.15s;\n' +
    '}\n' +
    '@keyframes lds-ring {\n' +
    '    0% {\n' +
    '        transform: rotate(0deg);\n' +
    '    }\n' +
    '    100% {\n' +
    '        transform: rotate(360deg);\n' +
    '    }\n' +
    '}\n'


const LoadFunction = () => {

    // Search Box Buttons Listeners
    document.getElementById("search-box").addEventListener("input", function () {
        var searchValue = this.value.toLowerCase();
        var products = document.querySelectorAll(".product-box");
        products.forEach(function (product) {
            var productName = product
                .querySelector(".product-title")
                .textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                product.style.display = "flex";
                product.style.opacity = "0";
                setTimeout(function () {
                    product.style.transition =
                        "opacity 0.2s, transform 0.3s, box-shadow 0.3s";
                    product.style.opacity = "1";
                }, 100);
            } else {
                product.style.display = "none";
            }
        });
    });



    // Category Buttons Listeners
    document.getElementById("category").addEventListener("change", function () {
        var category = this.value;
        var products = document.querySelectorAll(".product-box");
        var matchingProducts = false;

        if (category == "All") {
            products.forEach(function (product) {
                product.style.display = "flex";
                matchingProducts = true;
            });
        } else {
            products.forEach(function (product) {
                if (product.getAttribute("data-category") == category) {
                    product.style.display = "flex";
                    matchingProducts = true;
                } else {
                    product.style.display = "none";
                }
            });
        }

        var noMatchMessage = document.getElementById("no-match-message");
        if (!matchingProducts) {
            noMatchMessage.style.display = "flex";
        } else {
            noMatchMessage.style.display = "none";
        }
    });


    // Selecting Group Boxes
    var productBoxes = document.querySelectorAll('.product-box');

    // Event listener for each product box click
    productBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            var modalId = this.getAttribute('id');
            openModal('modal-' + modalId);
        });
    });

    // Opening Modal
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }



    // Selecting Close Buttons
    var closeButtons = document.querySelectorAll('.modal-close');

    // Event listener for each close button click
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = this.parentNode.parentNode.getAttribute('id');
            closeModal(modalId);
        });
    });

    // Closing Modal
    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    // Closing the modal when the btn-buy button is clicked
    var btnBuyButtons = document.querySelectorAll('.btn-buy');

    btnBuyButtons.forEach(function (btnBuy) {
        btnBuy.addEventListener('click', function (event) {
            event.preventDefault();
            var modalId = this.closest('.modal').getAttribute('id');
            closeModal(modalId);
        });
    });

    // Closing the modal by clicking outside
    window.addEventListener('click', function (event) {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function (modal) {
            if (event.target === modal) {
                var modalId = modal.getAttribute('id');
                closeModal(modalId);
            }
        });
    });

}



// Fetching Products
const loadingBar = document.getElementById('load');
function showLoadingBar() {
    loadingBar.style.display = 'block';
}
function hideLoadingBar() {
    loadingBar.style.display = 'none';
}
function getCatId(data, id) {
    let categoryName = null;

    data.map((gf, i) => {
        gf.listingIds.map((gff, ii) => {
            if (gff == id) {
                categoryName = gf.name;
            }
        });
    });

    return categoryName;
}

function renderGroupsAndProducts(data) {

    const groupData = data.listings;
    const categoryData = data.categories;

    groupData.forEach((group) => {
        // d++
        // console.log(d)
        const groupId = "group" + group.group.id;
        // console.log(groupId)
        // console.log(group)
        const groupDiv = document.createElement('div');
        groupDiv.setAttribute('class', 'product-box');
        groupDiv.setAttribute('id', groupId);
        groupDiv.setAttribute('data-category', getCatId(categoryData, group.id));
        // console.log(getCatId(categoryData,group.id))
        const groupImgDiv = document.createElement('div');
        groupImgDiv.setAttribute('class', 'product-img');

        const groupImgI = document.createElement('i');
        const groupImg = document.createElement('img');
        groupImg.setAttribute('src', 'https://imagedelivery.net/' + group.group.cfImageId + "/productCard");
        groupImg.setAttribute('alt', '');

        groupImgI.appendChild(groupImg);
        groupImgDiv.appendChild(groupImgI);
        groupDiv.appendChild(groupImgDiv);

        const groupTextDiv = document.createElement('div');
        groupTextDiv.setAttribute('class', 'product-text');

        const groupTitleP = document.createElement('p');
        groupTitleP.setAttribute('class', 'product-title');
        groupTitleP.textContent = group.group.title;

        groupTextDiv.appendChild(groupTitleP);
        groupDiv.appendChild(groupTextDiv);

        const groupButtonDiv = document.createElement('div');
        groupButtonDiv.setAttribute('class', 'product-button');

        const groupButtonA = document.createElement('a');
        groupButtonA.setAttribute('class', 'btn btn-product');
        groupButtonA.textContent = 'Starting from $' + group.minPriceDetails.amount;

        groupButtonDiv.appendChild(groupButtonA);
        groupDiv.appendChild(groupButtonDiv);

        // Modal
        const modalId = "modal-" + groupId;
        const modalDiv = document.createElement('div');
        modalDiv.setAttribute('id', modalId);
        modalDiv.setAttribute('class', 'modal');

        const modalContentDiv = document.createElement('div');
        modalContentDiv.setAttribute('class', 'modal-content');

        const modalCloseSpan = document.createElement('span');
        modalCloseSpan.setAttribute('class', 'modal-close');
        modalCloseSpan.innerHTML = '&times;';

        const modalTitleH3 = document.createElement('h3');
        modalTitleH3.textContent = 'Products';

        const modalProductsContentDiv = document.createElement('div');
        modalProductsContentDiv.setAttribute('class', 'modal-products-content');

        group.group.listings.sort((a, b) => a.product.id - b.product.id).forEach((product) => {
            const modalProductDiv = document.createElement('div');
            modalProductDiv.setAttribute('class', 'modal-product');

            const productInformationDiv = document.createElement('div');
            productInformationDiv.setAttribute('class', 'product-information');

            const productImgDiv = document.createElement('div');
            productImgDiv.setAttribute('class', 'img');

            const productImgI = document.createElement('i');
            const productImg = document.createElement('img');
            groupImg.setAttribute('src', 'https://imagedelivery.net/' + product.product.thumbnailCfImageId + "/productCard");
            productImg.setAttribute('src', 'https://imagedelivery.net/' + product.product.thumbnailCfImageId + "/productCard");

            productImg.setAttribute('alt', '');

            productImgI.appendChild(productImg);
            productImgDiv.appendChild(productImgI);
            productInformationDiv.appendChild(productImgDiv);

            const informationDiv = document.createElement('div');
            informationDiv.setAttribute('class', 'information');

            const titleDiv = document.createElement('div');
            titleDiv.setAttribute('class', 'title');

            const productTitleP = document.createElement('p');
            productTitleP.textContent = product.product.title;

            const priceDiv = document.createElement('div');
            priceDiv.setAttribute('class', 'price');

            const productPriceP = document.createElement('p');
            // console.log(product.product.isInStock)
            const stockorno = (a) => {
                if (a) {
                    return `<span class="instock">In Stock`
                } else {
                    return `<span class="nostock">Out of stock`
                }
            }
            productPriceP.innerHTML = 'Price: $' + product.minPriceDetails.amount + ` ${stockorno(product.product.isInStock)}</span>`;

            titleDiv.appendChild(productTitleP);
            priceDiv.appendChild(productPriceP);
            informationDiv.appendChild(titleDiv);
            informationDiv.appendChild(priceDiv);
            productInformationDiv.appendChild(informationDiv);

            const productPurchaseDiv = document.createElement('div');
            productPurchaseDiv.setAttribute('class', 'product-purchase');

            const productPurchaseA = document.createElement('a');
            productPurchaseA.setAttribute('class', 'btn btn-buy');
            productPurchaseA.setAttribute('data-sellpass-product-path', product.path);
            productPurchaseA.setAttribute('data-sellpass-domain', 'fraudify.sellpass.io');
            productPurchaseA.textContent = 'Buy';

            productPurchaseDiv.appendChild(productPurchaseA);
            modalProductDiv.appendChild(productInformationDiv);
            modalProductDiv.appendChild(productPurchaseDiv);
            modalProductsContentDiv.appendChild(modalProductDiv);
        });

        modalContentDiv.appendChild(modalCloseSpan);
        modalContentDiv.appendChild(modalTitleH3);
        modalContentDiv.appendChild(modalProductsContentDiv);
        modalDiv.appendChild(modalContentDiv);

        // Append groupDiv and modalDiv to the document body
        const product = document.querySelector('.products-content');
        product.appendChild(groupDiv);
        product.appendChild(modalDiv);

        // Add click event listener to open modal
        groupDiv.addEventListener('click', () => {
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });

        // Add click event listener to close modal
        modalCloseSpan.addEventListener('click', () => {
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
        });
    });
}
hideLoadingBar();
setTimeout(() => {
    showLoadingBar();
}, 700);
fetch("https://dev.sellpass.io/v2/public/shops/fraudify.sellpass.io/listings", {
    headers: {
        Authorization: "Bearer FUCK YOU"
    }
})

    .then(response => response.json())
    .then(data => {

        // Process the fetched data


        // console.log(data);
        const categoryData = data.data.categories
        const categoryFilterDiv = document.querySelector('#category');
        categoryData.forEach((category, index) => {
            if (category.name == "All") {
                const button = document.createElement('option');
                button.classList.add('none');
                button.textContent = "All Products";
                button.setAttribute('data-category', 'All');
                button.setAttribute('value', 'All');
                categoryFilterDiv.appendChild(button);
            } else {
                const button = document.createElement('option');
                button.classList.add('none');
                button.textContent = category.name;
                button.setAttribute('data-category', category.name);
                button.setAttribute('value', category.name);

                if (index === 0) {
                    button.classList.add('active');
                }

                categoryFilterDiv.appendChild(button);
            }

        });
        hideLoadingBar();
        renderGroupsAndProducts(data.data);
        LoadFunction();
        const embedIframe = () => {
            const buttons = document.querySelectorAll('[data-sellpass-product-path]')
            const modal = document.createElement('div')
            const backdrop = document.createElement('div')
            const spinner = document.createElement('div')
            const styleNode = document.createElement('style')
            const iframe = document.createElement('iframe')
            const iframeWrapper = document.createElement('div')
            styleNode.innerText = sellpassCss
            modal.classList.add('sellpass-modal')
            iframeWrapper.classList.add('sellpass-iframe-wrapper')
            iframe.classList.add('sellpass-iframe')
            backdrop.classList.add('sellpass-iframe-backdrop')
            spinner.classList.add('sellpass-spinner')
            spinner.innerHTML = '<div></div><div></div><div></div><div></div>'
            buttons.forEach(elem => {
                const productId = elem.dataset.sellpassProductPath
                const shopHost = elem.dataset.sellpassDomain
                modal.appendChild(backdrop)
                modal.appendChild(iframeWrapper)
                modal.appendChild(styleNode)
                elem.addEventListener('click', () => {
                    iframe.setAttribute('src', `https://${shopHost}/embed/products/${productId}`)
                    iframeWrapper.appendChild(iframe)
                    modal.appendChild(spinner)
                    document.body.appendChild(modal)
                    iframe.onload = () => {
                        setTimeout(() => {
                            modal.removeChild(spinner)
                            iframeWrapper.classList.add('show')
                        }, 1000)
                    }
                })
            })
            window.addEventListener('message', (event) => {
                if (event.data === 'close-embed') {
                    document.body.removeChild(modal)
                    iframeWrapper.classList.remove('show')
                }
            })
        }
        embedIframe();



    })
    .catch(error => {
        // Handle errors
        console.error(error);
        hideLoadingBar();
    });
