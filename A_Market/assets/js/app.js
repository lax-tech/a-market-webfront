const allBtnAddToCart = document.querySelectorAll(".btn-add-to-cart")
allBtnAddToCart.forEach(btn=>{
    console.log(btn)
    btn.addEventListener("click", event=>{
        console.log("Tu as cliqué")

        const url='/cart/' + (getCookie("cart_id")||0) + '/'
        axiosInstance.post(url, {
                type: 'add_product_to_cart',
                content : {
                    product_id : btn.getAttribute('data-id')
                }
        }).then((res) => {
            console.log(res)
            console.log(res.data)
            })
    })
    btn.querySelector("a").addEventListener("click", event=>{
        event.preventDefault()
    })
})

