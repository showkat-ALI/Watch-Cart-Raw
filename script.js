
        let cart = [];
        const products = [
            {
                id: 1, image: './Resource/purple.jfif', name: "Classy Modern Smart watch", prizing: [
                    { size: "XXS", price: 100, },
                    { size: "XS", price: 200, }, { size: "S", price: 300, }, { size: "M", price: 400 }
                ],
                rating: 4,
                type: "watch",
                modelNumber: "NXd112455",
                description: "1 ATM Water Resistant, 1 Year Warranty on Watch Movement, 1 Year Warranty for Battery, 6 Months Warranty on Strap Against Any Manufacturing Defects from the Date of Purchase",
                color: "purple"
            },
            {
                id: 2, image: './Resource/cyan.jfif ', name: "Supar Classy Modern Smart watch", prizing: [
                    { size: "XXS", price: 100, },
                    { size: "XS", price: 200, }, { size: "S", price: 300, }, { size: "M", price: 400 }
                ],
                rating: 5,
                type: "watch",
                modelNumber: "NXd112455",
                description: "2 ATM Water Resistant, 1 Year Warranty on Watch Movement, 1 Year Warranty for Battery, 6 Months Warranty on Strap Against Any Manufacturing Defects from the Date of Purchase.",
                color: "cyan"
            },
            {
                id: 3, image: './Resource/blue.jfif', name: "Ultra Classy Modern Smart watch", prizing: [
                    { size: "XXS", price: 100, },
                    { size: "XS", price: 200, }, { size: "S", price: 300, }, { size: "M", price: 400 }
                ],
                rating: 3,
                type: "watch",
                modelNumber: "NXd112455",
                description: " 3 ATM Water Resistant, 1 Year Warranty on Watch Movement, 1 Year Warranty for Battery, 6 Months Warranty on Strap Against Any Manufacturing Defects from the Date of Purchase, Battery Type: CR2032.",
                color: "blue"
            },
            {
                id: 4, image: './Resource/black.jfif', name: "Western Modern Smart watch", prizing: [
                    { size: "XXS", price: 100, },
                    { size: "XS", price: 200, }, { size: "S", price: 300, }, { size: "M", price: 400 }
                ],
                rating: 3,
                type: "watch",
                modelNumber: "NXd112455",
                description: " 3 ATM Water Resistant, 1 Year Warranty on Watch Movement, 1 Year Warranty for Battery, 6 Months Warranty on Strap Against Any Manufacturing Defects from the Date of Purchase, Battery Type: CR2032.",
                color: "black"
            }
        ];
        document.getElementById('cartItems').addEventListener('click', () => {
            showCartItems();
            document.getElementById('modelConfirm').classList.remove('hidden');
        });

        document.querySelectorAll('input[name="color-choice"]').forEach((input) => {
            input.addEventListener('change', (event) => {
                const selectedColor = event.target.value;
                changeImage(selectedColor);
                updateSizeOptions(selectedColor);
                showWatchRating(selectedColor);
                updateReviewNumber(selectedColor);
            });
        });

        function updateSizeOptions(color) {
            const sizeOptionsContainer = document.getElementById('sizeOptions');
            sizeOptionsContainer.innerHTML = ''; // Clear existing options

            const product = products.find(product => product.color === color);
            if (product) {
                product.prizing.forEach(prize => {
                    const sizeOption = document.createElement('label');
                    sizeOption.classList.add('relative', 'flex', 'items-center', 'justify-center', 'rounded-md', 'border', 'py-[18px]', 'px-[8px]', 'uppercase', 'hover:bg-gray-50', 'focus:outline-none', 'cursor-pointer');
                    sizeOption.innerHTML = `
            <input type="radio" name="size-choice" value="${prize.size}" class="sr-only" style="">
            <span class="text-[13px]"> <span class="mr-[5px] font-bold size-text" style="color: #364A63;">${prize.size}</span> <span class="text-[#8091A7]">$${prize.price} </span></span>
            `;
                    sizeOption.addEventListener('click', () => {
                        document.querySelectorAll('.size-text').forEach(el => el.style.color = '#364A63');
                        sizeOption.querySelector('.size-text').style.color = '#6576FF';
                    });
                    sizeOptionsContainer.appendChild(sizeOption);
                });

                // Update type and model number
                document.getElementById('type').innerText = product.type;
                document.getElementById('modelNumber').innerText = product.modelNumber;
            }
        }

        document.getElementById('addToBag').addEventListener('click', () => {
            calculateTotalPrice();
        });

        document.getElementById('cartItems').addEventListener('click', () => {
            calculateTotalPrice();
        });

        function changeImage(color) {
            const product = products.find(product => product.color === color);
            if (product) {
                document.getElementById('watchImage').src = product.image;
                document.getElementById('watchName').innerText = product.name;
                document.getElementById('watchDescription').innerText = product.description;
            }
        }

        function showWatchRating(color) {
            const watchRatingContainer = document.getElementById('watchRatting');
            watchRatingContainer.innerHTML = ''; // Clear existing rating

            const product = products.find(product => product.color === color);
            if (product) {
                const rating = Math.min(product.rating, 5); // Limit rating to max 5
                for (let i = 0; i < 5; i++) {
                    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    star.setAttribute('class', `size-5 shrink-0 ${i < rating ? 'text-[#FFD200]' : 'text-gray-200'}`);
                    star.setAttribute('viewBox', '0 0 18 19');
                    star.setAttribute('fill', 'currentColor');
                    star.setAttribute('aria-hidden', 'true');
                    star.innerHTML = `
           <path d="M16.4633 7.75627C16.374 7.48702 16.1438 7.28827 15.8625 7.24627L15.8588 7.24552L11.5845 6.62077L9.67275 2.74777C9.53475 2.51602 9.285 2.36377 9 2.36377C8.715 2.36377 8.466 2.51602 8.3295 2.74402L8.32725 2.74777L6.4155 6.62077L2.14125 7.24552C1.776 7.30027 1.5 7.61152 1.5 7.98802C1.5 8.19877 1.587 8.38852 1.7265 8.52502L4.8195 11.5378L4.08975 15.7925C4.083 15.8308 4.07925 15.8743 4.07925 15.9193C4.07925 16.3333 4.41525 16.6693 4.82925 16.6693C4.95675 16.6693 5.0775 16.637 5.1825 16.5808L5.17875 16.583L9.00075 14.5723L12.8228 16.583C12.924 16.637 13.044 16.6693 13.1723 16.6693C13.5863 16.6693 13.9223 16.3333 13.9223 15.9193C13.9223 15.8743 13.9185 15.8308 13.911 15.788L13.9118 15.7925L13.182 11.5378L16.275 8.52502C16.4145 8.38852 16.5015 8.19877 16.5015 7.98802C16.5015 7.90552 16.488 7.82527 16.4633 7.75102L16.4648 7.75627H16.4633Z" fill="${i < rating ? '#FFD200' : '#E5E7EB'}"/>
            `;
                    watchRatingContainer.appendChild(star);
                }
            }
        }

        function updateReviewNumber(color) {
            const product = products.find(product => product.color === color);
            if (product) {
                document.getElementById('revNumber').innerText = `(${product.rating} Reviews )`;
            }
        }



        function removeFromCart(color, size) {
            cart = cart.filter(item => !(item.color === color && item.size === size));
            updateCartDisplay();
            showCartItems();
            calculateTotalPrice();
        }

        function removeOneFromCart(color, size) {
            const itemIndex = cart.findIndex(item => item.color === color && item.size === size);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                updateCartDisplay();
                showCartItems();
                calculateTotalPrice();
            }
        }
        function openModal(modalId) {
          document.getElementById(modalId).style.display = 'block'
          document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
      }

      function closeModal(modalId) {
          document.getElementById(modalId).style.display = 'none';
          document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
      }

      // Close all modals when press ESC
      document.onkeydown = function (event) {
          event = event || window.event;
          if (event.keyCode === 27) {
              document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
              let modals = document.querySelectorAll('.fixed.hidden');
              modals.forEach(modal => {
                  modal.style.display = 'none';
              });
          }
      };

        function showCartItems() {
            const modalContent = document.getElementById('cartItemsTable');
            modalContent.innerHTML = ''; // Clear the current modal content

            const productCounts = countProductQuantities();
            let totalQuantity = 0;
            let totalPrice = 0;

            Object.values(productCounts).forEach(item => {
                const product = products.find(product => product.color === item.color);
                const price = product.prizing.find(prize => prize.size === item.size).price;
                const itemTotalPrice = price * item.quantity;
                totalQuantity += item.quantity;
                totalPrice += itemTotalPrice;

                const row = document.createElement('tr');
                row.classList.add('bg-white', 'border-b', 'transition', 'duration-300', 'text-[#364A63]', 'ease-in-out', 'hover:bg-gray-100');
                row.innerHTML = `
                <td class="py-6 whitespace-nowrap font-medium">
                <div class="flex items-center">
                    <img src="${item.image}" alt="${item.color}" class="w-[36px] height-[36px] rounded-lg">
                    <p class="font-thin ml-[5px]">${item.name}</p>
                </div>
                </td>
                <td class="py-6 whitespace-nowrap">${item.color}</td>
                <td class="font-extrabold py-6 whitespace-nowrap">${item.size}</td>
                <td class="font-extrabold py-6 whitespace-nowrap">${item.quantity}</td>
                <td class="font-extrabold py-6 whitespace-nowrap">$${itemTotalPrice}</td>
                <td>
                <button onclick="removeOneFromCart('${item.color}', '${item.size}')" class="text-red-500 hover:text-red-700">Remove One</button>
                </td>
                <td>
                <button onclick="removeFromCart('${item.color}', '${item.size}')" class="text-red-500 hover:text-red-700">Remove All</button>
                </td>
            `;
                modalContent.appendChild(row);
            });

            const totalRow = document.createElement('tr');
            totalRow.classList.add('bg-white', 'border-t', 'transition', 'duration-300', 'text-[#364A63]', 'ease-in-out', 'hover:bg-gray-100');
            totalRow.innerHTML = `
            <td class="py-6 whitespace-nowrap font-bold" colspan="3">Total</td>
            <td class="font-extrabold py-6 whitespace-nowrap">${totalQuantity}</td>
            <td class="font-extrabold py-6 whitespace-nowrap">$${totalPrice.toFixed(2)}</td>
            <td colspan="2"></td>
            `;
            modalContent.appendChild(totalRow);

            calculateTotalPrice();
        }

        function removeOneFromCart(color, size) {
            const itemIndex = cart.findIndex(item => item.color === color && item.size === size);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                updateCartDisplay();
                showCartItems();
                calculateTotalPrice();
            }
        }



        function updateCartDisplay() {
            const itemCount = cart.length;
            const cartItems = document.getElementById('cartItemsNumber');
            cartItems.innerText = ` ${itemCount}`;
        }

        function addToCart() {
            const selectedColor = document.querySelector('input[name="color-choice"]:checked');
            const selectedSize = document.querySelector('input[name="size-choice"]:checked');
            const quantity = parseInt(document.getElementById('quantity').innerText);

            if (!selectedColor || !selectedSize) {
                alert('Please select a color and size.');
                return;
            }

            if (quantity <= 0) {
                alert('Please increment the quantity to add to cart.');
                return;
            }

            updateCartDisplay();
            document.getElementById('quantity').innerText = 0;
            console.log(cart); // Show selected cart items in console
        }

        document.getElementById('addToBag').addEventListener('click', () => {
            const cartItems = document.getElementById('cartItems');
            if (cart.length > 0) {
                cartItems.style.display = 'block';
            } else {
                cartItems.style.display = 'none';
            }
        });




        function countProductQuantities() {
            const productCounts = {};

            cart.forEach(item => {
                const key = `${item.color}-${item.size}`;
                if (productCounts[key]) {
                    productCounts[key].quantity += 1;
                } else {
                    productCounts[key] = { ...item, quantity: 1 };
                }
            });

            return productCounts;
        }

        function increaseQuantity() {
            const selectedColor = document.querySelector('input[name="color-choice"]:checked');
            const selectedSize = document.querySelector('input[name="size-choice"]:checked');

            if (!selectedColor || !selectedSize) {
                alert('Please select a color and size.');
                return;
            }

            document.getElementById('quantity').innerText = parseInt(document.getElementById('quantity').innerText) + 1;

            const cartItem = {
                id: Date.now(),
                image: document.getElementById('watchImage').src,
                name: document.getElementById('watchName').innerText,
                color: selectedColor.value,
                size: selectedSize.value,
                description: selectedSize.value,
            };
            cart.push(cartItem);
            updateCartDisplay();
            calculateTotalPrice();
        }

        function decreaseQuantity() {
            const selectedColor = document.querySelector('input[name="color-choice"]:checked');
            const selectedSize = document.querySelector('input[name="size-choice"]:checked');

            if (!selectedColor || !selectedSize) {
                alert('Please select a color and size.');
                return;
            }

            const quantityElement = document.getElementById('quantity');
            const currentQuantity = parseInt(quantityElement.innerText);

            if (currentQuantity > 0) {
                quantityElement.innerText = currentQuantity - 1;

                const itemIndex = cart.findIndex(item => item.color === selectedColor.value && item.size === selectedSize.value);
                if (itemIndex !== -1) {
                    cart.splice(itemIndex, 1);
                    updateCartDisplay();
                    calculateTotalPrice();
                }
            } else {
                alert('Quantity cannot be less than zero.');
            }
        }

        function calculateTotalPrice() {
            let totalPrice = 0;
            let totalQuantity = 0;
            const productCounts = countProductQuantities();

            Object.values(productCounts).forEach(item => {
                const product = products.find(product => product.color === item.color);
                if (product) {
                    const price = product.prizing.find(prize => prize.size === item.size).price;
                    totalPrice += price * item.quantity;
                    totalQuantity += item.quantity;
                }
            });


        }

        document.getElementById('addToBag').addEventListener('click', () => {
            calculateTotalPrice();
        });

        document.getElementById('cartItems').addEventListener('click', () => {
            calculateTotalPrice();
        });

        // Show the first item by default
        document.addEventListener('DOMContentLoaded', () => {
            const firstProduct = products[0];
            changeImage(firstProduct.color);
            updateSizeOptions(firstProduct.color);
            showWatchRating(firstProduct.color);
            updateReviewNumber(firstProduct.color);
            document.querySelector(`input[name="color-choice"][value="${firstProduct.color}"]`).checked = true;
            document.getElementById('watchDescription').innerText = firstProduct.description;

            // Hide cartItems if addToBag button is not clicked
            document.getElementById('cartItems').style.display = 'none';
        });
    
