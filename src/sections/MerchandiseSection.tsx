import MerchCarousel from "@/components/card/merch/MerchCarousel";

export default function MerchandiseSection() {
  return <MerchCarousel merchs={Merchs} />;
}

const Merchs = [
  {
    id: 1,
    name: "Black T-Shirt",
    desc: "Lorem ipsum dolor sit amet, consectet",
    image: "/vercel.svg",
    price: 10232,
    varient: [
      { stock: 25, color: "#5e5421", size: "xl", price: 100, suk: "3d3q2es2" },
      { stock: 3, color: "blue", size: "l", price: null, suk: "3d3dqs2" },
      { stock: 7, color: "pink", size: "l", price: 100, suk: "3xed3s2" },
      { stock: 10, color: "red", size: "xxl", price: 100, suk: "3d3sxdw2" },
    ],
  },
  {
    id: 2,
    name: "Merchandise 2",
    desc: "Lorem ipsum dolor sit amet, consectet",
    image: "/vercel.svg",
    price: 10,
    varient: [
      { stock: 25, color: "white", size: "xl", price: 100, suk: "3d3q2es2" },
      { stock: 3, color: "blue", size: "l", price: 100, suk: "3d3dqs2" },
      { stock: 7, color: "pink", size: "m", price: 100, suk: "3xed3s2" },
      { stock: 10, color: "red", size: "xxl", price: null, suk: "3d3sxdw2" },
    ],
  },
  {
    id: 3,
    name: "Merchandise 3",
    desc: "Lorem ipsum dolor sit amet, consectet",
    image: "/vercel.svg",
    price: 10,
    varient: [
      { stock: 7, color: "pink", size: "m", price: 100, suk: "3xed3s2" },
      { stock: 25, color: "red", size: "xl", price: 100, suk: "3d3q2es2" },
      { stock: 3, color: "blue", size: "l", price: 100, suk: "3d3dqs2" },
      { stock: 10, color: "red", size: "xxl", price: null, suk: "3d3sxdw2" },
    ],
  },
  {
    id: 4,
    name: "Merchandise 4",
    desc: "Lorem ipsum dolor sit amet, consectet",
    image: "/vercel.svg",
    price: 10,
    varient: [
      { stock: 25, color: "red", size: "xl", price: 100, suk: "3d3q2es2" },
      { stock: 3, color: "blue", size: "l", price: 100, suk: "3d3dqs2" },
      { stock: 7, color: "pink", size: "m", price: 100, suk: "3xed3s2" },
      { stock: 10, color: "red", size: "xxl", price: null, suk: "3d3sxdw2" },
    ],
  },
  {
    id: 5,
    name: "Merchandise 5",
    desc: "Lorem ipsum dolor sit amet, consect",
    image: "/vercel.svg",
    price: 10,
    varient: [
      { stock: 25, color: "red", size: "xl", price: 100, suk: "3d3q2es2" },
      { stock: 3, color: "blue", size: "l", price: 100, suk: "3d3dqs2" },
      { stock: 7, color: "pink", size: "xl", price: 100, suk: "3xed3s2" },
      { stock: 10, color: "red", size: "xxl", price: null, suk: "3d3sxdw2" },
    ],
  },
  {
    id: 6,
    name: "Merchandise 6",
    desc: "Lorem ipsum dolor sit amet, consectet",
    image: "/vercel.svg",
    price: 10,
    varient: [
      { stock: 25, color: "red", size: "xl", price: 100, suk: "3d3q2es2" },
      { stock: 3, color: "blue", size: "l", price: 100, suk: "3d3dqs2" },
      { stock: 7, color: "pink", size: "m", price: 100, suk: "3xed3s2" },
      { stock: 10, color: "red", size: "xxl", price: null, suk: "3d3sxdw2" },
    ],
  },
];
