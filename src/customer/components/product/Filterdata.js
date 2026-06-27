export const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];


export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "price",
    options: [
      { value: "200-300", label: "৳200 To ৳300", checked: false },
      { value: "300-400", label: "৳300 To ৳400", checked: false },
      { value: "400-500", label: "৳400 To ৳500", checked: true },
      { value: "500-600", label: "৳500 To ৳600", checked: false },
      { value: "600-700", label: "৳600 To ৳700", checked: false },
      { value: "700-800", label: "৳700 To ৳800", checked: false },
      { value: "800-900", label: "৳800 To ৳900", checked: false },
      { value: "900-1000", label: "৳900 To ৳1000", checked: false },
    ],
  },

  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "20", label: "20% and Above", checked: false },
      { value: "30", label: "30% and Above", checked: false },
      { value: "40", label: "40% and Above", checked: false },
      { value: "50", label: "50% and Above", checked: false },
      { value: "60", label: "60% and Above", checked: false },
      { value: "70", label: "70% and Above", checked: true },
    ],
  },

  {
    id: "avalibility",
    name: "avalibility",
    options: [
        {value:"in_stock", label:"In Stock"},
        {value:"out_of_stock", label:"Out Of Stock"}
    ],
  }
];