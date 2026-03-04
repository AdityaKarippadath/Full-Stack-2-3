function fetchProduct(productId) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; 
        console.log(`Fetching product ID: ${productId} (delay: ${delay}ms)...`);

        setTimeout(() => {
            if (typeof productId !== "number" || productId <= 0) {
                reject(`Invalid product ID: ${productId}`);
            } else if (productId === 2) { 
                reject(`Product ${productId} is out of stock.`);
            } else {
                resolve({
                    productId: productId,
                    name: `Product ${productId}`
                });
            }
        }, delay);
    });
}

async function fetchMultipleProducts(productIds) {
    try {
        const products = await Promise.all(productIds.map(id => fetchProduct(id)));
        console.log("Fetched products:");
        products.forEach(p => console.log(`- ${p.name}`));
    } catch (error) {
        console.log("Error while fetching products:", error);
    }
}

fetchMultipleProducts([1, 3, 4]);

fetchMultipleProducts([1, 2, 3]);