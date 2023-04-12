const { db } = require("../config/config");
//cart get

const getCartItems = async (req, res) => {
  try {
    const result = await db.query(`
    SELECT * FROM cart_shop
    
    `);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//cart add
const addItem = async (req, res) => {
  const { product_id } = req.body;
  console.log('TESTADD',product_id)

  try {
    const cart = await db.query("SELECT * FROM cart_shop");
    console.log(cart);
    const existing = cart.find((item) => item.product_id === product_id);
    console.log(existing);
    let result;

    if (!existing) {
      console.log("Not Existing")
      let quantity = 1;
      result = await db.query(
        "INSERT INTO cart_shop (product_id, quantity) VALUES ($1, $2) RETURNING *",
        [product_id, quantity]
      );
      console.log(result);
    } else {
      result = await db.query(
        "UPDATE cart_shop SET quantity = quantity + 1 WHERE  product_id = $1 RETURNING *",
        [product_id]
      );
      console.log(result);
    }
    console.log(req.body);
    console.log(product_id);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//delete cart item
const deleteItem = async (req, res) => {
  const { product_id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM cart_shop WHERE product_id = $1 RETURNING *",
      [product_id]
    );
    console.log(result);
    res
      .status(200)
      .json({ success: true, message: "Item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// increment item quantity by 1
const increaseItemQuantity = async (req, res) => {
  const { product_id } = req.body;

  try {
    const result = await db.query(
      "update cart_shop set quantity = quantity + 1 where  cart_shop.product_id = $1",
      [product_id]
    );
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// decrement item quantity by 1
const decreaseItemQuantity = async (req, res) => {
  const { product_id } = req.body;
  try {
    const result = await db.query(
      "update cart_shop set quantity = quantity - 1 where  cart_shop.product_id = $1",
      [product_id]
    );
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = {
  getCartItems,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
};