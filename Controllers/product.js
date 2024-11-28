import Product from "../Models/Product.js";

// Add product
export const addProduct = async (req, res) => {
    const {  name,
        shortDescription,
        bestSellingRank,
        thumbnailImage,
        salePrice,
        manufacturer,
        url,
        type,
        image,
        customerReviewCount,
        shipping,
        salePrice_range,
        objectID,
        categories } = req.body;

    // Validate request body
   
    try {
        const product = await Product.create({
            name,
            shortDescription,
            bestSellingRank,
            thumbnailImage,
            salePrice,
            manufacturer,
            url,
            type,
            image,
            customerReviewCount,
            shipping,
            salePrice_range,
            objectID,
            categories
        });
        res.status(201).json({ message: 'Product added successfully!', product });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// get products
export const getProducts = async (req,res) =>{
    let products = await Products.find().sort({createdAt:-1})
    res.json({message:'All products',products})
}


// find product by id
export const getProductById = async (req, res) => {
    const id = req.params.id;
  let product = await Products.findById(id)
  if(!product) return res.json({message:'Invalid Id'})
  res.json({ message: "Specific product", product });
};

// update product by id
export const updateProductById = async (req, res) => {
    const id = req.params.id;
  let product = await Products.findByIdAndUpdate(id,req.body,{new:true})
  if(!product) return res.json({message:'Invalid Id'})
  res.json({ message: "Product has been updated", product });
};

// delete product by id
export const deleteProductById = async (req, res) => {
    const id = req.params.id;
  let product = await Products.findByIdAndDelete(id)
  if(!product) return res.json({message:'Invalid Id'})
  res.json({ message: "Product has been deleted", product });
}; 