import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"  // Phải là "User" để khớp với tên mô hình chính xác (phân biệt chữ hoa chữ thường)
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "Deliver", "Cancel"]
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
