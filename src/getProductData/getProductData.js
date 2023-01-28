const getProductData = async () => {
    const res = await fetch("https://wehatbazar.thecell.tech/api/product?include=media", {
        method: "GET",
        headers: {
            'content-type': "application/json",
            "X-Requested-With": "XMLHttpRequest",
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = await res.json();
    return data
    // console.log(data)
}

export default getProductData;
