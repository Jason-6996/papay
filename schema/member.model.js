const mongoose = require("mongoose");
const { member_status_enums, member_type_enums } = require("../lib/config");

const memberSchema = new mongoose.Schema({
  mb_nick: {
    type: String,
    required: true,
    index: { unique: true, sparse: true }
  },
  mb_views: {
    type: Number,
    required: false,
    default: 0
  },
  mb_likes: {
    type: Number,
    required: false,
    default: 0
  },
  mb_follow_cnt: {
    type: Number,
    required: false,
    default: 0
  },
  mb_subscriber_cnt: {
    type: Number,
    required: false,
    default: 0
  },
},
  { timestamps: true } // mongodb avtomatik tarzda 2 xil qiymat beradi createdAt va updatedAt ni shu method asosida
);

module.exports = mongoose.model("Member", memberSchema);